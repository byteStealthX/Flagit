/**
 * Badge configuration and unlock logic for gamification system
 */

export interface Badge {
    id: string;
    name: string;
    icon: string;
    description: string;
    requirement: string;
}

export interface ContributorStats {
    user_id: string;
    xp: number;
    verified_count: number;
    rejected_count: number;
    submitted_count: number;
    evidence_count: number;
    badges: string[];
}

/**
 * All available badges in the system
 */
export const BADGES: Record<string, Badge> = {
    'rookie-reporter': {
        id: 'rookie-reporter',
        name: 'Rookie Reporter',
        icon: '📝',
        description: 'Submit 5 verified flags',
        requirement: 'verified_count >= 5',
    },
    'trusted-contributor': {
        id: 'trusted-contributor',
        name: 'Trusted Contributor',
        icon: '⭐',
        description: 'Submit 20 verified flags',
        requirement: 'verified_count >= 20',
    },
    'elite-investigator': {
        id: 'elite-investigator',
        name: 'Elite Investigator',
        icon: '🕵️',
        description: 'Submit 50 verified flags',
        requirement: 'verified_count >= 50',
    },
    'evidence-master': {
        id: 'evidence-master',
        name: 'Evidence Master',
        icon: '📦',
        description: 'Extract evidence from 10 flags',
        requirement: 'evidence_count >= 10',
    },
    'legend-of-truth': {
        id: 'legend-of-truth',
        name: 'Legend of Truth',
        icon: '🏆',
        description: 'Earn 150 total XP',
        requirement: 'xp >= 150',
    },
};

/**
 * Check which badges should be unlocked based on current stats
 * Returns array of badge IDs that should be unlocked
 */
export function checkBadgeUnlocks(stats: ContributorStats): string[] {
    const unlockedBadges = new Set<string>(stats.badges || []);

    // Rookie Reporter - 5 verified
    if (stats.verified_count >= 5) {
        unlockedBadges.add('rookie-reporter');
    }

    // Trusted Contributor - 20 verified
    if (stats.verified_count >= 20) {
        unlockedBadges.add('trusted-contributor');
    }

    // Elite Investigator - 50 verified
    if (stats.verified_count >= 50) {
        unlockedBadges.add('elite-investigator');
    }

    // Evidence Master - 10 evidence extractions
    if (stats.evidence_count >= 10) {
        unlockedBadges.add('evidence-master');
    }

    // Legend of Truth - 150 XP
    if (stats.xp >= 150) {
        unlockedBadges.add('legend-of-truth');
    }

    return Array.from(unlockedBadges);
}

/**
 * Get newly unlocked badges
 */
export function getNewBadges(
    currentBadges: string[],
    newBadges: string[]
): string[] {
    const current = new Set(currentBadges);
    return newBadges.filter((badge) => !current.has(badge));
}

/**
 * XP Award amounts
 */
export const XP_AWARDS = {
    FLAG_SUBMITTED: 5,
    FLAG_VERIFIED: 20,
    FLAG_REJECTED: -5,
    EVIDENCE_EXTRACTED: 10,
} as const;

/**
 * Calculate next XP milestone for progress tracking
 */
export function getNextXPMilestone(currentXP: number): {
    milestone: number;
    badgeName: string;
} {
    if (currentXP < 150) {
        return { milestone: 150, badgeName: 'Legend of Truth' };
    }
    // Could add more tiers in the future
    return { milestone: 150, badgeName: 'Legend of Truth' };
}

/**
 * Get badge by ID
 */
export function getBadge(badgeId: string): Badge | undefined {
    return BADGES[badgeId];
}

/**
 * Get all badges as array
 */
export function getAllBadges(): Badge[] {
    return Object.values(BADGES);
}
