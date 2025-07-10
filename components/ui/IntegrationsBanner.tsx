import Image from "next/image";
import Link from "next/link";

const INTEGRATIONS = [
  {
    name: "Google Calendar",
    logo: "/images/integrations/google-calendar.svg",
  },
  {
    name: "Zoom",
    logo: "/images/integrations/zoom.svg",
  },
  {
    name: "Google Meet",
    logo: "/images/integrations/google-meet.svg",
  },
  {
    name: "Microsoft Teams",
    logo: "/images/integrations/microsoft-teams.svg",
  },
  {
    name: "Linear",
    logo: "/images/integrations/linear.svg",
  },
  {
    name: "Jira",
    logo: "/images/integrations/jira.png",
  },
  {
    name: "Asana",
    logo: "/images/integrations/asana.svg",
  },
  {
    name: "Monday",
    logo: "/images/integrations/monday.png",
  },
  {
    name: "Microsoft Outlook",
    logo: "/images/integrations/microsoft-outlook.svg",
  },
  {
    name: "Notion",
    logo: "/images/integrations/notion.svg",
  },
];

export default function IntegrationsBanner() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center pb-8 md:pb-12">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-4xl font-semibold text-transparent md:text-5xl leading-tight mb-4">
              Connect it to the tools<br />you love. Rejoice!
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 w-full mb-10">
            {INTEGRATIONS.map((integration) => (
              <div
                key={integration.name}
                className="flex items-center justify-center bg-gray-800/50 rounded-2xl shadow-sm border border-gray-700/40 p-6 min-h-[80px] hover:bg-gray-800/70 transition-colors"
              >
                <Image
                  src={integration.logo}
                  alt={integration.name + " logo"}
                  width={60}
                  height={60}
                  className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Link
              href="/integrations"
              className="btn group bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white text-base font-medium rounded-full px-8 py-3 shadow hover:bg-indigo-700 transition"
            >
              View All Integrations
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 