"use client";

import Link from "next/link";
import Image from "next/image";
import Spotlight from "@/components/spotlight";
import { useRef, useEffect, useState } from "react";
import IntegrationsCategoriesGrid from "./IntegrationsCategoriesGrid";

const INTEGRATIONS = [
  {
    name: "Google Calendar",
    logo: "/images/integrations/google-calendar.svg",
    showName: true,
  },
  {
    name: "Zoom",
    logo: "/images/integrations/zoom.svg",
    showName: false,
  },
  {
    name: "Google Meet",
    logo: "/images/integrations/google-meet.svg",
    showName: false,
  },
  {
    name: "Microsoft Teams",
    logo: "/images/integrations/microsoft-teams.svg",
    showName: true,
  },
  {
    name: "Linear",
    logo: "/images/integrations/linear.svg",
    showName: false,
  },
  {
    name: "Jira",
    logo: "/images/integrations/jira.png",
    showName: false,
  },
  {
    name: "Asana",
    logo: "/images/integrations/asana.svg",
    showName: false,
  },
  {
    name: "Monday",
    logo: "/images/integrations/monday.png",
    showName: false,
  },
  {
    name: "Microsoft Outlook",
    logo: "/images/integrations/microsoft-outlook.svg",
    showName: true,
  },
  {
    name: "Notion",
    logo: "/images/integrations/notion.png",
    showName: false,
  },
];

// Split integrations for top and bottom strips
const TOP_INTEGRATIONS = INTEGRATIONS.slice(0, Math.ceil(INTEGRATIONS.length / 2));
const BOTTOM_INTEGRATIONS = INTEGRATIONS.slice(Math.ceil(INTEGRATIONS.length / 2));

export default function Platforms() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const topScrollRef = useRef<HTMLDivElement>(null);
  const bottomScrollRef = useRef<HTMLDivElement>(null);
  const topIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const bottomIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Set initial positions and infinite auto-scroll logic for top row (left to right)
  useEffect(() => {
    const setInitialPosition = () => {
      if (topScrollRef.current) {
        const { scrollWidth, clientWidth } = topScrollRef.current;
        if (scrollWidth > 0) {
          const singleListWidth = scrollWidth / 2;
          // Set initial position to 15% of the single list width
          const initialPosition = singleListWidth * 0.15;
          topScrollRef.current.scrollLeft = initialPosition;
          setIsLoaded(true);
        }
      }
    };

    // Try immediately
    setInitialPosition();
    
    // If not ready, try again with a delay
    const timer = setTimeout(setInitialPosition, 200);
    
    // Also try when window loads
    const handleLoad = () => {
      setTimeout(setInitialPosition, 100);
    };
    window.addEventListener('load', handleLoad);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  useEffect(() => {
    // Enable auto-scroll on both desktop and mobile
    topIntervalRef.current = setInterval(() => {
      if (topScrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = topScrollRef.current;
        const singleListWidth = scrollWidth / 2;
        let next = scrollLeft + (isMobile ? 1.2 : 2.4); // Slower speed on mobile
        if (next >= singleListWidth) {
          topScrollRef.current.scrollLeft = 0;
          next = isMobile ? 1.2 : 2.4;
        }
        topScrollRef.current.scrollTo({ left: next, behavior: "auto" });
      }
    }, isMobile ? 30 : 20); // Slower interval on mobile for better performance
    
    return () => {
      if (topIntervalRef.current) clearInterval(topIntervalRef.current);
    };
  }, [isMobile]);

  // Set initial positions and infinite auto-scroll logic for bottom row (right to left)
  useEffect(() => {
    const setInitialPosition = () => {
      if (bottomScrollRef.current) {
        const { scrollWidth, clientWidth } = bottomScrollRef.current;
        if (scrollWidth > 0) {
          const singleListWidth = scrollWidth / 2;
          // Set initial position to the end of the single list width (start from the end)
          const initialPosition = singleListWidth;
          bottomScrollRef.current.scrollLeft = initialPosition;
        }
      }
    };

    // Try immediately
    setInitialPosition();
    
    // If not ready, try again with a delay
    const timer = setTimeout(setInitialPosition, 200);
    
    // Also try when window loads
    const handleLoad = () => {
      setTimeout(setInitialPosition, 100);
    };
    window.addEventListener('load', handleLoad);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  useEffect(() => {
    // Enable auto-scroll on both desktop and mobile
    // Delay the start of auto-scroll to ensure initial position is set
    const startAutoScroll = setTimeout(() => {
      bottomIntervalRef.current = setInterval(() => {
        if (bottomScrollRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = bottomScrollRef.current;
          const singleListWidth = scrollWidth / 2;
          let next = scrollLeft - (isMobile ? 0.75 : 1.5); // Slower speed on mobile
          if (next <= 0) {
            bottomScrollRef.current.scrollLeft = singleListWidth;
            next = singleListWidth - (isMobile ? 0.75 : 1.5);
          }
          bottomScrollRef.current.scrollTo({ left: next, behavior: "auto" });
        }
      }, isMobile ? 30 : 20); // Slower interval on mobile for better performance
    }, isMobile ? 300 : 500); // Shorter delay on mobile
    
    return () => {
      clearTimeout(startAutoScroll);
      if (bottomIntervalRef.current) clearInterval(bottomIntervalRef.current);
    };
  }, [isMobile]);



  return (
    
    <section className="pt-2 md:pt-3">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-2 md:pb-4">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-2 text-center md:pb-3">
            <div className="inline-flex items-center gap-3 pb-1 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Integrations
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-1 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Works with your existing tools
            </h2>
            <p className="text-lg text-indigo-200/65">
              Blueprint seamlessly integrates with the platforms your team already uses, so you can get started immediately without changing your workflow.
            </p>
          </div>
        </div>
      </div>
      {/* Animated Integrations Banner - FULL WIDTH */}
      <div 
        className="relative w-full overflow-hidden bg-transparent mt-20"
      >
        {/* Single row - left to right */}
        <div
          ref={topScrollRef}
          className="flex items-center gap-3 md:gap-8 py-6 md:py-8 overflow-x-auto md:overflow-hidden whitespace-nowrap scrollbar-hide"
          style={{ scrollBehavior: isMobile ? "smooth" : "auto" }}
        >
          {[...INTEGRATIONS, ...INTEGRATIONS, ...INTEGRATIONS, ...INTEGRATIONS].map((integration, index) => (
            <div
              key={`top-${index}`}
              className="flex items-center justify-center bg-gray-800/40 rounded-lg border border-gray-700/30 flex-shrink-0 w-40 md:w-64 h-24 md:h-36 p-2 md:p-4"
            >
              <div className={`flex items-center ${integration.showName ? 'gap-2 md:gap-3 w-full' : ''}`}>
                <Image
                  src={integration.logo}
                  alt={integration.name + " logo"}
                  width={integration.logo.includes('.png') ? 160 : 0}
                  height={integration.logo.includes('.png') ? 160 : 0}
                  className={`object-contain transition-all duration-300 ${integration.showName ? 'w-auto h-auto max-w-[40%] md:max-w-[40%] max-h-full flex-shrink-0' : 'w-auto h-auto max-w-full max-h-full'}`}
                  onError={(e) => {
                    console.error(`Failed to load image: ${integration.logo}`);
                    // You could set a fallback image here if needed
                  }}
                  onLoad={() => {
                    console.log(`Successfully loaded: ${integration.logo}`);
                  }}
                />
                {integration.showName && <h5 className="text-xs md:text-base font-semibold text-gray-100 flex-1 leading-tight">{integration.name}</h5>}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex justify-center mt-12 mb-16 md:mb-24">
          <Link
            href="/integrations"
            className="btn group bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white text-base font-medium rounded-full px-8 py-3 shadow hover:bg-indigo-700 transition"
          >
            View All Integrations
          </Link>
        </div>
      </div>
    </section>
  );
} 