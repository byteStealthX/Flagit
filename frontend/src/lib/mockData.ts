// Mock data generators for demo mode

export interface ThreatReport {
    id: string;
    url: string;
    riskLevel: 'HIGH' | 'MEDIUM' | 'LOW';
    verdict: string;
    reasons: string;
    tips: string;
    sources: string[];
    timestamp: string;
    status: 'verified' | 'flagged' | 'safe';
}

export interface AnalyticsData {
    totalReports: number;
    avgAccuracy: number;
    flaggedClaims: number;
    responseTime: string;
    volumeData: Array<{
        date: string;
        reports: number;
        verified: number;
        flagged: number;
    }>;
}

export interface IntelligenceFeedItem {
    id: string;
    title: string;
    description: string;
    severity: 'critical' | 'high' | 'medium' | 'low';
    source: string;
    timestamp: string;
    category: string;
}

// Generate random threat reports
export function generateMockReports(count: number = 10): ThreatReport[] {
    const riskLevels: Array<'HIGH' | 'MEDIUM' | 'LOW'> = ['HIGH', 'MEDIUM', 'LOW'];
    const statuses: Array<'verified' | 'flagged' | 'safe'> = ['verified', 'flagged', 'safe'];

    const sampleUrls = [
        'https://suspicious-site-example.com/login',
        'https://fake-bank-portal.net/verify',
        'https://legitimate-news-site.com/article',
        'https://phishing-attempt.xyz/urgent',
        'https://trusted-company.com/products',
        'https://scam-lottery.win/claim',
        'https://official-government.gov/services',
        'https://malicious-download.ru/file',
    ];

    const verdicts = {
        HIGH: 'Potential phishing attempt detected',
        MEDIUM: 'Suspicious patterns identified',
        LOW: 'Appears legitimate with minimal risk',
    };

    return Array.from({ length: count }, (_, i) => {
        const riskLevel = riskLevels[Math.floor(Math.random() * riskLevels.length)];
        const status = riskLevel === 'HIGH' ? 'flagged' : riskLevel === 'LOW' ? 'safe' : statuses[Math.floor(Math.random() * statuses.length)];

        return {
            id: `report-${i + 1}`,
            url: sampleUrls[Math.floor(Math.random() * sampleUrls.length)],
            riskLevel,
            verdict: verdicts[riskLevel],
            reasons: riskLevel === 'HIGH'
                ? 'Domain recently registered, suspicious URL patterns, known phishing keywords detected'
                : riskLevel === 'MEDIUM'
                    ? 'Unusual domain structure, mixed content warnings, limited SSL certificate history'
                    : 'Established domain, valid SSL certificate, no known security issues',
            tips: riskLevel === 'HIGH'
                ? 'Do not enter credentials. Report this URL. Verify sender authenticity through official channels.'
                : riskLevel === 'MEDIUM'
                    ? 'Exercise caution. Verify URL authenticity. Avoid entering sensitive information.'
                    : 'Safe to proceed. Always verify URLs match official sources.',
            sources: ['VirusTotal', 'Google Safe Browsing', 'PhishTank'].slice(0, Math.floor(Math.random() * 3) + 1),
            timestamp: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString(),
            status,
        };
    });
}

// Generate mock analytics data
export function generateMockAnalytics(): AnalyticsData {
    return {
        totalReports: 12483,
        avgAccuracy: 94.2,
        flaggedClaims: 2847,
        responseTime: '2.4h',
        volumeData: Array.from({ length: 7 }, (_, i) => ({
            date: `Jan ${i + 1}`,
            reports: Math.floor(Math.random() * 30) + 45,
            verified: Math.floor(Math.random() * 25) + 38,
            flagged: Math.floor(Math.random() * 12) + 7,
        })),
    };
}

// Generate mock intelligence feed
export function generateMockIntelligenceFeed(count: number = 20): IntelligenceFeedItem[] {
    const severities: Array<'critical' | 'high' | 'medium' | 'low'> = ['critical', 'high', 'medium', 'low'];
    const categories = ['Phishing', 'Malware', 'Data Breach', 'Ransomware', 'Social Engineering', 'DDoS'];
    const sources = ['CISA', 'FBI Cyber', 'CERT', 'Threat Intel Platform', 'Security Researcher'];

    const titles = [
        'New phishing campaign targeting financial institutions',
        'Zero-day vulnerability discovered in popular software',
        'Ransomware group claims major healthcare breach',
        'Sophisticated social engineering attack detected',
        'Malware distribution through compromised websites',
        'DDoS attack disrupts major service provider',
        'Credential stuffing attacks on e-commerce platforms',
        'Supply chain attack affects multiple organizations',
    ];

    return Array.from({ length: count }, (_, i) => ({
        id: `feed-${i + 1}`,
        title: titles[Math.floor(Math.random() * titles.length)],
        description: 'Detailed analysis and indicators of compromise available. Immediate action recommended for affected organizations.',
        severity: severities[Math.floor(Math.random() * severities.length)],
        source: sources[Math.floor(Math.random() * sources.length)],
        timestamp: new Date(Date.now() - Math.random() * 24 * 60 * 60 * 1000).toISOString(),
        category: categories[Math.floor(Math.random() * categories.length)],
    }));
}

// Generate mock user activity
export function generateMockActivity(count: number = 15) {
    const actions = ['Verified URL', 'Generated Report', 'Flagged Threat', 'Updated Settings', 'Exported Data'];
    const users = ['Admin User', 'Security Analyst', 'Threat Hunter', 'SOC Operator'];

    return Array.from({ length: count }, (_, i) => ({
        id: `activity-${i + 1}`,
        user: users[Math.floor(Math.random() * users.length)],
        action: actions[Math.floor(Math.random() * actions.length)],
        timestamp: new Date(Date.now() - Math.random() * 48 * 60 * 60 * 1000).toISOString(),
        details: 'Action completed successfully',
    }));
}

// Generate mock geographic data
export function generateMockGeographicData() {
    return [
        { region: 'North America', threats: 4500, lat: 40, lng: -100 },
        { region: 'Europe', threats: 3200, lat: 50, lng: 10 },
        { region: 'Asia Pacific', threats: 2800, lat: 35, lng: 105 },
        { region: 'Latin America', threats: 1500, lat: -15, lng: -60 },
        { region: 'Middle East', threats: 900, lat: 25, lng: 45 },
        { region: 'Africa', threats: 600, lat: 0, lng: 20 },
    ];
}

// Export all mock data
export const mockData = {
    reports: generateMockReports(50),
    analytics: generateMockAnalytics(),
    intelligenceFeed: generateMockIntelligenceFeed(30),
    activity: generateMockActivity(20),
    geographicData: generateMockGeographicData(),
};
