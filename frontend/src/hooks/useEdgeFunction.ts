import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export function useEdgeFunction<T = any>(functionName: string) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [result, setResult] = useState<T | null>(null);

    const run = async (payload: any) => {
        setLoading(true);
        setError(null);
        setResult(null);

        try {
            // Get current user session
            const { data: { session } } = await supabase.auth.getSession();

            if (!session?.access_token) {
                throw new Error('Not authenticated');
            }

            // Call Edge Function
            const { data, error: fnError } = await supabase.functions.invoke(functionName, {
                body: payload,
                headers: {
                    Authorization: `Bearer ${session.access_token}`,
                },
            });

            if (fnError) throw fnError;

            setResult(data);
            return data;
        } catch (err: any) {
            setError(err.message || 'An error occurred');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return { run, loading, error, result };
}
