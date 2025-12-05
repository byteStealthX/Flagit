import { useQuery, useMutation } from '@tanstack/react-query';
import { reportsAPI } from '@/api/reports';

export const useReports = () => {
  return useQuery({
    queryKey: ['reports'],
    queryFn: () => reportsAPI.list().then(r => r.data),
    staleTime: 5 * 60 * 1000,
  });
};

export const useReport = (id: string) => {
  return useQuery({
    queryKey: ['reports', id],
    queryFn: () => reportsAPI.get(id).then(r => r.data),
    staleTime: 5 * 60 * 1000,
  });
};

export const useCreateReport = (options?: any) => {
  return useMutation({
    mutationFn: (data) => reportsAPI.create(data).then(r => r.data),
    ...options,
  });
};

export const useUpdateReport = (id: string, options?: any) => {
  return useMutation({
    mutationFn: (data) => reportsAPI.update(id, data).then(r => r.data),
    ...options,
  });
};

export const useDeleteReport = (options?: any) => {
  return useMutation({
    mutationFn: (id: string) => reportsAPI.delete(id),
    ...options,
  });
};

export const usePublishReport = (options?: any) => {
  return useMutation({
    mutationFn: (id: string) => reportsAPI.publish(id),
    ...options,
  });
};
