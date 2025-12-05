// API Configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

// Types
export interface Report {
    id: string;
    title: string;
    description?: string;
    content?: string;
    report_type?: string;
    priority: 'Critical' | 'High' | 'Medium' | 'Low';
    status: 'Active' | 'Under Review' | 'Completed' | 'Archived';
    source?: string;
    region?: string;
    report_id: string;
    analyst?: {
        full_name: string;
        email: string;
    };
    tags?: any[];
    comments?: any[];
    attachments?: any[];
    created_at: string;
    updated_at: string;
}

export interface DashboardStats {
    totalReports: number;
    highPriority: number;
    underReview: number;
    analytics?: any;
}

export interface AnalyticsData {
    id: string;
    date: string;
    total_reports: number;
    new_threats: number;
    high_priority_alerts: number;
    report_volume: number;
    created_at: string;
}

export interface URLVerificationResult {
    url: string;
    riskLevel: 'HIGH' | 'MEDIUM' | 'LOW';
    verdict: string;
    reasons: string;
    tips: string;
    sources: string[];
}

export interface APIResponse<T> {
    success: boolean;
    data: T;
}

// API Helper Function
async function fetchAPI<T>(endpoint: string, options: RequestInit = {}): Promise<APIResponse<T>> {
    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
            ...options,
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || error.error || 'API request failed');
        }

        return await response.json();
    } catch (error) {
        console.error(`API Error (${endpoint}):`, error);
        throw error;
    }
}

// Reports API
export async function getReports(): Promise<APIResponse<Report[]>> {
    return fetchAPI<Report[]>('/api/reports');
}

export async function getReportById(id: string): Promise<APIResponse<Report>> {
    return fetchAPI<Report>(`/api/reports/${id}`);
}

export async function createReport(reportData: Partial<Report>): Promise<APIResponse<Report>> {
    return fetchAPI<Report>('/api/reports', {
        method: 'POST',
        body: JSON.stringify(reportData),
    });
}

export async function updateReport(id: string, reportData: Partial<Report>): Promise<APIResponse<Report>> {
    return fetchAPI<Report>(`/api/reports/${id}`, {
        method: 'PUT',
        body: JSON.stringify(reportData),
    });
}

export async function deleteReport(id: string): Promise<APIResponse<{ message: string }>> {
    return fetchAPI<{ message: string }>(`/api/reports/${id}`, {
        method: 'DELETE',
    });
}

// Analytics API
export async function getAnalytics(): Promise<APIResponse<AnalyticsData[]>> {
    return fetchAPI<AnalyticsData[]>('/api/analytics');
}

export async function getDashboardStats(): Promise<APIResponse<DashboardStats>> {
    return fetchAPI<DashboardStats>('/api/analytics/dashboard');
}

// Comments API
export async function getComments(reportId: string): Promise<APIResponse<any[]>> {
    return fetchAPI<any[]>(`/api/comments/report/${reportId}`);
}

export async function addComment(commentData: { report_id: string; user_id: string; content: string }): Promise<APIResponse<any>> {
    return fetchAPI<any>('/api/comments', {
        method: 'POST',
        body: JSON.stringify(commentData),
    });
}

// URL Verification API
export async function verifyURL(url: string, context?: string): Promise<URLVerificationResult> {
    const response = await fetch(`${API_BASE_URL}/api/verify`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url, context }),
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to verify URL');
    }

    return await response.json();
}

// Health Check
export async function checkHealth(): Promise<{ status: string; service: string; version: string; timestamp: string }> {
    const response = await fetch(`${API_BASE_URL}/health`);
    return await response.json();
}
