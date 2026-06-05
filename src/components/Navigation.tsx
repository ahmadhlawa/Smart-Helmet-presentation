import React from 'react';
import { ChevronLeft, ChevronRight, Maximize2, LayoutGrid } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  onBackToHub: () => void;
  isHub: boolean;
}

export function Navigation({ currentSlide, totalSlides, onNext, onPrev, onBackToHub, isHub }: NavigationProps) {
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="fixed bottom-0 left-0 right-0 z-50 p-6 flex flex-col md:flex-row items-center justify-between pointer-events-none"
    >
      {/* Slide Indicator */}
      <div className={cn(
        "flex items-center gap-4 transition-all duration-500 mb-4 md:mb-0",
        isHub ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0 pointer-events-auto"
      )}>
        <div className="bg-white/80 backdrop-blur-md px-6 py-3 rounded-xl border border-slate-200 font-mono shadow-[0_4px_20px_rgba(37,99,235,0.05)] text-sm">
          <span className="text-blue-600 font-bold">{String(currentSlide + 1).padStart(2, '0')}</span>
          <span className="text-slate-400 mx-2">/</span>
          <span className="text-slate-500">{String(totalSlides).padStart(2, '0')}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-3 pointer-events-auto bg-white/80 backdrop-blur-md p-2 rounded-2xl border border-slate-200 shadow-[0_4px_20px_rgba(37,99,235,0.05)]">
        <button
          onClick={onPrev}
          className="p-3 rounded-xl text-slate-500 bg-slate-50 hover:bg-blue-50 hover:text-blue-600 transition-all hover:scale-105 active:scale-95 group relative"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity font-mono text-white whitespace-nowrap border border-slate-700 font-bold">Prev (←)</span>
        </button>
        
        <button
          onClick={onBackToHub}
          className={cn(
            "p-3 rounded-xl transition-all hover:scale-105 active:scale-95 group relative",
            isHub 
              ? "text-white bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.3)]" 
              : "text-slate-500 bg-slate-50 hover:bg-blue-50 hover:text-blue-600 text-blue-600"
          )}
          aria-label="Toggle Hub"
        >
          <LayoutGrid className="w-5 h-5" />
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity font-mono text-white whitespace-nowrap border border-slate-700 font-bold">Hub (Esc)</span>
        </button>

        <button
          onClick={onNext}
          className="p-3 rounded-xl text-slate-500 bg-slate-50 hover:bg-blue-50 hover:text-blue-600 transition-all hover:scale-105 active:scale-95 group relative"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity font-mono text-white whitespace-nowrap border border-slate-700 font-bold">Next (→/Space)</span>
        </button>

        <div className="w-px h-8 bg-slate-200 mx-1"></div>

        <button
          onClick={toggleFullScreen}
          className="p-3 rounded-xl text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all group relative"
          aria-label="Toggle Fullscreen"
        >
          <Maximize2 className="w-4 h-4" />
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity font-mono text-white whitespace-nowrap border border-slate-700 font-bold">Fullscreen</span>
        </button>
      </div>
    </motion.div>
  );
}
