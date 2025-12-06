import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useActiveSeason } from '@/hooks/useActiveSeason';
import { useContributorProgress } from '@/hooks/useContributorProgress';
import { useAuth } from '@/hooks/useAuth';
import { progressBarVariants, progressBarTransition, cardVariants } from '@/lib/motion';
import { Trophy, Target, Flame, FileCheck, Clock } from 'lucide-react';
import { SeasonCelebration } from '@/components/gamification/SeasonCelebration';

/**
 * Season progress page showing challenge goals and rewards
 * Displays progress bars, countdown timer, and seasonal badges
 */
export default function SeasonPage() {
    const { user } = useAuth();
    const { season, loading: seasonLoading } = useActiveSeason();
    const { progress, loading: progressLoading, goalCompleted } = useContributorProgress(user?.id || null);
    const [showCelebration, setShowCelebration] = useState(false);

    useEffect(() => {
        if (goalCompleted) {
            setShowCelebration(true);
        }
    }, [goalCompleted]);

    if (seasonLoading || progressLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white p-6 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full mx-auto mb-4" />
                    <p className="text-gray-600">Loading season...</p>
                </div>
            </div>
        );
    }

    if (!season) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white p-6 flex items-center justify-center">
                <div className="text-center">
                    <Trophy className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">No Active Season</h2>
                    <p className="text-gray-600">Check back soon for the next challenge!</p>
                </div>
            </div>
        );
    }

    const goals = season.challenge_goals;
    const goalProgress = {
        verified: progress ? Math.min((progress.season_verified_count / goals.verified_flags) * 100, 100) : 0,
        evidence: progress ? Math.min((progress.season_evidence_count / goals.evidence_extractions) * 100, 100) : 0,
        streak: progress ? Math.min((progress.current_streak_days / goals.streak_days) * 100, 100) : 0,
        xp: progress ? Math.min((progress.seasonal_points / goals.seasonal_xp) * 100, 100) : 0,
    };

    const allGoalsComplete = progress?.challenge_completed || false;

    // Calculate time remaining
    const now = new Date();
    const end = new Date(season.season_end);
    const timeLeft = end.getTime() - now.getTime();
    const daysLeft = Math.max(0, Math.ceil(timeLeft / (1000 * 60 * 60 * 24)));

    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-50 via-blue-50 to-white p-6">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12 mt-8"
                >
                    <h1 className="text-5xl font-bold text-gray-900 mb-2">{season.season_name}</h1>
                    <p className="text-xl text-gray-600">Seasonal Challenge</p>

                    {/* Timer */}
                    <div className="flex items-center justify-center gap-2 mt-4">
                        <Clock className="w-5 h-5 text-purple-600" />
                        <span className="text-lg font-semibold text-purple-600">
                            {daysLeft} {daysLeft === 1 ? 'day' : 'days'} remaining
                        </span>
                    </div>
                </motion.div>

                {/* Progress Card */}
                <motion.div
                    variants={cardVariants}
                    initial="initial"
                    animate="animate"
                    className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 mb-8"
                >
                    {allGoalsComplete && (
                        <div className="mb-6 p-4 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg border-2 border-green-400 text-center">
                            <Trophy className="w-12 h-12 text-green-600 mx-auto mb-2" />
                            <h3 className="text-2xl font-bold text-green-800">Season Complete! 🎉</h3>
                            <p className="text-green-700">You've earned the Season Champion badge!</p>
                        </div>
                    )}

                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Challenge Goals</h2>

                    {/* Goal: Verified Flags */}
                    <GoalItem
                        icon={<FileCheck className="w-6 h-6 text-blue-500" />}
                        label="Verified Flags"
                        current={progress?.season_verified_count || 0}
                        target={goals.verified_flags}
                        percent={goalProgress.verified}
                    />

                    {/* Goal: Evidence Extractions */}
                    <GoalItem
                        icon={<Target className="w-6 h-6 text-purple-500" />}
                        label="Evidence Extractions"
                        current={progress?.season_evidence_count || 0}
                        target={goals.evidence_extractions}
                        percent={goalProgress.evidence}
                    />

                    {/* Goal: Streak */}
                    <GoalItem
                        icon={<Flame className="w-6 h-6 text-orange-500" />}
                        label="Daily Streak"
                        current={progress?.current_streak_days || 0}
                        target={goals.streak_days}
                        percent={goalProgress.streak}
                    />

                    {/* Goal: Seasonal XP */}
                    <GoalItem
                        icon={<Trophy className="w-6 h-6 text-yellow-500" />}
                        label="Seasonal XP"
                        current={progress?.seasonal_points || 0}
                        target={goals.seasonal_xp}
                        percent={goalProgress.xp}
                    />
                </motion.div>

                {/* Rewards Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl shadow-xl border-2 border-yellow-300 p-8"
                >
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Rewards</h2>
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <Trophy className="w-6 h-6 text-yellow-600" />
                            <span className="text-lg text-gray-800">
                                <strong>Badge:</strong> {season.rewards.badge}
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-2xl">✨</span>
                            <span className="text-lg text-gray-800">
                                <strong>Bonus XP:</strong> +{season.rewards.bonus_xp}
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-2xl">📈</span>
                            <span className="text-lg text-gray-800">
                                <strong>Rank Boost:</strong> +{season.rewards.rank_boost}
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Season Celebration Modal */}
            {showCelebration && season && (
                <SeasonCelebration
                    seasonName={season.season_name}
                    badge={season.rewards.badge}
                    onClose={() => setShowCelebration(false)}
                />
            )}
        </div>
    );
}

interface GoalItemProps {
    icon: React.ReactNode;
    label: string;
    current: number;
    target: number;
    percent: number;
}

function GoalItem({ icon, label, current, target, percent }: GoalItemProps) {
    const isComplete = current >= target;

    return (
        <div className="mb-6 last:mb-0">
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                    {icon}
                    <span className="font-semibold text-gray-900">{label}</span>
                </div>
                <span className="text-sm text-gray-600">
                    {current} / {target}
                    {isComplete && <span className="ml-2 text-green-600">✓</span>}
                </span>
            </div>

            {/* Progress Bar */}
            <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                    custom={percent}
                    variants={progressBarVariants}
                    initial="initial"
                    animate="animate"
                    transition={progressBarTransition}
                    className={`absolute inset-y-0 left-0 rounded-full ${isComplete
                            ? 'bg-gradient-to-r from-green-500 to-emerald-600'
                            : 'bg-gradient-to-r from-blue-500 to-purple-600'
                        }`}
                />
            </div>
        </div>
    );
}
