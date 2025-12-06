import { motion } from 'framer-motion';
import { badgeTransition, verifiedGlowPulse } from '@/lib/motion';
import { CheckCircle, Clock, XCircle } from 'lucide-react';

type FlagStatus = 'pending' | 'verified' | 'rejected';

interface StatusBadgeProps {
    status: FlagStatus;
    className?: string;
}

const STATUS_CONFIG = {
    pending: {
        label: 'Pending',
        icon: Clock,
        bgColor: 'bg-gray-100',
        textColor: 'text-gray-700',
        borderColor: 'border-gray-300',
    },
    verified: {
        label: 'Verified',
        icon: CheckCircle,
        bgColor: 'bg-green-100',
        textColor: 'text-green-700',
        borderColor: 'border-green-300',
    },
    rejected: {
        label: 'Rejected',
        icon: XCircle,
        bgColor: 'bg-red-100',
        textColor: 'text-red-700',
        borderColor: 'border-red-300',
    },
};

/**
 * Animated status badge with color transitions
 * Glowing pulse for verified status
 */
export function StatusBadge({ status, className = '' }: StatusBadgeProps) {
    const config = STATUS_CONFIG[status];
    const Icon = config.icon;

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={badgeTransition}
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border-2 ${config.bgColor} ${config.textColor} ${config.borderColor} font-semibold text-sm ${className}`}
            {...(status === 'verified' ? verifiedGlowPulse : {})}
        >
            <Icon className="w-4 h-4" />
            <span>{config.label}</span>
        </motion.div>
    );
}
