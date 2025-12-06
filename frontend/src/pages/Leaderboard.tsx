import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '@/lib/supabase';
import { staggerItem } from '@/lib/motion';
import { Trophy, Medal, Award } from 'lucide-react';
import { TableRowSkeleton } from '@/components/skeletons/Skeletons';

interface LeaderboardUser {
    user_id: string;
    xp: number;
    verified_count: number;
    badges: string[];
    // Join with auth.users for display name
    email?: string;
    username?: string;
}

/**
 * Leaderboard page showing top contributors
 * Animated row entry with stagger effect
 */
export default function Leaderboard() {
    const [users, setUsers] = useState<LeaderboardUser[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchLeaderboard();
    }, []);

    const fetchLeaderboard = async () => {
        const { data, error } = await supabase
            .from('contributor_stats')
            .select('user_id, xp, verified_count, badges')
            .order('xp', { ascending: false })
            .limit(50);

        if (!error && data) {
            setUsers(data);
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12 mt-8"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Trophy className="w-12 h-12 text-yellow-500" />
                        <h1 className="text-5xl font-bold text-gray-900">Leaderboard</h1>
                        <Trophy className="w-12 h-12 text-yellow-500" />
                    </div>
                    <p className="text-xl text-gray-600">
                        Top contributors fighting misinformation
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
                        <thead className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold">Rank</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold">Contributor</th>
                                <th className="px-6 py-4 text-center text-sm font-semibold">XP</th>
                                <th className="px-6 py-4 text-center text-sm font-semibold">Verified</th>
                                <th className="px-6 py-4 text-center text-sm font-semibold">Badges</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <TableRowSkeleton columns={5} rows={10} />
                            ) : (
                                users.map((user, index) => (
                                    <LeaderboardRow
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
                            <p>No contributors yet. Be the first!</p>
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
}

interface LeaderboardRowProps {
    user: LeaderboardUser;
    rank: number;
    index: number;
}

function LeaderboardRow({ user, rank, index }: LeaderboardRowProps) {
    const topThreeColors = ['#FFD700', '#C0C0C0', '#CD7F32']; // Gold, Silver, Bronze
    const isTopThree = rank <= 3;

    return (
        <motion.tr
            variants={staggerItem}
            initial="initial"
            animate="animate"
            transition={{ delay: index * 0.04 }}
            whileHover={{
                backgroundColor: '#f9fafb',
                scale: 1.01,
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
            }}
            className="border-b border-gray-100 cursor-pointer transition-all"
        >
            {/* Rank */}
            <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                    {isTopThree ? (
                        <div
                            className="flex items-center justify-center w-10 h-10 rounded-full font-bold text-white"
                            style={{ backgroundColor: topThreeColors[rank - 1] }}
                        >
                            {rank}
                        </div>
                    ) : (
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 font-semibold text-gray-700">
                            {rank}
                        </div>
                    )}
                    {rank === 1 && <Trophy className="w-5 h-5 text-yellow-500" />}
                    {rank === 2 && <Medal className="w-5 h-5 text-gray-400" />}
                    {rank === 3 && <Award className="w-5 h-5 text-orange-600" />}
                </div>
            </td>

            {/* Contributor */}
            <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold">
                        {user.email?.[0]?.toUpperCase() || 'U'}
                    </div>
                    <div>
                        <p className="font-semibold text-gray-900">
                            {user.username || user.email || 'Anonymous User'}
                        </p>
                        <p className="text-sm text-gray-500">
                            {user.user_id.slice(0, 8)}...
                        </p>
                    </div>
                </div>
            </td>

            {/* XP */}
            <td className="px-6 py-4 text-center">
                <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.04 + 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100"
                >
                    <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                        {user.xp}
                    </span>
                    <span className="text-sm text-gray-600">XP</span>
                </motion.div>
            </td>

            {/* Verified */}
            <td className="px-6 py-4 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100">
                    <span className="text-lg font-semibold text-green-700">
                        {user.verified_count}
                    </span>
                </div>
            </td>

            {/* Badges */}
            <td className="px-6 py-4">
                <div className="flex items-center justify-center gap-1">
                    {user.badges.length > 0 ? (
                        user.badges.slice(0, 3).map((badge, i) => (
                            <motion.div
                                key={badge}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.04 + 0.3 + i * 0.1 }}
                                className="text-2xl"
                                title={badge}
                            >
                                {getBadgeIcon(badge)}
                            </motion.div>
                        ))
                    ) : (
                        <span className="text-gray-400 text-sm">No badges yet</span>
                    )}
                    {user.badges.length > 3 && (
                        <span className="text-sm text-gray-500 ml-2">
                            +{user.badges.length - 3}
                        </span>
                    )}
                </div>
            </td>
        </motion.tr>
    );
}

function getBadgeIcon(badgeId: string): string {
    const icons: Record<string, string> = {
        'rookie-reporter': '📝',
        'trusted-contributor': '⭐',
        'elite-investigator': '🕵️',
        'evidence-master': '📦',
        'legend-of-truth': '🏆',
    };
    return icons[badgeId] || '🏅';
}
