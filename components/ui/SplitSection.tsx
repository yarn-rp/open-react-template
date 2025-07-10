import React from "react";

interface SplitSectionProps {
  image: React.ReactNode;
  title: string;
  description: string;
  reverse?: boolean;
}

export default function SplitSection({ image, title, description, reverse = false }: SplitSectionProps) {
  return (
    <section className="py-16">
      <div className={`mx-auto max-w-6xl px-4 sm:px-6 flex flex-col md:flex-row items-center ${reverse ? 'md:flex-row-reverse' : ''} gap-12`}>
        <div className="flex-1 flex justify-center items-center">
          {image}
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-100 mb-6 animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-lg text-indigo-200/80 max-w-xl mx-auto md:mx-0">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
} 