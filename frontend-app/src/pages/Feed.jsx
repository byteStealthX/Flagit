import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronDown, Share2, Bookmark } from 'lucide-react'

const feedItems = [
    {
        id: 1,
        title: 'Cyber Threat Advisory: Project Chimera',
        description: 'A new state-sponsored threat actor, codenamed "Project Chimera", has been identified targeting financial institutions acro...',
        source: 'OSINT Feed',
        analyst: 'Jane Smith',
        region: 'North America',
        timestamp: '2024-09-21 14:30 UTC',
        priority: 'Critical',
        status: 'Actioned',
        tags: ['OSINT', 'Actioned']
    },
    {
        id: 2,
        title: 'Geopolitical Brief: East Asia Tensions',
        description: 'Recent naval exercises in the South China Sea have escalated regional tensions. Satellite imagery confirms the deployment of...',
        source: 'IMAGERY',
        analyst: 'John Doe',
        region: 'East Asia',
        timestamp: '8h ago',
        priority: 'High',
        status: 'Under Review',
        tags: ['IMAGERY', 'Under Review']
    },
    {
        id: 3,
        title: 'Market Volatility Report: Energy Sector',
        description: 'An unexpected disruption in a major oil pipeline has caused short-term price spikes. Futures markets are reacting, but our models...',
        source: 'NEWSFEED',
        analyst: 'Sarah Johnson',
        region: 'Global',
        timestamp: '2d ago',
        priority: 'Low',
        status: 'Archived',
        tags: ['NEWSFEED', 'Archived']
    },
]

export default function Feed() {
    const [selectedItem, setSelectedItem] = useState(feedItems[0])
    const [sourceFilter, setSourceFilter] = useState('All')
    const [priorityFilter, setPriorityFilter] = useState('All')
    const [statusFilter, setStatusFilter] = useState('All')

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-semibold">Intelligence Feed</h1>
                <p className="text-sm text-muted-foreground mt-1">
                    Centralized feed of incoming intelligence reports.
                </p>
            </div>

            {/* Filters */}
            <div className="flex gap-2">
                <button className="flex items-center gap-2 rounded-lg border border-input px-3 py-2 text-sm hover:bg-accent">
                    Source
                    <ChevronDown className="h-4 w-4" />
                </button>
                <button className="flex items-center gap-2 rounded-lg border border-input px-3 py-2 text-sm hover:bg-accent">
                    Priority
                    <ChevronDown className="h-4 w-4" />
                </button>
                <button className="flex items-center gap-2 rounded-lg border border-input px-3 py-2 text-sm hover:bg-accent">
                    Status
                    <ChevronDown className="h-4 w-4" />
                </button>
                <button className="flex items-center gap-2 rounded-lg border border-input px-3 py-2 text-sm hover:bg-accent">
                    Report Type
                    <ChevronDown className="h-4 w-4" />
                </button>
            </div>

            {/* Feed Layout */}
            <div className="grid gap-6 lg:grid-cols-5">
                {/* Feed Items List */}
                <div className="lg:col-span-2 space-y-3">
                    {feedItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setSelectedItem(item)}
                            className={`cursor-pointer rounded-lg border p-4 transition-all ${selectedItem.id === item.id
                                    ? 'border-primary bg-primary/5'
                                    : 'border-border bg-card hover:border-primary/50'
                                }`}
                        >
                            <div className="flex items-start justify-between mb-2">
                                <h3 className="font-medium text-sm line-clamp-1">{item.title}</h3>
                                <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">{item.timestamp}</span>
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${item.priority === 'Critical' ? 'badge-critical' :
                                        item.priority === 'High' ? 'badge-high' :
                                            item.priority === 'Medium' ? 'badge-medium' :
                                                'badge-low'
                                    }`}>
                                    {item.priority}
                                </span>
                            </div>
                            <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{item.description}</p>
                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                <span className="flex items-center gap-1">
                                    <span className="font-medium">Source:</span> {item.source}
                                </span>
                                <span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${item.status === 'Actioned' ? 'badge-active' :
                                        item.status === 'Under Review' ? 'badge-under-review' :
                                            'badge-archived'
                                    }`}>
                                    {item.status}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Detail Panel */}
                <motion.div
                    key={selectedItem.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="lg:col-span-3 rounded-lg border border-border bg-card p-6"
                >
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${selectedItem.priority === 'Critical' ? 'badge-critical' :
                                    selectedItem.priority === 'High' ? 'badge-high' :
                                        'badge-low'
                                }`}>
                                {selectedItem.priority}
                            </span>
                            <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${selectedItem.status === 'Actioned' ? 'badge-active' :
                                    selectedItem.status === 'Under Review' ? 'badge-under-review' :
                                        'badge-archived'
                                }`}>
                                {selectedItem.status}
                            </span>
                        </div>
                        <div className="flex gap-2">
                            <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-input hover:bg-accent">
                                <Share2 className="h-4 w-4" />
                            </button>
                            <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-input hover:bg-accent">
                                <Bookmark className="h-4 w-4" />
                            </button>
                        </div>
                    </div>

                    <h2 className="text-xl font-semibold mb-4">{selectedItem.title}</h2>
                    <p className="text-sm text-muted-foreground mb-1">ID: CTA-2024-0921</p>

                    <div className="grid grid-cols-2 gap-4 my-6 p-4 rounded-lg bg-muted/20">
                        <div>
                            <p className="text-xs text-muted-foreground">Source</p>
                            <p className="text-sm font-medium">{selectedItem.source}</p>
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground">Timestamp</p>
                            <p className="text-sm font-medium">{selectedItem.timestamp}</p>
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground">Analyst</p>
                            <p className="text-sm font-medium">{selectedItem.analyst}</p>
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground">Region</p>
                            <p className="text-sm font-medium">{selectedItem.region}</p>
                        </div>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-sm font-semibold mb-2">Report Details</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            A new state-sponsored threat actor, codenamed "Project Chimera", has been identified targeting financial institutions
                            across North America. The group utilizes a sophisticated multi-stage malware payload delivered via targeted spear-phishing
                            campaigns.
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                            Initial vectors appear to be emails masquerading as regulatory updates. Once a foothold is gained, the malware establishes
                            persistence and begins lateral movement to identify and exfiltrate sensitive financial data. All indicators of compromise
                            (IoCs) are attached below.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold mb-2">Attached Files</h3>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between rounded-lg border border-border p-3 hover:bg-accent/50">
                                <span className="text-sm">IOC_Report_Chimera.pdf</span>
                                <button className="text-xs text-primary hover:underline">Download</button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
