import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { verifyAPI, VerifyRequest, VerifyResponse } from '@/api/verify';

export const useVerifyText = (options?: any) => {
  return useMutation({
    mutationFn: (text: string) => verifyAPI.text(text).then(r => r.data),
    ...options,
  });
};

export const useVerifyUrl = (options?: any) => {
  return useMutation({
    mutationFn: (url: string) => verifyAPI.url(url).then(r => r.data),
    ...options,
  });
};

export const useVerifyImage = (options?: any) => {
  return useMutation({
    mutationFn: (imageUrl: string) => verifyAPI.image(imageUrl).then(r => r.data),
    ...options,
  });
};

export const useVerifyVideo = (options?: any) => {
  return useMutation({
    mutationFn: (videoUrl: string) => verifyAPI.video(videoUrl).then(r => r.data),
    ...options,
  });
};

export const useVerifyDocument = (options?: any) => {
  return useMutation({
    mutationFn: (documentUrl: string) => verifyAPI.document(documentUrl).then(r => r.data),
    ...options,
  });
};

export const useVerifyEntity = (options?: any) => {
  return useMutation({
    mutationFn: ({ entityName, context }: { entityName: string; context: string }) =>
      verifyAPI.entity(entityName, context).then(r => r.data),
    ...options,
  });
};

export const useVerifyCrossSource = (options?: any) => {
  return useMutation({
    mutationFn: ({ claim, sources }: { claim: string; sources: string[] }) =>
      verifyAPI.crossSource(claim, sources).then(r => r.data),
    ...options,
  });
};
