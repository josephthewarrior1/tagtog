import React from "react";
import { cn } from "@/lib/utils";

interface ConnectorLineProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
  label?: string;
}

export function ConnectorLine({
  orientation = "horizontal",
  className,
  label,
}: ConnectorLineProps) {
  if (orientation === "vertical") {
    return (
      <div className={cn("relative flex flex-col items-center", className)}>
        <div className="w-px h-full bg-gradient-to-b from-[#bfdbfe] via-[#1d4ed8] to-[#bfdbfe]" />
        {label && (
          <span className="absolute top-1/2 -translate-y-1/2 px-2 py-0.5 bg-white border border-[#bfdbfe] text-[10px] font-mono text-[#1d4ed8] rounded-full whitespace-nowrap shadow-xs">
            {label}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className={cn("relative flex items-center w-full", className)}>
      <div className="h-px w-full bg-gradient-to-r from-[#bfdbfe] via-[#1d4ed8] to-[#bfdbfe]" />
      {label && (
        <span className="absolute left-1/2 -translate-x-1/2 px-2.5 py-0.5 bg-white border border-[#bfdbfe] text-[11px] font-mono text-[#1d4ed8] rounded-full whitespace-nowrap shadow-xs">
          {label}
        </span>
      )}
    </div>
  );
}
