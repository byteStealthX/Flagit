import { useDemoMode } from '@/contexts/DemoContext';
import { X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export function DemoBanner() {
    const { isDemoMode, setDemoMode } = useDemoMode();
    const navigate = useNavigate();

    const handleExitDemo = () => {
        setDemoMode(false);
        navigate('/');
    };

    return (
        <AnimatePresence>
            {isDemoMode && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-b border-primary/20 overflow-hidden"
                >
                    <div className="container mx-auto px-4 py-3">
                        <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20">
                                    <Sparkles className="w-4 h-4 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium">
                                        🎭 Demo Mode Active
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        You're viewing sample data. All features are fully functional.
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={handleExitDemo}
                                className="px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center gap-2"
                            >
                                <X className="w-4 h-4" />
                                Exit Demo
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
