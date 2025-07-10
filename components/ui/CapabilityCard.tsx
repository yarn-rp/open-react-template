import React from "react";

interface CapabilityCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

export default function CapabilityCard({ icon, title, description }: CapabilityCardProps) {
  return (
    <div className="rounded-2xl border border-gray-800 bg-gray-900/80 p-8 shadow-lg transition hover:border-indigo-500/60 hover:shadow-indigo-900/10 flex flex-col items-center text-center min-h-[280px]">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-800/40 to-indigo-500/10">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-gray-100">{title}</h3>
      <p className="text-gray-400 text-base">{description}</p>
    </div>
  );
} 