import Image from "next/image";
import Spotlight from "@/components/spotlight";
import WorflowImg01 from "@/public/images/workflow-01.png";
import WorflowImg02 from "@/public/images/workflow-02.png";
import WorflowImg03 from "@/public/images/workflow-03.png";

const integrations = [
  {
    name: "Zoom",
    image: WorflowImg01,
    icon: <Image src="/images/client-logo-01.svg" alt="Zoom" width={56} height={24} />,
    description: "Join and participate in Zoom meetings with full AI assistance and automation.",
  },
  {
    name: "Google Meet",
    image: WorflowImg02,
    icon: <Image src="/images/client-logo-02.svg" alt="Google Meet" width={56} height={24} />,
    description: "Seamlessly integrate with Google Meet for intelligent meeting participation.",
  },
  {
    name: "Microsoft Teams",
    image: WorflowImg03,
    icon: <span className="text-2xl font-bold text-white bg-gray-700 rounded-lg px-2 py-1">T</span>, // Placeholder
    description: "Automate Teams meetings with AI-powered insights and action item tracking.",
  },
  {
    name: "Webex",
    image: WorflowImg01,
    icon: <span className="text-2xl font-bold text-white bg-gray-700 rounded-lg px-2 py-1">W</span>, // Placeholder
    description: "Enhance Webex meetings with intelligent AI assistance and automation.",
  },
  {
    name: "Any Platform",
    image: WorflowImg02,
    icon: <span className="text-2xl font-bold text-white bg-gray-700 rounded-lg px-2 py-1">+</span>, // Placeholder
    description: "Universal compatibility with any meeting platform through adaptive AI technology.",
  },
];

function chunkArray<T>(array: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

export default function MeetingPlatformsIntegrationsGrid() {
  const rows = chunkArray(integrations, 3);
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">Meeting Platform Integrations</h2>
          <p className="text-gray-300">
            Blueprint works with your favorite meeting platforms. Effortlessly connect and automate your meetings.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          {rows.map((row, idx) => {
            const gridCols = row.length === 1 ? 'lg:grid-cols-1' : row.length === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-3';
            return (
              <Spotlight
                key={idx}
                className={`group mx-auto grid items-start gap-6 lg:max-w-none ${gridCols} justify-center`}
              >
                {row.map((integration, i: number) => (
                  <div
                    key={integration.name}
                    className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
                  >
                    <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                      {/* Image for aspect ratio */}
                      <div className="flex justify-center pt-8 pb-4">
                        <Image
                          className="inline-flex"
                          src={integration.image}
                          width={350}
                          height={288}
                          alt={integration.name + " aspect"}
                        />
                      </div>
                      {/* Icon */}
                      <div className="flex justify-center pb-4">{integration.icon}</div>
                      {/* Content */}
                      <div className="p-6 text-center">
                        <h3 className="mb-2 text-lg font-semibold text-white">{integration.name}</h3>
                        <p className="text-indigo-200/65">{integration.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Spotlight>
            );
          })}
        </div>
      </div>
    </section>
  );
} 