# 📡 API Documentation

## Base URL

```
Local: http://localhost:3000
Production: https://your-domain.com
```

---

## Endpoints

### 1. Verify URL Threat

Analyzes a URL and returns a comprehensive security risk assessment.

**Endpoint:** `POST /api/verify`

**Content-Type:** `application/json`

#### Request Body

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string | ✅ Yes | The URL to analyze |
| `context` | string | ❌ No | Optional message context (SMS, email, etc.) |

#### Request Example

```json
{
  "url": "https://secure-bank-login.com/verify-account",
  "context": "Received via SMS: Your account has been locked. Click here to verify immediately."
}
```

#### Response Body

| Field | Type | Description |
|-------|------|-------------|
| `url` | string | Normalized URL that was analyzed |
| `riskLevel` | enum | Risk classification: `HIGH`, `MEDIUM`, or `LOW` |
| `verdict` | string | Brief summary of the threat assessment |
| `reasons` | string | Detailed explanation of risk factors |
| `tips` | string | Actionable safety recommendations |
| `sources` | array | Optional evidence sources (currently empty) |

#### Response Example (HIGH Risk)

```json
{
  "url": "https://secure-bank-login.com/verify-account",
  "riskLevel": "HIGH",
  "verdict": "Likely phishing attempt targeting banking credentials",
  "reasons": "Domain mimics legitimate banking service with slight variation, urgency tactics in context message, login/verification keywords commonly used in phishing attacks, SMS delivery method typical of smishing campaigns",
  "tips": "Do NOT click this link or enter any credentials. Contact your bank directly using official phone number or website. Enable two-factor authentication if available.",
  "sources": []
}
```

#### Response Example (MEDIUM Risk)

```json
{
  "url": "https://bit.ly/special-offer-2024",
  "riskLevel": "MEDIUM",
  "verdict": "URL shortener hides destination, proceed with caution",
  "reasons": "Shortened URL masks true destination making verification impossible, generic offer-related path could be legitimate marketing or scam",
  "tips": "Use URL expander service to reveal true destination before clicking. Verify sender authenticity. Be cautious of unsolicited offers.",
  "sources": []
}
```

#### Response Example (LOW Risk)

```json
{
  "url": "https://github.com/openai/gpt-4",
  "riskLevel": "LOW",
  "verdict": "Legitimate URL from trusted domain",
  "reasons": "Well-known technology platform with established reputation, HTTPS enabled, no suspicious patterns detected, domain matches expected service",
  "tips": "URL appears safe. Always verify HTTPS connection and check for certificate validity.",
  "sources": []
}
```

#### Status Codes

| Code | Status | Description |
|------|--------|-------------|
| 200 | OK | Successfully analyzed URL |
| 400 | Bad Request | Invalid or missing URL |
| 500 | Internal Server Error | AI processing failed or server error |

#### Error Response Example

```json
{
  "error": "Invalid URL format",
  "message": "Please provide a valid URL"
}
```

---

### 2. Health Check

Check if the service is running and healthy.

**Endpoint:** `GET /health`

#### Response Example

```json
{
  "status": "healthy",
  "service": "AntiGravity Backend",
  "version": "1.0.0",
  "timestamp": "2024-11-28T18:00:00.000Z"
}
```

---

### 3. Service Info

Get basic information about the API service.

**Endpoint:** `GET /`

#### Response Example

```json
{
  "service": "AntiGravity - AI Link Threat Sentinel",
  "version": "1.0.0",
  "description": "AI-powered URL threat detection engine",
  "endpoints": {
    "verify": "POST /api/verify",
    "health": "GET /health"
  },
  "documentation": "See README.md for API documentation"
}
```

---

## Risk Level Classification

### HIGH Risk 🚨

URLs classified as HIGH risk exhibit clear indicators of malicious intent:

- **Phishing patterns**: Fake login pages, credential harvesting
- **Domain spoofing**: Typosquatting, homograph attacks
- **Urgency tactics**: "Verify now", "Account locked", "Immediate action required"
- **Suspicious TLDs**: Uncommon or newly registered domains
- **URL shorteners with scam context**: bit.ly, tinyurl with suspicious messaging

**Action:** Do NOT click. Report as phishing.

### MEDIUM Risk ⚠️

URLs with suspicious elements but not definitively malicious:

- **URL shorteners**: Masked destinations (bit.ly, t.co)
- **Unfamiliar domains**: New or unknown services
- **Generic patterns**: Could be legitimate marketing or scam
- **Missing context**: Insufficient information to determine intent

**Action:** Verify sender. Use URL expander. Proceed with extreme caution.

### LOW Risk ✅

URLs that appear legitimate with minimal risk indicators:

- **Trusted domains**: google.com, github.com, microsoft.com
- **HTTPS enabled**: Secure connection
- **No suspicious patterns**: Clean URL structure
- **Established services**: Well-known platforms

**Action:** Generally safe, but always verify HTTPS and certificate.

---

## Rate Limiting

**Current:** No rate limiting (development)

**Production Recommendation:**
- 100 requests per 15 minutes per IP
- Implement using `express-rate-limit` middleware

---

## CORS Policy

**Current:** All origins allowed (development)

**Production Recommendation:**
- Restrict to specific frontend domains
- Configure in `server.js`:

```javascript
app.use(cors({
  origin: ['https://yourdomain.com', 'https://app.yourdomain.com']
}));
```

---

## Testing Examples

### cURL

```bash
# Test HIGH risk URL
curl -X POST http://localhost:3000/api/verify \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://paypal-secure-login.com",
    "context": "Your PayPal account has been suspended. Verify now."
  }'

# Test MEDIUM risk URL
curl -X POST http://localhost:3000/api/verify \
  -H "Content-Type: application/json" \
  -d '{"url": "https://bit.ly/win-prize"}'

# Test LOW risk URL
curl -X POST http://localhost:3000/api/verify \
  -H "Content-Type: application/json" \
  -d '{"url": "https://github.com"}'
```

### JavaScript (Fetch)

```javascript
const analyzeUrl = async (url, context = '') => {
  const response = await fetch('http://localhost:3000/api/verify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ url, context }),
  });
  
  const data = await response.json();
  return data;
};

// Usage
const result = await analyzeUrl(
  'https://suspicious-link.com',
  'Click here to claim your prize!'
);
console.log(result);
```

### Python (Requests)

```python
import requests

def analyze_url(url, context=''):
    response = requests.post(
        'http://localhost:3000/api/verify',
        json={'url': url, 'context': context}
    )
    return response.json()

# Usage
result = analyze_url(
    'https://suspicious-link.com',
    'Click here to claim your prize!'
)
print(result)
```

---

## Best Practices

### For Clients

1. **Always include context** when available for better analysis
2. **Handle all three risk levels** appropriately in your UI
3. **Implement error handling** for network failures
4. **Show safety tips** to users regardless of risk level
5. **Cache results** for repeated URLs (optional)

### For Backend

1. **Validate all inputs** before processing
2. **Implement rate limiting** in production
3. **Log errors** but not user URLs (privacy)
4. **Monitor API costs** (OpenAI usage)
5. **Set timeouts** for AI requests

---

## Changelog

### v1.0.0 (2024-11-28)
- Initial release
- POST /api/verify endpoint
- GPT-4o-mini integration
- Structured output parsing
- URL normalization
- Health check endpoint

---

## Support

For API issues or questions:
- 📧 Email: api-support@antigravity.dev
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/antigravity/issues)
- 📚 Docs: [README.md](./README.md)
