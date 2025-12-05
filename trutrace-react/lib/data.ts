// Mock data for TruTrace React Platform

export interface Report {
    id: string;
    title: string;
    type: string;
    priority: 'critical' | 'high' | 'medium' | 'low';
    status: 'active' | 'under review' | 'completed' | 'archived' | 'actioned';
    source: string;
    analyst: string;
    region: string;
    timestamp: string;
    preview: string;
    content?: string;
    attachments?: string[];
    tags?: string[];
    comments?: Array<{ user: string; text: string; time: string }>;
    relatedReports?: string[];
}

export const mockReports: Report[] = [
    {
        id: 'CTA-2024-0921',
        title: 'Cyber Threat Advisory: Project Chimera',
        type: 'Cyber Threat Advisory',
        priority: 'critical',
        status: 'actioned',
        source: 'OSINT Feed',
        analyst: 'Jane Smith',
        region: 'North America',
        timestamp: '2024-09-21T14:30:00Z',
        preview: 'A new state-sponsored threat actor, codenamed "Project Chimera", has been identified targeting financial institutions...',
        content: 'Full report content here...',
        attachments: ['IOC_Report_Chimera.pdf', 'surveillance_photo.jpg'],
        tags: ['Cybersecurity', 'Region-X', 'Threat Actor-Y'],
        comments: [
            { user: 'Jonathan Carter', text: 'The increase in phishing is concerning.', time: '2h ago' },
            { user: 'Maria Rodriguez', text: 'Agreed. I\'ll schedule a meeting with IT.', time: '1h ago' }
        ],
        relatedReports: ['Q3 Threat Landscape Review']
    },
    {
        id: 'GPB-2024-0820',
        title: 'Geopolitical Brief: East Asia Tensions',
        type: 'Geopolitical Brief',
        priority: 'high',
        status: 'under review',
        source: 'IMAGERY',
        analyst: 'Dr. Evelyn Reed',
        region: 'East Asia',
        timestamp: '2024-07-21T11:05:00Z',
        preview: 'Recent naval exercises in the South China Sea have escalated regional tensions...',
        tags: ['Geopolitical', 'East Asia'],
    },
    {
        id: 'MVR-2024-0919',
        title: 'Market Volatility Report: Energy Sector',
        type: 'Market Analysis',
        priority: 'low',
        status: 'archived',
        source: 'NEWSFEED',
        analyst: 'Michael Chen',
        region: 'Global',
        timestamp: '2024-07-20T06:12:00Z',
        preview: 'An unexpected disruption in a major oil pipeline has caused short-term price spikes...',
        tags: ['Energy', 'Markets'],
    },
    {
        id: 'CYB-2024-0017',
        title: 'Operation Nightfall Threat Analysis',
        type: 'Threat Analysis',
        priority: 'medium',
        status: 'under review',
        source: 'AI - Confirmed',
        analyst: 'Dr. Evelyn Reed',
        region: 'Q4',
        timestamp: '2023-10-26T00:00:00Z',
        preview: 'Executive summary of potential cybersecurity threats identified in Q4...',
        tags: ['Cybersecurity', 'Region-X'],
    },
    {
        id: 'DIS-2024-0018',
        title: 'Cross-Border Cyber Infiltration',
        type: 'Disinformation Campaign',
        priority: 'high',
        status: 'active',
        source: 'OSINT',
        analyst: 'Sarah Johnson',
        region: 'Europe',
        timestamp: '2024-07-21T11:05:00Z',
        preview: 'Coordinated disinformation campaign detected across multiple social media platforms...',
        tags: ['Disinformation', 'Europe'],
    },
];

export const dashboardStats = {
    newReports24h: { value: 12, change: 3.5, trend: 'up' as const },
    highPriorityThreats: { value: 5, change: -1.2, trend: 'down' as const },
    reportsUnderReview: { value: 8, change: 5.0, trend: 'up' as const },
    dataSources: { value: 24, change: 0, trend: 'neutral' as const }
};

export const dataSources = [
    { name: 'OSINT Feed', type: 'Open Source Intelligence', status: 'active', reliability: 'A1 - Confirmed', lastUpdate: '5 min ago', reportsCount: 342 },
    { name: 'SIGINT', type: 'Signals Intelligence', status: 'active', reliability: 'A2 - Probably True', lastUpdate: '12 min ago', reportsCount: 156 },
    { name: 'HUMINT', type: 'Human Intelligence', status: 'active', reliability: 'B1 - Confirmed', lastUpdate: '1 hour ago', reportsCount: 89 },
    { name: 'IMAGERY', type: 'Imagery Intelligence', status: 'under review', reliability: 'A1 - Confirmed', lastUpdate: '3 hours ago', reportsCount: 67 },
    { name: 'NEWSFEED', type: 'News Aggregation', status: 'active', reliability: 'C2 - Possibly True', lastUpdate: '15 min ago', reportsCount: 523 },
    { name: 'CYBER-INTEL', type: 'Cyber Threat Intelligence', status: 'active', reliability: 'A1 - Confirmed', lastUpdate: '8 min ago', reportsCount: 234 }
];

export const currentUser = {
    name: 'Alex Mercer',
    role: 'Senior Analyst',
    avatar: 'AM',
    email: 'alex.mercer@trutrace.com'
};
