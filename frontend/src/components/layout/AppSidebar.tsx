import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Rss,
  BarChart3,
  Map,
  FileText,
  Shield,
  Database,
  Globe,
  Users,
  Zap,
  Activity,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/app/dashboard" },
  { icon: Rss, label: "Intelligence Feed", path: "/app/feed" },
  { icon: BarChart3, label: "Analytics", path: "/app/analytics" },
  { icon: Map, label: "Map Intelligence", path: "/app/map" },
  { icon: FileText, label: "Reports", path: "/app/reports" },
  { icon: Shield, label: "Verification Tools", path: "/app/verify" },
  { icon: Database, label: "Datasets", path: "/app/datasets" },
  { icon: Globe, label: "Sources", path: "/app/sources" },
  { icon: Users, label: "Users", path: "/app/users" },
  { icon: Zap, label: "Automations", path: "/app/automations" },
  { icon: Activity, label: "Activity Logs", path: "/app/activity" },
  { icon: Settings, label: "Settings", path: "/app/settings" },
];

export function AppSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <aside
      className={cn(
        "h-screen glass-strong border-r border-border/50 flex flex-col transition-all duration-300 sticky top-0",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Logo */}
      <div className="p-4 border-b border-border/30">
        <NavLink to="/app/dashboard" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
            <Shield className="w-5 h-5 text-background" />
          </div>
          {!collapsed && (
            <span className="font-bold text-lg gradient-text">TrueTrace</span>
          )}
        </NavLink>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={cn(
                "sidebar-item",
                isActive && "active"
              )}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {!collapsed && <span>{item.label}</span>}
            </NavLink>
          );
        })}
      </nav>

      {/* Collapse Button */}
      <div className="p-3 border-t border-border/30">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-full sidebar-item justify-center"
        >
          {collapsed ? (
            <ChevronRight className="w-5 h-5" />
          ) : (
            <>
              <ChevronLeft className="w-5 h-5" />
              <span>Collapse</span>
            </>
          )}
        </button>
      </div>
    </aside>
  );
}
