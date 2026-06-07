import React from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { Placeholder } from '../components/Placeholder';
import { motion } from 'motion/react';
import { CheckSquare, ShieldCheck, Cog, Activity, Server, Smartphone, BellRing, Wifi, Navigation, Shield, LayoutDashboard, Eye, Zap, Search, Lock, ShieldAlert, Wrench, Terminal, PenTool } from 'lucide-react';

export function Slide06() {
  const reqs = [
    { text: "Monitoring environmental and motion sensors", icon: Activity },
    { text: "Read GPS location", icon: Navigation },
    { text: "Activate buzzer and LED alerts", icon: BellRing },
    { text: "Send data through Wi-Fi", icon: Wifi },
    { text: "Display readings on the dashboard", icon: LayoutDashboard },
    { text: "Show alerts and worker status to supervisors", icon: ShieldAlert }
  ];

  return (
    <SlideLayout title="Functional Requirements" subtitle="System operational mandates">
      <div className="flex flex-col justify-center h-full pb-20 w-full max-w-6xl mx-auto">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reqs.map((req, i) => {
               const Icon = req.icon || CheckSquare;
               return (
                  <motion.div
                     key={i}
                     initial={{ opacity: 0, y: 30 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.1 * i }}
                     className="bg-white border border-slate-200 shadow-sm p-8 rounded-2xl flex items-center gap-6 hover:border-blue-400 hover:shadow-lg transition-all group"
                  >
                     <div className="flex-shrink-0 w-14 h-14 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                       <Icon className="w-7 h-7" />
                     </div>
                     <h3 className="text-xl md:text-2xl text-slate-700 font-semibold leading-tight">{req.text}</h3>
                  </motion.div>
               );
            })}
         </div>
      </div>
    </SlideLayout>
  );
}

export function Slide07() {
  const attrs = [
    { name: "Reliability", desc: "Stable readings and alert behavior", hoverDesc: "Stable sensor readings and reliable alert generation.", icon: ShieldCheck },
    { name: "Real-Time Response", desc: "Fast data updates and alerts", hoverDesc: "Dashboard response within approximately 0.5 seconds.", icon: Zap },
    { name: "Usability", desc: "Clear dashboard and readable alerts", hoverDesc: "nothing new or complex!", icon: LayoutDashboard },
    { name: "Maintainability", desc: "Easy to modify sensors and thresholds", hoverDesc: "Easy sensor replacement and threshold adjustment.", icon: Cog },
    { name: "Wearability", desc: "Safe and practical component placement", hoverDesc: "Lightweight design suitable for continuous use.", icon: Smartphone },
    { name: "Security", desc: "Controlled access to worker data", hoverDesc: "Admin login authentication and secure communication protocols.", icon: Lock }
  ];

  return (
    <SlideLayout title="Non-Functional Requirements" subtitle="Quality attributes and constraints">
      <div className="flex flex-col justify-center h-full pb-20 w-full max-w-6xl mx-auto">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attrs.map((attr, i) => {
               const Icon = attr.icon;
               return (
                  <motion.div
                     key={i}
                     initial={{ opacity: 0, scale: 0.9 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{ delay: 0.1 * i }}
                     className="group flex flex-col items-center text-center p-8 bg-white border border-slate-200 rounded-3xl shadow-sm border-t-8 border-t-amber-400 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                  >
                     <div className="w-20 h-20 rounded-full bg-amber-50 flex items-center justify-center mb-6 text-amber-500 transition-colors duration-300 group-hover:bg-amber-100 group-hover:scale-110">
                        <Icon className="w-10 h-10" />
                     </div>
                     <h3 className="text-2xl font-bold text-slate-800 mb-4">{attr.name}</h3>
                     <div className="relative w-full h-20 flex items-center justify-center overflow-visible">
                        <p className="text-lg text-slate-600 font-medium leading-relaxed absolute top-0 w-full transition-all duration-300 group-hover:opacity-0 group-hover:scale-95 group-hover:translate-y-2 flex items-center justify-center h-full">
                           {attr.desc}
                        </p>
                        <p className="text-lg text-amber-700 font-bold leading-relaxed absolute top-0 w-full transition-all duration-300 opacity-0 scale-95 -translate-y-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 flex items-center justify-center h-full text-balance">
                           {attr.hoverDesc}
                        </p>
                     </div>
                  </motion.div>
               );
            })}
         </div>
      </div>
    </SlideLayout>
  );
}

export function Slide08() {
  return (
    <SlideLayout title="Business Model Canvas" subtitle="Strategic management template">
      <div className="flex flex-col items-center h-full bg-white rounded-2xl border border-slate-300 overflow-hidden mb-12 shadow-sm p-4">
        <img 
           src="/Buainess-model.png" 
           alt="Business Model Canvas" 
           className="w-full h-full object-contain"
        />
      </div>
    </SlideLayout>
  );
}

export function Slide09() {
  const steps = [
    { title: "Requirement analysis", icon: Search }, 
    { title: "Component selection", icon: Cog }, 
    { title: "System design", icon: PenTool }, 
    { title: "Hardware implementation", icon: Wrench },
    { title: "Firmware development", icon: Terminal }, 
    { title: "Dashboard development", icon: LayoutDashboard }, 
    { title: "GPS integration", icon: Navigation }, 
    { title: "Testing & optimization", icon: Activity }
  ];

  return (
    <SlideLayout title="Methodology" subtitle="Iterative engineering execution process">
       <div className="flex flex-col items-center justify-center h-full pb-16 w-full max-w-6xl mx-auto relative">
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16 w-full relative z-10">
             {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={i} className="relative flex flex-col items-center">
                     {/* Connecting Line (Horizontal) */}
                     {i !== 3 && i !== 7 && (
                        <div className="hidden lg:block absolute top-[2.5rem] left-[60%] w-[80%] h-1 bg-slate-200 z-0">
                           <motion.div 
                              initial={{ width: 0 }} 
                              animate={{ width: "100%" }} 
                              transition={{ duration: 0.5, delay: 0.2 * i }}
                              className="h-full bg-blue-500"
                           />
                        </div>
                     )}
                     
                     <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 * i }}
                        className="flex flex-col items-center z-10 w-full px-2"
                     >
                        <div className="w-20 h-20 bg-white border-4 border-slate-50 shadow-lg rounded-full flex items-center justify-center relative group hover:border-blue-100 hover:scale-110 transition-all duration-300">
                           <div className="absolute inset-0 bg-blue-50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                           <Icon className="w-8 h-8 text-blue-600 relative z-10 group-hover:text-blue-700" />
                           <div className="absolute -top-2 -right-2 w-7 h-7 bg-amber-400 text-amber-900 rounded-full flex items-center justify-center text-xs font-bold shadow-md">
                              {i + 1}
                           </div>
                        </div>
                        
                        <div className="mt-6 text-center">
                           <h4 className="text-base md:text-lg font-bold text-slate-800 leading-tight">
                              {step.title}
                           </h4>
                        </div>
                     </motion.div>
                  </div>
                );
             })}
          </div>
       </div>
    </SlideLayout>
  );
}

export function Slide10() {
  return (
    <SlideLayout title="System Overview" subtitle="High-level operational topology">
       <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 h-full pb-20 items-center">
          <div className="space-y-4 font-mono text-sm text-slate-700">
             <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="p-4 bg-white shadow-sm border border-slate-200 rounded-lg border-l-4 border-l-blue-500">
                1. Worker wears the Smart Safety Helmet
             </motion.div>
             <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="p-4 bg-white shadow-sm border border-slate-200 rounded-lg border-l-4 border-l-blue-500">
                2. Sensors collect environmental and motion data
             </motion.div>
             <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="p-4 bg-white shadow-sm border border-slate-200 rounded-lg border-l-4 border-l-blue-500">
                3. The ESP32 processes readings and sends them through Wi-Fi
             </motion.div>
             <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }} className="p-4 bg-white shadow-sm border border-slate-200 rounded-lg border-l-4 border-l-blue-500">
                4. The dashboard displays worker status, alerts, and GPS location
             </motion.div>
             <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.6 }} className="p-4 bg-white shadow-sm border border-slate-200 rounded-lg border-l-4 border-l-amber-500">
                5. If a hazard is detected, local and remote alerts are triggered
             </motion.div>
          </div>

          <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.7 }} className="h-[500px] w-full relative">
             <img src="/contex-diagram.png" alt="Context Diagram" className="w-full h-full object-contain" />
          </motion.div>
       </div>
    </SlideLayout>
  );
}
