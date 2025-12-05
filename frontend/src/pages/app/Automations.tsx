import { useLenis } from "@/hooks/useLenis";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientButton } from "@/components/ui/gradient-button";
import { StatusBadge } from "@/components/ui/status-badge";
import { Plus, Zap, Play, Pause, Trash2, Clock, ArrowRight } from "lucide-react";

const automations = [
  { id: 1, name: "High-Risk Alert Notification", trigger: "Risk Level = Critical", action: "Send Slack Alert", status: "active", runs: 234 },
  { id: 2, name: "Auto-Generate Report", trigger: "Confidence > 90%", action: "Create Draft Report", status: "active", runs: 156 },
  { id: 3, name: "Source Health Check", trigger: "Every 6 hours", action: "Ping All Sources", status: "paused", runs: 89 },
  { id: 4, name: "Weekly Digest Email", trigger: "Every Monday 9AM", action: "Send Summary Email", status: "active", runs: 12 },
];

export default function Automations() {
  useLenis(); // Enable smooth scrolling
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Automations</h1>
          <p className="text-muted-foreground">Automated workflows and triggers</p>
        </div>
        <GradientButton><Plus className="w-4 h-4" />Create Automation</GradientButton>
      </div>

      <div className="space-y-4">
        {automations.map((auto) => (
          <GlassCard key={auto.id} className="p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <Zap className="w-5 h-5 text-background" />
                </div>
                <div>
                  <h3 className="font-medium">{auto.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                    <span className="px-2 py-0.5 rounded bg-secondary/50">{auto.trigger}</span>
                    <ArrowRight className="w-4 h-4" />
                    <span className="px-2 py-0.5 rounded bg-secondary/50">{auto.action}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <StatusBadge status={auto.status === "active" ? "success" : "warning"}>{auto.status}</StatusBadge>
                  <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1"><Clock className="w-3 h-3" />{auto.runs} runs</p>
                </div>
                <div className="flex gap-2">
                  <GradientButton variant="glass" size="sm">{auto.status === "active" ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}</GradientButton>
                  <GradientButton variant="glass" size="sm" className="text-destructive"><Trash2 className="w-4 h-4" /></GradientButton>
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
