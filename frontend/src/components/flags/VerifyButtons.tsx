import { useEdgeFunction } from '@/hooks/useEdgeFunction';
import { toast } from 'react-hot-toast';
import { CheckCircle, XCircle } from 'lucide-react';

interface VerifyButtonsProps {
    flagId: string;
    onSuccess?: () => void;
}

export function VerifyButtons({ flagId, onSuccess }: VerifyButtonsProps) {
    const { run, loading } = useEdgeFunction('verify-flag');

    const handleVerify = async (status: 'verified' | 'rejected') => {
        try {
            await run({ flag_id: flagId, status });
            toast.success(`Flag ${status}!`);
            onSuccess?.();
        } catch (error: any) {
            toast.error(error.message || `Failed to ${status} flag`);
        }
    };

    return (
        <div className="flex gap-3">
            <button
                onClick={() => handleVerify('verified')}
                disabled={loading}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
                {loading ? (
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                ) : (
                    <CheckCircle className="w-4 h-4" />
                )}
                Verify
            </button>

            <button
                onClick={() => handleVerify('rejected')}
                disabled={loading}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
                {loading ? (
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                ) : (
                    <XCircle className="w-4 h-4" />
                )}
                Reject
            </button>
        </div>
    );
}
