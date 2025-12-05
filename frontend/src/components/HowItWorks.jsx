import React from "react";

export default function HowItWorks() {
    const steps = [
        {
            id: "01",
            title: "Ingest",
            desc: "Integrate your data feeds, social channels, and monitoring systems.",
            spline: "" // <-- paste Spline URL here later
        },
        {
            id: "02",
            title: "Analyze",
            desc: "Our models process claims, cross-reference facts, and assess credibility.",
            spline: "" // <-- paste Spline URL here later
        },
        {
            id: "03",
            title: "Verify",
            desc: "Analysts review flagged content with AI-assisted evidence gathering.",
            spline: "" // <-- paste Spline URL here later
        },
        {
            id: "04",
            title: "Report",
            desc: "Generate reports, trigger alerts, and automate response workflows.",
            spline: "" // <-- paste Spline URL here later
        },
    ];

    return (
        <section className="w-full bg-gradient-to-b from-[#020617] to-[#071426] text-white py-20">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Title */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl sm:text-5xl font-extrabold">
                        How It{" "}
                        <span className="bg-gradient-to-r from-[#32F1FF] to-[#2DEAAF] bg-clip-text text-transparent">
                            Works
                        </span>
                    </h2>
                    <p className="mt-4 text-[#9BA3B4] max-w-2xl mx-auto">
                        From data ingestion to actionable insights in four streamlined steps.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="
                bg-[#0B1528]/60 
                border border-white/10 
                backdrop-blur-xl 
                rounded-3xl 
                p-6 
                shadow-[0_10px_40px_rgba(0,255,255,0.06)] 
                hover:shadow-[0_0_45px_rgba(0,255,255,0.18)]
                hover:-translate-y-1 
                hover:scale-[1.02] 
                transition-all 
                duration-300
              "
                        >

                            {/* Spline 3D Container */}
                            <div className="w-full h-44 rounded-2xl overflow-hidden mb-6 bg-white/5 border border-white/10 backdrop-blur-md">
                                <iframe
                                    src={step.spline}
                                    frameBorder="0"
                                    allow="autoplay; fullscreen; accelerometer; gyroscope;"
                                    className="w-full h-full"
                                />
                            </div>

                            {/* Step Number */}
                            <div
                                className="text-4xl font-extrabold"
                                style={{
                                    background:
                                        "linear-gradient(90deg, #32F1FF 0%, #2DEAAF 100%)",
                                    WebkitBackgroundClip: "text",
                                    color: "transparent",
                                }}
                            >
                                {step.id}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold mt-3">{step.title}</h3>

                            {/* Description */}
                            <p className="text-[#9BA3B4] text-sm mt-3 leading-relaxed">
                                {step.desc}
                            </p>

                            {/* Soft Bottom Glow */}
                            <div
                                className="mt-4"
                                style={{
                                    height: "6px",
                                    borderRadius: "9999px",
                                    background:
                                        "linear-gradient(90deg, rgba(50,241,255,0.08), rgba(45,234,175,0.08))",
                                    filter: "blur(12px)",
                                }}
                            ></div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
