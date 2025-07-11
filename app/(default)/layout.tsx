"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "@/components/ui/footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: false, // Enable on all devices including mobile
      duration: 600,
      easing: "ease-out-sine",
      offset: 50, // Reduce offset for mobile
      delay: 0,
    });
  });

  return (
    <>
      <main className="relative flex grow flex-col">{children}</main>
      <Footer />
    </>
  );
}
