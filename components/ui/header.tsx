"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import Logo from "./logo";

export default function Header() {
  const [isIntegrationsOpen, setIsIntegrationsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileIntegrationsOpen, setIsMobileIntegrationsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsIntegrationsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle scroll-based visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show header when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } 
      // Hide header when scrolling down and not at the top
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Handle scroll to target after navigation
  useEffect(() => {
    // Check if we have a hash in the URL (e.g., /#how-it-works)
    if (pathname === '/' && typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash) {
        const targetId = hash.substring(1); // Remove '#'
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          // Wait a bit for the page to fully load
          setTimeout(() => {
            // Calculate offset for floating header
            const headerHeight = 56;
            const headerPadding = 20;
            const additionalOffset = 20;
            const totalOffset = headerHeight + headerPadding + additionalOffset;
            
            // Get target position and apply offset
            const targetPosition = targetElement.offsetTop - totalOffset;
            
            // Smooth scroll to target with offset
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }, 100);
        }
      }
    }
  }, [pathname]);

  // Close mobile menu when clicking on a link
  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
    setIsMobileIntegrationsOpen(false);
  };

  // Smooth scroll to anchor
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only handle same-page anchors
    if (href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.substring(2); // Remove '/#'
      
      // If we're not on the main page, navigate there first
      if (pathname !== '/') {
        router.push(href);
        return;
      }
      
      // If we're already on the main page, scroll to target
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Close mobile menu if open
        setIsMobileMenuOpen(false);
        setIsMobileIntegrationsOpen(false);
        
        // Calculate offset for floating header (header height + padding)
        const headerHeight = 56; // h-14 = 56px
        const headerPadding = 20; // mt-2 md:mt-5 (using larger value for safety)
        const additionalOffset = 20; // Extra padding for visual comfort
        const totalOffset = headerHeight + headerPadding + additionalOffset;
        
        // Get target position and apply offset
        const targetPosition = targetElement.offsetTop - totalOffset;
        
        // Smooth scroll to target with offset
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const integrations = [
    {
      name: "Task Management",
      href: "/integrations?category=task-management",
      description: "Manage projects and tasks efficiently"
    },
    {
      name: "Calendars",
      href: "/integrations?category=calendars", 
      description: "Sync and manage your calendar"
    },
    {
      name: "Meeting Platforms",
      href: "/integrations?category=meeting-platforms",
      description: "Connect with video conferencing tools"
    }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative mt-2 md:mt-5">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop navigation links */}
          <ul className="hidden md:flex flex-1 items-center justify-end gap-3">
            <li>
              <Link
                href="/#how-it-works"
                onClick={(e) => handleAnchorClick(e, '/#how-it-works')}
                className="btn-sm relative bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
              >
                Features
              </Link>
            </li>
            
            {/* Integrations Dropdown */}
            <li ref={dropdownRef} className="relative">
              <button
                onClick={() => setIsIntegrationsOpen(!isIntegrationsOpen)}
                className="btn-sm relative bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] flex items-center gap-1"
              >
                Integrations
                <svg 
                  className={`w-4 h-4 transition-transform ${isIntegrationsOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Desktop Dropdown Menu */}
              {isIntegrationsOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-sm rounded-2xl border border-gray-800 shadow-xl z-50">
                  <div className="p-4">
                    <div className="grid gap-3">
                      {integrations.map((integration) => (
                        <Link
                          key={integration.name}
                          href={integration.href}
                          className="flex flex-col p-3 rounded-lg hover:bg-gray-800/50 transition-colors group"
                          onClick={() => setIsIntegrationsOpen(false)}
                        >
                          <span className="text-gray-200 font-medium group-hover:text-white transition-colors">
                            {integration.name}
                          </span>
                          <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                            {integration.description}
                          </span>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-800">
                      <Link
                        href="/integrations"
                        className="block text-center text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors"
                        onClick={() => setIsIntegrationsOpen(false)}
                      >
                        View All Integrations →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </li>
            
            <li>
              <Link
                href="/#video"
                onClick={(e) => handleAnchorClick(e, '/#video')}
                className="btn-sm relative bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
              >
                Demo
              </Link>
            </li>
            <li>
              <Link
                href="https://calendly.com/blueprint-demo"
                className="btn-sm bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
              >
                Schedule Demo
              </Link>
            </li>
          </ul>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 text-white hover:text-gray-200 transition-colors relative z-10 bg-gray-800/50 rounded-lg border border-gray-700/50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile navigation menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-gray-900/95 backdrop-blur-sm rounded-2xl border border-gray-800 shadow-xl z-50">
            <nav className="px-4 py-6">
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/#how-it-works"
                    onClick={(e) => handleAnchorClick(e, '/#how-it-works')}
                    className="block text-gray-300 hover:text-white transition-colors py-2"
                  >
                    Features
                  </Link>
                </li>
                
                {/* Mobile Integrations Section */}
                <li>
                  <div className="space-y-2">
                    <button
                      onClick={() => setIsMobileIntegrationsOpen(!isMobileIntegrationsOpen)}
                      className="flex items-center justify-between w-full text-gray-300 hover:text-white transition-colors py-2"
                    >
                      Integrations
                      <svg 
                        className={`w-4 h-4 transition-transform ${isMobileIntegrationsOpen ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isMobileIntegrationsOpen && (
                      <div className="space-y-1 pl-4">
                        {integrations.map((integration) => (
                          <Link
                            key={integration.name}
                            href={integration.href}
                            className="block text-gray-300 hover:text-white transition-colors py-2 text-sm"
                            onClick={handleMobileLinkClick}
                          >
                            {integration.name}
                          </Link>
                        ))}
                        <Link
                          href="/integrations"
                          className="block text-indigo-400 hover:text-indigo-300 transition-colors py-2 text-sm font-medium"
                          onClick={handleMobileLinkClick}
                        >
                          View All Integrations →
                        </Link>
                      </div>
                    )}
                  </div>
                </li>
                
                <li>
                  <Link
                    href="/#video"
                    onClick={(e) => handleAnchorClick(e, '/#video')}
                    className="block text-gray-300 hover:text-white transition-colors py-2"
                  >
                    Demo
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://calendly.com/blueprint-demo"
                    className="block bg-linear-to-t from-indigo-600 to-indigo-500 text-white py-3 px-4 rounded-lg text-center font-medium hover:from-indigo-700 hover:to-indigo-600 transition-all"
                    onClick={handleMobileLinkClick}
                  >
                    Schedule Demo
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
