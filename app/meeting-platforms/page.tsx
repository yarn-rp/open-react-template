import Link from "next/link";
import PageIllustration from "@/components/page-illustration";
import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";

export const metadata = {
  title: "Meeting Platforms - Blueprint AI",
  description: "Blueprint AI can join and participate in meetings on any platform including Zoom, Google Meet, Microsoft Teams, and more.",
};

export default function MeetingPlatforms() {
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
                  Meeting Platform Integration
                </h1>
                <div className="mx-auto max-w-3xl">
                  <p
                    className="mb-8 text-xl text-indigo-200/65"
                    data-aos="fade-up"
                    data-aos-delay={200}
                  >
                    Blueprint AI can join and participate in meetings on any platform. Whether you use Zoom, Google Meet, Microsoft Teams, or any other meeting provider, your AI assistant will be there to help.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* How It Works */}
        <section className="relative">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
              {/* Section header */}
              <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
                <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
                  <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                    How It Works
                  </span>
                </div>
                <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
                  Seamless meeting integration on any platform
                </h2>
                <p className="text-lg text-indigo-200/65">
                  Blueprint adapts to your workflow and joins meetings wherever you are
                </p>
              </div>
              <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">
                <article>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/20">
                    <svg className="h-6 w-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white">Join Automatically</h3>
                  <p className="text-indigo-200/65">
                    Blueprint automatically joins your meetings based on your calendar and meeting invitations.
                  </p>
                </article>
                <article>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/20">
                    <svg className="h-6 w-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white">Listen & Understand</h3>
                  <p className="text-indigo-200/65">
                    The AI listens to the conversation, understands context, and identifies action items.
                  </p>
                </article>
                <article>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                    <svg className="h-6 w-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white">Participate Naturally</h3>
                  <p className="text-indigo-200/65">
                    Blueprint speaks naturally during meetings, providing insights and taking action when needed.
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
                Blueprint works with the most popular meeting platforms
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="h-12 w-12 rounded bg-blue-500/20 flex items-center justify-center">
                    <span className="text-blue-400 font-semibold">Z</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white">Zoom</h3>
              </div>
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="h-12 w-12 rounded bg-green-500/20 flex items-center justify-center">
                    <span className="text-green-400 font-semibold">G</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white">Google Meet</h3>
              </div>
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="h-12 w-12 rounded bg-blue-600/20 flex items-center justify-center">
                    <span className="text-blue-500 font-semibold">T</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white">Microsoft Teams</h3>
              </div>
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="h-12 w-12 rounded bg-gray-500/20 flex items-center justify-center">
                    <span className="text-gray-400 font-semibold">+</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white">Any Platform</h3>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-300">
                Whether you're using Zoom, Google Meet, Microsoft Teams, Webex, or any other meeting platform, Blueprint can join and participate in your meetings. The AI adapts to your existing workflow without requiring any changes to your current setup.
              </p>
            </div>
          </div>
        </section>
        
      </div>
    </>
  );
} 