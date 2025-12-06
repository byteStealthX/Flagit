import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface InteractiveCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    link?: string;
    onClick?: () => void;
}

/**
 * Interactive card with hover lift and icon animations
 */
export function InteractiveCard({
    icon: Icon,
    title,
    description,
    link,
    onClick,
}: InteractiveCardProps) {
    return (
        <motion.div
            whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            onClick={onClick}
            className="bg-white rounded-xl p-6 border border-gray-200 cursor-pointer group"
        >
            {/* Icon Container */}
            <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-4 bg-gradient-to-br from-blue-50 to-purple-50 text-blue-600"
            >
                <Icon className="w-8 h-8" />
            </motion.div>

            {/* Content */}
            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>

            {/* Link */}
            {link && (
                <motion.a
                    href={link}
                    className="text-blue-600 font-semibold inline-flex items-center gap-2 relative"
                >
                    Learn more
                    <motion.span
                        className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"
                    />
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                </motion.a>
            )}
        </motion.div>
    );
}
