import { useState } from "react";
import { useLenis } from "@/hooks/useLenis";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientButton } from "@/components/ui/gradient-button";
import { StatusBadge } from "@/components/ui/status-badge";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
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
  Upload,
  Database,
  FileJson,
  FileSpreadsheet,
  Calendar,
  HardDrive,
  Eye,
  Download,
  Trash2,
  Filter,
} from "lucide-react";

const datasets = [
  {
    id: "DS-001",
    name: "Social Media Claims Q4 2023",
    type: "CSV",
    records: 125000,
    size: "45.2 MB",
    uploaded: "2024-01-10",
    status: "Active",
  },
  {
    id: "DS-002",
    name: "Fact-Check Database Export",
    type: "JSON",
    records: 89450,
    size: "32.1 MB",
    uploaded: "2024-01-08",
    status: "Active",
  },
  {
    id: "DS-003",
    name: "News Article Archive",
    type: "CSV",
    records: 456000,
    size: "128.5 MB",
    uploaded: "2024-01-05",
    status: "Processing",
  },
  {
    id: "DS-004",
    name: "Twitter Trends Dataset",
    type: "JSON",
    records: 78900,
    size: "28.3 MB",
    uploaded: "2024-01-03",
    status: "Active",
  },
];

const previewData = [
  { id: 1, claim: "Vaccine causes autism", source: "Twitter", date: "2024-01-15", risk: "high" },
  { id: 2, claim: "Election was stolen", source: "Facebook", date: "2024-01-14", risk: "critical" },
  { id: 3, claim: "5G causes COVID", source: "YouTube", date: "2024-01-13", risk: "high" },
  { id: 4, claim: "Earth is flat", source: "Reddit", date: "2024-01-12", risk: "medium" },
  { id: 5, claim: "Climate change is hoax", source: "Twitter", date: "2024-01-11", risk: "medium" },
];

const schema = [
  { field: "id", type: "integer", nullable: false },
  { field: "claim", type: "string", nullable: false },
  { field: "source", type: "string", nullable: false },
  { field: "date", type: "datetime", nullable: false },
  { field: "risk", type: "enum", nullable: false },
  { field: "confidence", type: "float", nullable: true },
  { field: "verified_by", type: "string", nullable: true },
];

export default function Datasets() {
  useLenis(); // Enable smooth scrolling
  const [selectedDataset, setSelectedDataset] = useState<typeof datasets[0] | null>(null);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Datasets</h1>
          <p className="text-muted-foreground">Upload and manage training data</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <GradientButton>
              <Upload className="w-4 h-4" />
              Upload Dataset
            </GradientButton>
          </DialogTrigger>
          <DialogContent className="glass-strong">
            <DialogHeader>
              <DialogTitle>Upload Dataset</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="border-2 border-dashed border-border/50 rounded-xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="font-medium mb-1">Drop your files here</p>
                <p className="text-sm text-muted-foreground">or click to browse</p>
                <p className="text-xs text-muted-foreground mt-2">Supported: CSV, JSON • Max 500MB</p>
              </div>
              <Input placeholder="Dataset name" className="input-glass" />
              <GradientButton className="w-full">
                <Upload className="w-4 h-4" />
                Start Upload
              </GradientButton>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search */}
      <GlassCard className="p-4">
        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search datasets..." className="pl-10 input-glass" />
          </div>
          <GradientButton variant="glass">
            <Filter className="w-4 h-4" />
            Filters
          </GradientButton>
        </div>
      </GlassCard>

      {/* Dataset Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {datasets.map((dataset) => (
          <GlassCard
            key={dataset.id}
            className="p-4 cursor-pointer hover:border-primary/30 transition-all"
            onClick={() => setSelectedDataset(dataset)}
          >
            <div className="flex items-start justify-between mb-3">
              {dataset.type === "CSV" ? (
                <FileSpreadsheet className="w-8 h-8 text-green-400" />
              ) : (
                <FileJson className="w-8 h-8 text-yellow-400" />
              )}
              <StatusBadge status={dataset.status === "Active" ? "success" : "warning"}>
                {dataset.status}
              </StatusBadge>
            </div>
            <h3 className="font-medium mb-2 line-clamp-2">{dataset.name}</h3>
            <div className="space-y-1 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Database className="w-3 h-3" />
                {dataset.records.toLocaleString()} records
              </div>
              <div className="flex items-center gap-2">
                <HardDrive className="w-3 h-3" />
                {dataset.size}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-3 h-3" />
                {dataset.uploaded}
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <GradientButton variant="glass" size="sm" className="flex-1">
                <Eye className="w-4 h-4" />
                Preview
              </GradientButton>
              <GradientButton variant="glass" size="sm">
                <Download className="w-4 h-4" />
              </GradientButton>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Preview Section */}
      {selectedDataset && (
        <div className="grid lg:grid-cols-3 gap-6">
          <GlassCard className="lg:col-span-2 p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Data Preview: {selectedDataset.name}</h3>
              <span className="text-sm text-muted-foreground">Showing first 5 records</span>
            </div>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-border/30">
                    <TableHead className="text-muted-foreground">ID</TableHead>
                    <TableHead className="text-muted-foreground">Claim</TableHead>
                    <TableHead className="text-muted-foreground">Source</TableHead>
                    <TableHead className="text-muted-foreground">Date</TableHead>
                    <TableHead className="text-muted-foreground">Risk</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {previewData.map((row) => (
                    <TableRow key={row.id} className="table-row">
                      <TableCell className="text-cyan">{row.id}</TableCell>
                      <TableCell className="max-w-[200px] truncate">{row.claim}</TableCell>
                      <TableCell>{row.source}</TableCell>
                      <TableCell>{row.date}</TableCell>
                      <TableCell>
                        <StatusBadge variant="risk" risk={row.risk as any}>
                          {row.risk}
                        </StatusBadge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </GlassCard>

          <GlassCard className="p-5">
            <h3 className="font-semibold mb-4">Schema</h3>
            <div className="space-y-3">
              {schema.map((field, i) => (
                <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-secondary/30">
                  <div>
                    <p className="text-sm font-medium">{field.field}</p>
                    <p className="text-xs text-muted-foreground">{field.type}</p>
                  </div>
                  {field.nullable ? (
                    <StatusBadge status="default">nullable</StatusBadge>
                  ) : (
                    <StatusBadge status="info">required</StatusBadge>
                  )}
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      )}
    </div>
  );
}
