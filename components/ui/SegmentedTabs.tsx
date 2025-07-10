import React from "react";

interface SegmentedTabsOption {
  id: string;
  label: string;
}

interface SegmentedTabsProps {
  options: SegmentedTabsOption[];
  selected: string;
  onSelect: (id: string) => void;
}

export default function SegmentedTabs({ options, selected, onSelect }: SegmentedTabsProps) {
  return (
    <div className="flex w-full max-w-2xl mx-auto rounded-full bg-[#23243a]/80 p-1 gap-2 shadow-lg border border-[#23243a]/60">
      {options.map((option) => {
        const isActive = selected === option.id;
        return (
          <button
            key={option.id}
            type="button"
            onClick={() => onSelect(option.id)}
            className={`flex-1 flex items-center justify-center rounded-full px-4 py-2 font-medium text-base transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400
              ${isActive
                ? "bg-[#3b368b] text-white border-2 border-indigo-400 shadow"
                : "bg-transparent text-indigo-100 hover:text-white"}
            `}
            aria-current={isActive ? "page" : undefined}
          >
            <span>{option.label}</span>
          </button>
        );
      })}
    </div>
  );
} 