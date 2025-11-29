import { motion } from 'framer-motion'
import { Download, FileText, Calendar } from 'lucide-react'

const reports = [
    {
        id: 1,
        name: 'Weekly Intelligence Summary - Week 4',
        type: 'Weekly Summary',
        status: 'Completed',
        generated: 'Jan 28, 2025 14:23',
        size: '2.4 MB'
    },
    {
        id: 2,
        name: 'January 2025 Monthly Analysis',
        type: 'Monthly Analysis',
        status: 'In Processing',
        generated: 'Jan 28, 2025 09:15',
        size: '5.1 MB'
    },
    {
        id: 3,
        name: 'Election Misinformation Threat Assessment',
        type: 'Custom Report',
        status: 'Completed',
        generated: 'Jan 27, 2025 16:47',
        size: '8.9 MB'
    },
    {
        id: 4,
        name: 'Weekly Intelligence Summary - Week 3',
        type: 'Weekly Summary',
        status: 'Scheduled',
        generated: 'Feb 4, 2025 14:00',
        size: '--'
    }
]

export default function Reports() {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-semibold">Reports</h1>
                    <p className="text-sm text-muted-foreground mt-1">
                        Generate and manage comprehensive intelligence analysis reports
                    </p>
                </div>
                <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90">
                    + Create Alert
                </button>
            </div>

            {/* Filters */}
            <div className="flex gap-2">
                <button className="rounded-lg border border-input px-3 py-2 text-sm hover:bg-accent">
                    All Results
                </button>
                <button className="rounded-lg border border-input px-3 py-2 text-sm hover:bg-accent">
                    Weekly
                </button>
                <button className="rounded-lg border border-input px-3 py-2 text-sm hover:bg-accent">
                    Monthly
                </button>
                <button className="flex items-center gap-2 rounded-lg border border-input px-3 py-2 text-sm hover:bg-accent">
                    <Calendar className="h-4 w-4" />
                    Custom
                </button>
            </div>

            {/* Reports Table */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-lg border border-border bg-card"
            >
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-border">
                                <th className="px-6 py-4 text-left text-xs font-medium text-muted-foreground uppercase">Report Name</th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-muted-foreground uppercase">Type</th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-muted-foreground uppercase">Status</th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-muted-foreground uppercase">Generated</th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-muted-foreground uppercase">Size</th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-muted-foreground uppercase">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {reports.map((report, index) => (
                                <motion.tr
                                    key={report.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="hover:bg-accent/50"
                                >
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                                <FileText className="h-5 w-5 text-primary" />
                                            </div>
                                            <span className="font-medium text-sm">{report.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-muted-foreground">{report.type}</td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${report.status === 'Completed' ? 'badge-completed' :
                                                report.status === 'In Processing' ? 'badge-under-review' :
                                                    'badge-active'
                                            }`}>
                                            {report.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-muted-foreground">{report.generated}</td>
                                    <td className="px-6 py-4 text-sm text-muted-foreground">{report.size}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex gap-2">
                                            <button className="rounded-lg p-2 hover:bg-accent" title="Download">
                                                <Download className="h-4 w-4" />
                                            </button>
                                            <button className="rounded-lg p-2 hover:bg-accent" title="View">
                                                <FileText className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>
        </div>
    )
}
