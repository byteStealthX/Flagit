import { motion } from 'framer-motion'
import { Calendar, MapPin, FileText, TrendingUp, TrendingDown } from 'lucide-react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const trendData = [
    { week: 'WEEK 1', value: 280 },
    { week: 'WEEK 2', value: 390 },
    { week: 'WEEK 3', value: 320 },
    { week: 'WEEK 4', value: 610 },
]

export default function Analytics() {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-semibold">Analytics and Trends</h1>
                    <p className="text-sm text-muted-foreground mt-1">
                        Visualize trends, patterns, and statistical analysis of intelligence data.
                    </p>
                </div>
                <button className="flex items-center gap-2 rounded-lg border border-input px-4 py-2 text-sm hover:bg-accent">
                    <FileText className="h-4 w-4" />
                    Export
                </button>
            </div>

            {/* Filters */}
            <div className="flex gap-2">
                <button className="flex items-center gap-2 rounded-lg border border-input px-3 py-2 text-sm hover:bg-accent">
                    <Calendar className="h-4 w-4" />
                    Date Range
                </button>
                <button className="flex items-center gap-2 rounded-lg border border-input px-3 py-2 text-sm hover:bg-accent">
                    <MapPin className="h-4 w-4" />
                    Region/Country
                </button>
                <button className="flex items-center gap-2 rounded-lg border border-input px-3 py-2 text-sm hover:bg-accent">
                    Threat Category
                </button>
                <button className="flex items-center gap-2 rounded-lg border border-input px-3 py-2 text-sm hover:bg-accent">
                    Report Type
                </button>
                <button className="flex items-center gap-2 rounded-lg border border-input px-3 py-2 text-sm hover:bg-accent">
                    Keywords
                </button>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-4 md:grid-cols-3">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-lg border border-border bg-card p-6"
                >
                    <p className="text-sm text-muted-foreground">Total Reports</p>
                    <div className="mt-2 flex items-end gap-2">
                        <p className="text-3xl font-semibold">1,204</p>
                        <span className="flex items-center gap-1 text-sm text-green-500 mb-1">
                            <TrendingUp className="h-4 w-4" />
                            +5.2%
                        </span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="rounded-lg border border-border bg-card p-6"
                >
                    <p className="text-sm text-muted-foreground">New Threats Identified</p>
                    <div className="mt-2 flex items-end gap-2">
                        <p className="text-3xl font-semibold">87</p>
                        <span className="flex items-center gap-1 text-sm text-green-500 mb-1">
                            <TrendingUp className="h-4 w-4" />
                            +12.8%
                        </span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="rounded-lg border border-border bg-card p-6"
                >
                    <p className="text-sm text-muted-foreground">High-Priority Alerts</p>
                    <div className="mt-2 flex items-end gap-2">
                        <p className="text-3xl font-semibold">15</p>
                        <span className="flex items-center gap-1 text-sm text-red-500 mb-1">
                            <TrendingDown className="h-4 w-4" />
                            -3.1%
                        </span>
                    </div>
                </motion.div>
            </div>

            {/* Charts */}
            <div className="grid gap-6 lg:grid-cols-2">
                {/* Report Volume Over Time */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="rounded-lg border border-border bg-card p-6"
                >
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold">Report Volume Over Time</h3>
                        <p className="text-sm text-muted-foreground">Last 30 Days</p>
                    </div>
                    <div className="mb-4">
                        <div className="flex items-end gap-2">
                            <p className="text-3xl font-semibold">892</p>
                            <span className="flex items-center gap-1 text-sm text-green-500 mb-1">
                                <TrendingUp className="h-4 w-4" />
                                +15.3%
                            </span>
                        </div>
                    </div>
                    <ResponsiveContainer width="100%" height={250}>
                        <AreaChart data={trendData}>
                            <defs>
                                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                            <XAxis
                                dataKey="week"
                                stroke="hsl(var(--muted-foreground))"
                                fontSize={12}
                            />
                            <YAxis
                                stroke="hsl(var(--muted-foreground))"
                                fontSize={12}
                            />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: 'hsl(var(--card))',
                                    border: '1px solid hsl(var(--border))',
                                    borderRadius: '8px'
                                }}
                            />
                            <Area
                                type="monotone"
                                dataKey="value"
                                stroke="hsl(var(--primary))"
                                strokeWidth={2}
                                fill="url(#colorValue)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </motion.div>

                {/* Geographic Hotspots */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="rounded-lg border border-border bg-card p-6"
                >
                    <h3 className="mb-4 text-lg font-semibold">Geographic Hotspots</h3>
                    <div className="flex h-[350px] items-center justify-center rounded-lg bg-muted/20">
                        <div className="text-center">
                            <MapPin className="mx-auto h-16 w-16 text-muted-foreground/50" />
                            <p className="mt-2 text-sm text-muted-foreground">Interactive map visualization</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
