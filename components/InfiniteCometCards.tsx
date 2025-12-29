"use client";

import React, { useState } from "react";
import { CometCard } from "@/components/ui/comet-card";

type EventCard = {
  title: string;
  desc: string;
  tag?: string;
};

export function InfiniteCometCards({ items }: { items: EventCard[] }) {
  const [paused, setPaused] = useState(false);

  return (
    <div
      className="relative overflow-hidden py-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* 🌌 Star background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1px_1px_at_20%_30%,white,transparent),radial-gradient(1px_1px_at_80%_40%,white,transparent),radial-gradient(1px_1px_at_50%_70%,white,transparent)] opacity-20" />

      {/* Moving track */}
      <div
        className="flex w-max gap-8 px-8 animate-infinite-scroll"
        style={{
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {[...items, ...items].map((event, idx) => (
          <CometCard key={idx}>
            <div className="w-[360px] rounded-2xl border border-white/10 bg-black/80 p-6 backdrop-blur-xl">
              {event.tag && (
                <span className="inline-block mb-4 rounded bg-red-600 px-3 py-1 text-xs font-semibold">
                  {event.tag}
                </span>
              )}

              <h3 className="text-xl font-bold text-white mb-2">
                {event.title}
              </h3>

              <p className="text-sm text-white/60">
                {event.desc}
              </p>
            </div>
          </CometCard>
        ))}
      </div>
    </div>
  );
}
