import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "neutral" | "accent" | "success" | "warning" | "outline";
  className?: string;
  size?: "sm" | "md";
}

export function Badge({
  children,
  variant = "neutral",
  size = "md",
  className,
}: BadgeProps) {
  const variantStyles = {
    neutral: "bg-[#f4f4f7] text-[#525266] border-[#e2e2ea]",
    accent: "bg-[#eff6ff] text-[#1d4ed8] border-[#bfdbfe]",
    success: "bg-[#f0fdf4] text-[#15803d] border-[#bbf7d0]",
    warning: "bg-[#fffbeb] text-[#b45309] border-[#fde68a]",
    outline: "bg-white text-[#525266] border-[#e2e2ea]",
  };

  const sizeStyles = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-xs font-medium",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border font-mono tracking-tight shrink-0 select-none",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
}
