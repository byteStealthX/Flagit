# FlagIt - AI-Powered Misinformation Detection Platform

A sophisticated web application for detecting and analyzing misinformation using AI-powered verification tools and real-time threat intelligence.

## 🚀 Features

### Backend
- **AI-Powered Verification**: OpenAI GPT-4 integration for content analysis
- **Mock Mode Fallback**: Automatic simulation mode when API keys are invalid/unavailable  
- **Real-time Threat Intelligence**: Tavily API integration for web search and fact-checking
- **Supabase Database**: Persistent storage for reports, users, and analytics
- **RESTful API**: Clean endpoints for verification, reports, and analytics

### Frontend  
- **Modern React UI**: Built with React, TypeScript, and Tailwind CSS
- **Real-time Verification**: Submit URLs and get instant AI analysis
- **Interactive Dashboard**: Live KPIs, charts, and system health monitoring
- **Reports Management**: View, filter, and manage investigation reports
- **Responsive Design**: Premium glassmorphic UI with smooth animations

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account
- OpenAI API key (optional - Mock Mode available)
- Tavily API key (optional)

## 🛠️ Setup Instructions

### 1. Clone & Install

```bash
cd "miss info"
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create `.env` file with your credentials:
```env
OPENAI_API_KEY=your-openai-key-here
TAVILY_API_KEY=your-tavily-key-here
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_KEY=your-service-key
SUPABASE_ANON_KEY=your-anon-key
PORT=3000
NODE_ENV=development
```

### 3. Database Setup

1. Go to [Supabase SQL Editor](https://supabase.com/dashboard)
2. Copy contents from `backend/schema.sql`
3. Paste and run in SQL Editor
4. Verify tables are created

See `DATABASE_SETUP.md` for detailed instructions.

### 4. Frontend Setup

```bash
cd ../frontend
npm install
```

### 5. Start Development Servers

**Terminal 1 - Backend:**
```bash
cd backend
node server.js
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

Visit `http://localhost:5173` in your browser.

## 🔑 API Endpoints

### Verification
- `POST /api/verify` - Analyze URL for misinformation
  ```json
  {
    "url": "https://example.com",
    "context": "optional context"
  }
  ```

### Reports
- `GET /api/reports` - Fetch all reports
- `POST /api/reports` - Create new report
- `GET /api/reports/:id` - Get single report
- `PUT /api/reports/:id` - Update report
- `DELETE /api/reports/:id` - Delete report

### Analytics
- `GET /api/analytics/dashboard` - Dashboard stats
- `GET /api/comments/report/:reportId` - Report comments

## 🎯 Key Features Explained

### Mock Mode (Resilience Feature)
If your OpenAI API key is invalid or quota exceeded, the system automatically falls back to Mock Mode:
- Generates realistic simulated responses
- Ensures app never breaks during development
- Logs warnings in console for awareness

### Verification Flow
1. User enters URL in Verification Tools page
2. Frontend sends request to `/api/verify`
3. Backend queries Tavily for threat intelligence (if available)
4. OpenAI analyzes content (or Mock Mode simulates)
5. Response includes: Risk Level, Verdict, Detailed Reasons, Safety Tips
6. Frontend displays results with confidence metrics

## 📁 Project Structure

```
miss info/
├── backend/
│   ├── server.js           # Main Express server
│   ├── supabase.js         # Supabase client
│   ├── routes/             # API route handlers
│   ├── schema.sql          # Database schema
│   └── .env                # Environment variables
├── frontend/
│   ├── src/
│   │   ├── pages/          # React pages
│   │   ├── components/     # Reusable components
│   │   ├── lib/
│   │   │   └── api.ts      # Backend API client
│   │   └── styles/         # CSS and design tokens
│   └── package.json
└── DATABASE_SETUP.md       # Database instructions
```

## 🧪 Testing

1. **Health Check**: Visit `http://localhost:3000/health`
2. **Verify API**: Use Verification Tools page
3. **Check Reports**: Navigate to Reports page
4. **Dashboard**: View Dashboard for live stats

## 🚢 Deployment

### Backend (Render/Railway)
1. Connect GitHub repository
2. Set environment variables
3. Deploy from `backend/` directory
4. Update frontend API_BASE_URL

### Frontend (Vercel)
1. Import GitHub repository
2. Set root directory to `frontend/`
3. Deploy automatically

## 🤝 Contributing

This is a demonstration project. For production use:
- Implement proper authentication
- Enhance RLS policies in Supabase
- Add rate limiting
- Set up error monitoring (e.g., Sentry)
- Configure CORS for production domains

## 📝 License

MIT License - Feel free to use for learning and demonstration purposes.

## 🆘 Troubleshooting

**"relation does not exist" error?**
→ Run `schema.sql` in Supabase SQL Editor

**Mock Mode always activating?**
→ Check your OpenAI API key format (should start with `sk-proj-...`)

**CORS errors?**
→ Ensure backend PORT matches frontend API calls

**Port already in use?**
→ Run `taskkill /F /IM node.exe` (Windows) to kill all Node processes

## 📞 Support

Created as part of the FlagIt misinformation detection platform demonstration.
