import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { interactiveElement, buttonLoadingVariants, spinnerVariants } from '@/lib/motion';
import { useState } from 'react';

interface ProcessButtonProps {
    onProcess: () => Promise<void>;
    disabled?: boolean;
    label?: string;
    className?: string;
}

/**
 * Animated process button with loading spinner
 * Shows hover/tap micro-interactions and loading state
 */
export function ProcessButton({
    onProcess,
    disabled = false,
    label = 'Process Flag',
    className = '',
}: ProcessButtonProps) {
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = async () => {
        if (disabled || isLoading) return;

        setIsLoading(true);
        try {
            await onProcess();
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <motion.button
            onClick={handleClick}
            disabled={disabled || isLoading}
            variants={buttonLoadingVariants}
            animate={isLoading ? 'loading' : disabled ? 'disabled' : 'idle'}
            {...(!disabled && !isLoading ? interactiveElement : {})}
            className={`
        relative px-6 py-3 rounded-lg font-semibold text-white
        bg-gradient-to-r from-blue-500 to-purple-600
        hover:shadow-lg active:shadow-md
        disabled:opacity-50 disabled:cursor-not-allowed
        transition-all duration-200
        ${className}
      `}
        >
            {isLoading && (
                <motion.div
                    {...spinnerVariants}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <Loader2 className="w-5 h-5" />
                </motion.div>
            )}

            <span className={isLoading ? 'opacity-0' : 'opacity-100'}>
                {label}
            </span>
        </motion.button>
    );
}
