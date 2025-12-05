import { apiClient } from './client';

export interface Report {
  id: string;
  title: string;
  status: 'draft' | 'published' | 'archived';
  claimsCount: number;
  verifiedCount: number;
  createdAt: string;
  updatedAt: string;
  author: string;
}

export interface CreateReportRequest {
  title: string;
  description: string;
  claims: string[];
}

export const reportsAPI = {
  list: () =>
    apiClient.get<{ success: boolean; data: Report[] }>('/api/reports').then(res => res.data.data),

  get: (id: string) =>
    apiClient.get<{ success: boolean; data: Report }>(`/api/reports/${id}`).then(res => res.data.data),

  create: (data: CreateReportRequest) =>
    apiClient.post<{ success: boolean; data: Report }>('/api/reports', data).then(res => res.data.data),

  update: (id: string, data: Partial<Report>) =>
    apiClient.put<{ success: boolean; data: Report }>(`/api/reports/${id}`, data).then(res => res.data.data),

  delete: (id: string) =>
    apiClient.delete(`/api/reports/${id}`),

  // Note: publish and archive not implemented in backend yet
  publish: (id: string) =>
    apiClient.put(`/api/reports/${id}`, { status: 'published' }),

  archive: (id: string) =>
    apiClient.put(`/api/reports/${id}`, { status: 'archived' }),
};

export default reportsAPI;
