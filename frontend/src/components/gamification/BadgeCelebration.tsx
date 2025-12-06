import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { badgeUnlockVariants, badgeUnlockTransition } from '@/lib/motion';

interface Badge {
    id: string;
    name: string;
    icon: string;
    description: string;
}

const BADGE_CONFIG: Record<string, Badge> = {
    'rookie-reporter': {
        id: 'rookie-reporter',
        name: 'Rookie Reporter',
        icon: '📝',
        description: 'Submitted 5 verified flags',
    },
    'trusted-contributor': {
        id: 'trusted-contributor',
        name: 'Trusted Contributor',
        icon: '⭐',
        description: 'Submitted 20 verified flags',
    },
    'elite-investigator': {
        id: 'elite-investigator',
        name: 'Elite Investigator',
        icon: '🕵️',
        description: 'Submitted 50 verified flags',
    },
    'evidence-master': {
        id: 'evidence-master',
        name: 'Evidence Master',
        icon: '📦',
        description: 'Extracted evidence from 10 flags',
    },
    'legend-of-truth': {
        id: 'legend-of-truth',
        name: 'Legend of Truth',
        icon: '🏆',
        description: 'Earned 150 total XP',
    },
};

interface BadgeCelebrationProps {
    badgeId: string | null;
    onClose: () => void;
}

/**
 * Badge unlock celebration modal with confetti animation
 * Shows when user unlocks a new badge
 */
export function BadgeCelebration({ badgeId, onClose }: BadgeCelebrationProps) {
    const [showConfetti, setShowConfetti] = useState(false);
    const badge = badgeId ? BADGE_CONFIG[badgeId] : null;

    useEffect(() => {
        if (badgeId) {
            setShowConfetti(true);
            // Auto-close after 4 seconds
            const timer = setTimeout(() => {
                onClose();
            }, 4000);
            return () => clearTimeout(timer);
        }
    }, [badgeId, onClose]);

    if (!badge) return null;

    return (
        <AnimatePresence>
            {badgeId && (
                <>
                    {/* Confetti */}
                    {showConfetti && (
                        <Confetti
                            width={window.innerWidth}
                            height={window.innerHeight}
                            recycle={false}
                            numberOfPieces={200}
                            gravity={0.3}
                        />
                    )}

                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
                    >
                        {/* Modal */}
                        <motion.div
                            variants={badgeUnlockVariants}
                            initial="initial"
                            animate="animate"
                            exit="initial"
                            transition={badgeUnlockTransition}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 relative"
                        >
                            {/* Close button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Content */}
                            <div className="text-center">
                                <motion.div
                                    initial={{ scale: 0.5, rotate: -180 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ delay: 0.2, type: 'spring', bounce: 0.5 }}
                                    className="text-8xl mb-4"
                                >
                                    {badge.icon}
                                </motion.div>

                                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                                    Badge Unlocked! 🎉
                                </h2>

                                <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                                    {badge.name}
                                </h3>

                                <p className="text-gray-600 text-lg">
                                    {badge.description}
                                </p>

                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="mt-6"
                                >
                                    <button
                                        onClick={onClose}
                                        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow"
                                    >
                                        Awesome!
                                    </button>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
