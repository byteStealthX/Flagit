import { useState } from "react";
import { useLenis } from "@/hooks/useLenis";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientButton } from "@/components/ui/gradient-button";
import { StatusBadge } from "@/components/ui/status-badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Search,
  Filter,
  Plus,
  Eye,
  Download,
  FileText,
  Clock,
  User,
  Tag,
  Paperclip,
  MessageSquare,
  History,
  AlertTriangle,
  Building,
  MapPin,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { api } from "@/lib/api";
import { useEffect } from "react";

const mockReports = [
  {
    id: "RPT-1234",
    title: "Vaccine Misinformation Campaign Analysis",
    status: "Published",
    priority: "critical",
    category: "Health",
    analyst: "Sarah Kim",
    created: "2024-01-15",
    updated: "2024-01-15",
  },
];

const selectedReportData = {
  id: "RPT-1234",
  title: "Vaccine Misinformation Campaign Analysis",
  summary: "A coordinated campaign spreading false information about vaccine side effects has been identified across multiple social media platforms. The campaign uses manipulated statistics and out-of-context quotes from medical professionals.",
  status: "Published",
  priority: "critical",
  category: "Health",
  analyst: "Sarah Kim",
  created: "2024-01-15 08:30 UTC",
  updated: "2024-01-15 14:22 UTC",
  tags: ["vaccines", "health", "social-media", "coordinated"],
  riskRating: 9.2,
  entities: [
    { type: "organization", name: "CDC" },
    { type: "organization", name: "WHO" },
    { type: "location", name: "United States" },
    { type: "topic", name: "COVID-19 Vaccines" },
  ],
  attachments: [
    { name: "evidence_screenshots.zip", size: "12.4 MB" },
    { name: "network_analysis.pdf", size: "2.1 MB" },
    { name: "source_timeline.xlsx", size: "845 KB" },
  ],
  history: [
    { action: "Published", user: "Sarah Kim", time: "2024-01-15 14:22" },
    { action: "Approved", user: "John Manager", time: "2024-01-15 12:00" },
    { action: "Submitted for review", user: "Sarah Kim", time: "2024-01-15 10:30" },
    { action: "Created", user: "Sarah Kim", time: "2024-01-15 08:30" },
  ],
};

export default function Reports() {
  useLenis(); // Enable smooth scrolling
  const [viewerOpen, setViewerOpen] = useState(false);
  const [reports, setReports] = useState<any[]>(mockReports);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const data = await api.getReports();
        if (data && data.data) {
          // Map backend format to UI format if needed
          const mapped = data.data.map((r: any) => ({
            id: r.id || "RPT-NEW",
            title: r.url || "Untitled Report", // Backend stores URL, maybe use that as title
            status: r.status || "In Review",
            priority: r.risk_level?.toLowerCase() || "medium",
            category: "General",
            analyst: "AI System",
            created: new Date(r.created_at).toLocaleDateString(),
            updated: new Date(r.created_at).toLocaleDateString(),
          }));
          setReports([...mapped, ...mockReports]);
        }
      } catch (error) {
        console.error("Failed to load reports", error);
      } finally {
        setLoading(false);
      }
    };
    fetchReports();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Reports</h1>
          <p className="text-muted-foreground">Investigation reports and findings</p>
        </div>
        <GradientButton>
          <Plus className="w-4 h-4" />
          New Report
        </GradientButton>
      </div>

      {/* Filters */}
      <GlassCard className="p-4">
        <div className="flex flex-wrap gap-4">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search reports..." className="pl-10 input-glass" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-40 input-glass">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent className="glass-strong">
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="review">In Review</SelectItem>
              <SelectItem value="published">Published</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-40 input-glass">
              <SelectValue placeholder="Priority" />
            </SelectTrigger>
            <SelectContent className="glass-strong">
              <SelectItem value="all">All Priorities</SelectItem>
              <SelectItem value="critical">Critical</SelectItem>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="low">Low</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-40 input-glass">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent className="glass-strong">
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="health">Health</SelectItem>
              <SelectItem value="political">Political</SelectItem>
              <SelectItem value="financial">Financial</SelectItem>
              <SelectItem value="science">Science</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </GlassCard>

      {/* Reports Table */}
      <GlassCard className="overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-border/30 hover:bg-transparent">
              <TableHead className="text-muted-foreground">Report ID</TableHead>
              <TableHead className="text-muted-foreground">Title</TableHead>
              <TableHead className="text-muted-foreground">Status</TableHead>
              <TableHead className="text-muted-foreground">Priority</TableHead>
              <TableHead className="text-muted-foreground">Category</TableHead>
              <TableHead className="text-muted-foreground">Analyst</TableHead>
              <TableHead className="text-muted-foreground">Updated</TableHead>
              <TableHead className="text-muted-foreground">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reports.map((report, i) => (
              <TableRow key={report.id} className="table-row">
                <TableCell className="font-medium text-cyan">{report.id}</TableCell>
                <TableCell className="max-w-[250px] truncate">{report.title}</TableCell>
                <TableCell>
                  <StatusBadge
                    status={
                      report.status === "Published" ? "success" :
                        report.status === "In Review" ? "warning" : "default"
                    }
                  >
                    {report.status}
                  </StatusBadge>
                </TableCell>
                <TableCell>
                  <StatusBadge variant="risk" risk={report.priority as any}>
                    {report.priority}
                  </StatusBadge>
                </TableCell>
                <TableCell>{report.category}</TableCell>
                <TableCell>{report.analyst}</TableCell>
                <TableCell className="text-muted-foreground">{report.updated}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <GradientButton
                      variant="glass"
                      size="sm"
                      onClick={() => setViewerOpen(true)}
                    >
                      <Eye className="w-4 h-4" />
                    </GradientButton>
                    <GradientButton variant="glass" size="sm">
                      <Download className="w-4 h-4" />
                    </GradientButton>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </GlassCard>

      {/* Report Viewer Dialog */}
      <Dialog open={viewerOpen} onOpenChange={setViewerOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto glass-strong">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <StatusBadge variant="risk" risk="critical">
                Critical
              </StatusBadge>
              <span className="text-sm text-muted-foreground">{selectedReportData.id}</span>
            </div>
            <DialogTitle className="text-xl">{selectedReportData.title}</DialogTitle>
          </DialogHeader>

          <div className="space-y-6 mt-4">
            {/* Summary */}
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <FileText className="w-4 h-4 text-cyan" />
                Executive Summary
              </h4>
              <GlassCard className="p-4">
                <p className="text-sm text-muted-foreground">{selectedReportData.summary}</p>
              </GlassCard>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Metadata */}
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-cyan" />
                  Metadata
                </h4>
                <GlassCard className="p-4 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Status</span>
                    <StatusBadge status="success">{selectedReportData.status}</StatusBadge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Category</span>
                    <span>{selectedReportData.category}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Analyst</span>
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {selectedReportData.analyst}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Created</span>
                    <span>{selectedReportData.created}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Updated</span>
                    <span>{selectedReportData.updated}</span>
                  </div>
                </GlassCard>
              </div>

              {/* Risk Rating */}
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-cyan" />
                  Risk Assessment
                </h4>
                <GlassCard className="p-4">
                  <div className="text-center">
                    <div className="text-5xl font-bold gradient-text mb-2">{selectedReportData.riskRating}</div>
                    <p className="text-sm text-muted-foreground">Risk Score (0-10)</p>
                    <div className="mt-4 h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded-full"
                        style={{ width: `${selectedReportData.riskRating * 10}%` }}
                      />
                    </div>
                  </div>
                </GlassCard>
              </div>
            </div>

            {/* Tags */}
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Tag className="w-4 h-4 text-cyan" />
                Tags
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedReportData.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-secondary/50 text-sm">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Entities */}
            <div>
              <h4 className="font-semibold mb-2">Extracted Entities</h4>
              <div className="flex flex-wrap gap-2">
                {selectedReportData.entities.map((entity, i) => (
                  <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 text-sm">
                    {entity.type === "organization" && <Building className="w-3 h-3 text-blue-400" />}
                    {entity.type === "location" && <MapPin className="w-3 h-3 text-yellow-400" />}
                    {entity.type === "topic" && <Tag className="w-3 h-3 text-cyan" />}
                    {entity.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Attachments */}
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Paperclip className="w-4 h-4 text-cyan" />
                Attachments
              </h4>
              <div className="space-y-2">
                {selectedReportData.attachments.map((file, i) => (
                  <GlassCard key={i} className="p-3 flex items-center justify-between hover:bg-secondary/50 cursor-pointer transition-colors">
                    <div className="flex items-center gap-3">
                      <FileText className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{file.name}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{file.size}</span>
                  </GlassCard>
                ))}
              </div>
            </div>

            {/* Change History */}
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <History className="w-4 h-4 text-cyan" />
                Change History
              </h4>
              <GlassCard className="p-4">
                <div className="space-y-3">
                  {selectedReportData.history.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-sm">
                      <span className="w-32 text-muted-foreground">{item.time}</span>
                      <span className="font-medium">{item.action}</span>
                      <span className="text-muted-foreground">by {item.user}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-4 border-t border-border/30">
              <GradientButton className="flex-1">
                <Download className="w-4 h-4" />
                Export PDF
              </GradientButton>
              <GradientButton variant="glass">
                <MessageSquare className="w-4 h-4" />
                Add Comment
              </GradientButton>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
