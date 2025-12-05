import { Link } from "react-router-dom";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientButton } from "@/components/ui/gradient-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield, ArrowLeft, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function ForgotPassword() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(217_91%_60%_/_0.1)_0%,_transparent_50%)]" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative"
      >
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Shield className="w-6 h-6 text-background" />
            </div>
            <span className="font-bold text-2xl gradient-text">TrueTrace</span>
          </Link>
          <h1 className="text-2xl font-bold mb-2">Reset your password</h1>
          <p className="text-muted-foreground">Enter your email and we'll send you a reset link</p>
        </div>

        <GlassCard className="p-6">
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@company.com"
                className="input-glass"
              />
            </div>
            <GradientButton className="w-full">
              <Mail className="w-4 h-4" />
              Send Reset Link
            </GradientButton>
          </form>
        </GlassCard>

        <div className="text-center mt-6">
          <Link to="/login" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to login
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
