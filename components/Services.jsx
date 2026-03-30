
// import React, { useState, useRef, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import gsap from 'gsap';
// import MotionWrapper from './MotionWrapper';
// import { SERVICES } from '../constants';
// import { 
//   ArrowRight, 
//   X, 
//   CheckCircle2, 
//   SearchCheck, 
//   Users, 
//   Zap, 
//   BarChart3, 
//   ShieldCheck,
//   Target,
//   Compass,
//   Palette
// } from 'lucide-react';

// const AnimatedWebIcon = ({ active }) => {
//   const root = useRef(null);
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.to(".line", { scaleX: 1, stagger: 0.1, duration: 0.8, ease: "power2.out", paused: true });
//       if (active) gsap.to(".line", { scaleX: 1, stagger: 0.1, opacity: 1 });
//       else gsap.to(".line", { scaleX: 0.3, opacity: 0.5 });
      
//       gsap.to(".cursor", { opacity: 0, repeat: -1, duration: 0.5, ease: "steps(1)" });
//     }, root);
//     return () => ctx.revert();
//   }, [active]);

//   return (
//     <svg ref={root} viewBox="0 0 100 100" className="w-16 h-16 fill-none stroke-current">
//       <rect x="10" y="20" width="80" height="60" rx="4" strokeWidth="1.5" className="opacity-40" />
//       <line x1="10" y1="35" x2="90" y2="35" strokeWidth="1.5" className="opacity-40" />
//       <circle cx="20" cy="27" r="2" fill="currentColor" />
//       <circle cx="28" cy="27" r="2" fill="currentColor" />
//       <line x1="20" y1="48" x2="70" y2="48" strokeWidth="2" className="line origin-left" />
//       <line x1="20" y1="58" x2="60" y2="58" strokeWidth="2" className="line origin-left" />
//       <line x1="20" y1="68" x2="80" y2="68" strokeWidth="2" className="line origin-left" />
//       <rect x="82" y="65" width="2" height="6" fill="currentColor" className="cursor" />
//     </svg>
//   );
// };

// const AnimatedMarketingIcon = ({ active }) => {
//   const root = useRef(null);
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({ repeat: -1 });
//       tl.to(".glass", { x: 20, y: -5, duration: 2, ease: "sine.inOut" })
//         .to(".glass", { x: 0, y: 0, duration: 2, ease: "sine.inOut" });
      
//       if (active) gsap.to(".bar", { height: (i) => 20 + Math.random() * 30, stagger: 0.1, duration: 0.4 });
//       else gsap.to(".bar", { height: 15, stagger: 0.1 });
//     }, root);
//     return () => ctx.revert();
//   }, [active]);

//   return (
//     <svg ref={root} viewBox="0 0 100 100" className="w-16 h-16 fill-none stroke-current">
//       <rect x="20" y="60" width="8" height="15" className="bar" fill="currentColor" opacity="0.3" />
//       <rect x="35" y="50" width="8" height="25" className="bar" fill="currentColor" opacity="0.3" />
//       <rect x="50" y="40" width="8" height="35" className="bar" fill="currentColor" opacity="0.3" />
//       <rect x="65" y="55" width="8" height="20" className="bar" fill="currentColor" opacity="0.3" />
//       <g className="glass">
//         <circle cx="40" cy="40" r="15" strokeWidth="2" />
//         <line x1="51" y1="51" x2="65" y2="65" strokeWidth="2" strokeLinecap="round" />
//       </g>
//     </svg>
//   );
// };

// const AnimatedLeadGenIcon = ({ active }) => {
//   const root = useRef(null);
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.to(".particle", { 
//         x: active ? 0 : (i) => (i % 2 === 0 ? 20 : -20), 
//         y: active ? 0 : (i) => (i < 2 ? 20 : -20),
//         opacity: active ? 1 : 0.2,
//         duration: 1, 
//         stagger: 0.05 
//       });
//       gsap.to(".magnet", { y: active ? -5 : 0, duration: 0.5, repeat: active ? -1 : 0, yoyo: true });
//     }, root);
//     return () => ctx.revert();
//   }, [active]);

//   return (
//     <svg ref={root} viewBox="0 0 100 100" className="w-16 h-16 fill-none stroke-current">
//       <path d="M30 40 C 30 20, 70 20, 70 40 L 70 60 L 55 60 L 55 40 C 55 35, 45 35, 45 40 L 45 60 L 30 60 Z" strokeWidth="2" className="magnet" />
//       <circle cx="20" cy="20" r="2" fill="currentColor" className="particle" />
//       <circle cx="80" cy="30" r="2" fill="currentColor" className="particle" />
//       <circle cx="15" cy="70" r="2" fill="currentColor" className="particle" />
//       <circle cx="85" cy="80" r="2" fill="currentColor" className="particle" />
//     </svg>
//   );
// };

// const AnimatedDesignIcon = ({ active }) => {
//   const root = useRef(null);
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({ repeat: -1 });
//       tl.to(".path", { strokeDashoffset: 0, duration: 3, ease: "power1.inOut" })
//         .to(".path", { strokeDashoffset: 100, duration: 3, ease: "power1.inOut" });
      
//       if (active) gsap.to(".nib", { rotate: 45, duration: 0.5 });
//       else gsap.to(".nib", { rotate: 0, duration: 0.5 });
//     }, root);
//     return () => ctx.revert();
//   }, [active]);

//   return (
//     <svg ref={root} viewBox="0 0 100 100" className="w-16 h-16 fill-none stroke-current">
//       <path d="M20 80 Q 50 10 80 80" strokeWidth="1.5" strokeDasharray="100" strokeDashoffset="100" className="path opacity-30" />
//       <g className="nib origin-center">
//         <path d="M50 30 L 60 50 L 50 70 L 40 50 Z" strokeWidth="1.5" />
//         <circle cx="50" cy="50" r="1" fill="currentColor" />
//       </g>
//     </svg>
//   );
// };

// const SERVICE_META = {
//   0: { img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800", renderIcon: (active) => <AnimatedMarketingIcon active={active} /> },
//   1: { img: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800", renderIcon: (active) => <AnimatedWebIcon active={active} /> },
//   2: { img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800", renderIcon: (active) => <AnimatedLeadGenIcon active={active} /> },
//   3: { img: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80&w=800", renderIcon: (active) => <AnimatedDesignIcon active={active} /> },
//   4: { img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800", renderIcon: (active) => <AnimatedLeadGenIcon active={active} /> },
// };

// const SERVICE_DETAILS = {
//   'seo': {
//     subtitle: 'Be seen and Grow consistently',
//     desc: 'Our goal is to boost brand visibility, engage audiences, and drive measurable growth through data-backed digital strategies.',
//     features: [
//       'Search Engine Optimization, Local SEO',
//       'Social Media Marketing & Management (Facebook, Instagram)',
//       'Pay-Per-Click (PPC) Advertising',
//       'Email & Content Marketing',
//       'Analytics & Reporting',
//       'LinkedIn Optimization, Paid Ads',
//       'Email & WhatsApp campaigns',
//       'Google, YouTube Ads & more',
//       'Targeted social media strategy',
//       'Analytics & performance reports'
//     ]
//   },
//   'web-dev': {
//     subtitle: 'Architecting Digital Masterpieces',
//     desc: 'From landing pages to complex enterprise platforms, we build high-performance, secure, and responsive sites.',
//     features: [
//       'Custom Full-Stack Development',
//       'Website Maintenance & Security',
//       'Performance Optimization',
//       'Business-Ready E-commerce Solutions',
//       'SEO-First Code Architecture',
//       'User Experience (UX) Focused Design',
//       'API Integrations & Cloud Solutions'
//     ]
//   },
//   'smm': {
//     subtitle: 'Dominating the Social Sphere',
//     desc: 'We build vibrant communities and engage your target audience where they spend most of their time.',
//     features: [
//       'Strategic Content Planning',
//       'Influencer Collaboration & Management',
//       'Community Management & Growth',
//       'Viral Content Production',
//       'Platform-Specific Optimization',
//       'Paid Social Ad Campaigns',
//       'Brand Tone & Voice Definition'
//     ]
//   },
//   'graphic-design': {
//     subtitle: 'Designs that speak and sell',
//     desc: 'We enhance brand presence, engage audiences, and communicate your message effectively with elite visual storytelling.',
//     features: [
//       'Brand Identity (Logos, Letterheads)',
//       'Marketing Collaterals (Brochures, Flyers, Posters)',
//       'Social Media Creatives & Ads',
//       'Infographics & Data Visualization',
//       'Creative videos for social media posting',
//       'Advertising banners & Digital Signage'
//     ]
//   },
//   'lead-gen': {
//     subtitle: 'Fueling Your Sales Engine',
//     desc: 'We architect high-performance lead acquisition systems designed to deliver qualified prospects ready for conversion.',
//     features: [
//       'Performance PPC (Google & YouTube Ads)',
//       'Targeted B2B LinkedIn Lead Gen',
//       'Conversion Rate Optimization (CRO)',
//       'Strategic Landing Page Architecture',
//       'Automated Email Nurturing Workflows',
//       'CRM Setup & Data Integration',
//       'Multi-Channel Attribution Tracking',
//       'ROI-Focused Lead Analytics'
//     ]
//   }
// };

// const DETAILED_APPROACH = [
//   { 
//     title: "Client Understanding", 
//     desc: "We begin by analysing each client’s goals, challenges, and target audience to build a solid foundation.", 
//     icon: <SearchCheck size={24} />,
//     color: "bg-blue-500/10 text-blue-500"
//   },
//   { 
//     title: "Customized Strategy", 
//     desc: "Crafting tailored solutions that combine creativity, technology, and data-driven insights for unique impact.", 
//     icon: <Compass size={24} />,
//     color: "bg-gold-500/10 text-gold-500"
//   },
//   { 
//     title: "Creative Execution", 
//     desc: "Delivering visually compelling designs, engaging campaigns, and high-performance web solutions that stand out.", 
//     icon: <Palette size={24} />,
//     color: "bg-purple-500/10 text-purple-500"
//   },
//   { 
//     title: "Collaboration", 
//     desc: "Working closely with clients as an extension of their team to ensure absolute alignment and transparency.", 
//     icon: <Users size={24} />,
//     color: "bg-emerald-500/10 text-emerald-500"
//   },
//   { 
//     title: "Continuous Optimization", 
//     desc: "Monitoring performance in real-time and refining strategies to maximize results and drive higher ROI.", 
//     icon: <Zap size={24} />,
//     color: "bg-orange-500/10 text-orange-500"
//   },
//   { 
//     title: "Measurable Impact", 
//     desc: "Focusing strictly on outcomes that drive tangible growth, engagement, and long-term business success.", 
//     icon: <BarChart3 size={24} />,
//     color: "bg-indigo-500/10 text-indigo-500"
//   },
//   { 
//     title: "Quality & Timely Delivery", 
//     desc: "We deliver high-quality digital solutions with extreme precision and punctuality, ensuring client satisfaction.", 
//     icon: <ShieldCheck size={24} />,
//     color: "bg-red-500/10 text-red-500"
//   }
// ];

// const Services = () => {
//   const navigate = useNavigate();
//   const [hoveredId, setHoveredId] = useState(null);
//   const [selectedServiceId, setSelectedServiceId] = useState(null);

//   const selectedService = SERVICES.find(s => s.id === selectedServiceId);
//   const selectedDetails = selectedServiceId ? SERVICE_DETAILS[selectedServiceId] : null;
  
//   return (
//     <div className="bg-white">
//       <section id="services" className="py-32 relative overflow-hidden">
//         <div className="container mx-auto px-6 lg:px-16 relative z-10">
//           <div className="max-w-3xl mb-24">
//             <MotionWrapper variant="fade">
//               <h2 className="text-gold-600 font-bold uppercase tracking-widest text-[10px] mb-4">Our Services</h2>
//               <h3 className="text-3xl md:text-5xl font-display font-semibold text-[#2D3142] tracking-tight leading-tight">
//                 Crafting digital <br/><span className="text-gold-600 italic font-medium">superiority.</span>
//               </h3>
//             </MotionWrapper>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//             {SERVICES.map((service, idx) => {
//               const meta = SERVICE_META[idx];
//               const isActive = hoveredId === service.id;
//               return (
//                 <MotionWrapper 
//                   key={service.id} 
//                   variant="fade"
//                   delay={idx * 0.1}
//                 >
//                   <motion.div 
//                     onMouseEnter={() => setHoveredId(service.id)}
//                     onMouseLeave={() => setHoveredId(null)}
//                     onClick={() => setSelectedServiceId(service.id)}
//                     whileHover={{ y: -10 }}
//                     className="group relative h-[480px] bg-zinc-950 rounded-[2.5rem] overflow-hidden flex flex-col p-12 cursor-pointer shadow-2xl transition-all duration-500 border border-white/5"
//                   >
//                     <div className="relative z-20 flex flex-col h-full">
//                       <div className="text-[#89E0F0] mb-10 transition-transform duration-700">
//                         {meta?.renderIcon(isActive)}
//                       </div>
//                       <h4 className="text-2xl font-semibold text-white mb-6 tracking-tight">
//                         {service.title}
//                       </h4>
//                       <p className="text-zinc-400 text-sm leading-relaxed mb-auto opacity-70 group-hover:opacity-100 transition-opacity font-normal">
//                         {service.description}
//                       </p>
                      
//                       <div className="flex items-center gap-3 text-[#FF7B54] font-bold text-[10px] uppercase tracking-[0.2em] mt-8 group-hover:gap-5 transition-all">
//                         Explore Strategy <ArrowRight size={14} />
//                       </div>
//                     </div>

//                     <div className="absolute inset-0 z-10 opacity-20 group-hover:opacity-40 transition-opacity duration-1000">
//                       <img src={meta?.img} className="w-full h-full object-cover grayscale transition-all duration-1000 scale-110 group-hover:scale-100" alt={service.title} />
//                       <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
//                     </div>
//                   </motion.div>
//                 </MotionWrapper>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       <AnimatePresence>
//         {selectedServiceId && selectedService && selectedDetails && (
//           <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
//             <motion.div 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setSelectedServiceId(null)}
//               className="absolute inset-0 bg-zinc-950/90 backdrop-blur-xl"
//             />
            
//             <motion.div
//               layoutId={selectedServiceId}
//               initial={{ opacity: 0, scale: 0.9, y: 20 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.9, y: 20 }}
//               className="relative w-full max-w-5xl bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh] overflow-y-auto lg:overflow-visible"
//             >
//               <button 
//                 onClick={() => setSelectedServiceId(null)}
//                 className="absolute top-8 right-8 z-50 p-3 bg-zinc-50 hover:bg-zinc-100 rounded-full transition-colors text-zinc-900 shadow-sm"
//               >
//                 <X size={24} />
//               </button>

//               <div className="lg:w-2/5 relative bg-zinc-950 min-h-[300px] lg:min-h-0">
//                 <img 
//                   src={SERVICE_META[SERVICES.findIndex(s => s.id === selectedServiceId)]?.img} 
//                   className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
//                   alt={selectedService.title}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-zinc-950 via-zinc-950/40 to-transparent" />
//                 <div className="absolute bottom-12 left-12 right-12">
//                    <h2 className="text-4xl font-display font-black text-white uppercase tracking-tighter mb-4">
//                      {selectedService.title}
//                    </h2>
//                    <div className="w-12 h-1 bg-gold-500 rounded-full" />
//                 </div>
//               </div>

//               <div className="lg:w-3/5 p-10 md:p-16 lg:p-20 bg-white">
//                 <div className="max-w-xl">
//                   <h3 className="text-gold-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">
//                     {selectedDetails.subtitle}
//                   </h3>
//                   <p className="text-xl md:text-2xl font-bold text-zinc-900 mb-10 leading-tight">
//                     {selectedDetails.desc}
//                   </p>

//                   <div className="space-y-8">
//                     <h4 className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.4em]">Elite Capabilities</h4>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
//                       {selectedDetails.features.map((feature, i) => (
//                         <motion.div 
//                           key={i}
//                           initial={{ opacity: 0, x: -10 }}
//                           animate={{ opacity: 1, x: 0 }}
//                           transition={{ delay: 0.2 + (i * 0.05) }}
//                           className="flex items-start gap-3 group"
//                         >
//                           <CheckCircle2 size={18} className="text-gold-500 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
//                           <span className="text-zinc-600 text-sm font-medium leading-relaxed group-hover:text-zinc-900 transition-colors">
//                             {feature}
//                           </span>
//                         </motion.div>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="mt-16 flex items-center gap-10">
//                     <button 
//                       onClick={() => navigate('/contact')}
//                       className="px-10 py-5 bg-zinc-900 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-gold-500 transition-all shadow-xl shadow-zinc-100"
//                     >
//                       Request Consultation
//                     </button>
//                     <button className="flex items-center gap-3 text-gold-600 font-bold uppercase tracking-[0.2em] text-[10px] group">
//                       Our Method <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         )}
//       </AnimatePresence>

//       <section className="py-40 bg-green-950 relative overflow-hidden">
//         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[150px] -mr-60 -mt-60 pointer-events-none" />
//         <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-500/5 rounded-full blur-[120px] -ml-40 -mb-40 pointer-events-none" />

//         <div className="container mx-auto px-6 lg:px-16 relative z-10">
//           <div className="max-w-4xl mx-auto text-center mb-32">
//             <MotionWrapper variant="fade">
//               <div className="inline-flex items-center gap-4 bg-gold-500/10 px-6 py-2 rounded-full mb-10 border border-gold-500/20">
//                 <Target size={16} className="text-gold-500" />
//                 <span className="text-gold-500 font-black uppercase tracking-[0.3em] text-[10px]">Methodology</span>
//               </div>
//               <h3 className="text-2xl md:text-4xl font-display font-black text-white mb-10 tracking-tighter uppercase leading-[0.9]">
//                 Always Giving You <br/><span className="text-gold-500">Exactly</span> What You Need
//               </h3>
//               <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-3xl mx-auto font-medium">
//                 No more scattered details or convoluted tasks. We line everything up so nothing gets lost—anticipating and resolving before you have to ask.
//               </p>
//             </MotionWrapper>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//             {DETAILED_APPROACH.map((step, idx) => (
//               <MotionWrapper key={idx} variant="fade" delay={idx * 0.1}>
//                 <div className="group relative bg-white/5 border border-white/10 rounded-[3rem] p-10 h-full flex flex-col transition-all duration-500 hover:bg-white hover:border-white hover:-translate-y-4 hover:shadow-[0_40px_80px_-20px_rgba(197,160,33,0.3)]">
//                   <div className="absolute top-10 right-10 text-[10px] font-black text-zinc-500 group-hover:text-gold-500 transition-colors uppercase tracking-[0.3em]">
//                     Step {idx + 1}
//                   </div>

//                   <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${step.color}`}>
//                     {step.icon}
//                   </div>
                  
//                   <h4 className="text-xl font-display font-black text-white group-hover:text-zinc-900 mb-4 tracking-tight uppercase leading-tight transition-colors">
//                     {step.title}
//                   </h4>
                  
//                   <p className="text-[#f9f2ca]/70 text-sm leading-relaxed group-hover:text-zinc-600 font-medium transition-colors">
//                     {step.desc}
//                   </p>

//                   <div className="mt-auto pt-10 opacity-0 group-hover:opacity-100 transition-opacity">
//                     <div className="w-8 h-1 bg-gold-500 rounded-full" />
//                   </div>
//                 </div>
//               </MotionWrapper>
//             ))}

//             <MotionWrapper delay={DETAILED_APPROACH.length * 0.1} variant="fade">
//               <div className="bg-gold-500 rounded-[3rem] p-10 h-full flex flex-col justify-center items-center text-center shadow-2xl hover:scale-105 transition-transform duration-500">
//                 <CheckCircle2 size={48} className="text-white mb-6" strokeWidth={1.5} />
//                 <h4 className="text-2xl font-display font-black text-white uppercase tracking-tighter mb-4">
//                   Ready for <br/>Results?
//                 </h4>
//                 <p className="text-white/80 text-sm font-medium mb-8">Let's align our expertise with your vision.</p>
//                 <button 
//                   onClick={() => navigate('/contact')}
//                   className="px-8 py-4 bg-white text-gold-600 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:shadow-xl transition-all"
//                 >
//                   Get Started
//                 </button>
//               </div>
//             </MotionWrapper>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Services;







// import React, { useState, useRef, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import MotionWrapper from './MotionWrapper';
// import { SERVICES } from '../constants';
// import { 
//   ArrowRight, 
//   X, 
//   CheckCircle2, 
//   SearchCheck, 
//   Users, 
//   Zap, 
//   BarChart3, 
//   ShieldCheck,
//   Target,
//   Compass,
//   Palette,
//   Sparkles,
//   Gem,
//   Crown,
//   Award,
//   Star,
//   Diamond,
//   Infinity,
//   Brain,
//   Cpu,
//   Rocket,
//   Gauge,
//   Layers,
//   HeartHandshake,
//   Lightbulb,
//   TrendingUp
// } from 'lucide-react';

// gsap.registerPlugin(useGSAP, ScrollTrigger);

// // ... (keep your existing animated icon components)

// const AnimatedWebIcon = ({ active }) => {
//   const root = useRef(null);
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.to(".line", { scaleX: 1, stagger: 0.1, duration: 0.8, ease: "power2.out", paused: true });
//       if (active) gsap.to(".line", { scaleX: 1, stagger: 0.1, opacity: 1 });
//       else gsap.to(".line", { scaleX: 0.3, opacity: 0.5 });
      
//       gsap.to(".cursor", { opacity: 0, repeat: -1, duration: 0.5, ease: "steps(1)" });
//     }, root);
//     return () => ctx.revert();
//   }, [active]);

//   return (
//     <svg ref={root} viewBox="0 0 100 100" className="w-16 h-16 fill-none stroke-current">
//       <rect x="10" y="20" width="80" height="60" rx="4" strokeWidth="1.5" className="opacity-40" />
//       <line x1="10" y1="35" x2="90" y2="35" strokeWidth="1.5" className="opacity-40" />
//       <circle cx="20" cy="27" r="2" fill="currentColor" />
//       <circle cx="28" cy="27" r="2" fill="currentColor" />
//       <line x1="20" y1="48" x2="70" y2="48" strokeWidth="2" className="line origin-left" />
//       <line x1="20" y1="58" x2="60" y2="58" strokeWidth="2" className="line origin-left" />
//       <line x1="20" y1="68" x2="80" y2="68" strokeWidth="2" className="line origin-left" />
//       <rect x="82" y="65" width="2" height="6" fill="currentColor" className="cursor" />
//     </svg>
//   );
// };

// const AnimatedMarketingIcon = ({ active }) => {
//   const root = useRef(null);
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({ repeat: -1 });
//       tl.to(".glass", { x: 20, y: -5, duration: 2, ease: "sine.inOut" })
//         .to(".glass", { x: 0, y: 0, duration: 2, ease: "sine.inOut" });
      
//       if (active) gsap.to(".bar", { height: (i) => 20 + Math.random() * 30, stagger: 0.1, duration: 0.4 });
//       else gsap.to(".bar", { height: 15, stagger: 0.1 });
//     }, root);
//     return () => ctx.revert();
//   }, [active]);

//   return (
//     <svg ref={root} viewBox="0 0 100 100" className="w-16 h-16 fill-none stroke-current">
//       <rect x="20" y="60" width="8" height="15" className="bar" fill="currentColor" opacity="0.3" />
//       <rect x="35" y="50" width="8" height="25" className="bar" fill="currentColor" opacity="0.3" />
//       <rect x="50" y="40" width="8" height="35" className="bar" fill="currentColor" opacity="0.3" />
//       <rect x="65" y="55" width="8" height="20" className="bar" fill="currentColor" opacity="0.3" />
//       <g className="glass">
//         <circle cx="40" cy="40" r="15" strokeWidth="2" />
//         <line x1="51" y1="51" x2="65" y2="65" strokeWidth="2" strokeLinecap="round" />
//       </g>
//     </svg>
//   );
// };

// const AnimatedLeadGenIcon = ({ active }) => {
//   const root = useRef(null);
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.to(".particle", { 
//         x: active ? 0 : (i) => (i % 2 === 0 ? 20 : -20), 
//         y: active ? 0 : (i) => (i < 2 ? 20 : -20),
//         opacity: active ? 1 : 0.2,
//         duration: 1, 
//         stagger: 0.05 
//       });
//       gsap.to(".magnet", { y: active ? -5 : 0, duration: 0.5, repeat: active ? -1 : 0, yoyo: true });
//     }, root);
//     return () => ctx.revert();
//   }, [active]);

//   return (
//     <svg ref={root} viewBox="0 0 100 100" className="w-16 h-16 fill-none stroke-current">
//       <path d="M30 40 C 30 20, 70 20, 70 40 L 70 60 L 55 60 L 55 40 C 55 35, 45 35, 45 40 L 45 60 L 30 60 Z" strokeWidth="2" className="magnet" />
//       <circle cx="20" cy="20" r="2" fill="currentColor" className="particle" />
//       <circle cx="80" cy="30" r="2" fill="currentColor" className="particle" />
//       <circle cx="15" cy="70" r="2" fill="currentColor" className="particle" />
//       <circle cx="85" cy="80" r="2" fill="currentColor" className="particle" />
//     </svg>
//   );
// };

// const AnimatedDesignIcon = ({ active }) => {
//   const root = useRef(null);
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({ repeat: -1 });
//       tl.to(".path", { strokeDashoffset: 0, duration: 3, ease: "power1.inOut" })
//         .to(".path", { strokeDashoffset: 100, duration: 3, ease: "power1.inOut" });
      
//       if (active) gsap.to(".nib", { rotate: 45, duration: 0.5 });
//       else gsap.to(".nib", { rotate: 0, duration: 0.5 });
//     }, root);
//     return () => ctx.revert();
//   }, [active]);

//   return (
//     <svg ref={root} viewBox="0 0 100 100" className="w-16 h-16 fill-none stroke-current">
//       <path d="M20 80 Q 50 10 80 80" strokeWidth="1.5" strokeDasharray="100" strokeDashoffset="100" className="path opacity-30" />
//       <g className="nib origin-center">
//         <path d="M50 30 L 60 50 L 50 70 L 40 50 Z" strokeWidth="1.5" />
//         <circle cx="50" cy="50" r="1" fill="currentColor" />
//       </g>
//     </svg>
//   );
// };

// const SERVICE_META = {
//   0: { img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800", renderIcon: (active) => <AnimatedMarketingIcon active={active} /> },
//   1: { img: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800", renderIcon: (active) => <AnimatedWebIcon active={active} /> },
//   2: { img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800", renderIcon: (active) => <AnimatedLeadGenIcon active={active} /> },
//   3: { img: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80&w=800", renderIcon: (active) => <AnimatedDesignIcon active={active} /> },
//   4: { img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800", renderIcon: (active) => <AnimatedLeadGenIcon active={active} /> },
// };

// const SERVICE_DETAILS = {
//   'seo': {
//     subtitle: 'Be seen and Grow consistently',
//     desc: 'Our goal is to boost brand visibility, engage audiences, and drive measurable growth through data-backed digital strategies.',
//     features: [
//       'Search Engine Optimization, Local SEO',
//       'Social Media Marketing & Management (Facebook, Instagram)',
//       'Pay-Per-Click (PPC) Advertising',
//       'Email & Content Marketing',
//       'Analytics & Reporting',
//       'LinkedIn Optimization, Paid Ads',
//       'Email & WhatsApp campaigns',
//       'Google, YouTube Ads & more',
//       'Targeted social media strategy',
//       'Analytics & performance reports'
//     ]
//   },
//   'web-dev': {
//     subtitle: 'Architecting Digital Masterpieces',
//     desc: 'From landing pages to complex enterprise platforms, we build high-performance, secure, and responsive sites.',
//     features: [
//       'Custom Full-Stack Development',
//       'Website Maintenance & Security',
//       'Performance Optimization',
//       'Business-Ready E-commerce Solutions',
//       'SEO-First Code Architecture',
//       'User Experience (UX) Focused Design',
//       'API Integrations & Cloud Solutions'
//     ]
//   },
//   'smm': {
//     subtitle: 'Dominating the Social Sphere',
//     desc: 'We build vibrant communities and engage your target audience where they spend most of their time.',
//     features: [
//       'Strategic Content Planning',
//       'Influencer Collaboration & Management',
//       'Community Management & Growth',
//       'Viral Content Production',
//       'Platform-Specific Optimization',
//       'Paid Social Ad Campaigns',
//       'Brand Tone & Voice Definition'
//     ]
//   },
//   'graphic-design': {
//     subtitle: 'Designs that speak and sell',
//     desc: 'We enhance brand presence, engage audiences, and communicate your message effectively with elite visual storytelling.',
//     features: [
//       'Brand Identity (Logos, Letterheads)',
//       'Marketing Collaterals (Brochures, Flyers, Posters)',
//       'Social Media Creatives & Ads',
//       'Infographics & Data Visualization',
//       'Creative videos for social media posting',
//       'Advertising banners & Digital Signage'
//     ]
//   },
//   'lead-gen': {
//     subtitle: 'Fueling Your Sales Engine',
//     desc: 'We architect high-performance lead acquisition systems designed to deliver qualified prospects ready for conversion.',
//     features: [
//       'Performance PPC (Google & YouTube Ads)',
//       'Targeted B2B LinkedIn Lead Gen',
//       'Conversion Rate Optimization (CRO)',
//       'Strategic Landing Page Architecture',
//       'Automated Email Nurturing Workflows',
//       'CRM Setup & Data Integration',
//       'Multi-Channel Attribution Tracking',
//       'ROI-Focused Lead Analytics'
//     ]
//   }
// };

// // ============ PREMIUM METHODOLOGY REDESIGN ============
// const DETAILED_APPROACH = [
//   { 
//     title: "Discovery & Immersion", 
//     desc: "We begin by deeply analyzing your business landscape, challenges, and aspirations—uncovering hidden opportunities others miss.", 
//     icon: <SearchCheck size={24} />,
//     color: "from-blue-600/20 to-blue-400/5",
//     iconColor: "text-blue-500",
//     accentColor: "#3B82F6",
//     metrics: ["Market Analysis", "User Research", "Competitor Audit", "Tech Assessment"]
//   },
//   { 
//     title: "Strategic Blueprint", 
//     desc: "Architecting a bespoke roadmap that aligns innovation, business goals, and user needs into a cohesive action plan.", 
//     icon: <Compass size={24} />,
//     color: "from-amber-600/20 to-yellow-400/5",
//     iconColor: "text-gold-500",
//     accentColor: "#FFD700",
//     metrics: ["Goal Definition", "KPI Framework", "Resource Planning", "Timeline Architecture"]
//   },
//   { 
//     title: "Creative Alchemy", 
//     desc: "Transforming strategy into visual poetry—designs that don't just look beautiful but perform exceptionally.", 
//     icon: <Palette size={24} />,
//     color: "from-purple-600/20 to-pink-400/5",
//     iconColor: "text-purple-500",
//     accentColor: "#A855F7",
//     metrics: ["Visual Identity", "UX Architecture", "Interactive Prototypes", "Design Systems"]
//   },
//   { 
//     title: "Elite Engineering", 
//     desc: "Crafting robust, scalable solutions with pristine code architecture and cutting-edge technologies.", 
//     icon: <Cpu size={24} />,
//     color: "from-emerald-600/20 to-green-400/5",
//     iconColor: "text-emerald-500",
//     accentColor: "#10B981",
//     metrics: ["Frontend Excellence", "Backend Architecture", "API Integration", "Performance Tuning"]
//   },
//   { 
//     title: "Precision Execution", 
//     desc: "Flawless implementation with obsessive attention to detail—every pixel, every interaction perfected.", 
//     icon: <Zap size={24} />,
//     color: "from-orange-600/20 to-red-400/5",
//     iconColor: "text-orange-500",
//     accentColor: "#F97316",
//     metrics: ["Agile Development", "Quality Assurance", "Security Protocols", "Deployment"]
//   },
//   { 
//     title: "Performance Intelligence", 
//     desc: "Real-time analytics and continuous optimization to maximize ROI and exceed benchmarks.", 
//     icon: <TrendingUp size={24} />,
//     color: "from-indigo-600/20 to-blue-400/5",
//     iconColor: "text-indigo-500",
//     accentColor: "#6366F1",
//     metrics: ["Data Analytics", "Conversion Optimization", "A/B Testing", "User Behavior"]
//   },
//   { 
//     title: "Partnership & Growth", 
//     desc: "Beyond delivery—we become your long-term digital partner, evolving solutions as your business scales.", 
//     icon: <HeartHandshake size={24} />,
//     color: "from-rose-600/20 to-pink-400/5",
//     iconColor: "text-rose-500",
//     accentColor: "#F43F5E",
//     metrics: ["Ongoing Support", "Strategic Advisory", "Scale Planning", "Innovation Roadmap"]
//   }
// ];

// const EXCELLENCE_METRICS = [
//   { label: "Projects Delivered", value: "300+", icon: <Award />, color: "#FFD700" },
//   { label: "Client Retention", value: "98%", icon: <Crown />, color: "#A855F7" },
//   { label: "Avg. Delivery", value: "4.8 Days", icon: <Gauge />, color: "#10B981" },
//   { label: "Expert Team", value: "50+", icon: <Users />, color: "#3B82F6" },
//   { label: "ROI Increase", value: "3.5x", icon: <TrendingUp />, color: "#F97316" },
//   { label: "Satisfaction", value: "4.9/5", icon: <Star />, color: "#F43F5E" }
// ];

// const Services = () => {
//   const navigate = useNavigate();
//   const [hoveredId, setHoveredId] = useState(null);
//   const [selectedServiceId, setSelectedServiceId] = useState(null);
//   const [activeStep, setActiveStep] = useState(null);
  
//   const containerRef = useRef(null);
//   const methodologyRef = useRef(null);
//   const cardsRef = useRef([]);
//   const timelineRef = useRef(null);
//   const particleRefs = useRef([]);

//   const selectedService = SERVICES.find(s => s.id === selectedServiceId);
//   const selectedDetails = selectedServiceId ? SERVICE_DETAILS[selectedServiceId] : null;

//   // Premium GSAP Animations
//   useGSAP(() => {
//     // Hero title reveal
//     gsap.fromTo('.methodology-hero-title',
//       { y: 100, opacity: 0, rotateX: -15 },
//       {
//         y: 0,
//         opacity: 1,
//         rotateX: 0,
//         duration: 1.2,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: methodologyRef.current,
//           start: "top 80%",
//           toggleActions: "play none none reverse"
//         }
//       }
//     );

//     // Excellence metrics cascade
//     gsap.fromTo('.excellence-metric',
//       { scale: 0.8, opacity: 0, y: 30 },
//       {
//         scale: 1,
//         opacity: 1,
//         y: 0,
//         duration: 0.8,
//         stagger: 0.1,
//         ease: "back.out(1.4)",
//         scrollTrigger: {
//           trigger: '.excellence-grid',
//           start: "top 85%",
//           toggleActions: "play none none reverse"
//         }
//       }
//     );

//     // Premium card animations with 3D perspective
//     cardsRef.current.forEach((card, index) => {
//       if (!card) return;
      
//       const step = DETAILED_APPROACH[index];
      
//       // Entrance animation
//       gsap.fromTo(card,
//         {
//           y: 80,
//           opacity: 0,
//           rotationY: index % 2 === 0 ? -15 : 15,
//           rotationX: -10,
//           transformPerspective: 1200,
//           transformOrigin: "center center -200"
//         },
//         {
//           y: 0,
//           opacity: 1,
//           rotationY: 0,
//           rotationX: 0,
//           duration: 1.2,
//           delay: index * 0.12,
//           ease: "back.out(1.7)",
//           scrollTrigger: {
//             trigger: card,
//             start: "top 85%",
//             toggleActions: "play none none reverse"
//           }
//         }
//       );

//       // Mouse move 3D parallax
//       card.addEventListener('mousemove', (e) => {
//         const rect = card.getBoundingClientRect();
//         const x = e.clientX - rect.left;
//         const y = e.clientY - rect.top;
        
//         const centerX = rect.width / 2;
//         const centerY = rect.height / 2;
        
//         const rotateY = (x - centerX) * 0.03;
//         const rotateX = (centerY - y) * 0.03;
        
//         gsap.to(card, {
//           rotateY: rotateY,
//           rotateX: rotateX,
//           scale: 1.02,
//           duration: 0.6,
//           ease: "power2.out",
//           transformPerspective: 1200,
//           transformOrigin: "center center"
//         });
        
//         // Icon glow
//         const icon = card.querySelector('.methodology-icon');
//         gsap.to(icon, {
//           boxShadow: `0 0 40px ${step.accentColor}60`,
//           scale: 1.15,
//           duration: 0.6,
//           ease: "power2.out"
//         });
        
//         // Metrics reveal
//         const metrics = card.querySelectorAll('.metric-item');
//         gsap.to(metrics, {
//           y: 0,
//           opacity: 1,
//           duration: 0.4,
//           stagger: 0.05,
//           ease: "power2.out"
//         });
//       });
      
//       card.addEventListener('mouseleave', () => {
//         gsap.to(card, {
//           rotateY: 0,
//           rotateX: 0,
//           scale: 1,
//           duration: 0.8,
//           ease: "elastic.out(1, 0.3)",
//           transformPerspective: 1200
//         });
        
//         const icon = card.querySelector('.methodology-icon');
//         gsap.to(icon, {
//           boxShadow: '0 8px 20px rgba(0,0,0,0.02)',
//           scale: 1,
//           duration: 0.5,
//           ease: "power2.out"
//         });
        
//         const metrics = card.querySelectorAll('.metric-item');
//         gsap.to(metrics, {
//           y: 10,
//           opacity: 0.7,
//           duration: 0.3
//         });
//       });
//     });

//     // Floating particles animation
//     gsap.to('.floating-particle', {
//       y: -20,
//       x: gsap.utils.random(-15, 15),
//       rotation: gsap.utils.random(-30, 30),
//       duration: 4,
//       repeat: -1,
//       yoyo: true,
//       ease: "sine.inOut",
//       stagger: {
//         each: 0.3,
//         from: "random"
//       }
//     });

//     // Timeline glow pulse
//     gsap.to('.timeline-glow', {
//       opacity: 0.8,
//       scale: 1.2,
//       duration: 2,
//       repeat: -1,
//       yoyo: true,
//       ease: "sine.inOut"
//     });

//   }, { scope: containerRef });

//   return (
//     <div ref={containerRef} className="bg-white">
//       <section id="services" className="py-32 relative overflow-hidden">
//         <div className="container mx-auto px-6 lg:px-16 relative z-10">
//           <div className="max-w-3xl mb-24">
//             <MotionWrapper variant="fade">
//               <h2 className="text-gold-600 font-bold uppercase tracking-widest text-[10px] mb-4">Our Services</h2>
//               <h3 className="text-3xl md:text-5xl font-display font-semibold text-[#2D3142] tracking-tight leading-tight">
//                 Crafting digital <br/><span className="text-gold-600 italic font-medium">superiority.</span>
//               </h3>
//             </MotionWrapper>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//             {SERVICES.map((service, idx) => {
//               const meta = SERVICE_META[idx];
//               const isActive = hoveredId === service.id;
//               return (
//                 <MotionWrapper 
//                   key={service.id} 
//                   variant="fade"
//                   delay={idx * 0.1}
//                 >
//                   <motion.div 
//                     onMouseEnter={() => setHoveredId(service.id)}
//                     onMouseLeave={() => setHoveredId(null)}
//                     onClick={() => setSelectedServiceId(service.id)}
//                     whileHover={{ y: -10 }}
//                     className="group relative h-[480px] bg-zinc-950 rounded-[2.5rem] overflow-hidden flex flex-col p-12 cursor-pointer shadow-2xl transition-all duration-500 border border-white/5"
//                   >
//                     <div className="relative z-20 flex flex-col h-full">
//                       <div className="text-[#89E0F0] mb-10 transition-transform duration-700">
//                         {meta?.renderIcon(isActive)}
//                       </div>
//                       <h4 className="text-2xl font-semibold text-white mb-6 tracking-tight">
//                         {service.title}
//                       </h4>
//                       <p className="text-zinc-400 text-sm leading-relaxed mb-auto opacity-70 group-hover:opacity-100 transition-opacity font-normal">
//                         {service.description}
//                       </p>
                      
//                       <div className="flex items-center gap-3 text-[#FF7B54] font-bold text-[10px] uppercase tracking-[0.2em] mt-8 group-hover:gap-5 transition-all">
//                         Explore Strategy <ArrowRight size={14} />
//                       </div>
//                     </div>

//                     <div className="absolute inset-0 z-10 opacity-20 group-hover:opacity-40 transition-opacity duration-1000">
//                       <img src={meta?.img} className="w-full h-full object-cover grayscale transition-all duration-1000 scale-110 group-hover:scale-100" alt={service.title} />
//                       <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
//                     </div>
//                   </motion.div>
//                 </MotionWrapper>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       <AnimatePresence>
//         {selectedServiceId && selectedService && selectedDetails && (
//           <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
//             <motion.div 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setSelectedServiceId(null)}
//               className="absolute inset-0 bg-zinc-950/90 backdrop-blur-xl"
//             />
            
//             <motion.div
//               layoutId={selectedServiceId}
//               initial={{ opacity: 0, scale: 0.9, y: 20 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.9, y: 20 }}
//               className="relative w-full max-w-5xl bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh] overflow-y-auto lg:overflow-visible"
//             >
//               <button 
//                 onClick={() => setSelectedServiceId(null)}
//                 className="absolute top-8 right-8 z-50 p-3 bg-zinc-50 hover:bg-zinc-100 rounded-full transition-colors text-zinc-900 shadow-sm"
//               >
//                 <X size={24} />
//               </button>

//               <div className="lg:w-2/5 relative bg-zinc-950 min-h-[300px] lg:min-h-0">
//                 <img 
//                   src={SERVICE_META[SERVICES.findIndex(s => s.id === selectedServiceId)]?.img} 
//                   className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
//                   alt={selectedService.title}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-zinc-950 via-zinc-950/40 to-transparent" />
//                 <div className="absolute bottom-12 left-12 right-12">
//                    <h2 className="text-4xl font-display font-black text-white uppercase tracking-tighter mb-4">
//                      {selectedService.title}
//                    </h2>
//                    <div className="w-12 h-1 bg-gold-500 rounded-full" />
//                 </div>
//               </div>

//               <div className="lg:w-3/5 p-10 md:p-16 lg:p-20 bg-white">
//                 <div className="max-w-xl">
//                   <h3 className="text-gold-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">
//                     {selectedDetails.subtitle}
//                   </h3>
//                   <p className="text-xl md:text-2xl font-bold text-zinc-900 mb-10 leading-tight">
//                     {selectedDetails.desc}
//                   </p>

//                   <div className="space-y-8">
//                     <h4 className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.4em]">Elite Capabilities</h4>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
//                       {selectedDetails.features.map((feature, i) => (
//                         <motion.div 
//                           key={i}
//                           initial={{ opacity: 0, x: -10 }}
//                           animate={{ opacity: 1, x: 0 }}
//                           transition={{ delay: 0.2 + (i * 0.05) }}
//                           className="flex items-start gap-3 group"
//                         >
//                           <CheckCircle2 size={18} className="text-gold-500 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
//                           <span className="text-zinc-600 text-sm font-medium leading-relaxed group-hover:text-zinc-900 transition-colors">
//                             {feature}
//                           </span>
//                         </motion.div>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="mt-16 flex items-center gap-10">
//                     <button 
//                       onClick={() => navigate('/contact')}
//                       className="px-10 py-5 bg-zinc-900 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-gold-500 transition-all shadow-xl shadow-zinc-100"
//                     >
//                       Request Consultation
//                     </button>
//                     <button className="flex items-center gap-3 text-gold-600 font-bold uppercase tracking-[0.2em] text-[10px] group">
//                       Our Method <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         )}
//       </AnimatePresence>

//       {/* ============ PREMIUM METHODOLOGY SECTION - REDESIGNED ============ */}
//       <section 
//         ref={methodologyRef}
//         className="py-40 bg-gradient-to-b from-zinc-950 via-green-950 to-zinc-950 relative overflow-hidden"
//       >
//         {/* Opulent Background Elements */}
//         <div className="absolute inset-0">
//           <div className="absolute top-0 left-0 w-full h-full opacity-20" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"120\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cdefs%3E%3Cpattern id=\"gold-dots\" width=\"40\" height=\"40\" patternUnits=\"userSpaceOnUse\"%3E%3Ccircle cx=\"20\" cy=\"20\" r=\"1\" fill=\"%23FFD700\" opacity=\"0.1\"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\"100%25\" height=\"100%25\" fill=\"url(%23gold-dots)\"/%3E%3C/svg%3E')"}} />
          
//           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-[120px] floating-particle" />
//           <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-[120px] floating-particle" />
//           <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] floating-particle" />
          
//           {/* Animated Gold Lines */}
//           <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
//             <defs>
//               <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
//                 <stop offset="0%" stopColor="#FFD700" stopOpacity="0" />
//                 <stop offset="50%" stopColor="#FFD700" stopOpacity="0.1" />
//                 <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
//               </linearGradient>
//             </defs>
//             <path
//               d="M0,200 Q400,100 800,200 T1600,200"
//               stroke="url(#line-gradient)"
//               strokeWidth="1"
//               fill="none"
//               className="timeline-glow"
//             />
//           </svg>
//         </div>

//         <div className="container mx-auto px-6 lg:px-16 relative z-10">
//           {/* Premium Header with Crown */}
//           <div className="max-w-5xl mx-auto text-center mb-24">
//             <MotionWrapper variant="fade">
//               <div className="inline-flex items-center gap-4 bg-gradient-to-r from-gold-500/20 to-gold-600/10 px-8 py-3 rounded-full mb-10 border border-gold-500/30 backdrop-blur-sm">
//                 <Crown size={18} className="text-gold-500" />
//                 <span className="text-gold-500 font-black uppercase tracking-[0.3em] text-[10px]">The Elite Process</span>
//                 <Sparkles size={16} className="text-gold-500" />
//               </div>
              
//               <h3 className="methodology-hero-title text-4xl md:text-6xl font-display font-black text-white mb-10 tracking-tighter uppercase leading-[1.1]">
//                 <span className="relative inline-block">
//                   <span className="relative z-10">Meticulous</span>
//                   <svg className="absolute -bottom-4 left-0 w-full" height="12" viewBox="0 0 300 12">
//                     <path
//                       d="M2 10C50 3 150 3 298 5"
//                       stroke="#FFD700"
//                       strokeWidth="3"
//                       strokeLinecap="round"
//                       strokeDasharray="8 8"
//                       fill="none"
//                     />
//                   </svg>
//                 </span>
//                 {' '}Methodology<br/>
//                 <span className="bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 bg-clip-text text-transparent">
//                   Precision Meets Artistry
//                 </span>
//               </h3>
              
//               <p className="text-xl text-zinc-400 leading-relaxed max-w-3xl mx-auto font-light">
//                 A symphonic approach where every phase is orchestrated with 
//                 <span className="text-gold-500 font-medium"> obsessive attention to detail</span> and 
//                 <span className="text-gold-500 font-medium"> uncompromising quality standards</span>.
//               </p>
//             </MotionWrapper>
//           </div>

//           {/* Excellence Metrics Dashboard */}
//           <div className="excellence-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-32">
//             {EXCELLENCE_METRICS.map((metric, idx) => (
//               <div
//                 key={idx}
//                 className="excellence-metric group relative"
//               >
//                 <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-gold-500/50 transition-all duration-500 hover:bg-white/10 hover:shadow-[0_20px_40px_-15px_rgba(255,215,0,0.3)]">
//                   <div 
//                     className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//                     style={{
//                       background: `radial-gradient(circle at 50% 0%, ${metric.color}20 0%, transparent 70%)`
//                     }}
//                   />
                  
//                   <div className="relative z-10 text-center">
//                     <div 
//                       className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
//                       style={{ color: metric.color, background: `${metric.color}10` }}
//                     >
//                       {React.cloneElement(metric.icon, { className: "w-5 h-5" })}
//                     </div>
//                     <div className="text-2xl font-black text-white mb-1 font-display">{metric.value}</div>
//                     <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">{metric.label}</div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Premium Methodology Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//             {DETAILED_APPROACH.map((step, idx) => (
//               <MotionWrapper key={idx} variant="fade" delay={idx * 0.1}>
//                 <div
//                   ref={el => cardsRef.current[idx] = el}
//                   className="group relative h-[420px] bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-xl border border-white/10 
//                     rounded-[2.5rem] p-8 flex flex-col transition-all duration-700 hover:border-white/30
//                     hover:shadow-[0_50px_80px_-30px_rgba(0,0,0,0.7)] hover:shadow-gold-500/5"
//                   style={{
//                     transform: 'translateZ(0)',
//                     transformStyle: 'preserve-3d',
//                     perspective: '1200px'
//                   }}
//                   onMouseEnter={() => setActiveStep(idx)}
//                   onMouseLeave={() => setActiveStep(null)}
//                 >
//                   {/* Premium Card Interior */}
//                   <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
//                   {/* Animated Border Gradient */}
//                   <div className="absolute inset-0 rounded-[2.5rem] p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-700">
//                     <div className={`absolute inset-0 rounded-[2.5rem] bg-gradient-to-br ${step.color} opacity-20`} />
//                   </div>

//                   {/* Step Number - Opulent Display */}
//                   <div 
//                     className="absolute -top-4 -right-4 w-20 h-20 rounded-full flex items-center justify-center
//                       bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20
//                       group-hover:scale-110 transition-transform duration-500"
//                   >
//                     <span className="text-2xl font-black text-white/80">{(idx + 1).toString().padStart(2, '0')}</span>
//                     <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//                       style={{
//                         background: `radial-gradient(circle at center, ${step.accentColor}40 0%, transparent 70%)`
//                       }}
//                     />
//                   </div>

//                   {/* Icon with Premium Treatment */}
//                   <div className="relative mb-8 mt-4">
//                     <div 
//                       className={`methodology-icon w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} 
//                         flex items-center justify-center text-white shadow-xl transition-all duration-500
//                         group-hover:scale-110 group-hover:rotate-3`}
//                       style={{
//                         boxShadow: `0 10px 30px -10px ${step.accentColor}80`
//                       }}
//                     >
//                       {React.cloneElement(step.icon, { className: "w-7 h-7" })}
//                     </div>
                    
//                     {/* Decorative Rings */}
//                     <div className="absolute -top-2 -left-2 w-20 h-20 border border-gold-500/20 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-700" />
//                     <div className="absolute -bottom-2 -right-2 w-20 h-20 border border-white/10 rounded-2xl -rotate-6 group-hover:-rotate-12 transition-transform duration-700" />
//                   </div>

//                   {/* Content */}
//                   <h4 className="text-xl font-display font-black text-white mb-4 tracking-tight uppercase leading-tight
//                     group-hover:translate-x-2 transition-transform duration-500">
//                     {step.title}
//                   </h4>
                  
//                   <p className="text-zinc-400 text-sm leading-relaxed font-light group-hover:text-zinc-300 transition-colors duration-500">
//                     {step.desc}
//                   </p>

//                   {/* Metrics Grid - Reveal on Hover */}
//                   <div className="mt-auto pt-6">
//                     <div className="grid grid-cols-2 gap-2">
//                       {step.metrics.map((metric, i) => (
//                         <div 
//                           key={i}
//                           className="metric-item flex items-center gap-1.5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
//                           style={{ transitionDelay: `${i * 50}ms` }}
//                         >
//                           <div className="w-1 h-1 rounded-full bg-gold-500" />
//                           <span className="text-[10px] font-medium text-zinc-500 group-hover:text-zinc-400 uppercase tracking-wider">
//                             {metric}
//                           </span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Signature Gold Line */}
//                   <div className="absolute bottom-8 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent 
//                     opacity-0 group-hover:opacity-100 scale-x-0 group-hover:scale-x-100 transition-all duration-700 origin-center" />
//                 </div>
//               </MotionWrapper>
//             ))}

//             {/* Premium CTA Card */}
//             <MotionWrapper delay={DETAILED_APPROACH.length * 0.1} variant="fade">
//               <div 
//                 className="group relative h-[420px] bg-gradient-to-br from-gold-600 via-gold-500 to-amber-500 
//                   rounded-[2.5rem] p-8 flex flex-col justify-center items-center text-center
//                   hover:scale-[1.02] hover:shadow-[0_40px_80px_-20px_rgba(255,215,0,0.5)] transition-all duration-700
//                   overflow-hidden"
//               >
//                 {/* Animated Background */}
//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
//                   <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%221.5%22%20fill=%22white%22%20opacity=%220.2%22/%3E%3C/svg%3E')] animate-pulse" />
//                 </div>
                
//                 {/* Icon */}
//                 <div className="relative mb-8">
//                   <div className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-3xl flex items-center justify-center
//                     group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
//                     <Diamond size={40} className="text-white" strokeWidth={1.5} />
//                   </div>
                  
//                   {/* Floating Orbs */}
//                   <div className="absolute -top-4 -right-4 w-8 h-8 bg-white/30 rounded-full blur-sm floating-particle" />
//                   <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-white/20 rounded-full blur-sm floating-particle" />
//                 </div>
                
//                 <h4 className="text-2xl font-display font-black text-white uppercase tracking-tighter mb-4">
//                   Ready for<br/>Excellence?
//                 </h4>
                
//                 <p className="text-white/80 text-sm font-medium mb-8 max-w-[200px]">
//                   Let's orchestrate your digital transformation together
//                 </p>
                
//                 <button 
//                   onClick={() => navigate('/contact')}
//                   className="relative px-10 py-5 bg-white text-gold-600 rounded-2xl font-black uppercase tracking-[0.2em] text-xs
//                     overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-105
//                     group/btn"
//                 >
//                   <span className="relative z-10 flex items-center gap-3">
//                     Begin Journey
//                     <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
//                   </span>
//                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent 
//                     translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
//                 </button>
                
//                 {/* Signature Element */}
//                 <div className="absolute bottom-6 left-6 text-[8px] font-mono text-white/30 uppercase tracking-[0.4em]">
//                   Elite Craft
//                 </div>
//               </div>
//             </MotionWrapper>
//           </div>

//           {/* Bottom Philosophy Line */}
//           <div className="mt-32 text-center">
//             <div className="inline-flex items-center gap-6">
//               <div className="w-12 h-px bg-gradient-to-l from-gold-500/50 to-transparent" />
//               <p className="text-zinc-500 text-xs uppercase tracking-[0.3em] font-medium">
//                 No Detail Overlooked • No Compromise Accepted
//               </p>
//               <div className="w-12 h-px bg-gradient-to-r from-gold-500/50 to-transparent" />
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Services;

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import MotionWrapper from './MotionWrapper';
import { SERVICES } from '../constants';
import { 
  ArrowRight, 
  X, 
  CheckCircle2, 
  SearchCheck, 
  Users, 
  Zap, 
  BarChart3, 
  ShieldCheck,
  Target,
  Compass,
  Palette,
  Sparkles,
  Rocket,
  TrendingUp,
  Globe,
  Camera,
  ShoppingBag
} from 'lucide-react';
import MethodologySection from './MethodologySection.jsx';

// Enhanced icon components with brighter colors
const AnimatedWebIcon = ({ active }) => {
  const root = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (active) {
        gsap.to(".line", { scaleX: 1, stagger: 0.1, duration: 0.8, ease: "power2.out", opacity: 1 });
        gsap.to(".cursor", { opacity: 0, repeat: -1, duration: 0.5, ease: "steps(1)" });
      } else {
        gsap.to(".line", { scaleX: 0.3, opacity: 0.5 });
      }
    }, root);
    return () => ctx.revert();
  }, [active]);

  return (
    <svg ref={root} viewBox="0 0 100 100" className="w-16 h-16 fill-none stroke-current text-blue-400">
      <rect x="10" y="20" width="80" height="60" rx="8" strokeWidth="2" className="opacity-60 stroke-blue-400" />
      <line x1="10" y1="35" x2="90" y2="35" strokeWidth="2" className="opacity-60 stroke-blue-400" />
      <circle cx="20" cy="27" r="3" fill="#60A5FA" />
      <circle cx="28" cy="27" r="3" fill="#60A5FA" />
      <line x1="20" y1="48" x2="70" y2="48" strokeWidth="3" className="line origin-left stroke-blue-400" />
      <line x1="20" y1="58" x2="60" y2="58" strokeWidth="3" className="line origin-left stroke-blue-400" />
      <line x1="20" y1="68" x2="80" y2="68" strokeWidth="3" className="line origin-left stroke-blue-400" />
      <rect x="82" y="65" width="3" height="8" fill="#60A5FA" className="cursor" />
    </svg>
  );
};

const AnimatedMarketingIcon = ({ active }) => {
  const root = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (active) {
        gsap.to(".bar", { 
          height: (i) => 25 + Math.random() * 35, 
          stagger: 0.1, 
          duration: 0.6,
          repeat: -1,
          yoyo: true
        });
        gsap.to(".glass", { 
          x: 15, 
          y: -5, 
          duration: 2, 
          repeat: -1, 
          yoyo: true,
          ease: "sine.inOut" 
        });
      } else {
        gsap.to(".bar", { height: 15, stagger: 0.1 });
        gsap.to(".glass", { x: 0, y: 0 });
      }
    }, root);
    return () => ctx.revert();
  }, [active]);

  return (
    <svg ref={root} viewBox="0 0 100 100" className="w-16 h-16 fill-none stroke-current text-emerald-400">
      <rect x="20" y="60" width="8" height="15" className="bar" fill="#34D399" opacity="0.8" />
      <rect x="35" y="50" width="8" height="25" className="bar" fill="#34D399" opacity="0.8" />
      <rect x="50" y="40" width="8" height="35" className="bar" fill="#34D399" opacity="0.8" />
      <rect x="65" y="55" width="8" height="20" className="bar" fill="#34D399" opacity="0.8" />
      <g className="glass">
        <circle cx="40" cy="40" r="15" strokeWidth="2.5" stroke="#34D399" fill="none" />
        <line x1="51" y1="51" x2="65" y2="65" strokeWidth="2.5" stroke="#34D399" strokeLinecap="round" />
      </g>
    </svg>
  );
};

const AnimatedLeadGenIcon = ({ active }) => {
  const root = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (active) {
        gsap.to(".particle", { 
          x: (i) => Math.sin(i) * 30,
          y: (i) => Math.cos(i) * 30,
          opacity: 1,
          duration: 2,
          repeat: -1,
          yoyo: true,
          stagger: 0.2,
          ease: "sine.inOut"
        });
        gsap.to(".magnet", { 
          y: -8, 
          duration: 1, 
          repeat: -1, 
          yoyo: true,
          ease: "power1.inOut"
        });
      } else {
        gsap.to(".particle", { x: 0, y: 0, opacity: 0.3 });
        gsap.to(".magnet", { y: 0 });
      }
    }, root);
    return () => ctx.revert();
  }, [active]);

  return (
    <svg ref={root} viewBox="0 0 100 100" className="w-16 h-16 fill-none stroke-current text-purple-400">
      <path d="M30 40 C 30 20, 70 20, 70 40 L 70 60 L 55 60 L 55 40 C 55 35, 45 35, 45 40 L 45 60 L 30 60 Z" 
            strokeWidth="2.5" stroke="#A78BFA" fill="none" className="magnet" />
      <circle cx="20" cy="20" r="3" fill="#C084FC" className="particle" />
      <circle cx="80" cy="30" r="3" fill="#C084FC" className="particle" />
      <circle cx="15" cy="70" r="3" fill="#C084FC" className="particle" />
      <circle cx="85" cy="80" r="3" fill="#C084FC" className="particle" />
    </svg>
  );
};

const AnimatedDesignIcon = ({ active }) => {
  const root = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (active) {
        gsap.to(".path", { 
          strokeDashoffset: 0, 
          duration: 3, 
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut"
        });
        gsap.to(".nib", { 
          rotate: 45, 
          duration: 1, 
          repeat: -1, 
          yoyo: true,
          ease: "power1.inOut"
        });
      } else {
        gsap.to(".path", { strokeDashoffset: 100 });
        gsap.to(".nib", { rotate: 0 });
      }
    }, root);
    return () => ctx.revert();
  }, [active]);

  return (
    <svg ref={root} viewBox="0 0 100 100" className="w-16 h-16 fill-none stroke-current text-pink-400">
      <path d="M20 80 Q 50 10 80 80" strokeWidth="2.5" strokeDasharray="100" 
            strokeDashoffset="100" className="path stroke-pink-400" fill="none" />
      <g className="nib origin-center">
        <path d="M50 30 L 60 50 L 50 70 L 40 50 Z" strokeWidth="2" stroke="#F472B6" fill="none" />
        <circle cx="50" cy="50" r="2" fill="#F472B6" />
      </g>
    </svg>
  );
};

// Enhanced service metadata with vibrant images
const SERVICE_META = {
  0: { 
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    renderIcon: (active) => <AnimatedMarketingIcon active={active} />,
    gradient: "from-emerald-500/20 via-emerald-400/5 to-transparent",
    accentColor: "emerald"
  },
  1: { 
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
    renderIcon: (active) => <AnimatedWebIcon active={active} />,
    gradient: "from-blue-500/20 via-blue-400/5 to-transparent",
    accentColor: "blue"
  },
  2: { 
    img: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800",
    renderIcon: (active) => <AnimatedLeadGenIcon active={active} />,
    gradient: "from-purple-500/20 via-purple-400/5 to-transparent",
    accentColor: "purple"
  },
  3: { 
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
    renderIcon: (active) => <AnimatedDesignIcon active={active} />,
    gradient: "from-pink-500/20 via-pink-400/5 to-transparent",
    accentColor: "pink"
  },
  4: { 
    img: "https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&q=80&w=800",
    renderIcon: (active) => <AnimatedLeadGenIcon active={active} />,
    gradient: "from-orange-500/20 via-orange-400/5 to-transparent",
    accentColor: "orange"
  },
};

// Enhanced service details with more vibrant descriptions
const SERVICE_DETAILS = {
  'seo': {
    subtitle: '🚀 Dominate Search Rankings',
    desc: 'Our data-driven SEO strategies propel your brand to the top of search results, driving qualified traffic and maximizing ROI.',
    features: [
      '🔍 Advanced SEO & Local Search Optimization',
      '📱 Social Media Marketing & Management',
      '💰 High-Converting PPC Campaigns',
      '📧 Automated Email & Content Marketing',
      '📊 Real-Time Analytics & Performance Tracking',
      '🎯 LinkedIn Optimization & B2B Lead Gen',
      '💬 WhatsApp & Email Campaign Automation',
      '▶️ YouTube & Display Advertising',
      '📈 Conversion-Focused Social Strategy',
      '⚡ Weekly Performance Reports & Insights'
    ]
  },
  'web-dev': {
    subtitle: '💻 Build Digital Excellence',
    desc: 'We engineer high-performance web solutions that combine stunning design with robust functionality to accelerate your business growth.',
    features: [
      '⚡ Custom Full-Stack Development',
      '🛡️ Enterprise-Grade Security & Maintenance',
      '🚄 Lightning-Fast Performance Optimization',
      '🛒 Scalable E-commerce Solutions',
      '🔍 SEO-First Architecture',
      '🎨 UX/UI Focused Design',
      '🔗 API Integrations & Cloud Solutions'
    ]
  },
  'smm': {
    subtitle: '📱 Conquer Social Media',
    desc: 'We create magnetic social media strategies that build engaged communities and convert followers into loyal customers.',
    features: [
      '📝 Strategic Content Calendar Planning',
      '🤝 Influencer Partnership Management',
      '💬 24/7 Community Engagement',
      '🎥 Viral Video Content Production',
      '📱 Platform-Specific Optimization',
      '💰 High-ROI Social Advertising',
      '🎯 Brand Voice Development'
    ]
  },
  'graphic-design': {
    subtitle: '🎨 Visual Storytelling Mastery',
    desc: 'We craft stunning visuals that capture attention, communicate your brand story, and drive meaningful engagement.',
    features: [
      '✨ Premium Brand Identity Design',
      '📄 Professional Marketing Collaterals',
      '📱 Scroll-Stopping Social Creatives',
      '📊 Engaging Infographics',
      '🎬 High-Impact Video Content',
      '🖼️ Dynamic Advertising Banners',
      '🎯 Conversion-Focused Design'
    ]
  },
  'lead-gen': {
    subtitle: '⚡ Supercharge Your Sales',
    desc: 'We build sophisticated lead generation systems that consistently deliver high-quality prospects ready to convert.',
    features: [
      '🎯 Performance-Driven PPC Campaigns',
      '💼 Targeted B2B LinkedIn Strategies',
      '📈 Conversion Rate Optimization',
      '🏗️ High-Converting Landing Pages',
      '🤖 Automated Email Sequences',
      '🔄 CRM Integration & Automation',
      '📊 Multi-Channel Attribution',
      '💰 ROI-Focused Analytics'
    ]
  }
};

// Enhanced approach with brighter colors
const DETAILED_APPROACH = [
  { 
    title: "Deep Discovery", 
    desc: "We dive deep into your business goals, challenges, and audience to build a rock-solid foundation for success.", 
    icon: <SearchCheck size={24} />,
    color: "bg-blue-500 text-white",
    lightColor: "bg-blue-50 text-blue-600"
  },
  { 
    title: "Strategic Blueprint", 
    desc: "We craft data-backed strategies that blend creativity with technology for maximum market impact.", 
    icon: <Compass size={24} />,
    color: "bg-emerald-500 text-white",
    lightColor: "bg-emerald-50 text-emerald-600"
  },
  { 
    title: "Creative Excellence", 
    desc: "Our team delivers outstanding designs, campaigns, and solutions that make your brand unforgettable.", 
    icon: <Palette size={24} />,
    color: "bg-purple-500 text-white",
    lightColor: "bg-purple-50 text-purple-600"
  },
  { 
    title: "Seamless Collaboration", 
    desc: "We work as your dedicated partner, ensuring complete transparency and alignment at every step.", 
    icon: <Users size={24} />,
    color: "bg-pink-500 text-white",
    lightColor: "bg-pink-50 text-pink-600"
  },
  { 
    title: "Continuous Innovation", 
    desc: "We constantly refine and optimize your campaigns to maximize performance and ROI.", 
    icon: <Zap size={24} />,
    color: "bg-orange-500 text-white",
    lightColor: "bg-orange-50 text-orange-600"
  },
  { 
    title: "Measurable Results", 
    desc: "We focus on tangible outcomes that drive real business growth and long-term success.", 
    icon: <BarChart3 size={24} />,
    color: "bg-indigo-500 text-white",
    lightColor: "bg-indigo-50 text-indigo-600"
  },
  { 
    title: "Premium Delivery", 
    desc: "We deliver exceptional quality with unmatched precision and punctuality, every single time.", 
    icon: <ShieldCheck size={24} />,
    color: "bg-rose-500 text-white",
    lightColor: "bg-rose-50 text-rose-600"
  }
];

const Services = () => {
  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedServiceId, setSelectedServiceId] = useState(null);

  const selectedService = SERVICES.find(s => s.id === selectedServiceId);
  const selectedDetails = selectedServiceId ? SERVICE_DETAILS[selectedServiceId] : null;
  
  return (
    <div className="bg-gradient-to-b from-white to-zinc-50">
      <section id="services" className="py-32 relative overflow-hidden">
        {/* Modern abstract background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
        </div>

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          {/* Enhanced header with modern typography */}
          <div className="max-w-4xl mb-24">
            <MotionWrapper variant="fade">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 px-4 py-2 rounded-full mb-6">
                <Sparkles size={16} className="text-emerald-500" />
                <span className="text-emerald-600 font-semibold uppercase tracking-wider text-xs">Premium Services</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-display font-black text-[#1A1F2E] tracking-tight leading-[1.1]">
                Transform your
                <span className="block mt-2">
                  <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                    digital presence
                  </span>
                </span>
              </h2>
              <p className="text-xl text-zinc-600 max-w-2xl mt-8 leading-relaxed">
                We deliver cutting-edge solutions that drive growth, engage audiences, and 
                <span className="font-semibold text-zinc-900"> maximize your ROI</span>
              </p>
            </MotionWrapper>
          </div>

          {/* Enhanced service cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => {
              const meta = SERVICE_META[idx];
              const isActive = hoveredId === service.id;
              const accentColor = meta?.accentColor || 'blue';
              
              const gradientColors = {
                emerald: 'from-emerald-500 to-emerald-600',
                blue: 'from-blue-500 to-blue-600',
                purple: 'from-purple-500 to-purple-600',
                pink: 'from-pink-500 to-pink-600',
                orange: 'from-orange-500 to-orange-600',
              };

              return (
                <MotionWrapper 
                  key={service.id} 
                  variant="fade"
                  delay={idx * 0.1}
                >
                  <motion.div 
                    onMouseEnter={() => setHoveredId(service.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    onClick={() => setSelectedServiceId(service.id)}
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="group relative bg-white rounded-3xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500"
                  >
                    {/* Modern gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${meta?.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10`} />
                    
                    {/* Image background with modern treatment */}
                    <div className="absolute inset-0 z-0">
                      <img 
                        src={meta?.img} 
                        className="w-full h-full object-cover transition-all duration-700 scale-110 group-hover:scale-100 opacity-20 group-hover:opacity-30" 
                        alt={service.title}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/95 to-white/90" />
                    </div>

                    {/* Content */}
                    <div className="relative z-20 p-10 flex flex-col h-[420px]">
                      {/* Icon with modern styling */}
                      <div className={`mb-8 transition-all duration-500 ${
                        isActive ? 'scale-110' : 'scale-100'
                      }`}>
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${
                          gradientColors[accentColor]
                        } bg-opacity-10 flex items-center justify-center text-white shadow-lg`}>
                          {meta?.renderIcon(isActive)}
                        </div>
                      </div>

                      {/* Title with modern typography */}
                      <h3 className="text-2xl font-bold text-[#1A1F2E] mb-4 tracking-tight">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-zinc-600 text-sm leading-relaxed mb-6 line-clamp-3">
                        {service.description}
                      </p>

                      {/* Features preview */}
                      <div className="flex flex-wrap gap-2 mb-auto">
                        {service.features?.slice(0, 3).map((feature, i) => (
                          <span key={i} className="text-xs bg-zinc-100 text-zinc-700 px-3 py-1.5 rounded-full font-medium">
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* CTA with modern styling */}
                      <div className="flex items-center justify-between mt-8 pt-4 border-t border-zinc-100">
                        <span className={`text-sm font-semibold bg-gradient-to-r ${
                          gradientColors[accentColor]
                        } bg-clip-text text-transparent`}>
                          Learn more
                        </span>
                        <motion.div 
                          animate={{ x: isActive ? 5 : 0 }}
                          className={`w-10 h-10 rounded-full bg-gradient-to-r ${
                            gradientColors[accentColor]
                          } flex items-center justify-center text-white shadow-lg`}
                        >
                          <ArrowRight size={18} />
                        </motion.div>
                      </div>
                    </div>

                    {/* Modern corner accent */}
                    <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${
                      gradientColors[accentColor]
                    } opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-bl-full`} />
                  </motion.div>
                </MotionWrapper>
              );
            })}
          </div>

          {/* Modern stats section */}
          <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Projects Delivered', icon: Rocket },
              { number: '98%', label: 'Client Satisfaction', icon: TrendingUp },
              { number: '50+', label: 'Expert Team Members', icon: Users },
              { number: '24/7', label: 'Premium Support', icon: Globe },
            ].map((stat, idx) => (
              <MotionWrapper key={idx} variant="fade" delay={0.2 + idx * 0.1}>
                <div className="text-center group">
                  <div className="inline-flex p-4 rounded-2xl bg-white shadow-md group-hover:shadow-xl transition-all mb-4">
                    <stat.icon className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div className="text-3xl font-black text-[#1A1F2E] mb-1">{stat.number}</div>
                  <div className="text-sm text-zinc-500 font-medium">{stat.label}</div>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced modal with modern styling */}
      <AnimatePresence>
        {selectedServiceId && selectedService && selectedDetails && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedServiceId(null)}
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
            />
            
            <motion.div
              layoutId={selectedServiceId}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-6xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedServiceId(null)}
                className="absolute top-6 right-6 z-50 p-3 bg-white/90 backdrop-blur hover:bg-white rounded-full transition-all text-zinc-900 shadow-lg"
              >
                <X size={20} />
              </button>

              {/* Left side - Image with modern overlay */}
              <div className="lg:w-2/5 relative bg-gradient-to-br from-[#849ce6] to-[#515cae] min-h-[300px] lg:min-h-0">
                <img 
                  src={SERVICE_META[SERVICES.findIndex(s => s.id === selectedServiceId)]?.img} 
                  className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60"
                  alt={selectedService.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#1A1F2E] via-[#1A1F2E]/80 to-transparent" />
                <div className="absolute bottom-12 left-12 right-12">
                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full mb-6">
                    <Sparkles size={14} className="text-emerald-400" />
                    <span className="text-emerald-400 font-semibold text-xs uppercase tracking-wider">Premium Service</span>
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mb-4">
                    {selectedService.title}
                  </h2>
                  <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full" />
                </div>
              </div>

              {/* Right side - Content */}
              <div className="lg:w-3/5 p-10 lg:p-16 bg-white overflow-y-auto">
                <div className="max-w-xl">
                  {/* Subtitle with emoji */}
                  <h3 className="text-emerald-600 font-bold text-lg mb-4">
                    {selectedDetails.subtitle}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-2xl font-bold text-[#1A1F2E] mb-10 leading-tight">
                    {selectedDetails.desc}
                  </p>

                  {/* Features grid */}
                  <div className="space-y-6">
                    <h4 className="text-xs font-black text-zinc-400 uppercase tracking-wider flex items-center gap-2">
                      <span className="w-8 h-0.5 bg-emerald-400 rounded-full" />
                      Elite Capabilities
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedDetails.features.map((feature, i) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + (i * 0.03) }}
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-zinc-50 transition-colors group"
                        >
                          <div className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <CheckCircle2 size={14} className="text-emerald-600" />
                          </div>
                          <span className="text-zinc-700 text-sm font-medium leading-relaxed">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* CTA buttons */}
                  {/* <div className="mt-12 flex flex-col sm:flex-row items-center">
                    <button 
                      onClick={() => navigate('/contact')}
                      className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-emerald-600 to-blue-600 text-white rounded-xl font-bold uppercase tracking-wider text-sm hover:shadow-xl hover:scale-105 transition-all"
                    >
                      Request Consultation
                    </button>
                    
                  </div> */}

                  <div className="mt-12 flex flex-col sm:flex-row items-center justify-center">
                    <button 
                      onClick={() => navigate('/contact')}
                      className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-emerald-600 to-blue-600 text-white rounded-xl font-bold uppercase tracking-wider text-sm hover:shadow-xl hover:scale-105 transition-all"
                    >
                      Request Consultation
                    </button>
                  </div>


                  {/* Trust badges */}
                  <div className="mt-8 flex items-center gap-4 text-xs text-zinc-400">
                    <span className="flex items-center gap-1">
                      <ShieldCheck size={14} className="text-emerald-500" />
                      Enterprise Security
                    </span>
                    <span className="w-1 h-1 bg-zinc-300 rounded-full" />
                    <span className="flex items-center gap-1">
                      <Zap size={14} className="text-emerald-500" />
                      24/7 Support
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

       <section className="py-40 bg-green-950 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[150px] -mr-60 -mt-60 pointer-events-none" />
         <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-500/5 rounded-full blur-[120px] -ml-40 -mb-40 pointer-events-none" />

         <div className="container mx-auto px-6 lg:px-16 relative z-10">
           <div className="max-w-4xl mx-auto text-center mb-32">
             <MotionWrapper variant="fade">
               <div className="inline-flex items-center gap-4 bg-gold-500/10 px-6 py-2 rounded-full mb-10 border border-gold-500/20">
                 <Target size={16} className="text-gold-500" />
                <span className="text-gold-500 font-black uppercase tracking-[0.3em] text-[10px]">Methodology</span>
               </div>
               <h3 className="text-2xl md:text-4xl font-display font-black text-white mb-10 tracking-tighter uppercase leading-[0.9]">
                 Always Giving You <br/><span className="text-gold-500">Exactly</span> What You Need
               </h3>
               <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-3xl mx-auto font-medium">
                 No more scattered details or convoluted tasks. We line everything up so nothing gets lost—anticipating and resolving before you have to ask.
               </p>
            </MotionWrapper>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
             {DETAILED_APPROACH.map((step, idx) => (
              <MotionWrapper key={idx} variant="fade" delay={idx * 0.1}>
                <div className="group relative bg-white/5 border border-white/10 rounded-[3rem] p-10 h-full flex flex-col transition-all duration-500 hover:bg-white hover:border-white hover:-translate-y-4 hover:shadow-[0_40px_80px_-20px_rgba(197,160,33,0.3)]">
                  <div className="absolute top-10 right-10 text-[10px] font-black text-zinc-500 group-hover:text-gold-500 transition-colors uppercase tracking-[0.3em]">
                    Step {idx + 1}
                  </div>

                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${step.color}`}>
                    {step.icon}
                  </div>
                  
                  <h4 className="text-xl font-display font-black text-white group-hover:text-zinc-900 mb-4 tracking-tight uppercase leading-tight transition-colors">
                    {step.title}
                  </h4>
                  
                  <p className="text-[#f9f2ca]/70 text-sm leading-relaxed group-hover:text-zinc-600 font-medium transition-colors">
                    {step.desc}
                  </p>

                  <div className="mt-auto pt-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-1 bg-gold-500 rounded-full" />
                  </div>
                </div>
              </MotionWrapper>
            ))}

            <MotionWrapper delay={DETAILED_APPROACH.length * 0.1} variant="fade">
              <div className="bg-gold-500 rounded-[3rem] p-10 h-full flex flex-col justify-center items-center text-center shadow-2xl hover:scale-105 transition-transform duration-500">
                <CheckCircle2 size={48} className="text-white mb-6" strokeWidth={1.5} />
                <h4 className="text-2xl font-display font-black text-white uppercase tracking-tighter mb-4">
                  Ready for <br/>Results?
                </h4>
                <p className="text-white/80 text-sm font-medium mb-8">Let's align our expertise with your vision.</p>
                <button 
                  onClick={() => navigate('/contact')}
                  className="px-8 py-4 bg-white text-gold-600 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:shadow-xl transition-all"
                >
                  Get Started
                </button>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>
      {/* <MethodologySection /> */}
    </div>
  );
};

export default Services;

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import {
//   ArrowRight,
//   X,
//   CheckCircle2,
//   Users,
//   Rocket,
//   TrendingUp,
//   Globe,
//   Sparkles,
//   Target,
// } from "lucide-react";
// import MotionWrapper from "./MotionWrapper";
// import { SERVICES } from "../constants";

// /* ===========================
//    LUXURY LIGHT THEME TOKENS
// =========================== */

// const GOLD = "#C6A75E";
// const GOLD_DARK = "#A47E1B";
// const SOFT_BG = "#F7F6F2";          // Ivory luxury background
// const CARD_BG = "bg-white/70 backdrop-blur-xl border border-[#E8E6DF]";
// const TEXT_PRIMARY = "#1A1F2E";
// const TEXT_SECONDARY = "#6B7280";

// /* ===========================
//    COMPONENT
// =========================== */

// const Services = () => {
//   const navigate = useNavigate();
//   const [selectedServiceId, setSelectedServiceId] = useState(null);

//   const selectedService = SERVICES.find(
//     (s) => s.id === selectedServiceId
//   );

//   return (
//     <div
//       className="min-h-screen relative overflow-hidden"
//       style={{ backgroundColor: SOFT_BG }}
//     >
//       {/* Soft radial gold highlight */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(198,167,94,0.08),transparent_40%)] pointer-events-none" />

//       {/* ===========================
//           HEADER
//       =========================== */}
//       <section className="py-36 relative">
//         <div className="container mx-auto px-6 lg:px-16 relative z-10">
//           <MotionWrapper variant="fade">
//             <div className="inline-flex items-center gap-3 border border-[#C6A75E]/30 px-6 py-2 rounded-full mb-10 bg-white/60 backdrop-blur">
//               <Sparkles size={14} style={{ color: GOLD }} />
//               <span
//                 className="uppercase tracking-[0.3em] text-xs font-semibold"
//                 style={{ color: GOLD }}
//               >
//                 Premium Services
//               </span>
//             </div>

//             <h2
//               className="text-5xl md:text-7xl font-serif font-semibold leading-tight tracking-tight"
//               style={{ color: TEXT_PRIMARY }}
//             >
//               Elevate Your
//               <span
//                 className="block bg-gradient-to-r bg-clip-text text-transparent"
//                 style={{
//                   backgroundImage: `linear-gradient(to right, ${GOLD}, ${GOLD_DARK})`,
//                 }}
//               >
//                 Digital Presence
//               </span>
//             </h2>

//             <p
//               className="text-lg mt-8 max-w-2xl leading-relaxed"
//               style={{ color: TEXT_SECONDARY }}
//             >
//               We design high-performance digital solutions built with precision,
//               clarity, and measurable impact.
//             </p>
//           </MotionWrapper>
//         </div>
//       </section>

//       {/* ===========================
//           SERVICES GRID
//       =========================== */}
//       <section className="pb-32">
//         <div className="container mx-auto px-6 lg:px-16">
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
//             {SERVICES.map((service) => (
//               <motion.div
//                 key={service.id}
//                 whileHover={{ y: -8, scale: 1.02 }}
//                 transition={{ duration: 0.5 }}
//                 onClick={() => setSelectedServiceId(service.id)}
//                 className={`relative ${CARD_BG} rounded-[2rem] p-14 cursor-pointer group shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_80px_-20px_rgba(198,167,94,0.25)] transition-all duration-700`}
//               >
//                 {/* subtle gold overlay */}
//                 <div
//                   className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
//                   style={{
//                     background:
//                       "linear-gradient(145deg, rgba(198,167,94,0.07), transparent)",
//                   }}
//                 />

//                 <div className="relative z-10">
//                   <h3
//                     className="text-2xl font-semibold mb-6 tracking-tight"
//                     style={{ color: TEXT_PRIMARY }}
//                   >
//                     {service.title}
//                   </h3>

//                   <p
//                     className="text-sm leading-relaxed mb-8"
//                     style={{ color: TEXT_SECONDARY }}
//                   >
//                     {service.description}
//                   </p>

//                   <div className="flex items-center justify-between pt-6 border-t border-[#E8E6DF]">
//                     <span
//                       className="text-sm uppercase tracking-widest font-semibold"
//                       style={{ color: GOLD }}
//                     >
//                       Explore
//                     </span>

//                     <div
//                       className="w-10 h-10 rounded-full flex items-center justify-center text-white"
//                       style={{
//                         background: `linear-gradient(to right, ${GOLD}, ${GOLD_DARK})`,
//                       }}
//                     >
//                       <ArrowRight size={16} />
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ===========================
//           STATS SECTION
//       =========================== */}
//       <section className="pb-32">
//         <div className="container mx-auto px-6 lg:px-16">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//             {[
//               { number: "500+", label: "Projects Delivered", icon: Rocket },
//               { number: "98%", label: "Client Satisfaction", icon: TrendingUp },
//               { number: "50+", label: "Expert Team", icon: Users },
//               { number: "24/7", label: "Support", icon: Globe },
//             ].map((stat, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-white rounded-[1.8rem] p-10 border border-[#ECEBE6] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.06)] transition-all"
//               >
//                 <stat.icon
//                   className="mx-auto mb-4"
//                   style={{ color: GOLD }}
//                 />
//                 <div
//                   className="text-3xl font-bold"
//                   style={{ color: TEXT_PRIMARY }}
//                 >
//                   {stat.number}
//                 </div>
//                 <div
//                   className="text-sm uppercase tracking-wider mt-1"
//                   style={{ color: TEXT_SECONDARY }}
//                 >
//                   {stat.label}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ===========================
//           MODAL
//       =========================== */}
//       <AnimatePresence>
//         {selectedService && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setSelectedServiceId(null)}
//               className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
//             />

//             <motion.div
//               initial={{ opacity: 0, scale: 0.96, y: 20 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.96, y: 20 }}
//               transition={{ duration: 0.5 }}
//               className="fixed inset-0 z-50 flex items-center justify-center p-6"
//             >
//               <div className="w-full max-w-4xl bg-white rounded-[2.5rem] p-16 relative shadow-[0_40px_120px_-20px_rgba(0,0,0,0.15)]">
//                 <button
//                   onClick={() => setSelectedServiceId(null)}
//                   className="absolute top-8 right-8 text-gray-600 hover:text-black"
//                 >
//                   <X />
//                 </button>

//                 <h2
//                   className="text-4xl font-serif font-semibold mb-6"
//                   style={{ color: TEXT_PRIMARY }}
//                 >
//                   {selectedService.title}
//                 </h2>

//                 <div
//                   className="w-20 h-1 rounded-full mb-8"
//                   style={{
//                     background: `linear-gradient(to right, ${GOLD}, ${GOLD_DARK})`,
//                   }}
//                 />

//                 <p
//                   className="leading-relaxed mb-10"
//                   style={{ color: TEXT_SECONDARY }}
//                 >
//                   {selectedService.description}
//                 </p>

//                 <button
//                   onClick={() => navigate("/contact")}
//                   className="px-10 py-4 text-white font-semibold uppercase tracking-wider rounded-xl transition-all hover:shadow-[0_10px_40px_rgba(198,167,94,0.4)]"
//                   style={{
//                     background: `linear-gradient(to right, ${GOLD}, ${GOLD_DARK})`,
//                   }}
//                 >
//                   Request Consultation
//                 </button>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>

//       {/* ===========================
//           METHODOLOGY
//       =========================== */}
//       <section className="py-40 bg-white">
//         <div className="container mx-auto px-6 lg:px-16 text-center">
//           <div className="inline-flex items-center gap-3 border border-[#C6A75E]/30 px-6 py-2 rounded-full mb-10 bg-[#F9F8F5]">
//             <Target size={14} style={{ color: GOLD }} />
//             <span
//               className="uppercase tracking-[0.3em] text-xs"
//               style={{ color: GOLD }}
//             >
//               Methodology
//             </span>
//           </div>

//           <h3
//             className="text-4xl md:text-5xl font-serif font-semibold mb-6"
//             style={{ color: TEXT_PRIMARY }}
//           >
//             Precision. Performance. Prestige.
//           </h3>

//           <p
//             className="max-w-3xl mx-auto leading-relaxed"
//             style={{ color: TEXT_SECONDARY }}
//           >
//             Our structured execution model ensures clarity, efficiency, and
//             measurable business impact at every stage.
//           </p>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Services;