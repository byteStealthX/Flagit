import express from 'express';
import cors from 'cors';
import { ChatOpenAI } from '@langchain/openai';
import { TavilySearchResults } from '@langchain/community/tools/tavily_search';
import { StructuredOutputParser } from 'langchain/output_parsers';
import { PromptTemplate } from '@langchain/core/prompts';
import { z } from 'zod';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// OpenAI API Key Rotation (fallback support)
const OPENAI_KEYS = [
    process.env.OPENAI_API_KEY,
    process.env.OPENAI_API_KEY_2,
    process.env.OPENAI_API_KEY_3,
    process.env.OPENAI_API_KEY_4,
].filter(Boolean);

let currentKeyIndex = 0;

const getNextApiKey = () => {
    const key = OPENAI_KEYS[currentKeyIndex];
    currentKeyIndex = (currentKeyIndex + 1) % OPENAI_KEYS.length;
    return key;
};

// Initialize OpenAI model with key rotation
const createModel = () => new ChatOpenAI({
    modelName: 'gpt-4o-mini',
    temperature: 0.3,
    openAIApiKey: getNextApiKey(),
});

// Initialize Tavily Search (optional)
let tavilySearch = null;
if (process.env.TAVILY_API_KEY) {
    tavilySearch = new TavilySearchResults({
        apiKey: process.env.TAVILY_API_KEY,
        maxResults: 3,
    });
    console.log('✅ Tavily search enabled');
} else {
    console.log('⚠️  Tavily search disabled (no API key)');
}

// Define output schema
const outputSchema = z.object({
    riskLevel: z.enum(['HIGH', 'MEDIUM', 'LOW']).describe('The risk level of the URL'),
    verdict: z.string().describe('A brief summary of the threat assessment'),
    reasons: z.string().describe('Detailed explanation of why this URL is risky or safe'),
    tips: z.string().describe('Safety recommendations for the user'),
    sources: z.array(z.string()).describe('Optional sources or evidence'),
});

const parser = StructuredOutputParser.fromZodSchema(outputSchema);

// URL normalization function
function normalizeUrl(url) {
    if (!url) return null;

    let normalized = url.trim().toLowerCase();

    // Add protocol if missing
    if (!normalized.startsWith('http://') && !normalized.startsWith('https://')) {
        normalized = 'https://' + normalized;
    }

    // Basic validation
    try {
        new URL(normalized);
        return normalized;
    } catch (error) {
        return null;
    }
}

// Main verification endpoint
app.post('/api/verify', async (req, res) => {
    try {
        const { url, context = '' } = req.body;

        // Validate input
        if (!url) {
            return res.status(400).json({
                error: 'URL is required',
                message: 'Please provide a URL to analyze',
            });
        }

        // Normalize URL
        const normalizedUrl = normalizeUrl(url);
        if (!normalizedUrl) {
            return res.status(400).json({
                error: 'Invalid URL format',
                message: 'Please provide a valid URL',
            });
        }

        // Optional: Search for threat intelligence using Tavily
        let searchResults = [];
        let searchContext = '';

        if (tavilySearch) {
            try {
                const domain = new URL(normalizedUrl).hostname;
                const searchQuery = `${domain} phishing scam malicious threat`;
                const results = await tavilySearch.invoke(searchQuery);

                if (results && Array.isArray(results)) {
                    searchResults = results.map(r => ({
                        title: r.title || '',
                        url: r.url || '',
                        content: r.content || '',
                    }));

                    searchContext = searchResults
                        .map(r => `${r.title}: ${r.content}`)
                        .join('\n');
                }
            } catch (searchError) {
                console.error('Tavily search error:', searchError.message);
                // Continue without search results
            }
        }

        // Create prompt template
        const formatInstructions = parser.getFormatInstructions();

        const promptTemplate = PromptTemplate.fromTemplate(`
You are an expert cybersecurity analyst specializing in phishing detection and URL threat assessment.

Analyze the following URL and optional context to determine if it's a security threat.

URL: {url}
Context: {context}

${searchContext ? `\nThreat Intelligence:\n{searchContext}\n` : ''}

Consider these factors:
1. Domain structure and legitimacy
2. Presence of suspicious patterns (typosquatting, homograph attacks)
3. URL shorteners or redirects
4. Keywords associated with phishing (login, verify, urgent, payment, etc.)
5. Context clues from the message
6. Common phishing tactics and social engineering indicators
${searchContext ? '7. Real-time threat intelligence from web search' : ''}

Classify the risk level as:
- HIGH: Clear phishing attempt, malicious patterns, or high-risk indicators
- MEDIUM: Suspicious elements present but not definitively malicious
- LOW: Appears legitimate with minimal risk indicators

Provide a clear verdict, detailed reasoning, and actionable safety tips.

{format_instructions}

Return ONLY valid JSON, no additional text.
`);

        const prompt = await promptTemplate.format({
            url: normalizedUrl,
            context: context || 'No additional context provided',
            searchContext: searchContext || '',
            format_instructions: formatInstructions,
        });

        // Get AI response with key rotation
        const model = createModel();
        const response = await model.invoke(prompt);

        // Parse structured output
        const parsed = await parser.parse(response.content);

        // Add search sources if available
        if (searchResults.length > 0) {
            parsed.sources = searchResults.map(r => r.url);
        }

        // Return result
        res.json({
            url: normalizedUrl,
            ...parsed,
        });

    } catch (error) {
        console.error('Error processing request:', error);

        res.status(500).json({
            error: 'Internal server error',
            message: 'Failed to analyze URL. Please try again.',
            details: process.env.NODE_ENV === 'development' ? error.message : undefined,
        });
    }
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({
        status: 'healthy',
        service: 'AntiGravity Backend',
        version: '1.0.0',
        timestamp: new Date().toISOString(),
    });
});

// Root endpoint
app.get('/', (req, res) => {
    res.json({
        service: 'AntiGravity - AI Link Threat Sentinel',
        version: '1.0.0',
        description: 'AI-powered URL threat detection engine',
        endpoints: {
            verify: 'POST /api/verify',
            health: 'GET /health',
        },
        documentation: 'See README.md for API documentation',
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 AntiGravity Backend running on port ${PORT}`);
    console.log(`📡 API endpoint: http://localhost:${PORT}/api/verify`);
    console.log(`💚 Health check: http://localhost:${PORT}/health`);
    console.log(`🔑 OpenAI keys loaded: ${OPENAI_KEYS.length}`);
    console.log(`🔍 Tavily search: ${tavilySearch ? 'enabled' : 'disabled'}`);
});

export default app;
