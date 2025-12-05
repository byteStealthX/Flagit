import { useState } from "react";
import { useLenis } from "@/hooks/useLenis";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientButton } from "@/components/ui/gradient-button";
import { StatusBadge } from "@/components/ui/status-badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  Plus,
  Globe,
  Twitter,
  Facebook,
  Youtube,
  Settings,
  RefreshCw,
  TrendingUp,
  Clock,
  Shield,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";

const sources = [
  {
    id: "SRC-001",
    name: "Twitter/X API",
    type: "Social Media",
    icon: Twitter,
    trustScore: 72,
    claimsCollected: 45231,
    lastActivity: "2 min ago",
    status: "active",
  },
  {
    id: "SRC-002",
    name: "Facebook Graph",
    type: "Social Media",
    icon: Facebook,
    trustScore: 68,
    claimsCollected: 38456,
    lastActivity: "5 min ago",
    status: "active",
  },
  {
    id: "SRC-003",
    name: "YouTube Data API",
    type: "Video Platform",
    icon: Youtube,
    trustScore: 65,
    claimsCollected: 12890,
    lastActivity: "15 min ago",
    status: "active",
  },
  {
    id: "SRC-004",
    name: "Reuters News Feed",
    type: "News Agency",
    icon: Globe,
    trustScore: 95,
    claimsCollected: 8934,
    lastActivity: "1 hour ago",
    status: "active",
  },
  {
    id: "SRC-005",
    name: "AP News RSS",
    type: "News Agency",
    icon: Globe,
    trustScore: 94,
    claimsCollected: 7621,
    lastActivity: "30 min ago",
    status: "active",
  },
  {
    id: "SRC-006",
    name: "Custom RSS Feed",
    type: "Custom",
    icon: Globe,
    trustScore: 78,
    claimsCollected: 2345,
    lastActivity: "2 hours ago",
    status: "paused",
  },
];

const sourceTypes = [
  { value: "social", label: "Social Media Platform" },
  { value: "news", label: "News Agency" },
  { value: "rss", label: "RSS Feed" },
  { value: "api", label: "Custom API" },
  { value: "webhook", label: "Webhook" },
];

export default function Sources() {
  useLenis(); // Enable smooth scrolling
  const [configOpen, setConfigOpen] = useState(false);
  const [selectedSource, setSelectedSource] = useState<typeof sources[0] | null>(null);

  const getTrustColor = (score: number) => {
    if (score >= 90) return "text-green-400";
    if (score >= 70) return "text-yellow-400";
    return "text-red-400";
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Sources</h1>
          <p className="text-muted-foreground">Manage data collection sources</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <GradientButton>
              <Plus className="w-4 h-4" />
              Add Source
            </GradientButton>
          </DialogTrigger>
          <DialogContent className="glass-strong">
            <DialogHeader>
              <DialogTitle>Add New Source</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label>Source Type</Label>
                <Select>
                  <SelectTrigger className="input-glass">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent className="glass-strong">
                    {sourceTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Source Name</Label>
                <Input placeholder="My Custom Source" className="input-glass" />
              </div>
              <div className="space-y-2">
                <Label>API Endpoint / URL</Label>
                <Input placeholder="https://api.example.com/feed" className="input-glass" />
              </div>
              <div className="space-y-2">
                <Label>API Key (if required)</Label>
                <Input type="password" placeholder="••••••••••••" className="input-glass" />
              </div>
              <GradientButton className="w-full">
                <Plus className="w-4 h-4" />
                Add Source
              </GradientButton>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search */}
      <GlassCard className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search sources..." className="pl-10 input-glass" />
        </div>
      </GlassCard>

      {/* Source Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sources.map((source) => (
          <GlassCard key={source.id} className="p-5">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <source.icon className="w-5 h-5 text-cyan" />
                </div>
                <div>
                  <h3 className="font-medium">{source.name}</h3>
                  <p className="text-xs text-muted-foreground">{source.type}</p>
                </div>
              </div>
              <StatusBadge status={source.status === "active" ? "success" : "warning"}>
                {source.status}
              </StatusBadge>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Trust Score
                </span>
                <span className={`font-bold ${getTrustColor(source.trustScore)}`}>
                  {source.trustScore}%
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Claims Collected
                </span>
                <span className="font-medium">{source.claimsCollected.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Last Activity
                </span>
                <span className="text-sm">{source.lastActivity}</span>
              </div>
            </div>

            <div className="h-px bg-border/30 my-4" />

            <div className="flex gap-2">
              <Dialog open={configOpen && selectedSource?.id === source.id} onOpenChange={(open) => {
                setConfigOpen(open);
                if (open) setSelectedSource(source);
              }}>
                <DialogTrigger asChild>
                  <GradientButton variant="glass" size="sm" className="flex-1">
                    <Settings className="w-4 h-4" />
                    Configure
                  </GradientButton>
                </DialogTrigger>
                <DialogContent className="glass-strong">
                  <DialogHeader>
                    <DialogTitle>Configure {source.name}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <Label>Polling Interval</Label>
                      <Select defaultValue="5">
                        <SelectTrigger className="input-glass">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="glass-strong">
                          <SelectItem value="1">Every 1 minute</SelectItem>
                          <SelectItem value="5">Every 5 minutes</SelectItem>
                          <SelectItem value="15">Every 15 minutes</SelectItem>
                          <SelectItem value="60">Every hour</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Keywords Filter</Label>
                      <Input placeholder="vaccine, election, climate" className="input-glass" />
                    </div>
                    <div className="space-y-2">
                      <Label>Risk Threshold</Label>
                      <Select defaultValue="medium">
                        <SelectTrigger className="input-glass">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="glass-strong">
                          <SelectItem value="low">Low and above</SelectItem>
                          <SelectItem value="medium">Medium and above</SelectItem>
                          <SelectItem value="high">High and above</SelectItem>
                          <SelectItem value="critical">Critical only</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <GradientButton className="w-full">Save Configuration</GradientButton>
                  </div>
                </DialogContent>
              </Dialog>
              <GradientButton variant="glass" size="sm">
                <RefreshCw className="w-4 h-4" />
              </GradientButton>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
