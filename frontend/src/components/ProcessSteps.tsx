"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
    {
        number: "01",
        title: "Ingest",
        description: "Integrate your data feeds, social channels, and monitoring systems.",
        image: "/images/step-01-ingest.png",
        color: "cyan",
    },
    {
        number: "02",
        title: "Analyze",
        description: "Our models process claims, cross-reference facts, and assess credibility.",
        image: "/images/step-02-analyze.png",
        color: "blue",
    },
    {
        number: "03",
        title: "Verify",
        description: "Analysts review flagged content with AI-assisted evidence gathering.",
        image: "/images/step-03-verify.png",
        color: "purple",
    },
    {
        number: "04",
        title: "Report",
        description: "Generate reports, trigger alerts, and automate response workflows.",
        image: "/images/step-04-report.png",
        color: "pink",
    },
];

const colorClasses = {
    cyan: {
        glow: "shadow-[0_0_30px_rgba(6,182,212,0.3)]",
        hoverGlow: "group-hover:shadow-[0_0_50px_rgba(6,182,212,0.5)]",
        border: "border-cyan-500/20",
        hoverBorder: "group-hover:border-cyan-500/40",
        gradient: "from-cyan-500/10 via-transparent to-transparent",
        text: "text-cyan-400",
    },
    blue: {
        glow: "shadow-[0_0_30px_rgba(59,130,246,0.3)]",
        hoverGlow: "group-hover:shadow-[0_0_50px_rgba(59,130,246,0.5)]",
        border: "border-blue-500/20",
        hoverBorder: "group-hover:border-blue-500/40",
        gradient: "from-blue-500/10 via-transparent to-transparent",
        text: "text-blue-400",
    },
    purple: {
        glow: "shadow-[0_0_30px_rgba(168,85,247,0.3)]",
        hoverGlow: "group-hover:shadow-[0_0_50px_rgba(168,85,247,0.5)]",
        border: "border-purple-500/20",
        hoverBorder: "group-hover:border-purple-500/40",
        gradient: "from-purple-500/10 via-transparent to-transparent",
        text: "text-purple-400",
    },
    pink: {
        glow: "shadow-[0_0_30px_rgba(236,72,153,0.3)]",
        hoverGlow: "group-hover:shadow-[0_0_50px_rgba(236,72,153,0.5)]",
        border: "border-pink-500/20",
        hoverBorder: "group-hover:border-pink-500/40",
        gradient: "from-pink-500/10 via-transparent to-transparent",
        text: "text-pink-400",
    },
};

function ProcessCard({ step, index }: { step: typeof steps[0]; index: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const colors = colorClasses[step.color as keyof typeof colorClasses];

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="group relative"
        >
            {/* Glow background */}
            <div
                className={`absolute -inset-1 bg-gradient-to-r ${colors.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
            />

            {/* Card */}
            <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={`relative h-full rounded-3xl border ${colors.border} ${colors.hoverBorder} ${colors.glow} ${colors.hoverGlow} bg-slate-900/50 backdrop-blur-xl p-8 transition-all duration-500`}
            >
                {/* Image/Illustration Area */}
                <div className="mb-6 aspect-video rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 overflow-hidden relative">
                    {/* Placeholder for image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${colors.gradient} blur-2xl opacity-50`} />
                    </div>
                    {/* Image will go here */}
                    <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover opacity-0"
                        onError={(e) => {
                            e.currentTarget.style.display = 'none';
                        }}
                    />
                </div>

                {/* Step Number */}
                <div className="mb-4">
                    <span
                        className={`text-6xl font-bold ${colors.text} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
                    >
                        {step.number}
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                    {step.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                    {step.description}
                </p>

                {/* Decorative corner accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${colors.gradient} blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-full -translate-y-1/2 translate-x-1/2`} />
            </motion.div>
        </motion.div>
    );
}

export default function ProcessSteps() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section
            ref={sectionRef}
            className="relative w-full py-24 px-6 overflow-hidden"
            style={{
                background: 'linear-gradient(to bottom, #0f172a, #1e1b4b, #0f172a)',
            }}
        >
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Process <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Workflow</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Our streamlined four-step process ensures accurate, efficient threat intelligence analysis
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <ProcessCard key={step.number} step={step} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
