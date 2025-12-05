import { useDemoMode } from '@/contexts/DemoContext';
import { X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function DemoBanner() {
    const { isDemoMode, setDemoMode } = useDemoMode();

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
                                    <p className="text-sm font-medium text-foreground">
                                        Demo Mode Active
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        You're viewing sample data. All features are fully functional.
                                    </p>
                                </div>
                            </div>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setDemoMode(false)}
                                className="text-muted-foreground hover:text-foreground"
                            >
                                <X className="w-4 h-4 mr-2" />
                                Exit Demo
                            </Button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
