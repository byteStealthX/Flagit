import { useState } from "react";
import { useLenis } from "@/hooks/useLenis";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientButton } from "@/components/ui/gradient-button";
import { StatusBadge } from "@/components/ui/status-badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  FileText,
  Link2,
  Image,
  Video,
  FileCheck,
  GitCompare,
  Users,
  Upload,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Loader2,
  Flag,
  Search,
} from "lucide-react";

const tools = [
  { id: "text", label: "Text Claim", icon: FileText },
  { id: "url", label: "URL Check", icon: Link2 },
  { id: "image", label: "Image Forensics", icon: Image },
  { id: "video", label: "Video Analysis", icon: Video },
  { id: "document", label: "Document Verify", icon: FileCheck },
  { id: "compare", label: "Cross-Source", icon: GitCompare },
  { id: "entity", label: "Entity Extraction", icon: Users },
];

const mockResult = {
  verdict: "Likely False",
  confidence: 87,
  riskCategory: "high",
  summary: "The claim contains multiple factual inaccuracies and misrepresents data from the original source.",
  evidence: [
    { source: "Original Study", finding: "Data misquoted - actual figure is 12%, not 80%", verdict: "contradicted" },
    { source: "CDC Database", finding: "No matching records found for claimed statistics", verdict: "unverified" },
    { source: "Expert Quote", finding: "Statement taken out of context from 2019 interview", verdict: "misleading" },
  ],
};

export default function VerificationTools() {
  useLenis(); // Enable smooth scrolling
  const [activeTab, setActiveTab] = useState("text");
  const [isVerifying, setIsVerifying] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleVerify = () => {
    setIsVerifying(true);
    setShowResults(false);
    setTimeout(() => {
      setIsVerifying(false);
      setShowResults(true);
    }, 2000);
  };

  const renderInputArea = (type: string) => {
    switch (type) {
      case "text":
        return (
          <div className="space-y-4">
            <Textarea
              placeholder="Paste the claim or statement you want to verify..."
              className="input-glass min-h-[150px]"
            />
            <div className="flex gap-3">
              <Input placeholder="Source URL (optional)" className="input-glass" />
              <Input placeholder="Date (optional)" type="date" className="input-glass w-48" />
            </div>
          </div>
        );
      case "url":
        return (
          <div className="space-y-4">
            <div className="relative">
              <Link2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="https://example.com/article" className="input-glass pl-10" />
            </div>
            <p className="text-sm text-muted-foreground">Enter a URL to analyze the page content for misinformation markers.</p>
          </div>
        );
      case "image":
      case "video":
      case "document":
        return (
          <div className="space-y-4">
            <div className="border-2 border-dashed border-border/50 rounded-xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
              <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="font-medium mb-1">
                Drop your {type === "image" ? "image" : type === "video" ? "video" : "document"} here
              </p>
              <p className="text-sm text-muted-foreground">
                or click to browse • Max {type === "video" ? "500MB" : "50MB"}
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Supported: {type === "image" ? "JPG, PNG, WEBP, GIF" : type === "video" ? "MP4, MOV, AVI" : "PDF, DOCX, TXT"}
              </p>
            </div>
            {type === "image" && (
              <Input placeholder="Or paste image URL..." className="input-glass" />
            )}
          </div>
        );
      case "compare":
        return (
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Source 1</label>
                <Textarea placeholder="Paste first source content..." className="input-glass min-h-[120px]" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Source 2</label>
                <Textarea placeholder="Paste second source content..." className="input-glass min-h-[120px]" />
              </div>
            </div>
            <p className="text-sm text-muted-foreground">Compare content from multiple sources to identify discrepancies.</p>
          </div>
        );
      case "entity":
        return (
          <div className="space-y-4">
            <Textarea
              placeholder="Paste text to extract entities (people, organizations, locations, dates, etc.)..."
              className="input-glass min-h-[150px]"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Verification Tools</h1>
          <p className="text-muted-foreground">AI-powered content analysis and fact-checking</p>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="glass p-1 h-auto flex-wrap">
          {tools.map((tool) => (
            <TabsTrigger
              key={tool.id}
              value={tool.id}
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground gap-2"
            >
              <tool.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{tool.label}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {tools.map((tool) => (
          <TabsContent key={tool.id} value={tool.id} className="mt-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Input Panel */}
              <GlassCard className="p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <tool.icon className="w-5 h-5 text-cyan" />
                  {tool.label}
                </h3>
                {renderInputArea(tool.id)}
                <GradientButton
                  className="w-full mt-4"
                  onClick={handleVerify}
                  disabled={isVerifying}
                >
                  {isVerifying ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Search className="w-4 h-4" />
                      Verify Content
                    </>
                  )}
                </GradientButton>
              </GlassCard>

              {/* Results Panel */}
              <GlassCard className="p-6">
                <h3 className="font-semibold mb-4">Analysis Results</h3>

                {!showResults && !isVerifying && (
                  <div className="h-64 flex items-center justify-center text-center">
                    <div className="text-muted-foreground">
                      <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p>Submit content to see verification results</p>
                    </div>
                  </div>
                )}

                {isVerifying && (
                  <div className="h-64 flex items-center justify-center">
                    <div className="text-center">
                      <Loader2 className="w-12 h-12 text-cyan mx-auto mb-4 animate-spin" />
                      <p className="font-medium">Analyzing content...</p>
                      <p className="text-sm text-muted-foreground mt-2">Cross-referencing with trusted sources</p>
                      <Progress value={66} className="mt-4 w-48" />
                    </div>
                  </div>
                )}

                {showResults && (
                  <div className="space-y-6">
                    {/* Verdict */}
                    <div className="text-center p-6 rounded-lg bg-secondary/30">
                      <div className="flex items-center justify-center gap-3 mb-2">
                        <XCircle className="w-8 h-8 text-red-400" />
                        <span className="text-2xl font-bold text-red-400">{mockResult.verdict}</span>
                      </div>
                      <div className="flex items-center justify-center gap-4 mt-4">
                        <div>
                          <p className="text-3xl font-bold gradient-text">{mockResult.confidence}%</p>
                          <p className="text-xs text-muted-foreground">Confidence</p>
                        </div>
                        <div className="w-px h-12 bg-border" />
                        <div>
                          <StatusBadge variant="risk" risk={mockResult.riskCategory as any}>
                            {mockResult.riskCategory} risk
                          </StatusBadge>
                        </div>
                      </div>
                    </div>

                    {/* Summary */}
                    <div>
                      <h4 className="text-sm font-medium mb-2">Summary</h4>
                      <p className="text-sm text-muted-foreground">{mockResult.summary}</p>
                    </div>

                    {/* Evidence */}
                    <div>
                      <h4 className="text-sm font-medium mb-2">Evidence</h4>
                      <div className="space-y-2">
                        {mockResult.evidence.map((ev, i) => (
                          <div key={i} className="p-3 rounded-lg bg-secondary/30 flex items-start gap-3">
                            {ev.verdict === "contradicted" && <XCircle className="w-4 h-4 text-red-400 mt-0.5" />}
                            {ev.verdict === "unverified" && <AlertTriangle className="w-4 h-4 text-yellow-400 mt-0.5" />}
                            {ev.verdict === "misleading" && <AlertTriangle className="w-4 h-4 text-orange-400 mt-0.5" />}
                            <div className="flex-1">
                              <p className="text-sm font-medium">{ev.source}</p>
                              <p className="text-xs text-muted-foreground mt-0.5">{ev.finding}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <GradientButton className="w-full">
                      <Flag className="w-4 h-4" />
                      Create Report
                    </GradientButton>
                  </div>
                )}
              </GlassCard>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
