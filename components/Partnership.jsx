
// import React from 'react';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import { Rocket, Building2, Users, Briefcase, Check, ArrowRight } from 'lucide-react';
// import MotionWrapper from './MotionWrapper';

// const INDUSTRIES = [
//   "E-Commerce", "Charitable Trust", "Tech", "Real Estate", 
//   "Education", "Resort", "Food", "Startups", "Enterprises"
// ];

// const SEGMENTS = [
//   {
//     title: "StartUp",
//     subtitle: "Launch with confidence",
//     icon: <Rocket className="w-8 h-8" />,
//     features: [
//       "Branding & development",
//       "Go-to-market strategy",
//       "Digital growth support"
//     ],
//     color: "from-blue-500/20 to-transparent"
//   },
//   {
//     title: "SMBs",
//     subtitle: "Improve visibility",
//     icon: <Building2 className="w-8 h-8" />,
//     features: [
//       "Increase sales",
//       "Scalable solutions",
//       "Compete online effectively"
//     ],
//     color: "from-gold-500/20 to-transparent"
//   },
//   {
//     title: "Agencies & Studios",
//     subtitle: "White-label design services",
//     icon: <Users className="w-8 h-8" />,
//     features: [
//       "Marketing support",
//       "Reliable backend partner",
//       "Seamless collaboration"
//     ],
//     color: "from-brand-500/20 to-transparent"
//   },
//   {
//     title: "Enterprises",
//     subtitle: "Custom web development",
//     icon: <Briefcase className="w-8 h-8" />,
//     features: [
//       "Technical consultation",
//       "Digital strategies",
//       "Dedicated support"
//     ],
//     color: "from-zinc-500/20 to-transparent"
//   }
// ];

// const Partnership = () => {
//   const navigate = useNavigate();

//   return (
//     <section className="py-20 bg-white overflow-hidden">
//       <div className="container mx-auto px-6">
        
//         <div className="max-w-4xl mb-24">
//           <MotionWrapper variant="fade">
//             <h2 className="text-gold-600 font-bold uppercase tracking-[0.4em] text-[10px] mb-6">Client Ecosystem</h2>
//             <h3 className="text-4xl md:text-6xl font-display font-black text-zinc-900 mb-8 tracking-tighter uppercase">
//               Who We <span className="text-gold-500">Work With</span>
//             </h3>
//             <p className="text-xl text-zinc-500 leading-relaxed font-medium max-w-2xl">
//               We partner with businesses of all sizes across various industries to deliver exceptional digital solutions that redefine market presence.
//             </p>
//           </MotionWrapper>
//         </div>

//         <div className="mb-32 relative py-10 border-y border-zinc-100">
//           <motion.div 
//             animate={{ x: [0, -1000] }}
//             transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
//             className="flex gap-20 whitespace-nowrap items-center"
//           >
//             {[...INDUSTRIES, ...INDUSTRIES].map((industry, i) => (
//               <div key={i} className="flex items-center gap-8">
//                 <span className="text-2xl font-display font-black text-zinc-200 uppercase tracking-tighter hover:text-gold-500 transition-colors cursor-default">
//                   {industry}
//                 </span>
//                 <div className="w-2 h-2 rounded-full bg-gold-500" />
//               </div>
//             ))}
//           </motion.div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {SEGMENTS.map((segment, idx) => (
//             <MotionWrapper key={idx} delay={idx * 0.1} variant="fade">
//               <div className="group relative h-full bg-zinc-950 rounded-[3rem] p-10 flex flex-col transition-all duration-700 hover:-translate-y-4 border border-white/5 overflow-hidden">
//                 <div className={`absolute inset-0 bg-gradient-to-br ${segment.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                
//                 <div className="relative z-10 flex flex-col h-full">
//                   <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-gold-500 mb-10 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
//                     {segment.icon}
//                   </div>
                  
//                   <h4 className="text-2xl font-display font-black text-white uppercase tracking-tight mb-2">
//                     {segment.title}
//                   </h4>
//                   <p className="text-gold-500/80 text-xs font-bold uppercase tracking-widest mb-8">
//                     {segment.subtitle}
//                   </p>

//                   <ul className="space-y-4 mb-auto">
//                     {segment.features.map((feature, i) => (
//                       <li key={i} className="flex items-start gap-3 text-zinc-400 group-hover:text-zinc-200 transition-colors">
//                         <Check size={14} className="text-gold-500 mt-1 shrink-0" />
//                         <span className="text-sm font-medium leading-relaxed">{feature}</span>
//                       </li>
//                     ))}
//                   </ul>

//                   <button 
//                     onClick={() => navigate('/services')}
//                     className="mt-12 flex items-center gap-3 text-[10px] font-black text-white uppercase tracking-[0.3em] group/btn hover:text-gold-500 transition-colors"
//                   >
//                     Learn More 
//                     <ArrowRight size={14} className="text-gold-500 group-hover/btn:translate-x-2 transition-transform" />
//                   </button>
//                 </div>
//               </div>
//             </MotionWrapper>
//           ))}
//         </div>

//         <div className="mt-40 border-t border-zinc-100 pt-20 flex flex-col lg:flex-row justify-between items-center gap-12">
//            <div className="max-w-xl">
//               <h5 className="text-zinc-900 text-3xl font-display font-black uppercase tracking-tighter mb-4">Our Partnership <span className="text-gold-500">Approach</span></h5>
//               <p className="text-zinc-500 font-medium">Collaboration, innovation, and results. We don't just work for you; we build the future with you.</p>
//            </div>
//            <div className="flex gap-4">
//               <div className="w-12 h-1 bg-gold-500 rounded-full" />
//               <div className="w-24 h-1 bg-zinc-200 rounded-full" />
//               <div className="w-12 h-1 bg-zinc-100 rounded-full" />
//            </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Partnership;


// import React from 'react';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import { 
//   Rocket, 
//   Building2, 
//   Users, 
//   Briefcase, 
//   Check, 
//   ArrowRight,
//   Sparkles,
//   TrendingUp,
//   Globe2,
//   Shield,
//   Zap,
//   Target
// } from 'lucide-react';
// import MotionWrapper from './MotionWrapper';

// const INDUSTRIES = [
//   "E-Commerce", "Charitable Trust", "Technology", "Real Estate", 
//   "Education", "Hospitality", "Food & Beverage", "Startups", "Enterprise",
//   "Healthcare", "Finance", "Manufacturing"
// ];

// const SEGMENTS = [
//   {
//     title: "Startups",
//     subtitle: "Launch & Scale",
//     icon: <Rocket size={28} strokeWidth={1.5} />,
//     features: [
//       "Brand identity & positioning",
//       "Go-to-market acceleration",
//       "Digital growth infrastructure",
//       "Investor-ready presentations"
//     ],
//     gradient: "from-blue-600 to-blue-400",
//     stats: "150+ startups launched"
//   },
//   {
//     title: "SMBs",
//     subtitle: "Growth & Visibility",
//     icon: <TrendingUp size={28} strokeWidth={1.5} />,
//     features: [
//       "Revenue optimization",
//       "Market expansion strategies",
//       "Digital presence transformation",
//       "Customer acquisition systems"
//     ],
//     gradient: "from-amber-600 to-amber-400",
//     stats: "92% client retention"
//   },
//   {
//     title: "Agencies",
//     subtitle: "White-Label Solutions",
//     icon: <Users size={28} strokeWidth={1.5} />,
//     features: [
//       "Scalable delivery capacity",
//       "Enterprise-grade execution",
//       "Seamless brand integration",
//       "Dedicated partnership team"
//     ],
//     gradient: "from-emerald-600 to-emerald-400",
//     stats: "50+ agency partners"
//   },
//   {
//     title: "Enterprises",
//     subtitle: "Digital Excellence",
//     icon: <Building2 size={28} strokeWidth={1.5} />,
//     features: [
//       "Digital transformation",
//       "Custom platform development",
//       "Enterprise architecture",
//       "24/7 premium support"
//     ],
//     gradient: "from-violet-600 to-violet-400",
//     stats: "Fortune 500 trusted"
//   }
// ];

// const Partnership = () => {
//   const navigate = useNavigate();

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.3
//       }
//     }
//   };

//   return (
//     <section className="relative py-32 bg-white overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-[0.02]">
//         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[length:24px_24px]" />
//       </div>

//       <div className="container relative mx-auto px-6 lg:px-8">
//         {/* Header Section */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="max-w-4xl mb-24"
//         >
//           <div className="flex items-center gap-4 mb-6">
//             <span className="h-px w-12 bg-gradient-to-r from-gold-500 to-transparent" />
//             <h2 className="text-gold-600 font-semibold uppercase tracking-[0.3em] text-xs">
//               Client Ecosystem
//             </h2>
//           </div>
          
//           <h3 className="text-5xl md:text-7xl font-display font-bold text-zinc-900 mb-8 tracking-tight">
//             Who We{' '}
//             <span className="relative inline-block">
//               <span className="relative z-10 text-gold-500">Partner With</span>
//               <motion.span 
//                 initial={{ width: 0 }}
//                 whileInView={{ width: '100%' }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8, delay: 0.3 }}
//                 className="absolute bottom-2 left-0 h-3 bg-gold-500/10 -z-0"
//               />
//             </span>
//           </h3>
          
//           <p className="text-xl text-zinc-600 leading-relaxed max-w-2xl">
//             We collaborate with forward-thinking organizations across industries to deliver 
//             exceptional digital solutions that redefine market presence and drive sustainable growth.
//           </p>
//         </motion.div>

//         {/* Industry Marquee */}
//         <div className="mb-32 relative py-12">
//           <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white z-10 pointer-events-none" />
          
//           <motion.div 
//             animate={{ x: [0, -2000] }}
//             transition={{ 
//               duration: 40, 
//               repeat: Infinity, 
//               ease: "linear",
//               repeatType: "loop"
//             }}
//             className="flex gap-16 whitespace-nowrap"
//           >
//             {[...INDUSTRIES, ...INDUSTRIES, ...INDUSTRIES].map((industry, i) => (
//               <div key={i} className="flex items-center gap-8">
//                 <span className="text-2xl font-display font-medium text-zinc-300 hover:text-gold-500 transition-colors cursor-default tracking-tight">
//                   {industry}
//                 </span>
//                 <div className="w-1.5 h-1.5 rounded-full bg-gold-400/40" />
//               </div>
//             ))}
//           </motion.div>
//         </div>

//         {/* Segments Grid */}
//         <motion.div 
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
//         >
//           {SEGMENTS.map((segment, idx) => (
//             <MotionWrapper key={idx} delay={idx * 0.1} variant="fade">
//               <motion.div 
//                 whileHover={{ y: -8 }}
//                 transition={{ type: "spring", stiffness: 300, damping: 20 }}
//                 className="group relative h-full bg-zinc-900 rounded-3xl p-8 flex flex-col cursor-pointer border border-white/5 hover:border-gold-500/20 transition-colors"
//                 onClick={() => navigate('/services')}
//               >
//                 {/* Gradient Overlay */}
//                 <div className={`absolute inset-0 bg-gradient-to-br ${segment.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`} />
                
//                 {/* Icon */}
//                 <div className="relative mb-8">
//                   <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${segment.gradient} flex items-center justify-center text-white shadow-lg`}>
//                     {segment.icon}
//                   </div>
                  
//                   {/* Stats Badge */}
//                   <motion.span 
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     transition={{ delay: 0.2 + idx * 0.1 }}
//                     className="absolute -top-2 -right-2 px-3 py-1 bg-white text-zinc-900 text-[10px] font-bold rounded-full shadow-lg"
//                   >
//                     {segment.stats}
//                   </motion.span>
//                 </div>

//                 {/* Content */}
//                 <h4 className="text-2xl font-display font-bold text-white mb-1 tracking-tight">
//                   {segment.title}
//                 </h4>
//                 <p className={`text-sm font-medium bg-gradient-to-r ${segment.gradient} bg-clip-text text-transparent mb-6`}>
//                   {segment.subtitle}
//                 </p>

//                 {/* Features */}
//                 <ul className="space-y-3 mb-8 flex-grow">
//                   {segment.features.map((feature, i) => (
//                     <motion.li 
//                       key={i}
//                       initial={{ opacity: 0, x: -10 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       transition={{ delay: 0.3 + i * 0.1 }}
//                       className="flex items-start gap-3"
//                     >
//                       <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${segment.gradient} bg-opacity-10 flex items-center justify-center flex-shrink-0 mt-0.5`}>
//                         <Check size={12} className="text-white" />
//                       </div>
//                       <span className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
//                         {feature}
//                       </span>
//                     </motion.li>
//                   ))}
//                 </ul>

//                 {/* CTA Button */}
//                 <motion.button 
//                   whileHover={{ x: 5 }}
//                   className="flex items-center gap-2 text-xs font-semibold text-white/60 hover:text-gold-500 transition-colors group/btn"
//                 >
//                   <span>Explore solutions</span>
//                   <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
//                 </motion.button>

//                 {/* Decorative Corner */}
//                 <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
//                   <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${segment.gradient} opacity-10 blur-xl`} />
//                 </div>
//               </motion.div>
//             </MotionWrapper>
//           ))}
//         </motion.div>

//         {/* Footer Section */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="mt-32 pt-20 border-t border-zinc-100"
//         >
//           <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
//             <div className="max-w-2xl">
//               <div className="flex items-center gap-3 mb-4">
//                 <Sparkles size={20} className="text-gold-500" />
//                 <h5 className="text-zinc-900 text-2xl font-display font-bold tracking-tight">
//                   Our Partnership{' '}
//                   <span className="text-gold-500">Philosophy</span>
//                 </h5>
//               </div>
//               <p className="text-zinc-600 text-lg leading-relaxed">
//                 We believe in building lasting relationships through transparency, innovation, 
//                 and measurable results. Let's create something extraordinary together.
//               </p>
//             </div>

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => navigate('/contact')}
//               className="group relative px-8 py-4 bg-zinc-900 text-white rounded-full font-semibold overflow-hidden"
//             >
//               <span className="relative z-10 flex items-center gap-2">
//                 Start a conversation
//                 <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
//               </span>
//               <motion.div 
//                 className="absolute inset-0 bg-gradient-to-r from-gold-500 to-amber-500"
//                 initial={{ x: '100%' }}
//                 whileHover={{ x: 0 }}
//                 transition={{ duration: 0.3 }}
//               />
//             </motion.button>
//           </div>

//           {/* Progress Indicators */}
//           <div className="flex gap-3 mt-12">
//             {[1, 2, 3, 4, 5].map((_, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ width: i === 0 ? 48 : 12 }}
//                 whileHover={{ width: 48 }}
//                 transition={{ duration: 0.3 }}
//                 className={`h-1 rounded-full ${
//                   i === 0 ? 'bg-gold-500' : 'bg-zinc-200'
//                 }`}
//               />
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Partnership;

// import React, { useState, useEffect, useRef } from 'react';
// //import { createRoot } from 'react-dom/client';
// import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
// import { 
//   Rocket, 
//   Building2, 
//   Users, 
//   Check, 
//   ArrowRight,
//   Sparkles,
//   TrendingUp,
//   Globe2,
//   Shield,
//   Zap,
//   Target,
//   MessageSquare,
//   X,
//   Loader2,
//   ExternalLink,
//   ChevronRight,
//   Menu,
//   Leaf,
//   Circle
// } from 'lucide-react';


//   const Partnership = () => {
//   const sectionRef = useRef<HTMLElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"]
//   });

//   const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
//   const contentY = useTransform(smoothProgress, [0, 1], [100, -100]);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.3
//       }
//     }
//   };

//   return (
//     <section 
//       id="partnership" 
//       ref={sectionRef}
//       className="relative min-h-screen py-32 bg-[#e8f1f4] overflow-hidden flex flex-col justify-center border-y border-zinc-100"
//     >
//       <WireframeGlobe scrollProgress={smoothProgress} />
//       <FloatingSpheres scrollProgress={smoothProgress} />

//       <div className="container relative mx-auto px-6 lg:px-8 z-10">
//         <motion.div 
//           style={{ y: contentY }}
//           className="max-w-4xl mb-24"
//         >
//           <motion.div 
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="flex items-center gap-4 mb-6"
//           >
//             <span className="h-px w-12 bg-zinc-900" />
//             <h2 className="text-zinc-900 font-bold uppercase tracking-[0.4em] text-[10px]">
//               Ecosystem Partnerships
//             </h2>
//           </motion.div>
          
//           <motion.h3 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-6xl md:text-9xl font-display font-bold text-slate-900 mb-10 tracking-tighter leading-none"
//           >
//             Strategic <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-400">Collaborations</span>
//           </motion.h3>
          
//           <motion.p 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//             className="text-xl text-slate-600 leading-relaxed max-w-2xl font-medium"
//           >
//             Fostering growth through unified digital intelligence. We align with organizations that 
//             demand excellence and prioritize market-shifting innovation.
//           </motion.p>
//         </motion.div>

//         {/* Industry Marquee Carousel */}
//         <div className="mb-32 relative py-12 overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-to-r from-[#e8f1f4] via-transparent to-[#e8f1f4] z-10 pointer-events-none" />
//           <motion.div 
//             animate={{ x: [0, -2000] }}
//             transition={{ 
//               duration: 40, 
//               repeat: Infinity, 
//               ease: "linear",
//               repeatType: "loop"
//             }}
//             className="flex gap-16 whitespace-nowrap"
//           >
//             {[...INDUSTRIES, ...INDUSTRIES, ...INDUSTRIES].map((industry, i) => (
//               <div key={i} className="flex items-center gap-8">
//                 <span className="text-2xl font-display font-medium text-slate-400 hover:text-slate-900 transition-colors cursor-default tracking-tight">
//                   {industry}
//                 </span>
//                 <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
//               </div>
//             ))}
//           </motion.div>
//         </div>

//         <motion.div 
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
//         >
//           {SEGMENTS.map((segment, idx) => (
//             <motion.div 
//               key={idx}
//               whileHover={{ y: -12 }}
//               className="group relative h-full bg-white/60 backdrop-blur-xl rounded-[2.5rem] p-10 flex flex-col cursor-pointer border border-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] hover:shadow-[0_48px_80px_-20px_rgba(0,0,0,0.08)] transition-all overflow-hidden"
//             >
//               <div className="relative mb-12">
//                 <div className={`w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center text-white shadow-xl transition-all group-hover:bg-slate-800`}>
//                   {segment.icon}
//                 </div>
//                 <div className="absolute -bottom-4 -right-2 text-[8px] font-black uppercase tracking-widest text-slate-300">
//                   {segment.stats}
//                 </div>
//               </div>

//               <h4 className="text-2xl font-display font-bold text-slate-900 mb-2 tracking-tight">
//                 {segment.title}
//               </h4>
//               <p className={`text-xs font-bold uppercase tracking-widest bg-gradient-to-r ${segment.gradient} bg-clip-text text-transparent mb-10`}>
//                 {segment.subtitle}
//               </p>

//               <ul className="space-y-4 mb-12 flex-grow">
//                 {segment.features.map((feature, i) => (
//                   <li key={i} className="flex items-start gap-4">
//                     <div className="w-2 h-2 rounded-full bg-slate-200 mt-2 transition-colors group-hover:bg-slate-400" />
//                     <span className="text-sm text-slate-500 group-hover:text-slate-900 transition-colors font-medium leading-tight">
//                       {feature}
//                     </span>
//                   </li>
//                 ))}
//               </ul>

//               <div className="flex items-center justify-between pt-8 border-t border-slate-50">
//                 <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors">Partner Strategy</span>
//                 <div className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-slate-900 group-hover:border-slate-900 transition-all">
//                   <ArrowRight size={14} className="text-slate-400 group-hover:text-white transition-colors" />
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Partnership;

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Rocket, 
  Building2, 
  Users, 
  Check, 
  ArrowRight,
  Sparkles,
  TrendingUp,
  Globe2,
  Shield,
  Zap,
  Target,
  MessageSquare,
  X,
  Loader2,
  ExternalLink,
  ChevronRight,
  Menu,
  Leaf,
  Circle
} from 'lucide-react';

const INDUSTRIES = [
  "Charitable Trust", "Technology", "Real Estate", "Education", 
  "Hospitality", "Food & Beverage", "Startups", "Enterprise", 
  "Healthcare", "Finance", "Manufacturing", "E-Commerce"
];

const SEGMENTS = [
  {
    title: "Startups",
    subtitle: "Launch & Scale",
    icon: <Rocket size={24} strokeWidth={1.5} />,
    features: [
      "Brand identity & positioning",
      "Go-to-market acceleration",
      "Digital growth infrastructure",
      "Investor-ready presentations"
    ],
    gradient: "from-blue-600 to-indigo-400",
    stats: "150+ startups launched"
  },
  {
    title: "SMBs",
    subtitle: "Growth & Visibility",
    icon: <TrendingUp size={24} strokeWidth={1.5} />,
    features: [
      "Revenue optimization",
      "Market expansion strategies",
      "Digital presence transformation",
      "Customer acquisition systems"
    ],
    gradient: "from-sky-600 to-cyan-400",
    stats: "92% client retention"
  },
  {
    title: "Agencies",
    subtitle: "White-Label Solutions",
    icon: <Users size={24} strokeWidth={1.5} />,
    features: [
      "Scalable delivery capacity",
      "Enterprise-grade execution",
      "Seamless brand integration",
      "Dedicated partnership team"
    ],
    gradient: "from-slate-700 to-slate-500",
    stats: "50+ agency partners"
  },
  {
    title: "Enterprises",
    subtitle: "Digital Excellence",
    icon: <Building2 size={24} strokeWidth={1.5} />,
    features: [
      "Digital transformation",
      "Custom platform development",
      "Enterprise architecture",
      "24/7 premium support"
    ],
    gradient: "from-blue-900 to-blue-700",
    stats: "Fortune 500 trusted"
  }
];

const WireframeGlobe = ({ scrollProgress }) => {
  const rotate = useTransform(scrollProgress, [0, 1], [0, 90]);
  const scale = useTransform(scrollProgress, [0, 0.5, 1], [0.8, 1.1, 0.9]);
  
  return (
    <motion.div 
      style={{ rotate, scale }}
      className="absolute top-1/2 -left-20 -translate-y-1/2 w-[1200px] h-[1200px] pointer-events-none opacity-[0.07]"
    >
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-slate-900">
        <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="0.05" />
        {[...Array(12)].map((_, i) => (
          <ellipse key={`h-${i}`} cx="50" cy="50" rx="48" ry={48 * (i / 6)} stroke="currentColor" strokeWidth="0.05" />
        ))}
        {[...Array(12)].map((_, i) => (
          <ellipse key={`v-${i}`} cx="50" cy="50" rx={48 * (i / 6)} ry="48" stroke="currentColor" strokeWidth="0.05" />
        ))}
        <path d="M20 50 Q 50 20 80 50" stroke="currentColor" strokeWidth="0.2" strokeDasharray="1 2" />
        <path d="M20 60 Q 50 30 80 60" stroke="currentColor" strokeWidth="0.2" strokeDasharray="1 2" />
      </svg>
    </motion.div>
  );
};

const FloatingSpheres = ({ scrollProgress }) => {
  const y1 = useTransform(scrollProgress, [0, 1], [100, -200]);
  const y2 = useTransform(scrollProgress, [0, 1], [-50, 300]);
  const y3 = useTransform(scrollProgress, [0, 1], [200, -400]);
  const y4 = useTransform(scrollProgress, [0, 1], [-100, 200]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div style={{ y: y1 }} className="absolute top-[20%] right-[15%] w-64 h-64 rounded-full bg-gradient-to-br from-white to-slate-200 shadow-2xl opacity-40 blur-xl" />
      <motion.div style={{ y: y2 }} className="absolute top-[40%] right-[30%] w-32 h-32 rounded-full bg-white/40 border border-white/60 backdrop-blur-md shadow-xl" />
      <motion.div style={{ y: y3 }} className="absolute top-[60%] right-[10%] w-16 h-16 rounded-full bg-slate-300 shadow-lg opacity-80" />
      <motion.div style={{ y: y4 }} className="absolute bottom-[20%] right-[40%] w-48 h-48 rounded-full bg-blue-100/30 blur-3xl" />
    </div>
  );
};

const Partnership = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const contentY = useTransform(smoothProgress, [0, 1], [100, -100]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section 
      id="partnership" 
      ref={sectionRef}
      className="relative min-h-screen py-12 mt-12 bg-[#e8f1f4] overflow-hidden flex flex-col justify-center border-y border-zinc-100"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[length:24px_24px]" />
      </div>

      <WireframeGlobe scrollProgress={smoothProgress} />
      <FloatingSpheres scrollProgress={smoothProgress} />

      <div className="container relative mx-auto px-6 lg:px-8 z-10">
        <motion.div 
          style={{ y: contentY }}
          className="max-w-4xl mb-24"
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="h-px w-12 bg-zinc-900" />
            <h2 className="text-zinc-900 font-bold uppercase tracking-[0.4em] text-[10px]">
              Ecosystem Partnerships
            </h2>
          </motion.div>
          
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-10 tracking-tighter leading-none"
          >
            Strategic <br />
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-400">
                Collaborations
              </span>
              <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute bottom-2 left-0 h-3 bg-slate-900/5 -z-0"
              />
            </span>
          </motion.h3>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed max-w-2xl font-medium"
          >
            Fostering growth through unified digital intelligence. We align with organizations that 
            demand excellence and prioritize market-shifting innovation.
          </motion.p>
        </motion.div>

        <div className="mb-32 relative py-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#e8f1f4] via-transparent to-[#e8f1f4] z-10 pointer-events-none" />
          <motion.div 
            animate={{ x: [0, -2000] }}
            transition={{ 
              duration: 40, 
              repeat: Infinity, 
              ease: "linear",
              repeatType: "loop"
            }}
            className="flex gap-16 whitespace-nowrap"
          >
            {[...INDUSTRIES, ...INDUSTRIES, ...INDUSTRIES].map((industry, i) => (
              <div key={i} className="flex items-center gap-8">
                <span className="text-2xl font-display font-medium text-slate-400 hover:text-slate-900 transition-colors cursor-default tracking-tight">
                  {industry}
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {SEGMENTS.map((segment, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -12 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative h-full bg-white/60 backdrop-blur-xl rounded-[2.5rem] p-10 flex flex-col cursor-pointer border border-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] hover:shadow-[0_48px_80px_-20px_rgba(0,0,0,0.08)] transition-all overflow-hidden"
              onClick={() => navigate('/services')}
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${segment.gradient} opacity-0 group-hover:opacity-5 rounded-[2.5rem] transition-opacity duration-500`} />
              
              <div className="relative mb-12">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${segment.gradient} flex items-center justify-center text-white shadow-xl transition-all group-hover:scale-110 group-hover:shadow-2xl`}>
                  {segment.icon}
                </div>
                
                {/* Stats Badge */}
                <motion.span 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="absolute -top-2 -right-2 px-3 py-1 bg-white text-slate-900 text-[10px] font-bold rounded-full shadow-lg border border-slate-100"
                >
                  {segment.stats}
                </motion.span>
              </div>

              <h4 className="text-2xl font-display font-bold text-slate-900 mb-2 tracking-tight">
                {segment.title}
              </h4>
              <p className={`text-xs font-bold uppercase tracking-widest bg-gradient-to-r ${segment.gradient} bg-clip-text text-transparent mb-8`}>
                {segment.subtitle}
              </p>

              <ul className="space-y-4 mb-12 flex-grow">
                {segment.features.map((feature, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${segment.gradient} flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md`}>
                      <Check size={12} className="text-white" />
                    </div>
                    <span className="text-sm text-slate-500 group-hover:text-slate-700 transition-colors font-medium leading-tight">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <div className="flex items-center justify-between pt-6 border-t border-slate-200/50">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors">
                  Partner Strategy
                </span>
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:border-slate-900 transition-all cursor-pointer"
                >
                  <ArrowRight size={14} className="text-slate-400 group-hover:text-white transition-colors" />
                </motion.div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${segment.gradient} opacity-10 blur-xl`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-32 pt-20 border-t border-slate-200"
        >
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles size={20} className="text-slate-600" />
                <h5 className="text-slate-900 text-2xl font-display font-bold tracking-tight">
                  Our Partnership{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">
                    Philosophy
                  </span>
                </h5>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed">
                We believe in building lasting relationships through transparency, innovation, 
                and measurable results. Let's create something extraordinary together.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="group relative px-8 py-4 bg-slate-900 text-white rounded-full font-semibold overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start a conversation
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-slate-700 to-slate-600"
                initial={{ x: '100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div>

          {/* Progress Indicators */}
          <div className="flex gap-3 mt-12">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <motion.div
                key={i}
                initial={{ width: i === 0 ? 48 : 12 }}
                whileHover={{ width: 48 }}
                transition={{ duration: 0.3 }}
                className={`h-1 rounded-full ${
                  i === 0 ? 'bg-slate-900' : 'bg-slate-300'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partnership;