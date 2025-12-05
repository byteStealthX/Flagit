import { apiClient } from './client';

export interface Dataset {
  id: string;
  name: string;
  status: 'uploading' | 'processing' | 'ready' | 'error';
  recordsCount: number;
  size: number;
  createdAt: string;
  schema: Record<string, string>;
}

export const datasetsAPI = {
  list: () =>
    apiClient.get<Dataset[]>('/datasets'),
  
  get: (id: string) =>
    apiClient.get<Dataset>(`/datasets/${id}`),
  
  upload: (formData: FormData) =>
    apiClient.post<Dataset>('/datasets/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
  
  delete: (id: string) =>
    apiClient.delete(`/datasets/${id}`),
  
  preview: (id: string, limit: number = 10) =>
    apiClient.get(`/datasets/${id}/preview`, {
      params: { limit },
    }),
};

export default datasetsAPI;
