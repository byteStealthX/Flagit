# 🏗️ Architecture Overview

## System Design

AntiGravity is a stateless, AI-powered URL threat detection service built on a simple yet robust architecture.

---

## High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        Client Layer                         │
│  (Web App, Mobile App, Browser Extension, API Consumers)   │
└────────────────────────┬────────────────────────────────────┘
                         │
                         │ HTTPS POST /api/verify
                         │ { url, context }
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                     AntiGravity Backend                     │
│                    (Node.js + Express)                      │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │              Request Handler Layer                   │  │
│  │  • CORS Middleware                                   │  │
│  │  • Body Parser                                       │  │
│  │  • Input Validation                                  │  │
│  └────────────────────┬─────────────────────────────────┘  │
│                       │                                     │
│                       ▼                                     │
│  ┌──────────────────────────────────────────────────────┐  │
│  │           URL Processing Layer                       │  │
│  │  • URL Normalization                                 │  │
│  │  • Protocol Validation                               │  │
│  │  • Format Checking                                   │  │
│  └────────────────────┬─────────────────────────────────┘  │
│                       │                                     │
│                       ▼                                     │
│  ┌──────────────────────────────────────────────────────┐  │
│  │              AI Orchestration Layer                  │  │
│  │  • Prompt Engineering                                │  │
│  │  • LangChain Integration                             │  │
│  │  • Structured Output Parsing                         │  │
│  └────────────────────┬─────────────────────────────────┘  │
│                       │                                     │
└───────────────────────┼─────────────────────────────────────┘
                        │
                        │ API Call
                        ▼
┌─────────────────────────────────────────────────────────────┐
│                      OpenAI API Layer                       │
│                    (GPT-4o-mini Model)                      │
│                                                             │
│  • Threat Pattern Recognition                              │
│  • Risk Classification                                     │
│  • Explanation Generation                                  │
│  • Safety Recommendations                                  │
└────────────────────────┬────────────────────────────────────┘
                         │
                         │ Structured JSON Response
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                    Response to Client                       │
│  { url, riskLevel, verdict, reasons, tips, sources }       │
└─────────────────────────────────────────────────────────────┘
```

---

## Component Breakdown

### 1. Request Handler Layer

**Responsibilities:**
- Accept incoming HTTP requests
- Apply CORS policy
- Parse JSON body
- Validate required fields

**Technologies:**
- Express.js middleware
- CORS package
- Built-in body-parser

**Key Files:**
- `server.js` (lines 1-20)

---

### 2. URL Processing Layer

**Responsibilities:**
- Normalize URL format
- Add missing protocols
- Validate URL structure
- Reject malformed URLs

**Algorithm:**
```javascript
function normalizeUrl(url) {
  1. Trim whitespace
  2. Convert to lowercase
  3. Add https:// if missing protocol
  4. Validate with URL constructor
  5. Return normalized or null
}
```

**Key Files:**
- `server.js` (normalizeUrl function)

---

### 3. AI Orchestration Layer

**Responsibilities:**
- Construct AI prompts
- Manage LangChain pipeline
- Parse structured outputs
- Handle AI errors

**Workflow:**
```
1. Create prompt template with:
   - URL to analyze
   - Optional context
   - Format instructions
   - Cybersecurity guidelines

2. Send to LangChain:
   - Model: GPT-4o-mini
   - Temperature: 0.3 (deterministic)
   - Output: Structured JSON

3. Parse response:
   - Validate schema (Zod)
   - Extract fields
   - Return structured data
```

**Technologies:**
- LangChain
- Zod (schema validation)
- StructuredOutputParser

**Key Files:**
- `server.js` (AI logic section)

---

### 4. OpenAI API Layer

**Model:** GPT-4o-mini

**Why GPT-4o-mini?**
- ✅ Cost-effective ($0.15 per 1M tokens)
- ✅ Fast inference (<2 seconds)
- ✅ Strong reasoning capabilities
- ✅ Structured output support

**Prompt Engineering:**

The prompt instructs the model to:
1. Analyze URL structure
2. Detect phishing patterns
3. Evaluate context clues
4. Classify risk (HIGH/MEDIUM/LOW)
5. Explain reasoning
6. Provide safety tips

**Output Schema:**
```json
{
  "riskLevel": "HIGH | MEDIUM | LOW",
  "verdict": "string",
  "reasons": "string",
  "tips": "string",
  "sources": ["string"]
}
```

---

## Data Flow

### Request Flow

```
1. Client sends POST /api/verify
   ↓
2. Express receives request
   ↓
3. CORS middleware validates origin
   ↓
4. Body parser extracts { url, context }
   ↓
5. Validation checks for required fields
   ↓
6. URL normalization function processes URL
   ↓
7. Prompt template constructed
   ↓
8. LangChain sends to OpenAI
   ↓
9. GPT-4o-mini analyzes and returns JSON
   ↓
10. StructuredOutputParser validates schema
   ↓
11. Response sent to client
```

### Error Flow

```
Error occurs
   ↓
Caught by try-catch
   ↓
Logged to console (not user data)
   ↓
Generic error response sent
   ↓
Client receives 400/500 status
```

---

## Security Architecture

### Stateless Design

- ✅ No database
- ✅ No session storage
- ✅ No user data persistence
- ✅ No cookies

**Benefits:**
- Privacy-first
- Horizontally scalable
- No data breach risk
- GDPR compliant by design

### API Key Protection

```
Environment Variable (OPENAI_API_KEY)
         ↓
   Loaded at runtime
         ↓
   Never logged or exposed
         ↓
   Used only for OpenAI calls
```

### Input Sanitization

1. **URL Validation:** Reject malformed URLs
2. **Context Sanitization:** No code execution
3. **Output Escaping:** JSON-safe responses

---

## Scalability Considerations

### Horizontal Scaling

**Current:** Single instance  
**Production:** Multiple instances behind load balancer

```
Load Balancer
    ├── Instance 1
    ├── Instance 2
    └── Instance 3
```

### Caching Strategy (Future)

```
Client Request
    ↓
Check Cache (Redis)
    ├── Hit → Return cached result
    └── Miss → Process with AI → Cache result
```

**Benefits:**
- Reduce API costs
- Faster responses
- Lower latency

### Rate Limiting (Recommended)

```
Per IP: 100 requests / 15 minutes
Per API Key: 1000 requests / hour
```

---

## Performance Metrics

### Expected Latency

| Component | Time |
|-----------|------|
| Request parsing | <10ms |
| URL normalization | <5ms |
| AI inference | 1-3s |
| Response formatting | <10ms |
| **Total** | **1-3s** |

### Bottlenecks

1. **OpenAI API latency** (primary)
2. Network round-trip time
3. Cold starts (serverless)

### Optimization Strategies

- Use streaming responses (future)
- Implement caching layer
- Batch similar requests
- Use edge functions (Vercel)

---

## Technology Stack Rationale

### Node.js
- ✅ Fast I/O for API calls
- ✅ Large ecosystem
- ✅ Easy deployment

### Express.js
- ✅ Minimal, flexible
- ✅ Mature middleware ecosystem
- ✅ Well-documented

### LangChain
- ✅ Simplified AI orchestration
- ✅ Structured output parsing
- ✅ Prompt management

### GPT-4o-mini
- ✅ Cost-effective
- ✅ Strong reasoning
- ✅ Fast inference

---

## Future Architecture Enhancements

### Phase 2: Enhanced Detection

```
Current: URL + Context → AI → Result

Future:
URL + Context
    ↓
Parallel Processing:
    ├── AI Analysis
    ├── WHOIS Lookup
    ├── DNS Check
    ├── Redirect Resolver
    └── Malware DB Check
    ↓
Aggregate Results
    ↓
Enhanced Response
```

### Phase 3: Real-time Intelligence

```
Threat Intelligence Feeds
    ↓
Background Worker
    ↓
Update Threat Database
    ↓
Faster Detection
```

### Phase 4: Multi-Model Ensemble

```
URL Input
    ↓
Parallel AI Models:
    ├── GPT-4o-mini (reasoning)
    ├── Claude (pattern detection)
    └── Custom Model (domain-specific)
    ↓
Voting/Consensus
    ↓
Final Result
```

---

## Deployment Architecture

### Development
```
Local Machine
    └── Node.js Server (port 3000)
```

### Production (Render)
```
Internet
    ↓
Render Load Balancer (HTTPS)
    ↓
Docker Container
    └── Node.js Server
```

### Production (Vercel - Serverless)
```
Internet
    ↓
Vercel Edge Network
    ↓
Serverless Function (auto-scaled)
```

---

## Monitoring & Observability

### Logs
- Request/response (no URLs)
- Errors with stack traces
- Performance metrics

### Metrics (Future)
- Request count
- Response times
- Error rates
- AI token usage
- Cost per request

### Alerts (Future)
- High error rate
- Slow response times
- API quota exceeded

---

## Compliance & Privacy

### Data Handling
- ✅ No storage of user URLs
- ✅ No logging of analyzed content
- ✅ Ephemeral processing only

### GDPR Compliance
- ✅ No personal data collection
- ✅ No cookies
- ✅ No tracking

### OpenAI Data Policy
- URLs sent to OpenAI API
- OpenAI does not train on API data (as of 2024)
- See [OpenAI Privacy Policy](https://openai.com/privacy)

---

## Summary

AntiGravity's architecture prioritizes:

1. **Simplicity** - Minimal components, easy to understand
2. **Security** - Stateless, no data storage
3. **Scalability** - Horizontally scalable design
4. **Performance** - Optimized for fast responses
5. **Privacy** - No user data persistence

**Design Philosophy:** Do one thing well - analyze URLs for threats using AI.
