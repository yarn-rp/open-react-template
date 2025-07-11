import Link from "next/link";
import Image from "next/image";
import CapabilityCard from "@/components/ui/CapabilityCard";
import SplitSection from "@/components/ui/SplitSection";
import PlatformsCarousel from "@/components/ui/PlatformsCarousel";
import MeetingPlatformsIntegrationsGrid from "./MeetingPlatformsIntegrationsGrid";
import Card from "@/components/Card";

export default function MeetingPlatformsContent() {
  return (
    <>
      {/* Capabilities */}
      <SplitSection
        image={
          <Card className="w-full max-w-2xl h-full">
            <div className="relative w-full aspect-square min-h-[220px] sm:min-h-[320px] rounded-2xl overflow-hidden">
              <Image 
                src="/images/meeting-platforms-cards/join-automatically.png" 
                alt="AI voice assistant joining meetings automatically" 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{objectFit: 'cover'}} 
              />
            </div>
          </Card>
        }
        title="Join Automatically"
        description="Blueprint's AI agent automatically joins your meetings based on your calendar and meeting invitations. This ensures the AI is always present when needed, eliminates manual meeting management, and allows you to focus on the conversation while the AI handles the technical aspects of joining and participating."
      />
      <SplitSection
        image={
          <Card className="w-full max-w-2xl h-full">
            <div className="relative w-full aspect-square min-h-[220px] sm:min-h-[320px] rounded-2xl overflow-hidden">
              <Image 
                src="/images/meeting-platforms-cards/listen-understand.png" 
                alt="AI voice assistant listening and understanding conversations" 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{objectFit: 'cover'}} 
              />
            </div>
          </Card>
        }
        title="Listen & Understand"
        description="The AI listens to the conversation, understands context, and identifies action items in real-time. This ensures that no important details are missed, reduces the need for manual note-taking, and provides intelligent insights that help teams stay focused on productive discussions."
        reverse
      />
      <SplitSection
        image={
          <Card className="w-full max-w-2xl h-full">
            <div className="relative w-full aspect-square min-h-[220px] sm:min-h-[320px] rounded-2xl overflow-hidden">
              <Image 
                src="/images/meeting-platforms-cards/participate-naturally.png" 
                alt="AI voice assistant participating naturally in meetings" 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{objectFit: 'cover'}} 
              />
            </div>
          </Card>
        }
        title="Participate Naturally"
        description="Blueprint speaks naturally during meetings, providing insights, asking clarifying questions, and taking action when needed. This creates a seamless collaboration experience where the AI feels like a natural team member, enhancing productivity without disrupting the flow of conversation."
      />
      <SplitSection
        image={
          <Card className="w-full max-w-2xl h-full">
            <div className="relative w-full aspect-square min-h-[220px] sm:min-h-[320px] rounded-2xl overflow-hidden">
              <Image 
                src="/images/meeting-platforms-cards/cross-platform-support.png" 
                alt="AI voice assistant supporting multiple meeting platforms" 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{objectFit: 'cover'}} 
              />
            </div>
          </Card>
        }
        title="Cross-Platform Support"
        description="Whether you're using Zoom, Google Meet, Microsoft Teams, or any other meeting platform, Blueprint adapts seamlessly. This universal compatibility ensures that your team can continue using their preferred tools while gaining the benefits of AI assistance, without requiring any changes to existing workflows."
        reverse
      />

      <MeetingPlatformsIntegrationsGrid />
    </>
  );
} 