# 🚀 Quick Start Guide - For Beginners

Welcome! This guide will help you get your AntiGravity backend running in **5 simple steps**. No prior experience needed!

---

## 📚 What You're Building

You're creating an **AI-powered URL threat detector** - think of it as a smart detective that:
- 🧠 **The Brain (OpenAI)**: Analyzes URLs and writes threat reports
- 👀 **The Eyes (Tavily)**: Searches the internet for threat intelligence
- 🎯 **The Result**: Tells you if a link is safe, suspicious, or dangerous

---

## ✅ Step 1: Check Your Files

Make sure you're in the `backend` folder. You should see these files:
```
backend/
├── server.js          ← The main code (your AI detective)
├── package.json       ← List of tools we need
├── .env.template      ← Example configuration
├── README.md          ← Full documentation
└── API.md             ← How to use the API
```

---

## ✅ Step 2: Install Dependencies

**What are dependencies?** Think of them as tools your detective needs to work.

Open your terminal in the `backend` folder and run:

```bash
npm install
```

**What this does:**
- Downloads all the tools listed in `package.json`
- Creates a `node_modules` folder with everything needed
- Takes about 1-2 minutes

**You'll see:** Lots of text scrolling - that's normal! Wait for it to finish.

---

## ✅ Step 3: Configure Your API Keys

**What are API keys?** They're like passwords that let your code talk to OpenAI and Tavily.

### Option A: Use the Pre-Configured File (Easiest)

Your `.env` file is already created with the API keys! Just verify it exists:

```bash
# Check if .env exists
ls .env
```

If you see the file, you're good to go! ✅

### Option B: Create It Manually

If the file doesn't exist, create `.env` and paste this:

```bash
# OpenAI API Keys (Multiple keys for backup)
OPENAI_API_KEY=sk-abcdef1234567890abcdef1234567890abcdef12
OPENAI_API_KEY_2=sk-1234567890abcdef1234567890abcdef12345678
OPENAI_API_KEY_3=sk-abcdefabcdefabcdefabcdefabcdefabcdef12
OPENAI_API_KEY_4=sk-7890abcdef7890abcdef7890abcdef7890abcd

# Tavily API Key (for web search)
TAVILY_API_KEY=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

# Server Configuration
PORT=3000
NODE_ENV=development
```

**Important:** Never share these keys publicly!

---

## ✅ Step 4: Start Your Server

Now let's wake up your AI detective!

```bash
node server.js
```

**You should see:**
```
🚀 AntiGravity Backend running on port 3000
📡 API endpoint: http://localhost:3000/api/verify
💚 Health check: http://localhost:3000/health
🔑 OpenAI keys loaded: 4
🔍 Tavily search: enabled
```

**What this means:**
- ✅ Server is running on your computer
- ✅ 4 OpenAI keys are loaded (for backup)
- ✅ Tavily search is working
- ✅ Ready to analyze URLs!

**Keep this terminal window open** - your server needs to stay running.

---

## ✅ Step 5: Test Your API

Open a **new terminal window** (keep the server running in the first one) and try this:

### Test 1: Check if it's alive

```bash
curl http://localhost:3000/health
```

**Expected response:**
```json
{
  "status": "healthy",
  "service": "AntiGravity Backend",
  "version": "1.0.0",
  "timestamp": "2024-11-28T18:30:00.000Z"
}
```

### Test 2: Analyze a suspicious URL

```bash
curl -X POST http://localhost:3000/api/verify -H "Content-Type: application/json" -d "{\"url\":\"https://bit.ly/urgent-payment\",\"context\":\"Click here to claim your refund!\"}"
```

**Expected response:**
```json
{
  "url": "https://bit.ly/urgent-payment",
  "riskLevel": "HIGH",
  "verdict": "URL shortener with urgency tactics - likely scam",
  "reasons": "Shortened URL hides destination, payment keywords, urgency language",
  "tips": "Do NOT click. Verify sender before proceeding.",
  "sources": ["https://..."]
}
```

### Test 3: Analyze a safe URL

```bash
curl -X POST http://localhost:3000/api/verify -H "Content-Type: application/json" -d "{\"url\":\"https://github.com\"}"
```

**Expected response:**
```json
{
  "url": "https://github.com",
  "riskLevel": "LOW",
  "verdict": "Legitimate URL from trusted platform",
  "reasons": "Well-known technology platform, HTTPS enabled, no suspicious patterns",
  "tips": "URL appears safe. Always verify HTTPS connection.",
  "sources": []
}
```

---

## 🎉 Success! What Just Happened?

1. **You sent a URL** to your AI detective
2. **The Brain (OpenAI)** analyzed the URL structure and context
3. **The Eyes (Tavily)** searched the web for threat intelligence
4. **You got a report** with risk level, verdict, reasons, and safety tips

---

## 🧠 Understanding the Code (Simple Explanation)

Let's look at what happens inside `server.js`:

### 1. Import Tools (Lines 1-8)
```javascript
import express from 'express';  // Web server framework
import { ChatOpenAI } from '@langchain/openai';  // The Brain
import { TavilySearchResults } from '@langchain/community/tools/tavily_search';  // The Eyes
```

**Translation:** We're loading the tools we need.

### 2. Load API Keys (Lines 10-50)
```javascript
dotenv.config();  // Read .env file

const OPENAI_KEYS = [
  process.env.OPENAI_API_KEY,
  process.env.OPENAI_API_KEY_2,
  // ... more keys
].filter(Boolean);  // Remove empty ones
```

**Translation:** Load your API keys from the `.env` file.

### 3. Create the Brain (Lines 36-40)
```javascript
const createModel = () => new ChatOpenAI({
  modelName: 'gpt-4o-mini',
  temperature: 0.3,
  openAIApiKey: getNextApiKey(),
});
```

**Translation:** Create an AI model that can think and analyze.

### 4. Create the Eyes (Lines 43-52)
```javascript
if (process.env.TAVILY_API_KEY) {
  tavilySearch = new TavilySearchResults({
    apiKey: process.env.TAVILY_API_KEY,
    maxResults: 3,
  });
}
```

**Translation:** If we have a Tavily key, enable web search.

### 5. The Main Detective Work (Lines 88-200)
```javascript
app.post('/api/verify', async (req, res) => {
  // 1. Get the URL from the request
  const { url, context } = req.body;
  
  // 2. Search the web for threats (if Tavily is enabled)
  const results = await tavilySearch.invoke(searchQuery);
  
  // 3. Ask the AI to analyze
  const response = await model.invoke(prompt);
  
  // 4. Send back the report
  res.json({ url, riskLevel, verdict, reasons, tips, sources });
});
```

**Translation:** 
1. Receive a URL
2. Search for threat info
3. Ask AI to analyze
4. Return the verdict

---

## 🔧 Common Issues & Solutions

### Issue 1: "Cannot find module"
**Solution:** Run `npm install` again

### Issue 2: "Port 3000 already in use"
**Solution:** Change PORT in `.env` to `3001` or kill the other process

### Issue 3: "OpenAI API error"
**Solution:** Check if your API keys are valid and have credits

### Issue 4: "Tavily search disabled"
**Solution:** Make sure `TAVILY_API_KEY` is in your `.env` file

---

## 📖 Next Steps

Now that your backend is running:

1. **Read [API.md](./API.md)** - Learn all the endpoints
2. **Read [DEPLOYMENT.md](./DEPLOYMENT.md)** - Deploy to the internet
3. **Build a frontend** - Create a web interface for users
4. **Customize the AI** - Edit the prompt in `server.js` to change behavior

---

## 💡 Pro Tips

- **Keep the server running** while testing
- **Check the terminal** for error messages
- **Use Postman** for easier API testing (instead of curl)
- **Read the logs** - they tell you what's happening
- **Start simple** - Test with known safe/unsafe URLs first

---

## 🆘 Need Help?

- **Documentation:** [README.md](./README.md)
- **API Reference:** [API.md](./API.md)
- **Architecture:** [ARCHITECTURE.md](./ARCHITECTURE.md)

---

**Congratulations! You've built your first AI-powered backend! 🎉**
