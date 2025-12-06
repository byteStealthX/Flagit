import { motion, AnimatePresence } from 'framer-motion';
import { Flame, X, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

interface StreakCelebrationProps {
    streakDays: number | null;
    multiplier: number;
    onClose: () => void;
}

/**
 * Celebration modal for streak milestones
 * Shows confetti and flame animations for 3, 7, 10+ day streaks
 */
export function StreakCelebration({ streakDays, multiplier, onClose }: StreakCelebrationProps) {
    const [showConfetti, setShowConfetti] = useState(false);

    useEffect(() => {
        if (streakDays) {
            setShowConfetti(true);
            const timer = setTimeout(() => {
                onClose();
            }, 3500);
            return () => clearTimeout(timer);
        }
    }, [streakDays, onClose]);

    if (!streakDays) return null;

    const messages = {
        3: 'Triple Threat!',
        7: 'Week Warrior!',
        10: 'Streak Legend!',
        default: 'Streak Master!',
    };

    const message = messages[streakDays as keyof typeof messages] || messages.default;

    return (
        <AnimatePresence>
            {streakDays && (
                <>
                    {/* Confetti */}
                    {showConfetti && (
                        <Confetti
                            width={window.innerWidth}
                            height={window.innerHeight}
                            recycle={false}
                            numberOfPieces={150}
                            colors={['#f97316', '#ea580c', '#fb923c', '#fdba74']}
                            gravity={0.25}
                        />
                    )}

                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center"
                    >
                        {/* Modal */}
                        <motion.div
                            initial={{ scale: 0.5, rotate: -15, opacity: 0 }}
                            animate={{ scale: 1, rotate: 0, opacity: 1 }}
                            exit={{ scale: 0.5, rotate: 15, opacity: 0 }}
                            transition={{ type: 'spring', duration: 0.6, bounce: 0.4 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 relative border-4 border-orange-400"
                        >
                            {/* Close button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 hover:bg-orange-100 rounded-full transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Content */}
                            <div className="text-center">
                                {/* Animated Flames */}
                                <div className="relative mb-6">
                                    <motion.div
                                        animate={{
                                            scale: [1, 1.15, 1],
                                            rotate: [0, -8, 8, -8, 0],
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            repeatType: 'mirror',
                                        }}
                                    >
                                        <Flame className="w-32 h-32 text-orange-500 mx-auto" />
                                    </motion.div>

                                    {/* Small flames around */}
                                    {[...Array(6)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{
                                                opacity: [0, 1, 0],
                                                scale: [0, 1, 0.8],
                                                rotate: [0, 360],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                delay: i * 0.3,
                                            }}
                                            className="absolute"
                                            style={{
                                                left: `${50 + 40 * Math.cos((i * Math.PI) / 3)}%`,
                                                top: `${50 + 40 * Math.sin((i * Math.PI) / 3)}%`,
                                            }}
                                        >
                                            <Flame className="w-6 h-6 text-orange-400" />
                                        </motion.div>
                                    ))}
                                </div>

                                <h2 className="text-4xl font-bold text-gray-900 mb-2">
                                    {streakDays} Day Streak! 🔥
                                </h2>

                                <h3 className="text-2xl font-semibold text-orange-600 mb-4">
                                    {message}
                                </h3>

                                <p className="text-gray-700 text-lg mb-6">
                                    You're on fire! Keep the momentum going.
                                </p>

                                {/* Multiplier Display */}
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-orange-400 to-red-500 rounded-full text-white shadow-lg"
                                >
                                    <Zap className="w-6 h-6" />
                                    <span className="text-3xl font-bold">{multiplier.toFixed(1)}x</span>
                                    <span className="text-lg">XP Boost</span>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="mt-6"
                                >
                                    <p className="text-sm text-gray-600">
                                        Don't break the streak—come back tomorrow!
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
