// This file should be renamed to AppTopbar.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Bell, 
  User, 
  Menu,
  LogOut,
  Settings as SettingsIcon,
  HelpCircle
} from 'lucide-react';

interface AppTopbarProps {
  onMenuClick: () => void;
  sidebarCollapsed: boolean;
}

export function AppTopbar({ onMenuClick, sidebarCollapsed }: AppTopbarProps) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  const notifications = [
    { id: 1, title: 'New verification request', time: '2 min ago', unread: true },
    { id: 2, title: 'Dataset processing complete', time: '15 min ago', unread: true },
    { id: 3, title: 'Report generated successfully', time: '1 hour ago', unread: false },
  ];

  return (
    <header className="sticky top-0 z-20 h-16 bg-bg-surface/80 backdrop-blur-md border-b border-border-soft">
      <div className="h-full px-4 lg:px-6 flex items-center justify-between gap-4">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-lg hover:bg-bg-hover transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Search */}
          <motion.div
            animate={searchFocused ? { width: '100%', maxWidth: 480 } : { width: 320 }}
            className="hidden md:block relative"
          >
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
            <input
              type="search"
              placeholder="Search claims, sources, reports..."
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              className={`w-full pl-10 pr-4 py-2 bg-bg-glass border rounded-lg text-sm transition-all duration-normal ${
                searchFocused
                  ? 'border-primary-300 ring-2 ring-primary-300/20 shadow-glow-primary'
                  : 'border-border-soft hover:border-border-medium'
              }`}
            />
          </motion.div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2">
          {/* Mobile Search */}
          <button aria-label="Search" className="md:hidden p-2 rounded-lg hover:bg-bg-hover transition-colors">
            <Search className="w-5 h-5" />
          </button>

          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              aria-label="Notifications"
              className="relative p-2 rounded-lg hover:bg-bg-hover transition-colors"
            >
              <Bell className="w-5 h-5" />
              {notifications.some(n => n.unread) && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-semantic-danger rounded-full animate-ping" />
              )}
            </button>

            {/* Notifications Dropdown */}
            <AnimatePresence>
              {showNotifications && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-2 w-80 glass-panel rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="p-4 border-b border-border-soft">
                    <h3 className="font-semibold">Notifications</h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.map((notif) => (
                      <div
                        key={notif.id}
                        className={`p-4 border-b border-border-soft hover:bg-bg-hover transition-colors cursor-pointer ${
                          notif.unread ? 'bg-primary-300/5' : ''
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          {notif.unread && (
                            <span className="w-2 h-2 mt-2 bg-primary-300 rounded-full" />
                          )}
                          <div className="flex-1">
                            <p className="text-sm text-text-primary">{notif.title}</p>
                            <p className="text-xs text-text-muted mt-1">{notif.time}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 border-t border-border-soft">
                    <button className="w-full text-sm text-primary-300 hover:text-primary-200 transition-colors">
                      View all notifications
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center gap-2 p-1 pr-3 rounded-full hover:bg-bg-hover transition-colors"
            >
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <span className="hidden lg:block text-sm font-medium">Admin User</span>
            </button>

            {/* User Dropdown */}
            <AnimatePresence>
              {showUserMenu && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-2 w-56 glass-panel rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="p-4 border-b border-border-soft">
                    <p className="font-medium">Admin User</p>
                    <p className="text-sm text-text-muted">admin@truetrace.ai</p>
                  </div>
                  <div className="py-2">
                    <button className="w-full flex items-center gap-3 px-4 py-2 hover:bg-bg-hover transition-colors text-left">
                      <User className="w-4 h-4" />
                      <span className="text-sm">Profile</span>
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-2 hover:bg-bg-hover transition-colors text-left">
                      <SettingsIcon className="w-4 h-4" />
                      <span className="text-sm">Settings</span>
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-2 hover:bg-bg-hover transition-colors text-left">
                      <HelpCircle className="w-4 h-4" />
                      <span className="text-sm">Help & Support</span>
                    </button>
                  </div>
                  <div className="p-2 border-t border-border-soft">
                    <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-semantic-danger/10 text-semantic-danger transition-colors text-left">
                      <LogOut className="w-4 h-4" />
                      <span className="text-sm">Sign out</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
}
