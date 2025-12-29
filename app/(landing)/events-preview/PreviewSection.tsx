"use client";

import Link from "next/link";
import Container from "@/components/_core/layout/Container";
import { InfiniteCometCards } from "@/components/InfiniteCometCards";

export default function PreviewSection() {
  const events = [
    {
      title: "Flagship Event 1",
      desc: "Experience the thrill of competition with our headline event.",
      tag: "Trending",
    },
    {
      title: "Flagship Event 2",
      desc: "Experience the thrill of competition with our headline event.",
      tag: "Trending",
    },
    {
      title: "Flagship Event 3",
      desc: "Experience the thrill of competition with our headline event.",
      tag: "Trending",
    },
  ];

  const workshops = [
    {
      title: "AI Workshop",
      desc: "Hands-on AI & ML workshop with real projects.",
      tag: "Workshop",
    },
    {
      title: "Cyber Security Lab",
      desc: "Live hacking & defense techniques.",
      tag: "Workshop",
    },
    {
      title: "UI/UX Bootcamp",
      desc: "Design systems, Figma & prototyping.",
      tag: "Workshop",
    },
  ];

  return (
    <section className="relative py-28 bg-black overflow-hidden">
      {/* EVENTS */}
      <Container>
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
              Events
            </h2>
            <div className="mt-2 h-1 w-24 bg-gradient-to-r from-red-600 to-red-400 rounded-full" />
          </div>

          <Link
            href="/events"
            className="text-sm font-semibold text-red-500 hover:text-white transition-colors"
          >
            View All →
          </Link>
        </div>
      </Container>

      <InfiniteCometCards items={events} direction="left" />

      {/* WORKSHOPS */}
      <Container>
        <div className="mt-28 mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
              Workshops
            </h2>
            <div className="mt-2 h-1 w-32 bg-gradient-to-r from-red-600 to-red-400 rounded-full" />
          </div>

          <Link
            href="/events#workshops"
            className="text-sm font-semibold text-red-500 hover:text-white transition-colors"
          >
            View All →
          </Link>
        </div>
      </Container>

      <InfiniteCometCards items={workshops} direction="right" />
    </section>
  );
}
