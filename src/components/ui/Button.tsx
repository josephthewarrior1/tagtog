"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      icon,
      iconPosition = "right",
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      sm: "text-xs px-3.5 py-1.5 gap-1.5 rounded-md",
      md: "text-sm px-5 py-2.5 gap-2 rounded-lg font-medium",
      lg: "text-base px-6 py-3.5 gap-2.5 rounded-lg font-semibold",
    };

    const variantClasses = {
      primary:
        "bg-[#1d4ed8] text-white hover:bg-[#1e40af] shadow-sm border border-[#1d4ed8] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#1d4ed8] focus-visible:ring-offset-2",
      secondary:
        "bg-[#090a0f] text-white hover:bg-[#181924] shadow-sm border border-[#090a0f] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#090a0f] focus-visible:ring-offset-2",
      outline:
        "bg-white text-[#090a0f] border border-[#c8c8d5] hover:bg-[#f4f4f7] hover:border-[#a2a2b8] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#1d4ed8] focus-visible:ring-offset-2",
      ghost:
        "bg-transparent text-[#525266] hover:text-[#090a0f] hover:bg-[#f4f4f7] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#1d4ed8] focus-visible:ring-offset-2",
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          "inline-flex items-center justify-center transition-all duration-150 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none select-none tracking-tight",
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";
