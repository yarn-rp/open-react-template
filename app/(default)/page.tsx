export const metadata = {
  title: "Blueprint - AI Voice Agents That Join and Speak in Your Meetings",
  description: "Blueprint builds custom AI teammates that show up, understand, and speak during your meetings — plus handle your calendar and tasks. Human, not robotic.",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import IntegrationsCategoriesGrid from "@/components/IntegrationsCategoriesGrid";
import Platforms from "@/components/platforms";
import Features from "@/components/features";
import Cta from "@/components/cta";
import ParallaxLogoStrip from "@/components/ui/ParallaxLogoStrip";


export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      <Platforms />
      <Features />
    </>
  );
}
