import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

type RiskLevel = "critical" | "high" | "medium" | "low";
type StatusType = "success" | "warning" | "error" | "info" | "default";

interface StatusBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "risk" | "status" | "role";
  risk?: RiskLevel;
  status?: StatusType;
}

const StatusBadge = forwardRef<HTMLSpanElement, StatusBadgeProps>(
  ({ className, variant = "status", risk, status = "default", children, ...props }, ref) => {
    const getRiskClasses = (risk: RiskLevel) => {
      switch (risk) {
        case "critical":
          return "badge-risk-critical";
        case "high":
          return "badge-risk-high";
        case "medium":
          return "badge-risk-medium";
        case "low":
          return "badge-risk-low";
      }
    };

    const getStatusClasses = (status: StatusType) => {
      switch (status) {
        case "success":
          return "bg-green-500/20 text-green-400 border border-green-500/30";
        case "warning":
          return "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30";
        case "error":
          return "bg-red-500/20 text-red-400 border border-red-500/30";
        case "info":
          return "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30";
        default:
          return "bg-secondary text-muted-foreground border border-border";
      }
    };

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium",
          variant === "risk" && risk && getRiskClasses(risk),
          variant === "status" && getStatusClasses(status),
          variant === "role" && "bg-primary/20 text-primary border border-primary/30",
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

StatusBadge.displayName = "StatusBadge";

export { StatusBadge };
