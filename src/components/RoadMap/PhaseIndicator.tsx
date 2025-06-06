import * as React from "react";

interface PhaseIndicatorProps {
  className?: string;
}

export function PhaseIndicator({ className = "" }: PhaseIndicatorProps) {
  return (
    <div className={`flex shrink-0 bg-yellow-500 rounded-full h-[30px] w-[30px] ${className}`} />
  );
}
