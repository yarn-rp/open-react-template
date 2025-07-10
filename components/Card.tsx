import React from 'react';

export default function Card({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`rounded-2xl shadow-xl overflow-visible bg-indigo-950/40 border border-indigo-900 ${className}`}>
      {children}
    </div>
  );
} 