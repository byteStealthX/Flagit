import { useState } from "react";
import { useLenis } from "@/hooks/useLenis";
import { LazyComponent } from "@/hooks/useLazyLoad";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientButton } from "@/components/ui/gradient-button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Download, Calendar, TrendingUp } from "lucide-react";
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
  AreaChart,
  Area,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";
import { motion } from "framer-motion";

const volumeData = [
  { date: "Jan 1", reports: 45, verified: 38, flagged: 7 },
  { date: "Jan 2", reports: 52, verified: 44, flagged: 8 },
  { date: "Jan 3", reports: 61, verified: 50, flagged: 11 },
  { date: "Jan 4", reports: 58, verified: 49, flagged: 9 },
  { date: "Jan 5", reports: 72, verified: 61, flagged: 11 },
  { date: "Jan 6", reports: 68, verified: 57, flagged: 11 },
  { date: "Jan 7", reports: 55, verified: 46, flagged: 9 },
];

const categoryData = [
  { name: "Political", value: 35, fill: "#3B82F6" },
  { name: "Health", value: 28, fill: "#06B6D4" },
  { name: "Financial", value: 18, fill: "#2DD4BF" },
  { name: "Science", value: 12, fill: "#F59E0B" },
  { name: "Social", value: 7, fill: "#8B5CF6" },
];

const platformData = [
  { name: "Twitter/X", count: 4521, percentage: 35 },
  { name: "Facebook", count: 3245, percentage: 25 },
  { name: "YouTube", count: 2589, percentage: 20 },
  { name: "TikTok", count: 1556, percentage: 12 },
  { name: "Reddit", count: 1038, percentage: 8 },
];

const geographicData = [
  { region: "North America", claims: 4500 },
  { region: "Europe", claims: 3200 },
  { region: "Asia Pacific", claims: 2800 },
  { region: "Latin America", claims: 1500 },
  { region: "Middle East", claims: 900 },
  { region: "Africa", claims: 600 },
];

const narrativeData = [
  { name: "Jan W1", "Vaccine Misinfo": 120, "Election Fraud": 85, "Climate Denial": 45, "Financial Scams": 67 },
  { name: "Jan W2", "Vaccine Misinfo": 145, "Election Fraud": 92, "Climate Denial": 52, "Financial Scams": 78 },
  { name: "Jan W3", "Vaccine Misinfo": 132, "Election Fraud": 105, "Climate Denial": 48, "Financial Scams: 89": 89 },
  { name: "Jan W4", "Vaccine Misinfo": 158, "Election Fraud": 78, "Climate Denial": 55, "Financial Scams": 95 },
];

const radarData = [
  { subject: "Political", A: 120, fullMark: 150 },
  { subject: "Health", A: 98, fullMark: 150 },
  { subject: "Financial", A: 86, fullMark: 150 },
  { subject: "Science", A: 99, fullMark: 150 },
  { subject: "Social", A: 85, fullMark: 150 },
  { subject: "Tech", A: 65, fullMark: 150 },
];

export default function Analytics() {
  useLenis(); // Enable smooth scrolling
  const [selectedTab, setSelectedTab] = useState("overview");

  const tabs = [
    {
      id: "overview",
      label: "Overview",
      content: (
        <div className="space-y-6">
          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { label: "Total Reports", value: "12,483", change: "+23.5%", icon: TrendingUp },
              { label: "Avg Accuracy", value: "94.2%", change: "+2.3%", icon: TrendingUp },
              { label: "Flagged Claims", value: "2,847", change: "+45.2%", icon: TrendingUp },
              { label: "Response Time", value: "2.4h", change: "-18.5%", icon: TrendingUp },
            ].map((card, i) => (
              <LazyComponent key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <GlassCard className="p-4">
                    <p className="text-xs text-muted-foreground mb-2">{card.label}</p>
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-2xl font-bold">{card.value}</p>
                        <p className="text-xs text-green-400 mt-1">{card.change}</p>
                      </div>
                      <card.icon className="w-8 h-8 text-cyan opacity-60" />
                    </div>
                  </GlassCard>
                </motion.div>
              </LazyComponent>
            ))}
          </div>

          {/* Volume Chart */}
          <LazyComponent>
            <GlassCard className="p-6">
              <h3 className="font-semibold mb-4">Claim Volume Trends</h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={volumeData}>
                  <defs>
                    <linearGradient id="colorReports" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
                  <XAxis dataKey="date" stroke="rgba(255,255,255,0.4)" />
                  <YAxis stroke="rgba(255,255,255,0.4)" />
                  <Tooltip contentStyle={{ backgroundColor: "rgba(15, 20, 30, 0.9)", border: "1px solid rgba(255,255,255,0.1)" }} />
                  <Area type="monotone" dataKey="reports" stroke="#3B82F6" fillOpacity={1} fill="url(#colorReports)" />
                </AreaChart>
              </ResponsiveContainer>
            </GlassCard>
          </LazyComponent>
        </div>
      ),
    },
    {
      id: "categories",
      label: "Categories",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <LazyComponent>
            <GlassCard className="p-6">
              <h3 className="font-semibold mb-4">Claims by Category</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie data={categoryData} cx="50%" cy="50%" outerRadius={80} dataKey="value">
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: "rgba(15, 20, 30, 0.9)", border: "1px solid rgba(255,255,255,0.1)" }} />
                </PieChart>
              </ResponsiveContainer>
            </GlassCard>
          </LazyComponent>

          <LazyComponent>
            <GlassCard className="p-6">
              <h3 className="font-semibold mb-4">Platform Distribution</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={platformData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
                  <XAxis dataKey="name" stroke="rgba(255,255,255,0.4)" />
                  <YAxis stroke="rgba(255,255,255,0.4)" />
                  <Tooltip contentStyle={{ backgroundColor: "rgba(15, 20, 30, 0.9)", border: "1px solid rgba(255,255,255,0.1)" }} />
                  <Bar dataKey="count" fill="#06B6D4" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </GlassCard>
          </LazyComponent>
        </div>
      ),
    },
    {
      id: "geographic",
      label: "Geographic",
      content: (
        <LazyComponent>
          <GlassCard className="p-6">
            <h3 className="font-semibold mb-4">Geographic Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={geographicData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
                <XAxis dataKey="region" stroke="rgba(255,255,255,0.4)" />
                <YAxis stroke="rgba(255,255,255,0.4)" />
                <Tooltip contentStyle={{ backgroundColor: "rgba(15, 20, 30, 0.9)", border: "1px solid rgba(255,255,255,0.1)" }} />
                <Bar dataKey="claims" fill="#2DD4BF" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </GlassCard>
        </LazyComponent>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
          <p className="text-muted-foreground">Comprehensive insights and trends analysis</p>
        </div>
        <GradientButton>
          <Download className="w-4 h-4" />
          Export Report
        </GradientButton>
      </div>

      {/* Time Range Selector */}
      <GlassCard className="p-4 mb-6">
        <div className="flex gap-3">
          <Select defaultValue="7d">
            <SelectTrigger className="w-40">
              <Calendar className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Time Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="24h">Last 24 Hours</SelectItem>
              <SelectItem value="7d">Last 7 Days</SelectItem>
              <SelectItem value="30d">Last 30 Days</SelectItem>
              <SelectItem value="90d">Last 90 Days</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </GlassCard>

      {/* Tabs */}
      <Tabs defaultValue="overview" value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="grid w-full grid-cols-3 mb-6">
          {tabs.map((tab) => (
            <TabsTrigger key={tab.id} value={tab.id}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabs.map((tab) => (
          <TabsContent key={tab.id} value={tab.id}>
            {tab.content}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
