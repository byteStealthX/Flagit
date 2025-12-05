import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
    {
        number: "01",
        title: "Ingest",
        description: "Integrate your data feeds, social channels, and monitoring systems.",
        splineUrl: "https://prod.spline.design/xxxxx/ingest/scene.splinecode",
    },
    {
        number: "02",
        title: "Analyze",
        description: "Our models process claims, cross-reference facts, and assess credibility.",
        splineUrl: "https://prod.spline.design/xxxxx/analyze/scene.splinecode",
    },
    {
        number: "03",
        title: "Verify",
        description: "Analysts review flagged content with AI-assisted evidence gathering.",
        splineUrl: "https://prod.spline.design/xxxxx/verify/scene.splinecode",
    },
    {
        number: "04",
        title: "Report",
        description: "Generate reports, trigger alerts, and automate response workflows.",
        splineUrl: "https://prod.spline.design/xxxxx/report/scene.splinecode",
    },
];

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative">
            <div
                className="relative rounded-3xl p-6 transition-all duration-500 ease-out"
                style={{
                    background: "rgba(11, 21, 40, 0.60)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    boxShadow: "0 0 40px rgba(0, 255, 255, 0.12)",
                }}>
                {/* Hover Glow Effect */}
                <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                        background: "radial-gradient(circle at center, rgba(50, 241, 255, 0.15), transparent 70%)",
                        filter: "blur(20px)",
                    }}
                />

                {/* Spline 3D Icon Container */}
                <div
                    className="relative mb-6 rounded-2xl overflow-hidden transition-transform duration-500 group-hover:-translate-y-2"
                    style={{
                        height: "160px",
                        background: "rgba(255, 255, 255, 0.03)",
                        backdropFilter: "blur(16px)",
                        border: "1px solid rgba(255, 255, 255, 0.06)",
                        boxShadow: "inset 0 0 20px rgba(0, 255, 255, 0.08)",
                    }}>
                    <iframe
                        src={step.splineUrl}
                        frameBorder="0"
                        width="100%"
                        height="100%"
                        style={{
                            border: "none",
                            background: "transparent",
                        }}
                        title={`${step.title} 3D Icon`}
                    />
                </div>

                {/* Step Number */}
                <div
                    className="text-5xl font-extrabold mb-3 bg-gradient-to-r from-[#32F1FF] to-[#2DEAAF] bg-clip-text text-transparent"
                    style={{
                        opacity: 0.4,
                    }}>
                    {step.number}
                </div>

                {/* Step Title */}
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>

                {/* Step Description */}
                <p
                    className="text-sm leading-relaxed"
                    style={{
                        color: "#9BA3B4",
                    }}>
                    {step.description}
                </p>

                {/* Connecting Line (except last card) */}
                {index < steps.length - 1 && (
                    <div
                        className="hidden lg:block absolute top-1/2 -right-8 w-16 h-px"
                        style={{
                            background: "linear-gradient(to right, rgba(50, 241, 255, 0.3), transparent)",
                        }}
                    />
                )}
            </div>
        </motion.div>
    );
}

export default function HowItWorks3D() {
    return (
        <section
            className="relative py-28 px-6 overflow-hidden"
            style={{
                background: "linear-gradient(to bottom, #020617, #071426, #020617)",
            }}>
            {/* Background Glow */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20 pointer-events-none"
                style={{
                    background: "radial-gradient(circle, rgba(50, 241, 255, 0.2), transparent 70%)",
                    filter: "blur(120px)",
                }}
            />

            <div className="container max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-white mb-4">
                        How It <span className="bg-gradient-to-r from-[#32F1FF] to-[#2DEAAF] bg-clip-text text-transparent">Works</span>
                    </h2>
                    <p
                        className="text-lg max-w-2xl mx-auto"
                        style={{
                            color: "#9BA3B4",
                        }}>
                        From data ingestion to actionable insights in four streamlined steps.
                    </p>
                </motion.div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {steps.map((step, index) => (
                        <StepCard key={step.number} step={step} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
