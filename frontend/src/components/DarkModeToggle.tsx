import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

export function DarkModeToggle() {
    const [isDark, setIsDark] = useState(() => {
        const saved = localStorage.getItem('dark Mode');
        return saved === 'true';
    });

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('darkMode', String(isDark));
    }, [isDark]);

    return (
        <button
            onClick={() => setIsDark(!isDark)}
            className="fixed top-20 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-200 dark:border-gray-700 hover:scale-105 group"
            aria-label="Toggle dark mode"
        >
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200 hidden sm:block">
                {isDark ? 'Light Mode' : 'Dark Mode'}
            </span>
            {isDark ? (
                <Sun className="w-5 h-5 text-yellow-500 group-hover:rotate-90 transition-transform duration-300" />
            ) : (
                <Moon className="w-5 h-5 text-gray-700 group-hover:-rotate-12 transition-transform duration-300" />
            )}
        </button>
    );
}
