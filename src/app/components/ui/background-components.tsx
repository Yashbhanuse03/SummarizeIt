"use client";

import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface ComponentProps {
  children?: ReactNode;
  className?: string;
}

export const Component = ({ children, className }: ComponentProps) => {
  return (
    <div className={cn("min-h-screen w-full relative bg-white", className)}>
      {/* Soft Yellow Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        radial-gradient(circle at center,hsl(212, 100%, 81%)  0%, transparent 70%)
      `,
          opacity: 0.6,
          mixBlendMode: "multiply",
        }}
      />
      {/* Your Content/Components */}
      {children}
    </div>
  );
};

