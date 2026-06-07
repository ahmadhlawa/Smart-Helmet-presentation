import React from 'react';
import { motion } from 'motion/react';
import { 
  Network, Shield, Wifi, Globe, Braces, Terminal, Cpu, 
  Lock, UserCheck, AlertCircle, RefreshCw, CheckCircle, 
  Server, User, LayoutDashboard, ShieldCheck,
  ChevronRight, ArrowRight, ArrowDown, Share2, Cloud,
  Monitor, Users, ClipboardList, Clock, Zap, TrendingUp
} from 'lucide-react';

export function BackupSlide({ onClose }: { onClose: () => void }) {
  const protocols = [
    { title: "Wi-Fi (802.11 b/g/n)", desc: "Data Transmission", icon: Wifi },
    { title: "HTTP / HTTPS", desc: "API Communication", icon: Globe },
    { title: "JSON", desc: "Data Format", icon: Braces },
    { title: "UART", desc: "GPS Communication", icon: Terminal },
    { title: "I²C", desc: "MPU6050 Communication", icon: Cpu }
  ];

  const securityFeatures = [
    { title: "Admin Login Authentication", desc: "Only authorized administrators can access the system.", icon: Users },
    { title: "API Request Validation", desc: "All API requests are validated before processing.", icon: ShieldCheck },
    { title: "Secure HTTP/HTTPS Communication", desc: "Data is transmitted securely to prevent interception.", icon: Lock },
    { title: "Event Logging & Monitoring", desc: "All events and alerts are recorded for traceability and review.", icon: ClipboardList }
  ];

  const flowNodes = [
    { label: "SMART HELMET", sub: "Sensors + ESP32", icon: "/logo.png", isImage: true },
    { label: "Wi-Fi", sub: "802.11 b/g/n", icon: Wifi, isImage: false },
    { label: "REST API", sub: "JSON over HTTP/HTTPS", icon: Cloud, isImage: false },
    { label: "DASHBOARD", sub: "Web Application", icon: Monitor, isImage: false },
    { label: "SUPERVISOR", sub: "Monitoring & Alerts", icon: User, isImage: false }
  ];

  const benefits = [
    { title: "Real-Time\nMonitoring", icon: Clock },
    { title: "Fast Alert\nDelivery", icon: Zap },
    { title: "Controlled\nAccess", icon: Lock },
    { title: "Scalable\nArchitecture", icon: TrendingUp }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 20 }}
      transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
      className="absolute inset-0 z-[100] bg-[#f8fafc] flex flex-col font-sans overflow-hidden"
    >
       {/* Animated Background Grid Pattern */}
       <motion.div 
          animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 pointer-events-none opacity-[0.2]" 
          style={{ backgroundImage: 'linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
       />

       <div className="flex-1 flex flex-col px-6 xl:px-10 pb-4 w-full mx-auto z-10 pt-4 xl:pt-8 min-h-0">
          
          <motion.button 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, type: "spring" }}
            onClick={onClose}
            className="absolute top-6 right-8 bg-white border border-slate-200 text-slate-500 hover:text-red-600 hover:bg-red-50 p-2.5 flex items-center gap-2 rounded-full shadow-sm hover:shadow-md transition-all font-medium group z-50 overflow-hidden"
          >
            <motion.div
               animate={{ x: [0, -4, 0] }}
               transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            </motion.div>
            <span className="pr-2 text-sm z-10">Return</span>
          </motion.button>

          <div className="max-w-[1500px] mx-auto w-full flex-1 flex flex-col">
             {/* Header section */}
             <div className="flex items-center gap-4 xl:gap-6 mb-4 xl:mb-6 w-full relative shrink-0">
                <motion.div
                   initial={{ opacity: 0, rotate: -90, scale: 0.2 }}
                   animate={{ opacity: 1, rotate: 0, scale: 1 }}
                   transition={{ delay: 0.1, type: "spring", stiffness: 300, damping: 15 }}
                   className="w-16 h-16 xl:w-20 xl:h-20 shrink-0 bg-white border-4 border-blue-100 rounded-full shadow-lg flex items-center justify-center p-3 relative z-10 box-content"
                >
                   <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                   >
                     <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
                   </motion.div>
                   
                   {/* Expanding glow on logo */}
                   <motion.div 
                      animate={{ scale: [1, 1.4, 1], opacity: [0, 0.4, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 bg-blue-300 rounded-full -z-10 blur-md"
                   />
                </motion.div>
                
                <div className="flex flex-col flex-1 relative z-10 mt-1 xl:mt-2">
                   <div className="overflow-hidden">
                      <motion.h1 
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 150, damping: 20 }}
                        className="text-3xl xl:text-4xl font-bold text-[#0B1536] tracking-tight uppercase mb-1 drop-shadow-sm"
                      >
                        SECURITY & COMMUNICATION
                      </motion.h1>
                   </div>
                   <motion.div 
                     initial={{ opacity: 0, filter: "blur(10px)" }}
                     animate={{ opacity: 1, filter: "blur(0px)" }}
                     transition={{ delay: 0.4, duration: 0.5 }}
                     className="flex items-center text-slate-500 text-base xl:text-lg font-medium w-full"
                   >
                      <span className="shrink-0 pr-6">Secure, Reliable and Real-time Data Communication</span>
                      
                      {/* Animated line extending to the right with sweeping gradient mask */}
                      <div className="flex-1 h-3 flex items-center pr-12 xl:pr-24 relative overflow-hidden">
                         <motion.div 
                           initial={{ x: "-100%" }}
                           animate={{ x: "0%" }}
                           transition={{ delay: 0.5, duration: 1, type: "spring", bounce: 0 }}
                           className="h-[2px] bg-blue-300 relative w-full"
                         >
                            <motion.div 
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.8, type: "spring", bounce: 0.6 }}
                              className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"
                            />
                            
                            {/* Scanning beam on line */}
                            <motion.div
                               animate={{ left: ["-10%", "110%"] }}
                               transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
                               className="absolute top-1/2 -translate-y-1/2 w-16 h-[2px] bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,1)]"
                            />
                         </motion.div>
                      </div>
                   </motion.div>
                </div>
             </div>

             {/* Three Column Layout */}
             <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-4 xl:gap-8 w-full flex-1 min-h-0 mb-4 xl:mb-6">
                
                {/* LEFT COLUMN: Protocols */}
                <motion.div 
                   initial={{ opacity: 0, x: -50, rotateY: 15 }}
                   animate={{ opacity: 1, x: 0, rotateY: 0 }}
                   transition={{ delay: 0.5, type: "spring", stiffness: 100, damping: 15 }}
                   style={{ perspective: 1000 }}
                   className="bg-white rounded-[1.5rem] shadow-lg overflow-hidden flex flex-col border border-slate-100 relative group"
                >
                   {/* Cool column bg glow */}
                   <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 focus-blur rounded-bl-full opacity-50 pointer-events-none transition-all group-hover:bg-blue-100 group-hover:scale-150 duration-700 blur-2xl" />

                   <div className="bg-[#0B1536] p-3 xl:p-4 flex items-center gap-3 text-white shrink-0 relative z-10 overflow-hidden">
                      <motion.div
                         animate={{ rotate: [0, 360] }}
                         transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                         <Share2 className="w-5 h-5 text-blue-400" />
                      </motion.div>
                      <h2 className="text-base xl:text-lg font-semibold tracking-wide uppercase">COMMUNICATION PROTOCOLS</h2>
                      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                   </div>
                   
                   {/* Table Header */}
                   <div className="grid grid-cols-[1fr_1fr] px-6 py-2 xl:px-8 xl:py-3 border-b border-slate-100 uppercase text-blue-500 font-semibold text-xs tracking-wider shrink-0 relative z-10">
                      <div>PROTOCOL</div>
                      <div>PURPOSE</div>
                   </div>

                   {/* Table Rows */}
                   <div className="flex flex-col flex-1 relative z-10">
                      {protocols.map((prot, i) => {
                         const Icon = prot.icon;
                         return (
                            <motion.div 
                               initial={{ opacity: 0, x: -30 }}
                               animate={{ opacity: 1, x: 0 }}
                               whileHover={{ scale: 1.02, x: 5, backgroundColor: "rgb(248 250 252)" }}
                               transition={{ delay: 0.7 + i * 0.1, type: "spring", stiffness: 200 }}
                               key={i} 
                               className="grid grid-cols-[1fr_1fr] px-6 py-2.5 xl:px-8 xl:py-4 border-b border-slate-100 items-center group flex-1 cursor-default origin-left"
                            >
                               <div className="flex items-center gap-3">
                                  <div className="relative">
                                     <Icon className="w-5 h-5 text-blue-500 relative z-10" />
                                     <div className="absolute inset-0 bg-blue-300 blur-sm scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-50 transition-all duration-300" />
                                  </div>
                                  <span className="font-bold text-slate-800 text-[13px] xl:text-[15px]">{prot.title}</span>
                               </div>
                               <div className="text-slate-600 font-medium text-[12px] xl:text-sm">
                                  {prot.desc}
                               </div>
                            </motion.div>
                         );
                      })}
                   </div>
                </motion.div>

                {/* MIDDLE COLUMN: Data Flow */}
                <div className="flex flex-col items-center shrink-0 min-w-[240px] xl:min-w-[280px] pt-0">
                   <motion.h2 
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6, type: "spring" }}
                      className="text-blue-600 font-bold text-base xl:text-lg tracking-wider uppercase mb-3 shrink-0"
                   >
                      DATA FLOW
                   </motion.h2>
                   
                   <div className="flex flex-col items-center w-full relative flex-1 justify-between py-1">
                      {flowNodes.map((node, i) => {
                         const NodeIcon = node.icon;
                         return (
                            <React.Fragment key={i}>
                               <motion.div 
                                  initial={{ opacity: 0, scale: 0.5, y: -20 }}
                                  animate={{ opacity: 1, scale: 1, y: 0 }}
                                  whileHover={{ scale: 1.05 }}
                                  transition={{ delay: 0.7 + i * 0.15, type: "spring", stiffness: 200, damping: 10 }}
                                  className="bg-white border-2 border-blue-200/60 rounded-xl p-2 xl:p-3 w-full flex items-center gap-3 shadow-sm relative z-10 group hover:border-blue-400 hover:shadow-lg transition-all h-[60px] xl:h-[70px] overflow-hidden"
                               >
                                  {/* Node hover shine */}
                                  <div className="absolute top-0 right-0 w-[150%] h-[150%] bg-gradient-to-r from-transparent via-white/80 to-transparent rotate-45 -translate-x-[150%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none" />

                                  <motion.div 
                                     animate={i % 2 === 0 ? { y: [0, -3, 0] } : { y: [0, 3, 0] }}
                                     transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                                     className="w-10 h-10 xl:w-12 xl:h-12 rounded-full bg-blue-50 flex flex-col items-center justify-center shrink-0 text-blue-500 overflow-hidden relative border border-blue-100"
                                  >
                                     {node.isImage ? (
                                       <img src={node.icon as string} alt="icon" className="w-6 h-6 xl:w-7 xl:h-7 object-contain" />
                                     ) : (
                                       <NodeIcon className="w-5 h-5 xl:w-6 xl:h-6" />
                                     )}
                                  </motion.div>
                                  <div className="flex flex-col justify-center">
                                     <h3 className="font-bold text-[#0B1536] text-[12px] xl:text-[14px] leading-tight mb-0.5">{node.label}</h3>
                                     <p className="text-slate-500 text-[10px] xl:text-[12px] font-medium leading-tight">{node.sub}</p>
                                  </div>
                               </motion.div>
                               
                               {i < flowNodes.length - 1 && (
                                  <div className="flex-1 flex flex-col items-center justify-center relative w-full h-full min-h-[16px]">
                                     <motion.div 
                                       initial={{ height: 0, opacity: 0 }}
                                       animate={{ height: "100%", opacity: 1 }}
                                       transition={{ delay: 0.9 + i * 0.15, duration: 0.4 }}
                                       className="w-[2px] h-full bg-blue-300 relative overflow-hidden"
                                     >
                                       {/* Animated packet dropping down the pipeline */}
                                       <motion.div 
                                         animate={{ y: ["-100%", "500%"] }}
                                         transition={{ duration: 1.2, repeat: Infinity, ease: "linear", delay: i * 0.3 }}
                                         className="absolute top-0 left-0 w-full h-[15px] bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,1)] rounded-full"
                                       />
                                     </motion.div>
                                     
                                     {/* Pulsing Down Arrow */}
                                     <motion.div 
                                       initial={{ opacity: 0, scale: 0 }}
                                       animate={{ opacity: 1, scale: 1 }}
                                       transition={{ delay: 1 + i * 0.15, type: "spring" }}
                                       className="absolute top-1/2 -translate-y-1/2 text-blue-500 z-20 bg-[#f8fafc] rounded-full p-0.5 border border-blue-200"
                                     >
                                        <motion.div
                                           animate={{ y: [0, 2, 0] }}
                                           transition={{ duration: 1, repeat: Infinity }}
                                        >
                                           <ArrowDown className="w-3 h-3" />
                                        </motion.div>
                                     </motion.div>
                                  </div>
                               )}
                            </React.Fragment>
                         );
                      })}
                   </div>
                </div>

                {/* RIGHT COLUMN: Security Features */}
                <motion.div 
                   initial={{ opacity: 0, x: 50, rotateY: -15 }}
                   animate={{ opacity: 1, x: 0, rotateY: 0 }}
                   transition={{ delay: 0.6, type: "spring", stiffness: 100, damping: 15 }}
                   style={{ perspective: 1000 }}
                   className="bg-white rounded-[1.5rem] shadow-lg overflow-hidden flex flex-col border border-slate-100 relative group"
                >
                   {/* Cool column bg glow */}
                   <div className="absolute top-0 left-0 w-32 h-32 bg-amber-50 focus-blur rounded-br-full opacity-50 pointer-events-none transition-all group-hover:bg-amber-100 group-hover:scale-150 duration-700 blur-2xl" />

                   <div className="bg-[#0B1536] p-3 xl:p-4 flex items-center gap-3 text-white shrink-0 relative z-10 overflow-hidden">
                      <motion.div
                         animate={{ rotateY: [0, 360] }}
                         transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                      >
                         <Shield className="w-5 h-5 text-amber-400 fill-amber-400/20" />
                      </motion.div>
                      <h2 className="text-base xl:text-lg font-semibold tracking-wide uppercase">SECURITY FEATURES</h2>
                      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-transparent via-white/5 to-transparent translate-x-[100%] group-hover:-translate-x-[100%] transition-transform duration-1000" />
                   </div>
                   
                   <div className="flex flex-col flex-1 relative z-10">
                      {securityFeatures.map((sec, i) => {
                         const Icon = sec.icon;
                         return (
                            <motion.div 
                               initial={{ opacity: 0, x: 30 }}
                               animate={{ opacity: 1, x: 0 }}
                               whileHover={{ scale: 1.02, x: -5, backgroundColor: "rgb(248 250 252)" }}
                               transition={{ delay: 0.8 + i * 0.1, type: "spring", stiffness: 200 }}
                               key={i} 
                               className="flex items-start gap-3 xl:gap-4 px-4 py-3 xl:px-6 xl:py-4 border-b border-slate-100 last:border-0 items-center group flex-1 cursor-default origin-right"
                            >
                               <div className="text-amber-500 shrink-0 flex items-center justify-center relative">
                                  <Icon className="w-6 h-6 xl:w-8 xl:h-8 relative z-10" />
                                  <div className="absolute inset-0 bg-amber-300 blur-sm scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-50 transition-all duration-300" />
                               </div>
                               <div className="flex flex-col justify-center h-full">
                                  <h3 className="font-bold text-slate-800 text-[13px] xl:text-[15px] mb-0.5 group-hover:text-amber-600 transition-colors">{sec.title}</h3>
                                  <p className="text-slate-500 text-[11px] xl:text-[13px] font-medium leading-snug lg:leading-relaxed max-w-[280px]">
                                     {sec.desc}
                                  </p>
                               </div>
                            </motion.div>
                         );
                      })}
                   </div>
                </motion.div>

             </div>

             {/* BOTTOM ROW: System Benefits */}
             <motion.div 
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.9, type: "spring", stiffness: 100 }}
                className="bg-white rounded-[1.5rem] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-blue-100 p-3 xl:p-4 flex flex-col lg:flex-row items-center gap-4 xl:gap-6 shrink-0 w-full relative overflow-hidden"
             >
                {/* Subtle animated gradient across the bottom bar */}
                <motion.div 
                   animate={{ x: ["-100%", "200%"] }}
                   transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                   className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/50 to-transparent pointer-events-none"
                />

                <motion.h2 
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: 1.2 }}
                   className="text-blue-600 font-bold text-base xl:text-lg tracking-widest w-full lg:w-auto text-center lg:text-left shrink-0 pl-1 xl:pl-4 whitespace-nowrap relative z-10"
                >
                   SYSTEM BENEFITS
                </motion.h2>
                
                <div className="hidden lg:block w-[2px] h-8 bg-blue-100 shrink-0 mx-2 relative z-10" />
                
                <div className="flex flex-wrap lg:flex-nowrap justify-between w-full gap-2 relative z-10">
                   {benefits.map((bn, i) => {
                      const Icon = bn.icon;
                      return (
                         <motion.div 
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            transition={{ delay: 1.1 + i * 0.1, type: "spring" }}
                            key={i} 
                            className="flex items-center gap-2 xl:gap-3 flex-1 justify-center lg:justify-start group cursor-default"
                         >
                            <div className="text-blue-500 bg-blue-50 p-2 rounded-xl group-hover:bg-blue-500 group-hover:text-white transition-all shadow-sm">
                               <Icon className="w-5 h-5 xl:w-6 xl:h-6" />
                            </div>
                            <span className="text-slate-700 font-bold text-[10px] xl:text-[13px] leading-tight whitespace-pre-line text-left">
                               {bn.title}
                            </span>
                         </motion.div>
                      )
                   })}
                </div>
             </motion.div>
          </div>
       </div>
    </motion.div>
  );
}
