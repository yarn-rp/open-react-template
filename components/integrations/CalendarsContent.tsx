import Link from "next/link";
import Image from "next/image";
import CapabilityCard from "@/components/ui/CapabilityCard";
import SplitSection from "@/components/ui/SplitSection";
import PlatformsCarousel from "@/components/ui/PlatformsCarousel";
import CalendarsIntegrationsGrid from "./CalendarsIntegrationsGrid";
import Card from "@/components/Card";

export default function CalendarsContent() {
  return (
    <>
      {/* Capabilities */}
      <SplitSection
        image={
          <Card className="w-full max-w-2xl h-full">
            <div className="relative w-full aspect-square min-h-[220px] sm:min-h-[320px] rounded-2xl overflow-hidden">
              <Image 
                src="/images/calendars-cards/create-event.png" 
                alt="AI voice assistant creating calendar events" 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{objectFit: 'cover'}} 
              />
            </div>
          </Card>
        }
        title="Create Events"
        description="Blueprint's AI agent listens to your meetings and automatically creates calendar events based on discussions, follow-up needs, and action items. This ensures that important meetings and deadlines are never missed, reduces manual scheduling, and keeps your calendar organized without any extra effort."
      />
      <SplitSection
        image={
          <Card className="w-full max-w-2xl h-full">
            <div className="relative w-full aspect-square min-h-[220px] sm:min-h-[320px] rounded-2xl overflow-hidden">
              <Image 
                src="/images/calendars-cards/edit-event.png" 
                alt="AI voice assistant updating calendar events" 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{objectFit: 'cover'}} 
              />
            </div>
          </Card>
        }
        title="Update Events"
        description="As your team discusses changes to meeting times, attendees, or agenda items, Blueprint updates calendar events automatically. This keeps your schedule current without context switching, eliminates the need for manual calendar management, and ensures everyone stays informed of the latest changes."
        reverse
      />
      <SplitSection
        image={
          <Card className="w-full max-w-2xl h-full">
            <div className="relative w-full aspect-square min-h-[220px] sm:min-h-[320px] rounded-2xl overflow-hidden">
              <Image 
                src="/images/calendars-cards/schedule-meetings.png" 
                alt="AI voice assistant scheduling meetings" 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{objectFit: 'cover'}} 
              />
            </div>
          </Card>
        }
        title="Schedule Meetings"
        description="Blueprint intelligently finds optimal meeting times by checking team availability across all connected calendars. This reduces scheduling conflicts, ensures maximum attendance, and helps teams focus on productive meetings rather than the logistics of finding a time that works for everyone."
      />
      <SplitSection
        image={
          <Card className="w-full max-w-2xl h-full">
            <div className="relative w-full aspect-square min-h-[220px] sm:min-h-[320px] rounded-2xl overflow-hidden">
              <Image 
                src="/images/calendars-cards/manage-availability.png" 
                alt="AI voice assistant managing team availability" 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{objectFit: 'cover'}} 
              />
            </div>
          </Card>
        }
        title="Manage Availability"
        description="During and after meetings, Blueprint can provide comprehensive calendar insights—showing team availability, identifying scheduling patterns, and highlighting potential conflicts. This empowers your team with real-time scheduling intelligence and makes calendar management effortless."
        reverse
      />

      <CalendarsIntegrationsGrid />
    </>
  );
} 