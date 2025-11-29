# 🚀 Deployment Guide

Complete deployment instructions for AntiGravity Backend on various platforms.

---

## 📋 Pre-Deployment Checklist

Before deploying, ensure you have:

- ✅ OpenAI API key ([Get one here](https://platform.openai.com/api-keys))
- ✅ GitHub account (for Render/Vercel deployment)
- ✅ Code pushed to GitHub repository
- ✅ Environment variables configured
- ✅ Dependencies tested locally

---

## 🎯 Deployment Options

### Option 1: Render (Recommended) ⭐

**Best for:** Production deployments, persistent servers, WebSocket support

#### Step-by-Step Instructions

1. **Push Code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/antigravity-backend.git
   git push -u origin main
   ```

2. **Create Render Account**
   - Go to [render.com](https://render.com)
   - Sign up with GitHub

3. **Create New Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select the `antigravity-backend` repository

4. **Configure Service**
   - **Name:** `antigravity-backend`
   - **Region:** Choose closest to your users
   - **Branch:** `main`
   - **Root Directory:** `backend` (if backend is in subdirectory)
   - **Runtime:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
   - **Instance Type:** Free (for testing) or Starter ($7/month)

5. **Set Environment Variables**
   - Click "Environment" tab
   - Add:
     ```
     OPENAI_API_KEY=sk-your-actual-key-here
     NODE_ENV=production
     ```

6. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment (2-3 minutes)
   - Your API will be live at: `https://antigravity-backend.onrender.com`

7. **Test Deployment**
   ```bash
   curl https://antigravity-backend.onrender.com/health
   ```

#### Render Features

- ✅ Automatic deployments on git push
- ✅ Free SSL certificates
- ✅ Custom domains
- ✅ Zero-downtime deploys
- ✅ Auto-scaling available

---

### Option 2: Vercel

**Best for:** Serverless deployments, edge functions, static sites with API routes

> **Note:** Requires serverless adaptation for Express.js

#### Step-by-Step Instructions

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Create `vercel.json`**
   ```json
   {
     "version": 2,
     "builds": [
       {
         "src": "server.js",
         "use": "@vercel/node"
       }
     ],
     "routes": [
       {
         "src": "/(.*)",
         "dest": "/server.js"
       }
     ],
     "env": {
       "OPENAI_API_KEY": "@openai-api-key"
     }
   }
   ```

3. **Modify `server.js` for Serverless**
   
   Add at the end of `server.js`:
   ```javascript
   // For Vercel serverless
   export default app;
   ```

4. **Deploy**
   ```bash
   cd backend
   vercel
   ```

5. **Set Environment Variables**
   ```bash
   vercel env add OPENAI_API_KEY
   # Paste your API key when prompted
   ```

6. **Production Deployment**
   ```bash
   vercel --prod
   ```

#### Vercel Features

- ✅ Edge network (ultra-fast globally)
- ✅ Automatic HTTPS
- ✅ Git integration
- ✅ Preview deployments for PRs
- ⚠️ 10-second timeout limit on free tier

---

### Option 3: Google IDX

**Best for:** Quick testing, development, hackathons

#### Step-by-Step Instructions

1. **Open Project in IDX**
   - Go to [idx.google.com](https://idx.google.com)
   - Import your GitHub repository

2. **Install Dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Create `.env` File**
   ```bash
   cp .env.template .env
   # Edit .env and add your OPENAI_API_KEY
   ```

4. **Start Server**
   ```bash
   node server.js
   ```

5. **Get Preview URL**
   - IDX will provide a preview URL
   - Example: `https://3000-idx-antigravity-xxxxx.cluster.idx.google.com`

6. **Test**
   ```bash
   curl https://your-idx-url.cluster.idx.google.com/health
   ```

#### IDX Features

- ✅ Instant development environment
- ✅ No local setup required
- ✅ Built-in code editor
- ⚠️ Not for production use
- ⚠️ Session-based (not persistent)

---

### Option 4: Railway

**Best for:** Simple deployments, databases included

#### Step-by-Step Instructions

1. **Create Railway Account**
   - Go to [railway.app](https://railway.app)
   - Sign up with GitHub

2. **Deploy from GitHub**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository

3. **Configure**
   - Railway auto-detects Node.js
   - Add environment variable:
     ```
     OPENAI_API_KEY=sk-your-key
     ```

4. **Deploy**
   - Railway automatically deploys
   - Get URL from dashboard

---

### Option 5: Heroku

**Best for:** Traditional PaaS deployment

#### Step-by-Step Instructions

1. **Install Heroku CLI**
   ```bash
   npm install -g heroku
   ```

2. **Login**
   ```bash
   heroku login
   ```

3. **Create App**
   ```bash
   heroku create antigravity-backend
   ```

4. **Set Environment Variables**
   ```bash
   heroku config:set OPENAI_API_KEY=sk-your-key
   ```

5. **Deploy**
   ```bash
   git push heroku main
   ```

6. **Open App**
   ```bash
   heroku open
   ```

---

## 🔒 Security Best Practices

### Environment Variables

**Never commit `.env` files to git!**

Add to `.gitignore`:
```
.env
.env.local
.env.production
```

### API Key Protection

1. **Use environment variables** for all secrets
2. **Rotate keys regularly** (every 90 days)
3. **Set usage limits** in OpenAI dashboard
4. **Monitor API usage** for anomalies

### Rate Limiting (Production)

Install rate limiting:
```bash
npm install express-rate-limit
```

Add to `server.js`:
```javascript
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests, please try again later.'
});

app.use('/api/', limiter);
```

### CORS Configuration

For production, restrict origins:
```javascript
app.use(cors({
  origin: ['https://yourdomain.com', 'https://app.yourdomain.com'],
  credentials: true
}));
```

---

## 📊 Monitoring & Logging

### Render Monitoring

- Built-in logs in dashboard
- Metrics: CPU, memory, requests
- Alerts for downtime

### Error Tracking (Optional)

Install Sentry:
```bash
npm install @sentry/node
```

Add to `server.js`:
```javascript
import * as Sentry from '@sentry/node';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
});
```

---

## 🧪 Post-Deployment Testing

### Health Check

```bash
curl https://your-domain.com/health
```

Expected response:
```json
{
  "status": "healthy",
  "service": "AntiGravity Backend",
  "version": "1.0.0",
  "timestamp": "2024-11-28T18:00:00.000Z"
}
```

### API Test

```bash
curl -X POST https://your-domain.com/api/verify \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://github.com",
    "context": "Testing deployment"
  }'
```

---

## 🔄 Continuous Deployment

### Automatic Deployments

**Render & Vercel:**
- Automatically deploy on git push to `main`
- Preview deployments for pull requests

**GitHub Actions (Optional):**

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Render

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Render
        run: |
          curl -X POST ${{ secrets.RENDER_DEPLOY_HOOK }}
```

---

## 💰 Cost Estimates

| Platform | Free Tier | Paid Tier | Best For |
|----------|-----------|-----------|----------|
| **Render** | 750 hrs/month | $7/month | Production |
| **Vercel** | 100GB bandwidth | $20/month | Serverless |
| **Railway** | $5 credit/month | Pay-as-you-go | Simple apps |
| **Heroku** | Eco dynos $5/month | $25/month | Enterprise |
| **IDX** | Free | Free | Development |

**OpenAI Costs:**
- GPT-4o-mini: ~$0.15 per 1M input tokens
- Estimated: $0.001 per request
- 1000 requests ≈ $1

---

## 🐛 Troubleshooting

### Build Fails

**Error:** `Cannot find module 'express'`
- **Solution:** Ensure `npm install` runs in build command

### Environment Variables Not Working

**Error:** `OPENAI_API_KEY is not defined`
- **Solution:** Check environment variables in platform dashboard
- Verify variable name matches exactly

### Timeout Errors

**Error:** Request timeout
- **Solution:** Increase timeout in platform settings
- For Vercel: Upgrade to Pro for longer timeouts

### CORS Errors

**Error:** `Access-Control-Allow-Origin`
- **Solution:** Update CORS configuration in `server.js`

---

## 📞 Support

For deployment issues:
- 📚 [Render Docs](https://render.com/docs)
- 📚 [Vercel Docs](https://vercel.com/docs)
- 🐛 [GitHub Issues](https://github.com/yourusername/antigravity/issues)

---

**Ready to deploy? Choose your platform and follow the steps above! 🚀**
