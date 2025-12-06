import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { supabase } from '@/lib/supabase';
import { useEdgeFunction } from '@/hooks/useEdgeFunction';
import { toast } from 'react-hot-toast';
import { Upload, File } from 'lucide-react';

interface EvidenceUploaderProps {
    flagId: string;
    onSuccess?: () => void;
}

export function EvidenceUploader({ flagId, onSuccess }: EvidenceUploaderProps) {
    const [uploading, setUploading] = useState(false);
    const { run: extract, loading: extracting } = useEdgeFunction('extract-evidence');

    const onDrop = useCallback(async (acceptedFiles: File[]) => {
        if (acceptedFiles.length === 0) return;

        const file = acceptedFiles[0];
        setUploading(true);

        try {
            // Upload to Supabase Storage
            const fileName = `${flagId}/${Date.now()}-${file.name}`;
            const { data: uploadData, error: uploadError } = await supabase.storage
                .from('flag-files')
                .upload(fileName, file);

            if (uploadError) throw uploadError;

            toast.success('File uploaded successfully!');

            // Extract evidence using Edge Function
            await extract({
                flag_id: flagId,
                bucket: 'flag-files',
                path: uploadData.path,
            });

            toast.success('Evidence extracted!');
            onSuccess?.();
        } catch (error: any) {
            toast.error(error.message || 'Failed to upload file');
        } finally {
            setUploading(false);
        }
    }, [flagId, extract, onSuccess]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'image/*': ['.png', '.jpg', '.jpeg', '.gif'],
            'application/pdf': ['.pdf'],
            'audio/*': ['.mp3', '.wav', '.m4a'],
            'application/json': ['.json'],
            'text/csv': ['.csv'],
        },
        maxSize: 10485760, // 10MB
        multiple: false,
    });

    const isLoading = uploading || extracting;

    return (
        <div className="w-full">
            <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors ${isDragActive
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-300 hover:border-gray-400'
                    } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
                <input {...getInputProps()} disabled={isLoading} />

                <div className="flex flex-col items-center gap-3">
                    {isLoading ? (
                        <>
                            <svg className="animate-spin h-8 w-8 text-blue-600" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            <p className="text-sm text-gray-600">
                                {uploading ? 'Uploading...' : 'Extracting evidence...'}
                            </p>
                        </>
                    ) : isDragActive ? (
                        <>
                            <Upload className="w-8 h-8 text-blue-600" />
                            <p className="text-sm text-gray-600">Drop the file here...</p>
                        </>
                    ) : (
                        <>
                            <File className="w-8 h-8 text-gray-400" />
                            <p className="text-sm text-gray-600">
                                Drag & drop a file here, or click to select
                            </p>
                            <p className="text-xs text-gray-500">
                                Supports: images, PDF, audio, JSON, CSV (max 10MB)
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
