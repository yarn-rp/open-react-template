import Link from "next/link";
import PageIllustration from "@/components/page-illustration";
import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import CapabilityCard from "@/components/ui/CapabilityCard";
import SplitSection from "@/components/ui/SplitSection";
import PlatformsCarousel from "@/components/ui/PlatformsCarousel";

export const metadata = {
  title: "Task Management - Blueprint AI",
  description: "Blueprint AI integrates with your task management tools to create tickets, update status, assign tasks, and provide project overviews.",
};

export default function TaskManagement() {
  return (
    <>
      <PageIllustration multiple={true} />
      <div className="min-h-screen bg-gray-950">

      {/* Hero Section */}
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-12 md:py-20">
            <div className="pb-12 text-center md:pb-20">
              <h1
                className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
                data-aos="fade-up"
              >
                Task Management Integration
              </h1>
              <div className="mx-auto max-w-3xl">
                <p
                  className="mb-8 text-xl text-indigo-200/65"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  Blueprint AI seamlessly integrates with your task management tools to create tickets, 
                  update status, assign tasks, and provide comprehensive project overviews.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <SplitSection
        image={<svg className="w-64 h-64" viewBox="0 0 256 256" fill="none"><rect x="32" y="32" width="192" height="192" rx="32" fill="url(#a)"/><defs><linearGradient id="a" x1="32" y1="32" x2="224" y2="224" gradientUnits="userSpaceOnUse"><stop stopColor="#6366F1"/><stop offset="1" stopColor="#818CF8"/></linearGradient></defs></svg>}
        title="Create Tickets"
        description="Blueprint's AI agent listens to your meetings and automatically creates actionable tickets and tasks in your preferred project management tool. This ensures that no action item is missed, reduces manual note-taking, and allows your team to focus on the conversation while the AI handles the busywork. Every commitment and follow-up is captured in real time, increasing accountability and project momentum."
      />
      <SplitSection
        image={<svg className="w-64 h-64" viewBox="0 0 256 256" fill="none"><circle cx="128" cy="128" r="96" fill="url(#b)"/><defs><linearGradient id="b" x1="32" y1="32" x2="224" y2="224" gradientUnits="userSpaceOnUse"><stop stopColor="#34D399"/><stop offset="1" stopColor="#6EE7B7"/></linearGradient></defs></svg>}
        title="Update Status"
        description="As your team discusses progress, blockers, or completions, Blueprint updates the status of tickets and tasks automatically. This keeps your project boards up to date without context switching, eliminates the need for manual status reports, and gives everyone instant visibility into what’s moving forward and what needs attention."
        reverse
      />
      <SplitSection
        image={<svg className="w-64 h-64" viewBox="0 0 256 256" fill="none"><rect x="64" y="64" width="128" height="128" rx="24" fill="url(#c)"/><defs><linearGradient id="c" x1="64" y1="64" x2="192" y2="192" gradientUnits="userSpaceOnUse"><stop stopColor="#A78BFA"/><stop offset="1" stopColor="#C4B5FD"/></linearGradient></defs></svg>}
        title="Assign Tasks"
        description="Blueprint intelligently assigns tasks to the right team members based on their roles, workload, and expertise. This reduces ambiguity, ensures fair distribution of work, and helps new action items land with the right owner instantly—so nothing falls through the cracks and everyone knows their next steps."
      />
      <SplitSection
        image={<svg className="w-64 h-64" viewBox="0 0 256 256" fill="none"><circle cx="128" cy="128" r="112" fill="url(#d)"/><defs><linearGradient id="d" x1="16" y1="16" x2="240" y2="240" gradientUnits="userSpaceOnUse"><stop stopColor="#FBBF24"/><stop offset="1" stopColor="#FDE68A"/></linearGradient></defs></svg>}
        title="Project Overview"
        description="During and after meetings, Blueprint can provide a comprehensive project overview—summarizing progress, surfacing blockers, and highlighting key milestones. This empowers your team with real-time insights, keeps everyone aligned, and makes it easy to share updates with stakeholders without extra effort."
        reverse
      />

      {/* Supported Platforms */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">Supported Platforms</h2>
            <p className="text-gray-300">
              Blueprint works with the most popular task management tools. Effortlessly connect your favorite platforms and let the AI handle the details.
            </p>
          </div>
          <PlatformsCarousel />
        </div>
      </section>

      </div>
    </>
  );
} 