import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export interface ContributorStats {
    user_id: string;
    xp: number;
    verified_count: number;
    rejected_count: number;
    submitted_count: number;
    evidence_count: number;
    badges: string[];
    created_at: string;
    updated_at: string;
}

/**
 * Hook to fetch and subscribe to contributor stats realtime updates
 * @param userId - User ID to fetch stats for
 * @returns {stats, loading, refetch, newBadges}
 */
export function useContributorStats(userId: string | null) {
    const [stats, setStats] = useState<ContributorStats | null>(null);
    const [loading, setLoading] = useState(true);
    const [newBadges, setNewBadges] = useState<string[]>([]);

    const fetchStats = async () => {
        if (!userId) {
            setLoading(false);
            return;
        }

        const { data, error } = await supabase
            .from('contributor_stats')
            .select('*')
            .eq('user_id', userId)
            .single();

        if (!error && data) {
            setStats(data);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchStats();

        if (!userId) return;

        // Subscribe to realtime updates
        const channel = supabase
            .channel(`contributor-stats-${userId}`)
            .on(
                'postgres_changes',
                {
                    event: 'UPDATE',
                    schema: 'public',
                    table: 'contributor_stats',
                    filter: `user_id=eq.${userId}`,
                },
                (payload) => {
                    const updated = payload.new as ContributorStats;

                    // Check for new badges
                    if (stats && updated.badges) {
                        const currentBadges = new Set(stats.badges);
                        const addedBadges = updated.badges.filter(
                            (badge: string) => !currentBadges.has(badge)
                        );

                        if (addedBadges.length > 0) {
                            setNewBadges(addedBadges);
                            // Clear after 5 seconds
                            setTimeout(() => setNewBadges([]), 5000);
                        }
                    }

                    setStats(updated);
                }
            )
            .subscribe();

        return () => {
            channel.unsubscribe();
        };
    }, [userId]);

    return {
        stats,
        loading,
        refetch: fetchStats,
        newBadges,
    };
}
