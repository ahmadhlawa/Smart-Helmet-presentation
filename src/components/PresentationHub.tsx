import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { Hexagon, Lock } from 'lucide-react';

interface PresentationHubProps {
  totalSlides: number;
  activeSlide: number;
  onNodeClick: (index: number) => void;
  titles: string[];
}

export function PresentationHub({ totalSlides, activeSlide, onNodeClick, titles }: PresentationHubProps) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // Calculate orbital positions
  const getOrbitalPosition = (index: number, total: number, radius: number) => {
    // Start at top (-PI/2), go clockwise
    const angle = (index * (2 * Math.PI)) / total - Math.PI / 2;
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    };
  };

  // Adjust radius based on screen size (rough estimation, using vw/vh in rendering via transform would be better, but we use fixed px here relying on container scaling)
  const radius = 320; 

  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
      
      {/* Background Animated Rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        className="absolute w-[800px] h-[800px] rounded-full border border-slate-300 border-dashed opacity-50"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
        className="absolute w-[640px] h-[640px] rounded-full border border-blue-200 opacity-50"
      />

      {/* Central Logo */}
      <div className="relative z-20 flex flex-col items-center justify-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.5, duration: 1 }}
          className="relative w-48 h-48 rounded-full bg-white flex flex-col items-center justify-center shadow-[0_0_60px_rgba(37,99,235,0.15)] border-2 border-blue-100"
        >
          {/* Logo Pulse Ring */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full bg-blue-500/10"
          />
          
          <img 
            src="/logo.png" 
            alt="Smart Safety Helmet Logo" 
            className="w-32 h-32 object-contain relative z-10"
            onError={(e) => {
               // Fallback if logo.png is not found
               e.currentTarget.style.display = 'none';
               e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <div className="hidden absolute text-center text-blue-500 font-mono text-xs px-4">
            <Lock className="w-8 h-8 mx-auto mb-2 opacity-50" />
            LOGO AREA
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="absolute -bottom-16 w-max text-center"
        >
           <h2 className="text-xl font-display font-bold text-blue-950 tracking-widest uppercase">Smart Safety Helmet</h2>
           <p className="text-blue-600 font-mono text-xs mt-1 tracking-[0.2em] uppercase">Control Hub</p>
        </motion.div>
      </div>

      {/* Orbital Nodes */}
      {mounted && (
        <div className="absolute top-1/2 left-1/2 w-0 h-0 z-10">
          {Array.from({ length: totalSlides }).map((_, i) => {
            const pos = getOrbitalPosition(i, totalSlides, radius);
            const isActive = i === activeSlide;
            
            return (
              <React.Fragment key={i}>
                {/* Connection Line */}
                <svg className="absolute top-0 left-0 overflow-visible pointer-events-none z-0" width="0" height="0">
                   <motion.line
                     x1="0" y1="0"
                     x2={pos.x} y2={pos.y}
                     stroke={isActive ? "rgba(37,99,235,0.6)" : "rgba(148,163,184,0.5)"}
                     strokeWidth={isActive ? 2 : 1}
                     strokeDasharray={isActive ? "none" : "4 4"}
                     initial={{ pathLength: 0, opacity: 0 }}
                     animate={{ pathLength: 1, opacity: 1 }}
                     transition={{ duration: 1, delay: i * 0.05 }}
                   />
                   {isActive && (
                      <motion.circle 
                         cx={pos.x * 0.5} cy={pos.y * 0.5} r="3" fill="#2563eb"
                         initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
                      />
                   )}
                </svg>

                {/* Node Anchor */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.2 }}
                  transition={{ delay: 0.5 + i * 0.05, type: "spring", stiffness: 200 }}
                  className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                  style={{ left: pos.x, top: pos.y }}
                >
                  <button
                    onClick={() => onNodeClick(i)}
                    className="relative group focus:outline-none flex flex-col items-center cursor-pointer"
                  >
                    <div className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center font-mono text-sm transition-all duration-300 border backdrop-blur-sm",
                      isActive 
                        ? "bg-blue-600 border-blue-400 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] scale-125 z-20" 
                        : "bg-white border-slate-300 text-slate-500 hover:border-blue-400 hover:text-blue-600 shadow-sm"
                    )}>
                      {i + 1}
                    </div>

                    {/* Node Label Tooltip */}
                    <div className={cn(
                       "absolute w-max max-w-[120px] text-center pointer-events-none transition-all duration-300",
                       isActive ? "opacity-100 z-30" : "opacity-0 group-hover:opacity-100 z-20"
                    )}
                    style={{
                       // Position label based on angle to avoid overlapping center
                       top: pos.y > 0 ? '50px' : 'auto',
                       bottom: pos.y < 0 ? '50px' : 'auto',
                    }}>
                       <div className={cn(
                         "text-xs font-mono px-3 py-1.5 rounded-md bg-white border shadow-sm",
                         isActive ? "text-blue-700 border-blue-500" : "text-slate-600 border-slate-200"
                       )}>
                         {titles[i]}
                       </div>
                    </div>
                  </button>
                </motion.div>
              </React.Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
}
