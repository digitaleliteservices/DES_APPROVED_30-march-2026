
// import React, { useEffect, useState } from 'react';
// import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
// import { ArrowRight, Trophy, Heart, Monitor, LineChart, Coins, FileText } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import MagneticButton from './MagneticButton';

// const Hero = () => {
//   const navigate = useNavigate();
//   const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
//     }, 60000);
//     return () => clearInterval(timer);
//   }, []);

//   const { scrollYProgress } = useScroll();
//   const springConfig = { stiffness: 100, damping: 30 };
  
//   const yParallaxSlow = useTransform(scrollYProgress, [0, 1], [0, -80]);
//   const yParallaxFast = useTransform(scrollYProgress, [0, 1], [0, -200]);
//   const rotateParallax = useTransform(scrollYProgress, [0, 1], [0, 8]);
//   const circleScale = useSpring(useTransform(scrollYProgress, [0, 0.5], [1, 1.1]), springConfig);

//   const stencilBgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

//   const titleWords = "Find the best solution together.".split(" ");
//   const stencilImageUrl = "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2000";

//   const serviceNodes = [
//     { title: "Tech Development", icon: <Monitor size={20} /> },
//     { title: "Digital Marketing", icon: <LineChart size={20} /> },
//     { title: "Graphic Design", icon: <Coins size={20} /> },
//     { title: "Social Media Marketing", icon: <FileText size={20} /> }
//   ];

//   return (
//     <section className="relative min-h-screen flex items-center bg-[#FDFDFF] overflow-hidden pt-32 pb-24">
//       <div className="absolute top-[-5%] left-[-10%] w-[50%] h-[50%] bg-[#E0F7FA] blur-[140px] opacity-60 rounded-full animate-pulse-slow" />
//       <div className="absolute bottom-[5%] right-[-10%] w-[40%] h-[40%] bg-[#FFF3E0] blur-[120px] opacity-40 rounded-full" />

//       <div className="container mx-auto px-6 lg:px-16 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
//           <div className="lg:col-span-6 xl:col-span-5 flex flex-col items-start">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               className="mb-10"
//             >
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-[#2D3142] leading-[1.1] tracking-tight">
//                 {titleWords.map((word, i) => (
//                   <span key={i} className="relative inline-block mr-[0.3em] overflow-hidden py-1">
//                     <motion.span
//                       initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0, y: 20 }}
//                       animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1, y: 0 }}
//                       transition={{ duration: 1, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
//                       className="inline-block"
//                     >
//                       <motion.span 
//                         style={{ 
//                           backgroundImage: `url(${stencilImageUrl})`,
//                           backgroundPosition: 'center',
//                           backgroundSize: '250% auto',
//                           backgroundPositionY: stencilBgY,
//                         }}
//                         className="bg-clip-text text-transparent bg-fixed inline-block"
//                       >
//                         {word}
//                       </motion.span>
//                     </motion.span>
//                     <motion.div
//                       initial={{ left: '-5%' }}
//                       animate={{ left: '105%' }}
//                       transition={{ duration: 1, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
//                       className="absolute top-0 bottom-0 w-[1.5px] bg-[#FF7B54] z-10 opacity-50"
//                     />
//                   </span>
//                 ))}
//               </h1>
//             </motion.div>

//             <motion.p
//               initial={{ opacity: 0, y: 15 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.7 }}
//               className="text-lg text-[#7D8597] mb-12 max-w-lg leading-relaxed font-normal"
//             >
//               We specialize in architectural digital solutions that balance 
//               <span className="text-[#2D3142] font-medium italic"> performance </span> 
//               with aesthetic integrity.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 15 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.9 }}
//               className="flex items-center gap-10 mb-20"
//             >
//               <MagneticButton>
//                 <MagneticButton>
//                 <button
//                   onClick={() => navigate('/contact')}
//                   className="px-10 py-4 rounded-xl bg-gradient-to-r from-[#FF7B54] to-[#FFB26B] text-white font-bold shadow-lg active:scale-95"
//                 >
//                   Get Started
//                 </button>
//               </MagneticButton>
//               </MagneticButton>
//               <button  onClick={() => navigate('/about')} className="text-[#FF7B54] font-bold text-base hover:text-[#2D3142] transition-colors flex items-center gap-2 group">
//                 Learn More
//                 <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
//               </button>
//             </motion.div>

//             <div className="w-full">
//               <motion.p 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 1.2 }}
//                 className="text-[10px] font-bold text-[#2D3142] uppercase tracking-[0.4em] mb-8 opacity-60"
//               >
//                 Our Expertise
//               </motion.p>
//               <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
//                 {serviceNodes.map((service, i) => (
//                   <motion.div
//                     key={i}
//                     initial={{ opacity: 0, scale: 0.95, y: 10 }}
//                     animate={{ opacity: 1, scale: 1, y: 0 }}
//                     transition={{ delay: 1.3 + (i * 0.1) }}
//                     className="bg-[#89E0F0] rounded-[1.5rem] p-5 flex flex-col aspect-square justify-between group transition-all duration-300 cursor-pointer shadow-md hover:bg-[#2D3142] hover:-translate-y-2"
//                   >
//                     <div className="text-white group-hover:text-[#89E0F0] transition-colors">
//                       {service.icon}
//                     </div>
//                     <span className="text-[9px] font-bold text-white uppercase tracking-tight leading-tight">
//                       {service.title}
//                     </span>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="lg:col-span-6 xl:col-span-7 relative flex justify-center items-center py-10 lg:py-0">
//             <motion.div 
//               style={{ scale: circleScale }}
//               className="absolute w-[80%] aspect-square rounded-full border border-[#E0F7FA] z-0" 
//             />
//             <motion.div 
//               style={{ scale: circleScale }}
//               className="absolute w-[100%] aspect-square rounded-full border border-[#E0F7FA]/40 z-0" 
//             />
//             <motion.div 
//               initial={{ scale: 0, opacity: 0 }}
//               animate={{ scale: 1, opacity: 0.3 }}
//               transition={{ duration: 1.5, ease: "circOut" }}
//               className="absolute w-[70%] aspect-square rounded-full bg-[#89E0F0] z-0" 
//             />

//             <motion.div 
//               initial={{ opacity: 0, scale: 0.98, y: 40 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
//               className="relative z-10 w-[80%] max-w-[480px]"
//             >
//               <img 
//                 src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200" 
//                 alt="Consultant" 
//                 className="w-full h-auto object-cover rounded-full shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)]"
//               />
//             </motion.div>

//             <motion.div
//               style={{ y: yParallaxSlow, rotate: rotateParallax }}
//               className="absolute left-[0%] top-[25%] bg-white/95 backdrop-blur-md p-6 rounded-[2rem] shadow-xl z-20 flex items-center gap-5 border border-white"
//             >
//               <div className="w-12 h-12 bg-[#89E0F0] rounded-xl flex items-center justify-center text-white">
//                 <Trophy size={20} />
//               </div>
//               <div>
//                 <h4 className="text-xl font-bold text-[#2D3142]">35K+</h4>
//                 <p className="text-[9px] text-[#7D8597] font-bold uppercase tracking-[0.2em] leading-none mt-1">Cases Solved</p>
//               </div>
//             </motion.div>

//             <motion.div
//               style={{ y: yParallaxFast }}
//               className="absolute right-[5%] bottom-[15%] bg-white/95 backdrop-blur-md p-6 rounded-[2rem] shadow-xl z-20 flex flex-col items-center gap-4 border border-white"
//             >
//               <div className="w-10 h-10 bg-[#FF7B54] rounded-full flex items-center justify-center text-white">
//                 <Heart size={18} fill="currentColor" />
//               </div>
//               <div className="flex -space-x-3">
//                 {[1, 2, 3].map((i) => (
//                   <img 
//                     key={i}
//                     src={`https://i.pravatar.cc/100?img=${i + 15}`} 
//                     className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm" 
//                     alt="expert"
//                   />
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



import React, { useEffect, useState, useMemo, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ArrowRight, Trophy, Heart, Monitor, LineChart, Coins, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MagneticButton from './HeroMagneticButton';

const Hero = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Mouse tracking for interactive spotlight
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      mouseX.set(clientX);
      mouseY.set(clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const springConfig = { stiffness: 100, damping: 30 };
  const smoothScroll = useSpring(scrollYProgress, springConfig);
  
  // Adaptive Parallax
  const parallaxMultiplier = isMobile ? 0.4 : 1;
  const yParallaxSlow = useTransform(smoothScroll, [0, 1], [0, -60 * parallaxMultiplier]);
  const yParallaxFast = useTransform(smoothScroll, [0, 1], [0, -120 * parallaxMultiplier]);
  const rotateParallax = useTransform(smoothScroll, [0, 1], [0, 8 * parallaxMultiplier]);
  
  const circleScale = useSpring(useTransform(smoothScroll, [0, 0.5], [1, 1.1]), springConfig);
  const stencilBgY = useTransform(smoothScroll, [0, 1], ["0%", "30%"]);

  // Background Gradients
  const colorOrb1 = useTransform(smoothScroll, [0, 0.5, 1], ["rgba(137, 224, 240, 0.15)", "rgba(45, 49, 66, 0.15)", "rgba(15, 23, 42, 0.2)"]);
  const colorOrb2 = useTransform(smoothScroll, [0, 0.5, 1], ["rgba(255, 178, 107, 0.1)", "rgba(255, 123, 84, 0.12)", "rgba(45, 49, 66, 0.05)"]);
  
  const orb1XShift = useTransform(smoothScroll, [0, 1], ["-5%", "10%"]);
  const orb1YShift = useTransform(smoothScroll, [0, 1], ["-5%", "15%"]);

  // Lattice Evolution
  const latticeOpacity = useTransform(smoothScroll, [0, 0.5], [0.25, 0.12]);
  const latticeRotation = useTransform(smoothScroll, [0, 1], [0, 15]);

  const titleWords = "Find the best solution together.".split(" ");
  const stencilImageUrl = "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2000";

  const serviceNodes = [
    { title: "Tech Development", icon: <Monitor size={20} /> },
    { title: "Digital Marketing", icon: <LineChart size={20} /> },
    { title: "Graphic Design", icon: <Coins size={20} /> },
    { title: "Social Media", icon: <FileText size={20} /> }
  ];

  // Technical markings that populate the background
  const markings = useMemo(() => Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    x: Math.random() * 90 + 5,
    y: Math.random() * 90 + 5,
    speed: Math.random() * 60 + 20,
    type: i % 3 === 0 ? 'crosshair' : i % 3 === 1 ? 'bracket' : 'node',
    scale: Math.random() * 0.5 + 0.5
  })), []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center bg-[#FDFDFF] overflow-hidden pt-24 pb-12 md:pt-32 md:pb-24"
    >
      {/* 1. Base Layer: Precision Dot Grid */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-20"
        style={{ backgroundImage: `radial-gradient(#cbd5e1 0.7px, transparent 0.7px)`, backgroundSize: '40px 40px' }}
      />

      {/* 2. Layer: Evolving Structural Lattice */}
      <motion.svg style={{ rotate: latticeRotation, opacity: latticeOpacity }} className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <defs>
          <pattern id="lattice" width="240" height="240" patternUnits="userSpaceOnUse">
            <motion.path 
              d="M 0 120 L 120 0 L 240 120 L 120 240 Z" 
              fill="none" 
              stroke="#cbd5e1" 
              strokeWidth="0.5" 
              animate={{ 
                d: [
                  "M 0 120 L 120 0 L 240 120 L 120 240 Z", 
                  "M 15 135 L 105 15 L 225 105 L 135 225 Z", 
                  "M 0 120 L 120 0 L 240 120 L 120 240 Z"
                ] 
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.circle 
              cx="120" cy="120" r="2" 
              fill="#89E0F0" 
              animate={{ r: [1.5, 3, 1.5], opacity: [0.2, 0.5, 0.2] }} 
              transition={{ duration: 4, repeat: Infinity }}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#lattice)" />
      </motion.svg>

      {/* 3. Layer: Fluid Ambient Orbs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div style={{ backgroundColor: colorOrb1, left: orb1XShift, top: orb1YShift }} className="absolute w-[85vw] h-[85vw] blur-[100px] md:blur-[140px] rounded-full" />
        <motion.div style={{ backgroundColor: colorOrb2, right: "-10%", bottom: "-10%" }} className="absolute w-[70vw] h-[70vw] blur-[120px] md:blur-[160px] rounded-full" />
      </div>

      {/* 4. Layer: Interactive Spotlight (Desktop Only) */}
      <motion.div className="absolute inset-0 pointer-events-none z-0 opacity-20 hidden md:block"
        style={{ background: useTransform([mouseX, mouseY], ([x, y]) => `radial-gradient(700px circle at ${x}px ${y}px, rgba(137, 224, 240, 0.25), transparent 75%)`) }}
      />

      {/* 5. Layer: Technical Markings (Digital Sophistication) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {markings.map((m) => (
          <motion.div
            key={m.id}
            style={{ 
              left: `${m.x}%`, 
              top: `${m.y}%`, 
              scale: m.scale,
              y: useTransform(smoothScroll, [0, 1], [0, -m.speed * parallaxMultiplier])
            }}
            className="absolute opacity-[0.08]"
          >
            {m.type === 'crosshair' && (
              <div className="relative w-12 h-12 flex items-center justify-center">
                <div className="absolute w-full h-[0.5px] bg-slate-600" />
                <div className="absolute h-full w-[0.5px] bg-slate-600" />
                <div className="w-2 h-2 rounded-full border border-slate-600" />
              </div>
            )}
            {m.type === 'bracket' && (
              <div className="w-8 h-8 border-l border-t border-slate-600 rounded-tl-lg" />
            )}
            {m.type === 'node' && (
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                <div className="h-[0.5px] w-8 bg-slate-300" />
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col items-start order-2 lg:order-1 mt-8 lg:mt-0">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 backdrop-blur-md border border-slate-200 mb-5 shadow-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FF7B54] animate-pulse" />
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Architecture of Innovation</span>
              </div>
              
              <h1 className="text-4xl md:text-4xl lg:text-6xl font-display font-bold text-[#0f172a] leading-tight md:leading-[1.05] tracking-tight">
                {titleWords.map((word, i) => (
                  <span key={i} className="relative inline-block mr-[0.2em] overflow-hidden py-0.5">
                    <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.05 * i, ease: [0.16, 1, 0.3, 1] }} className="inline-block">
                      <motion.span 
                        style={{ backgroundImage: `url(${stencilImageUrl})`, backgroundPosition: 'center', backgroundSize: '250% auto', backgroundPositionY: stencilBgY }}
                        className="bg-clip-text text-transparent bg-fixed inline-block"
                      >{word}</motion.span>
                    </motion.span>
                  </span>
                ))}
              </h1>
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="text-base md:text-xl text-slate-500 mb-8 max-w-lg leading-relaxed font-light">
              Designing <span className="text-[#0f172a] font-medium underline decoration-[#89E0F0]/50 decoration-2 underline-offset-4">resilient digital ecosystems</span> where technical performance meets architectural minimalism.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="flex flex-wrap items-center gap-4 md:gap-8 mb-10 lg:mb-16">
              <MagneticButton strength={isMobile ? 15 : 35}>
                <button onClick={() => navigate('/contact')} className="px-8 md:px-12 py-4 md:py-5 rounded-xl md:rounded-2xl bg-[#0f172a] text-white font-bold shadow-xl active:scale-95 transition-all hover:bg-slate-800">
                  Begin Journey
                </button>
              </MagneticButton>
              <button onClick={() => navigate('/about')} className="text-slate-600 font-bold text-base md:text-lg hover:text-[#0f172a] transition-colors flex items-center gap-2 group">
                View Manifesto
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Micro-expertise Grid */}
            <div className="w-full">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="flex items-center gap-3 mb-4">
                <div className="h-[1px] w-8 bg-[#FF7B54]" />
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Capabilities</p>
              </motion.div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
                {serviceNodes.map((service, i) => (
                  <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.1 + (i * 0.05) }}
                    className="bg-white/70 backdrop-blur-md rounded-xl p-1 md:p-2 flex flex-col aspect-square justify-around flex items-center group transition-all duration-300 border border-white/50 hover:bg-[#0f172a] hover:shadow-lg"
                  >
                    {/* <div className="p-1.5 sm:size-12 rounded-lg bg-gray-100  text-slate-400 group-hover:bg-[#89E0F0]/20 group-hover:text-[#89E0F0] transition-all">{service.icon}</div> */}
                    <div className="p-1.5 sm:w-13 rounded-lg bg-gray-100 text-slate-400 group-hover:bg-[#89E0F0]/20 group-hover:text-[#89E0F0] transition-all sm:[&>svg]:w-12 md:[&>svg]:w-5  lg:[&>svg]:w-5 sm:[&>svg]:h-12 md:[&>svg]:h-5  lg:[&>svg]:h-5">
                      {service.icon}
                    </div>
                    <span className="text-[13px] md:text-[10px] font-bold text-[#1e293b] group-hover:text-white uppercase tracking-tight leading-tight">{service.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Key Visual & Interactive Elements */}
          <div className="lg:col-span-6 xl:col-span-7 relative flex justify-center items-center py-4 lg:py-0 order-1 lg:order-2">
            <motion.div style={{ scale: circleScale }} className="absolute w-[95%] md:w-[85%] aspect-square rounded-[2rem] md:rounded-[4rem] border border-slate-200/50 z-0 rotate-12" />
            <motion.div style={{ scale: circleScale }} className="absolute w-[100%] aspect-square rounded-full border border-slate-200/20 border-dashed z-0" />
            
            <div className="absolute w-[80%] aspect-square rounded-full bg-[#89E0F0]/10 blur-[80px] z-0" />

            <motion.div initial={{ opacity: 0, scale: 0.95, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-[440px] md:max-w-[500px] p-2 md:p-3   rounded-full "
            >
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200" alt="Consultant Expert" className="w-full h-auto object-cover rounded-full shadow-inner" />
              
              {/* Data & Trust Indicators */}
              <motion.div
                style={{ y: yParallaxSlow, rotate: rotateParallax }}
                className="absolute left-[-2%] md:left-[-15%] top-[15%] md:top-1/4 bg-white/95 backdrop-blur-xl p-3 md:p-6 rounded-2xl md:rounded-[3rem] shadow-xl z-20 flex items-center gap-3 md:gap-5 border border-white scale-75 md:scale-100 origin-right"
              >
                <div className="w-10 h-10 md:w-14 md:h-14 bg-[#0f172a] rounded-xl md:rounded-2xl flex items-center justify-center text-white">
                  <Trophy size={20} className="md:w-7 md:h-7" />
                </div>
                <div className="pr-1 md:pr-0">
                  <h4 className="text-xl md:text-3xl font-bold text-[#0f172a] leading-none">35K+</h4>
                  <p className="text-[7px] md:text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Deployments</p>
                </div>
              </motion.div>

              <motion.div
                style={{ y: yParallaxFast }}
                className="absolute right-[-2%] md:right-[-10%] bottom-[10%] md:bottom-1/4 bg-white/95 backdrop-blur-xl p-3 md:p-6 rounded-2xl md:rounded-[3rem] shadow-xl z-20 flex flex-col items-center gap-3 md:gap-5 border border-white scale-75 md:scale-100 origin-left"
              >
                <div className="w-8 h-8 md:w-12 md:h-12 bg-[#FF7B54] rounded-full flex items-center justify-center text-white">
                  <Heart size={16} className="md:w-6 md:h-6" fill="currentColor" />
                </div>
                <div className="flex -space-x-2 md:-space-x-4">
                  {[1, 2, 3].map((i) => (
                    <img key={i} src={`https://i.pravatar.cc/100?img=${i + 22}`} className="w-7 h-7 md:w-10 md:h-10 rounded-full border-2 border-white object-cover" alt="user" />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
