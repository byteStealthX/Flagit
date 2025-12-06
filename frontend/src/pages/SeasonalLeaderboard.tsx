import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '@/lib/supabase';
import { staggerItem } from '@/lib/motion';
import { Trophy, Flame, Award } from 'lucide-react';
import { TableRowSkeleton } from '@/components/skeletons/Skeletons';

interface SeasonalLeaderUser {
    user_id: string;
    seasonal_points: number;
    current_streak_days: number;
    seasonal_rank: number;
    seasonal_badges: string[];
    email?: string;
    username?: string;
}

/**
 * Seasonal leaderboard showing top contributors for current season
 * Ranked by seasonal_points with crown for #1
 */
export default function SeasonalLeaderboard() {
    const [users, setUsers] = useState<SeasonalLeaderUser[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchLeaderboard();
    }, []);

    const fetchLeaderboard = async () => {
        const { data, error } = await supabase
            .from('contributor_progress')
            .select('user_id, seasonal_points, current_streak_days, seasonal_rank, seasonal_badges')
            .order('seasonal_points', { ascending: false })
            .limit(50);

        if (!error && data) {
            setUsers(data);
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white p-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12 mt-8"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Trophy className="w-12 h-12 text-purple-600" />
                        <h1 className="text-5xl font-bold text-gray-900">Seasonal Leaderboard</h1>
                    </div>
                    <p className="text-xl text-gray-600">
                        Top performers this season
                    </p>
                </motion.div>

                {/* Leaderboard Table */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
                >
                    <table className="w-full">
                        <thead className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold">Rank</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold">Contributor</th>
                                <th className="px-6 py-4 text-center text-sm font-semibold">Seasonal XP</th>
                                <th className="px-6 py-4 text-center text-sm font-semibold">Streak</th>
                                <th className="px-6 py-4 text-center text-sm font-semibold">Badges</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <TableRowSkeleton columns={5} rows={10} />
                            ) : (
                                users.map((user, index) => (
                                    <SeasonalLeaderRow
                                        key={user.user_id}
                                        user={user}
                                        rank={index + 1}
                                        index={index}
                                    />
                                ))
                            )}
                        </tbody>
                    </table>

                    {!loading && users.length === 0 && (
                        <div className="text-center py-12 text-gray-500">
                            <Trophy className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                            <p>No seasonal progress yet. Be the first!</p>
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
}

interface SeasonalLeaderRowProps {
    user: SeasonalLeaderUser;
    rank: number;
    index: number;
}

function SeasonalLeaderRow({ user, rank, index }: SeasonalLeaderRowProps) {
    const isChampion = rank === 1;

    return (
        <motion.tr
            variants={staggerItem}
            initial="initial"
            animate="animate"
            transition={{ delay: index * 0.05 }}
            whileHover={{
                backgroundColor: isChampion ? '#fef3c7' : '#f9fafb',
                scale: 1.01,
            }}
            className={`border-b border-gray-100 cursor-pointer transition-all ${isChampion ? 'bg-yellow-50' : ''
                }`}
        >
            {/* Rank */}
            <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                    {isChampion ? (
                        <motion.div
                            animate={{
                                rotate: [0, -10, 10, -10, 0],
                                scale: [1, 1.1, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatType: 'mirror',
                            }}
                            className="text-3xl"
                        >
                            👑
                        </motion.div>
                    ) : (
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-200 font-semibold text-purple-700">
                            {rank}
                        </div>
                    )}
                </div>
            </td>

            {/* Contributor */}
            <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center text-white font-bold">
                        {user.email?.[0]?.toUpperCase() || 'U'}
                    </div>
                    <div>
                        <p className="font-semibold text-gray-900">
                            {user.username || user.email || 'Anonymous User'}
                        </p>
                        {isChampion && (
                            <span className="text-xs font-semibold text-yellow-600 bg-yellow-100 px-2 py-0.5 rounded">
                                Season Champion
                            </span>
                        )}
                    </div>
                </div>
            </td>

            {/* Seasonal XP */}
            <td className="px-6 py-4 text-center">
                <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.05 + 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-indigo-100"
                >
                    <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                        {user.seasonal_points}
                    </span>
                    <span className="text-sm text-gray-600">XP</span>
                </motion.div>
            </td>

            {/* Streak */}
            <td className="px-6 py-4 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100">
                    <Flame className="w-4 h-4 text-orange-500" />
                    <span className="text-lg font-semibold text-orange-700">
                        {user.current_streak_days}
                    </span>
                </div>
            </td>

            {/* Seasonal Badges */}
            <td className="px-6 py-4">
                <div className="flex items-center justify-center gap-1">
                    {user.seasonal_badges.length > 0 ? (
                        user.seasonal_badges.map((badge, i) => (
                            <motion.span
                                key={badge}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05 + 0.3 + i * 0.1 }}
                                className="text-2xl"
                                title={badge}
                            >
                                🏆
                            </motion.span>
                        ))
                    ) : (
                        <span className="text-gray-400 text-sm">—</span>
                    )}
                </div>
            </td>
        </motion.tr>
    );
}
