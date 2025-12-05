import { apiClient } from './client';

export interface VerifyRequest {
  url: string;
  context?: string;
}

export interface VerifyResponse {
  url: string;
  riskLevel: 'HIGH' | 'MEDIUM' | 'LOW';
  verdict: string;
  reasons: string;
  tips: string;
  sources: string[];
}

export const verifyAPI = {
  // Main URL verification endpoint
  url: (url: string, context?: string) =>
    apiClient.post<VerifyResponse>('/api/verify', { url, context }).then(res => res.data),

  // Legacy endpoints (not implemented in backend yet)
  text: (text: string) =>
    apiClient.post<VerifyResponse>('/api/verify', { url: text }),

  image: (imageUrl: string) =>
    apiClient.post<VerifyResponse>('/api/verify', { url: imageUrl }),

  video: (videoUrl: string) =>
    apiClient.post<VerifyResponse>('/api/verify', { url: videoUrl }),

  document: (documentUrl: string) =>
    apiClient.post<VerifyResponse>('/api/verify', { url: documentUrl }),

  crossSource: (claim: string, sources: string[]) =>
    apiClient.post<VerifyResponse>('/api/verify', { url: claim }),

  entity: (entityName: string, context: string) =>
    apiClient.post<VerifyResponse>('/api/verify', { url: entityName, context }),
};

export default verifyAPI;
