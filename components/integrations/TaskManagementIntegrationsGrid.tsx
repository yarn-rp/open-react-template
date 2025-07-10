import Image from "next/image";
import Spotlight from "@/components/spotlight";
import WorflowImg01 from "@/public/images/workflow-01.png";
import WorflowImg02 from "@/public/images/workflow-02.png";
import WorflowImg03 from "@/public/images/workflow-03.png";

const integrations = [
  {
    name: "Asana",
    image: WorflowImg01,
    icon: <Image src="/images/client-logo-01.svg" alt="Asana" width={56} height={24} />,
    description: "Create, update, and assign tasks in Asana directly from your meetings.",
  },
  {
    name: "Jira",
    image: WorflowImg02,
    icon: <Image src="/images/client-logo-02.svg" alt="Jira" width={56} height={24} />,
    description: "Seamlessly manage Jira issues and automate ticket creation from discussions.",
  },
  {
    name: "Linear",
    image: WorflowImg03,
    icon: <span className="text-2xl font-bold text-white bg-gray-700 rounded-lg px-2 py-1">L</span>, // Placeholder
    description: "Sync meeting action items with Linear for streamlined project tracking.",
  },
  {
    name: "Monday.com",
    image: WorflowImg01,
    icon: <span className="text-2xl font-bold text-white bg-gray-700 rounded-lg px-2 py-1">M</span>, // Placeholder
    description: "Automate Monday.com boards and keep your team aligned effortlessly.",
  },
  {
    name: "Notion",
    image: WorflowImg02,
    icon: <span className="text-2xl font-bold text-white bg-gray-700 rounded-lg px-2 py-1">N</span>, // Placeholder
    description: "Send tasks and notes to Notion, keeping your workspace up to date.",
  },
];

function chunkArray<T>(array: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

export default function TaskManagementIntegrationsGrid() {
  const rows = chunkArray(integrations, 3);
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">Task Management Integrations</h2>
          <p className="text-gray-300">
            Blueprint works with your favorite task management tools. Effortlessly connect and automate your workflow.
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