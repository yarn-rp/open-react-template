"use client";

import React, { useRef, useEffect } from "react";
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

const TOP_SCROLL_SPEED = 0.6; // 1.2x speed (0.5 * 1.2)
const BOTTOM_SCROLL_SPEED = 0.375; // 0.75x speed (0.5 * 0.75)
const PARALLAX_RATIO = 0.5; // How much vertical scroll affects horizontal scroll
const PARALLAX_TIMEOUT = 400; // ms to resume auto-scroll after vertical scroll

export default function ParallaxLogoStrip() {
  const topScrollRef = useRef<HTMLDivElement>(null);
  const bottomScrollRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef<number>(0);
  const parallaxActive = useRef<boolean>(false);
  const parallaxTimeout = useRef<NodeJS.Timeout | null>(null);
  const animationRef = useRef<number | null>(null);

  // Auto-scroll and parallax logic
  useEffect(() => {
    let running = true;
    let lastTimestamp = performance.now();

    function autoScrollLoop(now: number) {
      if (!running) return;
      if (!parallaxActive.current) {
        // Top strip scrolling
        if (topScrollRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = topScrollRef.current;
          const singleListWidth = scrollWidth / 2;
          let next = scrollLeft + TOP_SCROLL_SPEED;
          if (next >= singleListWidth) {
            topScrollRef.current.scrollLeft = 0;
            next = TOP_SCROLL_SPEED;
          }
          topScrollRef.current.scrollTo({ left: next, behavior: "auto" });
        }
        
        // Bottom strip scrolling
        if (bottomScrollRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = bottomScrollRef.current;
          const singleListWidth = scrollWidth / 2;
          let next = scrollLeft + BOTTOM_SCROLL_SPEED;
          if (next >= singleListWidth) {
            bottomScrollRef.current.scrollLeft = 0;
            next = BOTTOM_SCROLL_SPEED;
          }
          bottomScrollRef.current.scrollTo({ left: next, behavior: "auto" });
        }
      }
      animationRef.current = requestAnimationFrame(autoScrollLoop);
    }
    animationRef.current = requestAnimationFrame(autoScrollLoop);

    // Parallax on vertical scroll
    function onScroll() {
      if (!topScrollRef.current || !bottomScrollRef.current) return;
      parallaxActive.current = true;
      const deltaY = window.scrollY - lastScrollY.current;
      lastScrollY.current = window.scrollY;
      
      // Move top strip horizontally proportional to vertical scroll
      const topScrollData = topScrollRef.current;
      const topSingleListWidth = topScrollData.scrollWidth / 2;
      let topNext = topScrollData.scrollLeft + deltaY * PARALLAX_RATIO;
      if (topNext < 0) topNext = topSingleListWidth + topNext;
      if (topNext >= topSingleListWidth) topNext = topNext - topSingleListWidth;
      topScrollData.scrollTo({ left: topNext, behavior: "auto" });
      
      // Move bottom strip horizontally proportional to vertical scroll
      const bottomScrollData = bottomScrollRef.current;
      const bottomSingleListWidth = bottomScrollData.scrollWidth / 2;
      let bottomNext = bottomScrollData.scrollLeft + deltaY * PARALLAX_RATIO;
      if (bottomNext < 0) bottomNext = bottomSingleListWidth + bottomNext;
      if (bottomNext >= bottomSingleListWidth) bottomNext = bottomNext - bottomSingleListWidth;
      bottomScrollData.scrollTo({ left: bottomNext, behavior: "auto" });
      
      // Resume auto-scroll after timeout
      if (parallaxTimeout.current) clearTimeout(parallaxTimeout.current);
      parallaxTimeout.current = setTimeout(() => {
        parallaxActive.current = false;
      }, PARALLAX_TIMEOUT);
    }
    window.addEventListener("scroll", onScroll);
    return () => {
      running = false;
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener("scroll", onScroll);
      if (parallaxTimeout.current) clearTimeout(parallaxTimeout.current);
    };
  }, []);

  return (
    <div className="w-full overflow-hidden select-none">
      {/* Top strip - faster speed */}
      <div
        ref={topScrollRef}
        className="flex items-center gap-12 py-8 px-8 whitespace-nowrap"
        style={{ scrollBehavior: "auto" }}
      >
        {/* Duplicate logos for seamless infinite scroll */}
        {[...LOGOS, ...LOGOS].map((src, i) => (
          <div key={`top-${i}`} className="flex items-center justify-center h-20 w-32 flex-shrink-0 inline-block">
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
      
      {/* Bottom strip - slower speed */}
      <div
        ref={bottomScrollRef}
        className="flex items-center gap-12 py-8 px-8 whitespace-nowrap"
        style={{ scrollBehavior: "auto" }}
      >
        {/* Duplicate logos for seamless infinite scroll */}
        {[...LOGOS, ...LOGOS].map((src, i) => (
          <div key={`bottom-${i}`} className="flex items-center justify-center h-20 w-32 flex-shrink-0 inline-block">
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
    </div>
  );
} 