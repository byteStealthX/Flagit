import { useState } from 'react';
import { motion } from 'framer-motion';

interface PremiumInputProps {
    label: string;
    type?: 'text' | 'email' | 'password' | 'number';
    value: string;
    onChange: (value: string) => void;
    error?: string;
    placeholder?: string;
    required?: boolean;
}

/**
 * Premium input with floating label animation
 */
export function PremiumInput({
    label,
    type = 'text',
    value,
    onChange,
    error,
    placeholder,
    required = false,
}: PremiumInputProps) {
    const [isFocused, setIsFocused] = useState(false);
    const hasValue = value.length > 0;
    const isLabelFloating = isFocused || hasValue;

    return (
        <div className="relative">
            {/* Input */}
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder={isLabelFloating ? placeholder : ''}
                required={required}
                aria-label={label}
                aria-invalid={!!error}
                aria-describedby={error ? `${label}-error` : undefined}
                className={`
          w-full px-4 pt-6 pb-2 rounded-lg border-2 transition-all duration-300
          focus:outline-none
          ${error
                        ? 'border-red-500 focus:border-red-600'
                        : isFocused
                            ? 'border-blue-500'
                            : 'border-gray-300 hover:border-gray-400'
                    }
        `}
            />

            {/* Floating Label */}
            <motion.label
                animate={{
                    top: isLabelFloating ? '8px' : '50%',
                    fontSize: isLabelFloating ? '0.75rem' : '1rem',
                    y: isLabelFloating ? 0 : '-50%',
                }}
                transition={{ duration: 0.2 }}
                className={`
          absolute left-4 pointer-events-none
          transition-colors duration-300
          ${error
                        ? 'text-red-500'
                        : isFocused
                            ? 'text-blue-500'
                            : 'text-gray-600'
                    }
        `}
            >
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
            </motion.label>

            {/* Error Message */}
            {error && (
                <motion.p
                    id={`${label}-error`}
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1 ml-1"
                >
                    {error}
                </motion.p>
            )}
        </div>
    );
}
