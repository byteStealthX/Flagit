# TruTrace - News API Integration Guide

## 🔑 Getting Your News API Key

1. Visit [NewsAPI.org](https://newsapi.org/)
2. Click "Get API Key" and sign up for a free account
3. Copy your API key from the dashboard

## ⚙️ Configuration

### Step 1: Create Environment File

Create a `.env` file in the `frontend-app` directory:

```bash
cd frontend-app
cp .env.example .env
```

### Step 2: Add Your API Key

Edit the `.env` file and add your News API key:

```env
VITE_NEWS_API_KEY=your_actual_api_key_here
```

## 🚀 Features

### Real-Time News Integration

The Intelligence Feed now fetches **real news articles** from News API:

- **Auto-loads** latest news on page load
- **Refresh button** to get updated articles
- **Fallback** to mock data if API fails
- **Image support** for articles with photos
- **Source links** to original articles

### API Functions

Located in `src/data/mockData.js`:

- `fetchNewsArticles(category, country)` - Fetch top headlines
- `searchNews(query)` - Search for specific topics

### Categories Available

- `general` - General news
- `business` - Business news
- `technology` - Tech news
- `science` - Science news
- `health` - Health news
- `sports` - Sports news
- `entertainment` - Entertainment news

## 🎯 Usage

### Fetch News by Category

```javascript
import { fetchNewsArticles } from '../data/mockData'

// Fetch technology news from US
const articles = await fetchNewsArticles('technology', 'us')
```

### Search News

```javascript
import { searchNews } from '../data/mockData'

// Search for specific topics
const results = await searchNews('artificial intelligence')
```

## 📊 Data Transformation

News API articles are automatically transformed to match the feed item format:

```javascript
{
  id: number,
  status: 'CONFIRMED' | 'PENDING',
  title: string,
  description: string,
  actor: string,        // Source name
  views: string,        // Random generated
  shares: string,       // Random generated
  accuracy: string,
  severity: string,
  date: string,
  url: string,          // Original article URL
  image: string,        // Article image
  author: string        // Article author
}
```

## 🔄 How It Works

1. **Page Load**: Feed component auto-fetches news articles
2. **Refresh**: Click "Refresh News" button to get latest articles
3. **Display**: Articles shown in grid/list view with images
4. **Click**: View detailed analysis for each article
5. **Source**: Click "Source" button to read original article

## ⚠️ Important Notes

### Free Tier Limits

- **100 requests/day** on free plan
- **Headlines**: Last 24 hours only
- **Everything**: Last 30 days

### Rate Limiting

The app includes error handling for:
- API key errors
- Rate limit exceeded
- Network failures
- Invalid responses

### Fallback Behavior

If News API fails:
- App automatically falls back to mock data
- User sees notification in page subtitle
- All functionality continues to work

## 🎨 UI Enhancements

### New Features Added

1. **Refresh Button** - Reload latest news
2. **Loading State** - Spinner while fetching
3. **Article Images** - Display news photos
4. **Source Links** - Link to original articles
5. **Author Info** - Show article authors

## 🧪 Testing

### Test with Different Categories

Modify the `loadNewsArticles` function in `Feed.jsx`:

```javascript
// Technology news
const articles = await fetchNewsArticles('technology', 'us')

// Business news
const articles = await fetchNewsArticles('business', 'us')

// Health news
const articles = await fetchNewsArticles('health', 'us')
```

### Test Search Functionality

Add a search feature to the Feed page:

```javascript
const handleSearch = async (query) => {
  const results = await searchNews(query)
  setFeedItems(results)
}
```

## 🚀 Next Steps

1. **Get API Key** from NewsAPI.org
2. **Add to .env** file
3. **Restart dev server**: `npm run dev`
4. **Test the feed** - Click "Refresh News"

## 📝 Example .env File

```env
# News API Configuration
VITE_NEWS_API_KEY=1234567890abcdef1234567890abcdef

# Other environment variables
# VITE_BACKEND_URL=http://localhost:3000
```

---

**Now your Intelligence Feed displays real news articles!** 🎉
