@echo off
echo ========================================
echo TruTrace - GitHub Push Script
echo ========================================
echo.

cd "c:\Users\ganes\Desktop\miss info"

echo [1/15] Resetting previous commit...
git reset --soft HEAD~1

echo [2/15] Backend API...
git add backend/package.json backend/server.js backend/.env.template backend/README.md backend/QUICKSTART.md backend/API.md backend/ARCHITECTURE.md backend/DEPLOYMENT.md
git commit -m "feat: Add backend API with AI-powered URL threat detection"

echo [3/15] Frontend setup...
git add frontend-app/package.json frontend-app/vite.config.js frontend-app/tailwind.config.js frontend-app/postcss.config.js frontend-app/index.html
git commit -m "feat: Initialize React + Vite frontend with Tailwind CSS"

echo [4/15] Design system...
git add frontend-app/src/index.css frontend-app/src/lib/utils.js
git commit -m "style: Implement TruTrace design system"

echo [5/15] App layout...
git add frontend-app/src/components/Layout.jsx frontend-app/src/App.jsx frontend-app/src/main.jsx
git commit -m "feat: Create app layout and navigation"

echo [6/15] Dashboard page...
git add frontend-app/src/pages/Dashboard.jsx frontend-app/src/data/mockData.js
git commit -m "feat: Build Dashboard page with stats and charts"

echo [7/15] Intelligence Feed...
git add frontend-app/src/pages/Feed.jsx
git commit -m "feat: Create Intelligence Feed with report cards"

echo [8/15] Analytics page...
git add frontend-app/src/pages/Analytics.jsx
git commit -m "feat: Add Analytics page with trends visualization"

echo [9/15] Reports and Analysis...
git add frontend-app/src/pages/Reports.jsx frontend-app/src/pages/Analysis.jsx
git commit -m "feat: Implement Reports and Analysis pages"

echo [10/15] Backend Supabase...
git add backend/supabase.js backend/routes/
git commit -m "feat: Add Supabase database integration"

echo [11/15] Database schema...
git add supabase-schema.sql
git commit -m "feat: Create database schema with RLS policies"

echo [12/15] Frontend Supabase...
git add frontend-app/src/lib/supabase.js frontend-app/.env.example
git commit -m "feat: Add frontend Supabase client and API helpers"

echo [13/15] Documentation...
git add README.md SUPABASE_SETUP.md GITHUB_PUSH.md .gitignore
git commit -m "docs: Add comprehensive documentation"

echo [14/15] Remaining files...
git add .
git commit -m "chore: Add remaining project files"

echo.
echo ========================================
echo Commit History:
echo ========================================
git log --oneline -15

echo.
echo ========================================
echo [15/15] Ready to push to GitHub!
echo ========================================
echo.
echo Next steps:
echo 1. Create repository at: https://github.com/new
echo    - Name: trutrace-platform
echo    - DO NOT initialize with README
echo.
echo 2. Run these commands:
echo    git remote add origin https://github.com/byteStealthX/trutrace-platform.git
echo    git push -u origin main
echo.
pause
