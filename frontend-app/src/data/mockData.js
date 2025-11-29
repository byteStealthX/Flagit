// News API configuration
const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY || 'YOUR_NEWS_API_KEY_HERE'
const NEWS_API_URL = 'https://newsapi.org/v2/top-headlines'

// Fetch news articles
export async function fetchNewsArticles(category = 'general', country = 'us') {
    try {
        const response = await fetch(
            `${NEWS_API_URL}?country=${country}&category=${category}&apiKey=${NEWS_API_KEY}`
        )

        if (!response.ok) {
            throw new Error('Failed to fetch news')
        }

        const data = await response.json()

        // Transform news articles to feed items format
        return data.articles.map((article, index) => ({
            id: index + 1,
            status: Math.random() > 0.5 ? 'CONFIRMED' : 'PENDING',
            title: article.title,
            description: article.description || article.content || 'No description available',
            actor: article.source.name,
            views: `${Math.floor(Math.random() * 500)}K`,
            shares: `${Math.floor(Math.random() * 50)}K`,
            accuracy: Math.random() > 0.5 ? 'High' : 'Medium',
            severity: Math.random() > 0.7 ? 'High' : Math.random() > 0.4 ? 'Medium' : 'Low',
            date: new Date(article.publishedAt).toLocaleDateString(),
            url: article.url,
            image: article.urlToImage,
            author: article.author
        }))
    } catch (error) {
        console.error('Error fetching news:', error)
        return []
    }
}

// Fetch news by search query
export async function searchNews(query) {
    try {
        const response = await fetch(
            `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&apiKey=${NEWS_API_KEY}&pageSize=20`
        )

        if (!response.ok) {
            throw new Error('Failed to search news')
        }

        const data = await response.json()

        return data.articles.map((article, index) => ({
            id: index + 1,
            status: 'PENDING',
            title: article.title,
            description: article.description || article.content || 'No description available',
            actor: article.source.name,
            views: `${Math.floor(Math.random() * 500)}K`,
            shares: `${Math.floor(Math.random() * 50)}K`,
            accuracy: 'Unverified',
            severity: 'Medium',
            date: new Date(article.publishedAt).toLocaleDateString(),
            url: article.url,
            image: article.urlToImage,
            author: article.author
        }))
    } catch (error) {
        console.error('Error searching news:', error)
        return []
    }
}

// Mock data for demonstration (fallback)
export const mockStats = {
    totalClaims: 1248,
    actors: 86,
    impactScore: 542,
    domains: 14,
    totalReports: 1247,
    highRiskForms: 342,
    verifiedClaims: 891,
    avgResponseTime: '2.4h'
}

export const mockFeedItems = [
    {
        id: 1,
        status: 'CONFIRMED',
        title: 'Official Election Security Memo Circulating',
        description: 'A fabricated document claims to be from the Department of Homeland Security is rapidly spreading across social media platforms. The document contains false information about voting procedures and has been shared over 15k times.',
        actor: 'State Actors',
        views: '245.3K',
        shares: '15.2K',
        accuracy: 'Low',
        severity: 'High',
        date: '2025-01-15'
    },
    {
        id: 2,
        status: 'PENDING',
        title: 'Deepfake Video of Political Figure Goes Viral',
        description: 'AI-generated content showing a political figure making controversial statements. Advanced analysis indicates synthetic media patterns. This content has been flagged by multiple fact-checkers.',
        actor: 'Unknown',
        views: '892K',
        shares: '45.7K',
        accuracy: 'Fabricated',
        severity: 'Critical',
        date: '2025-01-14'
    },
    {
        id: 3,
        status: 'CONFIRMED',
        title: 'Misleading Health Claim Database Flagged',
        description: 'A series of posts claiming unverified health benefits have been identified across multiple platforms. The claims cite non-existent studies and have reached vulnerable populations.',
        actor: 'Commercial Entities',
        views: '156.8K',
        shares: '8.9K',
        accuracy: 'Misleading',
        severity: 'Medium',
        date: '2025-01-13'
    }
]

export const mockReports = [
    {
        id: 1,
        name: 'Weekly Intelligence Summary - Week 4',
        type: 'Weekly Summary',
        status: 'Completed',
        generated: 'Jan 28, 2025 14:23',
        size: '2.4 MB'
    },
    {
        id: 2,
        name: 'January 2025 Monthly Analysis',
        type: 'Monthly Analysis',
        status: 'In Processing',
        generated: 'Jan 28, 2025 09:15',
        size: '5.1 MB'
    },
    {
        id: 3,
        name: 'Election Misinformation Threat Assessment',
        type: 'Custom Report',
        status: 'Completed',
        generated: 'Jan 27, 2025 16:47',
        size: '8.9 MB'
    },
    {
        id: 4,
        name: 'Weekly Intelligence Summary - Week 3',
        type: 'Weekly Summary',
        status: 'Scheduled',
        generated: 'Feb 21, 2025 14:00',
        size: '--'
    }
]

export const mockAnalysisData = {
    score: 74,
    sentiment: 'Negative',
    languagePatterns: ['Urgency Tactics', 'Emotional Appeals', 'Unverified Claims'],
    credibilitySignals: {
        sourceAuthority: 45,
        factualAccuracy: 32,
        expertiseLevel: 28
    },
    factChecks: [
        {
            title: 'Third Claims About Infrastructure Spending',
            source: 'FactCheck.org',
            verdict: 'Mostly False',
            score: 25
        },
        {
            title: 'Report: Value Adds Myth',
            source: 'Snopes',
            verdict: 'False',
            score: 15
        }
    ]
}
