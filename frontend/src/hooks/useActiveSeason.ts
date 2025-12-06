import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export interface SeasonConfig {
    id: string;
    season_name: string;
    season_start: string;
    season_end: string;
    challenge_goals: {
        verified_flags: number;
        evidence_extractions: number;
        streak_days: number;
        seasonal_xp: number;
    };
    rewards: {
        badge: string;
        bonus_xp: number;
        rank_boost: number;
    };
    is_active: boolean;
}

/**
 * Hook to fetch active season configuration
 */
export function useActiveSeason() {
    const [season, setSeason] = useState<SeasonConfig | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchSeason = async () => {
        const { data, error } = await supabase
            .from('season_config')
            .select('*')
            .eq('is_active', true)
            .single();

        if (!error && data) {
            setSeason(data);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchSeason();

        // Subscribe to season changes
        const channel = supabase
            .channel('active-season')
            .on(
                'postgres_changes',
                {
                    event: '*',
                    schema: 'public',
                    table: 'season_config',
                    filter: 'is_active=eq.true',
                },
                (payload) => {
                    if (payload.eventType === 'UPDATE' || payload.eventType === 'INSERT') {
                        setSeason(payload.new as SeasonConfig);
                    }
                }
            )
            .subscribe();

        return () => {
            channel.unsubscribe();
        };
    }, []);

    return { season, loading, refetch: fetchSeason };
}
