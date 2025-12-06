import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Activity, Globe } from 'lucide-react';

interface Stat {
    id: string;
    icon: React.ReactNode;
    value: number;
    label: string;
    suffix: string;
}

const stats: Stat[] = [
    {
        id: '1',
        icon: <Users className="w-8 h-8" />,
        value: 100000,
        label: 'Active Users',
        suffix: '+',
    },
    {
        id: '2',
        icon: <Activity className="w-8 h-8" />,
        value: 50000,
        label: 'Daily Active',
        suffix: '+',
    },
    {
        id: '3',
        icon: <TrendingUp className="w-8 h-8" />,
        value: 99.9,
        label: 'Uptime',
        suffix: '%',
    },
    {
        id: '4',
        icon: <Globe className="w-8 h-8" />,
        value: 150,
        label: 'Countries',
        suffix: '+',
    },
];

/**
 * Animated counter component
 */
function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = target / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, [target]);

    return (
        <span>
            {count.toLocaleString()}
            {suffix}
        </span>
    );
}

/**
 * Statistics dashboard section with animated counters
 */
export function StatisticsSection() {
    return (
        <section className="py-20 px-6 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Trusted by Thousands
                    </h2>
                    <p className="text-xl text-white/90">
                        Join the global community fighting misinformation
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="text-center p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4 text-white">
                                {stat.icon}
                            </div>

                            <motion.h3
                                className="text-5xl font-bold text-white mb-2"
                                initial={{ scale: 0.5 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + 0.3, type: 'spring', bounce: 0.5 }}
                            >
                                <AnimatedNumber target={stat.value} suffix={stat.suffix} />
                            </motion.h3>

                            <p className="text-white/90 font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
