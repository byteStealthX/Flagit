import { useState } from "react";
import { useLenis } from "@/hooks/useLenis";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientButton } from "@/components/ui/gradient-button";
import { StatusBadge } from "@/components/ui/status-badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search, Plus, UserPlus, Edit, Trash2, Shield, Mail } from "lucide-react";

const users = [
  {
    id: 1,
    name: "Sarah Kim",
    email: "sarah.kim@truetrace.io",
    role: "Admin",
    status: "active",
    lastActive: "2 min ago",
    avatar: "SK",
  },
  {
    id: 2,
    name: "Mike Thompson",
    email: "mike.t@truetrace.io",
    role: "Analyst",
    status: "active",
    lastActive: "15 min ago",
    avatar: "MT",
  },
  {
    id: 3,
    name: "Emma Lee",
    email: "emma.lee@truetrace.io",
    role: "Analyst",
    status: "active",
    lastActive: "1 hour ago",
    avatar: "EL",
  },
  {
    id: 4,
    name: "John Davis",
    email: "john.d@truetrace.io",
    role: "Reviewer",
    status: "active",
    lastActive: "3 hours ago",
    avatar: "JD",
  },
  {
    id: 5,
    name: "Alex Chen",
    email: "alex.chen@truetrace.io",
    role: "Observer",
    status: "inactive",
    lastActive: "2 days ago",
    avatar: "AC",
  },
];

const roles = ["Admin", "Analyst", "Reviewer", "Observer"];

const permissions = [
  { name: "View Dashboard", admin: true, analyst: true, reviewer: true, observer: true },
  { name: "View Intelligence Feed", admin: true, analyst: true, reviewer: true, observer: true },
  { name: "Create Reports", admin: true, analyst: true, reviewer: false, observer: false },
  { name: "Approve Reports", admin: true, analyst: false, reviewer: true, observer: false },
  { name: "Publish Reports", admin: true, analyst: false, reviewer: false, observer: false },
  { name: "Manage Sources", admin: true, analyst: true, reviewer: false, observer: false },
  { name: "Upload Datasets", admin: true, analyst: true, reviewer: false, observer: false },
  { name: "Manage Users", admin: true, analyst: false, reviewer: false, observer: false },
  { name: "Configure Automations", admin: true, analyst: false, reviewer: false, observer: false },
  { name: "Access API", admin: true, analyst: true, reviewer: false, observer: false },
];

const getRoleColor = (role: string) => {
  switch (role) {
    case "Admin":
      return "bg-red-500/20 text-red-400 border-red-500/30";
    case "Analyst":
      return "bg-blue-500/20 text-blue-400 border-blue-500/30";
    case "Reviewer":
      return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
    case "Observer":
      return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    default:
      return "";
  }
};

export default function Users() {
  useLenis(); // Enable smooth scrolling
  const [editUser, setEditUser] = useState<typeof users[0] | null>(null);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">User Management</h1>
          <p className="text-muted-foreground">Manage team members and permissions</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <GradientButton>
              <UserPlus className="w-4 h-4" />
              Invite User
            </GradientButton>
          </DialogTrigger>
          <DialogContent className="glass-strong">
            <DialogHeader>
              <DialogTitle>Invite Team Member</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label>Email Address</Label>
                <Input type="email" placeholder="colleague@company.com" className="input-glass" />
              </div>
              <div className="space-y-2">
                <Label>Role</Label>
                <Select defaultValue="analyst">
                  <SelectTrigger className="input-glass">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="glass-strong">
                    {roles.map((role) => (
                      <SelectItem key={role} value={role.toLowerCase()}>
                        {role}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <GradientButton className="w-full">
                <Mail className="w-4 h-4" />
                Send Invitation
              </GradientButton>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search */}
      <GlassCard className="p-4">
        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search users..." className="pl-10 input-glass" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-40 input-glass">
              <SelectValue placeholder="Role" />
            </SelectTrigger>
            <SelectContent className="glass-strong">
              <SelectItem value="all">All Roles</SelectItem>
              {roles.map((role) => (
                <SelectItem key={role} value={role.toLowerCase()}>
                  {role}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </GlassCard>

      {/* Users Table */}
      <GlassCard className="overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-border/30 hover:bg-transparent">
              <TableHead className="text-muted-foreground">User</TableHead>
              <TableHead className="text-muted-foreground">Role</TableHead>
              <TableHead className="text-muted-foreground">Status</TableHead>
              <TableHead className="text-muted-foreground">Last Active</TableHead>
              <TableHead className="text-muted-foreground">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id} className="table-row">
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-sm font-medium text-background">
                      {user.avatar}
                    </div>
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getRoleColor(user.role)}`}>
                    {user.role}
                  </span>
                </TableCell>
                <TableCell>
                  <StatusBadge status={user.status === "active" ? "success" : "default"}>
                    {user.status}
                  </StatusBadge>
                </TableCell>
                <TableCell className="text-muted-foreground">{user.lastActive}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <GradientButton variant="glass" size="sm" onClick={() => setEditUser(user)}>
                          <Edit className="w-4 h-4" />
                        </GradientButton>
                      </DialogTrigger>
                      <DialogContent className="glass-strong">
                        <DialogHeader>
                          <DialogTitle>Edit User</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4 mt-4">
                          <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-xl font-medium text-background">
                              {user.avatar}
                            </div>
                            <div>
                              <p className="font-medium">{user.name}</p>
                              <p className="text-sm text-muted-foreground">{user.email}</p>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label>Role</Label>
                            <Select defaultValue={user.role.toLowerCase()}>
                              <SelectTrigger className="input-glass">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent className="glass-strong">
                                {roles.map((role) => (
                                  <SelectItem key={role} value={role.toLowerCase()}>
                                    {role}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label>Status</Label>
                            <Select defaultValue={user.status}>
                              <SelectTrigger className="input-glass">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent className="glass-strong">
                                <SelectItem value="active">Active</SelectItem>
                                <SelectItem value="inactive">Inactive</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <GradientButton className="w-full">Save Changes</GradientButton>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <GradientButton variant="glass" size="sm" className="text-destructive hover:text-destructive">
                      <Trash2 className="w-4 h-4" />
                    </GradientButton>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </GlassCard>

      {/* Permission Matrix */}
      <GlassCard className="p-5">
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          <Shield className="w-5 h-5 text-cyan" />
          Permission Matrix
        </h3>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-border/30 hover:bg-transparent">
                <TableHead className="text-muted-foreground">Permission</TableHead>
                {roles.map((role) => (
                  <TableHead key={role} className="text-muted-foreground text-center">
                    {role}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {permissions.map((perm, i) => (
                <TableRow key={i} className="table-row">
                  <TableCell className="font-medium">{perm.name}</TableCell>
                  <TableCell className="text-center">
                    <Checkbox checked={perm.admin} disabled className="data-[state=checked]:bg-primary" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Checkbox checked={perm.analyst} disabled className="data-[state=checked]:bg-primary" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Checkbox checked={perm.reviewer} disabled className="data-[state=checked]:bg-primary" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Checkbox checked={perm.observer} disabled className="data-[state=checked]:bg-primary" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </GlassCard>
    </div>
  );
}
