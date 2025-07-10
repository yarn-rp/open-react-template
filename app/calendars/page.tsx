import Link from "next/link";
import PageIllustration from "@/components/page-illustration";
import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";

export const metadata = {
  title: "Calendar Integration - Blueprint AI",
  description: "Blueprint AI integrates with Google Calendar and Microsoft Outlook to create events, update schedules, and manage team availability.",
};

export default function Calendars() {
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
                  Calendar Integration
                </h1>
                <div className="mx-auto max-w-3xl">
                  <p
                    className="mb-8 text-xl text-indigo-200/65"
                    data-aos="fade-up"
                    data-aos-delay={200}
                  >
                    Blueprint AI seamlessly integrates with your calendar tools to create events, update schedules, manage availability, and coordinate team meetings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Capabilities */}
        <section className="relative">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
              {/* Section header */}
              <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
                <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
                  <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                    Key Capabilities
                  </span>
                </div>
                <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
                  Your AI assistant can perform these actions
                </h2>
                <p className="text-lg text-indigo-200/65">
                  Across all supported calendar platforms
                </p>
              </div>
              <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-4">
                <article>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                    <svg className="h-6 w-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white">Create Events</h3>
                  <p className="text-indigo-200/65">
                    Automatically create calendar events based on meeting discussions and follow-up needs.
                  </p>
                </article>
                <article>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/20">
                    <svg className="h-6 w-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white">Update Events</h3>
                  <p className="text-indigo-200/65">
                    Modify existing events, change times, add attendees, or update meeting details.
                  </p>
                </article>
                <article>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                    <svg className="h-6 w-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white">Schedule Meetings</h3>
                  <p className="text-indigo-200/65">
                    Find optimal meeting times by checking team availability and scheduling accordingly.
                  </p>
                </article>
                <article>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/20">
                    <svg className="h-6 w-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white">Manage Availability</h3>
                  <p className="text-indigo-200/65">
                    Check team member availability and suggest optimal meeting times for everyone.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>
        {/* Supported Platforms */}
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-white">Supported Platforms</h2>
              <p className="text-gray-300">
                Blueprint works with the most popular calendar applications
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-lg bg-gray-800 p-8 border border-gray-700">
                <div className="mb-6 flex items-center gap-4">
                  <div className="h-16 w-16 rounded bg-blue-500/20 flex items-center justify-center">
                    <svg className="h-8 w-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white">Google Calendar</h3>
                    <p className="text-gray-400">Most popular calendar platform</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-green-400"></div>
                    <p className="text-gray-300">Create and manage Google Calendar events</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-green-400"></div>
                    <p className="text-gray-300">Add attendees and send invitations</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-green-400"></div>
                    <p className="text-gray-300">Update event details and times</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-green-400"></div>
                    <p className="text-gray-300">Check team availability and suggest times</p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg bg-gray-800 p-8 border border-gray-700">
                <div className="mb-6 flex items-center gap-4">
                  <div className="h-16 w-16 rounded bg-blue-600/20 flex items-center justify-center">
                    <svg className="h-8 w-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white">Microsoft Outlook</h3>
                    <p className="text-gray-400">Enterprise calendar solution</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-green-400"></div>
                    <p className="text-gray-300">Create and manage Outlook calendar events</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-green-400"></div>
                    <p className="text-gray-300">Schedule meetings with team members</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-green-400"></div>
                    <p className="text-gray-300">Update meeting details and attendees</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-green-400"></div>
                    <p className="text-gray-300">Check availability across the organization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
      </div>
    </>
  );
} 