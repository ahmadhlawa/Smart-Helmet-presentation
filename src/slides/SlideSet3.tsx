import React, { useState, useEffect } from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { Placeholder } from '../components/Placeholder';
import { motion, useAnimation, animate } from 'motion/react';
import { Layers, Network, Server, UserCheck, AlertTriangle, Zap, Cpu, DollarSign } from 'lucide-react';

export function Slide11() {
  const layers = [
    { title: "Supervisor Layer", items: ["Monitoring", "Emergency Response"], icon: <UserCheck className="text-blue-600"/> },
    { title: "Dashboard Layer", items: ["Readings", "Alerts", "Worker Status", "Location"], icon: <Server className="text-indigo-600"/> },
    { title: "Processing Layer", items: ["Rule-based Hazard Detection"], icon: <Cpu className="text-emerald-600"/> },
    { title: "Communication Layer", items: ["Wi-Fi Data Transmission"], icon: <Network className="text-amber-500"/> },
    { title: "Helmet Layer", items: ["ESP32", "Sensors", "GPS", "Buzzer", "LEDs"], icon: <Layers className="text-slate-600"/> }
  ];

  return (
    <SlideLayout title="Architecture Diagram" subtitle="Modular stack infrastructure">
      <div className="flex flex-col lg:flex-row gap-12 h-full items-center pb-20 overflow-y-auto">
         <div className="flex flex-col space-y-4 w-full max-w-xl shrink-0">
            {layers.map((layer, i) => (
               <motion.div 
                 key={i}
                 initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 + i * 0.15 }}
                 className="flex items-center gap-6 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"
               >
                 <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                    {layer.icon}
                 </div>
                 <div>
                    <h3 className="text-lg font-bold text-slate-800 font-mono mb-2">{layer.title}</h3>
                    <div className="flex flex-wrap gap-2">
                       {layer.items.map(item => <span key={item} className="text-xs bg-slate-100 border border-slate-200 text-slate-600 px-2 py-1 rounded">{item}</span>)}
                    </div>
                 </div>
               </motion.div>
            ))}
         </div>
         <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }} className="h-full w-full min-h-[400px]">
             <img src="/arch.png" alt="Architecture Diagram" className="w-full h-full object-contain" />
         </motion.div>
      </div>
    </SlideLayout>
  );
}

export function Slide12() {
  return (
    <SlideLayout title="Process Diagram" subtitle="Logic execution flow">
      <div className="flex flex-col h-full bg-white shadow-sm rounded-2xl border border-slate-200 p-8 mb-12 relative overflow-hidden">
        {/* Animated Background logic paths */}
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#2563eb 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        
        <div className="relative z-10 flex flex-col h-full items-center justify-center w-full">
           <img src="/activity-diagram.png" alt="Activity Diagram" className="w-full h-full object-contain max-h-[500px]" />
        </div>
      </div>
    </SlideLayout>
  );
}

export function Slide13() {
  const pins = [
    { dev: "DHT11", pin: "GPIO14" },
    { dev: "MQ Sensor", pin: "GPIO34" },
    { dev: "MPU6050 SDA", pin: "GPIO22" },
    { dev: "MPU6050 SCL", pin: "GPIO21" },
    { dev: "Buzzer", pin: "GPIO25" },
    { dev: "LEDs", pin: "GPIO26, 27, 32, 33" },
    { dev: "GPS", pin: "UART pins" }
  ];

  return (
    <SlideLayout title="Main Circuit" subtitle="Hardware schematic and pin configuration">
       <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 h-full pb-20">
          <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.3 }} className="h-full bg-white border border-slate-200 shadow-sm rounded-3xl overflow-hidden relative">
             <img src={`/main-circuit.png?t=${Date.now()}`} alt="Main Circuit" className="w-full h-full object-contain p-4" />
          </motion.div>
          <div className="space-y-6 flex flex-col">
             <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 flex-1">
                <h3 className="font-mono text-blue-700 font-bold mb-4 uppercase tracking-wider text-sm border-b border-slate-200 pb-2">Pin Reference Table</h3>
                <div className="space-y-3 font-mono text-xs">
                   {pins.map((p, i) => (
                      <div key={i} className="flex justify-between items-center border-b border-slate-100 pb-2">
                         <span className="text-slate-600 font-semibold">{p.dev}</span>
                         <span className="text-blue-700 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded">{p.pin}</span>
                      </div>
                   ))}
                </div>
             </div>
          </div>
       </div>
    </SlideLayout>
  );
}

export function Slide14() {
  const challenges = [
    { title: "Sensor Noise", sol: "Sensor noise and calibration issues." },
    { title: "GPS Signal", sol: "GPS signal weakness indoors." },
    { title: "Network Stability", sol: "Wi-Fi stability during real-time monitoring." },
    { title: "Wiring Management", sol: "Organizing wiring inside the helmet." },
    { title: "False Positives", sol: "Reducing false alerts." },
    { title: "Wearability Check", sol: "Balancing functionality with wearability." },
    { title: "Power Capacity", sol: "Managing power consumption." }
  ];

  return (
    <SlideLayout title="Challenges" subtitle="Engineering hurdles and resolutions">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-full content-center pb-24">
         {challenges.map((c, i) => (
            <motion.div
               key={i}
               initial={{ opacity: 0, rotateX: -90 }}
               animate={{ opacity: 1, rotateX: 0 }}
               transition={{ delay: 0.1 * i, type: "spring", stiffness: 100 }}
               className="perspective-1000"
            >
               <div className="bg-white border border-slate-200 shadow-sm p-6 rounded-2xl h-full flex flex-col justify-between group hover:border-red-400 transition-colors">
                  <div>
                    <h3 className="text-lg font-bold text-red-600 mb-2">{c.title}</h3>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <span className="text-blue-700 font-medium font-mono text-sm group-hover:text-blue-600 transition-colors">{c.sol}</span>
                  </div>
               </div>
            </motion.div>
         ))}
      </div>
    </SlideLayout>
  );
}

export function Slide15() {
  const [showTotal, setShowTotal] = useState(false);
  const [displayTotal, setDisplayTotal] = useState(0);

  const items = [
    { name: "Safety Helmet & Enclosure (3D parts)", cost: 330 },
    { name: "Processing & Location (ESP32, GPS)", cost: 162 },
    { name: "Sensors & Alerts (MQ2, DS18B20, MPU6050, Buzzer)", cost: 175 },
    { name: "Power System (Batteries, Charger, Switch)", cost: 95 },
    { name: "Circuits & Wiring (PCB, Breadboard, Misc)", cost: 59 },
    { name: "Software & Hosting (Vercel, Render)", cost: 60 }
  ];

  const actualTotal = items.reduce((sum, item) => sum + item.cost, 0);

  useEffect(() => {
    if (showTotal) {
      const controls = animate(0, actualTotal, {
        duration: 1.5,
        onUpdate(value) {
          setDisplayTotal(Math.round(value));
        }
      });
      return () => controls.stop();
    } else {
      setDisplayTotal(0);
    }
  }, [showTotal, actualTotal]);

  return (
    <SlideLayout title="Project Costs" subtitle="Hardware and deployment economics">
       <div className="flex justify-center items-center h-full pb-20 w-full flex-col space-y-6">
         <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-center max-w-2xl text-slate-700">
           The prototype was designed using affordable and available components.
         </motion.div>

         <div className="w-full max-w-4xl bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-lg flex flex-col max-h-[60vh]">
            <div className="grid grid-cols-[1fr] bg-slate-50 border-b border-slate-200 p-6 font-mono text-blue-800 font-bold uppercase tracking-widest text-sm text-center shrink-0">
               <span>Component Categories (Hover for cost)</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 text-center gap-4 p-6 bg-slate-50/50 overflow-y-auto flex-1">
               {items.map((item, i) => (
                  <motion.div 
                     key={item.name} 
                     initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i }}
                     className="p-4 bg-white border border-slate-200 shadow-sm rounded-xl flex items-center justify-between group hover:border-blue-400 hover:shadow-md transition-all cursor-crosshair"
                  >
                     <span className="text-slate-700 font-medium text-left text-sm md:text-base">{item.name}</span>
                     <span className="font-mono text-blue-600 bg-blue-50 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap ml-4">
                         {item.cost} ₪
                     </span>
                  </motion.div>
               ))}
            </div>
            <div className="bg-blue-600 p-6 flex items-center justify-between text-white shrink-0">
               {!showTotal ? (
                 <button 
                    onClick={() => setShowTotal(true)}
                    className="flex items-center gap-2 bg-white text-blue-700 hover:bg-slate-100 px-6 py-3 rounded-xl font-bold font-mono tracking-widest transition-colors w-full justify-center"
                 >
                    <DollarSign className="w-5 h-5" /> Calculate Total System Cost
                 </button>
               ) : (
                 <div className="flex items-center justify-between w-full px-6">
                    <span className="font-mono font-bold tracking-widest uppercase opacity-80">Estimated Deployment Cost</span>
                    <span className="text-4xl font-display font-bold">{displayTotal} ₪</span>
                 </div>
               )}
            </div>
         </div>
       </div>
    </SlideLayout>
  );
}
