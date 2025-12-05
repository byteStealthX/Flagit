"use client";

import ClickSpark from "@/components/ui/click-spark";
import { GradientButton } from "@/components/ui/gradient-button";

export function ClickSparkDemo() {
    return (
        <div className="w-full space-y-8">
            <div className="space-y-2">
                <h3 className="text-2xl font-bold">Click Spark Effect</h3>
                <p className="text-muted-foreground">
                    Click anywhere in the areas below to see spark animations
                </p>
            </div>

            {/* White Sparks on Dark */}
            <div className="space-y-2">
                <h4 className="text-lg font-semibold">White Sparks (Default)</h4>
                <ClickSpark
                    sparkColor="#ffffff"
                    sparkSize={10}
                    sparkRadius={15}
                    sparkCount={8}
                    duration={400}
                >
                    <div className="w-full h-[300px] bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg border border-border flex items-center justify-center">
                        <p className="text-white text-lg">Click anywhere!</p>
                    </div>
                </ClickSpark>
            </div>

            {/* Cyan Sparks */}
            <div className="space-y-2">
                <h4 className="text-lg font-semibold">Cyan Sparks (Large)</h4>
                <ClickSpark
                    sparkColor="#06b6d4"
                    sparkSize={15}
                    sparkRadius={25}
                    sparkCount={12}
                    duration={600}
                >
                    <div className="w-full h-[300px] bg-gradient-to-br from-slate-950 to-slate-900 rounded-lg border border-cyan-500/20 flex items-center justify-center">
                        <p className="text-cyan-400 text-lg">Click for larger sparks!</p>
                    </div>
                </ClickSpark>
            </div>

            {/* Purple Sparks with Button */}
            <div className="space-y-2">
                <h4 className="text-lg font-semibold">Purple Sparks (Fast)</h4>
                <ClickSpark
                    sparkColor="#a855f7"
                    sparkSize={12}
                    sparkRadius={20}
                    sparkCount={16}
                    duration={300}
                    easing="ease-out"
                >
                    <div className="w-full h-[300px] bg-gradient-to-br from-purple-950/50 to-slate-900 rounded-lg border border-purple-500/20 flex items-center justify-center gap-4">
                        <GradientButton>Click Me!</GradientButton>
                        <p className="text-purple-400">Or click anywhere</p>
                    </div>
                </ClickSpark>
            </div>

            {/* Gold Sparks */}
            <div className="space-y-2">
                <h4 className="text-lg font-semibold">Gold Sparks (Slow & Smooth)</h4>
                <ClickSpark
                    sparkColor="#fbbf24"
                    sparkSize={14}
                    sparkRadius={30}
                    sparkCount={10}
                    duration={800}
                    easing="ease-in-out"
                    extraScale={1.2}
                >
                    <div className="w-full h-[300px] bg-gradient-to-br from-amber-950/30 to-slate-900 rounded-lg border border-amber-500/20 flex items-center justify-center">
                        <p className="text-amber-400 text-lg">Smooth golden sparks</p>
                    </div>
                </ClickSpark>
            </div>

            {/* Interactive Card */}
            <div className="space-y-2">
                <h4 className="text-lg font-semibold">Interactive Card</h4>
                <ClickSpark
                    sparkColor="#10b981"
                    sparkSize={10}
                    sparkRadius={18}
                    sparkCount={8}
                    duration={500}
                >
                    <div className="w-full p-8 bg-gradient-to-br from-emerald-950/30 to-slate-900 rounded-lg border border-emerald-500/20">
                        <h5 className="text-xl font-bold text-emerald-400 mb-4">Click Anywhere on This Card</h5>
                        <p className="text-muted-foreground mb-4">
                            The ClickSpark component wraps your content and adds beautiful click animations.
                            Perfect for interactive elements, buttons, cards, or any clickable area.
                        </p>
                        <div className="flex gap-4">
                            <GradientButton variant="gradient">Action 1</GradientButton>
                            <GradientButton variant="outline">Action 2</GradientButton>
                        </div>
                    </div>
                </ClickSpark>
            </div>
        </div>
    );
}
