"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import SegmentedTabs from "@/components/ui/SegmentedTabs";
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import TaskManagementContent from "@/components/integrations/TaskManagementContent";
import CalendarsContent from "@/components/integrations/CalendarsContent";
import MeetingPlatformsContent from "@/components/integrations/MeetingPlatformsContent";

type IntegrationType = "task-management" | "calendars" | "meeting-platforms";

const integrationOptions = [
  {
    id: "task-management" as IntegrationType,
    label: "Task Management",
  },
  {
    id: "calendars" as IntegrationType,
    label: "Calendars",
  },
  {
    id: "meeting-platforms" as IntegrationType,
    label: "Meeting Platforms",
  },
];

function IntegrationsContent() {
  const searchParams = useSearchParams();
  const [selectedIntegration, setSelectedIntegration] = useState<IntegrationType>("task-management");

  // Handle category parameter from URL
  useEffect(() => {
    const category = searchParams.get('category');
    if (category && ['task-management', 'calendars', 'meeting-platforms'].includes(category)) {
      setSelectedIntegration(category as IntegrationType);
    }
  }, [searchParams]);

  const renderSelectedComponent = () => {
    switch (selectedIntegration) {
      case "task-management":
        return <TaskManagementContent />;
      case "calendars":
        return <CalendarsContent />;
      case "meeting-platforms":
        return <MeetingPlatformsContent />;
      default:
        return <TaskManagementContent />;
    }
  };

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Integrations
              </span>
            </div>
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Works with your existing tools
            </h1>
            <p className="text-lg text-indigo-200/65">
              Blueprint seamlessly integrates with the platforms your team already uses, so you can get started immediately without changing your workflow.
            </p>
          </div>

          {/* Integration Type Segmented Tabs */}
          <div className="mx-auto max-w-2xl pb-12">
            <SegmentedTabs
              options={integrationOptions}
              selected={selectedIntegration}
              onSelect={id => setSelectedIntegration(id as IntegrationType)}
            />
          </div>

          {/* Selected Integration Content */}
          <div className="border-t border-gray-800/50 pt-12">
            {renderSelectedComponent()}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Integrations() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <IntegrationsContent />
    </Suspense>
  );
} 