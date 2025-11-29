import { Link, useLocation } from 'react-router-dom'
import { LayoutDashboard, Radio, BarChart3, FileText, Search, Bell, User, Shield } from 'lucide-react'
import { cn } from '../lib/utils'

const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Intelligence Feed', href: '/feed', icon: Radio },
    { name: 'Analytics', href: '/analytics', icon: BarChart3 },
    { name: 'Reports', href: '/reports', icon: FileText },
]

export default function Layout({ children }) {
    const location = useLocation()

    return (
        <div className="flex min-h-screen bg-background">
            {/* Sidebar */}
            <aside className="fixed inset-y-0 left-0 z-50 w-56 border-r border-border" style={{ backgroundColor: 'hsl(var(--sidebar-bg))' }}>
                <div className="flex h-full flex-col">
                    {/* Logo */}
                    <div className="flex h-16 items-center gap-2 border-b border-border px-6">
                        <Shield className="h-6 w-6 text-primary" />
                        <span className="text-lg font-semibold">TruTrace</span>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 space-y-1 p-3">
                        {navigation.map((item) => {
                            const isActive = location.pathname === item.href ||
                                (item.href === '/feed' && location.pathname.startsWith('/feed/'))
                            return (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className={cn(
                                        'sidebar-item',
                                        isActive && 'active'
                                    )}
                                >
                                    <item.icon className="h-5 w-5" />
                                    <span className="text-sm">{item.name}</span>
                                </Link>
                            )
                        })}
                    </nav>

                    {/* User Section */}
                    <div className="border-t border-border p-3">
                        <div className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-accent cursor-pointer">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                                <User className="h-4 w-4 text-primary" />
                            </div>
                            <div className="flex-1 text-sm">
                                <p className="font-medium">Alex Mercer</p>
                                <p className="text-xs text-muted-foreground">Security Analyst</p>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 pl-56">
                {/* Header */}
                <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
                    <div className="flex h-14 items-center gap-4 px-6">
                        {/* Search */}
                        <div className="flex-1 max-w-md">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                <input
                                    type="text"
                                    placeholder="Search reports, threats, entities..."
                                    className="w-full rounded-lg border border-input bg-background pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                                />
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-2">
                            <button className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-accent relative">
                                <Bell className="h-4 w-4" />
                                <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-destructive"></span>
                            </button>
                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                                <span className="text-sm font-medium text-primary">AM</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="p-6">
                    {children}
                </main>
            </div>
        </div>
    )
}
