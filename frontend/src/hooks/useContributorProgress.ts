import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export interface ContributorProgressData {
    user_id: string;
    current_streak_days: number;
    longest_streak_days: number;
    last_activity_date: string | null;
    seasonal_points: number;
    seasonal_badges: string[];
    seasonal_rank: number;
    challenge_completed: boolean;
    season_verified_count: number;
    season_evidence_count: number;
    season_submissions: number;
    updated_at: string;
}

/**
 * Hook to fetch and subscribe to contributor progress (streaks + seasonal)
 * @param userId - User ID to fetch progress for
 */
export function useContributorProgress(userId: string | null) {
    const [progress, setProgress] = useState<ContributorProgressData | null>(null);
    const [loading, setLoading] = useState(true);
    const [streakIncreased, setStreakIncreased] = useState(false);
    const [goalCompleted, setGoalCompleted] = useState(false);

    const fetchProgress = async () => {
        if (!userId) {
            setLoading(false);
            return;
        }

        const { data, error } = await supabase
            .from('contributor_progress')
            .select('*')
            .eq('user_id', userId)
            .single();

        if (!error && data) {
            setProgress(data);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchProgress();

        if (!userId) return;

        // Subscribe to realtime updates
        const channel = supabase
            .channel(`progress-${userId}`)
            .on(
                'postgres_changes',
                {
                    event: 'UPDATE',
                    schema: 'public',
                    table: 'contributor_progress',
                    filter: `user_id=eq.${userId}`,
                },
                (payload) => {
                    const updated = payload.new as ContributorProgressData;

                    // Detect streak increase
                    if (progress && updated.current_streak_days > progress.current_streak_days) {
                        setStreakIncreased(true);
                        setTimeout(() => setStreakIncreased(false), 3000);
                    }

                    // Detect goal completion
                    if (progress && !progress.challenge_completed && updated.challenge_completed) {
                        setGoalCompleted(true);
                        setTimeout(() => setGoalCompleted(false), 5000);
                    }

                    setProgress(updated);
                }
            )
            .subscribe();

        return () => {
            channel.unsubscribe();
        };
    }, [userId]);

    return {
        progress,
        loading,
        refetch: fetchProgress,
        streakIncreased,
        goalCompleted,
    };
}
