import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, FileCheck, Zap, Shield, CheckCircle } from 'lucide-react';

interface Step {
    id: string;
    number: number;
    title: string;
    description: string;
    icon: React.ReactNode;
    details: string[];
    estimatedTime: string;
}

const steps: Step[] = [
    {
        id: '1',
        number: 1,
        title: 'Submit Content',
        description: 'Submit any text, URL, or document for verification',
        icon: <FileCheck className="w-6 h-6" />,
        details: [
            'Paste text directly or provide URLs',
            'Upload documents (PDF, DOCX, TXT)',
            'Bulk submission supported',
            'API integration available',
        ],
        estimatedTime: '30 seconds',
    },
    {
        id: '2',
        number: 2,
        title: 'AI Analysis',
        description: 'Our AI analyzes sources, credibility, and claims',
        icon: <Zap className="w-6 h-6" />,
        details: [
            'Fact-checking against verified sources',
            'Source credibility scoring',
            'Claim extraction and validation',
            'Cross-reference with databases',
        ],
        estimatedTime: '30-60 seconds',
    },
    {
        id: '3',
        number: 3,
        title: 'Evidence Extraction',
        description: 'Extract and verify supporting evidence automatically',
        icon: <Shield className="w-6 h-6" />,
        details: [
            'Identify primary sources',
            'Extract relevant quotes',
            'Verify publication dates',
            'Check author credentials',
        ],
        estimatedTime: '15 seconds',
    },
    {
        id: '4',
        number: 4,
        title: 'Get Results',
        description: 'Receive detailed report with verdict and evidence',
        icon: <CheckCircle className="w-6 h-6" />,
        details: [
            'Verified/Rejected/Needs Review status',
            'Credibility score (0-100)',
            'Source citations',
            'Exportable PDF reports',
        ],
        estimatedTime: 'Instant',
    },
];

/**
 * Enhanced How It Works section with expandable steps
 */
export function HowItWorksSection() {
    const [expandedStep, setExpandedStep] = useState<string | null>(null);

    const toggleStep = (stepId: string) => {
        setExpandedStep(expandedStep === stepId ? null : stepId);
    };

    return (
        <section className="py-20 px-6 bg-white" id="workflow">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        How It Works
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Get fact-checked results in under 2 minutes with our 4-step process
                    </p>
                </motion.div>

                {/* Steps */}
                <div className="space-y-4">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow"
                        >
                            {/* Step Header */}
                            <button
                                onClick={() => toggleStep(step.id)}
                                className="w-full px-6 py-6 flex items-center gap-4 text-left hover:bg-gray-50 transition-colors"
                            >
                                {/* Number */}
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center justify-center font-bold text-lg">
                                    {step.number}
                                </div>

                                {/* Icon */}
                                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                                    {step.icon}
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600">{step.description}</p>
                                </div>

                                {/* Time */}
                                <div className="flex-shrink-0 text-sm text-gray-500 hidden sm:block">
                                    ⏱️ {step.estimatedTime}
                                </div>

                                {/* Chevron */}
                                <motion.div
                                    animate={{ rotate: expandedStep === step.id ? 180 : 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="flex-shrink-0 text-gray-400"
                                >
                                    <ChevronDown className="w-6 h-6" />
                                </motion.div>
                            </button>

                            {/* Step Details */}
                            <AnimatePresence>
                                {expandedStep === step.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 pt-2 border-t border-gray-100 bg-gray-50">
                                            <p className="text-gray-700 font-medium mb-4">
                                                What happens in this step:
                                            </p>
                                            <ul className="space-y-2">
                                                {step.details.map((detail, i) => (
                                                    <motion.li
                                                        key={i}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: i * 0.05 }}
                                                        className="flex items-start gap-3 text-gray-600"
                                                    >
                                                        <span className="text-green-500 mt-0.5">✓</span>
                                                        <span>{detail}</span>
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-12"
                >
                    <p className="text-gray-600 mb-4">
                        Ready to start verifying content?
                    </p>
                    <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-xl transition-shadow">
                        Try It Free →
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
