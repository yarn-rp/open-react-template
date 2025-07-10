import Link from "next/link";
import Image from "next/image";
import CapabilityCard from "@/components/ui/CapabilityCard";
import SplitSection from "@/components/ui/SplitSection";
import PlatformsCarousel from "@/components/ui/PlatformsCarousel";
import CalendarsIntegrationsGrid from "./CalendarsIntegrationsGrid";

export default function CalendarsContent() {
  return (
    <>
      {/* Capabilities */}
      <SplitSection
        image={<svg className="w-64 h-64" viewBox="0 0 256 256" fill="none"><rect x="32" y="32" width="192" height="192" rx="32" fill="url(#a)"/><defs><linearGradient id="a" x1="32" y1="32" x2="224" y2="224" gradientUnits="userSpaceOnUse"><stop stopColor="#3B82F6"/><stop offset="1" stopColor="#60A5FA"/></linearGradient></defs></svg>}
        title="Create Events"
        description="Blueprint's AI agent listens to your meetings and automatically creates calendar events based on discussions, follow-up needs, and action items. This ensures that important meetings and deadlines are never missed, reduces manual scheduling, and keeps your calendar organized without any extra effort."
      />
      <SplitSection
        image={<svg className="w-64 h-64" viewBox="0 0 256 256" fill="none"><circle cx="128" cy="128" r="96" fill="url(#b)"/><defs><linearGradient id="b" x1="32" y1="32" x2="224" y2="224" gradientUnits="userSpaceOnUse"><stop stopColor="#10B981"/><stop offset="1" stopColor="#34D399"/></linearGradient></defs></svg>}
        title="Update Events"
        description="As your team discusses changes to meeting times, attendees, or agenda items, Blueprint updates calendar events automatically. This keeps your schedule current without context switching, eliminates the need for manual calendar management, and ensures everyone stays informed of the latest changes."
        reverse
      />
      <SplitSection
        image={<svg className="w-64 h-64" viewBox="0 0 256 256" fill="none"><rect x="64" y="64" width="128" height="128" rx="24" fill="url(#c)"/><defs><linearGradient id="c" x1="64" y1="64" x2="192" y2="192" gradientUnits="userSpaceOnUse"><stop stopColor="#8B5CF6"/><stop offset="1" stopColor="#A78BFA"/></linearGradient></defs></svg>}
        title="Schedule Meetings"
        description="Blueprint intelligently finds optimal meeting times by checking team availability across all connected calendars. This reduces scheduling conflicts, ensures maximum attendance, and helps teams focus on productive meetings rather than the logistics of finding a time that works for everyone."
      />
      <SplitSection
        image={<svg className="w-64 h-64" viewBox="0 0 256 256" fill="none"><circle cx="128" cy="128" r="112" fill="url(#d)"/><defs><linearGradient id="d" x1="16" y1="16" x2="240" y2="240" gradientUnits="userSpaceOnUse"><stop stopColor="#F59E0B"/><stop offset="1" stopColor="#FBBF24"/></linearGradient></defs></svg>}
        title="Manage Availability"
        description="During and after meetings, Blueprint can provide comprehensive calendar insights—showing team availability, identifying scheduling patterns, and highlighting potential conflicts. This empowers your team with real-time scheduling intelligence and makes calendar management effortless."
        reverse
      />

      <CalendarsIntegrationsGrid />
    </>
  );
} 