import { Link } from "react-router-dom";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientButton } from "@/components/ui/gradient-button";
import { Shield, Mail, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

export default function VerifyEmail() {
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
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-2xl font-bold mb-2">Check your email</h1>
          <p className="text-muted-foreground">
            We sent a verification code to<br />
            <span className="text-foreground">john@company.com</span>
          </p>
        </div>

        <GlassCard className="p-6">
          <div className="space-y-6">
            <div className="flex justify-center">
              <InputOTP maxLength={6}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} className="input-glass" />
                  <InputOTPSlot index={1} className="input-glass" />
                  <InputOTPSlot index={2} className="input-glass" />
                  <InputOTPSlot index={3} className="input-glass" />
                  <InputOTPSlot index={4} className="input-glass" />
                  <InputOTPSlot index={5} className="input-glass" />
                </InputOTPGroup>
              </InputOTP>
            </div>
            <Link to="/app/dashboard">
              <GradientButton className="w-full">
                Verify Email
              </GradientButton>
            </Link>
            <div className="text-center">
              <button className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <RefreshCw className="w-4 h-4" />
                Resend code
              </button>
            </div>
          </div>
        </GlassCard>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Wrong email?{" "}
          <Link to="/register" className="text-primary hover:underline">
            Go back
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
