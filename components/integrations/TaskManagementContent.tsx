import Link from "next/link";
import Image from "next/image";
import CapabilityCard from "@/components/ui/CapabilityCard";
import SplitSection from "@/components/ui/SplitSection";
import PlatformsCarousel from "@/components/ui/PlatformsCarousel";
import TaskManagementIntegrationsGrid from "./TaskManagementIntegrationsGrid";
import Card from "@/components/Card";

export default function TaskManagementContent() {
  return (
    <>
      {/* Capabilities */}
      <SplitSection
        image={
          <Card className="w-full max-w-2xl h-full">
            <div className="relative w-full aspect-square min-h-[220px] sm:min-h-[320px] rounded-2xl overflow-hidden">
              <Image 
                src="/images/task-management-cards/create-tickets.png" 
                alt="AI voice assistant creating and managing tasks" 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{objectFit: 'cover'}} 
              />
            </div>
          </Card>
        }
        title="Create Tickets"
        description="Blueprint's AI agent listens to your meetings and automatically creates actionable tickets and tasks in your preferred project management tool. This ensures that no action item is missed, reduces manual note-taking, and allows your team to focus on the conversation while the AI handles the busywork. Every commitment and follow-up is captured in real time, increasing accountability and project momentum."
      />
      <SplitSection
        image={
          <Card className="w-full max-w-2xl h-full">
            <div className="relative w-full aspect-square min-h-[220px] sm:min-h-[320px] rounded-2xl overflow-hidden">
              <Image 
                src="/images/task-management-cards/update-status.png" 
                alt="AI voice assistant updating task status" 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{objectFit: 'cover'}} 
              />
            </div>
          </Card>
        }
        title="Update Status"
        description="As your team discusses progress, blockers, or completions, Blueprint updates the status of tickets and tasks automatically. This keeps your project boards up to date without context switching, eliminates the need for manual status reports, and gives everyone instant visibility into what's moving forward and what needs attention."
        reverse
      />
      <SplitSection
        image={
          <Card className="w-full max-w-2xl h-full">
            <div className="relative w-full aspect-square min-h-[220px] sm:min-h-[320px] rounded-2xl overflow-hidden">
              <Image 
                src="/images/task-management-cards/assign-tasks.png" 
                alt="AI voice assistant assigning tasks to team members" 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{objectFit: 'cover'}} 
              />
            </div>
          </Card>
        }
        title="Assign Tasks"
        description="Blueprint intelligently assigns tasks to the right team members based on their roles, workload, and expertise. This reduces ambiguity, ensures fair distribution of work, and helps new action items land with the right owner instantly—so nothing falls through the cracks and everyone knows their next steps."
      />
      <SplitSection
        image={
          <Card className="w-full max-w-2xl h-full">
            <div className="relative w-full aspect-square min-h-[220px] sm:min-h-[320px] rounded-2xl overflow-hidden">
              <Image 
                src="/images/task-management-cards/project-overview.png" 
                alt="AI voice assistant providing project overview" 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{objectFit: 'cover'}} 
              />
            </div>
          </Card>
        }
        title="Project Overview"
        description="During and after meetings, Blueprint can provide a comprehensive project overview—summarizing progress, surfacing blockers, and highlighting key milestones. This empowers your team with real-time insights, keeps everyone aligned, and makes it easy to share updates with stakeholders without extra effort."
        reverse
      />

      <TaskManagementIntegrationsGrid />
    </>
  );
} 