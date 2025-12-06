import { motion } from 'framer-motion';
import { interactiveElement } from '@/lib/motion';

interface Badge {
    id: string;
    name: string;
    icon: string;
    description: string;
}

const ALL_BADGES: Badge[] = [
    {
        id: 'rookie-reporter',
        name: 'Rookie Reporter',
        icon: '📝',
        description: 'Submit 5 verified flags',
    },
    {
        id: 'trusted-contributor',
        name: 'Trusted Contributor',
        icon: '⭐',
        description: 'Submit 20 verified flags',
    },
    {
        id: 'elite-investigator',
        name: 'Elite Investigator',
        icon: '🕵️',
        description: 'Submit 50 verified flags',
    },
    {
        id: 'evidence-master',
        name: 'Evidence Master',
        icon: '📦',
        description: 'Extract evidence from 10 flags',
    },
    {
        id: 'legend-of-truth',
        name: 'Legend of Truth',
        icon: '🏆',
        description: 'Earn 150 total XP',
    },
];

interface BadgeDisplayProps {
    unlockedBadges: string[];
    compact?: boolean;
}

/**
 * Display grid of badges with unlocked/locked states
 * Animated glow for unlocked badges
 */
export function BadgeDisplay({ unlockedBadges, compact = false }: BadgeDisplayProps) {
    const unlockedSet = new Set(unlockedBadges);

    return (
        <div className={`grid ${compact ? 'grid-cols-5' : 'grid-cols-3 sm:grid-cols-5'} gap-3`}>
            {ALL_BADGES.map((badge, index) => {
                const isUnlocked = unlockedSet.has(badge.id);

                return (
                    <motion.div
                        key={badge.id}
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.08 }}
                        {...(isUnlocked ? interactiveElement : {})}
                        className={`
              relative aspect-square rounded-lg p-3 flex flex-col items-center justify-center
              transition-all duration-300 cursor-pointer group
              ${isUnlocked
                                ? 'bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 shadow-lg hover:shadow-xl'
                                : 'bg-gray-100 border-2 border-gray-200 opacity-40'
                            }
            `}
                        title={badge.description}
                    >
                        {/* Badge icon */}
                        <motion.div
                            className={`text-4xl ${compact ? 'sm:text-5xl' : 'text-5xl'} mb-1`}
                            animate={isUnlocked ? {
                                rotate: [0, -5, 5, -5, 0],
                            } : {}}
                            transition={{
                                duration: 0.5,
                                repeat: Infinity,
                                repeatDelay: 3,
                            }}
                        >
                            {badge.icon}
                        </motion.div>

                        {/* Badge name */}
                        {!compact && (
                            <p className={`text-xs text-center font-medium ${isUnlocked ? 'text-gray-700' : 'text-gray-400'}`}>
                                {badge.name}
                            </p>
                        )}

                        {/* Unlock glow */}
                        {isUnlocked && (
                            <motion.div
                                className="absolute inset-0 rounded-lg"
                                animate={{
                                    boxShadow: [
                                        '0 0 0 rgba(59, 130, 246, 0)',
                                        '0 0 20px rgba(59, 130, 246, 0.3)',
                                        '0 0 0 rgba(59, 130, 246, 0)',
                                    ],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatType: 'mirror',
                                }}
                            />
                        )}

                        {/* Tooltip */}
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                            {badge.description}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}
