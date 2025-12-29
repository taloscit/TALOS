"use client";

import Link from "next/link";
import Container from "@/components/_core/layout/Container";
import { InfiniteCometCards } from "@/components/InfiniteCometCards";

export default function PreviewSection() {
  const featuredEvents = [
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
    {
      title: "Flagship Event 4",
      desc: "Battle the best minds in our elite challenge.",
      tag: "Trending",
    },
  ];

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      <Container>
        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl font-bold text-white">
            Featured Events
          </h2>
          <Link
            href="/events"
            className="text-primary hover:text-white transition-colors text-sm font-semibold"
          >
            View All →
          </Link>
        </div>
      </Container>

      {/* Infinite moving cards */}
      <InfiniteCometCards items={featuredEvents} />
    </section>
  );
}
