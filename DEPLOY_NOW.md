# 🚀 FlagIt Deployment - Step-by-Step Workflow

## Part 1: Deploy Backend to Railway (15 minutes)

### Step 1: Login to Railway
- ✅ Railway is already open in your browser
- Click **"Login"** or **"Start a New Project"**
- Authenticate with GitHub

### Step 2: Create New Project
1. Click **"New Project"** button
2. Select **"Deploy from GitHub repo"**
3. If first time: Authorize Railway to access your GitHub
4. Search for and select your **FlagIt** repository (byteStealthX/Flagit)

### Step 3: Configure Backend Service
1. Railway will auto-detect Node.js
2. Click on the service that was created
3. Go to **Settings** tab
4. Under **Service Settings**:
   - **Service Name**: `flagit-backend`
   - **Root Directory**: `backend` (IMPORTANT!)
   - **Start Command**: `node server.js` (should auto-detect)

### Step 4: Add Environment Variables
1. Click on **Variables** tab
2. Click **"+ New Variable"** for each of these:

```bash
# Required Variables
NODE_ENV=production
OPENAI_API_KEY=sk-your-openai-api-key
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_KEY=your-supabase-service-key

# Optional
TAVILY_API_KEY=tvly-your-tavily-key
```

**Where to get these keys:**

#### OpenAI API Key
- Go to: https://platform.openai.com/api-keys
- Click "Create new secret key"
- Copy the key (starts with `sk-`)

#### Supabase Keys
- Go to: https://supabase.com/dashboard
- Select your project
- Go to Settings → API
- Copy:
  - Project URL → `SUPABASE_URL`
  - `anon` `public` key → `SUPABASE_ANON_KEY`
  - `service_role` key → `SUPABASE_SERVICE_KEY`

### Step 5: Generate Public Domain
1. Go to **Settings** tab
2. Scroll to **Networking** section
3. Click **"Generate Domain"**
4. **SAVE THIS URL** - you'll need it for frontend!
   - Example: `https://flagit-backend-production.up.railway.app`
   - Or custom: `https://flagit-backend.railway.app`

### Step 6: Verify Deployment
1. Wait for deployment to complete (green checkmark)
2. Click on **Deployments** tab to see logs
3. Test the backend:

```bash
# In a new terminal, test:
curl https://YOUR-RAILWAY-URL/health
```

Expected response:
```json
{
  "status": "healthy",
  "service": "FlagIt Backend",
  "version": "1.0.0"
}
```

**Backend Status**: ✅ Deployed successfully!

---

## Part 2: Deploy Frontend to Vercel (10 minutes)

### Step 1: Login to Vercel
- Visit: https://vercel.com
- Click **"Sign Up"** or **"Login"**
- Authenticate with GitHub

### Step 2: Import Project
1. Click **"Add New..."** → **"Project"**
2. Find your **FlagIt** repository in the list
3. Click **"Import"**

### Step 3: Configure Project
1. **Framework Preset**: Should auto-detect as "Vite"
2. **Root Directory**: 
   - Click **"Edit"**
   - Set to `frontend`
3. **Build Settings** (should be auto-filled):
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### Step 4: Add Environment Variable
**BEFORE clicking Deploy**, expand **"Environment Variables"** section:

1. **Variable Name**: `VITE_API_BASE_URL`
2. **Value**: Your Railway backend URL (from Part 1, Step 5)
   - Example: `https://flagit-backend-production.up.railway.app`
3. Click **"Add"**

### Step 5: Deploy
1. Click **"Deploy"** button
2. Wait 2-3 minutes for build
3. Watch the build logs
4. Once complete, Vercel shows your **Production URL**

### Step 6: Verify Frontend
1. Click on the production URL
2. Visit: `https://your-app.vercel.app`
3. Test the application:
   - ✅ Homepage loads
   - ✅ Try verifying a URL
   - ✅ Check analytics page
   - ✅ Test dark mode toggle

**Frontend Status**: ✅ Deployed successfully!

---

## Part 3: Post-Deployment Configuration (5 minutes)

### Update CORS in Backend (Important!)

1. Go back to Railway
2. Click on **Deployments** tab
3. You need to update CORS to only allow your Vercel domain
4. I'll help you update this in the code

### Test End-to-End
1. Open your Vercel frontend URL
2. Test verification feature with a URL like: `https://github.com`
3. Check browser console (F12) for any errors
4. Verify all features work:
   - URL verification
   - Analytics dashboard
   - Reports
   - Comments

---

## Troubleshooting

### Backend Issues

**"Build failed"**
- Check that Root Directory is set to `backend`
- Verify all environment variables are set
- Check deployment logs for specific errors

**"Cannot find module"**
- Railway should run `npm install` automatically
- Check logs to ensure dependencies installed

**"Health check failing"**
- Verify environment variables are correct
- Check OpenAI API key is valid
- Look at application logs for errors

### Frontend Issues

**"API calls failing"**
- Verify `VITE_API_BASE_URL` is set correctly
- Make sure backend is deployed and healthy
- Check CORS configuration

**"Build failed"**
- Check that Root Directory is set to `frontend`
- Verify build succeeds locally first
- Check build logs for TypeScript errors

**"Page not found on refresh"**
- Vercel should handle this automatically with the config
- Verify `vercel.json` rewrites are correct

---

## Environment Variables Checklist

### Railway Backend ✓
- [ ] `NODE_ENV=production`
- [ ] `OPENAI_API_KEY=sk-...`
- [ ] `SUPABASE_URL=https://...`
- [ ] `SUPABASE_ANON_KEY=...`
- [ ] `SUPABASE_SERVICE_KEY=...`
- [ ] `TAVILY_API_KEY=...` (optional)

### Vercel Frontend ✓
- [ ] `VITE_API_BASE_URL=https://your-backend.railway.app`

---

## What You'll Have After Deployment

✅ **Backend API** running on Railway  
✅ **Frontend Web App** running on Vercel  
✅ **Database** hosted on Supabase  
✅ **AI Analysis** powered by OpenAI  
✅ **Search Enhancement** via Tavily (optional)  
✅ **Automatic HTTPS** on both platforms  
✅ **Auto-deploy** on git push  
✅ **Global CDN** for frontend  

---

## Estimated Deployment Time

- **Backend (Railway)**: 10-15 minutes
- **Frontend (Vercel)**: 5-10 minutes
- **Total**: ~20-25 minutes

---

## Save These URLs

After deployment, save these in your README:

```markdown
## Live Deployment

- **Frontend**: https://your-app.vercel.app
- **Backend API**: https://flagit-backend.railway.app
- **API Health**: https://flagit-backend.railway.app/health
- **API Verify**: https://flagit-backend.railway.app/api/verify
```

---

**Ready? Let's deploy! Follow the steps above in order.** 🚀
