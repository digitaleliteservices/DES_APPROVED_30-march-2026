
// import React from 'react';
// import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import MotionWrapper from './MotionWrapper';
// import {
//   CheckCircle2,
//   Lightbulb,
//   ShieldCheck,
//   Trophy,
//   Users2,
//   HeartHandshake,
//   Zap,
//   Target,
//   Rocket,
//   ArrowRight,
//   Megaphone,
//   Palette,
//   Code
// } from 'lucide-react';

// const CORE_VALUES = [
//   {
//     title: "Innovation",
//     desc: "Embracing creativity and technology to deliver cutting-edge digital solutions.",
//     icon: <Lightbulb className="w-5 h-5" />
//   },
//   {
//     title: "Integrity",
//     desc: "Maintaining transparency and ethical practices in every partnership.",
//     icon: <ShieldCheck className="w-5 h-5" />
//   },
//   {
//     title: "Excellence",
//     desc: "Striving for the highest quality to ensure measurable results.",
//     icon: <Trophy className="w-5 h-5" />
//   },
//   {
//     title: "Collaboration",
//     desc: "Working as an extension of your team to achieve shared goals.",
//     icon: <Users2 className="w-5 h-5" />
//   },
//   {
//     title: "Client-Centric",
//     desc: "Placing your business needs at the heart of our strategy.",
//     icon: <HeartHandshake className="w-5 h-5" />
//   },
//   {
//     title: "Adaptability",
//     desc: "Staying agile in an ever-evolving digital landscape.",
//     icon: <Zap className="w-5 h-5" />
//   }
// ];

// const About = () => {
//   const navigate = useNavigate();
//   const containerRef = React.useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"]
//   });

//   const springConfig = { mass: 1, stiffness: 60, damping: 20 };
//   const contentY = useSpring(useTransform(scrollYProgress, [0, 1], [80, -80]), springConfig);

//   return (
//     <div ref={containerRef} className="bg-white">
//       <section id="about" className="pt-32 pb-20 bg-zinc-50 overflow-hidden relative">
//         <div className="container mx-auto px-6 relative z-10">
//           <div className="max-w-4xl mb-24">
//             <MotionWrapper variant="fade">
//               <h2 className="text-gold-600 font-bold uppercase tracking-widest text-[10px] mb-6">Our Philosophy</h2>
//               <h3 className="text-3xl md:text-5xl font-display font-bold text-zinc-900 mb-8 leading-tight tracking-tight">
//                 Building meaningful digital experiences with a relentless focus on <span className="text-gold-600">design and performance.</span>
//               </h3>
//               <p className="text-lg md:text-xl text-zinc-500 leading-relaxed font-medium max-w-2xl">
//                 We believe that great digital products are born at the intersection of strategic thinking and artisanal craft.
//               </p>
//             </MotionWrapper>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

//             <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl border-8 border-white bg-zinc-200">
//               <img
//                 src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
//                 alt="Our Team"
//                 className="w-full h-auto grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
//               />
//             </div>
//             <motion.div style={{ y: contentY }} className="relative">
//               <MotionWrapper variant="fade" direction="right">
//                 <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
//                   Digital Elite Service is a results-driven agency specializing in <span className="text-zinc-900 font-semibold border-b border-gold-300">Digital Marketing, Graphic Design, and Web Development</span>.
//                 </p>
//                 <p className="text-zinc-500 mb-10 leading-relaxed font-medium">
//                   We bridge the gap between complex technology and human connection, delivering solutions that are as intuitive as they are powerful.
//                 </p>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   {["Brand Strategy", "Content Growth", "Full-Stack Dev", "UI/UX Design"].map((point, idx) => (
//                     <div key={idx} className="flex items-center gap-3 text-zinc-800 font-bold text-xs uppercase tracking-wider">
//                       <CheckCircle2 size={14} className="text-gold-500" />
//                       {point}
//                     </div>
//                   ))}
//                 </div>
//               </MotionWrapper>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* <section className="py-24 relative bg-white">
//         <div className="container mx-auto px-6">
//           <div className="flex flex-col md:flex-row gap-10">
//             <MotionWrapper className="flex-1 bg-zinc-50 p-10 md:p-14 rounded-[3rem] border border-zinc-100">
//               <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6">
//                 <Target className="text-gold-600" size={24} />
//               </div>
//               <h4 className="text-2xl font-bold text-zinc-900 mb-4 tracking-tight">Our Vision</h4>
//               <p className="text-zinc-500 text-base leading-relaxed font-medium">
//                 To be the catalyst for digital transformation, helping brands reach their full potential through innovation and artistic integrity.
//               </p>
//             </MotionWrapper>

//             <MotionWrapper delay={0.2} className="flex-1 bg-zinc-900 p-10 md:p-14 rounded-[3rem] text-white">
//               <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
//                 <Rocket className="text-gold-400" size={24} />
//               </div>
//               <h4 className="text-2xl font-bold text-white mb-4 tracking-tight">Our Mission</h4>
//               <p className="text-zinc-400 text-base leading-relaxed font-medium">
//                 To empower businesses with tailor-made digital solutions that spark engagement, improve visibility, and create long-term value.
//               </p>
//             </MotionWrapper>
//           </div>
//         </div>
//       </section> */}
//       <section className="py-24 relative bg-white">
//   <div className="container mx-auto px-6">
//     <div className="flex flex-col md:flex-row gap-10">

//       {/* Vision Card */}
//       <MotionWrapper
//         className="flex-1 bg-zinc-50 p-10 md:p-14 rounded-[3rem] border border-zinc-100 
//         transition-all duration-500 hover:bg-zinc-900 hover:text-white group cursor-pointer"
//       >
//         <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 
//           transition-all duration-500 group-hover:bg-white/10">
//           <Target className="text-gold-600 group-hover:text-gold-400" size={24} />
//         </div>

//         <h4 className="text-2xl font-bold mb-4 tracking-tight">
//           Our Vision
//         </h4>

//         <p className="text-zinc-500 text-base leading-relaxed font-medium 
//           group-hover:text-zinc-300 transition-all duration-500">
//           To be the catalyst for digital transformation, helping brands reach their full potential 
//           through innovation and artistic integrity.
//         </p>
//       </MotionWrapper>


//       {/* Mission Card */}
//       <MotionWrapper
//         delay={0.2}
//         className="flex-1 bg-zinc-900 p-10 md:p-14 rounded-[3rem] text-white 
//         transition-all duration-500 hover:bg-gold-600 group cursor-pointer"
//       >
//         <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 
//           transition-all duration-500 group-hover:bg-white">
//           <Rocket className="text-gold-400 group-hover:text-zinc-900" size={24} />
//         </div>

//         <h4 className="text-2xl font-bold mb-4 tracking-tight">
//           Our Mission
//         </h4>

//         <p className="text-zinc-400 text-base leading-relaxed font-medium 
//           group-hover:text-white transition-all duration-500">
//           To empower businesses with tailor-made digital solutions that spark engagement, 
//           improve visibility, and create long-term value.
//         </p>
//       </MotionWrapper>

//     </div>
//   </div>
// </section>

//       {/* NEW SECTION: Discover With Us */}
//       {/* <section className="py-32 bg-white overflow-hidden">
//         <div className="container mx-auto px-6">
//           <div className="max-w-4xl mx-auto text-center mb-24">
//             <MotionWrapper variant="fade">
//               <h2 className="text-gold-600 font-black uppercase tracking-[0.4em] text-[10px] mb-6 flex items-center justify-center gap-3">
//                 <span className="text-xl">🌟</span> Discover With Us
//               </h2>
//               <h3 className="text-4xl md:text-6xl font-display font-black text-zinc-900 mb-8  tracking-tighter uppercase leading-tight">
//                 What We
//                 <span className="relative inline-block px-8">
//                   <span className="text-gold-500 ">Offer {" "}</span>
//                   <svg
//                     viewBox="0 0 286 73"
//                     fill="none"
//                     className="absolute -left-1 -right-4 -top-2 bottom-0 translate-y-2 pointer-events-none w-full h-full"
//                   >
//                     <motion.path
//                       initial={{ pathLength: 0 }}
//                       whileInView={{ pathLength: 1 }}
//                       viewport={{ once: false }}
//                       transition={{
//                         duration: 1.25,
//                         delay: 0.5,
//                         ease: "easeInOut",
//                       }}
//                       d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
//                       stroke="#154d04"
//                       strokeWidth="3"
//                     />
//                   </svg>
//                 </span>
//               </h3>
//               <p className="text-xl text-zinc-500 leading-relaxed font-medium">
//                 Tailored services that combine creativity, strategy and engineering — built to move your brand forward.
//               </p>
//             </MotionWrapper>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
//             <MotionWrapper variant="fade" delay={0.1}>
//               <div className="group relative bg-zinc-50 rounded-[3rem] p-12 h-full flex flex-col border border-zinc-100 hover:border-gold-500 transition-all duration-500 hover:shadow-2xl hover:shadow-gold-500/10">
//                 <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-gold-500 mb-10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-sm">
//                   <Megaphone size={32} />
//                 </div>
//                 <h4 className="text-2xl font-display font-black text-zinc-900 uppercase tracking-tighter mb-4">
//                   Digital Marketing <br/><span className="text-gold-500">Excellence</span>
//                 </h4>
//                 <p className="text-zinc-500 font-medium leading-relaxed mb-10">
//                   We craft strategies that amplify visibility, engage audiences, and drive measurable growth.
//                 </p>
//                 <button 
//                   onClick={() => navigate('/contact')}
//                   className="mt-auto flex items-center gap-3 text-[10px] font-black text-zinc-900 uppercase tracking-[0.3em] group/btn hover:text-gold-600 transition-colors"
//                 >
//                   Let's talk 
//                   <ArrowRight size={14} className="text-gold-500 group-hover/btn:translate-x-2 transition-transform" />
//                 </button>
//               </div>
//             </MotionWrapper>

          
//             <MotionWrapper variant="fade" delay={0.2}>
//               <div className="group relative bg-zinc-950 rounded-[3rem] p-12 h-full flex flex-col border border-white/5 hover:border-gold-500 transition-all duration-500 hover:shadow-2xl hover:shadow-gold-500/20">
//                 <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-gold-500 mb-10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
//                   <Palette size={32} />
//                 </div>
//                 <h4 className="text-2xl font-display font-black text-white uppercase tracking-tighter mb-4">
//                   Creative  Design <br/><span className="text-gold-500">& Branding</span>
//                 </h4>
//                 <p className="text-zinc-400 font-medium leading-relaxed mb-10">
//                   From graphics to complete brand identities, we design with impact — ensuring your message is memorable.
//                 </p>
//                 <button 
//                   onClick={() => navigate('/contact')}
//                   className="mt-auto flex items-center gap-3 text-[10px] font-black text-white uppercase tracking-[0.3em] group/btn hover:text-gold-600 transition-colors"
//                 >
//                   Let's talk 
//                   <ArrowRight size={14} className="text-gold-500 group-hover/btn:translate-x-2 transition-transform" />
//                 </button>
//               </div>
//             </MotionWrapper>

           
//             <MotionWrapper variant="fade" delay={0.3}>
//               <div className="group relative bg-zinc-50 rounded-[3rem] p-12 h-full flex flex-col border border-zinc-100 hover:border-gold-500 transition-all duration-500 hover:shadow-2xl hover:shadow-gold-500/10">
//                 <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-gold-500 mb-10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-sm">
//                   <Code size={32} />
//                 </div>
//                 <h4 className="text-2xl font-display font-black text-zinc-900 uppercase tracking-tighter mb-4">
//                   Custom Web <br/><span className="text-gold-500">Development</span>
//                 </h4>
//                 <p className="text-zinc-500 font-medium leading-relaxed mb-10">
//                   We build tailored web solutions that transform ideas into powerful digital experiences.
//                 </p>
//                 <button 
//                   onClick={() => navigate('/contact')}
//                   className="mt-auto flex items-center gap-3 text-[10px] font-black text-zinc-900 uppercase tracking-[0.3em] group/btn hover:text-gold-600 transition-colors"
//                 >
//                   Let's talk 
//                   <ArrowRight size={14} className="text-gold-500 group-hover/btn:translate-x-2 transition-transform" />
//                 </button>
//               </div>
//             </MotionWrapper>
//           </div>
//         </div>
//       </section> */}

//       <section className="py-24 bg-zinc-50">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-16">
//             <MotionWrapper>
//               <h5 className="text-gold-600 font-bold uppercase tracking-widest text-[10px] mb-4">Integrity in Action</h5>
//               <h3 className="text-3xl md:text-4xl font-display font-bold text-zinc-900 tracking-tight">Our Core Values</h3>
//             </MotionWrapper>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {CORE_VALUES.map((value, idx) => (
//               <MotionWrapper key={idx} delay={idx * 0.05} variant="fade">
//                 <div className="bg-white p-10 rounded-[2.5rem] border border-zinc-100 hover:border-gold-200 transition-all hover:shadow-lg group h-full">
//                   <div className="w-12 h-12 bg-zinc-50 rounded-xl flex items-center justify-center text-zinc-400 group-hover:bg-gold-500 group-hover:text-white transition-all mb-6">
//                     {value.icon}
//                   </div>
//                   <h4 className="text-lg font-bold text-zinc-900 mb-3">{value.title}</h4>
//                   <p className="text-zinc-500 text-sm leading-relaxed font-medium">{value.desc}</p>
//                 </div>
//               </MotionWrapper>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;


// import React from 'react';
// import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import MotionWrapper from './MotionWrapper';
// import {
//   CheckCircle2,
//   Lightbulb,
//   ShieldCheck,
//   Trophy,
//   Users2,
//   HeartHandshake,
//   Zap,
//   Target,
//   Rocket,
//   ArrowRight,
//   Megaphone,
//   Palette,
//   Code
// } from 'lucide-react';

// // Register GSAP plugins
// gsap.registerPlugin(useGSAP, ScrollTrigger);

// const CORE_VALUES = [
//   {
//     title: "Innovation",
//     desc: "Embracing creativity and technology to deliver cutting-edge digital solutions.",
//     icon: <Lightbulb className="w-5 h-5" />,
//     color: "#FFD700",
//     bgColor: "from-yellow-50 to-amber-50"
//   },
//   {
//     title: "Integrity",
//     desc: "Maintaining transparency and ethical practices in every partnership.",
//     icon: <ShieldCheck className="w-5 h-5" />,
//     color: "#4CAF50",
//     bgColor: "from-green-50 to-emerald-50"
//   },
//   {
//     title: "Excellence",
//     desc: "Striving for the highest quality to ensure measurable results.",
//     icon: <Trophy className="w-5 h-5" />,
//     color: "#FF6B6B",
//     bgColor: "from-red-50 to-orange-50"
//   },
//   {
//     title: "Collaboration",
//     desc: "Working as an extension of your team to achieve shared goals.",
//     icon: <Users2 className="w-5 h-5" />,
//     color: "#6C5CE7",
//     bgColor: "from-indigo-50 to-purple-50"
//   },
//   {
//     title: "Client-Centric",
//     desc: "Placing your business needs at the heart of our strategy.",
//     icon: <HeartHandshake className="w-5 h-5" />,
//     color: "#FF85B3",
//     bgColor: "from-pink-50 to-rose-50"
//   },
//   {
//     title: "Adaptability",
//     desc: "Staying agile in an ever-evolving digital landscape.",
//     icon: <Zap className="w-5 h-5" />,
//     color: "#FFA500",
//     bgColor: "from-orange-50 to-yellow-50"
//   }
// ];

// const About = () => {
//   const navigate = useNavigate();
//   const containerRef = React.useRef(null);
//   const cardsContainerRef = React.useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"]
//   });

//   const springConfig = { mass: 1, stiffness: 60, damping: 20 };
//   const contentY = useSpring(useTransform(scrollYProgress, [0, 1], [80, -80]), springConfig);

//   // GSAP Animations for Core Values
//   useGSAP(() => {
//     // Floating animation for cards
//     gsap.fromTo('.core-value-card',
//       {
//         y: 50,
//         opacity: 0,
//         scale: 0.9,
//         rotation: -5
//       },
//       {
//         y: 0,
//         opacity: 1,
//         scale: 1,
//         rotation: 0,
//         duration: 1,
//         stagger: 0.1,
//         ease: "back.out(1.2)",
//         scrollTrigger: {
//           trigger: '.core-values-grid',
//           start: "top 80%",
//           end: "bottom 20%",
//           toggleActions: "play none none reverse"
//         }
//       }
//     );

//     // Continuous floating animation
//     gsap.to('.core-value-card', {
//       y: -8,
//       duration: 2,
//       stagger: 0.15,
//       ease: "sine.inOut",
//       repeat: -1,
//       yoyo: true,
//     });

//     // Icon pulse animation
//     gsap.to('.core-value-icon', {
//       scale: 1.1,
//       duration: 1.5,
//       stagger: 0.2,
//       ease: "sine.inOut",
//       repeat: -1,
//       yoyo: true,
//     });

//     // Hover animations for each card
//     const cards = document.querySelectorAll('.core-value-card');
//     cards.forEach((card) => {
//       const icon = card.querySelector('.core-value-icon');
//       const title = card.querySelector('.core-value-title');
//       const desc = card.querySelector('.core-value-desc');

//       card.addEventListener('mouseenter', () => {
//         gsap.to(card, {
//           y: -20,
//           scale: 1.05,
//           boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
//           borderColor: '#FFD700',
//           duration: 0.3,
//           ease: "power2.out"
//         });
        
//         gsap.to(icon, {
//           rotation: 360,
//           scale: 1.2,
//           backgroundColor: '#FFD700',
//           color: '#ffffff',
//           duration: 0.5,
//           ease: "back.out(1.7)"
//         });

//         gsap.to(title, {
//           color: '#FFD700',
//           x: 5,
//           duration: 0.3,
//           ease: "power2.out"
//         });

//         gsap.to(desc, {
//           y: -3,
//           duration: 0.3,
//           ease: "power2.out"
//         });
//       });

//       card.addEventListener('mouseleave', () => {
//         gsap.to(card, {
//           y: -8,
//           scale: 1,
//           boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
//           borderColor: '#e4e4e7',
//           duration: 0.3,
//           ease: "power2.out"
//         });
        
//         gsap.to(icon, {
//           rotation: 0,
//           scale: 1,
//           backgroundColor: '#fafafa',
//           color: '#71717a',
//           duration: 0.3,
//           ease: "power2.out"
//         });

//         gsap.to(title, {
//           color: '#18181b',
//           x: 0,
//           duration: 0.3,
//           ease: "power2.out"
//         });

//         gsap.to(desc, {
//           y: 0,
//           duration: 0.3,
//           ease: "power2.out"
//         });
//       });
//     });

//     // Particle effect for cards on hover
//     cards.forEach((card) => {
//       let particleTimeline;
      
//       card.addEventListener('mouseenter', (e) => {
//         if (particleTimeline) particleTimeline.kill();
        
//         particleTimeline = gsap.timeline();
        
//         for (let i = 0; i < 8; i++) {
//           const particle = document.createElement('div');
//           particle.className = 'particle';
//           particle.style.cssText = `
//             position: absolute;
//             width: 4px;
//             height: 4px;
//             background: #FFD700;
//             border-radius: 50%;
//             pointer-events: none;
//             z-index: 10;
//             left: ${e.clientX - card.getBoundingClientRect().left}px;
//             top: ${e.clientY - card.getBoundingClientRect().top}px;
//           `;
//           card.style.position = 'relative';
//           card.appendChild(particle);

//           particleTimeline.to(particle, {
//             x: gsap.utils.random(-100, 100),
//             y: gsap.utils.random(-100, 100),
//             opacity: 0,
//             scale: gsap.utils.random(0.5, 2),
//             duration: gsap.utils.random(0.6, 1.2),
//             ease: "power2.out",
//             onComplete: () => particle.remove()
//           }, i * 0.05);
//         }
//       });
//     });

//     // Animated border effect on scroll
//     gsap.to('.core-values-title', {
//       backgroundPosition: '200% 0',
//       duration: 3,
//       repeat: -1,
//       ease: "linear"
//     });

//   }, { scope: containerRef });

//   return (
//     <div ref={containerRef} className="bg-white">
//       <section id="about" className="pt-32 pb-20 bg-zinc-50 overflow-hidden relative">
//         <div className="container mx-auto px-6 relative z-10">
//           <div className="max-w-4xl mb-24">
//             <MotionWrapper variant="fade">
//               <h2 className="text-gold-600 font-bold uppercase tracking-widest text-[10px] mb-6">Our Philosophy</h2>
//               <h3 className="text-3xl md:text-5xl font-display font-bold text-zinc-900 mb-8 leading-tight tracking-tight">
//                 Building meaningful digital experiences with a relentless focus on <span className="text-gold-600">design and performance.</span>
//               </h3>
//               <p className="text-lg md:text-xl text-zinc-500 leading-relaxed font-medium max-w-2xl">
//                 We believe that great digital products are born at the intersection of strategic thinking and artisanal craft.
//               </p>
//             </MotionWrapper>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

//             <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl border-8 border-white bg-zinc-200">
//               <img
//                 src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
//                 alt="Our Team"
//                 className="w-full h-auto grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
//               />
//             </div>
//             <motion.div style={{ y: contentY }} className="relative">
//               <MotionWrapper variant="fade" direction="right">
//                 <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
//                   Digital Elite Service is a results-driven agency specializing in <span className="text-zinc-900 font-semibold border-b border-gold-300">Digital Marketing, Graphic Design, and Web Development</span>.
//                 </p>
//                 <p className="text-zinc-500 mb-10 leading-relaxed font-medium">
//                   We bridge the gap between complex technology and human connection, delivering solutions that are as intuitive as they are powerful.
//                 </p>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   {["Brand Strategy", "Content Growth", "Full-Stack Dev", "UI/UX Design"].map((point, idx) => (
//                     <div key={idx} className="flex items-center gap-3 text-zinc-800 font-bold text-xs uppercase tracking-wider">
//                       <CheckCircle2 size={14} className="text-gold-500" />
//                       {point}
//                     </div>
//                   ))}
//                 </div>
//               </MotionWrapper>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       <section className="py-24 relative bg-white">
//         <div className="container mx-auto px-6">
//           <div className="flex flex-col md:flex-row gap-10">
//             <MotionWrapper
//               className="flex-1 bg-zinc-50 p-10 md:p-14 rounded-[3rem] border border-zinc-100 
//               transition-all duration-500 hover:bg-zinc-900 hover:text-white group cursor-pointer"
//             >
//               <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 
//                 transition-all duration-500 group-hover:bg-white/10">
//                 <Target className="text-gold-600 group-hover:text-gold-400" size={24} />
//               </div>
//               <h4 className="text-2xl font-bold mb-4 tracking-tight">
//                 Our Vision
//               </h4>
//               <p className="text-zinc-500 text-base leading-relaxed font-medium 
//                 group-hover:text-zinc-300 transition-all duration-500">
//                 To be the catalyst for digital transformation, helping brands reach their full potential 
//                 through innovation and artistic integrity.
//               </p>
//             </MotionWrapper>

//             <MotionWrapper
//               delay={0.2}
//               className="flex-1 bg-zinc-900 p-10 md:p-14 rounded-[3rem] text-white 
//               transition-all duration-500 hover:bg-gold-600 group cursor-pointer"
//             >
//               <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 
//                 transition-all duration-500 group-hover:bg-white">
//                 <Rocket className="text-gold-400 group-hover:text-zinc-900" size={24} />
//               </div>
//               <h4 className="text-2xl font-bold mb-4 tracking-tight">
//                 Our Mission
//               </h4>
//               <p className="text-zinc-400 text-base leading-relaxed font-medium 
//                 group-hover:text-white transition-all duration-500">
//                 To empower businesses with tailor-made digital solutions that spark engagement, 
//                 improve visibility, and create long-term value.
//               </p>
//             </MotionWrapper>
//           </div>
//         </div>
//       </section>

//       <section className="py-24 bg-zinc-50 overflow-hidden">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-16">
//             <MotionWrapper>
//               <h5 className="text-gold-600 font-bold uppercase tracking-widest text-[10px] mb-4">
//                 Integrity in Action
//               </h5>
//               <h3 className="core-values-title text-3xl md:text-4xl font-display font-bold text-zinc-900 tracking-tight 
//                 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 bg-[length:200%_auto] bg-clip-text text-transparent">
//                 Our Core Values
//               </h3>
//             </MotionWrapper>
//           </div>

//           <div 
//             ref={cardsContainerRef} 
//             className="core-values-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//           >
//             {CORE_VALUES.map((value, idx) => (
//               <MotionWrapper key={idx} delay={idx * 0.05} variant="fade">
//                 <div 
//                   className={`core-value-card bg-gradient-to-br ${value.bgColor} p-10 rounded-[2.5rem] border border-zinc-100 hover:border-gold-500 transition-all h-full group relative overflow-hidden`}
//                 >
//                   {/* Animated background gradient */}
//                   <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 
//                     bg-gradient-to-r from-gold-500 via-yellow-500 to-gold-500 animate-gradient-x" />
                  
//                   <div className="relative z-10">
//                     <div 
//                       className="core-value-icon w-14 h-14 bg-white rounded-xl flex items-center justify-center 
//                       text-zinc-400 mb-6 shadow-sm transition-all duration-300"
//                     >
//                       <div className="text-current transition-all duration-300">
//                         {React.cloneElement(value.icon, { 
//                           className: "w-6 h-6 transition-transform duration-300" 
//                         })}
//                       </div>
//                     </div>
                    
//                     <h4 className="core-value-title text-lg font-bold text-zinc-900 mb-3 transition-colors duration-300">
//                       {value.title}
//                     </h4>
                    
//                     <p className="core-value-desc text-zinc-500 text-sm leading-relaxed font-medium transition-all duration-300">
//                       {value.desc}
//                     </p>

//                     {/* Animated underline effect on hover */}
//                     <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-500 group-hover:w-full 
//                       transition-all duration-500 ease-in-out" />
//                   </div>
//                 </div>
//               </MotionWrapper>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Add custom styles for particles and animations */}
//       <style jsx>{`
//         @keyframes gradient-x {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }
        
//         .animate-gradient-x {
//           animation: gradient-x 3s ease infinite;
//           background-size: 200% 200%;
//         }
        
//         .core-value-card {
//           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//           transform-origin: center;
//         }
        
//         .particle {
//           position: absolute;
//           pointer-events: none;
//           animation: float-particle 1s ease-out forwards;
//         }
        
//         @keyframes float-particle {
//           0% {
//             opacity: 1;
//             transform: scale(1);
//           }
//           100% {
//             opacity: 0;
//             transform: translate(var(--x), var(--y)) scale(0);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default About;


// import React from 'react';
// import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import MotionWrapper from './MotionWrapper';
// import {
//   CheckCircle2,
//   Lightbulb,
//   ShieldCheck,
//   Trophy,
//   Users2,
//   HeartHandshake,
//   Zap,
//   Target,
//   Rocket,
//   Megaphone,
//   Palette,
//   Code
// } from 'lucide-react';

// gsap.registerPlugin(useGSAP, ScrollTrigger);

// const CORE_VALUES = [
//   {
//     title: "Innovation",
//     desc: "Embracing creativity and technology to deliver cutting-edge digital solutions.",
//     icon: <Lightbulb className="w-6 h-6" />,
//     color: "#FFD700",
//     bgColor: "from-yellow-50 to-amber-50",
//     iconAnimation: "pulse-glow"
//   },
//   {
//     title: "Integrity",
//     desc: "Maintaining transparency and ethical practices in every partnership.",
//     icon: <ShieldCheck className="w-6 h-6" />,
//     color: "#4CAF50",
//     bgColor: "from-green-50 to-emerald-50",
//     iconAnimation: "rotate-shield"
//   },
//   {
//     title: "Excellence",
//     desc: "Striving for the highest quality to ensure measurable results.",
//     icon: <Trophy className="w-6 h-6" />,
//     color: "#FF6B6B",
//     bgColor: "from-red-50 to-orange-50",
//     iconAnimation: "bounce-trophy"
//   },
//   {
//     title: "Collaboration",
//     desc: "Working as an extension of your team to achieve shared goals.",
//     icon: <Users2 className="w-6 h-6" />,
//     color: "#6C5CE7",
//     bgColor: "from-indigo-50 to-purple-50",
//     iconAnimation: "float-users"
//   },
//   {
//     title: "Client-Centric",
//     desc: "Placing your business needs at the heart of our strategy.",
//     icon: <HeartHandshake className="w-6 h-6" />,
//     color: "#FF85B3",
//     bgColor: "from-pink-50 to-rose-50",
//     iconAnimation: "beat-heart"
//   },
//   {
//     title: "Adaptability",
//     desc: "Staying agile in an ever-evolving digital landscape.",
//     icon: <Zap className="w-6 h-6" />,
//     color: "#FFA500",
//     bgColor: "from-orange-50 to-yellow-50",
//     iconAnimation: "spark-zap"
//   }
// ];

// const About = () => {
//   const navigate = useNavigate();
//   const containerRef = React.useRef(null);
//   const iconRefs = React.useRef([]);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"]
//   });

//   const springConfig = { mass: 1, stiffness: 60, damping: 20 };
//   const contentY = useSpring(useTransform(scrollYProgress, [0, 1], [80, -80]), springConfig);

//   // GSAP Animations for Icons
//   useGSAP(() => {
//     // Individual icon animations based on their type
//     iconRefs.current.forEach((iconRef, index) => {
//       if (!iconRef) return;
      
//       const value = CORE_VALUES[index];
//       const icon = iconRef;
//       const iconContainer = iconRef.parentElement;
      
//       // Different animations for each icon
//       switch(value.iconAnimation) {
//         case "pulse-glow":
//           // Lightbulb - pulsating glow effect
//           gsap.to(icon, {
//             scale: 1.2,
//             duration: 1.5,
//             repeat: -1,
//             yoyo: true,
//             ease: "sine.inOut",
//             filter: "drop-shadow(0 0 8px #FFD700)"
//           });
          
//           gsap.to(iconContainer, {
//             boxShadow: "0 0 20px rgba(255, 215, 0, 0.3)",
//             duration: 1.5,
//             repeat: -1,
//             yoyo: true,
//             ease: "sine.inOut"
//           });
//           break;
          
//         case "rotate-shield":
//           // Shield - subtle rotation and protection pulse
//           gsap.to(icon, {
//             rotation: 5,
//             duration: 2,
//             repeat: -1,
//             yoyo: true,
//             ease: "sine.inOut"
//           });
          
//           gsap.to(icon, {
//             scale: 1.1,
//             duration: 1.8,
//             repeat: -1,
//             yoyo: true,
//             ease: "sine.inOut",
//             delay: 0.5
//           });
//           break;
          
//         case "bounce-trophy":
//           // Trophy - bouncing with victory feel
//           gsap.to(icon, {
//             y: -5,
//             duration: 1.2,
//             repeat: -1,
//             yoyo: true,
//             ease: "power1.inOut"
//           });
          
//           gsap.to(icon, {
//             rotation: 3,
//             duration: 2,
//             repeat: -1,
//             yoyo: true,
//             ease: "sine.inOut"
//           });
//           break;
          
//         case "float-users":
//           // Users - floating and connecting
//           gsap.to(icon, {
//             y: -4,
//             duration: 1.8,
//             repeat: -1,
//             yoyo: true,
//             ease: "sine.inOut"
//           });
          
//           // Animate individual users in the group
//           gsap.to(icon.querySelectorAll('circle, path'), {
//             fill: "#6C5CE7",
//             duration: 1.5,
//             repeat: -1,
//             yoyo: true,
//             stagger: 0.2,
//             ease: "sine.inOut"
//           });
//           break;
          
//         case "beat-heart":
//           // Heart - beating animation
//           gsap.to(icon, {
//             scale: 1.3,
//             duration: 0.6,
//             repeat: -1,
//             yoyo: true,
//             ease: "power1.inOut",
//             repeatDelay: 0.4
//           });
          
//           gsap.to(iconContainer, {
//             backgroundColor: "#FF85B3",
//             duration: 0.6,
//             repeat: -1,
//             yoyo: true,
//             ease: "power1.inOut",
//             repeatDelay: 0.4
//           });
//           break;
          
//         case "spark-zap":
//           // Zap - electric spark effect
//           gsap.to(icon, {
//             scale: 1.2,
//             rotation: 10,
//             duration: 0.3,
//             repeat: -1,
//             yoyo: true,
//             ease: "power1.inOut",
//             repeatDelay: 0.7
//           });
          
//           // Create spark particles
//           const sparkTimeline = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
//           sparkTimeline.to(icon, {
//             filter: "drop-shadow(0 0 10px #FFA500)",
//             duration: 0.2,
//             ease: "power1.out"
//           }).to(icon, {
//             filter: "drop-shadow(0 0 0px #FFA500)",
//             duration: 0.3,
//             ease: "power1.in"
//           });
//           break;
//       }
//     });

//     // Continuous orbiting animation for all icons
//     gsap.to('.core-value-icon', {
//       rotation: 360,
//       duration: 20,
//       repeat: -1,
//       ease: "none",
//       transformOrigin: "center center"
//     });

//     // Mouse move parallax effect on icons
//     const cards = document.querySelectorAll('.core-value-card');
//     cards.forEach((card, index) => {
//       const icon = card.querySelector('.core-value-icon');
      
//       card.addEventListener('mousemove', (e) => {
//         const rect = card.getBoundingClientRect();
//         const x = e.clientX - rect.left;
//         const y = e.clientY - rect.top;
        
//         const centerX = rect.width / 2;
//         const centerY = rect.height / 2;
        
//         const moveX = (x - centerX) * 0.1;
//         const moveY = (y - centerY) * 0.1;
        
//         gsap.to(icon, {
//           x: moveX,
//           y: moveY,
//           rotation: moveX * 0.5,
//           duration: 0.5,
//           ease: "power2.out"
//         });
//       });
      
//       card.addEventListener('mouseleave', () => {
//         gsap.to(icon, {
//           x: 0,
//           y: 0,
//           rotation: 0,
//           duration: 0.8,
//           ease: "elastic.out(1, 0.3)"
//         });
//       });
//     });

//     // Scroll-triggered icon animations
//     ScrollTrigger.batch('.core-value-icon', {
//       onEnter: (elements) => {
//         gsap.fromTo(elements,
//           { 
//             scale: 0,
//             rotation: -180,
//             opacity: 0 
//           },
//           { 
//             scale: 1,
//             rotation: 0,
//             opacity: 1,
//             duration: 1,
//             stagger: 0.1,
//             ease: "back.out(1.7)"
//           }
//         );
//       }
//     });

//   }, { scope: containerRef });

//   return (
//     <div ref={containerRef} className="bg-white">
//       <section id="about" className="pt-32 pb-20 bg-zinc-50 overflow-hidden relative">
//         <div className="container mx-auto px-6 relative z-10">
//           <div className="max-w-4xl mb-24">
//             <MotionWrapper variant="fade">
//               <h2 className="text-gold-600 font-bold uppercase tracking-widest text-[10px] mb-6">Our Philosophy</h2>
//               <h3 className="text-3xl md:text-5xl font-display font-bold text-zinc-900 mb-8 leading-tight tracking-tight">
//                 Building meaningful digital experiences with a relentless focus on <span className="text-gold-600">design and performance.</span>
//               </h3>
//               <p className="text-lg md:text-xl text-zinc-500 leading-relaxed font-medium max-w-2xl">
//                 We believe that great digital products are born at the intersection of strategic thinking and artisanal craft.
//               </p>
//             </MotionWrapper>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
//             <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl border-8 border-white bg-zinc-200">
//               <img
//                 src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
//                 alt="Our Team"
//                 className="w-full h-auto grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
//               />
//             </div>
//             <motion.div style={{ y: contentY }} className="relative">
//               <MotionWrapper variant="fade" direction="right">
//                 <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
//                   Digital Elite Service is a results-driven agency specializing in <span className="text-zinc-900 font-semibold border-b border-gold-300">Digital Marketing, Graphic Design, and Web Development</span>.
//                 </p>
//                 <p className="text-zinc-500 mb-10 leading-relaxed font-medium">
//                   We bridge the gap between complex technology and human connection, delivering solutions that are as intuitive as they are powerful.
//                 </p>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   {["Brand Strategy", "Content Growth", "Full-Stack Dev", "UI/UX Design"].map((point, idx) => (
//                     <div key={idx} className="flex items-center gap-3 text-zinc-800 font-bold text-xs uppercase tracking-wider">
//                       <CheckCircle2 size={14} className="text-gold-500" />
//                       {point}
//                     </div>
//                   ))}
//                 </div>
//               </MotionWrapper>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       <section className="py-24 relative bg-white">
//         <div className="container mx-auto px-6">
//           <div className="flex flex-col md:flex-row gap-10">
//             <MotionWrapper
//               className="flex-1 bg-zinc-50 p-10 md:p-14 rounded-[3rem] border border-zinc-100 
//               transition-all duration-500 hover:bg-zinc-900 hover:text-white group cursor-pointer"
//             >
//               <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 
//                 transition-all duration-500 group-hover:bg-white/10">
//                 <Target className="text-gold-600 group-hover:text-gold-400" size={24} />
//               </div>
//               <h4 className="text-2xl font-bold mb-4 tracking-tight">Our Vision</h4>
//               <p className="text-zinc-500 text-base leading-relaxed font-medium 
//                 group-hover:text-zinc-300 transition-all duration-500">
//                 To be the catalyst for digital transformation, helping brands reach their full potential 
//                 through innovation and artistic integrity.
//               </p>
//             </MotionWrapper>

//             <MotionWrapper
//               delay={0.2}
//               className="flex-1 bg-zinc-900 p-10 md:p-14 rounded-[3rem] text-white 
//               transition-all duration-500 hover:bg-gold-600 group cursor-pointer"
//             >
//               <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 
//                 transition-all duration-500 group-hover:bg-white">
//                 <Rocket className="text-gold-400 group-hover:text-zinc-900" size={24} />
//               </div>
//               <h4 className="text-2xl font-bold mb-4 tracking-tight">Our Mission</h4>
//               <p className="text-zinc-400 text-base leading-relaxed font-medium 
//                 group-hover:text-white transition-all duration-500">
//                 To empower businesses with tailor-made digital solutions that spark engagement, 
//                 improve visibility, and create long-term value.
//               </p>
//             </MotionWrapper>
//           </div>
//         </div>
//       </section>

//       <section className="py-24 bg-zinc-50 overflow-hidden">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-16">
//             <MotionWrapper>
//               <h5 className="text-gold-600 font-bold uppercase tracking-widest text-[10px] mb-4">
//                 Integrity in Action
//               </h5>
//               <h3 className="text-3xl md:text-4xl font-display font-bold text-zinc-900 tracking-tight">
//                 Our Core Values
//               </h3>
//             </MotionWrapper>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {CORE_VALUES.map((value, idx) => (
//               <MotionWrapper key={idx} delay={idx * 0.05} variant="fade">
//                 <div 
//                   className={`core-value-card bg-gradient-to-br ${value.bgColor} p-8 rounded-[2.5rem] border border-zinc-100 
//                     hover:border-gold-500 transition-all duration-300 h-full group relative overflow-hidden`}
//                 >
//                   {/* Animated background circles */}
//                   <div className="absolute -inset-1 bg-gradient-to-r from-gold-500/0 via-gold-500/5 to-gold-500/0 
//                     group-hover:via-gold-500/20 transition-all duration-1000 group-hover:animate-gradient-x" />
                  
//                   {/* Icon Container with Ref */}
//                   <div className="relative mb-6">
//                     <div 
//                       className="core-value-icon w-16 h-16 bg-white rounded-xl flex items-center justify-center 
//                         shadow-lg transition-all duration-300 relative overflow-hidden"
//                       style={{
//                         boxShadow: `0 4px 14px ${value.color}20`,
//                         border: `1px solid ${value.color}30`
//                       }}
//                       ref={el => iconRefs.current[idx] = el?.querySelector('svg')}
//                     >
//                       {/* Animated gradient overlay */}
//                       <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent 
//                         translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                      
//                       {/* Icon with custom color */}
//                       <div style={{ color: value.color }}>
//                         {React.cloneElement(value.icon, { 
//                           className: "w-7 h-7 transition-all duration-300",
//                           strokeWidth: 1.5
//                         })}
//                       </div>
//                     </div>
                    
//                     {/* Animated rings */}
//                     <div className="absolute inset-0 -z-10">
//                       <div className="absolute inset-0 rounded-full animate-ping-slow opacity-20"
//                         style={{ backgroundColor: value.color, animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite' }} />
//                     </div>
//                   </div>
                  
//                   <h4 className="text-lg font-bold text-zinc-900 mb-3 group-hover:text-gold-600 
//                     transition-colors duration-300">
//                     {value.title}
//                   </h4>
                  
//                   <p className="text-zinc-500 text-sm leading-relaxed font-medium 
//                     group-hover:text-zinc-700 transition-colors duration-300">
//                     {value.desc}
//                   </p>

//                   {/* Animated underline */}
//                   <div className="absolute bottom-6 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent 
//                     scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
//                 </div>
//               </MotionWrapper>
//             ))}
//           </div>
//         </div>
//       </section>

//       <style jsx>{`
//         @keyframes gradient-x {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }
        
//         @keyframes ping {
//           75%, 100% {
//             transform: scale(1.5);
//             opacity: 0;
//           }
//         }
        
//         .animate-gradient-x {
//           animation: gradient-x 3s ease infinite;
//           background-size: 200% 200%;
//         }
        
//         .animate-ping-slow {
//           animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;
//         }
        
//         .core-value-card {
//           transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
//         }
        
//         .core-value-icon {
//           transition: all 0.3s ease;
//         }
        
//         .core-value-icon svg {
//           filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
//         }
        
//         /* Custom animation for each icon type */
//         .core-value-card:hover .core-value-icon {
//           animation: none !important;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default About;

// import React from 'react';
// import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import MotionWrapper from './MotionWrapper';
// import {
//   CheckCircle2,
//   Lightbulb,
//   ShieldCheck,
//   Trophy,
//   Users2,
//   HeartHandshake,
//   Zap,
//   Target,
//   Rocket,
//   Megaphone,
//   Palette,
//   Code
// } from 'lucide-react';

// gsap.registerPlugin(useGSAP, ScrollTrigger);

// const CORE_VALUES = [
//   {
//     title: "Innovation",
//     desc: "Embracing creativity and technology to deliver cutting-edge digital solutions.",
//     icon: <Lightbulb className="w-6 h-6" />,
//     color: "#FFD700"
//   },
//   {
//     title: "Integrity",
//     desc: "Maintaining transparency and ethical practices in every partnership.",
//     icon: <ShieldCheck className="w-6 h-6" />,
//     color: "#4CAF50"
//   },
//   {
//     title: "Excellence",
//     desc: "Striving for the highest quality to ensure measurable results.",
//     icon: <Trophy className="w-6 h-6" />,
//     color: "#FF6B6B"
//   },
//   {
//     title: "Collaboration",
//     desc: "Working as an extension of your team to achieve shared goals.",
//     icon: <Users2 className="w-6 h-6" />,
//     color: "#6C5CE7"
//   },
//   {
//     title: "Client-Centric",
//     desc: "Placing your business needs at the heart of our strategy.",
//     icon: <HeartHandshake className="w-6 h-6" />,
//     color: "#FF85B3"
//   },
//   {
//     title: "Adaptability",
//     desc: "Staying agile in an ever-evolving digital landscape.",
//     icon: <Zap className="w-6 h-6" />,
//     color: "#FFA500"
//   }
// ];

// const About = () => {
//   const navigate = useNavigate();
//   const containerRef = React.useRef(null);
//   const cardRefs = React.useRef([]);
//   const iconRefs = React.useRef([]);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"]
//   });

//   const springConfig = { mass: 1, stiffness: 60, damping: 20 };
//   const contentY = useSpring(useTransform(scrollYProgress, [0, 1], [80, -80]), springConfig);

//   // GSAP Animations
//   useGSAP(() => {
//     // Initial entrance animation for cards
//     gsap.fromTo('.core-value-card',
//       {
//         y: 30,
//         opacity: 0,
//         scale: 0.95
//       },
//       {
//         y: 0,
//         opacity: 1,
//         scale: 1,
//         duration: 0.8,
//         stagger: 0.1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: '.core-values-grid',
//           start: "top 80%",
//           end: "bottom 20%",
//           toggleActions: "play none none reverse"
//         }
//       }
//     );

//     // Interactive hover animations for each card
//     cardRefs.current.forEach((card, index) => {
//       if (!card) return;
      
//       const icon = card.querySelector('.core-value-icon');
//       const iconSvg = icon?.querySelector('svg');
//       const title = card.querySelector('.core-value-title');
//       const desc = card.querySelector('.core-value-desc');
//       const color = CORE_VALUES[index].color;

//       // Create a timeline for hover in
//       const hoverTimeline = gsap.timeline({ paused: true });
      
//       // Card lift and shadow
//       hoverTimeline.to(card, {
//         y: -8,
//         boxShadow: `0 20px 30px -10px ${color}30`,
//         borderColor: color,
//         duration: 0.3,
//         ease: "power2.out"
//       }, 0);
      
//       // Icon scale and color
//       hoverTimeline.to(icon, {
//         scale: 1.1,
//         backgroundColor: color,
//         borderColor: color,
//         duration: 0.3,
//         ease: "back.out(1.2)"
//       }, 0);
      
//       // SVG color change
//       hoverTimeline.to(iconSvg, {
//         color: '#ffffff',
//         duration: 0.2,
//         ease: "power2.out"
//       }, 0.1);
      
//       // Title color
//       hoverTimeline.to(title, {
//         color: color,
//         x: 5,
//         duration: 0.3,
//         ease: "power2.out"
//       }, 0);
      
//       // Desc subtle movement
//       hoverTimeline.to(desc, {
//         y: -2,
//         color: '#3f3f46',
//         duration: 0.3,
//         ease: "power2.out"
//       }, 0.1);

//       // Event listeners
//       card.addEventListener('mouseenter', () => hoverTimeline.play());
//       card.addEventListener('mouseleave', () => hoverTimeline.reverse());
//     });

//     // Subtle floating animation only when cards are idle
//     gsap.to('.core-value-card:not(:hover)', {
//       y: '-=3',
//       duration: 2,
//       repeat: -1,
//       yoyo: true,
//       ease: "sine.inOut",
//       stagger: {
//         each: 0.2,
//         from: "random"
//       }
//     });

//     // Clean up
//     return () => {
//       cardRefs.current.forEach((card) => {
//         if (card) {
//           card.removeEventListener('mouseenter', () => {});
//           card.removeEventListener('mouseleave', () => {});
//         }
//       });
//     };
//   }, { scope: containerRef });

//   return (
//     <div ref={containerRef} className="bg-white">
//       <section id="about" className="pt-32 pb-20 bg-zinc-50 overflow-hidden relative">
//         <div className="container mx-auto px-6 relative z-10">
//           <div className="max-w-4xl mb-24">
//             <MotionWrapper variant="fade">
//               <h2 className="text-gold-600 font-bold uppercase tracking-widest text-[10px] mb-6">Our Philosophy</h2>
//               <h3 className="text-3xl md:text-5xl font-display font-bold text-zinc-900 mb-8 leading-tight tracking-tight">
//                 Building meaningful digital experiences with a relentless focus on <span className="text-gold-600">design and performance.</span>
//               </h3>
//               <p className="text-lg md:text-xl text-zinc-500 leading-relaxed font-medium max-w-2xl">
//                 We believe that great digital products are born at the intersection of strategic thinking and artisanal craft.
//               </p>
//             </MotionWrapper>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
//             <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl border-8 border-white bg-zinc-200">
//               <img
//                 src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
//                 alt="Our Team"
//                 className="w-full h-auto grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
//               />
//             </div>
//             <motion.div style={{ y: contentY }} className="relative">
//               <MotionWrapper variant="fade" direction="right">
//                 <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
//                   Digital Elite Service is a results-driven agency specializing in <span className="text-zinc-900 font-semibold border-b border-gold-300">Digital Marketing, Graphic Design, and Web Development</span>.
//                 </p>
//                 <p className="text-zinc-500 mb-10 leading-relaxed font-medium">
//                   We bridge the gap between complex technology and human connection, delivering solutions that are as intuitive as they are powerful.
//                 </p>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   {["Brand Strategy", "Content Growth", "Full-Stack Dev", "UI/UX Design"].map((point, idx) => (
//                     <div key={idx} className="flex items-center gap-3 text-zinc-800 font-bold text-xs uppercase tracking-wider">
//                       <CheckCircle2 size={14} className="text-gold-500" />
//                       {point}
//                     </div>
//                   ))}
//                 </div>
//               </MotionWrapper>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       <section className="py-24 relative bg-white">
//         <div className="container mx-auto px-6">
//           <div className="flex flex-col md:flex-row gap-10">
//             <MotionWrapper
//               className="flex-1 bg-zinc-50 p-10 md:p-14 rounded-[3rem] border border-zinc-100 
//               transition-all duration-500 hover:bg-zinc-900 hover:text-white group cursor-pointer"
//             >
//               <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 
//                 transition-all duration-500 group-hover:bg-white/10">
//                 <Target className="text-gold-600 group-hover:text-gold-400" size={24} />
//               </div>
//               <h4 className="text-2xl font-bold mb-4 tracking-tight">Our Vision</h4>
//               <p className="text-zinc-500 text-base leading-relaxed font-medium 
//                 group-hover:text-zinc-300 transition-all duration-500">
//                 To be the catalyst for digital transformation, helping brands reach their full potential 
//                 through innovation and artistic integrity.
//               </p>
//             </MotionWrapper>

//             <MotionWrapper
//               delay={0.2}
//               className="flex-1 bg-zinc-900 p-10 md:p-14 rounded-[3rem] text-white 
//               transition-all duration-500 hover:bg-gold-600 group cursor-pointer"
//             >
//               <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 
//                 transition-all duration-500 group-hover:bg-white">
//                 <Rocket className="text-gold-400 group-hover:text-zinc-900" size={24} />
//               </div>
//               <h4 className="text-2xl font-bold mb-4 tracking-tight">Our Mission</h4>
//               <p className="text-zinc-400 text-base leading-relaxed font-medium 
//                 group-hover:text-white transition-all duration-500">
//                 To empower businesses with tailor-made digital solutions that spark engagement, 
//                 improve visibility, and create long-term value.
//               </p>
//             </MotionWrapper>
//           </div>
//         </div>
//       </section>

//       <section className="py-24 bg-zinc-50">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-16">
//             <MotionWrapper>
//               <h5 className="text-gold-600 font-bold uppercase tracking-widest text-[10px] mb-4">
//                 Integrity in Action
//               </h5>
//               <h3 className="text-3xl md:text-4xl font-display font-bold text-zinc-900 tracking-tight">
//                 Our Core Values
//               </h3>
//             </MotionWrapper>
//           </div>

//           <div className="core-values-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {CORE_VALUES.map((value, idx) => (
//               <MotionWrapper key={idx} delay={idx * 0.05} variant="fade">
//                 <div
//                   ref={el => cardRefs.current[idx] = el}
//                   className="core-value-card bg-white p-8 rounded-2xl border border-zinc-100 
//                     transition-all duration-200 h-full flex flex-col relative overflow-hidden"
//                   style={{
//                     boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)'
//                   }}
//                 >
//                   {/* Subtle gradient background that appears on hover */}
//                   <div 
//                     className="absolute inset-0 opacity-0 transition-opacity duration-300"
//                     style={{
//                       background: `radial-gradient(circle at top right, ${value.color}10, transparent 70%)`
//                     }}
//                   />
                  
//                   {/* Icon Container */}
//                   <div className="relative mb-5">
//                     <div 
//                       className="core-value-icon w-14 h-14 bg-zinc-50 rounded-xl flex items-center justify-center
//                         transition-all duration-200 border border-zinc-200"
//                     >
//                       <div 
//                         className="text-zinc-600 transition-colors duration-200"
//                         style={{ color: value.color }}
//                       >
//                         {React.cloneElement(value.icon, { 
//                           className: "w-6 h-6",
//                           strokeWidth: 1.5
//                         })}
//                       </div>
//                     </div>
//                   </div>
                  
//                   {/* Content */}
//                   <h4 className="core-value-title text-lg font-semibold text-zinc-900 mb-2 
//                     transition-all duration-200">
//                     {value.title}
//                   </h4>
                  
//                   <p className="core-value-desc text-zinc-500 text-sm leading-relaxed 
//                     transition-all duration-200">
//                     {value.desc}
//                   </p>

//                   {/* Elegant indicator line */}
//                   <div 
//                     className="absolute bottom-0 left-6 right-6 h-0.5 scale-x-0 transition-transform duration-300 origin-left"
//                     style={{ 
//                       backgroundColor: value.color,
//                       opacity: 0.3
//                     }}
//                   />
//                 </div>
//               </MotionWrapper>
//             ))}
//           </div>
//         </div>
//       </section>

//       <style jsx>{`
//         .core-value-card {
//           position: relative;
//           will-change: transform, box-shadow;
//         }
        
//         .core-value-icon {
//           will-change: transform, background-color, border-color;
//         }
        
//         .core-value-icon svg {
//           will-change: color;
//         }
        
//         /* Smooth transitions */
//         .core-value-card:hover .core-value-icon {
//           border-color: transparent;
//         }
        
//         .core-value-card:hover .absolute.bottom-0 {
//           transform: scaleX(1);
//         }
//       `}</style>
//     </div>
//   );
// };

// export default About;

import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MotionWrapper from './MotionWrapper';
import {
  CheckCircle2,
  Lightbulb,
  ShieldCheck,
  Trophy,
  Users2,
  HeartHandshake,
  Zap,
  Target,
  Rocket
} from 'lucide-react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const CORE_VALUES = [
  {
    title: "Innovation",
    desc: "Embracing creativity and technology to deliver cutting-edge digital solutions.",
    icon: Lightbulb,
    color: "#FFD700",
    gradient: "from-amber-400 to-yellow-500",
    bgGradient: "from-amber-50 to-yellow-50/30"
  },
  {
    title: "Integrity",
    desc: "Maintaining transparency and ethical practices in every partnership.",
    icon: ShieldCheck,
    color: "#4CAF50",
    gradient: "from-emerald-400 to-green-500",
    bgGradient: "from-emerald-50 to-green-50/30"
  },
  {
    title: "Excellence",
    desc: "Striving for the highest quality to ensure measurable results.",
    icon: Trophy,
    color: "#FF6B6B",
    gradient: "from-rose-400 to-red-500",
    bgGradient: "from-rose-50 to-red-50/30"
  },
  {
    title: "Collaboration",
    desc: "Working as an extension of your team to achieve shared goals.",
    icon: Users2,
    color: "#6C5CE7",
    gradient: "from-indigo-400 to-purple-500",
    bgGradient: "from-indigo-50 to-purple-50/30"
  },
  {
    title: "Client-Centric",
    desc: "Placing your business needs at the heart of our strategy.",
    icon: HeartHandshake,
    color: "#FF85B3",
    gradient: "from-pink-400 to-rose-500",
    bgGradient: "from-pink-50 to-rose-50/30"
  },
  {
    title: "Adaptability",
    desc: "Staying agile in an ever-evolving digital landscape.",
    icon: Zap,
    color: "#FFA500",
    gradient: "from-orange-400 to-amber-500",
    bgGradient: "from-orange-50 to-amber-50/30"
  }
];

const IconAnimation = ({ icon: Icon, color, gradient, isHovered }) => {
  const iconRef = React.useRef(null);
  const circleRef = React.useRef(null);
  const ring1Ref = React.useRef(null);
  const ring2Ref = React.useRef(null);
  const sparkle1Ref = React.useRef(null);
  const sparkle2Ref = React.useRef(null);
  const sparkle3Ref = React.useRef(null);

  useGSAP(() => {
    if (!iconRef.current) return;

    const tl = gsap.timeline({
      defaults: { duration: 1.2, ease: "power3.inOut" }
    });

    // Initial animation sequence (like Lottie)
    tl.fromTo(iconRef.current,
      { scale: 0, rotation: -30, opacity: 0 },
      { scale: 1, rotation: 0, opacity: 1, duration: 1.5, ease: "elastic.out(1, 0.5)" }
    )
    .fromTo(circleRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 0.15, duration: 1, ease: "back.out(2)" },
      "-=0.8"
    )
    .fromTo([ring1Ref.current, ring2Ref.current],
      { scale: 0, opacity: 0, rotation: 0 },
      { 
        scale: 1.5, 
        opacity: 0, 
        rotation: 180,
        duration: 1.2,
        stagger: 0.2,
        ease: "power2.out"
      },
      "-=0.6"
    )
    .fromTo([sparkle1Ref.current, sparkle2Ref.current, sparkle3Ref.current],
      { scale: 0, opacity: 0, rotation: -45 },
      { 
        scale: 1, 
        opacity: 0.5, 
        rotation: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.2)"
      },
      "-=0.4"
    );

    // Continuous floating animation (very subtle)
    gsap.to(iconRef.current, {
      y: -3,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Gentle ring pulse
    gsap.to(circleRef.current, {
      scale: 1.1,
      opacity: 0.2,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Sparkles floating
    gsap.to([sparkle1Ref.current, sparkle2Ref.current, sparkle3Ref.current], {
      y: -5,
      x: gsap.utils.random(-3, 3),
      rotation: gsap.utils.random(-15, 15),
      duration: 2.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.3
    });

  }, []);

  // Hover animation
  useGSAP(() => {
    if (!iconRef.current) return;

    if (isHovered) {
      gsap.to(iconRef.current, {
        scale: 1.15,
        rotation: 5,
        duration: 0.4,
        ease: "back.out(1.2)"
      });
      
      gsap.to(circleRef.current, {
        scale: 1.3,
        opacity: 0.25,
        duration: 0.4,
        ease: "power2.out"
      });
      
      gsap.to([ring1Ref.current, ring2Ref.current], {
        scale: 2,
        opacity: 0.2,
        rotation: 180,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      });
      
      gsap.to([sparkle1Ref.current, sparkle2Ref.current, sparkle3Ref.current], {
        scale: 1.3,
        opacity: 0.8,
        rotation: 15,
        duration: 0.4,
        stagger: 0.05,
        ease: "back.out(1.2)"
      });
    } else {
      gsap.to(iconRef.current, {
        scale: 1,
        rotation: 0,
        duration: 0.4,
        ease: "power3.out"
      });
      
      gsap.to(circleRef.current, {
        scale: 1,
        opacity: 0.15,
        duration: 0.4,
        ease: "power3.out"
      });
      
      gsap.to([ring1Ref.current, ring2Ref.current], {
        scale: 1.5,
        opacity: 0,
        rotation: 180,
        duration: 0.5,
        ease: "power3.out"
      });
      
      gsap.to([sparkle1Ref.current, sparkle2Ref.current, sparkle3Ref.current], {
        scale: 1,
        opacity: 0.5,
        rotation: 0,
        duration: 0.4,
        ease: "power3.out"
      });
    }
  }, [isHovered]);

  return (
    <div className="relative flex items-center justify-center w-16 h-16">
      {/* Background glow rings */}
      <div
        ref={circleRef}
        className="absolute inset-0 rounded-full"
        style={{
          background: `radial-gradient(circle, ${color}20 0%, transparent 70%)`,
          opacity: 0.15
        }}
      />
      
      <div
        ref={ring1Ref}
        className="absolute inset-0 rounded-full border-2"
        style={{ borderColor: `${color}40` }}
      />
      
      <div
        ref={ring2Ref}
        className="absolute inset-0 rounded-full border"
        style={{ borderColor: `${color}20` }}
      />

      {/* Sparkles */}
      <svg
        ref={sparkle1Ref}
        className="absolute w-2 h-2 -top-1 -right-1"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 0L14 10L22 12L14 14L12 24L10 14L2 12L10 10L12 0Z"
          fill={color}
          opacity="0.5"
        />
      </svg>
      
      <svg
        ref={sparkle2Ref}
        className="absolute w-1.5 h-1.5 -bottom-1 left-0"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 0L14 10L22 12L14 14L12 24L10 14L2 12L10 10L12 0Z"
          fill={color}
          opacity="0.4"
        />
      </svg>
      
      <svg
        ref={sparkle3Ref}
        className="absolute w-1.5 h-1.5 top-0 -right-2"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 0L14 10L22 12L14 14L12 24L10 14L2 12L10 10L12 0Z"
          fill={color}
          opacity="0.6"
        />
      </svg>

      {/* Main Icon */}
      <div
        ref={iconRef}
        className="relative z-10"
        style={{ color }}
      >
        <Icon 
          className="w-7 h-7"
          strokeWidth={1.5}
        />
      </div>
    </div>
  );
};

const About = () => {
  const navigate = useNavigate();
  const containerRef = React.useRef(null);
  const [hoveredIndex, setHoveredIndex] = React.useState(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const springConfig = { mass: 1, stiffness: 60, damping: 20 };
  const contentY = useSpring(useTransform(scrollYProgress, [0, 1], [80, -80]), springConfig);

  useGSAP(() => {
    // Section title animation
    gsap.fromTo('.core-values-title',
      { 
        y: 40,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.core-values-section',
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Cards stagger entrance
    gsap.fromTo('.core-value-card',
      {
        y: 60,
        opacity: 0,
        scale: 0.9
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: '.core-values-grid',
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-white">
      <section id="about" className="pt-32 pb-20 bg-zinc-50 overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mb-24">
            <MotionWrapper variant="fade">
              <h2 className="text-gold-600 font-bold uppercase tracking-widest text-[10px] mb-6">Our Philosophy</h2>
              <h3 className="text-3xl md:text-5xl font-display font-bold text-zinc-900 mb-8 leading-tight tracking-tight">
                Building meaningful digital experiences with a relentless focus on <span className="text-gold-600">design and performance.</span>
              </h3>
              <p className="text-lg md:text-xl text-zinc-500 leading-relaxed font-medium max-w-2xl">
                We believe that great digital products are born at the intersection of strategic thinking and artisanal craft.
              </p>
            </MotionWrapper>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl border-8 border-white bg-zinc-200">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
                alt="Our Team"
                className="w-full h-auto grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <motion.div style={{ y: contentY }} className="relative">
              <MotionWrapper variant="fade" direction="right">
                <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
                  Digital Elite Service is a results-driven agency specializing in <span className="text-zinc-900 font-semibold border-b border-gold-300">Digital Marketing, Graphic Design, and Web Development</span>.
                </p>
                <p className="text-zinc-500 mb-10 leading-relaxed font-medium">
                  We bridge the gap between complex technology and human connection, delivering solutions that are as intuitive as they are powerful.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["Brand Strategy", "Content Growth", "Full-Stack Dev", "UI/UX Design"].map((point, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-zinc-800 font-bold text-xs uppercase tracking-wider">
                      <CheckCircle2 size={14} className="text-gold-500" />
                      {point}
                    </div>
                  ))}
                </div>
              </MotionWrapper>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 relative bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-10">
            <MotionWrapper
              className="flex-1 bg-zinc-50 p-10 md:p-14 rounded-[3rem] border border-zinc-100 
              transition-all duration-500 hover:bg-zinc-900 hover:text-white group cursor-pointer"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 
                transition-all duration-500 group-hover:bg-white/10">
                <Target className="text-gold-600 group-hover:text-gold-400" size={24} />
              </div>
              <h4 className="text-2xl font-bold mb-4 tracking-tight">Our Vision</h4>
              <p className="text-zinc-500 text-base leading-relaxed font-medium 
                group-hover:text-zinc-300 transition-all duration-500">
                To be the catalyst for digital transformation, helping brands reach their full potential 
                through innovation and artistic integrity.
              </p>
            </MotionWrapper>

            <MotionWrapper
              delay={0.2}
              className="flex-1 bg-zinc-900 p-10 md:p-14 rounded-[3rem] text-white 
              transition-all duration-500 hover:bg-gold-600 group cursor-pointer"
            >
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 
                transition-all duration-500 group-hover:bg-white">
                <Rocket className="text-gold-400 group-hover:text-zinc-900" size={24} />
              </div>
              <h4 className="text-2xl font-bold mb-4 tracking-tight">Our Mission</h4>
              <p className="text-zinc-400 text-base leading-relaxed font-medium 
                group-hover:text-white transition-all duration-500">
                To empower businesses with tailor-made digital solutions that spark engagement, 
                improve visibility, and create long-term value.
              </p>
            </MotionWrapper>
          </div>
        </div>
      </section>

     <section className="py-24 bg-gradient-to-b from-zinc-50 to-white">
  <div className="container mx-auto px-6">
    {/* Header */}
    <div className="text-center mb-16">
      <MotionWrapper>
        <h5 className="text-gold-600 font-bold uppercase tracking-widest text-[10px] mb-4">
          Integrity in Action
        </h5>

        <h3 className="text-3xl md:text-4xl font-display font-bold text-zinc-900 tracking-tight">
          Our Core Values
        </h3>

        <p className="text-zinc-500 mt-4 max-w-2xl mx-auto">
          Guiding principles that shape our culture and drive our success
        </p>
      </MotionWrapper>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {CORE_VALUES.map((value, idx) => (
        <MotionWrapper key={idx} delay={idx * 0.05} variant="fade">
          <div className="group relative h-full p-8 rounded-3xl border border-zinc-100 bg-white/80 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-black/5 hover:border-zinc-200">

            {/* Hover Gradient Background */}
            <div
              className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${value.bgGradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
            />

            <div className="relative z-10">
              
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <IconAnimation
                  icon={value.icon}
                  color={value.color}
                  gradient={value.gradient}
                />
              </div>

              {/* Title */}
              <h4 className="text-xl font-semibold text-zinc-900 text-center mb-3 transition-colors duration-300">
                {value.title}
              </h4>

              {/* Description */}
              <p className="text-sm text-zinc-500 text-center leading-relaxed transition-colors duration-300 group-hover:text-zinc-600">
                {value.desc}
              </p>
            </div>

            {/* Corner Accent */}
            <div
              className="absolute top-0 right-0 w-12 h-12 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background: `linear-gradient(135deg, transparent 50%, ${value.color}15 50%)`,
                borderTopRightRadius: '1.5rem'
              }}
            />
          </div>
        </MotionWrapper>
      ))}
    </div>
  </div>
</section>


      <style jsx>{`
        .core-value-card {
          position: relative;
          will-change: transform, box-shadow;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .core-value-card:hover {
          transform: translateY(-4px);
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
        
        @keyframes sparkle {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }
      `}</style>
    </div>
  );
};

export default About;