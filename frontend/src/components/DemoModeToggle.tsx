import { useDemoMode } from '@/contexts/DemoContext';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export function DemoModeToggle() {
    const { isDemoMode, toggleDemoMode } = useDemoMode();

    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 px-4 py-2 rounded-lg bg-muted/50 backdrop-blur-sm border border-border/50"
        >
            <Sparkles className={`w-4 h-4 transition-colors ${isDemoMode ? 'text-primary' : 'text-muted-foreground'}`} />
            <Label htmlFor="demo-mode" className="text-sm font-medium cursor-pointer">
                Demo Mode
            </Label>
            <Switch
                id="demo-mode"
                checked={isDemoMode}
                onCheckedChange={toggleDemoMode}
                className="data-[state=checked]:bg-primary"
            />
        </motion.div>
    );
}
