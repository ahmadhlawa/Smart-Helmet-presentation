import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { ImageIcon } from 'lucide-react';

interface PlaceholderProps {
  label: string;
  className?: string;
  icon?: React.ReactNode;
}

export function Placeholder({ label, className, icon }: PlaceholderProps) {
  return (
    <div className={cn("relative flex flex-col items-center justify-center p-8 border border-dashed border-cyan-500/40 rounded-xl bg-cyan-900/10 text-cyan-200/70 font-mono text-sm uppercase tracking-widest text-center overflow-hidden group", className)}>
      {/* Animated corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400 opacity-50 group-hover:opacity-100 transition-opacity" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400 opacity-50 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400 opacity-50 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400 opacity-50 group-hover:opacity-100 transition-opacity" />
      
      <motion.div 
        animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="mb-4 text-cyan-500/50 group-hover:text-cyan-400 transition-colors"
      >
        {icon || <ImageIcon size={48} />}
      </motion.div>
      <p className="z-10 bg-gray-950/50 px-3 py-1 rounded backdrop-blur-sm">{label}</p>
    </div>
  );
}
