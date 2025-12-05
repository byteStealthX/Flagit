import { useQuery } from '@tanstack/react-query';
import { analyticsAPI } from '@/api/analytics';

export const useAnalyticsMetrics = (startDate: string, endDate: string) => {
  return useQuery({
    queryKey: ['analytics', 'metrics', startDate, endDate],
    queryFn: () => analyticsAPI.metrics(startDate, endDate).then(r => r.data),
    staleTime: 10 * 60 * 1000,
  });
};

export const useAnalyticsTrends = (days: number = 30) => {
  return useQuery({
    queryKey: ['analytics', 'trends', days],
    queryFn: () => analyticsAPI.trends(days).then(r => r.data),
    staleTime: 10 * 60 * 1000,
  });
};

export const useAnalyticsCategories = (startDate: string, endDate: string) => {
  return useQuery({
    queryKey: ['analytics', 'categories', startDate, endDate],
    queryFn: () => analyticsAPI.categories(startDate, endDate).then(r => r.data),
    staleTime: 10 * 60 * 1000,
  });
};

export const useAnalyticsPlatforms = (startDate: string, endDate: string) => {
  return useQuery({
    queryKey: ['analytics', 'platforms', startDate, endDate],
    queryFn: () => analyticsAPI.platforms(startDate, endDate).then(r => r.data),
    staleTime: 10 * 60 * 1000,
  });
};
