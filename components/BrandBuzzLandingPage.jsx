// /**
//  * @license
//  * SPDX-License-Identifier: Apache-2.0
//  */

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { 
//   Search, 
//   Megaphone, 
//   TrendingUp, 
//   Sparkles, 
//   ArrowDown, 
//   ArrowRight, 
//   Star, 
//   Facebook, 
//   Instagram, 
//   Twitter, 
//   Menu, 
//   X, 
//   Check, 
//   Briefcase, 
//   Quote, 
//   Award, 
//   ExternalLink 
// } from 'lucide-react';
// //import { SERVICES_DATA, STEPS_DATA, TESTIMONIALS_DATA } from '../data';
// //import ContactModal from './ContactModal';
// //import ServiceDetailModal from './ServiceDetailModal';
// //import TestimonialSlider from './TestimonialSlider';

// // Map icons dynamically
// const iconMap = {
//   Search: Search,
//   Megaphone: Megaphone,
//   TrendingUp: TrendingUp,
//   Sparkles: Sparkles,
// };
// const STEPS_DATA = [
//   {
//     number: '01',
//     title: 'Research & Analysis',
//     description:
//       'We analyze your business, competitors, and target audience to create effective strategies.',
//   },
//   {
//     number: '02',
//     title: 'Planning & Strategy',
//     description:
//       'Our experts build customized digital marketing plans aligned with your goals.',
//   },
//   {
//     number: '03',
//     title: 'Execution',
//     description:
//       'We launch optimized campaigns across multiple channels to maximize performance.',
//   },
//   {
//     number: '04',
//     title: 'Optimization & Growth',
//     description:
//       'Continuous monitoring and improvements ensure better engagement and ROI.',
//   },
// ];

// const SERVICES_DATA = [
//   {
//     id: 'se',
//     iconName: 'Search',
//     title: 'SEO Optimization',
//     description:
//       'Improve your search engine rankings with data-driven SEO strategies, technical audits, and optimized content campaigns.',
//     bgColor: 'bg-orange-100',
//     textColor: 'text-orange-500',
//   },
//   {
//     id: 'marketing',
//     iconName: 'Megaphone',
//     title: 'Digital Marketing',
//     description:
//       'Run high-converting campaigns across social media, paid ads, and email funnels to accelerate customer acquisition.',
//     bgColor: 'bg-amber-100',
//     textColor: 'text-amber-500',
//   },
//   {
//     id: 'analytics',
//     iconName: 'TrendingUp',
//     title: 'Growth Analytics',
//     description:
//       'Track performance metrics and customer behavior with advanced analytics dashboards and actionable insights.',
//     bgColor: 'bg-emerald-100',
//     textColor: 'text-emerald-500',
//   },
//   {
//     id: 'branding',
//     iconName: 'Sparkles',
//     title: 'Brand Strategy',
//     description:
//       'Craft a memorable brand identity with compelling messaging, visual systems, and audience positioning.',
//     bgColor: 'bg-indigo-100',
//     textColor: 'text-indigo-500',
//   },
// ];

// export default function BrandBuzzLandingPage() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isContactOpen, setIsContactOpen] = useState(false);
//   const [selectedService, setSelectedService] = useState(null);
//   const [initialContactService, setInitialContactService] = useState('Marketing');

//   // Open contact form pre-filled with a specific service name
//   const handleOpenContactWithService = (serviceName) => {
//     setInitialContactService(serviceName);
//     setIsContactOpen(true);
//   };

//   const handleScroll = (id) => {
//     setIsMobileMenuOpen(false);
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#fcfbf9] text-slate-800 selection:bg-orange-100 selection:text-[#f25c27] font-sans antialiased">
      
//       {/* 1. TOP NAVBAR */}
//       <nav id="navbar" className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-20">
            
//             {/* Brand Logo */}
//             <div 
//               id="brand-logo" 
//               onClick={() => handleScroll('hero-section')} 
//               className="flex items-center gap-2 cursor-pointer group"
//             >
//               <div className="h-10 w-10 rounded-xl bg-[#f25c27] flex items-center justify-center text-white font-extrabold text-xl shadow-md shadow-orange-500/20 group-hover:scale-105 transition-all">
//                 B
//               </div>
//               <span className="font-display text-2xl font-extrabold tracking-tight text-slate-900">
//                 Brand<span className="text-[#f25c27]">Buzz</span>
//               </span>
//             </div>

//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center gap-8">
//               <button 
//                 onClick={() => handleScroll('hero-section')} 
//                 className="text-sm font-semibold text-slate-600 hover:text-[#f25c27] transition-colors cursor-pointer"
//               >
//                 Home
//               </button>
//               <button 
//                 onClick={() => handleScroll('agency-section')} 
//                 className="text-sm font-semibold text-slate-600 hover:text-[#f25c27] transition-colors cursor-pointer"
//               >
//                 About us
//               </button>
//               <button 
//                 onClick={() => handleScroll('services-section')} 
//                 className="text-sm font-semibold text-slate-600 hover:text-[#f25c27] transition-colors cursor-pointer"
//               >
//                 Services
//               </button>
//               <button 
//                 onClick={() => handleScroll('testimonials-section')} 
//                 className="text-sm font-semibold text-slate-600 hover:text-[#f25c27] transition-colors cursor-pointer"
//               >
//                 Blog
//               </button>
//               <button 
//                 onClick={() => setIsContactOpen(true)} 
//                 className="text-sm font-semibold text-slate-600 hover:text-[#f25c27] transition-colors cursor-pointer"
//               >
//                 Contact us
//               </button>
//             </div>

//             {/* CTA Buttons */}
//             <div className="hidden md:flex items-center gap-4">
//               <button
//                 id="navbar-cta-btn"
//                 onClick={() => setIsContactOpen(true)}
//                 className="px-6 py-2.5 rounded-full bg-[#f25c27] hover:bg-[#da4b18] text-white text-sm font-bold shadow-lg shadow-orange-500/15 hover:shadow-orange-500/25 transform hover:-translate-y-0.5 transition-all cursor-pointer"
//               >
//                 Sign Up
//               </button>
//             </div>

//             {/* Mobile Menu Trigger */}
//             <div className="md:hidden">
//               <button
//                 id="mobile-menu-trigger"
//                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                 className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors focus:outline-none cursor-pointer"
//                 aria-label="Toggle Menu"
//               >
//                 {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//               </button>
//             </div>

//           </div>
//         </div>

//         {/* Mobile Dropdown */}
//         {isMobileMenuOpen && (
//           <motion.div
//             id="mobile-dropdown"
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="md:hidden border-t border-slate-100 bg-white px-4 py-6 space-y-4 shadow-xl"
//           >
//             <button 
//               onClick={() => handleScroll('hero-section')} 
//               className="block w-full text-left px-4 py-2 rounded-xl text-base font-semibold text-slate-600 hover:bg-orange-50 hover:text-[#f25c27] transition-all cursor-pointer"
//             >
//               Home
//             </button>
//             <button 
//               onClick={() => handleScroll('agency-section')} 
//               className="block w-full text-left px-4 py-2 rounded-xl text-base font-semibold text-slate-600 hover:bg-orange-50 hover:text-[#f25c27] transition-all cursor-pointer"
//             >
//               About us
//             </button>
//             <button 
//               onClick={() => handleScroll('services-section')} 
//               className="block w-full text-left px-4 py-2 rounded-xl text-base font-semibold text-slate-600 hover:bg-orange-50 hover:text-[#f25c27] transition-all cursor-pointer"
//             >
//               Services
//             </button>
//             <button 
//               onClick={() => handleScroll('testimonials-section')} 
//               className="block w-full text-left px-4 py-2 rounded-xl text-base font-semibold text-slate-600 hover:bg-orange-50 hover:text-[#f25c27] transition-all cursor-pointer"
//             >
//               Blog
//             </button>
//             <button 
//               onClick={() => { setIsMobileMenuOpen(false); setIsContactOpen(true); }} 
//               className="block w-full text-left px-4 py-2 rounded-xl text-base font-semibold text-slate-600 hover:bg-orange-50 hover:text-[#f25c27] transition-all cursor-pointer"
//             >
//               Contact us
//             </button>
            
//             <div className="pt-4 border-t border-slate-100">
//               <button
//                 id="mobile-navbar-cta"
//                 onClick={() => { setIsMobileMenuOpen(false); setIsContactOpen(true); }}
//                 className="w-full text-center py-3 rounded-full bg-[#f25c27] text-white font-bold text-sm shadow-md cursor-pointer"
//               >
//                 Sign Up Now
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </nav>

//       {/* 2. HERO SECTION */}
//       <section id="hero-section" className="relative overflow-hidden pt-10 pb-20 md:py-24 bg-gradient-to-b from-[#fffaf7] to-[#fcfbf9]">
        
//         {/* Decorative background vectors/shapes */}
//         <div className="absolute top-1/4 left-5 w-3 h-3 bg-orange-400 rounded-full animate-ping opacity-70" />
//         <div className="absolute top-1/3 right-10 w-4 h-4 bg-orange-300 rounded-full opacity-60" />
//         <div className="absolute bottom-10 left-1/3 w-2.5 h-2.5 bg-orange-500 rounded-full opacity-50" />

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
//             {/* Left Column Content */}
//             <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
//               <motion.div
//                 initial={{ opacity: 0, y: 15 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-orange-50 text-[#f25c27] text-xs font-bold tracking-wider uppercase border border-orange-100"
//               >
//                 <Award size={14} />
//                 <span>Top Digital Marketing Agency of the Year</span>
//               </motion.div>

//               <motion.h1
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.1 }}
//                 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight"
//               >
//                 We create <br />
//                 <span className="text-[#f25c27] relative inline-block">
//                   solutions
//                   <span className="absolute left-0 bottom-2 w-full h-[6px] bg-orange-100 -z-10 rounded-full" />
//                 </span> for <br />
//                 your business
//               </motion.h1>

//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//                 className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal"
//               >
//                 Our team keeps a keen eye on emerging trends and technologies to ensure your marketing campaigns remain cutting-edge and deliver standard-setting ROI.
//               </motion.p>

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.3 }}
//                 className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
//               >
//                 <button
//                   id="hero-get-started-btn"
//                   onClick={() => setIsContactOpen(true)}
//                   className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#f25c27] hover:bg-[#da4b18] text-white font-bold text-base shadow-xl shadow-orange-500/20 hover:shadow-orange-500/35 hover:-translate-y-0.5 transition-all cursor-pointer"
//                 >
//                   Get Started
//                 </button>

//                 <button
//                   id="hero-explore-btn"
//                   onClick={() => handleScroll('services-section')}
//                   className="group flex items-center gap-2.5 px-6 py-4 rounded-full text-slate-700 hover:text-[#f25c27] font-semibold transition-all cursor-pointer"
//                 >
//                   <span className="h-10 w-10 rounded-full bg-slate-100 group-hover:bg-orange-50 flex items-center justify-center text-slate-600 group-hover:text-[#f25c27] transition-colors">
//                     <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
//                   </span>
//                   <span>Explore more</span>
//                 </button>
//               </motion.div>
//             </div>

//             {/* Right Column Image */}
//             <div className="lg:col-span-6 relative flex justify-center">
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.7, delay: 0.2 }}
//                 className="relative max-w-md sm:max-w-lg w-full"
//               >
//                 {/* Visual shadow layer */}
//                 <div className="absolute inset-0 bg-gradient-to-tr from-orange-100 to-amber-50 rounded-full blur-3xl opacity-60 -z-10" />
                
//                 <img
//                   //src="/src/assets/images/hero_illustration_1779706002368.png"
//                   src=""
//                   alt="BrandBuzz Solutions Illustration"
//                   referrerPolicy="no-referrer"
//                   className="w-full h-auto drop-shadow-2xl object-contain animate-[float_6s_ease-in-out_infinite]"
//                   style={{ transform: 'translateY(0px)' }}
//                 />

//                 {/* floating badge client reviews */}
//                 <div className="absolute top-2/3 right-0 sm:-right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-slate-100 hidden sm:flex items-center gap-3">
//                   <div className="h-10 w-10 rounded-full bg-amber-500 text-white font-bold flex items-center justify-center text-xs">
//                     3/5
//                   </div>
//                   <div>
//                     <p className="text-xs text-neutral-400 font-semibold tracking-wide">TRUSTED RATING</p>
//                     <p className="text-sm font-display font-extrabold text-slate-800">Exceptional Return</p>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* 3. SERVICES SECTION */}
//       <section id="services-section" className="py-20 md:py-28 bg-white border-y border-slate-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
//           {/* Section Heading */}
//           <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
//             <span className="text-xs font-bold uppercase tracking-widest text-[#f25c27] bg-orange-50 px-3 py-1 rounded-full">
//               Agency Expertise
//             </span>
//             <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
//               We Provide The Best Services
//             </h2>
//             <div className="h-1 w-12 bg-[#f25c27] mx-auto rounded-full mt-2" />
//             <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-lg mx-auto">
//               Let us unleash the full potential of your business with our tailored, data-driven brand growth strategies.
//             </p>
//           </div>

//           {/* Cards Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
//             {SERVICES_DATA.map((service, idx) => {
//               const IconComp = iconMap[service.iconName];
//               return (
//                 <motion.div
//                   key={service.id}
//                   id={`service-card-${service.id}`}
//                   initial={{ opacity: 0, y: 15 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.4, delay: idx * 0.1 }}
//                   className="group relative bg-white hover:bg-slate-50/50 rounded-3xl p-6 md:p-8 border border-neutral-100 hover:border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
//                 >
//                   {/* Decorative background splash */}
//                   <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-10 transition-opacity group-hover:opacity-25 pointer-events-none ${service.bgColor}`} />

//                   {/* Icon Bag */}
//                   <div className={`h-12 w-12 rounded-2xl flex items-center justify-center mb-6 shadow-sm ${service.bgColor}`}>
//                     <IconComp size={22} className={`${service.textColor}`} />
//                   </div>

//                   {/* Heading */}
//                   <h3 className="font-display text-lg sm:text-xl font-extrabold text-slate-900 mb-3 group-hover:text-[#f25c27] transition-colors">
//                     {service.title}
//                   </h3>

//                   {/* Short text */}
//                   <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">
//                     {service.description.substring(0, 95)}...
//                   </p>

//                   {/* Action Link Read More */}
//                   <button
//                     id={`service-read-more-${service.id}`}
//                     onClick={() => setSelectedService(service)}
//                     className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-800 hover:text-[#f25c27] transition-colors cursor-pointer group/link"
//                   >
//                     <span>Read More</span>
//                     <ArrowRight size={13} className="group-hover/link:translate-x-0.5 transition-transform" />
//                   </button>
//                 </motion.div>
//               );
//             })}
//           </div>

//           {/* CTA Footer line */}
//           <div className="mt-12 text-center">
//             <p className="text-xs text-neutral-400 font-medium">
//               Want a customized strategic framework?{' '}
//               <button 
//                 onClick={() => setIsContactOpen(true)} 
//                 className="text-[#f25c27] hover:underline font-bold cursor-pointer"
//               >
//                 Inquire bespoke solutions
//               </button>
//             </p>
//           </div>

//         </div>
//       </section>

//       {/* 4. SIMPLE SOLUTIONS SECTION (Steps layout) */}
//       <section id="solutions-section" className="py-20 md:py-28 bg-[#fff5f0] relative overflow-hidden">
        
//         {/* Soft layout patterns */}
//         <div className="absolute top-10 right-20 w-32 h-32 rounded-full bg-orange-100/40 pointer-events-none blur-2xl" />
//         <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-orange-100/40 pointer-events-none blur-3xl animate-pulse" />

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
//             {/* Left Side: 3D character armchair image */}
//             <div className="lg:order-1 lg:col-span-5 flex justify-center">
//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6 }}
//                 className="relative max-w-sm sm:max-w-md w-full"
//               >
//                 <img
//                   //src="/src/assets/images/armchair_character_1779706021995.png"
//                   src=""
//                   alt="Relaxing Solution Illustration"
//                   referrerPolicy="no-referrer"
//                   className="w-full h-auto drop-shadow-xl object-contain"
//                 />
//               </motion.div>
//             </div>

//             {/* Right Side: Step Content list */}
//             <div className="lg:order-2 lg:col-span-7 space-y-8">
//               <div className="space-y-3 text-center lg:text-left">
//                 <span className="text-xs font-bold uppercase tracking-widest text-[#f25c27] bg-white px-3 py-1 rounded-full border border-orange-100 shadow-sm">
//                   Strategic Process
//                 </span>
//                 <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight">
//                   Simple Solutions!
//                 </h2>
//                 <p className="text-neutral-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
//                   We understand that no two businesses are alike. That's why we take the time to audit, define, and personalize your creative workflows.
//                 </p>
//               </div>

//               {/* Numbered layout lines */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
//                 {STEPS_DATA.map((step) => (
//                   <div 
//                     key={step.number} 
//                     id={`step-item-${step.number}`}
//                     className="flex gap-4 p-4 rounded-2xl bg-white/70 backdrop-blur-sm shadow-sm border border-orange-50 hover:bg-white hover:shadow-md transition-all"
//                   >
//                     {/* Circle badge */}
//                     <div className="h-10 w-10 rounded-full bg-[#f25c27] text-white font-display font-extrabold text-sm flex items-center justify-center shrink-0 shadow-md shadow-orange-500/20">
//                       {step.number}
//                     </div>
//                     <div>
//                       <h4 className="font-display font-bold text-slate-900 text-sm md:text-base">
//                         {step.title}
//                       </h4>
//                       <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
//                         {step.description}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Buttons CTA */}
//               <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
//                 <button
//                   id="solutions-cta-started-btn"
//                   onClick={() => setIsContactOpen(true)}
//                   className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#f25c27] hover:bg-[#da4b18] text-white font-bold text-sm shadow-lg shadow-orange-500/15 cursor-pointer"
//                 >
//                   Get Started
//                 </button>
//                 <button
//                   id="solutions-cta-about-btn"
//                   onClick={() => handleScroll('agency-section')}
//                   className="w-full sm:w-auto px-7 py-3 rounded-full border border-orange-300 text-[#f25c27] hover:bg-white font-bold text-sm transition-colors cursor-pointer text-center"
//                 >
//                   Read more
//                 </button>
//               </div>

//             </div>

//           </div>
//         </div>
//       </section>

//       {/* 5. OUR AGENCY SECTION */}
//       <section id="agency-section" className="py-20 md:py-28 bg-white overflow-hidden">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
//             {/* Left side text explanation */}
//             <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
//               <span className="text-xs font-bold uppercase tracking-widest text-[#f25c27] bg-orange-50 px-3 py-1 rounded-full">
//                 Core Agency Goals
//               </span>
              
//               <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-indigo-950 tracking-tight leading-tight">
//                 Our Agency Inside
//               </h2>

//               <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
//                 We believe in the absolute power of data. Our analytics-driven approach allows us to make clean, informed decisions that optimize your marketing efforts for verified maximum ROI. Let's translate your dormant product streams into actionable customer engagement flows.
//               </p>

//               <div className="space-y-3">
//                 <div id="agency-benefit-1" className="flex items-center gap-3 justify-center lg:justify-start">
//                   <div className="h-6 w-6 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center">
//                     <Check size={14} className="stroke-[3px]" />
//                   </div>
//                   <span className="text-sm font-semibold text-slate-800">Laser Targeted Customer Segmentation</span>
//                 </div>

//                 <div id="agency-benefit-2" className="flex items-center gap-3 justify-center lg:justify-start">
//                   <div className="h-6 w-6 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center">
//                     <Check size={14} className="stroke-[3px]" />
//                   </div>
//                   <span className="text-sm font-semibold text-slate-800">Advanced 365 Attribution Reporting</span>
//                 </div>

//                 <div id="agency-benefit-3" className="flex items-center gap-3 justify-center lg:justify-start">
//                   <div className="h-6 w-6 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center">
//                     <Check size={14} className="stroke-[3px]" />
//                   </div>
//                   <span className="text-sm font-semibold text-slate-800">Highly Transparent Deliverables Layout</span>
//                 </div>
//               </div>

//               <div className="pt-4">
//                 <button
//                   id="read-more-agency-btn"
//                   onClick={() => handleOpenContactWithService('Consultation')}
//                   className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#f25c27] hover:bg-[#da4b18] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
//                 >
//                   Read more
//                 </button>
//               </div>
//             </div>

//             {/* Right side illustration workspace stats */}
//             <div className="lg:col-span-6 flex justify-center relative">
//               {/* background design accent */}
//               <div className="absolute inset-0 bg-indigo-50 rounded-full blur-3xl opacity-40 pointer-events-none" />
              
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6 }}
//                 className="relative max-w-sm sm:max-w-md w-full"
//               >
//                 <img
//                   //src="/src/assets/images/agency_analytics_1779706038759.png"
//                   src=""
//                   alt="Analytics dashboard agency illustration"
//                   referrerPolicy="no-referrer"
//                   className="w-full h-auto drop-shadow-2xl object-contain"
//                 />
//               </motion.div>
//             </div>

//           </div>

//         </div>
//       </section>

//       {/* 6. TESTIMONIALS SECTION ("What Clients Say!") */}
//       <section id="testimonials-section" className="py-20 md:py-28 border-t border-slate-100 bg-[#fbfaf8]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
//           {/* Header */}
//           <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
//             <span className="text-xs font-bold uppercase tracking-widest text-[#f25c27] bg-orange-50 px-3 py-1 rounded-full">
//               Global Reviews
//             </span>
//             <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
//               What Clients Say!
//             </h2>
//             <div className="h-1 w-12 bg-[#f25c27] mx-auto rounded-full mt-2" />
//             <p className="text-sm text-neutral-400 font-medium max-w-md mx-auto leading-relaxed">
//               See How Our Digital Marketing Agency Helped Clients Achieve Their Goals.
//             </p>
//           </div>

//           {/* Testimonial Slider Component */}
//           {/* <TestimonialSlider testimonials={TESTIMONIALS_DATA} /> */}

//         </div>
//       </section>

//       {/* 7. READY TO GET STARTED BANNER */}
//       <section id="cta-banner-section" className="relative py-12 bg-gradient-to-r from-[#f25c27] to-amber-500 text-white overflow-hidden">
        
//         {/* Background shapes */}
//         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 to-transparent pointer-events-none" />
        
//         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
//           <div className="space-y-1">
//             <h3 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">
//               Ready to get started?
//             </h3>
//             <p className="text-orange-50 text-sm md:text-base font-normal">
//               Book a live bespoke consultation with our strategists and grow.
//             </p>
//           </div>

//           <button
//             id="cta-bottom-btn"
//             onClick={() => setIsContactOpen(true)}
//             className="px-8 py-3.5 rounded-full border-2 border-white hover:bg-white hover:text-[#f25c27] font-bold text-sm md:text-base transition-all transform hover:-translate-y-0.5 shadow-lg shadow-black/10 cursor-pointer text-center"
//           >
//             Contact Us
//           </button>
//         </div>
//       </section>

//       {/* 8. FOOTER */}
//       <footer id="footer" className="bg-[#fff5f0] text-slate-800 pt-16 pb-8 block relative">
        
//         {/* Top dividing visual curve */}
//         <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-400/20 to-transparent" />

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-orange-200/30">
            
//             {/* Left Brand Column */}
//             <div className="lg:col-span-4 space-y-6">
//               <div className="flex items-center gap-2">
//                 <div className="h-9 w-9 rounded-xl bg-[#f25c27] flex items-center justify-center text-white font-extrabold text-lg">
//                   B
//                 </div>
//                 <span className="font-display text-xl font-extrabold tracking-tight text-slate-950">
//                   Brand<span className="text-[#f25c27]">Buzz</span>
//                 </span>
//               </div>
              
//               <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-sm">
//                 Our agency keeps an eye on emerging trends and modern optimization architectures. Experience solutions crafted for your unique growth parameters.
//               </p>

//               {/* Social Contacts */}
//               <div className="flex gap-3">
//                 <button 
//                   id="social-link-facebook" 
//                   aria-label="Facebook Link" 
//                   className="h-8 w-8 rounded-full bg-white hover:bg-orange-50 hover:text-[#f25c27] text-slate-500 flex items-center justify-center border border-orange-100/60 shadow-sm transition-colors cursor-pointer"
//                 >
//                   <Facebook size={14} />
//                 </button>
//                 <button 
//                   id="social-link-instagram" 
//                   aria-label="Instagram Link" 
//                   className="h-8 w-8 rounded-full bg-white hover:bg-orange-50 hover:text-[#f25c27] text-slate-500 flex items-center justify-center border border-orange-100/60 shadow-sm transition-colors cursor-pointer"
//                 >
//                   <Instagram size={14} />
//                 </button>
//                 <button 
//                   id="social-link-twitter" 
//                   aria-label="Twitter Link" 
//                   className="h-8 w-8 rounded-full bg-white hover:bg-orange-50 hover:text-[#f25c27] text-slate-500 flex items-center justify-center border border-orange-100/60 shadow-sm transition-colors cursor-pointer"
//                 >
//                   <Twitter size={14} />
//                 </button>
//               </div>
//             </div>

//             {/* Sitemap Column 2: Company */}
//             <div className="lg:col-span-2 space-y-4">
//               <h4 className="font-display text-xs font-bold uppercase tracking-wider text-slate-400">
//                 Company
//               </h4>
//               <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
//                 <li><button onClick={() => handleScroll('hero-section')} className="hover:text-[#f25c27] transition-colors cursor-pointer text-left">About</button></li>
//                 <li><button onClick={() => setIsContactOpen(true)} className="hover:text-[#f25c27] transition-colors cursor-pointer text-left">Contact</button></li>
//                 <li><button onClick={() => setIsContactOpen(true)} className="hover:text-[#f25c27] transition-colors cursor-pointer text-left">Careers</button></li>
//                 <li><button onClick={() => handleScroll('agency-section')} className="hover:text-[#f25c27] transition-colors cursor-pointer text-left">Team</button></li>
//               </ul>
//             </div>

//             {/* Sitemap Column 3: Designs */}
//             <div className="lg:col-span-3 space-y-4">
//               <h4 className="font-display text-xs font-bold uppercase tracking-wider text-slate-400">
//                 Designs
//               </h4>
//               <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
//                 <li><button onClick={() => handleScroll('services-section')} className="hover:text-[#f25c27] transition-colors cursor-pointer text-left">Design contests</button></li>
//                 <li><button onClick={() => handleOpenContactWithService('Designs')} className="hover:text-[#f25c27] transition-colors cursor-pointer text-left">1-to-1 Projects</button></li>
//                 <li><button onClick={() => setIsContactOpen(true)} className="hover:text-[#f25c27] transition-colors cursor-pointer text-left">Find a designer</button></li>
//                 <li><button onClick={() => handleScroll('hero-section')} className="hover:text-[#f25c27] transition-colors cursor-pointer text-left">Discover inspiration</button></li>
//                 <li><button onClick={() => handleOpenContactWithService('Pricing')} className="hover:text-[#f25c27] transition-colors cursor-pointer text-left">Pricing</button></li>
//               </ul>
//             </div>

//             {/* Sitemap Column 4: Resources */}
//             <div className="lg:col-span-3 space-y-4">
//               <h4 className="font-display text-xs font-bold uppercase tracking-wider text-slate-400">
//                 Resources
//               </h4>
//               <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
//                 <li><a href="#hero-section" className="hover:text-[#f25c27] transition-colors text-left">Become a designer</a></li>
//                 <li><button onClick={() => handleScroll('testimonials-section')} className="hover:text-[#f25c27] transition-colors cursor-pointer text-left">Blog</button></li>
//                 <li><span className="text-slate-400 cursor-not-allowed">Design without borders</span></li>
//                 <li><span className="text-slate-400 cursor-not-allowed">99awards</span></li>
//                 <li><span className="text-slate-400 cursor-not-allowed">Affiliates</span></li>
//               </ul>
//             </div>

//           </div>

//           {/* All Rights Reserved & Fine print */}
//           <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
//             <span className="text-[11px] font-mono text-slate-400 tracking-wider">
//               ALL RIGHTS RESERVED 2026. BRANDBUZZ INC.
//             </span>
            
//             <div className="flex gap-4 text-[11px] font-semibold text-slate-400">
//               <span className="hover:text-[#f25c27] transition-colors cursor-pointer">Privacy Policy</span>
//               <span>&middot;</span>
//               <span className="hover:text-[#f25c27] transition-colors cursor-pointer">Terms of Service</span>
//             </div>
//           </div>

//         </div>
//       </footer>

//       {/* 9. SERVICE DETAIL MODAL DYNAMIC SLIDE-OVER */}
//       {/*<ServiceDetailModal
//         service={selectedService}
//         onClose={() => setSelectedService(null)}
//         onBook={handleOpenContactWithService}
//       />*/}

//       {/* 10. MODAL LEAD CONSULTATION FORM */}
//       {/*<ContactModal
//         isOpen={isContactOpen}
//         onClose={() => setIsContactOpen(false)}
//         initialService={initialContactService}
//       />*/}

//     </div>
//   );
// }


/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Megaphone, 
  TrendingUp, 
  Sparkles, 
  ArrowDown, 
  ArrowRight, 
  Star, 
  Facebook, 
  Instagram, 
  Twitter, 
  Menu, 
  X, 
  Check, 
  Briefcase, 
  Quote, 
  Award, 
  ExternalLink 
} from 'lucide-react';
//import { SERVICES_DATA, STEPS_DATA, TESTIMONIALS_DATA } from '../data';
// import ContactModal from './ContactModal';
// import ServiceDetailModal from './ServiceDetailModal';
// import TestimonialSlider from './TestimonialSlider';
import StrategyProcessImg from "../assets/service-imgs/strategic-process-img.png"
import HeroImg from "../assets/service-imgs/hero-img.png"
import AgencyImg from "../assets/service-imgs/agency-img.png"
// Map icons dynamically
const iconMap = {
  Search: Search,
  Megaphone: Megaphone,
  TrendingUp: TrendingUp,
  Sparkles: Sparkles,
};

const STEPS_DATA = [
  {
    number: '01',
    title: 'Research & Analysis',
    description:
      'We analyze your business, competitors, and target audience to create effective strategies.',
  },
  {
    number: '02',
    title: 'Planning & Strategy',
    description:
      'Our experts build customized digital marketing plans aligned with your goals.',
  },
  {
    number: '03',
    title: 'Execution',
    description:
      'We launch optimized campaigns across multiple channels to maximize performance.',
  },
  {
    number: '04',
    title: 'Optimization & Growth',
    description:
      'Continuous monitoring and improvements ensure better engagement and ROI.',
  },
];

const SERVICES_DATA = [
  {
    id: 'se',
    iconName: 'Search',
    title: 'SEO Optimization',
    description:
      'Improve your search engine rankings with data-driven SEO strategies, technical audits, and optimized content campaigns.',
    bgColor: 'bg-orange-100',
    textColor: 'text-orange-500',
  },
  {
    id: 'marketing',
    iconName: 'Megaphone',
    title: 'Digital Marketing',
    description:
      'Run high-converting campaigns across social media, paid ads, and email funnels to accelerate customer acquisition.',
    bgColor: 'bg-amber-100',
    textColor: 'text-amber-500',
  },
  {
    id: 'analytics',
    iconName: 'TrendingUp',
    title: 'Growth Analytics',
    description:
      'Track performance metrics and customer behavior with advanced analytics dashboards and actionable insights.',
    bgColor: 'bg-emerald-100',
    textColor: 'text-emerald-500',
  },
  {
    id: 'branding',
    iconName: 'Sparkles',
    title: 'Brand Strategy',
    description:
      'Craft a memorable brand identity with compelling messaging, visual systems, and audience positioning.',
    bgColor: 'bg-indigo-100',
    textColor: 'text-indigo-500',
  },
];
export default function BrandBuzzLandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [initialContactService, setInitialContactService] = useState('Marketing');

  // Open contact form pre-filled with a specific service name
  const handleOpenContactWithService = (serviceName) => {
    setInitialContactService(serviceName);
    setIsContactOpen(true);
  };

  const handleScroll = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfbf9] text-slate-800 selection:bg-orange-100 selection:text-[#f25c27] font-sans antialiased">
      
      {/* 1. TOP NAVBAR */}
      

      {/* 2. HERO SECTION */}
      

      {/* 3. SERVICES SECTION */}
     

      {/* 4. SIMPLE SOLUTIONS SECTION (Steps layout) */}
      <section id="solutions-section" className="py-20 md:py-28 bg-[#fff5f0] relative overflow-hidden">
        
        {/* Soft layout patterns */}
        <div className="absolute top-10 right-20 w-32 h-32 rounded-full bg-orange-100/40 pointer-events-none blur-2xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-orange-100/40 pointer-events-none blur-3xl animate-pulse" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Side: 3D character armchair image */}
            <div className="lg:order-1 lg:col-span-5 flex justify-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative max-w-sm sm:max-w-md w-full"
              >
                <img
                  //src="/src/assets/images/armchair_character_1779706021995.png"
                  src={StrategyProcessImg}
                  alt="Relaxing Solution Illustration"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto drop-shadow-xl object-contain"
                />
              </motion.div>
            </div>

            {/* Right Side: Step Content list */}
            <div className="lg:order-2 lg:col-span-7 space-y-8">
              <div className="space-y-3 text-center lg:text-left">
                <span className="text-xs font-bold uppercase tracking-widest text-[#f25c27] bg-white px-3 py-1 rounded-full border border-orange-100 shadow-sm">
                  Strategic Process
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight">
                  Simple Solutions!
                </h2>
                <p className="text-neutral-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
                  We understand that no two businesses are alike. That's why we take the time to audit, define, and personalize your creative workflows.
                </p>
              </div>

              {/* Numbered layout lines */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                {STEPS_DATA.map((step) => (
                  <div 
                    key={step.number} 
                    id={`step-item-${step.number}`}
                    className="flex gap-4 p-4 rounded-2xl bg-white/70 backdrop-blur-sm shadow-sm border border-orange-50 hover:bg-white hover:shadow-md transition-all"
                  >
                    {/* Circle badge */}
                    <div className="h-10 w-10 rounded-full bg-[#f25c27] text-white font-display font-extrabold text-sm flex items-center justify-center shrink-0 shadow-md shadow-orange-500/20">
                      {step.number}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-slate-900 text-sm md:text-base">
                        {step.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Buttons CTA */}
              {/* <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <button
                  id="solutions-cta-started-btn"
                  onClick={() => setIsContactOpen(true)}
                  className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#f25c27] hover:bg-[#da4b18] text-white font-bold text-sm shadow-lg shadow-orange-500/15 cursor-pointer"
                >
                  Get Started
                </button>
                <button
                  id="solutions-cta-about-btn"
                  onClick={() => handleScroll('agency-section')}
                  className="w-full sm:w-auto px-7 py-3 rounded-full border border-orange-300 text-[#f25c27] hover:bg-white font-bold text-sm transition-colors cursor-pointer text-center"
                >
                  Read more
                </button>
              </div> */}

            </div>

          </div>
        </div>
      </section>

      {/* 5. OUR AGENCY SECTION */}
      <section id="agency-section" className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left side text explanation */}
            <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[#f25c27] bg-orange-50 px-3 py-1 rounded-full">
                Core Agency Goals
              </span>
              
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-indigo-950 tracking-tight leading-tight">
                Our Agency Inside
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                We believe in the absolute power of data. Our analytics-driven approach allows us to make clean, informed decisions that optimize your marketing efforts for verified maximum ROI. Let's translate your dormant product streams into actionable customer engagement flows.
              </p>

              <div className="space-y-3">
                <div id="agency-benefit-1" className="flex items-center gap-3 justify-center lg:justify-start">
                  <div className="h-6 w-6 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center">
                    <Check size={14} className="stroke-[3px]" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800">Laser Targeted Customer Segmentation</span>
                </div>

                <div id="agency-benefit-2" className="flex items-center gap-3 justify-center lg:justify-start">
                  <div className="h-6 w-6 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center">
                    <Check size={14} className="stroke-[3px]" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800">Advanced 365 Attribution Reporting</span>
                </div>

                <div id="agency-benefit-3" className="flex items-center gap-3 justify-center lg:justify-start">
                  <div className="h-6 w-6 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center">
                    <Check size={14} className="stroke-[3px]" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800">Highly Transparent Deliverables Layout</span>
                </div>
              </div>

              {/* <div className="pt-4">
                <button
                  id="read-more-agency-btn"
                  onClick={() => handleOpenContactWithService('Consultation')}
                  className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#f25c27] hover:bg-[#da4b18] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                >
                  Read more
                </button>
              </div> */}
            </div>

            {/* Right side illustration workspace stats */}
            <div className="lg:col-span-6 flex justify-center relative">
              {/* background design accent */}
              <div className="absolute inset-0 bg-indigo-50 rounded-full blur-3xl opacity-40 pointer-events-none" />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative max-w-sm sm:max-w-md w-full"
              >
                <img
                  //src="/src/assets/images/agency_analytics_1779706038759.png"
                  src={AgencyImg}
                  alt="Analytics dashboard agency illustration"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto "
                />
              </motion.div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. TESTIMONIALS SECTION ("What Clients Say!") */}
     

      {/* 7. READY TO GET STARTED BANNER */}
      {/* <section id="cta-banner-section" className="relative py-12 bg-gradient-to-r from-[#f25c27] to-amber-500 text-white overflow-hidden">
        
       
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 to-transparent pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h3 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">
              Ready to get started?
            </h3>
            <p className="text-orange-50 text-sm md:text-base font-normal">
              Book a live bespoke consultation with our strategists and grow.
            </p>
          </div>

          <button
            id="cta-bottom-btn"
            onClick={() => setIsContactOpen(true)}
            className="px-8 py-3.5 rounded-full border-2 border-white hover:bg-white hover:text-[#f25c27] font-bold text-sm md:text-base transition-all transform hover:-translate-y-0.5 shadow-lg shadow-black/10 cursor-pointer text-center"
          >
            Contact Us
          </button>
        </div>
      </section> */}

      {/* 8. FOOTER */}
     
      {/* 9. SERVICE DETAIL MODAL DYNAMIC SLIDE-OVER */}
      {/* <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBook={handleOpenContactWithService}
      /> */}

      {/* 10. MODAL LEAD CONSULTATION FORM */}
      {/* <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        initialService={initialContactService}
      /> */}

    </div>
  );
}
