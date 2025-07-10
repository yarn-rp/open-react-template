"use client";
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

interface CollapsibleBannerProps {
  title: string;
  description: string;
}

export default function CollapsibleBanner({ title, description }: CollapsibleBannerProps) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`border rounded-xl p-2 transition-all duration-300 cursor-pointer ${open ? 'border-indigo-400' : 'border-transparent'}`}
      onClick={() => setOpen(o => !o)}
      style={{ background: 'none' }}
    >
      <div className="flex items-center justify-between gap-2">
        <span className="font-semibold text-indigo-100 text-sm md:text-base">{title}</span>
        <span>
          {open ? <ExpandLessIcon className="text-indigo-300" fontSize="small" /> : <ExpandMoreIcon className="text-indigo-300" fontSize="small" />}
        </span>
      </div>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-32 mt-1 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-indigo-200/80 text-xs md:text-sm mt-1">{description}</p>
      </div>
    </div>
  );
} 