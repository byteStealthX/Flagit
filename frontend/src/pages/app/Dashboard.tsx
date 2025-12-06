import { GlassCard } from "@/components/ui/glass-card";
import { StatusBadge } from "@/components/ui/status-badge";
import {
  AlertTriangle,
  TrendingUp,
  FileText,
  Target,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import { motion } from "framer-motion";
import { useLenis } from "@/hooks/useLenis";
import { LazyComponent } from "@/hooks/useLazyLoad";
import { KPICard } from "@/components/ui/UIComponents";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/lib/api";
import { useEffect, useState } from "react";

const kpis = [
  {
    label: "New Claims",
    value: "1,284",
    change: "+12.5%",
    trend: "up",
    icon: AlertTriangle,
    color: "text-cyan",
  },
  {
    label: "High-Risk Alerts",
    value: "47",
    change: "+8.2%",
    trend: "up",
    icon: Target,
    color: "text-red-400",
  },
  {
    label: "Accuracy Rate",
    value: "94.2%",
    change: "+2.1%",
    trend: "up",
    icon: TrendingUp,
    color: "text-green-400",
  },
  {
    label: "Total Reports",
    value: "892",
    change: "+5.4%",
    trend: "up",
    icon: FileText,
    color: "text-blue-400",
  },
  {
    label: "Risk Index",
    value: "6.8",
    change: "-3.2%",
    trend: "down",
    icon: Activity,
    color: "text-yellow-400",
  },
];

const trendData = [
  { name: "Mon", claims: 120, verified: 98, flagged: 22 },
  { name: "Tue", claims: 145, verified: 120, flagged: 25 },
  { name: "Wed", claims: 160, verified: 135, flagged: 25 },
  { name: "Thu", claims: 180, verified: 150, flagged: 30 },
  { name: "Fri", claims: 210, verified: 180, flagged: 30 },
  { name: "Sat", claims: 140, verified: 115, flagged: 25 },
  { name: "Sun", claims: 130, verified: 105, flagged: 25 },
];

const categoryData = [
  { name: "Political", value: 35, color: "#3B82F6" },
  { name: "Health", value: 25, color: "#06B6D4" },
  { name: "Science", value: 20, color: "#2DD4BF" },
  { name: "Financial", value: 12, color: "#F59E0B" },
  { name: "Other", value: 8, color: "#6B7280" },
];

const distributionData = [
  { name: "Critical", count: 12, fill: "#EF4444" },
  { name: "High", count: 35, fill: "#F97316" },
  { name: "Medium", count: 89, fill: "#EAB308" },
  { name: "Low", count: 156, fill: "#22C55E" },
];

const recentReports = [
  {
    id: "RPT-1234",
    title: "Vaccine misinformation campaign",
    status: "In Review",
    risk: "critical",
    analyst: "Sarah K.",
    time: "2 hours ago",
  },
  {
    id: "RPT-1233",
    title: "Deepfake video analysis",
    status: "Verified",
    risk: "high",
    analyst: "Mike T.",
    time: "4 hours ago",
  },
  {
    id: "RPT-1232",
    title: "Financial scam network",
    status: "Published",
    risk: "medium",
    analyst: "Alex C.",
    time: "6 hours ago",
  },
  {
    id: "RPT-1231",
    title: "Election interference claim",
    status: "In Review",
    risk: "critical",
    analyst: "Emma L.",
    time: "8 hours ago",
  },
];

const systemHealth = [
  { name: "API Latency", value: 45, status: "good" },
  { name: "Model Accuracy", value: 94, status: "good" },
  { name: "Queue Depth", value: 23, status: "warning" },
  { name: "Storage", value: 67, status: "good" },
];

export default function Dashboard() {
  useLenis(); // Enable smooth scrolling
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    api.getDashboardStats().then(response => {
      if (response && response.success) {
        setStats(response.data);
      }
    }).catch(console.error);
  }, []);

  const getKpiValue = (label: string, fallback: string) => {
    if (!stats) return fallback;
    switch (label) {
      case "Total Reports": return stats.totalReports?.toString() || fallback;
      case "High-Risk Alerts": return stats.highPriority?.toString() || fallback;
      default: return fallback;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Real-time intelligence overview</p>
        </div>
        <StatusBadge status="success">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          System Online
        </StatusBadge>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {kpis.map((kpi, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
          >
            <GlassCard className="stat-card p-4">
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary/50 mb-3">
                  <kpi.icon className={`w-5 h-5 ${kpi.color}`} />
                </div>
                <p className="text-3xl font-bold mb-1">{getKpiValue(kpi.label, kpi.value)}</p>
                <p className="text-xs text-muted-foreground">{kpi.label}</p>
                <div className={`flex items-center gap-1 text-xs mt-2 ${kpi.trend === "up" ? "text-green-400" : "text-red-400"}`}>
                  {kpi.trend === "up" ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                  {kpi.change}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Trend Chart */}
        <GlassCard className="lg:col-span-2 p-5">
          <h3 className="font-semibold mb-4">Claim Activity Trend</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendData}>
                <defs>
                  <linearGradient id="claimGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#06B6D4" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#06B6D4" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    background: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Area type="monotone" dataKey="claims" stroke="#06B6D4" fill="url(#claimGradient)" strokeWidth={2} />
                <Line type="monotone" dataKey="verified" stroke="#22C55E" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="flagged" stroke="#EF4444" strokeWidth={2} dot={false} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        {/* Category Distribution */}
        <GlassCard className="p-5">
          <h3 className="font-semibold mb-4">Categories</h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={70}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    background: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-2 mt-4">
            {categoryData.map((cat, i) => (
              <div key={i} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full" style={{ background: cat.color }} />
                  {cat.name}
                </div>
                <span className="text-muted-foreground">{cat.value}%</span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Risk Distribution */}
        <GlassCard className="p-5">
          <h3 className="font-semibold mb-4">Risk Distribution</h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={distributionData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis type="category" dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} width={60} />
                <Tooltip
                  contentStyle={{
                    background: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="count" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        {/* Recent Reports */}
        <GlassCard className="lg:col-span-2 p-5">
          <h3 className="font-semibold mb-4">Recent Reports</h3>
          <div className="space-y-3">
            {recentReports.map((report, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors cursor-pointer">
                <div className="flex items-center gap-4">
                  <StatusBadge variant="risk" risk={report.risk as any}>
                    {report.risk}
                  </StatusBadge>
                  <div>
                    <p className="font-medium text-sm">{report.title}</p>
                    <p className="text-xs text-muted-foreground">{report.id} • {report.analyst}</p>
                  </div>
                </div>
                <div className="text-right">
                  <StatusBadge status={report.status === "Verified" ? "success" : report.status === "Published" ? "info" : "warning"}>
                    {report.status}
                  </StatusBadge>
                  <p className="text-xs text-muted-foreground mt-1">{report.time}</p>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      {/* System Health */}
      <GlassCard className="p-5">
        <h3 className="font-semibold mb-4">System Health</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {systemHealth.map((item, i) => (
            <div key={i} className="p-4 rounded-lg bg-secondary/30">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">{item.name}</span>
                <span className={`w-2 h-2 rounded-full ${item.status === "good" ? "bg-green-400" : "bg-yellow-400"}`} />
              </div>
              <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className={`absolute inset-y-0 left-0 rounded-full ${item.status === "good" ? "bg-gradient-to-r from-cyan to-teal" : "bg-yellow-400"}`}
                  style={{ width: `${item.value}%` }}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1">{item.value}%</p>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}
