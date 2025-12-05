'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Home, FileText, BarChart3, FileStack, Database, Settings } from 'lucide-react';

const navItems = [
    { href: '/', label: 'Dashboard', icon: Home },
    { href: '/intelligence-feed', label: 'Intelligence Feed', icon: FileText },
    { href: '/analytics', label: 'Analytics', icon: BarChart3 },
    { href: '/reports', label: 'Reports', icon: FileStack },
    { href: '/data-sources', label: 'Data Sources', icon: Database },
    { href: '/settings', label: 'Settings', icon: Settings },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="fixed left-0 top-0 h-screen w-64 bg-card border-r border-border flex flex-col">
            {/* Logo */}
            <div className="p-6 border-b border-border">
                <h1 className="text-2xl font-bold text-primary">TruTrace</h1>
                <p className="text-xs text-muted-foreground mt-1">Threat Intelligence</p>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-2">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                                isActive
                                    ? "bg-primary text-primary-foreground"
                                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                            )}
                        >
                            <Icon className="h-5 w-5" />
                            <span>{item.label}</span>
                        </Link>
                    );
                })}
            </nav>

            {/* User Profile */}
            <div className="p-4 border-t border-border">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
                        AM
                    </div>
                    <div>
                        <div className="font-medium text-sm">Alex Mercer</div>
                        <div className="text-xs text-muted-foreground">Senior Analyst</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
