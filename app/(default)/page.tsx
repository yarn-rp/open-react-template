export const metadata = {
  title: "Blueprint - Get an AI Coworker, Ready to Join Every Call",
  description: "Build AI agents around your workflow—ones that join every call, speak up with insights, and turn talk into action.",
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
