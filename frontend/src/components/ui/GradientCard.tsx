import { motion } from 'framer-motion';

interface GradientCardProps {
    children: React.ReactNode;
    className?: string;
}

/**
 * Card with animated gradient border
 */
export function GradientCard({ children, className = '' }: GradientCardProps) {
    return (
        <div className={`relative p-1 rounded-2xl ${className}`}>
            {/* Animated Gradient Border */}
            <motion.div
                animate={{
                    background: [
                        'linear-gradient(45deg, #667eea 0%, #764ba2 50%, #667eea 100%)',
                        'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #667eea 100%)',
                        'linear-gradient(225deg, #667eea 0%, #764ba2 50%, #667eea 100%)',
                        'linear-gradient(315deg, #667eea 0%, #764ba2 50%, #667eea 100%)',
                        'linear-gradient(45deg, #667eea 0%, #764ba2 50%, #667eea 100%)',
                    ],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                }}
                className="absolute inset-0 rounded-2xl"
            />

            {/* Content */}
            <div className="relative bg-white rounded-[14px] p-6">
                {children}
            </div>
        </div>
    );
}
