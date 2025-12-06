import { motion } from 'framer-motion';
import { Flame, Trophy, Calendar } from 'lucide-react';
import { cardVariants, cardTransition } from '@/lib/motion';

interface StreakPanelProps {
    currentStreak: number;
    longestStreak: number;
    multiplier: number;
}

/**
 * Streak display panel with flame animation
 * Shows current streak, longest streak, and XP multiplier
 */
export function StreakPanel({ currentStreak, longestStreak, multiplier }: StreakPanelProps) {
    return (
        <motion.div
            variants={cardVariants}
            initial="initial"
            animate="animate"
            transition={cardTransition}
            className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl shadow-sm border-2 border-orange-200 p-6"
        >
            {/* Header */}
            <div className="flex items-center gap-2 mb-6">
                <Flame className="w-6 h-6 text-orange-500" />
                <h3 className="text-xl font-bold text-gray-900">Daily Streak</h3>
            </div>

            {/* Current Streak */}
            <div className="mb-6">
                <div className="flex items-end justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">Current Streak</span>
                    <span className="text-xs text-gray-500">Keep going!</span>
                </div>

                <motion.div
                    key={currentStreak}
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    className="flex items-center gap-3"
                >
                    <motion.div
                        animate={{
                            scale: currentStreak > 0 ? [1, 1.12, 1] : 1,
                            rotate: currentStreak > 0 ? [0, -5, 5, 0] : 0,
                        }}
                        transition={{
                            duration: 0.8,
                            repeat: currentStreak >= 3 ? Infinity : 0,
                            repeatDelay: 2,
                        }}
                    >
                        <Flame className={`w-16 h-16 ${currentStreak > 0 ? 'text-orange-500' : 'text-gray-300'}`} />
                    </motion.div>

                    <div>
                        <motion.p
                            key={currentStreak}
                            initial={{ scale: 1.3, color: '#f97316' }}
                            animate={{ scale: 1, color: '#111827' }}
                            className="text-5xl font-bold text-gray-900"
                        >
                            {currentStreak}
                        </motion.p>
                        <p className="text-sm text-gray-600">
                            {currentStreak === 1 ? 'day' : 'days'}
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Multiplier Badge */}
            {currentStreak > 0 && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg border border-orange-300"
                >
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-gray-700">XP Multiplier</span>
                        <motion.span
                            key={multiplier}
                            initial={{ scale: 1.5 }}
                            animate={{ scale: 1 }}
                            className="text-2xl font-bold text-orange-600"
                        >
                            {multiplier.toFixed(1)}x
                        </motion.span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                        {multiplier === 1.5 ? 'Maximum bonus!' : 'Keep your streak to increase!'}
                    </p>
                </motion.div>
            )}

            {/* Longest Streak */}
            <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
                <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-yellow-500" />
                    <span className="text-sm font-medium text-gray-700">Longest Streak</span>
                </div>
                <span className="text-xl font-bold text-gray-900">
                    {longestStreak} {longestStreak === 1 ? 'day' : 'days'}
                </span>
            </div>

            {/* Streak calendar (last 7 days) */}
            <div className="mt-6">
                <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-xs font-medium text-gray-600">Last 7 Days</span>
                </div>

                <div className="flex gap-2">
                    {Array.from({ length: 7 }).map((_, i) => {
                        const dayIndex = 6 - i;
                        const isActive = dayIndex < currentStreak;

                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.05 }}
                                className={`
                  flex-1 aspect-square rounded-lg flex items-center justify-center text-xs font-semibold
                  ${isActive
                                        ? 'bg-orange-500 text-white shadow-md'
                                        : 'bg-gray-200 text-gray-400'
                                    }
                `}
                            >
                                {isActive ? '✓' : '–'}
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Motivational message */}
            {currentStreak === 0 && (
                <p className="text-sm text-center text-gray-600 mt-4 italic">
                    Submit a flag today to start your streak!
                </p>
            )}
        </motion.div>
    );
}
