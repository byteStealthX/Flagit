"use client";

import Lightning from "@/components/ui/lightning";

export function LightningDemo() {
    return (
        <div className="w-full space-y-8">
            <div className="space-y-2">
                <h3 className="text-2xl font-bold">Lightning Effect</h3>
                <p className="text-muted-foreground">
                    WebGL-based lightning animation with customizable parameters
                </p>
            </div>

            {/* Default Lightning */}
            <div className="space-y-2">
                <h4 className="text-lg font-semibold">Default (Blue)</h4>
                <div className="w-full h-[400px] relative rounded-lg overflow-hidden border border-border bg-black">
                    <Lightning hue={220} xOffset={0} speed={1} intensity={1} size={1} />
                </div>
            </div>

            {/* Cyan Lightning */}
            <div className="space-y-2">
                <h4 className="text-lg font-semibold">Cyan</h4>
                <div className="w-full h-[400px] relative rounded-lg overflow-hidden border border-border bg-black">
                    <Lightning hue={180} xOffset={0} speed={1} intensity={1.2} size={1} />
                </div>
            </div>

            {/* Purple Lightning */}
            <div className="space-y-2">
                <h4 className="text-lg font-semibold">Purple (Slow)</h4>
                <div className="w-full h-[400px] relative rounded-lg overflow-hidden border border-border bg-black">
                    <Lightning hue={280} xOffset={0} speed={0.5} intensity={1} size={1.2} />
                </div>
            </div>

            {/* Red Lightning */}
            <div className="space-y-2">
                <h4 className="text-lg font-semibold">Red (Fast & Intense)</h4>
                <div className="w-full h-[400px] relative rounded-lg overflow-hidden border border-border bg-black">
                    <Lightning hue={0} xOffset={0} speed={2} intensity={1.5} size={0.8} />
                </div>
            </div>

            {/* Green Lightning */}
            <div className="space-y-2">
                <h4 className="text-lg font-semibold">Green (Offset)</h4>
                <div className="w-full h-[400px] relative rounded-lg overflow-hidden border border-border bg-black">
                    <Lightning hue={120} xOffset={0.5} speed={1} intensity={1} size={1} />
                </div>
            </div>
        </div>
    );
}
