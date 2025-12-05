import { Bell, Search, User, LogOut, Settings, HelpCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GlassCard } from "@/components/ui/glass-card";
import { StatusBadge } from "@/components/ui/status-badge";
import { useNavigate } from "react-router-dom";
import { DemoModeToggle } from "@/components/DemoModeToggle";

const notifications = [
  { id: 1, title: "New high-risk claim detected", time: "2 min ago", unread: true },
  { id: 2, title: "Report #1234 approved", time: "15 min ago", unread: true },
  { id: 3, title: "Weekly digest ready", time: "1 hour ago", unread: false },
];

export function AppHeader() {
  const navigate = useNavigate();

  return (
    <header className="h-16 glass-strong border-b border-border/50 flex items-center justify-between px-6 sticky top-0 z-50">
      {/* Search */}
      <div className="relative w-96">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Search claims, reports, sources..."
          className="pl-10 input-glass"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        {/* Demo Mode Toggle */}
        <DemoModeToggle />

        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="relative p-2 rounded-lg hover:bg-secondary/50 transition-colors">
              <Bell className="w-5 h-5 text-muted-foreground" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-cyan rounded-full" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80 glass-strong">
            <div className="p-3 border-b border-border/30">
              <h4 className="font-semibold">Notifications</h4>
            </div>
            <div className="max-h-80 overflow-y-auto">
              {notifications.map((n) => (
                <DropdownMenuItem key={n.id} className="p-3 cursor-pointer">
                  <div className="flex items-start gap-3">
                    {n.unread && (
                      <span className="w-2 h-2 mt-2 bg-cyan rounded-full flex-shrink-0" />
                    )}
                    <div className={!n.unread ? "ml-5" : ""}>
                      <p className="text-sm font-medium">{n.title}</p>
                      <p className="text-xs text-muted-foreground">{n.time}</p>
                    </div>
                  </div>
                </DropdownMenuItem>
              ))}
            </div>
            <div className="p-2 border-t border-border/30">
              <button className="w-full text-center text-sm text-primary hover:underline">
                View all notifications
              </button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary/50 transition-colors">
              <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                <User className="w-4 h-4 text-background" />
              </div>
              <div className="text-left hidden sm:block">
                <p className="text-sm font-medium">Alex Chen</p>
                <StatusBadge variant="role" className="text-[10px] px-1.5">
                  Admin
                </StatusBadge>
              </div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 glass-strong">
            <DropdownMenuItem onClick={() => navigate("/app/settings")}>
              <User className="w-4 h-4 mr-2" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate("/app/settings")}>
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem>
              <HelpCircle className="w-4 h-4 mr-2" />
              Help Center
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => navigate("/login")} className="text-destructive">
              <LogOut className="w-4 h-4 mr-2" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
