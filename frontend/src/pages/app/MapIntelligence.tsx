import { useState } from "react";
import { useLenis } from "@/hooks/useLenis";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientButton } from "@/components/ui/gradient-button";
import { StatusBadge } from "@/components/ui/status-badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { MapPin, Layers, Clock, ZoomIn, ZoomOut, AlertTriangle, Filter } from "lucide-react";

const regions = [
  { name: "United States", risk: "high", claims: 4521, lat: 39.8, lng: -98.5 },
  { name: "United Kingdom", risk: "medium", claims: 2134, lat: 54.0, lng: -2.0 },
  { name: "Germany", risk: "medium", claims: 1856, lat: 51.2, lng: 10.4 },
  { name: "Brazil", risk: "high", claims: 3245, lat: -14.2, lng: -51.9 },
  { name: "India", risk: "critical", claims: 5678, lat: 20.6, lng: 78.9 },
  { name: "Australia", risk: "low", claims: 892, lat: -25.3, lng: 133.8 },
];

const clusters = [
  { id: 1, x: 25, y: 35, count: 145, risk: "critical" },
  { id: 2, x: 45, y: 40, count: 89, risk: "high" },
  { id: 3, x: 52, y: 30, count: 67, risk: "medium" },
  { id: 4, x: 75, y: 55, count: 234, risk: "critical" },
  { id: 5, x: 30, y: 65, count: 56, risk: "medium" },
  { id: 6, x: 85, y: 70, count: 78, risk: "low" },
];

const categories = [
  { name: "Political", color: "#3B82F6", checked: true },
  { name: "Health", color: "#EF4444", checked: true },
  { name: "Financial", color: "#F59E0B", checked: true },
  { name: "Science", color: "#22C55E", checked: false },
];

export default function MapIntelligence() {
  useLenis(); // Enable smooth scrolling
  const [hoveredCluster, setHoveredCluster] = useState<number | null>(null);
  const [timelineValue, setTimelineValue] = useState([50]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Map Intelligence</h1>
          <p className="text-muted-foreground">Geographic visualization of misinformation spread</p>
        </div>
        <div className="flex items-center gap-3">
          <Select defaultValue="heatmap">
            <SelectTrigger className="w-40 input-glass">
              <Layers className="w-4 h-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="glass-strong">
              <SelectItem value="heatmap">Heatmap</SelectItem>
              <SelectItem value="clusters">Clusters</SelectItem>
              <SelectItem value="markers">Markers</SelectItem>
            </SelectContent>
          </Select>
          <GradientButton variant="glass">
            <Filter className="w-4 h-4" />
            Filters
          </GradientButton>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Map Area */}
        <div className="lg:col-span-3">
          <GlassCard className="p-4 relative overflow-hidden">
            {/* Simulated Map */}
            <div className="relative h-[500px] bg-secondary/30 rounded-lg overflow-hidden">
              {/* Grid lines for map effect */}
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px'
              }} />

              {/* Heatmap gradient overlay */}
              <div className="absolute inset-0">
                <div className="absolute top-[20%] left-[20%] w-32 h-32 bg-red-500/20 rounded-full blur-3xl" />
                <div className="absolute top-[30%] left-[45%] w-24 h-24 bg-orange-500/20 rounded-full blur-3xl" />
                <div className="absolute top-[25%] left-[50%] w-20 h-20 bg-yellow-500/15 rounded-full blur-2xl" />
                <div className="absolute top-[50%] left-[70%] w-40 h-40 bg-red-500/25 rounded-full blur-3xl" />
                <div className="absolute top-[60%] left-[25%] w-28 h-28 bg-orange-500/15 rounded-full blur-2xl" />
              </div>

              {/* Cluster markers */}
              {clusters.map((cluster) => (
                <div
                  key={cluster.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-transform hover:scale-110"
                  style={{ left: `${cluster.x}%`, top: `${cluster.y}%` }}
                  onMouseEnter={() => setHoveredCluster(cluster.id)}
                  onMouseLeave={() => setHoveredCluster(null)}
                >
                  <div className={`
                    relative flex items-center justify-center rounded-full border-2 backdrop-blur-sm
                    ${cluster.risk === "critical" ? "bg-red-500/30 border-red-500 text-red-300" : ""}
                    ${cluster.risk === "high" ? "bg-orange-500/30 border-orange-500 text-orange-300" : ""}
                    ${cluster.risk === "medium" ? "bg-yellow-500/30 border-yellow-500 text-yellow-300" : ""}
                    ${cluster.risk === "low" ? "bg-green-500/30 border-green-500 text-green-300" : ""}
                  `}
                    style={{
                      width: `${Math.min(60, 30 + cluster.count / 5)}px`,
                      height: `${Math.min(60, 30 + cluster.count / 5)}px`,
                    }}>
                    <span className="text-xs font-bold">{cluster.count}</span>
                    {cluster.risk === "critical" && (
                      <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping" />
                    )}
                  </div>

                  {/* Hover card */}
                  {hoveredCluster === cluster.id && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-10">
                      <GlassCard className="p-3 min-w-[150px]">
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin className="w-4 h-4 text-cyan" />
                          <span className="font-medium text-sm">Cluster #{cluster.id}</span>
                        </div>
                        <div className="space-y-1 text-xs">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Claims:</span>
                            <span className="font-medium">{cluster.count}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Risk:</span>
                            <StatusBadge variant="risk" risk={cluster.risk as any} className="text-[10px]">
                              {cluster.risk}
                            </StatusBadge>
                          </div>
                        </div>
                      </GlassCard>
                    </div>
                  )}
                </div>
              ))}

              {/* Map controls */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <GradientButton variant="glass" size="sm" className="w-10 h-10 p-0">
                  <ZoomIn className="w-4 h-4" />
                </GradientButton>
                <GradientButton variant="glass" size="sm" className="w-10 h-10 p-0">
                  <ZoomOut className="w-4 h-4" />
                </GradientButton>
              </div>

              {/* Legend */}
              <div className="absolute bottom-4 left-4">
                <GlassCard className="p-3">
                  <p className="text-xs font-medium mb-2">Risk Levels</p>
                  <div className="space-y-1">
                    {["critical", "high", "medium", "low"].map((risk) => (
                      <div key={risk} className="flex items-center gap-2 text-xs">
                        <span className={`w-3 h-3 rounded-full ${risk === "critical" ? "bg-red-500" :
                            risk === "high" ? "bg-orange-500" :
                              risk === "medium" ? "bg-yellow-500" : "bg-green-500"
                          }`} />
                        <span className="capitalize">{risk}</span>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </div>
            </div>

            {/* Timeline Slider */}
            <div className="mt-4">
              <div className="flex items-center gap-4">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <div className="flex-1">
                  <Slider
                    value={timelineValue}
                    onValueChange={setTimelineValue}
                    max={100}
                    step={1}
                    className="cursor-pointer"
                  />
                </div>
                <span className="text-sm text-muted-foreground w-24">Jan 15, 2024</span>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* Category Layers */}
          <GlassCard className="p-4">
            <h4 className="font-semibold mb-3">Category Layers</h4>
            <div className="space-y-3">
              {categories.map((cat, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Checkbox id={`cat-${i}`} defaultChecked={cat.checked} />
                  <label htmlFor={`cat-${i}`} className="flex items-center gap-2 cursor-pointer text-sm">
                    <span className="w-3 h-3 rounded-full" style={{ background: cat.color }} />
                    {cat.name}
                  </label>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Regional Overview */}
          <GlassCard className="p-4">
            <h4 className="font-semibold mb-3">Regional Risk Levels</h4>
            <div className="space-y-3">
              {regions.map((region, i) => (
                <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors cursor-pointer">
                  <div>
                    <p className="text-sm font-medium">{region.name}</p>
                    <p className="text-xs text-muted-foreground">{region.claims.toLocaleString()} claims</p>
                  </div>
                  <StatusBadge variant="risk" risk={region.risk as any}>
                    {region.risk}
                  </StatusBadge>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Active Alerts */}
          <GlassCard className="p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-red-400" />
              Active Hotspots
            </h4>
            <div className="space-y-2">
              <div className="p-2 rounded-lg bg-red-500/10 border border-red-500/20">
                <p className="text-sm font-medium text-red-400">Mumbai, India</p>
                <p className="text-xs text-muted-foreground">Vaccine misinformation surge</p>
              </div>
              <div className="p-2 rounded-lg bg-orange-500/10 border border-orange-500/20">
                <p className="text-sm font-medium text-orange-400">São Paulo, Brazil</p>
                <p className="text-xs text-muted-foreground">Political disinfo campaign</p>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
