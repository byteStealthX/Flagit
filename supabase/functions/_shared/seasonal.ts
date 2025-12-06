/**
 * Seasonal challenge goal checking and completion logic
 */

export interface SeasonalGoals {
    verified_flags: number;
    evidence_extractions: number;
    streak_days: number;
    seasonal_xp: number;
}

export interface SeasonalProgress {
    season_verified_count: number;
    season_evidence_count: number;
    current_streak_days: number;
    seasonal_points: number;
}

export interface SeasonConfig {
    id: string;
    season_name: string;
    season_start: string;
    season_end: string;
    challenge_goals: SeasonalGoals;
    rewards: {
        badge: string;
        bonus_xp: number;
        rank_boost: number;
    };
    is_active: boolean;
}

/**
 * Check if all seasonal goals are completed
 */
export function areSeasonalGoalsComplete(
    goals: SeasonalGoals,
    progress: SeasonalProgress
): boolean {
    return (
        progress.season_verified_count >= goals.verified_flags &&
        progress.season_evidence_count >= goals.evidence_extractions &&
        progress.current_streak_days >= goals.streak_days &&
        progress.seasonal_points >= goals.seasonal_xp
    );
}

/**
 * Calculate progress percentage for a specific goal
 */
export function getGoalProgress(current: number, target: number): number {
    return Math.min((current / target) * 100, 100);
}

/**
 * Get seasonal badge name for completed season
 */
export function getSeasonalBadgeName(seasonName: string): string {
    return `Season Champion – ${seasonName}`;
}

/**
 * Check if season is currently active
 */
export function isSeasonActive(season: SeasonConfig): boolean {
    const now = new Date();
    const start = new Date(season.season_start);
    const end = new Date(season.season_end);

    return season.is_active && now >= start && now <= end;
}

/**
 * Get days remaining in season
 */
export function getDaysRemaining(seasonEnd: string): number {
    const now = new Date();
    const end = new Date(seasonEnd);
    const diff = end.getTime() - now.getTime();
    return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

/**
 * Format time remaining
 */
export function formatTimeRemaining(seasonEnd: string): string {
    const days = getDaysRemaining(seasonEnd);

    if (days === 0) return 'Ends today!';
    if (days === 1) return '1 day left';
    if (days < 7) return `${days} days left`;

    const weeks = Math.floor(days / 7);
    if (weeks === 1) return '1 week left';
    return `${weeks} weeks left`;
}
