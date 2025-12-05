import { useLenis } from "@/hooks/useLenis";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientButton } from "@/components/ui/gradient-button";
import { StatusBadge } from "@/components/ui/status-badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Download, FileText, Upload, CheckCircle, Edit, Zap } from "lucide-react";

const activities = [
  { id: 1, action: "Report Published", user: "Sarah Kim", target: "RPT-1234", type: "create", time: "10 min ago" },
  { id: 2, action: "Claim Verified", user: "Mike Thompson", target: "CLM-4521", type: "verify", time: "25 min ago" },
  { id: 3, action: "Dataset Uploaded", user: "Emma Lee", target: "Social Media Q4", type: "upload", time: "1 hour ago" },
  { id: 4, action: "Source Updated", user: "John Davis", target: "Twitter API", type: "update", time: "2 hours ago" },
  { id: 5, action: "Automation Triggered", user: "System", target: "High-Risk Alert", type: "automated", time: "3 hours ago" },
];

const getIcon = (type: string) => {
  const icons = { create: FileText, verify: CheckCircle, upload: Upload, update: Edit, automated: Zap };
  return icons[type as keyof typeof icons] || FileText;
};

export default function ActivityLogs() {
  useLenis(); // Enable smooth scrolling
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div><h1 className="text-2xl font-bold">Activity Logs</h1><p className="text-muted-foreground">System activity timeline</p></div>
        <GradientButton variant="glass"><Download className="w-4 h-4" />Export</GradientButton>
      </div>

      <GlassCard className="p-4">
        <div className="flex gap-4">
          <div className="relative flex-1"><Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" /><Input placeholder="Search activities..." className="pl-10 input-glass" /></div>
          <Select defaultValue="all"><SelectTrigger className="w-40 input-glass"><SelectValue /></SelectTrigger><SelectContent className="glass-strong"><SelectItem value="all">All Types</SelectItem><SelectItem value="create">Create</SelectItem><SelectItem value="verify">Verify</SelectItem><SelectItem value="upload">Upload</SelectItem></SelectContent></Select>
        </div>
      </GlassCard>

      <GlassCard className="p-5">
        <div className="space-y-4">
          {activities.map((activity) => {
            const Icon = getIcon(activity.type);
            return (
              <div key={activity.id} className="flex items-center gap-4 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"><Icon className="w-5 h-5 text-primary" /></div>
                <div className="flex-1">
                  <p className="font-medium">{activity.action}</p>
                  <p className="text-sm text-muted-foreground">{activity.user} • {activity.target}</p>
                </div>
                <span className="text-sm text-muted-foreground">{activity.time}</span>
              </div>
            );
          })}
        </div>
      </GlassCard>
    </div>
  );
}
