import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, X, Star } from 'lucide-react';
import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

interface SeasonCelebrationProps {
    seasonName: string;
    badge: string;
    onClose: () => void;
}

/**
 * Season completion celebration modal
 * Shows confetti and badge reveal animation
 */
export function SeasonCelebration({ seasonName, badge, onClose }: SeasonCelebrationProps) {
    const [showConfetti, setShowConfetti] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowConfetti(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            <>
                {/* Confetti */}
                {showConfetti && (
                    <Confetti
                        width={window.innerWidth}
                        height={window.innerHeight}
                        recycle={false}
                        numberOfPieces={300}
                        colors={['#fbbf24', '#f59e0b', '#d97706', '#b45309']}
                        gravity={0.3}
                    />
                )}

                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center"
                >
                    {/* Modal */}
                    <motion.div
                        initial={{ scale: 0.4, rotate: -20, opacity: 0 }}
                        animate={{ scale: 1, rotate: 0, opacity: 1 }}
                        exit={{ scale: 0.4, rotate: 20, opacity: 0 }}
                        transition={{ type: 'spring', duration: 0.8, bounce: 0.5 }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 rounded-3xl shadow-2xl p-10 max-w-lg w-full mx-4 relative border-4 border-yellow-400"
                    >
                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 hover:bg-yellow-100 rounded-full transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Content */}
                        <div className="text-center">
                            {/* Trophy with stars */}
                            <div className="relative mb-6">
                                <motion.div
                                    animate={{
                                        rotate: [0, -10, 10, -10, 0],
                                        scale: [1, 1.1, 1],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        repeatType: 'mirror',
                                    }}
                                >
                                    <Trophy className="w-32 h-32 text-yellow-500 mx-auto" />
                                </motion.div>

                                {/* Orbiting stars */}
                                {[...Array(8)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0 }}
                                        animate={{
                                            opacity: [0, 1, 0.5, 1],
                                            scale: [0.5, 1, 0.8, 1],
                                            rotate: [0, 360],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            delay: i * 0.15,
                                        }}
                                        className="absolute"
                                        style={{
                                            left: `${50 + 45 * Math.cos((i * Math.PI * 2) / 8)}%`,
                                            top: `${50 + 45 * Math.sin((i * Math.PI * 2) / 8)}%`,
                                        }}
                                    >
                                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                    </motion.div>
                                ))}
                            </div>

                            <h2 className="text-5xl font-bold text-gray-900 mb-3">
                                Season Complete!
                            </h2>

                            <h3 className="text-3xl font-semibold text-yellow-600 mb-4">
                                {seasonName}
                            </h3>

                            <p className="text-xl text-gray-700 mb-6">
                                Congratulations! You've completed all seasonal challenges!
                            </p>

                            {/* Badge Reveal */}
                            <motion.div
                                initial={{ scale: 0.7, opacity: 0, rotateY: -90 }}
                                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                className="inline-block px-8 py-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 rounded-2xl shadow-xl mb-6"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-5xl">🏆</span>
                                    <div className="text-left">
                                        <p className="text-sm font-semibold text-white/90">New Badge</p>
                                        <p className="text-2xl font-bold text-white">{badge}</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                className="bg-white/50 rounded-xl p-4 backdrop-blur-sm"
                            >
                                <p className="text-gray-700 font-medium">
                                    Your badge has been added to your profile!
                                </p>
                                <p className="text-sm text-gray-600 mt-2">
                                    Bonus rewards have been applied to your account.
                                </p>
                            </motion.div>

                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.2 }}
                                onClick={onClose}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="mt-6 px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-shadow"
                            >
                                Amazing! 🎉
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.div>
            </>
        </AnimatePresence>
    );
}
