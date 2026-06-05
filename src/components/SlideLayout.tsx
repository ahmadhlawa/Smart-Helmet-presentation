import React, { ReactNode } from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface SlideLayoutProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export function SlideLayout({ title, subtitle, children, className }: SlideLayoutProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // Cinematic ease out
      className={cn("w-full h-full flex flex-col p-8 md:p-12 lg:p-16 2xl:p-24 relative overflow-hidden", className)}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400/0 via-blue-400/50 to-blue-400/0" />
      
      {(title || subtitle) && (
        <header className="mb-8 lg:mb-12 relative z-10">
          {title && (
             <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-800 tracking-tight uppercase"
             >
               {title}
             </motion.h1>
          )}
          {subtitle && (
            <motion.h2
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.5, duration: 0.6 }}
               className="text-lg md:text-xl xl:text-2xl text-[#6ee4f2] mt-2 font-mono tracking-wide uppercase border-l-2 border-[#6ee4f2] pl-4 ml-1"
            >
              {subtitle}
            </motion.h2>
          )}
        </header>
      )}
      <main className="flex-1 w-full h-full relative z-10 flex flex-col">
        {children}
      </main>
    </motion.div>
  );
}
