import Link from "next/link";
import Image from "next/image";
import CapabilityCard from "@/components/ui/CapabilityCard";
import SplitSection from "@/components/ui/SplitSection";
import PlatformsCarousel from "@/components/ui/PlatformsCarousel";
import MeetingPlatformsIntegrationsGrid from "./MeetingPlatformsIntegrationsGrid";

export default function MeetingPlatformsContent() {
  return (
    <>
      {/* Capabilities */}
      <SplitSection
        image={<svg className="w-64 h-64" viewBox="0 0 256 256" fill="none"><rect x="32" y="32" width="192" height="192" rx="32" fill="url(#a)"/><defs><linearGradient id="a" x1="32" y1="32" x2="224" y2="224" gradientUnits="userSpaceOnUse"><stop stopColor="#6366F1"/><stop offset="1" stopColor="#818CF8"/></linearGradient></defs></svg>}
        title="Join Automatically"
        description="Blueprint's AI agent automatically joins your meetings based on your calendar and meeting invitations. This ensures the AI is always present when needed, eliminates manual meeting management, and allows you to focus on the conversation while the AI handles the technical aspects of joining and participating."
      />
      <SplitSection
        image={<svg className="w-64 h-64" viewBox="0 0 256 256" fill="none"><circle cx="128" cy="128" r="96" fill="url(#b)"/><defs><linearGradient id="b" x1="32" y1="32" x2="224" y2="224" gradientUnits="userSpaceOnUse"><stop stopColor="#34D399"/><stop offset="1" stopColor="#6EE7B7"/></linearGradient></defs></svg>}
        title="Listen & Understand"
        description="The AI listens to the conversation, understands context, and identifies action items in real-time. This ensures that no important details are missed, reduces the need for manual note-taking, and provides intelligent insights that help teams stay focused on productive discussions."
        reverse
      />
      <SplitSection
        image={<svg className="w-64 h-64" viewBox="0 0 256 256" fill="none"><rect x="64" y="64" width="128" height="128" rx="24" fill="url(#c)"/><defs><linearGradient id="c" x1="64" y1="64" x2="192" y2="192" gradientUnits="userSpaceOnUse"><stop stopColor="#A78BFA"/><stop offset="1" stopColor="#C4B5FD"/></linearGradient></defs></svg>}
        title="Participate Naturally"
        description="Blueprint speaks naturally during meetings, providing insights, asking clarifying questions, and taking action when needed. This creates a seamless collaboration experience where the AI feels like a natural team member, enhancing productivity without disrupting the flow of conversation."
      />
      <SplitSection
        image={<svg className="w-64 h-64" viewBox="0 0 256 256" fill="none"><circle cx="128" cy="128" r="112" fill="url(#d)"/><defs><linearGradient id="d" x1="16" y1="16" x2="240" y2="240" gradientUnits="userSpaceOnUse"><stop stopColor="#FBBF24"/><stop offset="1" stopColor="#FDE68A"/></linearGradient></defs></svg>}
        title="Cross-Platform Support"
        description="Whether you're using Zoom, Google Meet, Microsoft Teams, or any other meeting platform, Blueprint adapts seamlessly. This universal compatibility ensures that your team can continue using their preferred tools while gaining the benefits of AI assistance, without requiring any changes to existing workflows."
        reverse
      />

      <MeetingPlatformsIntegrationsGrid />
    </>
  );
} 