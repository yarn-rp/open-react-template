"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

const LOGOS = [
  "/images/client-logo-01.svg",
  "/images/client-logo-02.svg",
  "/images/client-logo-03.svg",
  "/images/client-logo-04.svg",
  "/images/client-logo-05.svg",
  "/images/client-logo-06.svg",
  "/images/client-logo-07.svg",
  "/images/client-logo-08.svg",
  "/images/client-logo-09.svg",
];

export default function PlatformsCarousel() {
  const [paused, setPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Infinite auto-scroll logic
  useEffect(() => {
    if (!paused) {
      intervalRef.current = setInterval(() => {
        if (scrollRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
          const singleListWidth = scrollWidth / 2;
          let next = scrollLeft + 2;
          if (next >= singleListWidth) {
            // Instantly reset to the start (no animation)
            scrollRef.current.scrollLeft = 0;
            next = 2;
          }
          scrollRef.current.scrollTo({ left: next, behavior: "auto" });
        }
      }, 20);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused]);

  // Manual navigation
  const scrollBy = (dir: number) => {
    if (scrollRef.current) {
      const { clientWidth, scrollWidth } = scrollRef.current;
      const singleListWidth = scrollWidth / 2;
      let next = scrollRef.current.scrollLeft + dir * clientWidth * 0.7;
      if (next >= singleListWidth) {
        scrollRef.current.scrollLeft = 0;
        next = dir > 0 ? clientWidth * 0.7 : 0;
      } else if (next < 0) {
        scrollRef.current.scrollLeft = singleListWidth;
        next = singleListWidth - clientWidth * 0.7;
      }
      scrollRef.current.scrollTo({ left: next, behavior: "smooth" });
    }
  };

  return (
    <div
      className="relative w-full max-w-5xl mx-auto mt-8 mb-16 bg-transparent"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{ background: "transparent" }}
    >
      {/* Carousel content (no fade overlays) */}
      <div
        ref={scrollRef}
        className="flex items-center gap-12 overflow-x-auto scrollbar-hide py-8 px-8 rounded-2xl hide-scrollbar whitespace-nowrap bg-transparent"
        style={{ scrollBehavior: "smooth", background: "transparent" }}
      >
        {/* Render the logos array twice for seamless infinite scroll */}
        {[...LOGOS, ...LOGOS].map((src, i) => (
          <div key={i} className="flex items-center justify-center h-20 w-32 flex-shrink-0 inline-block">
            <Image
              src={src}
              alt="Platform logo"
              width={100}
              height={60}
              className="object-contain grayscale invert"
              draggable={false}
              priority
            />
          </div>
        ))}
      </div>

      {/* Arrows (show only when paused/hovered) */}
      {paused && (
        <>
          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-transparent border border-white/30 dark:border-white/20 rounded-full p-4 text-white/80 hover:text-white hover:border-white transition shadow-lg"
            onClick={() => scrollBy(-1)}
            aria-label="Previous"
          >
            <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 26l-8-8 8-8" /></svg>
          </button>
          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-transparent border border-white/30 dark:border-white/20 rounded-full p-4 text-white/80 hover:text-white hover:border-white transition shadow-lg"
            onClick={() => scrollBy(1)}
            aria-label="Next"
          >
            <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8l8 8-8 8" /></svg>
          </button>
        </>
      )}
      {/* Hide scrollbar cross-browser */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
} 