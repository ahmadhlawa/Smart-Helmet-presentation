import React from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { Placeholder } from '../components/Placeholder';
import { motion } from 'motion/react';
import { ShieldAlert, Activity, Crosshair, MapPin, Target, Eye, Wrench, BookOpen } from 'lucide-react';

export function Slide01() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-slate-50">
      
      {/* Background Decor */}
      <motion.div 
         animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-200/50 to-amber-100/50 rounded-full blur-[100px]"
      />
      
      {/* Signal Waves */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none z-0">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-blue-400/30"
            initial={{ width: 0, height: 0, opacity: 1 }}
            animate={{ width: "100%", height: "100%", opacity: 0 }}
            transition={{ duration: 4, repeat: Infinity, delay: i * 1.3, ease: "easeOut" }}
            style={{ maxWidth: '1000px', maxHeight: '1000px' }}
          />
        ))}
      </div>

      <div className="z-10 text-center space-y-8 p-12 bg-white/60 backdrop-blur-xl border border-slate-200 shadow-sm rounded-3xl max-w-4xl w-full mx-auto relative">
         {/* Corner Accents */}
         <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-500 rounded-tl-xl" />
         <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-500 rounded-tr-xl" />
         <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-blue-500 rounded-bl-xl" />
         <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-500 rounded-br-xl" />

         <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }} className="flex justify-center">
             <img src="/logo.png" alt="Logo" className="w-32 h-32 object-contain" />
         </motion.div>

         <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.7, duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold text-blue-950 tracking-tight uppercase">
              Smart Safety <span className="text-blue-600">Helmet</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mt-6 font-mono tracking-widest uppercase border-y border-slate-200 py-4">
              IoT-Based Wearable Safety Monitoring System
            </p>
         </motion.div>

         <motion.div 
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1 }}
            className="grid grid-cols-3 gap-8 text-left mt-12 text-sm font-mono text-slate-600"
         >
           <div>
             <span className="block text-blue-500/70 mb-1">PREPARED BY</span>
             <span className="text-slate-800 font-semibold pl-1 border-l focus:outline-none">Ismail Aljaberi</span>
           </div>
           <div>
             <span className="block text-blue-500/70 mb-1">SUPERVISED BY</span>
             <span className="text-slate-800 font-semibold pl-1 border-l focus:outline-none">Dr. Safa Nassereldeen</span>
           </div>
           <div className="col-span-1">
             <span className="block text-blue-500/70 mb-1">INSTITUTION</span>
             <span className="text-slate-800 font-semibold pl-1 border-l focus:outline-none">Al-Quds University<br/>Dept. of Computer Engineering</span>
           </div>
         </motion.div>
         <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.2 }}>
            <p className="font-mono text-slate-400 text-xs mt-4">Jerusalem, Palestine — 2026</p>
         </motion.div>
      </div>
    </div>
  );
}

export function Slide02() {
  return (
    <SlideLayout title="Introduction" subtitle="The critical role of active safety monitoring">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full items-center pb-20">
        <div className="space-y-8">
           <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="border-l-4 border-blue-500 pl-6 bg-gradient-to-r from-blue-100/50 to-transparent py-4">
             <p className="text-xl text-slate-800 font-medium">Workplace safety requires more than traditional physical protection.</p>
           </motion.div>
           <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="border-l-4 border-blue-600 pl-6 bg-gradient-to-r from-blue-100/50 to-transparent py-4">
             <p className="text-xl text-slate-800 font-medium">Industrial and construction workers may face hidden hazards such as gas leakage, high temperature, abnormal movement, and sudden falls.</p>
           </motion.div>
           <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }} className="border-l-4 border-amber-500 pl-6 bg-gradient-to-r from-amber-100/50 to-transparent py-4">
             <p className="text-xl text-slate-800 font-medium">The Smart Safety Helmet provides real-time monitoring, local alerts, GPS tracking, and dashboard-based supervision to support faster emergency response.</p>
           </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }} className="h-[500px]">
          <img src="/intro pic.png" alt="Intro pic" className="w-full h-full object-contain" />
        </motion.div>
      </div>
    </SlideLayout>
  );
}

export function Slide03() {
  const problems = [
    { title: "Physical Only", desc: "Traditional helmets provide physical protection only." },
    { title: "Hidden Hazards", desc: "Environmental hazards may not be detected early." },
    { title: "Unnoticed Events", desc: "Falls or abnormal movement may go unnoticed." },
    { title: "Status Blindness", desc: "Supervisors may not know the worker’s status immediately." },
    { title: "Delayed Response", desc: "Delayed response can increase accident severity." },
    { title: "Unknown Location", desc: "Worker location may be unclear during emergencies." }
  ];

  return (
    <SlideLayout title="Problem Statements" subtitle="Vulnerabilities in conventional safety measures">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full content-center pb-24">
        {problems.map((prob, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="group bg-white border border-slate-200 shadow-sm p-6 rounded-2xl hover:bg-amber-50 hover:border-amber-300 hover:shadow-md transition-all duration-300"
          >
            <ShieldAlert className="w-10 h-10 text-amber-500 mb-4 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-slate-800 mb-2">{prob.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{prob.desc}</p>
          </motion.div>
        ))}
      </div>
    </SlideLayout>
  );
}

export function Slide04() {
  const objectives = [
    { title: "Real-time Monitoring", desc: "Improve worker safety through real-time monitoring.", icon: <Activity />, color: "text-blue-600" },
    { title: "Hazard Detection", desc: "Detect gas, temperature, humidity, and motion-related hazards.", icon: <Crosshair />, color: "text-red-500" },
    { title: "GPS Tracking", desc: "Track worker location using GPS.", icon: <MapPin />, color: "text-emerald-500" },
    { title: "Local Alerts", desc: "Activate local alerts using buzzer and LEDs.", icon: <ShieldAlert />, color: "text-amber-500" },
    { title: "Remote Dashboard", desc: "Send readings and alerts to a monitoring dashboard.", icon: <Target />, color: "text-indigo-500" },
    { title: "Scalable Prototype", desc: "Build a practical, low-cost, and scalable IoT prototype.", icon: <Wrench />, color: "text-blue-500" }
  ];

  return (
    <SlideLayout title="Aims & Objectives" subtitle="Engineering targets for the proposed solution">
      <div className="flex flex-col h-full justify-center pb-20 max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {objectives.map((obj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="flex flex-col items-center text-center p-8 bg-white border border-slate-100 shadow-sm rounded-xl hover:border-blue-400 transition-colors"
            >
              <div className={`w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mb-4 ${obj.color} border border-slate-200`}>
                {React.cloneElement(obj.icon, { className: "w-8 h-8" })}
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">{obj.title}</h3>
              <p className="text-sm text-slate-500 leading-tight">{obj.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}


