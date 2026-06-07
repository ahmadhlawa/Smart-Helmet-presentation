import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Navigation } from './components/Navigation';
import { PresentationHub } from './components/PresentationHub';
import { BackupSlide } from './slides/BackupSlide';

// Slides
import { Slide01, Slide02, Slide03, Slide04 } from './slides/SlideSet1';
import { Slide06, Slide07, Slide09, Slide10 } from './slides/SlideSet2';
import { Slide11, Slide13, Slide14, Slide15 } from './slides/SlideSet3';
import { Slide16, Slide17, Slide18, Slide19 } from './slides/SlideSet4';

const slides = [
  Slide01, Slide02, Slide03, Slide04,
  Slide06, Slide07, Slide09, Slide10,
  Slide11, Slide13, Slide14, Slide15,
  Slide16, Slide17, Slide18, Slide19
];

const slideTitles = [
  "Cover", "Introduction", "Problems", "Objectives",
  "Functionals", "Non-Functionals", "Methodology", "System Overview",
  "Architecture", "Main Circuit", "Challenges", "Project Costs",
  "Testing", "Future Work", "Conclusion", "End"
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [viewMode, setViewMode] = useState<'hub' | 'slide'>('hub');
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Navigate to specific node from Hub
  const handleNodeClick = useCallback((index: number) => {
    if (isTransitioning) return;
    setCurrentSlide(index);
    setViewMode('slide');
  }, [isTransitioning]);

  const handleBackToHub = useCallback(() => {
    if (isTransitioning) return;
    setViewMode((prev) => (prev === 'hub' ? 'slide' : 'hub'));
  }, [isTransitioning]);

  const performCinematicTransition = useCallback((targetIndex: number) => {
     if (isTransitioning) return;
     setIsTransitioning(true);
     setViewMode('hub');

     // Wait for zoom-out to finish (1.2s transition)
     setTimeout(() => {
        setCurrentSlide(targetIndex);

        // Let the user view the new active node on the hub for a short time
        setTimeout(() => {
           setViewMode('slide');
           
           // Wait for zoom-in to finish before unlocking
           setTimeout(() => {
              setIsTransitioning(false);
           }, 1200);
           
        }, 1200);
     }, 1000);
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1 && !isTransitioning) {
      if (viewMode === 'slide') {
         performCinematicTransition(currentSlide + 1);
      } else {
         setCurrentSlide(prev => prev + 1);
      }
    }
  }, [currentSlide, viewMode, performCinematicTransition, isTransitioning]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0 && !isTransitioning) {
      if (viewMode === 'slide') {
         performCinematicTransition(currentSlide - 1);
      } else {
         setCurrentSlide(prev => prev - 1);
      }
    }
  }, [currentSlide, viewMode, performCinematicTransition, isTransitioning]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if filling out forms or inputs
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        handleBackToHub();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, handleBackToHub]);

  const [showFloatSlide, setShowFloatSlide] = useState(false);

  const CurrentSlideComponent = slides[currentSlide] || Slide01;

  return (
    <div className="w-full h-screen bg-slate-50 text-slate-900 overflow-hidden flex flex-col font-sans selection:bg-blue-500/30 relative">
      
      {/* Universal Background Particles/Grid */}
      <div className="fixed inset-0 pointer-events-none z-0" style={{ 
          backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.04) 1px, transparent 1px)',
          backgroundSize: '40px 40px' 
      }}>
         <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full" />
         <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-amber-400/10 blur-[150px] rounded-full" />
      </div>

      <div className="flex-1 relative z-10">
        <AnimatePresence>
          {viewMode === 'hub' ? (
            <motion.div
              key="hub-view"
              initial={{ scale: 3, opacity: 0 }} // Came from behind camera
              animate={{ scale: 1, opacity: 1 }} // Settle in front
              exit={{ scale: 3, opacity: 0 }} // Camera moves into Hub (so Hub comes towards us and past us)
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <PresentationHub 
                 totalSlides={slides.length} 
                 activeSlide={currentSlide} 
                 onNodeClick={handleNodeClick}
                 titles={slideTitles}
                 onBackupClick={() => setShowFloatSlide(true)}
              />
            </motion.div>
          ) : (
            <motion.div
              key={`slide-view-${currentSlide}`}
              initial={{ scale: 0.5, opacity: 0, filter: 'blur(10px)' }} // Starts far in front of camera
              animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }} // Settle at screen plane
              exit={{ scale: 0.5, opacity: 0, filter: 'blur(10px)' }} // Moves far away in front of camera (camera moves backward)
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <CurrentSlideComponent />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Navigation 
        currentSlide={currentSlide} 
        totalSlides={slides.length} 
        onNext={nextSlide} 
        onPrev={prevSlide}
        onBackToHub={handleBackToHub}
        isHub={viewMode === 'hub'}
      />

      <AnimatePresence>
         {showFloatSlide && (
            <BackupSlide onClose={() => setShowFloatSlide(false)} />
         )}
      </AnimatePresence>
    </div>
  );
}
