import { motion } from 'framer-motion';
import { progressBarVariants, progressBarTransition, cardVariants, cardTransition } from '@/lib/motion';
import { BadgeDisplay } from './BadgeDisplay';
import { Trophy, TrendingUp, CheckCircle, XCircle } from 'lucide-react';
import { StatsPanelSkeleton } from '../skeletons/Skeletons';

interface ContributorStatsState {
    xp: number;
    verified_count: number;
    rejected_count: number;
    submitted_count: number;
    evidence_count: number;
    badges: string[];
}

interface ContributorStatsPanelProps {
    stats: ContributorStatsState | null;
    loading?: boolean;
}

/**
 * Contributor stats panel with XP progress bar and badge grid
 * Shows animated progress towards next milestone
 */
export function ContributorStatsPanel({ stats, loading = false }: ContributorStatsPanelProps) {
    if (loading || !stats) {
        return <StatsPanelSkeleton />;
    }

    // Calculate XP progress to next tier (150 XP for Legend of Truth)
    const maxXP = 150;
    const xpPercent = Math.min((stats.xp / maxXP) * 100, 100);
    const nextMilestone = maxXP - stats.xp;

    return (
        <motion.div
            variants={cardVariants}
            initial="initial"
            animate="animate"
            transition={cardTransition}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
        >
            {/* Title */}
            <div className="flex items-center gap-2 mb-6">
                <Trophy className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">Your Contribution Stats</h3>
            </div>

            {/* XP Section */}
            <div className="mb-6">
                <div className="flex items-end justify-between mb-2">
                    <div>
                        <p className="text-sm font-medium text-gray-600">Total XP</p>
                        <motion.p
                            key={stats.xp}
                            initial={{ scale: 1.2, color: '#3b82f6' }}
                            animate={{ scale: 1, color: '#111827' }}
                            transition={{ duration: 0.4 }}
                            className="text-3xl font-bold text-gray-900"
                        >
                            {stats.xp}
                        </motion.p>
                    </div>
                    <p className="text-sm text-gray-500">
                        {nextMilestone > 0 ? `${nextMilestone} XP to next milestone` : 'Max level!'}
                    </p>
                </div>

                {/* Progress Bar */}
                <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                        custom={xpPercent}
                        variants={progressBarVariants}
                        initial="initial"
                        animate="animate"
                        transition={progressBarTransition}
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                    />
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-4 gap-4 mb-6">
                <StatCard
                    icon={<TrendingUp className="w-5 h-5 text-blue-500" />}
                    label="Submitted"
                    value={stats.submitted_count}
                />
                <StatCard
                    icon={<CheckCircle className="w-5 h-5 text-green-500" />}
                    label="Verified"
                    value={stats.verified_count}
                />
                <StatCard
                    icon={<XCircle className="w-5 h-5 text-red-500" />}
                    label="Rejected"
                    value={stats.rejected_count}
                />
                <StatCard
                    icon={<span className="text-xl">📦</span>}
                    label="Evidence"
                    value={stats.evidence_count}
                />
            </div>

            {/* Badges Section */}
            <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Badges Earned ({stats.badges.length}/5)</h4>
                <BadgeDisplay unlockedBadges={stats.badges} compact />
            </div>
        </motion.div>
    );
}

interface StatCardProps {
    icon: React.ReactNode;
    label: string;
    value: number;
}

function StatCard({ icon, label, value }: StatCardProps) {
    return (
        <div className="text-center">
            <div className="flex justify-center mb-1">{icon}</div>
            <motion.p
                key={value}
                initial={{ scale: 1.3 }}
                animate={{ scale: 1 }}
                className="text-2xl font-bold text-gray-900"
            >
                {value}
            </motion.p>
            <p className="text-xs text-gray-600">{label}</p>
        </div>
    );
}
