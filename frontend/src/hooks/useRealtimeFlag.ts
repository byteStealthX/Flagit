import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

interface Flag {
    id: string;
    title: string;
    content: string;
    type: string;
    status: string;
    metadata: any;
    created_at: string;
    created_by: string;
}

export function useRealtimeFlag(flagId: string) {
    const [flag, setFlag] = useState<Flag | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Initial fetch
        const fetchFlag = async () => {
            const { data, error } = await supabase
                .from('flags')
                .select('*')
                .eq('id', flagId)
                .single();

            if (!error && data) {
                setFlag(data);
            }
            setLoading(false);
        };

        fetchFlag();

        // Subscribe to realtime updates
        const channel = supabase
            .channel(`flag-${flagId}`)
            .on(
                'postgres_changes',
                {
                    event: '*',
                    schema: 'public',
                    table: 'flags',
                    filter: `id=eq.${flagId}`,
                },
                (payload) => {
                    if (payload.eventType === 'UPDATE') {
                        setFlag(payload.new as Flag);
                    }
                }
            )
            .subscribe();

        return () => {
            channel.unsubscribe();
        };
    }, [flagId]);

    return {
        flag, loading, refetch: async () => {
            const { data } = await supabase.from('flags').select('*').eq('id', flagId).single();
            if (data) setFlag(data);
        }
    };
}
