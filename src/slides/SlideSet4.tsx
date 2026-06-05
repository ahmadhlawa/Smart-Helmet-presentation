import React from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { Placeholder } from '../components/Placeholder';
import { motion } from 'motion/react';
import { Rocket, CheckCircle2, AlertCircle, Activity, Info, Zap, ShieldCheck, Layers } from 'lucide-react';

export function Slide16() {
  const cards = [
    { title: "Sensors & Components", val: "DHT11, MQ Sensor, MPU6050, GPS", status: "Validated" },
    { title: "Local Alerts Support", val: "Buzzer + LED Indicators", status: "Passed" },
    { title: "Network Communication", val: "ESP32 → Wi-Fi → Dashboard", status: "Passed" },
    { title: "Overall System Workflow", val: "Hazard → Alert → Log → Monitor", status: "Validated" }
  ];

  return (
    <SlideLayout title="Testing Results" subtitle="System validation summary">
      <div className="flex flex-col h-full justify-center pb-24 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {cards.map((card, i) => (
            <motion.div 
               key={i} 
               initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i }}
               className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm flex flex-col justify-center items-center text-center group hover:border-blue-400 hover:shadow-md transition-all"
            >
              <span className="text-sm font-mono text-slate-500 uppercase tracking-widest mb-4">{card.title}</span>
              <span className="text-2xl font-bold text-slate-800 mb-8">{card.val}</span>
              <div className="mt-auto flex items-center justify-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                <span className="text-lg font-bold text-emerald-600 bg-emerald-50 px-4 py-1 rounded-full">{card.status}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}

export function Slide17() {
  const roadmap = [
    "Improve battery life.",
    "Enhance GPS accuracy.",
    "Improve fall detection algorithm.",
    "Add mobile push notifications.",
    "Design a custom PCB.",
    "Improve helmet enclosure.",
    "Support multiple helmets.",
    "Add historical reports and analytics.",
    "Explore AI-based anomaly detection."
  ];

  return (
    <SlideLayout title="Future Work" subtitle="Evolution of the platform">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-full content-center pb-24 overflow-y-auto">
         {roadmap.map((item, i) => (
            <motion.div
               key={i}
               initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 * i }}
               className="p-6 bg-white shadow-sm border border-slate-200 rounded-2xl group hover:border-blue-400 hover:shadow-md transition-all"
            >
               <Rocket className="w-8 h-8 text-blue-500 mb-4 transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
               <p className="text-slate-700 font-medium leading-relaxed">{item}</p>
            </motion.div>
         ))}
      </div>
    </SlideLayout>
  );
}

export function Slide18() {
  return (
    <SlideLayout title="Conclusion" subtitle="Project summary">
      <div className="flex flex-col items-center justify-center h-full pb-20 w-full max-w-4xl mx-auto text-center space-y-12">
         <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="text-2xl md:text-3xl font-display font-light text-slate-800 leading-relaxed">
            The Smart Safety Helmet demonstrates a practical <span className="text-blue-600 font-bold">IoT-based safety monitoring system</span> for industrial and construction environments.
         </motion.div>
         
         <div className="grid grid-cols-1 w-full text-left">
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }} className="bg-white border border-slate-200 border-t-4 border-t-amber-400 p-6 rounded-xl shadow-sm text-center">
               <p className="text-slate-700 font-medium text-lg leading-relaxed">By combining sensors, ESP32 processing, GPS tracking, local alerts, Wi-Fi communication, and dashboard monitoring, the project supports early hazard detection, faster supervisor response, and safer working conditions.</p>
            </motion.div>
         </div>
      </div>
    </SlideLayout>
  );
}

export function Slide19() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-slate-50">
      <motion.div 
         animate={{ scale: [1, 2, 1], opacity: [0.3, 0.6, 0.3] }}
         transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
         className="absolute w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/50 via-slate-50 to-slate-50 blur-3xl pointer-events-none"
      />
      
      <div className="z-10 text-center flex flex-col items-center space-y-8">
         <motion.div 
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0.6, duration: 1.5 }}
            className="w-40 h-40 flex items-center justify-center"
         >
            <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
         </motion.div>

         <motion.h1 
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8 }}
            className="text-6xl md:text-8xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-950 to-blue-600"
         >
            THANK YOU
         </motion.h1>
         
         <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
            className="text-2xl text-blue-600 font-mono tracking-[0.3em] uppercase"
         >
            Questions?
         </motion.p>
      </div>
    </div>
  );
}
