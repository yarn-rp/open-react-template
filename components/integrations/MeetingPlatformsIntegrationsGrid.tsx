import Image from "next/image";

const integrations = [
  {
    name: "Zoom",
    logo: "/images/integrations/zoom.svg",
    description: "Join and participate in Zoom meetings with full AI assistance and automation.",
  },
  {
    name: "Google Meet",
    logo: "/images/integrations/google-meet.svg",
    description: "Seamlessly integrate with Google Meet for intelligent meeting participation.",
  },
  {
    name: "Microsoft Teams",
    logo: "/images/integrations/microsoft-teams.svg",
    description: "Automate Teams meetings with AI-powered insights and action item tracking.",
  },
];

export default function MeetingPlatformsIntegrationsGrid() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 text-center">
          <h2 className="mb-3 text-2xl font-bold text-white">Supported Meeting Platforms</h2>
          <p className="text-gray-300 text-sm">
            Blueprint works with your favorite meeting platforms. Effortlessly connect and automate your meetings.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="group relative bg-gray-800/50 rounded-xl p-4 border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300 hover:bg-gray-800/70 h-32 flex flex-col"
            >
              {/* Logo - PNGs 100x48, SVGs 40x40 w-auto */}
              <div className="flex-1 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {integration.logo.endsWith('.png') ? (
                  <Image
                    src={integration.logo}
                    alt={integration.name}
                    width={120}
                    height={56}
                    className="object-contain"
                  />
                ) : (
                  <Image
                    src={integration.logo}
                    alt={integration.name}
                    width={40}
                    height={40}
                    className="h-10 w-auto object-contain"
                  />
                )}
              </div>
              {/* Platform Name - fixed at bottom */}
              <div className="mt-3 text-center">
                <h3 className="text-sm font-semibold text-white group-hover:text-indigo-200 transition-colors">
                  {integration.name}
                </h3>
              </div>
              {/* Description (hidden by default, shown on hover) */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-xs text-gray-300 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10 max-w-xs">
                {integration.description}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 