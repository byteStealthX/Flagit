import { motion } from 'framer-motion';

interface MetadataSkeletonProps {
    count?: number;
}

/**
 * Skeleton loader for metadata cards
 * Shows shimmer animation while data is loading
 */
export function MetadataSkeleton({ count = 3 }: MetadataSkeletonProps) {
    return (
        <div className="space-y-4">
            {Array.from({ length: count }).map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                >
                    {/* Title skeleton */}
                    <div className="h-6 bg-gray-200 rounded animate-pulse w-1/3 mb-4" />

                    {/* Content skeleton */}
                    <div className="space-y-3">
                        <div className="h-4 bg-gray-200 rounded animate-pulse w-full" />
                        <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6" />
                        <div className="h-4 bg-gray-200 rounded animate-pulse w-4/6" />
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

/**
 * Skeleton loader for flag detail card
 */
export function FlagCardSkeleton() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
        >
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                    <div className="h-8 bg-gray-200 rounded animate-pulse w-3/4 mb-3" />
                    <div className="flex items-center gap-4">
                        <div className="h-4 bg-gray-200 rounded animate-pulse w-24" />
                        <div className="h-4 bg-gray-200 rounded animate-pulse w-32" />
                    </div>
                </div>
                <div className="h-7 w-24 bg-gray-200 rounded-full animate-pulse" />
            </div>

            {/* Content */}
            <div className="space-y-2 mb-6">
                <div className="h-4 bg-gray-200 rounded animate-pulse w-full" />
                <div className="h-4 bg-gray-200 rounded animate-pulse w-11/12" />
                <div className="h-4 bg-gray-200 rounded animate-pulse w-10/12" />
            </div>

            {/* Actions */}
            <div className="flex gap-3">
                <div className="h-10 bg-gray-200 rounded-lg animate-pulse w-32" />
                <div className="h-10 bg-gray-200 rounded-lg animate-pulse w-28" />
            </div>
        </motion.div>
    );
}

/**
 * Skeleton loader for table rows
 */
interface TableRowSkeletonProps {
    columns?: number;
    rows?: number;
}

export function TableRowSkeleton({ columns = 5, rows = 5 }: TableRowSkeletonProps) {
    return (
        <>
            {Array.from({ length: rows }).map((_, rowIndex) => (
                <motion.tr
                    key={rowIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: rowIndex * 0.05 }}
                    className="border-b border-gray-200"
                >
                    {Array.from({ length: columns }).map((_, colIndex) => (
                        <td key={colIndex} className="px-6 py-4">
                            <div
                                className="h-4 bg-gray-200 rounded animate-pulse"
                                style={{ width: colIndex === 0 ? '80%' : '60%' }}
                            />
                        </td>
                    ))}
                </motion.tr>
            ))}
        </>
    );
}

/**
 * Skeleton for stats panel
 */
export function StatsPanelSkeleton() {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            {/* XP Section */}
            <div className="mb-6">
                <div className="h-6 bg-gray-200 rounded animate-pulse w-1/3 mb-3" />
                <div className="h-8 bg-gray-200 rounded animate-pulse w-1/2 mb-2" />
                <div className="h-2 bg-gray-200 rounded-full animate-pulse w-full" />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 mb-6">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="text-center">
                        <div className="h-8 bg-gray-200 rounded animate-pulse mx-auto w-16 mb-2" />
                        <div className="h-4 bg-gray-200 rounded animate-pulse w-full" />
                    </div>
                ))}
            </div>

            {/* Badges Grid */}
            <div className="grid grid-cols-5 gap-3">
                {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="aspect-square bg-gray-200 rounded-lg animate-pulse" />
                ))}
            </div>
        </div>
    );
}
