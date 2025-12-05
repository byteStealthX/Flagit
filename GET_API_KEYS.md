# 🔑 How to Get Your API Keys

## Required API Keys for FlagIt Deployment

You need 4 API keys total:

---

## 1. OpenAI API Key (Required)

### Where to Get It:
**URL**: https://platform.openai.com/api-keys

### Steps:
1. ✅ Sign in to OpenAI Platform
2. ✅ Click **"Create new secret key"**
3. ✅ Name it: "FlagIt Backend"
4. ✅ Click **"Create secret key"**
5. ✅ **COPY THE KEY NOW** - starts with `sk-`
6. ⚠️ **Save it securely** - you won't see it again!

### Cost:
- Pay-as-you-go pricing
- Expected: ~$1-10/month for moderate usage
- Set billing limits in OpenAI dashboard

**Copy this for Railway**:
```
OPENAI_API_KEY=sk-your-copied-key-here
```

---

## 2. Supabase Keys (Required - 3 values)

### Where to Get Them:
**Your Supabase Project**: https://supabase.com/dashboard/project/hpqmnsjmehmyillqhqgm

### Steps:
1. ✅ Go to your Supabase project (link above)
2. ✅ Click **"Settings"** (gear icon in left sidebar)
3. ✅ Click **"API"**
4. ✅ You'll see three values - copy each one:

#### A. Project URL
- **Label**: "Project URL"
- **Looks like**: `https://hpqmnsjmehmyillqhqgm.supabase.co`

**Copy this for Railway**:
```
SUPABASE_URL=https://hpqmnsjmehmyillqhqgm.supabase.co
```

#### B. Anon (Public) Key
- **Label**: "Project API keys" → "anon" "public"  
- **Starts with**: `eyJ...`
- **Very long** (~300+ characters)

**Copy this for Railway**:
```
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

#### C. Service Role Key
- **Label**: "Project API keys" → "service_role" "secret"
- **Starts with**: `eyJ...`
- **Very long** (~300+ characters)
- ⚠️ **Keep this secret** - has full database access!

**Copy this for Railway**:
```
SUPABASE_SERVICE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

## 3. Tavily API Key (Optional - Enhanced Search)

### Where to Get It:
**URL**: https://tavily.com

### Steps:
1. Sign up for free Tavily account
2. Go to API Keys section
3. Copy your API key (starts with `tvly-`)

**Copy this for Railway** (optional):
```
TAVILY_API_KEY=tvly-your-key-here
```

**Note**: If you skip this, search functionality will be limited but the app will still work.

---

## 📋 Complete Environment Variables Template

Once you have all keys, here's what you'll paste into Railway:

```bash
# Required
NODE_ENV=production
OPENAI_API_KEY=sk-your-actual-openai-key-here
SUPABASE_URL=https://hpqmnsjmehmyillqhqgm.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOi... (your actual anon key)
SUPABASE_SERVICE_KEY=eyJhbGciOi... (your actual service role key)

# Optional but recommended
TAVILY_API_KEY=tvly-your-actual-key-here
```

---

## 🚨 Security Reminders

1. **Never share these keys publicly**
2. **Never commit them to GitHub**
3. **Use different keys for dev/staging/production**
4. **Set billing limits** in OpenAI dashboard
5. **Rotate keys every 90 days** for security

---

## 💰 Expected Costs

| Service | Free Tier | Expected Monthly Cost |
|---------|-----------|----------------------|
| OpenAI API | $5 credit (new accounts) | $1-10 (usage-based) |
| Supabase | 500MB database, 2GB bandwidth | $0 (within free tier) |
| Tavily | 1,000 searches/month free | $0 (optional, within free tier) |

**Total**: $0-10/month depending on OpenAI usage

---

## ✅ Checklist

Before deploying to Railway, make sure you have:

- [ ] OpenAI API key (starts with `sk-`)
- [ ] Supabase URL
- [ ] Supabase anon key (starts with `eyJ`)
- [ ] Supabase service role key (starts with `eyJ`)
- [ ] (Optional) Tavily API key (starts with `tvly-`)

---

## 🔗 Quick Links

- **OpenAI Platform**: https://platform.openai.com/api-keys
- **Supabase Dashboard**: https://supabase.com/dashboard/project/hpqmnsjmehmyillqhqgm/settings/api
- **Tavily**: https://tavily.com
- **Railway**: https://railway.app

---

## Next Step

Once you have all keys:
1. Open Railway dashboard
2. Go to your FlagIt backend service
3. Click **Variables** tab
4. Add each environment variable
5. Railway will auto-redeploy with the new keys

**Need help?** Use the tabs I already opened for you - they're at the exact pages you need!
