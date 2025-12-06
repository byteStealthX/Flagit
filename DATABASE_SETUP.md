# Supabase Database Setup Guide

## Quick Setup (Copy-Paste Method)

### Step 1: Access Supabase SQL Editor
1. Open your browser and go to: https://supabase.com/dashboard/project/hpqmnsjmehmyillqhqgm
2. Click on **SQL Editor** in the left sidebar
3. Click **New Query**

### Step 2: Execute the Schema
1. Open the file `backend/schema.sql` in your editor
2. **Copy ALL the contents** (Ctrl+A, then Ctrl+C)
3. **Paste** into the Supabase SQL Editor
4. Click **Run** (or press F5)

### Step 3: Verify Tables Created
After running, you should see:
- ✅ Success message
- Tables created: `users`, `reports`, `tags`, `report_tags`, `comments`, `attachments`

To verify, go to **Table Editor** in the sidebar and you should see all 6 tables listed.

## What This Schema Does
- Creates database tables for storing reports, users, and related data
- Sets up Row Level Security (RLS) policies for data protection
- Inserts default tags (misinformation, deepfake, scam, fake-news, etc.)
- Configures proper relationships between tables

## Troubleshooting
**If you see an error like "relation already exists":**
- This means tables are already created (that's okay!)
- You can skip this step

**If you see permission errors:**
- Make sure you're logged into the correct Supabase project
- Verify the project ID matches: `hpqmnsjmehmyillqhqgm`

## Next Steps After Schema Execution
Once the database is set up, your backend will be able to:
1. Store verification results permanently
2. Save user reports
3. Track analytics and metrics
4. Enable commenting on reports
