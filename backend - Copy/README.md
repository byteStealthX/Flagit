# 🚀 AntiGravity Backend - AI Link Threat Sentinel

> **Enterprise-grade AI-powered URL threat detection engine**

[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-blue.svg)](https://expressjs.com/)
[![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4o--mini-orange.svg)](https://openai.com/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## 📌 Overview

**AntiGravity** is an intelligent cybersecurity backend that analyzes suspicious URLs and returns comprehensive risk assessments to protect users from phishing, scams, and malicious links.

### What It Does

- ✅ Accepts URLs with optional message context
- ✅ Normalizes and validates URL structure
- ✅ Uses AI reasoning (GPT-4o-mini via LangChain) for threat classification
- ✅ Returns structured JSON threat reports with:
  - **Risk Level** (HIGH / MEDIUM / LOW)
  - **Verdict** (concise summary)
  - **Reasons** (AI-driven explanation)
  - **Safety Tips** (actionable advice)
  - **Sources** (optional evidence)

### Key Features

🧠 **AI-Powered Analysis** - Advanced threat detection using GPT-4o-mini  
⚡ **Fast Response** - Optimized for sub-second inference  
🔒 **Secure & Stateless** - No data storage, privacy-first design  
📊 **Structured Output** - Clean JSON responses for easy integration  
🚀 **Deploy-Ready** - Works on Vercel, Render, IDX, or local environments

---

## 🏗️ System Architecture

```
┌──────────────────────────────┐
│  Client Application          │
│  (Frontend/Mobile/API)       │
└───────────────┬──────────────┘
                │ POST /api/verify
                ▼
┌──────────────────────────────┐
│   AntiGravity Backend        │
│   (Node.js + Express)        │
│   • URL Validation           │
│   • Normalization            │
│   • AI Processing            │
└───────────────┬──────────────┘
                │
                ▼
┌──────────────────────────────┐
│   AI Engine                  │
│   LangChain + GPT-4o-mini    │
│   • Threat Classification    │
│   • Risk Scoring             │
│   • Explanation Generation   │
└──────────────────────────────┘
```

---

## ⚙️ Tech Stack

| Component       | Technology                    |
|----------------|-------------------------------|
| **Runtime**    | Node.js (ES Modules)          |
| **Framework**  | Express.js                    |
| **AI Engine**  | LangChain + OpenAI GPT-4o-mini|
| **Middleware** | CORS, body-parser             |
| **Response**   | Structured JSON               |
| **Deployment** | Vercel, Render, IDX, Local    |

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- OpenAI API key ([Get one here](https://platform.openai.com/api-keys))

### Installation

```bash
# Clone or navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.template .env

# Add your OpenAI API key to .env
# OPENAI_API_KEY=sk-your-key-here

# Start the server
node server.js
```

The server will start on `http://localhost:3000`

---

## 📡 API Reference

### `POST /api/verify`

Analyzes a URL and returns a security risk assessment.

#### Request

```http
POST /api/verify HTTP/1.1
Content-Type: application/json

{
  "url": "https://secure-login-verify.com/account",
  "context": "Received via SMS claiming my account was locked"
}
```

#### Response

```json
{
  "url": "https://secure-login-verify.com/account",
  "riskLevel": "HIGH",
  "verdict": "Likely phishing attempt targeting account credentials",
  "reasons": "Suspicious domain mimicking legitimate service, urgency tactics in context, login-related keywords often used in phishing",
  "tips": "Do NOT enter credentials. Verify directly with official website or customer service. Check for HTTPS and official domain.",
  "sources": []
}
```

#### Status Codes

| Code | Description                          |
|------|--------------------------------------|
| 200  | Success - threat report generated    |
| 400  | Invalid or missing URL               |
| 500  | AI processing or server error        |

**See [API.md](./API.md) for detailed documentation.**

---

## 🛠️ Core Features

### 1. URL Normalization

- Converts URLs to lowercase
- Validates URL format
- Adds protocol if missing (http/https)
- Rejects malformed URLs

### 2. AI Threat Classification

The backend uses a sophisticated prompt engineering approach:

- **Link structure analysis** - Domain patterns, subdomains, TLDs
- **Phishing detection** - Common scam indicators
- **Context evaluation** - SMS/email message analysis
- **Risk scoring** - HIGH/MEDIUM/LOW classification
- **Explanation generation** - Human-readable reasoning

### 3. Structured Output Enforcement

Forces the AI model to return consistent JSON:

```json
{
  "riskLevel": "HIGH | MEDIUM | LOW",
  "verdict": "Brief summary",
  "reasons": "Detailed explanation",
  "tips": "Safety recommendations",
  "sources": []
}
```

### 4. Comprehensive Error Handling

- Invalid URL format validation
- Missing required fields
- AI timeout handling
- JSON parsing failure recovery
- Graceful degradation

---

## 📂 Project Structure

```
backend/
├── server.js           # Main Express server + AI logic
├── package.json        # Dependencies and scripts
├── .env.template       # Environment variables template
├── README.md           # This file
├── API.md              # Detailed API documentation
├── DEPLOYMENT.md       # Deployment guides
├── ARCHITECTURE.md     # System design details
└── swagger.yaml        # OpenAPI specification
```

---

## 🧪 Testing

### Test with cURL

```bash
curl -X POST http://localhost:3000/api/verify \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://bit.ly/urgent-payment",
    "context": "Click here to claim your refund immediately!"
  }'
```

### Expected Output

```json
{
  "url": "https://bit.ly/urgent-payment",
  "riskLevel": "HIGH",
  "verdict": "URL shortener masking destination with urgency tactics",
  "reasons": "Shortened URL hides true destination, payment-related keywords, urgency language typical of scams",
  "tips": "Never click shortened links from unknown sources. Verify sender authenticity before proceeding.",
  "sources": []
}
```

### Test Cases

Test the API with various scenarios:

- ✅ Legitimate URLs (google.com, github.com)
- ⚠️ Suspicious patterns (bit.ly redirects, misspelled domains)
- 🚨 Known phishing patterns (fake login pages, urgent payment requests)

---

## 🚀 Deployment

### Option 1: Render (Recommended)

1. Push code to GitHub
2. Create new Web Service on [Render](https://render.com)
3. Connect repository
4. Set environment variables:
   - `OPENAI_API_KEY=your-key`
5. Deploy!

**Build Command:** `npm install`  
**Start Command:** `node server.js`

### Option 2: Vercel

Requires serverless adaptation. See [DEPLOYMENT.md](./DEPLOYMENT.md) for details.

### Option 3: Google IDX

1. Open project in IDX
2. Run `npm install && node server.js`
3. Use preview URL for testing

**See [DEPLOYMENT.md](./DEPLOYMENT.md) for comprehensive deployment guides.**

---

## 🔒 Security & Privacy

- ✅ **No data storage** - Completely stateless
- ✅ **No logging** - URLs not saved or tracked
- ✅ **No cookies/sessions** - Privacy-first design
- ✅ **AI inference only** - Ephemeral processing
- ⚠️ **Rate limiting recommended** for production use

---

## 🌟 Future Enhancements

Potential features for v2.0:

- [ ] Domain age lookup (WHOIS integration)
- [ ] Redirect chain resolver
- [ ] DNS record verification
- [ ] Malware database integration (VirusTotal API)
- [ ] Screenshot analysis (Puppeteer + Vision AI)
- [ ] Real-time threat intelligence feeds
- [ ] Browser extension API
- [ ] Webhook notifications

---

## 📚 Documentation

- [API.md](./API.md) - Complete API reference
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment guides
- [ARCHITECTURE.md](./ARCHITECTURE.md) - System design
- [swagger.yaml](./swagger.yaml) - OpenAPI specification

---

## 🤝 Contributing

Contributions welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- OpenAI for GPT-4o-mini API
- LangChain for AI orchestration
- Express.js community

---

## 📞 Support

For issues, questions, or feedback:

- 🐛 [Open an issue](https://github.com/yourusername/antigravity/issues)
- 💬 [Discussions](https://github.com/yourusername/antigravity/discussions)
- 📧 Email: support@antigravity.dev

---

**Built with ❤️ for a safer internet**
