/**
 * Streak calculation and multiplier logic
 * Handles daily activity tracking and XP multipliers
 */

export interface StreakData {
    current_streak_days: number;
    longest_streak_days: number;
    last_activity_date: string | null;
}

/**
 * Calculate XP multiplier based on current streak
 * - Day 1: 1.0x
 * - Day 2: 1.1x
 * - Day 3-6: 1.25x
 * - Day 7+: 1.5x
 */
export function getStreakMultiplier(streakDays: number): number {
    if (streakDays === 0 || streakDays === 1) return 1.0;
    if (streakDays === 2) return 1.1;
    if (streakDays >= 3 && streakDays <= 6) return 1.25;
    return 1.5; // 7+ days
}

/**
 * Check if streak should increment, maintain, or reset
 * @param lastActivityDate - Last recorded activity date (YYYY-MM-DD)
 * @param currentStreak - Current streak count
 * @returns Updated streak count
 */
export function calculateNewStreak(
    lastActivityDate: string | null,
    currentStreak: number
): number {
    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

    // First activity ever
    if (!lastActivityDate) {
        return 1;
    }

    // Already counted today
    if (lastActivityDate === today) {
        return currentStreak;
    }

    // Calculate yesterday's date
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split('T')[0];

    // Activity was yesterday - increment streak
    if (lastActivityDate === yesterdayStr) {
        return currentStreak + 1;
    }

    // Missed a day - reset streak
    return 1;
}

/**
 * Determine if this is a streak milestone worth celebrating
 */
export function isStreakMilestone(streakDays: number): boolean {
    return streakDays === 3 || streakDays === 7 || streakDays % 10 === 0;
}

/**
 * Get streak status message
 */
export function getStreakMessage(streakDays: number): string {
    if (streakDays === 0) return 'Start your streak today!';
    if (streakDays === 1) return 'Great start! Keep it going tomorrow.';
    if (streakDays < 7) return `${streakDays} day streak! Keep going!`;
    if (streakDays < 30) return `${streakDays} day streak! You're on fire! 🔥`;
    return `${streakDays} day streak! Legendary! 🏆`;
}

/**
 * Format streak multiplier for display
 */
export function formatMultiplier(multiplier: number): string {
    return `${multiplier.toFixed(1)}x`;
}
