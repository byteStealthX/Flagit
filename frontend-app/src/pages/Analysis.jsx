import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Edit, Share2, LineChart } from 'lucide-react'

export default function Analysis() {
    const { id } = useParams()

    return (
        <div className="space-y-6">
            {/* Back Button */}
            <Link to="/feed" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-4 w-4" />
                Back to Feed
            </Link>

            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-semibold">Operation Nightfall Threat Analysis</h1>
                    <p className="text-sm text-muted-foreground mt-1">
                        Executive summary of potential cybersecurity threats identified in Q4.
                    </p>
                </div>
                <div className="flex gap-2">
                    <button className="flex items-center gap-2 rounded-lg border border-input px-4 py-2 text-sm hover:bg-accent">
                        <Edit className="h-4 w-4" />
                        Edit Report
                    </button>
                    <button className="flex items-center gap-2 rounded-lg border border-input px-4 py-2 text-sm hover:bg-accent">
                        <Share2 className="h-4 w-4" />
                        Share
                    </button>
                </div>
            </div>

            {/* Content Grid */}
            <div className="grid gap-6 lg:grid-cols-3">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Tabs */}
                    <div className="flex gap-4 border-b border-border">
                        <button className="border-b-2 border-primary px-4 py-2 text-sm font-medium text-primary">
                            Full Report
                        </button>
                        <button className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground">
                            Summary
                        </button>
                        <button className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground">
                            Source Data
                        </button>
                    </div>

                    {/* Report Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="rounded-lg border border-border bg-card p-6"
                    >
                        <h3 className="text-lg font-semibold mb-4">1. Introduction</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                            This report details the findings of Operation Nightfall, a comprehensive threat analysis initiative focused on identifying
                            emerging cybersecurity risks targeting the financial sector in Q4. Our investigation utilized a multi-pronged approach,
                            combining signals intelligence (SIGINT), human intelligence (HUMINT), and open-source intelligence (OSINT) to create a
                            holistic view of the threat landscape.
                        </p>

                        <h3 className="text-lg font-semibold mb-4 mt-6">2. Key Findings</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                            The primary threat actor identified, codenamed "Threat Actor-Y", has demonstrated increasing sophistication in their attack
                            methodologies. Their focus has shifted from broad-spectrum phishing campaigns to highly targeted spear-phishing attacks
                            against high-level executives. Phishing attempts increased by 42% compared to Q3.
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                            Ransomware payloads were detected in 15% of analyzed incidents. The primary geographic origin of attacks was traced back to
                            Region-X.
                        </p>

                        <h3 className="text-lg font-semibold mb-4 mt-6">3. Recommendations</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Immediate action is required to mitigate the identified risks. We recommend a full security audit, mandatory multi-factor
                            authentication (MFA) rollout for all employees, and targeted security awareness training for senior leadership. Continued
                            monitoring of Threat Actor-Y's activities is paramount.
                        </p>

                        {/* Chart Placeholder */}
                        <div className="mt-6 rounded-lg border border-border p-6 bg-muted/20">
                            <p className="text-sm font-medium mb-4">Fig. 1: Threat Vector Frequency, Q1-Q4</p>
                            <div className="flex h-64 items-center justify-center">
                                <LineChart className="h-16 w-16 text-muted-foreground/50" />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Sidebar */}
                <div className="space-y-4">
                    {/* Report Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="rounded-lg border border-border bg-card p-4"
                    >
                        <h3 className="text-sm font-semibold mb-3">Report Details</h3>
                        <div className="space-y-3 text-sm">
                            <div>
                                <p className="text-muted-foreground text-xs">REPORT ID</p>
                                <p className="font-medium">CYB-2024-0017</p>
                            </div>
                            <div>
                                <p className="text-muted-foreground text-xs">AUTHOR</p>
                                <p className="font-medium">Dr. Evelyn Read</p>
                            </div>
                            <div>
                                <p className="text-muted-foreground text-xs">STATUS</p>
                                <span className="inline-flex rounded-full px-2 py-0.5 text-xs font-medium badge-under-review">
                                    Under Review
                                </span>
                            </div>
                            <div>
                                <p className="text-muted-foreground text-xs">DATE CREATED</p>
                                <p className="font-medium">2023-10-26</p>
                            </div>
                            <div>
                                <p className="text-muted-foreground text-xs">SOURCE RELIABILITY</p>
                                <p className="font-medium">A1 - Confirmed</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Tags */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="rounded-lg border border-border bg-card p-4"
                    >
                        <h3 className="text-sm font-semibold mb-3">Tags</h3>
                        <div className="flex flex-wrap gap-2">
                            <span className="rounded-full bg-primary/10 px-2 py-1 text-xs text-primary">Cybersecurity</span>
                            <span className="rounded-full bg-primary/10 px-2 py-1 text-xs text-primary">Region-X</span>
                            <span className="rounded-full bg-destructive/10 px-2 py-1 text-xs text-destructive">Threat Actor-Y</span>
                        </div>
                    </motion.div>

                    {/* Attachments */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="rounded-lg border border-border bg-card p-4"
                    >
                        <h3 className="text-sm font-semibold mb-3">Attachments</h3>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 rounded-lg border border-border p-2 hover:bg-accent/50">
                                <div className="flex h-8 w-8 items-center justify-center rounded bg-destructive/10">
                                    <span className="text-xs font-medium text-destructive">PDF</span>
                                </div>
                                <span className="flex-1 text-xs">source_document.pdf</span>
                            </div>
                            <div className="flex items-center gap-2 rounded-lg border border-border p-2 hover:bg-accent/50">
                                <div className="flex h-8 w-8 items-center justify-center rounded bg-primary/10">
                                    <span className="text-xs font-medium text-primary">JPG</span>
                                </div>
                                <span className="flex-1 text-xs">surveillance_photo.jpg</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Comments */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="rounded-lg border border-border bg-card p-4"
                    >
                        <h3 className="text-sm font-semibold mb-3">Comments</h3>
                        <div className="space-y-3">
                            <div className="text-xs">
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                                        <span className="text-xs font-medium text-primary">JC</span>
                                    </div>
                                    <span className="font-medium">Jonathan Carter</span>
                                </div>
                                <p className="text-muted-foreground">The increase in phishing is concerning. We need to fast-track the MFA rollout.</p>
                            </div>
                        </div>
                        <textarea
                            placeholder="Add a comment..."
                            className="mt-3 w-full rounded-lg border border-input bg-background px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-ring"
                            rows={3}
                        />
                        <button className="mt-2 w-full rounded-lg bg-primary px-3 py-2 text-xs text-primary-foreground hover:bg-primary/90">
                            Post Comment
                        </button>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
