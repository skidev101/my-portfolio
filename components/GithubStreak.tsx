"use client";

import { GitCommit, Github } from "lucide-react";

export default function GithubStreak() {
  return (
    <div className="mt-8 rounded-lg border border-line bg-surface/50 p-4 backdrop-blur-xs">
      <div className="flex items-center justify-between font-mono text-xs text-copy mb-3">
        <div className="flex items-center gap-2">
          <Github size={14} className="text-ink" />
          <span className="font-medium text-ink">skidev101</span>
          <span className="text-quiet">/</span>
          <span>activity</span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-signal font-mono">
          <span className="size-1.5 rounded-full bg-signal animate-pulse" />
          <span>Active streak</span>
        </div>
      </div>

      {/* GitHub contribution activity grid mockup SVG */}
      <div className="relative overflow-x-auto py-1">
        <div className="flex items-center gap-1 min-w-[320px]">
          {Array.from({ length: 32 }).map((_, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-1 flex-1">
              {Array.from({ length: 5 }).map((_, rowIdx) => {
                // Generate a subtle pattern of activity levels (0-3)
                const level = (colIdx * 3 + rowIdx * 7) % 5;
                let bgClass = "bg-line/60"; // level 0
                if (level === 1) bgClass = "bg-signal/25";
                if (level === 2) bgClass = "bg-signal/50";
                if (level === 3 || level === 4) bgClass = "bg-signal";

                return (
                  <div
                    key={rowIdx}
                    className={`h-2.5 w-full rounded-xs transition-opacity duration-150 fine-pointer:hover:opacity-80 ${bgClass}`}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-quiet">
        <span className="flex items-center gap-1">
          <GitCommit size={12} className="text-signal" /> Continuous daily shipping
        </span>
        <span>2026 contribution map</span>
      </div>
    </div>
  );
}
