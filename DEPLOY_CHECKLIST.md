# ✅ FlagIt Deployment Checklist - Complete These Steps

## Issue Fixed ✅
- Root Directory in Vercel has been set to `frontend`
- Now you need to redeploy to apply the fix

---

## Step 1: Finish Vercel Redeployment (2 minutes)

**On your Vercel deployments page:**
1. [ ] Click "Redeploy" from the menu (currently open on your screen)
2. [ ] Confirm the redeployment 
3. [ ] Wait for build to complete (watch logs)
4. [ ] Visit your Vercel URL to verify the page loads correctly

---

## Step 2: Get API Keys (5 minutes)

### Supabase Keys
**Tab already open:** `https://supabase.com/dashboard/project/hpqmnsjmehmyillqhqgm`

1. [ ] Click "Settings" (left sidebar)
2. [ ] Click "API" 
3. [ ] Copy these 3 values:
   - [ ] **Project URL** → Save as `SUPABASE_URL`
   - [ ] **anon public** key → Save as `SUPABASE_ANON_KEY`  
   - [ ] **service_role** key → Save as `SUPABASE_SERVICE_KEY`

### OpenAI Key
**Tab already open:** `https://platform.openai.com/api-keys`

1. [ ] Click "Create new secret key"
2. [ ] Copy the key (starts with `sk-`)
3. [ ] Save as `OPENAI_API_KEY`

---

## Step 3: Deploy Backend to Railway (10 minutes)

**Tab already open:** `https://railway.com/new/github`

1. [ ] Click "Deploy from GitHub repo"
2. [ ] Select your **flagit** repository
3. [ ] Click on the created service
4. [ ] Go to **Settings** tab:
   - [ ] Set **Root Directory** to `backend`
   - [ ] Verify **Start Command** is `node server.js`
5. [ ] Go to **Variables** tab
6. [ ] Add these environment variables (click "+ New Variable" for each):

```bash
NODE_ENV=production
OPENAI_API_KEY=sk-your-actual-key-from-step-2
SUPABASE_URL=https://hpqmnsjmehmyillqhqgm.supabase.co
SUPABASE_ANON_KEY=your-anon-key-from-step-2
SUPABASE_SERVICE_KEY=your-service-key-from-step-2
```

7. [ ] Go to **Settings** → **Networking**
8. [ ] Click **"Generate Domain"**
9. [ ] **COPY AND SAVE THIS URL** (you'll need it next!)
   - Example: `https://flagit-backend-production.up.railway.app`
10. [ ] Test backend works:
   ```bash
   curl https://YOUR-RAILWAY-URL/health
   ```

---

## Step 4: Connect Frontend to Backend (3 minutes)

1. [ ] Go back to Vercel: `https://vercel.com/coder671s-projects/flagit`
2. [ ] Click **Settings** tab
3. [ ] Click **Environment Variables** (left sidebar)
4. [ ] Add new variable:
   - Name: `VITE_API_BASE_URL`
   - Value: `https://your-railway-backend-url` (from Step 3.9)
5. [ ] Click **Add**
6. [ ] Go to **Deployments** tab
7. [ ] Redeploy the latest deployment again
8. [ ] Wait for build to complete

---

## Step 5: Test Everything (5 minutes)

1. [ ] Visit your Vercel frontend URL
2. [ ] Homepage should load (not blank!)
3. [ ] Test URL verification with: `https://github.com`
4. [ ] Check browser console (F12) - no errors
5. [ ] Test all pages work:
   - [ ] Homepage
   - [ ] Verification page
   - [ ] Analytics/Dashboard
   - [ ] Reports (if applicable)

---

## 🎉 You're Done!

Your FlagIt platform should now be fully deployed and working!

### Save These URLs:

**Frontend:** https://your-app.vercel.app  
**Backend API:** https://your-backend.railway.app  
**Health Check:** https://your-backend.railway.app/health

---

## 🐛 Troubleshooting

**Frontend still blank?**
- Check Root Directory is set to `frontend` in Vercel Settings
- Redeploy after making changes

**API calls failing?**
- Verify `VITE_API_BASE_URL` is set correctly in Vercel
- Make sure backend `/health` endpoint works
- Redeploy frontend after adding env var

**Backend not working?**
- Check all environment variables are set in Railway
- Verify Root Directory is `backend`
- Check deployment logs for errors
