import { apiClient } from './client';

export interface AnalyticsMetrics {
  timestamp: string;
  verifications: number;
  accuracy: number;
  avgConfidence: number;
  byCategory: Record<string, number>;
  byPlatform: Record<string, number>;
}

export interface AnalyticsTrend {
  date: string;
  verifications: number;
  falsePositives: number;
  verified: number;
}

export const analyticsAPI = {
  // Get all analytics data
  list: () =>
    apiClient.get<{ success: boolean; data: any[] }>('/api/analytics').then(res => res.data.data),

  // Get dashboard stats
  dashboard: () =>
    apiClient.get<{ success: boolean; data: any }>('/api/analytics/dashboard').then(res => res.data.data),

  // Legacy endpoints (kept for compatibility)
  metrics: (startDate: string, endDate: string) =>
    apiClient.get<AnalyticsMetrics>('/api/analytics', {
      params: { startDate, endDate },
    }),

  trends: (days: number = 30) =>
    apiClient.get<AnalyticsTrend[]>('/api/analytics', {
      params: { days },
    }),

  categories: (startDate: string, endDate: string) =>
    apiClient.get<Record<string, number>>('/api/analytics', {
      params: { startDate, endDate },
    }),

  platforms: (startDate: string, endDate: string) =>
    apiClient.get<Record<string, number>>('/api/analytics', {
      params: { startDate, endDate },
    }),
};

export default analyticsAPI;
