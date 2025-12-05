import { useState } from "react";
import { useLenis } from "@/hooks/useLenis";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientButton } from "@/components/ui/gradient-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Bell, Shield, Database, Key, Plug, Copy, Eye, EyeOff, Smartphone } from "lucide-react";


export default function Settings() {
  useLenis(); // Enable smooth scrolling
  const [showKey, setShowKey] = useState(false);

  return (
    <div className="space-y-6">
      <div><h1 className="text-2xl font-bold">Settings</h1><p className="text-muted-foreground">Manage your account and preferences</p></div>

      <Tabs defaultValue="profile">
        <TabsList className="glass"><TabsTrigger value="profile"><User className="w-4 h-4 mr-2" />Profile</TabsTrigger><TabsTrigger value="notifications"><Bell className="w-4 h-4 mr-2" />Notifications</TabsTrigger><TabsTrigger value="security"><Shield className="w-4 h-4 mr-2" />Security</TabsTrigger><TabsTrigger value="api"><Key className="w-4 h-4 mr-2" />API Keys</TabsTrigger></TabsList>

        <TabsContent value="profile" className="mt-6">
          <GlassCard className="p-6 max-w-2xl">
            <h3 className="font-semibold mb-4">Profile Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center text-2xl font-bold text-background">AC</div>
                <GradientButton variant="glass" size="sm">Change Avatar</GradientButton>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2"><Label>First Name</Label><Input defaultValue="Alex" className="input-glass" /></div>
                <div className="space-y-2"><Label>Last Name</Label><Input defaultValue="Chen" className="input-glass" /></div>
              </div>
              <div className="space-y-2"><Label>Email</Label><Input defaultValue="alex.chen@truetrace.io" className="input-glass" /></div>
              <GradientButton>Save Changes</GradientButton>
            </div>
          </GlassCard>
        </TabsContent>

        <TabsContent value="notifications" className="mt-6">
          <GlassCard className="p-6 max-w-2xl">
            <h3 className="font-semibold mb-4">Notification Preferences</h3>
            <div className="space-y-4">
              {["Email notifications for high-risk alerts", "Weekly digest emails", "Report status updates", "System announcements"].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30"><span>{item}</span><Switch defaultChecked={i < 2} /></div>
              ))}
            </div>
          </GlassCard>
        </TabsContent>

        <TabsContent value="security" className="mt-6">
          <GlassCard className="p-6 max-w-2xl">
            <h3 className="font-semibold mb-4">Security Settings</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/30">
                <div className="flex items-center gap-3"><Smartphone className="w-5 h-5 text-cyan" /><div><p className="font-medium">Two-Factor Authentication</p><p className="text-sm text-muted-foreground">Add extra security to your account</p></div></div>
                <GradientButton variant="glass" size="sm">Enable</GradientButton>
              </div>
              <div className="space-y-2"><Label>Current Password</Label><Input type="password" className="input-glass" /></div>
              <div className="space-y-2"><Label>New Password</Label><Input type="password" className="input-glass" /></div>
              <GradientButton>Update Password</GradientButton>
            </div>
          </GlassCard>
        </TabsContent>

        <TabsContent value="api" className="mt-6">
          <GlassCard className="p-6 max-w-2xl">
            <h3 className="font-semibold mb-4">API Keys</h3>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-secondary/30">
                <p className="text-sm text-muted-foreground mb-2">Production API Key</p>
                <div className="flex items-center gap-2">
                  <Input value={showKey ? "sk_live_xxxxxxxxxxxxxxxxxxxxx" : "••••••••••••••••••••"} readOnly className="input-glass font-mono" />
                  <GradientButton variant="glass" size="sm" onClick={() => setShowKey(!showKey)}>{showKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}</GradientButton>
                  <GradientButton variant="glass" size="sm"><Copy className="w-4 h-4" /></GradientButton>
                </div>
              </div>
              <GradientButton variant="glass"><Key className="w-4 h-4" />Generate New Key</GradientButton>
            </div>
          </GlassCard>
        </TabsContent>
      </Tabs>
    </div>
  );
}
