import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, MapPin, Plus, Search, FileText } from 'lucide-react'
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const threatData = [
    { day: '7 days ago', value: 190 },
    { day: '6 days ago', value: 210 },
    { day: '5 days ago', value: 260 },
    { day: '4 days ago', value: 230 },
    { day: '3 days ago', value: 280 },
    { day: '2 days ago', value: 240 },
    { day: 'Today', value: 320 },
]

const statusData = [
    { name: 'Active', value: 31, color: 'hsl(var(--primary))' },
    { name: 'Under Review', value: 25, color: 'hsl(var(--warning))' },
    { name: 'Completed', value: 35, color: 'hsl(var(--success))' },
    { name: 'Archived', value: 9, color: 'hsl(var(--muted-foreground))' },
]

const recentReports = [
    {
        title: 'Cross-Border Cyber Infiltration',
        date: '2024-07-21 14:30',
        priority: 'High',
        status: 'Active'
    },
    {
        title: 'Economic Espionage in Tech Sector',
        date: '2024-07-21 11:05',
        priority: 'Medium',
        status: 'Under Review'
    },
    {
        title: 'Disinformation Campaign Analysis',
        date: '2024-07-20 18:45',
        priority: 'Medium',
        status: 'Completed'
    },
    {
        title: 'Maritime Supply Chain Vulnerabilities',
        date: '2024-07-20 09:12',
        priority: 'Low',
        status: 'Archived'
    },
    {
        title: 'Geopolitical Tensions in Eastern Europe',
        date: '2024-07-19 22:00',
        priority: 'High',
        status: 'Active'
    },
]

export default function Dashboard() {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-semibold">Dashboard Overview</h1>
                <p className="text-sm text-muted-foreground mt-1">
                    Welcome back, Alex. Here's a summary of the latest intelligence.
                </p>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-4 md:grid-cols-4">
                <StatCard
                    title="New Reports (24h)"
                    value="12"
                    trend="+2.5%"
                    trendUp={true}
                />
                <StatCard
                    title="High-Priority Threats"
                    value="5"
                    trend="-12%"
                    trendUp={false}
                />
                <StatCard
                    title="Reports Under Review"
                    value="8"
                    trend="+5.0%"
                    trendUp={true}
                />
                <StatCard
                    title="Data Sources"
                    value="24"
                    trend="Unchanged"
                    trendUp={null}
                />
            </div>

            {/* Charts Row */}
            <div className="grid gap-6 lg:grid-cols-2">
                {/* Recent Threat Levels */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-lg border border-border bg-card p-6"
                >
                    <h3 className="mb-4 text-lg font-semibold">Recent Threat Levels</h3>
                    <ResponsiveContainer width="100%" height={250}>
                        <BarChart data={threatData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                            <XAxis
                                dataKey="day"
                                stroke="hsl(var(--muted-foreground))"
                                fontSize={11}
                                angle={-45}
                                textAnchor="end"
                                height={80}
                            />
                            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: 'hsl(var(--card))',
                                    border: '1px solid hsl(var(--border))',
                                    borderRadius: '8px'
                                }}
                            />
                            <Bar dataKey="value" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </motion.div>

                {/* Report Status */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="rounded-lg border border-border bg-card p-6"
                >
                    <h3 className="mb-4 text-lg font-semibold">Report Status</h3>
                    <div className="flex items-center justify-center">
                        <div className="relative">
                            <ResponsiveContainer width={200} height={200}>
                                <PieChart>
                                    <Pie
                                        data={statusData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={80}
                                        paddingAngle={2}
                                        dataKey="value"
                                    >
                                        {statusData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>
                            <div className="absolute inset-0 flex items-center justify-center flex-col">
                                <p className="text-3xl font-bold">52</p>
                                <p className="text-xs text-muted-foreground">Total Reports</p>
                            </div>
                        </div>
                        <div className="ml-8 space-y-2">
                            {statusData.map((item, index) => (
                                <div key={index} className="flex items-center gap-2 text-sm">
                                    <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                                    <span className="text-muted-foreground">{item.name}</span>
                                    <span className="ml-auto font-medium">{item.value}%</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Recent Reports Table */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="rounded-lg border border-border bg-card"
            >
                <div className="border-b border-border p-6">
                    <h3 className="text-lg font-semibold">Recent Reports</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-border">
                                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase">Report Title</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase">Date</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase">Priority</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {recentReports.map((report, index) => (
                                <tr key={index} className="hover:bg-accent/50 cursor-pointer">
                                    <td className="px-6 py-4 text-sm font-medium">{report.title}</td>
                                    <td className="px-6 py-4 text-sm text-muted-foreground">{report.date}</td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${report.priority === 'High' ? 'badge-high' :
                                                report.priority === 'Medium' ? 'badge-medium' :
                                                    'badge-low'
                                            }`}>
                                            {report.priority}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${report.status === 'Active' ? 'badge-active' :
                                                report.status === 'Under Review' ? 'badge-under-review' :
                                                    report.status === 'Completed' ? 'badge-completed' :
                                                        'badge-archived'
                                            }`}>
                                            {report.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Bottom Row */}
            <div className="grid gap-6 lg:grid-cols-3">
                {/* Quick Actions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="rounded-lg border border-border bg-card p-6"
                >
                    <h3 className="mb-4 text-lg font-semibold">Quick Actions</h3>
                    <div className="space-y-2">
                        <button className="flex w-full items-center gap-3 rounded-lg bg-primary px-4 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                            <Plus className="h-4 w-4" />
                            New Report
                        </button>
                        <button className="flex w-full items-center gap-3 rounded-lg border border-input px-4 py-3 text-sm hover:bg-accent">
                            <Search className="h-4 w-4" />
                            Search Database
                        </button>
                        <button className="flex w-full items-center gap-3 rounded-lg border border-input px-4 py-3 text-sm hover:bg-accent">
                            <FileText className="h-4 w-4" />
                            Generate Summary
                        </button>
                    </div>
                </motion.div>

                {/* Geospatial Overview */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="lg:col-span-2 rounded-lg border border-border bg-card p-6"
                >
                    <h3 className="mb-4 text-lg font-semibold">Geospatial Overview</h3>
                    <div className="flex h-[200px] items-center justify-center rounded-lg bg-muted/20">
                        <div className="text-center">
                            <MapPin className="mx-auto h-16 w-16 text-muted-foreground/50" />
                            <p className="mt-2 text-sm text-muted-foreground">Interactive global threat map</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

function StatCard({ title, value, trend, trendUp }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-lg border border-border bg-card p-6"
        >
            <p className="text-sm text-muted-foreground">{title}</p>
            <div className="mt-2 flex items-end gap-2">
                <p className="text-3xl font-semibold">{value}</p>
                {trendUp !== null && (
                    <span className={`flex items-center gap-1 text-xs mb-1 ${trendUp ? 'text-green-500' : 'text-red-500'}`}>
                        {trendUp ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                        {trend}
                    </span>
                )}
                {trendUp === null && (
                    <span className="text-xs text-muted-foreground mb-1">{trend}</span>
                )}
            </div>
        </motion.div>
    )
}
