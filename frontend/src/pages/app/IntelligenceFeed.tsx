import { useState } from "react";
import { useLenis } from "@/hooks/useLenis";
import { LazyComponent } from "@/hooks/useLazyLoad";
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
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import {
  Search,
  Filter,
  MapPin,
  Clock,
  ExternalLink,
  AlertTriangle,
  CheckCircle,
  XCircle,
  MessageSquare,
  Share,
  Flag,
  ChevronRight,
  User,
  Link2,
  Building,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const claims = [
  {
    id: "CLM-4521",
    title: "New vaccine causes severe side effects in 80% of recipients",
    source: "Twitter/X",
    confidence: 92,
    risk: "critical",
    location: "United States",
    timestamp: "10 min ago",
    category: "Health",
    summary: "A viral post claiming a new vaccine has an 80% severe side effect rate. Cross-referenced with CDC data and peer-reviewed studies shows no evidence supporting this claim.",
    evidence: [
      { type: "fact_check", source: "CDC", verdict: "False" },
      { type: "study", source: "NEJM 2024", verdict: "Contradicted" },
      { type: "expert", source: "Dr. Sarah Johnson", verdict: "Debunked" },
    ],
    entities: [
      { type: "organization", name: "CDC" },
      { type: "topic", name: "Vaccine Safety" },
      { type: "location", name: "United States" },
    ],
    metadata: {
      reach: "2.4M",
      engagement: "145K",
      shares: "89K",
      firstSeen: "2024-01-15 08:30 UTC",
    },
  },
  {
    id: "CLM-4520",
    title: "Major bank announces bankruptcy - economy collapsing",
    source: "Facebook",
    confidence: 87,
    risk: "high",
    location: "United Kingdom",
    timestamp: "25 min ago",
    category: "Financial",
    summary: "Misleading post about a major bank's financial status. The bank issued a press release confirming stable operations.",
    evidence: [
      { type: "statement", source: "Bank PR", verdict: "Denied" },
      { type: "financial", source: "Stock Price", verdict: "Stable" },
    ],
    entities: [
      { type: "organization", name: "Barclays" },
      { type: "topic", name: "Banking" },
    ],
    metadata: {
      reach: "890K",
      engagement: "45K",
      shares: "12K",
      firstSeen: "2024-01-15 07:45 UTC",
    },
  },
  {
    id: "CLM-4519",
    title: "Climate scientist admits global warming is a hoax",
    source: "YouTube",
    confidence: 95,
    risk: "high",
    location: "Global",
    timestamp: "1 hour ago",
    category: "Science",
    summary: "Video uses edited clips to misrepresent scientist's statements. Original interview available for comparison.",
    evidence: [
      { type: "video_analysis", source: "Full Interview", verdict: "Manipulated" },
      { type: "statement", source: "Dr. Michael Chen", verdict: "Misquoted" },
    ],
    entities: [
      { type: "person", name: "Dr. Michael Chen" },
      { type: "topic", name: "Climate Change" },
    ],
    metadata: {
      reach: "3.1M",
      engagement: "234K",
      shares: "156K",
      firstSeen: "2024-01-15 06:00 UTC",
    },
  },
  {
    id: "CLM-4518",
    title: "New AI can predict earthquakes with 99% accuracy",
    source: "Reddit",
    confidence: 78,
    risk: "medium",
    location: "Japan",
    timestamp: "2 hours ago",
    category: "Science",
    summary: "Exaggerated claims about AI earthquake prediction. The research paper shows 65% accuracy under specific conditions.",
    evidence: [
      { type: "study", source: "Original Paper", verdict: "Exaggerated" },
    ],
    entities: [
      { type: "technology", name: "AI/ML" },
      { type: "topic", name: "Seismology" },
    ],
    metadata: {
      reach: "450K",
      engagement: "23K",
      shares: "8K",
      firstSeen: "2024-01-15 05:30 UTC",
    },
  },
  {
    id: "CLM-4517",
    title: "Famous actor endorses new cryptocurrency",
    source: "Instagram",
    confidence: 91,
    risk: "medium",
    location: "United States",
    timestamp: "3 hours ago",
    category: "Financial",
    summary: "Deepfake video of celebrity promoting crypto scam. Image analysis confirms synthetic generation.",
    evidence: [
      { type: "image_analysis", source: "TrueTrace AI", verdict: "Deepfake" },
      { type: "statement", source: "Actor's PR Team", verdict: "Denied" },
    ],
    entities: [
      { type: "person", name: "Celebrity Name" },
      { type: "topic", name: "Cryptocurrency" },
    ],
    metadata: {
      reach: "1.8M",
      engagement: "98K",
      shares: "34K",
      firstSeen: "2024-01-15 04:00 UTC",
    },
  },
];

export default function IntelligenceFeed() {
  useLenis(); // Enable smooth scrolling
  const [selectedClaim, setSelectedClaim] = useState<typeof claims[0] | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [visibleClaims, setVisibleClaims] = useState(3);

  const handleClaimClick = (claim: typeof claims[0]) => {
    setSelectedClaim(claim);
    setDrawerOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Intelligence Feed</h1>
          <p className="text-muted-foreground">Real-time claim monitoring and analysis</p>
        </div>
        <GradientButton>
          <Filter className="w-4 h-4" />
          Advanced Filters
        </GradientButton>
      </div>

      {/* Filters */}
      <GlassCard className="p-4">
        <div className="flex flex-wrap gap-4">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search claims..." className="pl-10 input-glass" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-40 input-glass">
              <SelectValue placeholder="Risk Level" />
            </SelectTrigger>
            <SelectContent className="glass-strong">
              <SelectItem value="all">All Risks</SelectItem>
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
          <Select defaultValue="all">
            <SelectTrigger className="w-40 input-glass">
              <SelectValue placeholder="Source" />
            </SelectTrigger>
            <SelectContent className="glass-strong">
              <SelectItem value="all">All Sources</SelectItem>
              <SelectItem value="twitter">Twitter/X</SelectItem>
              <SelectItem value="facebook">Facebook</SelectItem>
              <SelectItem value="youtube">YouTube</SelectItem>
              <SelectItem value="reddit">Reddit</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </GlassCard>

      {/* Claims List */}
      <div className="space-y-3" id="claims-list">
        <AnimatePresence>
          {claims.slice(0, visibleClaims).map((claim, i) => (
            <motion.div
              key={claim.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <GlassCard
                className="p-4 cursor-pointer hover:border-primary/30 transition-all"
                onClick={() => handleClaimClick(claim)}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <StatusBadge variant="risk" risk={claim.risk as any}>
                        {claim.risk}
                      </StatusBadge>
                      <span className="text-xs text-muted-foreground">{claim.category}</span>
                      <span className="text-xs text-muted-foreground">•</span>
                      <span className="text-xs text-muted-foreground">{claim.source}</span>
                    </div>
                    <h3 className="font-medium mb-2">{claim.title}</h3>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {claim.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {claim.timestamp}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold gradient-text">{claim.confidence}%</div>
                    <p className="text-xs text-muted-foreground">AI Confidence</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Load More - Infinite Scroll */}
      {visibleClaims < claims.length && (
        <LazyComponent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center pt-6"
          >
            <GradientButton
              onClick={() => setVisibleClaims(v => Math.min(v + 3, claims.length))}
            >
              Load More Claims
            </GradientButton>
          </motion.div>
        </LazyComponent>
      )}

      {/* Claim Detail Drawer */}
      <Sheet open={drawerOpen} onOpenChange={setDrawerOpen}>
        <SheetContent className="w-full sm:max-w-xl glass-strong overflow-y-auto">
          {selectedClaim && (
            <>
              <SheetHeader className="space-y-4">
                <div className="flex items-center gap-3">
                  <StatusBadge variant="risk" risk={selectedClaim.risk as any}>
                    {selectedClaim.risk}
                  </StatusBadge>
                  <span className="text-sm text-muted-foreground">{selectedClaim.id}</span>
                </div>
                <SheetTitle className="text-left">{selectedClaim.title}</SheetTitle>
              </SheetHeader>

              <div className="space-y-6 mt-6">
                {/* AI Summary */}
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-cyan" />
                    AI Analysis Summary
                  </h4>
                  <GlassCard className="p-4">
                    <p className="text-sm text-muted-foreground">{selectedClaim.summary}</p>
                  </GlassCard>
                </div>

                {/* Evidence */}
                <div>
                  <h4 className="font-semibold mb-2">Evidence & Sources</h4>
                  <div className="space-y-2">
                    {selectedClaim.evidence.map((ev, i) => (
                      <GlassCard key={i} className="p-3 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {ev.verdict === "False" || ev.verdict === "Debunked" || ev.verdict === "Manipulated" ? (
                            <XCircle className="w-4 h-4 text-red-400" />
                          ) : ev.verdict === "Contradicted" || ev.verdict === "Exaggerated" ? (
                            <AlertTriangle className="w-4 h-4 text-yellow-400" />
                          ) : (
                            <CheckCircle className="w-4 h-4 text-green-400" />
                          )}
                          <div>
                            <p className="text-sm font-medium">{ev.source}</p>
                            <p className="text-xs text-muted-foreground capitalize">{ev.type.replace("_", " ")}</p>
                          </div>
                        </div>
                        <StatusBadge
                          status={
                            ev.verdict === "False" || ev.verdict === "Debunked" || ev.verdict === "Manipulated" || ev.verdict === "Deepfake"
                              ? "error"
                              : ev.verdict === "Contradicted" || ev.verdict === "Exaggerated" || ev.verdict === "Misquoted"
                              ? "warning"
                              : "success"
                          }
                        >
                          {ev.verdict}
                        </StatusBadge>
                      </GlassCard>
                    ))}
                  </div>
                </div>

                {/* Entities */}
                <div>
                  <h4 className="font-semibold mb-2">Extracted Entities</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedClaim.entities.map((entity, i) => (
                      <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 text-sm">
                        {entity.type === "organization" && <Building className="w-3 h-3 text-blue-400" />}
                        {entity.type === "person" && <User className="w-3 h-3 text-green-400" />}
                        {entity.type === "topic" && <Link2 className="w-3 h-3 text-cyan" />}
                        {entity.type === "location" && <MapPin className="w-3 h-3 text-yellow-400" />}
                        {entity.type === "technology" && <AlertTriangle className="w-3 h-3 text-purple-400" />}
                        {entity.name}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metadata */}
                <div>
                  <h4 className="font-semibold mb-2">Engagement Metrics</h4>
                  <GlassCard className="p-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-muted-foreground">Estimated Reach</p>
                        <p className="font-semibold">{selectedClaim.metadata.reach}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Engagement</p>
                        <p className="font-semibold">{selectedClaim.metadata.engagement}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Shares</p>
                        <p className="font-semibold">{selectedClaim.metadata.shares}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">First Seen</p>
                        <p className="font-semibold text-xs">{selectedClaim.metadata.firstSeen}</p>
                      </div>
                    </div>
                  </GlassCard>
                </div>

                {/* Comments */}
                <div>
                  <h4 className="font-semibold mb-2">Analyst Notes</h4>
                  <GlassCard className="p-4">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                        <User className="w-4 h-4 text-background" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Sarah K. <span className="text-xs text-muted-foreground">• 2 hours ago</span></p>
                        <p className="text-sm text-muted-foreground mt-1">Initial assessment complete. Escalating to senior reviewer for final verdict.</p>
                      </div>
                    </div>
                    <Textarea placeholder="Add a note..." className="input-glass" />
                    <GradientButton size="sm" className="mt-2">
                      <MessageSquare className="w-4 h-4" />
                      Add Note
                    </GradientButton>
                  </GlassCard>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t border-border/30">
                  <GradientButton className="flex-1">
                    <Flag className="w-4 h-4" />
                    Create Report
                  </GradientButton>
                  <GradientButton variant="glass">
                    <Share className="w-4 h-4" />
                  </GradientButton>
                  <GradientButton variant="glass">
                    <ExternalLink className="w-4 h-4" />
                  </GradientButton>
                </div>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}
