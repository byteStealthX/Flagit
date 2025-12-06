import { motion } from 'framer-motion';
import { staggerItem } from '@/lib/motion';

interface Testimonial {
    id: string;
    name: string;
    role: string;
    company: string;
    avatar: string;
    text: string;
    rating: number;
}

const testimonials: Testimonial[] = [
    {
        id: '1',
        name: 'Sarah Johnson',
        role: 'Content Manager',
        company: 'TechNews Daily',
        avatar: '👩‍💼',
        text: 'FlagIt has transformed how we verify sources. The AI-powered fact-checking saves us hours every day, and the accuracy is impressive!',
        rating: 5,
    },
    {
        id: '2',
        name: 'Michael Chen',
        role: 'Research Director',
        company: 'Global Insights',
        avatar: '👨‍🔬',
        text: 'The evidence extraction feature is a game-changer. We can now validate claims 10x faster with complete source attribution.',
        rating: 5,
    },
    {
        id: '3',
        name: 'Priya Sharma',
        role: 'Head of Communications',
        company: 'Innovation Labs',
        avatar: '👩‍💻',
        text: 'FlagIt gives us confidence in our content. The credibility scoring helps us make informed decisions about what to publish.',
        rating: 5,
    },
];

/**
 * Customer testimonials section with animated cards
 */
export function TestimonialsSection() {
    return (
        <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Loved by Teams Worldwide
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Join thousands of professionals who trust FlagIt to combat misinformation
                    </p>
                </motion.div>

                {/* Testimonial Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            variants={staggerItem}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }}
                            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-all duration-300"
                        >
                            {/* Rating */}
                            <div className="flex gap-1 mb-6">
                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                    <span key={i} className="text-yellow-400 text-xl">
                                        ⭐
                                    </span>
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                                "{testimonial.text}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                                <div className="text-5xl">{testimonial.avatar}</div>
                                <div>
                                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Social Proof Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <div className="flex flex-wrap justify-center gap-12">
                        <div>
                            <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                10,000+
                            </p>
                            <p className="text-gray-600 mt-2">Active Users</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                99.8%
                            </p>
                            <p className="text-gray-600 mt-2">Accuracy Rate</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                24/7
                            </p>
                            <p className="text-gray-600 mt-2">Support Available</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
