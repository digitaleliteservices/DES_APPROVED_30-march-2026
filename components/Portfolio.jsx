
// import React, { useRef } from 'react';
// import { motion, useAnimate } from 'framer-motion';
// import MotionWrapper from './MotionWrapper';
// import { ExternalLink, MousePointer2 } from 'lucide-react';
// import portfolioImage1 from '../assets/portfolio/portfolio-img1.png';
// import portfolioImage2 from '../assets/portfolio/portfolio-img2.png';
// import portfolioImage3 from '../assets/portfolio/portfolio-img3.png';
// import portfolioImage4 from '../assets/portfolio/portfolio-img4.png';
// import portfolioImage5 from '../assets/portfolio/portfolio-img5.png';
// import portfolioImage6 from '../assets/portfolio/portfolio-img6.png';
// import portfolioImage7 from '../assets/portfolio/portfolio-img7.png';
// import portfolioImage8 from '../assets/portfolio/portfolio-img8.png';
// import portfolioImage9 from '../assets/portfolio/portfolio-img9.png';


// const projects = [
//   {
//     title: "TechFlow SaaS Platform",
//     category: "Web Development",
//     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
//   },
//   {
//     title: "Lumina Brand Identity",
//     category: "Graphic Design",
//     image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800",
//   },
//   {
//     title: "Solaris Marketing Campaign",
//     category: "Digital Marketing",
//     image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
//   },
// ];

// // const trailImages = [
// //   "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=60&w=400",
// //   "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=60&w=400",
// //   "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=60&w=400",
// //   "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=60&w=400",
// //   "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=60&w=400",
// //   "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=60&w=400",
// //   "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=60&w=400",
// //   "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=60&w=400",
// //   "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=60&w=400",
// //   "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=60&w=400",
// // ];

// const trailImages = [
//   portfolioImage1,
//   portfolioImage2,
//   portfolioImage3,
//   portfolioImage4,
//   portfolioImage5,
//   portfolioImage6,
//   portfolioImage7,
//   portfolioImage8,
//   portfolioImage9,
// ];
// const MouseImageTrail = ({
//   children,
//   images,
//   renderImageBuffer,
//   rotationRange,
// }) => {
//   const [scope, animate] = useAnimate();
//   const lastRenderPosition = useRef({ x: 0, y: 0 });
//   const imageRenderCount = useRef(0);

//   const calculateDistance = (x1, y1, x2, y2) => {
//     const deltaX = x2 - x1;
//     const deltaY = y2 - y1;
//     return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
//   };

//   const renderNextImage = () => {
//     const imageIndex = imageRenderCount.current % images.length;
//     const selector = `[data-mouse-move-index="${imageIndex}"]`;
//     const el = scope.current.querySelector(selector);

//     if (!el) return;

//     const rect = scope.current.getBoundingClientRect();
//     const x = lastRenderPosition.current.x - rect.left;
//     const y = lastRenderPosition.current.y - rect.top;

//     el.style.top = `${y}px`;
//     el.style.left = `${x}px`;
//     el.style.zIndex = imageRenderCount.current.toString();

//     const rotation = Math.random() * rotationRange;

//     animate(
//       selector,
//       {
//         opacity: [0, 1],
//         transform: [
//           `translate(-50%, -25%) scale(0.5) ${
//             imageIndex % 2 ? `rotate(${rotation}deg)` : `rotate(-${rotation}deg)`
//           }`,
//           `translate(-50%, -50%) scale(1) ${
//             imageIndex % 2 ? `rotate(-${rotation}deg)` : `rotate(${rotation}deg)`
//           }`,
//         ],
//       },
//       { type: "spring", damping: 15, stiffness: 200 }
//     );

//     animate(
//       selector,
//       { opacity: [1, 0] },
//       { ease: "linear", duration: 0.5, delay: 5 }
//     );

//     imageRenderCount.current = imageRenderCount.current + 1;
//   };

//   const handleMouseMove = (e) => {
//     const { clientX, clientY } = e;
//     const distance = calculateDistance(
//       clientX,
//       clientY,
//       lastRenderPosition.current.x,
//       lastRenderPosition.current.y
//     );

//     if (distance >= renderImageBuffer) {
//       lastRenderPosition.current.x = clientX;
//       lastRenderPosition.current.y = clientY;
//       renderNextImage();
//     }
//   };

//   return (
//     <div
//       ref={scope}
//       className="relative overflow-hidden w-full rounded-[4rem]"
//       onMouseMove={handleMouseMove}
//     >
//       {children}
//       {images.map((img, index) => (
//         <img
//           className="pointer-events-none absolute left-0 top-0 h-48 w-auto rounded-2xl border-2 border-gold-500 bg-neutral-900 shadow-2xl object-cover opacity-0 z-50 transform-gpu"
//           src={img}
//           alt={`Mouse move image ${index}`}
//           key={index}
//           data-mouse-move-index={index}
//         />
//       ))}
//     </div>
//   );
// };

// const Portfolio = () => {
//   return (
    // <section id="portfolio" className="py-32 bg-zinc-50 relative">
    //   <div className="container mx-auto px-6 relative z-10">
        
    //     <div className="mb-24">
    //       <MouseImageTrail
    //         images={trailImages}
    //         renderImageBuffer={50}
    //         rotationRange={25}
    //       >
    //         <div className="bg-white rounded-[4rem] py-48 flex flex-col items-center justify-center border-4 border-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] group/card cursor-none">
    //           <div className="flex flex-col items-center gap-8 px-6 text-center">
    //             <motion.div
    //               initial={{ opacity: 0, y: 20 }}
    //               whileInView={{ opacity: 1, y: 0 }}
    //               className="bg-gold-50 text-gold-600 px-6 py-2 rounded-full font-black text-xs uppercase tracking-[0.3em]"
    //             >
    //               Our Work
    //             </motion.div>
                
    //             <div className="flex items-center justify-center gap-6 text-zinc-900 group-hover/card:scale-110 transition-transform duration-700">
    //               <MousePointer2 size={60} className="text-gold-500 animate-float" strokeWidth={2.5} />
    //               <h3 className="text-5xl md:text-9xl font-display font-black leading-none tracking-tighter uppercase">
    //                 Hover <span className="text-gold-500">Me</span>
    //               </h3>
    //             </div>
                
    //             <p className="max-w-xl text-zinc-400 font-bold uppercase tracking-[0.2em] text-sm md:text-lg leading-relaxed">
    //               Architecting digital masterpieces for global leaders
    //             </p>
    //           </div>
    //         </div>
    //       </MouseImageTrail>
    //     </div>

    //     <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
    //       <MotionWrapper className="max-w-xl">
    //         <h4 className="text-4xl font-display font-black text-zinc-900 tracking-tight">
    //           Selected <span className="text-gold-500">Exhibits</span>
    //         </h4>
    //       </MotionWrapper>
          
    //       <MotionWrapper direction="left">
    //         <button className="group flex items-center gap-3 bg-zinc-900 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-gold-500 transition-all duration-500 shadow-xl shadow-zinc-200">
    //           View All Projects
    //           <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
    //         </button>
    //       </MotionWrapper>
    //     </div>

    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
    //       {projects.map((project, idx) => (
    //         <MotionWrapper key={idx} delay={idx * 0.15}>
    //           <div className="group relative aspect-[16/10] overflow-hidden rounded-[4rem] shadow-2xl bg-zinc-200 border-[12px] border-white">
    //             <img 
    //               src={project.image} 
    //               alt={project.title} 
    //               className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
    //             />
    //             <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-12 translate-y-4 group-hover:translate-y-0">
    //               <span className="text-gold-400 font-black text-xs uppercase tracking-[0.4em] mb-4">
    //                 {project.category}
    //               </span>
    //               <h4 className="text-white text-4xl font-black uppercase tracking-tighter mb-4">
    //                 {project.title}
    //               </h4>
    //               <div className="w-12 h-1 bg-gold-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
    //             </div>
    //           </div>
    //         </MotionWrapper>
    //       ))}
    //     </div>
    //   </div>
    // </section>
//   );
// };

// export default Portfolio;


// import React, { useRef, useState, useMemo } from "react";
// import { motion, useAnimate , useScroll, useTransform } from "framer-motion";
//  //import { motion, } from 'framer-motion';
// import { useNavigate } from "react-router-dom";
// import { ArrowUpRight, Cpu, Activity, ShieldCheck } from "lucide-react";
// import MotionWrapper from "./MotionWrapper";
// import { ExternalLink, MousePointer2 } from 'lucide-react';

// import portfolioImage1 from '../assets/portfolio/portfolio-img1.png';
// import portfolioImage2 from '../assets/portfolio/portfolio-img2.png';
// import portfolioImage3 from '../assets/portfolio/portfolio-img3.png';
// import portfolioImage4 from '../assets/portfolio/portfolio-img4.png';
// import portfolioImage5 from '../assets/portfolio/portfolio-img5.png';
// import portfolioImage6 from '../assets/portfolio/portfolio-img6.png';
// import portfolioImage7 from '../assets/portfolio/portfolio-img7.png';
// import portfolioImage8 from '../assets/portfolio/portfolio-img8.png';
// import portfolioImage9 from '../assets/portfolio/portfolio-img9.png';


// const projectss = [
//   {
//     title: "TechFlow SaaS Platform",
//     category: "Web Development",
//     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
//   },
//   {
//     title: "Lumina Brand Identity",
//     category: "Graphic Design",
//     image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800",
//   },
//   {
//     title: "Solaris Marketing Campaign",
//     category: "Digital Marketing",
//     image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
//   },
// ];

// // const trailImages = [
// //   "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=60&w=400",
// //   "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=60&w=400",
// //   "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=60&w=400",
// //   "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=60&w=400",
// //   "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=60&w=400",
// //   "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=60&w=400",
// //   "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=60&w=400",
// //   "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=60&w=400",
// //   "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=60&w=400",
// //   "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=60&w=400",
// // ];

// const trailImages = [
//   portfolioImage1,
//   portfolioImage2,
//   portfolioImage3,
//   portfolioImage4,
//   portfolioImage5,
//   portfolioImage6,
//   portfolioImage7,
//   portfolioImage8,
//   portfolioImage9,
// ];
// const MouseImageTrail = ({
//   children,
//   images,
//   renderImageBuffer,
//   rotationRange,
// }) => {
//   const [scope, animate] = useAnimate();
//   const lastRenderPosition = useRef({ x: 0, y: 0 });
//   const imageRenderCount = useRef(0);

//   const calculateDistance = (x1, y1, x2, y2) => {
//     const deltaX = x2 - x1;
//     const deltaY = y2 - y1;
//     return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
//   };

//   const renderNextImage = () => {
//     const imageIndex = imageRenderCount.current % images.length;
//     const selector = `[data-mouse-move-index="${imageIndex}"]`;
//     const el = scope.current.querySelector(selector);

//     if (!el) return;

//     const rect = scope.current.getBoundingClientRect();
//     const x = lastRenderPosition.current.x - rect.left;
//     const y = lastRenderPosition.current.y - rect.top;

//     el.style.top = `${y}px`;
//     el.style.left = `${x}px`;
//     el.style.zIndex = imageRenderCount.current.toString();

//     const rotation = Math.random() * rotationRange;

//     animate(
//       selector,
//       {
//         opacity: [0, 1],
//         transform: [
//           `translate(-50%, -25%) scale(0.5) ${
//             imageIndex % 2 ? `rotate(${rotation}deg)` : `rotate(-${rotation}deg)`
//           }`,
//           `translate(-50%, -50%) scale(1) ${
//             imageIndex % 2 ? `rotate(-${rotation}deg)` : `rotate(${rotation}deg)`
//           }`,
//         ],
//       },
//       { type: "spring", damping: 15, stiffness: 200 }
//     );

//     animate(
//       selector,
//       { opacity: [1, 0] },
//       { ease: "linear", duration: 0.5, delay: 5 }
//     );

//     imageRenderCount.current = imageRenderCount.current + 1;
//   };

//   const handleMouseMove = (e) => {
//     const { clientX, clientY } = e;
//     const distance = calculateDistance(
//       clientX,
//       clientY,
//       lastRenderPosition.current.x,
//       lastRenderPosition.current.y
//     );

//     if (distance >= renderImageBuffer) {
//       lastRenderPosition.current.x = clientX;
//       lastRenderPosition.current.y = clientY;
//       renderNextImage();
//     }
//   };

//   return (
//     <div
//       ref={scope}
//       className="relative overflow-hidden w-full rounded-[4rem]"
//       onMouseMove={handleMouseMove}
//     >
//       {children}
//       {images.map((img, index) => (
//         <img
//           className="pointer-events-none absolute left-0 top-0 h-48 w-auto rounded-2xl border-2 border-gold-500 bg-neutral-900 shadow-2xl object-cover opacity-0 z-50 transform-gpu"
//           src={img}
//           alt={`Mouse move image ${index}`}
//           key={index}
//           data-mouse-move-index={index}
//         />
//       ))}
//     </div>
//   );
// };


// const categories = ["All", "Architecture", "Systems", "Identity"];

// const projects = [
//   {
//     id: "PRJ-001",
//     index: "01",
//     client: "SYNTHETIX SYSTEMS",
//     title: "Global Data Backbone",
//     category: "Architecture",
//     color: "#0f172a",
//     image:
//       "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600",
//     description:
//       "Designing a hyper-scalable cloud infrastructure for real-time global asset tracking and automated logistics.",
//     kpi: "Latency: -42ms",
//     tech: ["Kubernetes", "Rust", "gRPC"],
//   },
//   {
//     id: "PRJ-002",
//     index: "02",
//     client: "VELOCITY NEURAL",
//     title: "Predictive Analytics Core",
//     category: "Systems",
//     color: "#1e293b",
//     image:
//       "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1600",
//     description:
//       "A centralized intelligence platform that processes billions of signals to forecast market volatility with 98% accuracy.",
//     kpi: "Efficiency: +156%",
//     tech: ["TensorFlow", "Go", "ClickHouse"],
//   },
//   {
//     id: "PRJ-003",
//     index: "03",
//     client: "AURA DESIGN LAB",
//     title: "Living Visual Identity",
//     category: "Identity",
//     color: "#334155",
//     image:
//       "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1600",
//     description:
//       "An adaptive brand system that utilizes environmental lighting and user interaction to morph its visual state in real-time.",
//     kpi: "Engagement: +89%",
//     tech: ["WebGL", "Three.js", "AI-Gen"],
//   },
//   {
//     id: "PRJ-004",
//     index: "04",
//     client: "NEXUS QUANTUM",
//     title: "Next-Gen Fintech Core",
//     category: "Architecture",
//     color: "#020617",
//     image:
//       "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1600",
//     description:
//       "Building the world's most secure transaction layer using post-quantum cryptography for institutional financial movements.",
//     kpi: "Uptime: 99.999%",
//     tech: ["Post-Quantum", "Solidity", "AWS"],
//   },
//   {
//     id: "PRJ-005",
//     index: "05",
//     client: "LUMINA RETAIL",
//     title: "Omnichannel Commerce",
//     category: "Systems",
//     color: "#0f172a",
//     image:
//       "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1600",
//     description:
//       "Unified retail engine synchronizing online inventory with physical points-of-sale across 4,000 global locations.",
//     kpi: "Revenue: +214%",
//     tech: ["Next.js", "GraphQL", "Redis"],
//   },
//   {
//     id: "PRJ-006",
//     index: "06",
//     client: "GENESIS BIO-LABS",
//     title: "Clinical Data Mesh",
//     category: "Architecture",
//     color: "#1e293b",
//     image:
//       "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1600",
//     description:
//       "Architecting a secure, compliant data fabric for genomic research processing across decentralized laboratory networks.",
//     kpi: "Processing: -70%",
//     tech: ["Apache Spark", "Scala", "Azure"],
//   },
//   {
//     id: "PRJ-007",
//     index: "07",
//     client: "VORTEX MEDIA",
//     title: "H-Fidelity Streaming",
//     category: "Identity",
//     color: "#334155",
//     image:
//       "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1600",
//     description:
//       "Immersive digital brand experience featuring ultra-low latency real-time video interaction for global media events.",
//     kpi: "Latency: <100ms",
//     tech: ["WebRTC", "C++", "FFmpeg"],
//   },
//   {
//     id: "PRJ-008",
//     index: "08",
//     client: "CARBON ZERO",
//     title: "Grid Intelligence",
//     category: "Systems",
//     color: "#020617",
//     image:
//       "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1600",
//     description:
//       "Smart grid management system optimizing renewable energy distribution based on real-time consumption forecasting.",
//     kpi: "Waste: -35%",
//     tech: ["IoT", "Python", "MQTT"],
//   },
// ];

// const ProjectCard = ({ project, index }) => {
//   const container = useRef(null);
//   const navigate = useNavigate();

//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ["start end", "start start"],
//   });

//   const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

//   return (
//     <div
//       ref={container}
//       className="h-screen flex items-center justify-center sticky top-0 px-4 md:px-0"
//     >
//       <motion.div
//         style={{
//           scale,
//           backgroundColor: project.color,
//           top: `calc(-5vh + ${index * 30}px)`,
//         }}
//         className="relative h-[80vh] w-full max-w-6xl rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-2xl border border-white/10"
//       >
//         {/* Left */}
//         <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-between text-white z-10">
//           <div>
//             <div className="flex items-center gap-4 mb-8">
//               <span className="text-[6px] font-mono font-bold text-white/40 tracking-[0.4em]">
//                 {project.id}
//               </span>
//               <div className="h-[1px] w-8 bg-white/20" />
//               <span className="text-[10px] font-bold text-[#89E0F0] uppercase tracking-[0.3em]">
//                 {project.category}
//               </span>
//             </div>

//             <h3 className="text-xl md:text-2xl font-bold leading-[0.9] tracking-tighter mb-8">
//               {project.title}
//             </h3>

//             <p className="text-sm text-white/60 mb-10 max-w-md">
//               {project.description}
//             </p>

//             <div className="flex flex-wrap gap-3">
//               {project.tech.map((t) => (
//                 <span
//                   key={t}
//                   className="px-4 py-1.5 rounded-full border border-white/10 text-[8px] font-bold text-white/40 uppercase tracking-widest bg-white/5"
//                 >
//                   {t}
//                 </span>
//               ))}
//             </div>
//           </div>

//           <button
//             onClick={() => navigate("/contact")}
//             className="group flex items-center gap-4 bg-white px-8 py-4 rounded-full text-[#0f172a] hover:pr-12 transition-all"
//           >
//             <span className="text-[6px] font-bold uppercase tracking-widest">
//               Case Study
//             </span>
//             <div className="w-8 h-8 rounded-full bg-[#0f172a] text-white flex items-center justify-center group-hover:rotate-45 transition-transform">
//               <ArrowUpRight size={18} />
//             </div>
//           </button>
//         </div>

//         {/* Right */}
//         <div className="md:w-1/1 relative h-1/2 md:h-full overflow-hidden">
//           <motion.img
//             src={project.image}
//             alt={project.title}
//             className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-1000 scale-110"
//           />
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// const Portfolio = () => {
//   const [activeCategory, setActiveCategory] = useState("All");

//   const filteredProjects = useMemo(() => {
//     return activeCategory === "All"
//       ? projects
//       : projects.filter((p) => p.category === activeCategory);
//   }, [activeCategory]);

//   return (
//     <>
//     <section id="portfolio" className="py-32 bg-zinc-50 relative">
//       <div className="container mx-auto px-6 relative z-10">
        
//         <div className="mb-24">
//           <MouseImageTrail
//             images={trailImages}
//             renderImageBuffer={50}
//             rotationRange={25}
//           >
//             <div className="bg-white rounded-[4rem] py-48 flex flex-col items-center justify-center border-4 border-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] group/card cursor-none">
//               <div className="flex flex-col items-center gap-8 px-6 text-center">
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   className="bg-gold-50 text-gold-600 px-6 py-2 rounded-full font-black text-xs uppercase tracking-[0.3em]"
//                 >
//                   Our Work
//                 </motion.div>
                
//                 <div className="flex items-center justify-center gap-6 text-zinc-900 group-hover/card:scale-110 transition-transform duration-700">
//                   <MousePointer2 size={60} className="text-gold-500 animate-float" strokeWidth={2.5} />
//                   <h3 className="text-5xl md:text-9xl font-display font-black leading-none tracking-tighter uppercase">
//                     Hover <span className="text-gold-500">Me</span>
//                   </h3>
//                 </div>
                
//                 <p className="max-w-xl text-zinc-400 font-bold uppercase tracking-[0.2em] text-sm md:text-lg leading-relaxed">
//                   Architecting digital masterpieces for global leaders
//                 </p>
//               </div>
//             </div>
//           </MouseImageTrail>
//         </div>

//         {/* <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
//           <MotionWrapper className="max-w-xl">
//             <h4 className="text-4xl font-display font-black text-zinc-900 tracking-tight">
//               Selected <span className="text-gold-500">Exhibits</span>
//             </h4>
//           </MotionWrapper>
          
//           <MotionWrapper direction="left">
//             <button className="group flex items-center gap-3 bg-zinc-900 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-gold-500 transition-all duration-500 shadow-xl shadow-zinc-200">
//               View All Projects
//               <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
//             </button>
//           </MotionWrapper>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           {projectss.map((project, idx) => (
//             <MotionWrapper key={idx} delay={idx * 0.15}>
//               <div className="group relative aspect-[16/10] overflow-hidden rounded-[4rem] shadow-2xl bg-zinc-200 border-[12px] border-white">
//                 <img 
//                   src={project.image} 
//                   alt={project.title} 
//                   className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-12 translate-y-4 group-hover:translate-y-0">
//                   <span className="text-gold-400 font-black text-xs uppercase tracking-[0.4em] mb-4">
//                     {project.category}
//                   </span>
//                   <h4 className="text-white text-4xl font-black uppercase tracking-tighter mb-4">
//                     {project.title}
//                   </h4>
//                   <div className="w-12 h-1 bg-gold-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
//                 </div>
//               </div>
//             </MotionWrapper>
//           ))}
//         </div> */}
//       </div>
//     </section>

//     <section className="bg-[#FDFDFF] relative min-h-screen">
//       <div className="container mx-auto px-6 pt-12 pb-10">
//         <div className="flex gap-2 mb-20 flex-wrap">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setActiveCategory(cat)}
//               className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest ${
//                 activeCategory === cat
//                   ? "bg-[#0f172a] text-white"
//                   : "text-slate-400"
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         <div className="relative pb-[25vh]">
//           {filteredProjects.map((project, idx) => (
//             <ProjectCard key={project.id} project={project} index={idx} />
//           ))}
//         </div>
//       </div>

//       <div className="bg-[#020617] py-10 text-white/40 text-xs uppercase tracking-widest">
//         <div className="container mx-auto px-6 flex gap-8">
//           <div className="flex items-center gap-2">
//             <Cpu size={16} /> Build 2024.0.1
//           </div>
//           <div className="flex items-center gap-2">
//             <ShieldCheck size={16} /> Security: Hardened
//           </div>
//           <div className="flex items-center gap-2">
//             <Activity size={16} /> Status: Nominal
//           </div>
//         </div>
//       </div>
//     </section>

//     </>
//   );
// };

// export default Portfolio;



// import React, { useRef, useState, useMemo } from 'react';
// import { motion,useAnimate, useScroll, useTransform } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import { ArrowUpRight, Cpu, Activity, ShieldCheck } from 'lucide-react';
// import MotionWrapper from './MotionWrapper.jsx';
// import { ExternalLink, MousePointer2 } from 'lucide-react';
// import {projects , graphicDesignImages , webDesignImages , digitalMarketingImages} from '../constants';

// import portfolioImage1 from '../assets/portfolio/portfolio-img1.png';
// import portfolioImage2 from '../assets/portfolio/portfolio-img2.png';
// import portfolioImage3 from '../assets/portfolio/portfolio-img3.png';
// import portfolioImage4 from '../assets/portfolio/portfolio-img4.png';
// import portfolioImage5 from '../assets/portfolio/portfolio-img5.png';
// import portfolioImage6 from '../assets/portfolio/portfolio-img6.png';
// import portfolioImage7 from '../assets/portfolio/portfolio-img7.png';
// import portfolioImage8 from '../assets/portfolio/portfolio-img8.png';
// import portfolioImage9 from '../assets/portfolio/portfolio-img9.png';

// const trailImages = [
//   portfolioImage1,
//   portfolioImage2,
//   portfolioImage3,
//   portfolioImage4,
//   portfolioImage5,
//   portfolioImage6,
//   portfolioImage7,
//   portfolioImage8,
//   portfolioImage9,
// ];
// const MouseImageTrail = ({
//   children,
//   images,
//   renderImageBuffer,
//   rotationRange,
// }) => {
//   const [scope, animate] = useAnimate();
//   const lastRenderPosition = useRef({ x: 0, y: 0 });
//   const imageRenderCount = useRef(0);

//   const calculateDistance = (x1, y1, x2, y2) => {
//     const deltaX = x2 - x1;
//     const deltaY = y2 - y1;
//     return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
//   };

//   const renderNextImage = () => {
//     const imageIndex = imageRenderCount.current % images.length;
//     const selector = `[data-mouse-move-index="${imageIndex}"]`;
//     const el = scope.current.querySelector(selector);

//     if (!el) return;

//     const rect = scope.current.getBoundingClientRect();
//     const x = lastRenderPosition.current.x - rect.left;
//     const y = lastRenderPosition.current.y - rect.top;

//     el.style.top = `${y}px`;
//     el.style.left = `${x}px`;
//     el.style.zIndex = imageRenderCount.current.toString();

//     const rotation = Math.random() * rotationRange;

//     animate(
//       selector,
//       {
//         opacity: [0, 1],
//         transform: [
//           `translate(-50%, -25%) scale(0.5) ${
//             imageIndex % 2 ? `rotate(${rotation}deg)` : `rotate(-${rotation}deg)`
//           }`,
//           `translate(-50%, -50%) scale(1) ${
//             imageIndex % 2 ? `rotate(-${rotation}deg)` : `rotate(${rotation}deg)`
//           }`,
//         ],
//       },
//       { type: "spring", damping: 15, stiffness: 200 }
//     );

//     animate(
//       selector,
//       { opacity: [1, 0] },
//       { ease: "linear", duration: 0.5, delay: 5 }
//     );

//     imageRenderCount.current = imageRenderCount.current + 1;
//   };

//   const handleMouseMove = (e) => {
//     const { clientX, clientY } = e;
//     const distance = calculateDistance(
//       clientX,
//       clientY,
//       lastRenderPosition.current.x,
//       lastRenderPosition.current.y
//     );

//     if (distance >= renderImageBuffer) {
//       lastRenderPosition.current.x = clientX;
//       lastRenderPosition.current.y = clientY;
//       renderNextImage();
//     }
//   };

//   return (
//     <div
//       ref={scope}
//       className="relative overflow-hidden w-full rounded-[4rem]"
//       onMouseMove={handleMouseMove}
//     >
//       {children}
//       {images.map((img, index) => (
//         <img
//           className="pointer-events-none absolute left-0 top-0 h-48 w-auto rounded-2xl border-2 border-gold-500 bg-neutral-900 shadow-2xl object-cover opacity-0 z-50 transform-gpu"
//           src={img}
//           alt={`Mouse move image ${index}`}
//           key={index}
//           data-mouse-move-index={index}
//         />
//       ))}
//     </div>
//   );
// };
// const categories = ["All", "Web Development", "Digital Marketing", "Graphic Design"];



// const ProjectCard = ({ project, index }) => {
//   const container = useRef(null);
//   const navigate = useNavigate();
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ['start end', 'start start']
//   });

//   const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

//   return (
//     <>
          
//        <div ref={container} className="h-screen flex items-center justify-center sticky top-0 px-0 md:px-0">
//       <motion.div 
//         style={{ scale, backgroundColor: project.color, top: `calc(-5vh + ${index * 30}px)` }}
//         className="relative h-[60vh] w-full max-w-full rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-2xl border border-white/10"
//       >
//         <div className="md:w-1/2 p-0 md:p-8 flex flex-col justify-between text-white z-10">
//           <div>
//             <div className="flex items-center gap-4 mb-6">
//               <span className="text-[10px] font-mono font-bold text-white/40 tracking-[0.4em]">{project.id}</span>
//               <div className="h-[1px] w-8 bg-white/20" />
//               <span className="text-[10px] font-bold text-[#89E0F0] uppercase tracking-[0.3em]">{project.category}</span>
//             </div>
            
//             <h3 className="text-2xl md:text-4xl font-display font-bold leading-[0.9] tracking-tighter mb-6">
//               {project.title}
//             </h3>
            
//             <p className="text-sm md:text-md text-white/60 font-light leading-relaxed mb-8 max-w-md">
//               {project.description}
//             </p>

//             <div className="flex flex-wrap gap-3">
//               {project.tech.map(t => (
//                 <span key={t} className="px-4 py-1.5 rounded-full border border-white/10 text-[9px] font-bold text-white/40 uppercase tracking-widest bg-white/5">
//                   {t}
//                 </span>
//               ))}
//             </div>
//           </div>

//           <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mt-8">
//             <div className="flex items-center gap-4">
//               <div className="w-px h-12 bg-white/10" />
//               <div>
//                 <p className="text-[6px] font-bold text-white/30 uppercase tracking-widest mb-1">Impact Metric</p>
//                 <p className="text-2xl font-mono font-bold text-white">{project.kpi}</p>
//               </div>
//             </div>
            
//             <button 
//               onClick={() => navigate('/contact')}
//               className="group flex items-center gap-4 bg-white px-8 py-4 rounded-full text-[#0f172a] transition-all hover:pr-12 active:scale-95"
//             >
//               <span className="text-[8px] font-bold uppercase tracking-widest">Case Study</span>
//               <div className="w-6 h-6 rounded-full bg-[#0f172a] text-white flex items-center justify-center group-hover:rotate-45 transition-transform">
//                 <ArrowUpRight size={18} />
//               </div>
//             </button>
//           </div>
//         </div>

//         <div className="md:w-1/2 relative h-1/2 md:h-full overflow-hidden">
//           <motion.img 
//             src={project.image} 
//             className="w-full h-full object-cover grayscale-[0] hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" 
//             alt={project.title}
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent md:block hidden" />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
          
//           <div className="absolute bottom-10 right-10 hidden lg:block rotate-90 origin-bottom-right">
//              <span className="text-[11px] font-mono font-bold text-white/20 tracking-[1em] uppercase">{project.client}</span>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//     </>
   
//   );
// };

// const Portfolio = () => {
//   const [activeCategory, setActiveCategory] = useState("All");
//   const navigate = useNavigate();

//   const filteredProjects = useMemo(() => {
//     return activeCategory === "All" 
//       ? projects 
//       : projects.filter(p => p.category === activeCategory);
//   }, [activeCategory]);

//   return (
//     <>
//       <section id="portfolio" className="py-32 bg-zinc-50 relative">
//         <div className="container mx-auto px-6 relative z-10">
          
//           <div className="mb-24">
//             <MouseImageTrail
//               images={trailImages}
//               renderImageBuffer={50}
//               rotationRange={25}
//             >
//               <div className="bg-white rounded-[4rem] py-48 flex flex-col items-center justify-center border-4 border-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] group/card cursor-none">
//                 <div className="flex flex-col items-center gap-8 px-6 text-center">
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     className="bg-gold-50 text-gold-600 px-6 py-2 rounded-full font-black text-xs uppercase tracking-[0.3em]"
//                   >
//                     Our Work
//                   </motion.div>
                  
//                   <div className="flex items-center justify-center gap-6 text-zinc-900 group-hover/card:scale-110 transition-transform duration-700">
//                     <MousePointer2 size={60} className="text-gold-500 animate-float" strokeWidth={2.5} />
//                     <h3 className="text-5xl md:text-9xl font-display font-black leading-none tracking-tighter uppercase">
//                       Hover <span className="text-gold-500">Me</span>
//                     </h3>
//                   </div>
                  
//                   <p className="max-w-xl text-zinc-400 font-bold uppercase tracking-[0.2em] text-sm md:text-lg leading-relaxed">
//                     Architecting digital masterpieces for global leaders
//                   </p>
//                 </div>
//               </div>
//             </MouseImageTrail>
//           </div>
//         </div>
//       </section>


//     <section id="portfolio" className="bg-[#FDFDFF] relative min-h-screen">
      // <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0 overflow-hidden">
      //   <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      //     <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
      //       <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#0f172a" strokeWidth="0.5" />
      //       <circle cx="40" cy="40" r="1" fill="#0f172a" />
      //     </pattern>
      //     <rect width="100%" height="100%" fill="url(#grid)" />
      //   </svg>
      // </div>

      // <div className="container mx-auto px-6 lg:px-16 pt-32 pb-20 relative z-10">
      //   <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-32">
      //     <MotionWrapper direction="right">
      //       <div className="max-w-3xl">
      //         <div className="flex items-center gap-4 mb-10">
      //           <div className="w-12 h-[2px] bg-[#FF7B54]" />
      //           <span className="text-[12px] font-mono font-bold text-[#FF7B54] uppercase tracking-[0.5em]">The Exhibit</span>
      //         </div>
      //         <h2 className="text-2xl md:text-[6rem] font-display font-bold text-[#0f172a] leading-[0.75] tracking-tighter uppercase">
      //           Proven <br />
      //           <span className="italic pt-4 font-light text-slate-300">Tactics.</span>
      //         </h2>
      //       </div>
      //     </MotionWrapper>

      //     <MotionWrapper direction="left">
      //       <div className="flex flex-col items-end">
      //          <div className="flex flex-wrap gap-2 bg-white/80 backdrop-blur-3xl p-2 rounded-full border border-slate-100 shadow-xl mb-6">
      //           {categories.map((cat) => (
      //             <button
      //               key={cat}
      //               onClick={() => setActiveCategory(cat)}
      //               className={`px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
      //                 activeCategory === cat 
      //                   ? 'bg-[#0f172a] text-white shadow-lg' 
      //                   : 'text-slate-400 hover:text-[#0f172a]'
      //               }`}
      //             >
      //               {cat}
      //             </button>
      //           ))}
      //         </div>
      //         <p className="text-right text-slate-400 font-light max-w-xs text-sm">
      //           Strategic capabilities delivered across core digital domains for enterprise growth and visual excellence.
      //         </p>
      //       </div>
      //     </MotionWrapper>
      //   </div>

      //   <div className="relative pb-[10vh]">
      //     {filteredProjects.map((project, idx) => (
      //       <ProjectCard 
      //         key={project.id} 
      //         project={project} 
      //         index={idx} 
      //       />
      //     ))}
      //   </div>


//          {/* Here i want to Showcase Grid the image based on the categorie */}
//           {/* Showcase Grid Based on Category */}
//             {/* Showcase Grid */}





//         <div className="mt-40 border-t border-slate-100 pt-32">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
//             <MotionWrapper direction="right">
//               <h3 className="text-4xl md:text-6xl font-display font-bold text-[#0f172a] tracking-tighter leading-tight">
//                 Architecting the <br /> 
//                 <span className="text-[#FF7B54]">Exceptional.</span>
//               </h3>
//             </MotionWrapper>
            
//             <MotionWrapper direction="left">
//               <div className="flex flex-col items-start gap-10">
//                 <p className="text-xl text-slate-500 font-light leading-relaxed max-w-lg">
//                   Whether through high-performance web engineering, strategic digital marketing, or world-class graphic identity, we define the standard.
//                 </p>
//                 <button 
//                   onClick={() => navigate('/contact')}
//                   className="group relative bg-[#0f172a] px-12 py-8 rounded-full overflow-hidden transition-all hover:shadow-[0_40px_80px_-20px_rgba(15,23,42,0.3)] active:scale-95"
//                 >
//                   <span className="relative z-10 text-white font-bold uppercase tracking-[0.4em] text-[11px]">Initiate Partnership</span>
//                   <div className="absolute inset-0 bg-[#1e293b] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
//                 </button>
//               </div>
//             </MotionWrapper>
//           </div>
//         </div>
//       </div>

//       <div className="bg-[#020617] py-20 overflow-hidden relative group">
//         <div className="absolute inset-0 bg-[#FF7B54]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
//         <div className="container mx-auto px-6 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
//           <div className="flex flex-wrap items-center gap-10">
//             <div className="flex items-center gap-4">
//               <Cpu size={20} className="text-[#89E0F0]" />
//               <span className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-widest">Build 2024.0.2</span>
//             </div>
//             <div className="flex items-center gap-4">
//               <ShieldCheck size={20} className="text-emerald-400" />
//               <span className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-widest">Security: Hardened</span>
//             </div>
//             <div className="flex items-center gap-4">
//               <Activity size={20} className="text-[#FF7B54]" />
//               <span className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-widest">Status: Nominal</span>
//             </div>
//           </div>
//           <p className="text-white/20 text-[9px] font-bold uppercase tracking-[0.8em]">Architectural Integrity Guaranteed</p>
//         </div>
//       </div>
//     </section>
//     </>
//   );
// };

// export default Portfolio;


// import React, { useRef, useState, useMemo } from 'react';
// import { motion, useAnimate, useScroll, useTransform } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import { ArrowUpRight, Cpu, Activity, ShieldCheck, MousePointer2 } from 'lucide-react';
// import MotionWrapper from './MotionWrapper.jsx';
// import { projects, graphicDesignImages, webDesignImages, digitalMarketingImages } from '../constants';

// import portfolioImage1 from '../assets/portfolio/portfolio-img1.png';
// import portfolioImage2 from '../assets/portfolio/portfolio-img2.png';
// import portfolioImage3 from '../assets/portfolio/portfolio-img3.png';
// import portfolioImage4 from '../assets/portfolio/portfolio-img4.png';
// import portfolioImage5 from '../assets/portfolio/portfolio-img5.png';
// import portfolioImage6 from '../assets/portfolio/portfolio-img6.png';
// import portfolioImage7 from '../assets/portfolio/portfolio-img7.png';
// import portfolioImage8 from '../assets/portfolio/portfolio-img8.png';
// import portfolioImage9 from '../assets/portfolio/portfolio-img9.png';

// const trailImages = [
//   portfolioImage1,
//   portfolioImage2,
//   portfolioImage3,
//   portfolioImage4,
//   portfolioImage5,
//   portfolioImage6,
//   portfolioImage7,
//   portfolioImage8,
//   portfolioImage9,
// ];

// const categories = ["All", "Web Development", "Digital Marketing", "Graphic Design"];

// /* ================= Mouse Image Trail ================= */

// const MouseImageTrail = ({ children, images, renderImageBuffer, rotationRange }) => {
//   const [scope, animate] = useAnimate();
//   const lastRenderPosition = useRef({ x: 0, y: 0 });
//   const imageRenderCount = useRef(0);

//   const calculateDistance = (x1, y1, x2, y2) => {
//     const dx = x2 - x1;
//     const dy = y2 - y1;
//     return Math.sqrt(dx * dx + dy * dy);
//   };

//   const renderNextImage = () => {
//     const imageIndex = imageRenderCount.current % images.length;
//     const selector = `[data-mouse-move-index="${imageIndex}"]`;
//     const el = scope.current.querySelector(selector);
//     if (!el) return;

//     const rect = scope.current.getBoundingClientRect();
//     const x = lastRenderPosition.current.x - rect.left;
//     const y = lastRenderPosition.current.y - rect.top;

//     el.style.top = `${y}px`;
//     el.style.left = `${x}px`;
//     el.style.zIndex = imageRenderCount.current.toString();

//     const rotation = Math.random() * rotationRange;

//     animate(selector, {
//       opacity: [0, 1],
//       transform: [
//         `translate(-50%, -25%) scale(0.5) rotate(${rotation}deg)`,
//         `translate(-50%, -50%) scale(1) rotate(-${rotation}deg)`
//       ]
//     }, { type: "spring", damping: 15, stiffness: 200 });

//     animate(selector, { opacity: [1, 0] }, { duration: 0.5, delay: 5 });

//     imageRenderCount.current++;
//   };

//   const handleMouseMove = (e) => {
//     const { clientX, clientY } = e;
//     const distance = calculateDistance(
//       clientX,
//       clientY,
//       lastRenderPosition.current.x,
//       lastRenderPosition.current.y
//     );

//     if (distance >= renderImageBuffer) {
//       lastRenderPosition.current = { x: clientX, y: clientY };
//       renderNextImage();
//     }
//   };

//   return (
//     <div ref={scope} onMouseMove={handleMouseMove} className="relative overflow-hidden w-full rounded-[4rem]">
//       {children}
//       {images.map((img, index) => (
//         <img
//           key={index}
//           src={img}
//           data-mouse-move-index={index}
//           className="pointer-events-none absolute h-48 rounded-2xl border-2 border-gold-500 shadow-2xl object-cover opacity-0 z-50"
//           alt=""
//         />
//       ))}
//     </div>
//   );
// };

// /* ================= Project Card ================= */


// const ProjectCard = ({ project, index }) => {
//   const container = useRef(null);
//   const navigate = useNavigate();
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ['start end', 'start start']
//   });

//   const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

//   return (
//     <>
          
//        <div ref={container} className="h-screen flex items-center justify-center sticky top-0 px-0 md:px-0">
//       <motion.div 
//         style={{ scale, backgroundColor: project.color, top: `calc(-5vh + ${index * 30}px)` }}
//         className="relative h-[60vh] w-full max-w-full rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-2xl border border-white/10"
//       >
//         <div className="md:w-1/2 p-0 md:p-8 flex flex-col justify-between text-white z-10">
//           <div>
//             <div className="flex items-center gap-4 mb-6">
//               <span className="text-[10px] font-mono font-bold text-white/40 tracking-[0.4em]">{project.id}</span>
//               <div className="h-[1px] w-8 bg-white/20" />
//               <span className="text-[10px] font-bold text-[#89E0F0] uppercase tracking-[0.3em]">{project.category}</span>
//             </div>
            
//             <h3 className="text-2xl md:text-4xl font-display font-bold leading-[0.9] tracking-tighter mb-6">
//               {project.title}
//             </h3>
            
//             <p className="text-sm md:text-md text-white/60 font-light leading-relaxed mb-8 max-w-md">
//               {project.description}
//             </p>

//             <div className="flex flex-wrap gap-3">
//               {project.tech.map(t => (
//                 <span key={t} className="px-4 py-1.5 rounded-full border border-white/10 text-[9px] font-bold text-white/40 uppercase tracking-widest bg-white/5">
//                   {t}
//                 </span>
//               ))}
//             </div>
//           </div>

//           <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mt-8">
//             <div className="flex items-center gap-4">
//               <div className="w-px h-12 bg-white/10" />
//               <div>
//                 <p className="text-[6px] font-bold text-white/30 uppercase tracking-widest mb-1">Impact Metric</p>
//                 <p className="text-2xl font-mono font-bold text-white">{project.kpi}</p>
//               </div>
//             </div>
            
//             <button 
//               onClick={() => navigate('/contact')}
//               className="group flex items-center gap-4 bg-white px-8 py-4 rounded-full text-[#0f172a] transition-all hover:pr-12 active:scale-95"
//             >
//               <span className="text-[8px] font-bold uppercase tracking-widest">Case Study</span>
//               <div className="w-6 h-6 rounded-full bg-[#0f172a] text-white flex items-center justify-center group-hover:rotate-45 transition-transform">
//                 <ArrowUpRight size={18} />
//               </div>
//             </button>
//           </div>
//         </div>

//         <div className="md:w-1/2 relative h-1/2 md:h-full overflow-hidden">
//           <motion.img 
//             src={project.image} 
//             className="w-full h-full object-cover grayscale-[0] hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" 
//             alt={project.title}
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent md:block hidden" />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
          
//           <div className="absolute bottom-10 right-10 hidden lg:block rotate-90 origin-bottom-right">
//              <span className="text-[11px] font-mono font-bold text-white/20 tracking-[1em] uppercase">{project.client}</span>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//     </>
   
//   );
// };
// /* ================= Portfolio Component ================= */

// const Portfolio = () => {
//   const [activeCategory, setActiveCategory] = useState("All");
//   const navigate = useNavigate();

//   const filteredProjects = useMemo(() => {
//     return activeCategory === "All"
//       ? projects
//       : projects.filter(p => p.category === activeCategory);
//   }, [activeCategory]);

//   const categoryImagesMap = {
//     "Graphic Design": graphicDesignImages,
//     "Web Development": webDesignImages,
//     "Digital Marketing": digitalMarketingImages,
//   };

//   const showcaseImages = useMemo(() => {
//     if (activeCategory === "All") {
//       return [
//         ...graphicDesignImages,
//         ...webDesignImages,
//         ...digitalMarketingImages,
//       ];
//     }
//     return categoryImagesMap[activeCategory] || [];
//   }, [activeCategory]);

//   return (
//     <>
//       {/* Hero Section */}
//       <section className="py-32 bg-zinc-50">
//         <div className="container mx-auto px-6">
//           <MouseImageTrail images={trailImages} renderImageBuffer={50} rotationRange={25}>
//             <div className="bg-white rounded-[4rem] py-48 flex items-center justify-center shadow-xl">
//               <h3 className="text-6xl font-black uppercase">
//                 Hover <span className="text-gold-500">Me</span>
//               </h3>
//             </div>
//           </MouseImageTrail>
//         </div>
//       </section>

//       {/* Projects + Grid */}
//       <section className="bg-[#FDFDFF] py-32">
//              <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0 overflow-hidden">
//         <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//           <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
//             <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#0f172a" strokeWidth="0.5" />
//             <circle cx="40" cy="40" r="1" fill="#0f172a" />
//           </pattern>
//           <rect width="100%" height="100%" fill="url(#grid)" />
//         </svg>
//       </div>

//       <div className="container mx-auto px-6 lg:px-16 pt-32 pb-20 relative z-10">
//         <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-32">
//           <MotionWrapper direction="right">
//             <div className="max-w-3xl">
//               <div className="flex items-center gap-4 mb-10">
//                 <div className="w-12 h-[2px] bg-[#FF7B54]" />
//                 <span className="text-[12px] font-mono font-bold text-[#FF7B54] uppercase tracking-[0.5em]">The Exhibit</span>
//               </div>
//               <h2 className="text-2xl md:text-[6rem] font-display font-bold text-[#0f172a] leading-[0.75] tracking-tighter uppercase">
//                 Proven <br />
//                 <span className="italic pt-4 font-light text-slate-300">Tactics.</span>
//               </h2>
//             </div>
//           </MotionWrapper>

//           <MotionWrapper direction="left">
//             <div className="flex flex-col items-end">
//                <div className="flex flex-wrap gap-2 bg-white/80 backdrop-blur-3xl p-2 rounded-full border border-slate-100 shadow-xl mb-6">
//                 {categories.map((cat) => (
//                   <button
//                     key={cat}
//                     onClick={() => setActiveCategory(cat)}
//                     className={`px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
//                       activeCategory === cat 
//                         ? 'bg-[#0f172a] text-white shadow-lg' 
//                         : 'text-slate-400 hover:text-[#0f172a]'
//                     }`}
//                   >
//                     {cat}
//                   </button>
//                 ))}
//               </div>
//               <p className="text-right text-slate-400 font-light max-w-xs text-sm">
//                 Strategic capabilities delivered across core digital domains for enterprise growth and visual excellence.
//               </p>
//             </div>
//           </MotionWrapper>
//         </div>

//         <div className="relative pb-[10vh]">
//           {filteredProjects.map((project, idx) => (
//             <ProjectCard 
//               key={project.id} 
//               project={project} 
//               index={idx} 
//             />
//           ))}
//         </div>

//           {/* Showcase Grid */}
//           <div className="mt-40 border-t pt-20">
//             <h3 className="text-5xl font-bold mb-16">
//               Visual Showcase — {activeCategory}
//             </h3>

//             <motion.div
//               key={activeCategory}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.4 }}
//               className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[220px] gap-6"
//             >
//               {showcaseImages.map((img, index) => (
//                 <div
//                   key={index}
//                   className={`relative overflow-hidden rounded-3xl ${
//                     index % 7 === 0
//                       ? "col-span-2 row-span-2"
//                       : index % 5 === 0
//                       ? "row-span-2"
//                       : ""
//                   }`}
//                 >
//                   <img
//                     src={img}
//                     className="w-full h-full object-cover hover:scale-110 transition duration-700"
//                     alt=""
//                   />
//                 </div>
//               ))}
//             </motion.div>
//           </div>

//         </div>
//       </section>
//     </>
//   );
// };

// export default Portfolio;


// import React, { useRef, useState, useMemo } from 'react';
// import { motion, AnimatePresence, useAnimate, useScroll, useTransform } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import { ArrowUpRight } from 'lucide-react';
// import MotionWrapper from './MotionWrapper.jsx';

// import portfolioImage1 from '../assets/portfolio/portfolio-img1.png';
// import portfolioImage2 from '../assets/portfolio/portfolio-img2.png';
// import portfolioImage3 from '../assets/portfolio/portfolio-img3.png';
// import portfolioImage4 from '../assets/portfolio/portfolio-img4.png';
// import portfolioImage5 from '../assets/portfolio/portfolio-img5.png';
// import portfolioImage6 from '../assets/portfolio/portfolio-img6.png';
// import portfolioImage7 from '../assets/portfolio/portfolio-img7.png';
// import portfolioImage8 from '../assets/portfolio/portfolio-img8.png';
// import portfolioImage9 from '../assets/portfolio/portfolio-img9.png';
// const projects = [
// { 
//   id: "WEB-001",
//   index: "01",
//   client: "CheRaVaNa",
//   title: "Nature to Nutrition Platform", 
//   category: "Web Development", 
//   color: "#2E5E3B",
//   image: WebProject1,
//   description: "Built a modern full-stack e-commerce platform for CheRaVaNa, enabling seamless product browsing, secure checkout, and efficient inventory management.",
//   kpi: "Sales Growth: +30%",
//   tech: ["React.js", "Tailwind CSS"]
// }
// ,
//   { 
//     id: "MKT-002",
//     index: "02",
//     client: "VELOCITY NEURAL",
//     title: "Predictive Growth Engine", 
//     category: "Digital Marketing", 
//     color: "#1e293b",
//     image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1600",
//     description: "A centralized marketing intelligence platform forecasting market trends with 98% accuracy to optimize ad-spend ROI.",
//     kpi: "Conversion: +156%",
//     tech: ["BigQuery", "Looker", "Python", "AI-Predict"]
//   },
//  {
//   "id": "DES-003",
//   "index": "03",
//   "client": "AURA DESIGN LAB",
//   "title": "Real Estate Poster Design",
//   "category": "Graphic Design",
//   "color": "#a53d3dff",
//   "image": portfolioImage1,
//   "description": "A bold promotional poster crafted to highlight residential plot value through clean typography, 3D compositing, and aspirational lifestyle visuals—designed for strong visual impact across digital and print.",
//   "kpi": "Engagement: +89%",
//   "tech": ["Figma", "Photoshop", "After Effects"]
// }

// ,
//   {
//   "id": "WEB-004",
//   "index": "04",
//   "client": "Defence Habitat Housing Co-Operative Society",
//   "title": "Real Estate Landing Page",
//   "category": "Web Development",
//   "color": "#232f65ff",
//   "image": WebProject2,
//   "description": "A modern responsive landing page built to showcase residential layouts, drive enquiries, and capture leads through a fast and clean user experience.",
//   "kpi": "Performance: Optimized UX & Lead Capture",
//   "tech": ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"]
// }
// ,
//   { 
//     id: "MKT-005",
//     index: "05",
//     client: "LUMINA RETAIL",
//     title: "Omni-Channel Strategy", 
//     category: "Digital Marketing", 
//     color: "#0f172a",
//     image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1600",
//     description: "Unified digital strategy synchronizing online inventory with physical retail signals across 4,000 global locations.",
//     kpi: "Revenue: +214%",
//     tech: ["Meta Ads", "Google Ads", "Hubspot", "GA4"]
//   },
//   {
//   "id": "WEB-006",
//   "index": "06",
//   "client": "Rajavruksha",
//   "title": "Real Estate Website",
//   "category": "Web Development",
//   "color": "#7e7530ff",
//   "image": portfolioImage10,
//   "description": "High-performance real estate website built for speed, responsiveness, and lead conversion.",
//   "kpi": "UX: Optimized Engagement",
//   "tech": ["Next.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"]
// }
// ,
//   {
//   "id": "DES-007",
//   "index": "07",
//   "client": "MLG",
//   "title": "Promotional Poster Design",
//   "category": "Graphic Design",
//   "color": "#553336ff",
//   "image": portfolioImage11,
//   "description": "Premium promotional poster crafted to elevate brand presence and capture attention with bold visuals and clear messaging.",
//   "kpi": "Engagement: Increased Visibility",
//   "tech": ["Figma", "Photoshop"]
// }
// ,
//   { 
//     id: "MKT-008",
//     index: "08",
//     client: "CARBON ZERO",
//     title: "Sustainability Data Story", 
//     category: "Digital Marketing", 
//     color: "#020617",
//     image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1600",
//     description: "Data-driven campaign optimization for renewable energy initiatives, focusing on consumer behavioral shifts.",
//     kpi: "CPA: -35%",
//     tech: ["Storytelling", "SEO/SEM", "Tableau", "Segment"]
//   }
// ];

// const graphicDesignImages = [
//   {
//     id: 1,
//     title: "CheRaVaNa",
//     category: "Graphic Design",
//     image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
//   },
//   {
//     id: 2,
//     title: "Lumina Brand Identity",
//     category: "Graphic Design",
//     image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800",
//   },
//   {
//     id: 3,
//     title: "Solaris Marketing Campaign",
//     category: "Graphic Design",
//     image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
//   },
// ];

// const webDesignImages = [
//   {
//     id: 1,
//     title: "CheRaVaNa",
//     category: "Web Design",
//     image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
//   },
//   {
//     id: 2,
//     title: "Lumina Brand Identity",
//     category: "Web Design",
//     image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800",
//   },
//   {
//     id: 3,
//     title: "Solaris Marketing Campaign",
//     category: "Web Design",
//     image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
//   },
// ];

// const digitalMarketingImages = [
//   {
//     id: 1,
//     title: "CheRaVaNa",
//     category: "Digital Marketing",
//     image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
//   },
//   {
//     id: 2,
//     title: "Lumina Brand Identity",
//     category: "Digital Marketing",
//     image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800",
//   },
//   {
//     id: 3,
//     title: "Solaris Marketing Campaign",
//     category: "Digital Marketing",
//     image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
//   },
// ];

// const trailImages = [
//   portfolioImage1,
//   portfolioImage2,
//   portfolioImage3,
//   portfolioImage4,
//   portfolioImage5,
//   portfolioImage6,
//   portfolioImage7,
//   portfolioImage8,
//   portfolioImage9,
// ];

// const categories = ["All", "Web Development", "Digital Marketing", "Graphic Design"];

// /* ================= Mouse Image Trail ================= */
// const MouseImageTrail = ({ children, images, renderImageBuffer, rotationRange }) => {
//   const [scope, animate] = useAnimate();
//   const lastRenderPosition = useRef({ x: 0, y: 0 });
//   const imageRenderCount = useRef(0);

//   const calculateDistance = (x1, y1, x2, y2) => {
//     const dx = x2 - x1;
//     const dy = y2 - y1;
//     return Math.sqrt(dx * dx + dy * dy);
//   };

//   const renderNextImage = () => {
//     const imageIndex = imageRenderCount.current % images.length;
//     const selector = `[data-mouse-move-index="${imageIndex}"]`;
//     const el = scope.current.querySelector(selector);
//     if (!el) return;

//     const rect = scope.current.getBoundingClientRect();
//     const x = lastRenderPosition.current.x - rect.left;
//     const y = lastRenderPosition.current.y - rect.top;

//     el.style.top = `${y}px`;
//     el.style.left = `${x}px`;
//     el.style.zIndex = imageRenderCount.current.toString();

//     const rotation = Math.random() * rotationRange;

//     animate(selector, {
//       opacity: [0, 1],
//       transform: [
//         `translate(-50%, -25%) scale(0.5) rotate(${rotation}deg)`,
//         `translate(-50%, -50%) scale(1) rotate(-${rotation}deg)`
//       ]
//     }, { type: "spring", damping: 15, stiffness: 200 });

//     animate(selector, { opacity: [1, 0] }, { duration: 0.5, delay: 5 });

//     imageRenderCount.current++;
//   };

//   const handleMouseMove = (e) => {
//     const { clientX, clientY } = e;
//     const distance = calculateDistance(
//       clientX,
//       clientY,
//       lastRenderPosition.current.x,
//       lastRenderPosition.current.y
//     );

//     if (distance >= renderImageBuffer) {
//       lastRenderPosition.current = { x: clientX, y: clientY };
//       renderNextImage();
//     }
//   };

//   return (
//     <div ref={scope} onMouseMove={handleMouseMove} className="relative overflow-hidden w-full rounded-[4rem]">
//       {children}
//       {images.map((img, index) => (
//         <img
//           key={index}
//           src={img}
//           data-mouse-move-index={index}
//           className="pointer-events-none absolute h-48 rounded-2xl border-2 border-gold-500 shadow-2xl object-cover opacity-0 z-50"
//           alt=""
//         />
//       ))}
//     </div>
//   );
// };

// /* ================= Project Card ================= */
// const ProjectCard = ({ project, index }) => {
//   const container = useRef(null);
//   const navigate = useNavigate();
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ['start end', 'start start']
//   });

//   const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

//   return (
//     <div ref={container} className="h-screen flex items-center justify-center sticky top-0 px-0 md:px-0">
//       <motion.div 
//         style={{ scale, backgroundColor: project.color, top: `calc(-5vh + ${index * 30}px)` }}
//         className="relative h-[60vh] w-full max-w-full rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-2xl border border-white/10"
//       >
//         <div className="md:w-1/2 p-0 md:p-8 flex flex-col justify-between text-white z-10">
//           <div>
//             <div className="flex items-center gap-4 mb-6">
//               <span className="text-[10px] font-mono font-bold text-white/40 tracking-[0.4em]">{project.id}</span>
//               <div className="h-[1px] w-8 bg-white/20" />
//               <span className="text-[10px] font-bold text-[#89E0F0] uppercase tracking-[0.3em]">{project.category}</span>
//             </div>
            
//             <h3 className="text-2xl md:text-4xl font-display font-bold leading-[0.9] tracking-tighter mb-6">
//               {project.title}
//             </h3>
            
//             <p className="text-sm md:text-md text-white/60 font-light leading-relaxed mb-8 max-w-md">
//               {project.description}
//             </p>

//             <div className="flex flex-wrap gap-3">
//               {project.tech.map(t => (
//                 <span key={t} className="px-4 py-1.5 rounded-full border border-white/10 text-[9px] font-bold text-white/40 uppercase tracking-widest bg-white/5">
//                   {t}
//                 </span>
//               ))}
//             </div>
//           </div>

//           <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mt-8">
//             <div className="flex items-center gap-4">
//               <div className="w-px h-12 bg-white/10" />
//               <div>
//                 <p className="text-[6px] font-bold text-white/30 uppercase tracking-widest mb-1">Impact Metric</p>
//                 <p className="text-2xl font-mono font-bold text-white">{project.kpi}</p>
//               </div>
//             </div>
            
//             <button 
//               onClick={() => navigate('/contact')}
//               className="group flex items-center gap-4 bg-white px-8 py-4 rounded-full text-[#0f172a] transition-all hover:pr-12 active:scale-95"
//             >
//               <span className="text-[8px] font-bold uppercase tracking-widest">Case Study</span>
//               <div className="w-6 h-6 rounded-full bg-[#0f172a] text-white flex items-center justify-center group-hover:rotate-45 transition-transform">
//                 <ArrowUpRight size={18} />
//               </div>
//             </button>
//           </div>
//         </div>

//         <div className="md:w-1/2 relative h-1/2 md:h-full overflow-hidden">
//           <motion.img 
//             src={project.image} 
//             className="w-full h-full object-cover grayscale-[0] hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" 
//             alt={project.title}
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent md:block hidden" />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
          
//           <div className="absolute bottom-10 right-10 hidden lg:block rotate-90 origin-bottom-right">
//              <span className="text-[11px] font-mono font-bold text-white/20 tracking-[1em] uppercase">{project.client}</span>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// /* ================= Portfolio Component ================= */
// const Portfolio = () => {
//   const [activeCategory, setActiveCategory] = useState("All");
//   const navigate = useNavigate();

//   const filteredProjects = useMemo(() => {
//     return activeCategory === "All"
//       ? projects
//       : projects.filter(p => p.category === activeCategory);
//   }, [activeCategory]);

//   const categoryImagesMap = {
//     "Graphic Design": graphicDesignImages,
//     "Web Development": webDesignImages,
//     "Digital Marketing": digitalMarketingImages,
//   };

//   const showcaseImages = useMemo(() => {
//     if (activeCategory === "All") {
//       return [
//         ...graphicDesignImages,
//         ...webDesignImages,
//         ...digitalMarketingImages,
//       ];
//     }
//     return categoryImagesMap[activeCategory] || [];
//   }, [activeCategory]);

//   return (
//     <>
//       {/* Hero Section */}
//       <section className="py-32 bg-zinc-50">
//         <div className="container mx-auto px-6">
//           <MouseImageTrail images={trailImages} renderImageBuffer={50} rotationRange={25}>
//             <div className="bg-white rounded-[4rem] py-48 flex items-center justify-center shadow-xl">
//               <h3 className="text-6xl font-black uppercase">
//                 Hover <span className="text-gold-500">Me</span>
//               </h3>
//             </div>
//           </MouseImageTrail>
//         </div>
//       </section>

//       {/* Projects + Grid */}
//       <section className="bg-[#FDFDFF] py-32">
//         <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0 overflow-hidden">
//           <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//             <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
//               <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#0f172a" strokeWidth="0.5" />
//               <circle cx="40" cy="40" r="1" fill="#0f172a" />
//             </pattern>
//             <rect width="100%" height="100%" fill="url(#grid)" />
//           </svg>
//         </div>

//         <div className="container mx-auto px-6 lg:px-16 pt-32 pb-20 relative z-10">
//           <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-32">
//             <MotionWrapper direction="right">
//               <div className="max-w-3xl">
//                 <div className="flex items-center gap-4 mb-10">
//                   <div className="w-12 h-[2px] bg-[#FF7B54]" />
//                   <span className="text-[12px] font-mono font-bold text-[#FF7B54] uppercase tracking-[0.5em]">The Exhibit</span>
//                 </div>
//                 <h2 className="text-2xl md:text-[6rem] font-display font-bold text-[#0f172a] leading-[0.75] tracking-tighter uppercase">
//                   Proven <br />
//                   <span className="italic pt-4 font-light text-slate-300">Tactics.</span>
//                 </h2>
//               </div>
//             </MotionWrapper>

//             <MotionWrapper direction="left">
//               <div className="flex flex-col items-end">
//                 <div className="flex flex-wrap gap-2 bg-white/80 backdrop-blur-3xl p-2 rounded-full border border-slate-100 shadow-xl mb-6">
//                   {categories.map((cat) => (
//                     <button
//                       key={cat}
//                       onClick={() => setActiveCategory(cat)}
//                       className={`px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
//                         activeCategory === cat 
//                           ? 'bg-[#0f172a] text-white shadow-lg' 
//                           : 'text-slate-400 hover:text-[#0f172a]'
//                       }`}
//                     >
//                       {cat}
//                     </button>
//                   ))}
//                 </div>
//                 <p className="text-right text-slate-400 font-light max-w-xs text-sm">
//                   Strategic capabilities delivered across core digital domains for enterprise growth and visual excellence.
//                 </p>
//               </div>
//             </MotionWrapper>
//           </div>

//           <div className="relative pb-[10vh]">
//             {filteredProjects.map((project, idx) => (
//               <ProjectCard 
//                 key={project.id} 
//                 project={project} 
//                 index={idx} 
//               />
//             ))}
//           </div>

//           {/* Showcase Grid */}
//           <div className="mt-40 border-t pt-20">
//             <h3 className="text-5xl font-bold mb-16">
//               Visual Showcase — {activeCategory}
//             </h3>

//             <motion.div
//               key={activeCategory}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.4 }}
//               className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[220px] gap-6"
//             >
//               <AnimatePresence>
//                 {showcaseImages.map((img, index) => (
//                   <motion.div
//                     key={img}
//                     layout
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     exit={{ opacity: 0, scale: 0.8 }}
//                     transition={{ duration: 0.5 }}
//                     className={`relative overflow-hidden rounded-3xl ${
//                       index % 7 === 0
//                         ? "col-span-2 row-span-2"
//                         : index % 5 === 0
//                         ? "row-span-2"
//                         : ""
//                     }`}
//                   >
//                     <img
//                       src={img}
//                       className="w-full h-full object-cover hover:scale-110 transition duration-700"
//                       alt=""
//                     />
//                   </motion.div>
//                 ))}
//               </AnimatePresence>
//             </motion.div>
//           </div>

//         </div>
//       </section>
//     </>
//   );
// };

// export default Portfolio;


// import React, { useRef, useState, useMemo } from 'react';
// import { motion, AnimatePresence, useAnimate, useScroll, useTransform } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import { ArrowUpRight } from 'lucide-react';
// import MotionWrapper from './MotionWrapper.jsx';

// import portfolioImage1 from '../assets/portfolio/portfolio-img1.png';
// import portfolioImage2 from '../assets/portfolio/portfolio-img2.png';
// import portfolioImage3 from '../assets/portfolio/portfolio-img3.png';
// import portfolioImage4 from '../assets/portfolio/portfolio-img4.png';
// import portfolioImage5 from '../assets/portfolio/portfolio-img5.png';
// import portfolioImage6 from '../assets/portfolio/portfolio-img6.png';
// import portfolioImage7 from '../assets/portfolio/portfolio-img7.png';
// import portfolioImage8 from '../assets/portfolio/portfolio-img8.png';
// import portfolioImage9 from '../assets/portfolio/portfolio-img9.png';
// import portfolioImage10 from '../assets/portfolio/portfolio-img10.png';
// import portfolioImage11 from '../assets/portfolio/portfolio-img11.jpeg';

// import WebProject1 from '../assets/portfolio/WebProject1.png';
// import WebProject2 from '../assets/portfolio/WebProject2.png';


// // Use your full projects list here
// const projects = [
//   { 
//     id: "WEB-001",
//     index: "01",
//     client: "CheRaVaNa",
//     title: "Nature to Nutrition Platform", 
//     category: "Web Development", 
//     color: "#2E5E3B",
//     image: WebProject1,
//     description: "Built a modern full-stack e-commerce platform for CheRaVaNa, enabling seamless product browsing, secure checkout, and efficient inventory management.",
//     kpi: "Sales Growth: +30%",
//     tech: ["React.js", "Tailwind CSS"]
//   },
//   { 
//     id: "MKT-002",
//     index: "02",
//     client: "VELOCITY NEURAL",
//     title: "Predictive Growth Engine", 
//     category: "Digital Marketing", 
//     color: "#1e293b",
//     image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1600",
//     description: "A centralized marketing intelligence platform forecasting market trends with 98% accuracy to optimize ad-spend ROI.",
//     kpi: "Conversion: +156%",
//     tech: ["BigQuery", "Looker", "Python", "AI-Predict"]
//   },
//   {
//     id: "DES-003",
//     index: "03",
//     client: "AURA DESIGN LAB",
//     title: "Real Estate Poster Design",
//     category: "Graphic Design",
//     color: "#a53d3dff",
//     image: portfolioImage1,
//     description: "A bold promotional poster crafted to highlight residential plot value through clean typography, 3D compositing, and aspirational lifestyle visuals—designed for strong visual impact across digital and print.",
//     kpi: "Engagement: +89%",
//     tech: ["Figma", "Photoshop", "After Effects"]
//   },
//   {
//     id: "WEB-004",
//     index: "04",
//     client: "Defence Habitat Housing Co-Operative Society",
//     title: "Real Estate Landing Page",
//     category: "Web Development",
//     color: "#232f65ff",
//     image: WebProject2,
//     description: "A modern responsive landing page built to showcase residential layouts, drive enquiries, and capture leads through a fast and clean user experience.",
//     kpi: "Performance: Optimized UX & Lead Capture",
//     tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"]
//   },
//   { 
//     id: "MKT-005",
//     index: "05",
//     client: "LUMINA RETAIL",
//     title: "Omni-Channel Strategy", 
//     category: "Digital Marketing", 
//     color: "#0f172a",
//     image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1600",
//     description: "Unified digital strategy synchronizing online inventory with physical retail signals across 4,000 global locations.",
//     kpi: "Revenue: +214%",
//     tech: ["Meta Ads", "Google Ads", "Hubspot", "GA4"]
//   },
//   {
//     id: "WEB-006",
//     index: "06",
//     client: "Rajavruksha",
//     title: "Real Estate Website",
//     category: "Web Development",
//     color: "#7e7530ff",
//     image: portfolioImage10,
//     description: "High-performance real estate website built for speed, responsiveness, and lead conversion.",
//     kpi: "UX: Optimized Engagement",
//     tech: ["Next.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"]
//   },
//   {
//     id: "DES-007",
//     index: "07",
//     client: "MLG",
//     title: "Promotional Poster Design",
//     category: "Graphic Design",
//     color: "#553336ff",
//     image: portfolioImage11,
//     description: "Premium promotional poster crafted to elevate brand presence and capture attention with bold visuals and clear messaging.",
//     kpi: "Engagement: Increased Visibility",
//     tech: ["Figma", "Photoshop"]
//   },
//   { 
//     id: "MKT-008",
//     index: "08",
//     client: "CARBON ZERO",
//     title: "Sustainability Data Story", 
//     category: "Digital Marketing", 
//     color: "#020617",
//     image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1600",
//     description: "Data-driven campaign optimization for renewable energy initiatives, focusing on consumer behavioral shifts.",
//     kpi: "CPA: -35%",
//     tech: ["Storytelling", "SEO/SEM", "Tableau", "Segment"]
//   }
// ];

// // Map projects to gallery images
// const graphicDesignImages = projects
//   .filter(p => p.category === "Graphic Design")
//   .map(p => ({ id: p.id, title: p.title, category: p.category, image: p.image }));

// const webDesignImages = projects
//   .filter(p => p.category === "Web Development")
//   .map(p => ({ id: p.id, title: p.title, category: p.category, image: p.image }));

// const digitalMarketingImages = projects
//   .filter(p => p.category === "Digital Marketing")
//   .map(p => ({ id: p.id, title: p.title, category: p.category, image: p.image }));

// const trailImages = [
//   portfolioImage1,
//   portfolioImage2,
//   portfolioImage3,
//   portfolioImage4,
//   portfolioImage5,
//   portfolioImage6,
//   portfolioImage7,
//   portfolioImage8,
//   portfolioImage9,
// ];

// const categories = ["All", "Web Development", "Digital Marketing", "Graphic Design"];

// // === MouseImageTrail and ProjectCard components remain the same ===

// // ================= Portfolio Component =================
// const Portfolio = () => {
//   const [activeCategory, setActiveCategory] = useState("All");

//   const filteredProjects = useMemo(() => {
//     return activeCategory === "All"
//       ? projects
//       : projects.filter(p => p.category === activeCategory);
//   }, [activeCategory]);

//   const categoryImagesMap = {
//     "Graphic Design": graphicDesignImages,
//     "Web Development": webDesignImages,
//     "Digital Marketing": digitalMarketingImages,
//   };

//   const showcaseImages = useMemo(() => {
//     if (activeCategory === "All") {
//       return [
//         ...graphicDesignImages,
//         ...webDesignImages,
//         ...digitalMarketingImages,
//       ];
//     }
//     return categoryImagesMap[activeCategory] || [];
//   }, [activeCategory]);

//   return (
//     <>
//       {/* Hero Section */}
//       <section className="py-32 bg-zinc-50">
//         <div className="container mx-auto px-6">
//           <MouseImageTrail images={trailImages} renderImageBuffer={50} rotationRange={25}>
//             <div className="bg-white rounded-[4rem] py-48 flex items-center justify-center shadow-xl">
//               <h3 className="text-6xl font-black uppercase">
//                 Hover <span className="text-gold-500">Me</span>
//               </h3>
//             </div>
//           </MouseImageTrail>
//         </div>
//       </section>

//       {/* Projects + Gallery */}
//       <section className="bg-[#FDFDFF] py-32 relative">
//         <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0 overflow-hidden">
//           <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//             <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
//               <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#0f172a" strokeWidth="0.5" />
//               <circle cx="40" cy="40" r="1" fill="#0f172a" />
//             </pattern>
//             <rect width="100%" height="100%" fill="url(#grid)" />
//           </svg>
//         </div>

//         <div className="container mx-auto px-6 lg:px-16 relative z-10">
//           {/* Header + Categories */}
//           <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-32">
//             <MotionWrapper direction="right">
//               <div className="max-w-3xl">
//                 <div className="flex items-center gap-4 mb-10">
//                   <div className="w-12 h-[2px] bg-[#FF7B54]" />
//                   <span className="text-[12px] font-mono font-bold text-[#FF7B54] uppercase tracking-[0.5em]">The Exhibit</span>
//                 </div>
//                 <h2 className="text-2xl md:text-[6rem] font-display font-bold text-[#0f172a] leading-[0.75] tracking-tighter uppercase">
//                   Proven <br />
//                   <span className="italic pt-4 font-light text-slate-300">Tactics.</span>
//                 </h2>
//               </div>
//             </MotionWrapper>

//             <MotionWrapper direction="left">
//               <div className="flex flex-col items-end">
//                 <div className="flex flex-wrap gap-2 bg-white/80 backdrop-blur-3xl p-2 rounded-full border border-slate-100 shadow-xl mb-6">
//                   {categories.map((cat) => (
//                     <button
//                       key={cat}
//                       onClick={() => setActiveCategory(cat)}
//                       className={`px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
//                         activeCategory === cat 
//                           ? 'bg-[#0f172a] text-white shadow-lg' 
//                           : 'text-slate-400 hover:text-[#0f172a]'
//                       }`}
//                     >
//                       {cat}
//                     </button>
//                   ))}
//                 </div>
//                 <p className="text-right text-slate-400 font-light max-w-xs text-sm">
//                   Strategic capabilities delivered across core digital domains for enterprise growth and visual excellence.
//                 </p>
//               </div>
//             </MotionWrapper>
//           </div>

//           {/* Project Cards */}
//           <div className="relative pb-[10vh]">
//             {filteredProjects.map((project, idx) => (
//               <ProjectCard 
//                 key={project.id} 
//                 project={project} 
//                 index={idx} 
//               />
//             ))}
//           </div>

//           {/* Gallery Grid */}
//           <div className="mt-40 border-t pt-20">
//             <h3 className="text-5xl font-bold mb-16">
//               Visual Showcase — {activeCategory}
//             </h3>

//             <motion.div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[220px] gap-6">
//               <AnimatePresence>
//                 {showcaseImages.map(imgObj => (
//                   <motion.div
//                     key={imgObj.id}
//                     layout
//                     initial={{ opacity:0, scale:0.8 }}
//                     animate={{ opacity:1, scale:1 }}
//                     exit={{ opacity:0, scale:0.8 }}
//                     transition={{ duration:0.5 }}
//                     className="relative overflow-hidden rounded-3xl"
//                   >
//                     <img src={imgObj.image} alt={imgObj.title} className="w-full h-full object-cover hover:scale-110 transition duration-700" />
//                   </motion.div>
//                 ))}
//               </AnimatePresence>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Portfolio;


import React, { useRef, useState, useMemo } from 'react';
import { motion, AnimatePresence, useAnimate, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import MotionWrapper from './MotionWrapper.jsx';
import { projects, webDesignImages, graphicDesignImages,digitalMarketingImages } from '../constants.jsx';

import portfolioImage1 from '../assets/portfolio/portfolio-img1.png';
import portfolioImage2 from '../assets/portfolio/portfolio-img2.png';
import portfolioImage3 from '../assets/portfolio/portfolio-img3.png';
import portfolioImage4 from '../assets/portfolio/portfolio-img4.png';
import portfolioImage5 from '../assets/portfolio/portfolio-img5.png';
import portfolioImage6 from '../assets/portfolio/portfolio-img6.png';
import portfolioImage7 from '../assets/portfolio/portfolio-img7.png';
import portfolioImage8 from '../assets/portfolio/portfolio-img8.png';
import portfolioImage9 from '../assets/portfolio/portfolio-img9.png';
import portfolioImage11 from '../assets/portfolio/portfolio-img11.jpeg';

import WebProject1 from '../assets/portfolio/WebProject1.png';
import WebProject2 from '../assets/portfolio/WebProject2.png';


import portfolioImage10 from '../assets/portfolio/portfolio-img10.png';
// import portfolioImage11 from '../assets/portfolio/portfolio-img11.png';

// =================== Data ===================
// const projects = [
//   { 
//     id: "WEB-001",
//     index: "01",
//     client: "CheRaVaNa",
//     title: "Nature to Nutrition Platform", 
//     category: "Web Development", 
//     color: "#2E5E3B",
//     image: WebProject1,
//     description: "Built a modern full-stack e-commerce platform for CheRaVaNa, enabling seamless product browsing, secure checkout, and efficient inventory management.",
//     kpi: "Sales Growth: +30%",
//     tech: ["React.js", "Tailwind CSS"]
//   },
//   { 
//     id: "MKT-002",
//     index: "02",
//     client: "VELOCITY NEURAL",
//     title: "Predictive Growth Engine", 
//     category: "Digital Marketing", 
//     color: "#1e293b",
//     image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1600",
//     description: "A centralized marketing intelligence platform forecasting market trends with 98% accuracy to optimize ad-spend ROI.",
//     kpi: "Conversion: +156%",
//     tech: ["BigQuery", "Looker", "Python", "AI-Predict"]
//   },
//   {
//     id: "DES-003",
//     index: "03",
//     client: "AURA DESIGN LAB",
//     title: "Real Estate Poster Design",
//     category: "Graphic Design",
//     color: "#a53d3dff",
//     image: portfolioImage1,
//     description: "A bold promotional poster crafted to highlight residential plot value through clean typography, 3D compositing, and aspirational lifestyle visuals—designed for strong visual impact across digital and print.",
//     kpi: "Engagement: +89%",
//     tech: ["Figma", "Photoshop", "After Effects"]
//   },
//   {
//     id: "WEB-004",
//     index: "04",
//     client: "Defence Habitat Housing Co-Operative Society",
//     title: "Real Estate Landing Page",
//     category: "Web Development",
//     color: "#232f65ff",
//     image: WebProject2,
//     description: "A modern responsive landing page built to showcase residential layouts, drive enquiries, and capture leads through a fast and clean user experience.",
//     kpi: "Performance: Optimized UX & Lead Capture",
//     tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"]
//   },
//   { 
//     id: "MKT-005",
//     index: "05",
//     client: "LUMINA RETAIL",
//     title: "Omni-Channel Strategy", 
//     category: "Digital Marketing", 
//     color: "#0f172a",
//     image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1600",
//     description: "Unified digital strategy synchronizing online inventory with physical retail signals across 4,000 global locations.",
//     kpi: "Revenue: +214%",
//     tech: ["Meta Ads", "Google Ads", "Hubspot", "GA4"]
//   },
//   {
//     id: "WEB-006",
//     index: "06",
//     client: "Rajavruksha",
//     title: "Real Estate Website",
//     category: "Web Development",
//     color: "#7e7530ff",
//     image: portfolioImage10,
//     description: "High-performance real estate website built for speed, responsiveness, and lead conversion.",
//     kpi: "UX: Optimized Engagement",
//     tech: ["Next.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"]
//   },
//   {
//     id: "DES-007",
//     index: "07",
//     client: "MLG",
//     title: "Promotional Poster Design",
//     category: "Graphic Design",
//     color: "#553336ff",
//     image: portfolioImage11,
//     description: "Premium promotional poster crafted to elevate brand presence and capture attention with bold visuals and clear messaging.",
//     kpi: "Engagement: Increased Visibility",
//     tech: ["Figma", "Photoshop"]
//   },
//   { 
//     id: "MKT-008",
//     index: "08",
//     client: "CARBON ZERO",
//     title: "Sustainability Data Story", 
//     category: "Digital Marketing", 
//     color: "#020617",
//     image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1600",
//     description: "Data-driven campaign optimization for renewable energy initiatives, focusing on consumer behavioral shifts.",
//     kpi: "CPA: -35%",
//     tech: ["Storytelling", "SEO/SEM", "Tableau", "Segment"]
//   }
// ];

// const graphicDesignImages = [
//   { id: 1, title: "CheRaVaNa", category: "Graphic Design", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800" },
//   { id: 2, title: "Lumina Brand Identity", category: "Graphic Design", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800" },
//   { id: 3, title: "Solaris Marketing Campaign", category: "Graphic Design", image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800" },
// ];

// const webDesignImages = [
//   { id: 1, title: "CheRaVaNa", category: "Web Design", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800" },
//   { id: 2, title: "Lumina Brand Identity", category: "Web Design", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800" },
//   { id: 3, title: "Solaris Marketing Campaign", category: "Web Design", image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800" },
// ];

// const digitalMarketingImages = [
//   { id: 1, title: "CheRaVaNa", category: "Digital Marketing", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800" },
//   { id: 2, title: "Lumina Brand Identity", category: "Digital Marketing", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800" },
//   { id: 3, title: "Solaris Marketing Campaign", category: "Digital Marketing", image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800" },
// ];

const trailImages = [
  portfolioImage1,
  portfolioImage2,
  portfolioImage3,
  portfolioImage4,
  portfolioImage5,
  portfolioImage6,
  portfolioImage7,
  portfolioImage8,
  portfolioImage9,
];

const categories = ["All", "Web Development", "Digital Marketing", "Graphic Design"];

// =================== MouseImageTrail ===================
const MouseImageTrail = ({ children, images, renderImageBuffer, rotationRange }) => {
  const [scope, animate] = useAnimate();
  const lastRenderPosition = useRef({ x: 0, y: 0 });
  const imageRenderCount = useRef(0);

  const calculateDistance = (x1, y1, x2, y2) => {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.sqrt(dx*dx + dy*dy);
  };

  const renderNextImage = () => {
    const imageIndex = imageRenderCount.current % images.length;
    const selector = `[data-mouse-move-index="${imageIndex}"]`;
    const el = scope.current.querySelector(selector);
    if (!el) return;

    const rect = scope.current.getBoundingClientRect();
    const x = lastRenderPosition.current.x - rect.left;
    const y = lastRenderPosition.current.y - rect.top;

    el.style.top = `${y}px`;
    el.style.left = `${x}px`;
    el.style.zIndex = imageRenderCount.current.toString();

    const rotation = Math.random() * rotationRange;

    animate(selector, {
      opacity: [0,1],
      transform: [
        `translate(-50%, -25%) scale(0.5) rotate(${rotation}deg)`,
        `translate(-50%, -50%) scale(1) rotate(-${rotation}deg)`
      ]
    }, { type: "spring", damping: 15, stiffness: 200 });

    animate(selector, { opacity: [1,0] }, { duration: 0.5, delay: 5 });
    imageRenderCount.current++;
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const distance = calculateDistance(
      clientX, clientY,
      lastRenderPosition.current.x, lastRenderPosition.current.y
    );
    if(distance >= renderImageBuffer){
      lastRenderPosition.current = { x: clientX, y: clientY };
      renderNextImage();
    }
  };

  return (
    <div ref={scope} onMouseMove={handleMouseMove} className="relative overflow-hidden w-full rounded-[4rem]">
      {children}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          data-mouse-move-index={index}
          className="pointer-events-none absolute h-48 rounded-2xl border-2 border-gold-500 shadow-2xl object-cover opacity-0 z-50"
          alt=""
        />
      ))}
    </div>
  );
};

// =================== ProjectCard ===================
const ProjectCard = ({ project, index }) => {
  const container = useRef(null);
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end','start start']
  });
  const scale = useTransform(scrollYProgress,[0,1],[0.8,1]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0 px-0 md:px-0">
      <motion.div style={{ scale, backgroundColor: project.color, top:`calc(-5vh + ${index*30}px)` }} className="relative h-[60vh] w-full max-w-full rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-2xl border border-white/10">
        <div className="md:w-1/2 p-4 md:p-8 flex flex-col justify-between text-white z-10">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[10px] font-mono font-bold text-white/40 tracking-[0.4em]">{project.id}</span>
              <div className="h-[1px] w-8 bg-white/20"/>
              <span className="text-[10px] font-bold text-[#89E0F0] uppercase tracking-[0.3em]">{project.category}</span>
            </div>
            <h3 className="text-2xl sm:text-xl md:text-4xl font-display font-bold leading-[0.9] tracking-tighter mb-6">{project.title}</h3>
            <p className="text-sm md:text-md text-white/60 font-light leading-relaxed mb-8 max-w-md">{project.description}</p>
            <div className="flex flex-wrap gap-3">
              {project.tech.map(t => (
                <span key={t} className="px-4 py-1.5 rounded-full border border-white/10 text-[9px] font-bold text-white/40 uppercase tracking-widest bg-white/5">{t}</span>
              ))}
            </div>
          </div>
          {/* <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mt-8">
            <div className="flex items-center gap-4">
              <div className="w-px h-12 bg-white/10"/>
              <div>
                <p className="text-[6px] font-bold text-white/30 uppercase tracking-widest mb-1">Impact Metric</p>
                <p className="text-2xl font-mono font-bold text-white">{project.kpi}</p>
              </div>
            </div>
            <button onClick={()=>navigate('/contact')} className="group flex items-center gap-4 bg-white px-8 py-4 rounded-full text-[#0f172a] transition-all hover:pr-12 active:scale-95">
              <span className="text-[8px] font-bold uppercase tracking-widest">Case Study</span>
              <div className="w-6 h-6 rounded-full bg-[#0f172a] text-white flex items-center justify-center group-hover:rotate-45 transition-transform">
                <ArrowUpRight size={18}/>
              </div>
            </button>
          </div> */}
        </div>

        <div className="md:w-1/2 relative h-1/2 md:h-full overflow-hidden">
          <motion.img src={project.image} className="w-full h-full object-cover grayscale-[0] hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" alt={project.title}/>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent md:block hidden"/>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden"/>
          <div className="absolute bottom-10 right-10 hidden lg:block rotate-90 origin-bottom-right">
            <span className="text-[11px] font-mono font-bold text-white/20 tracking-[1em] uppercase">{project.client}</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// =================== Portfolio ===================
const Portfolio = () => {
  const [activeCategory,setActiveCategory] = useState("All");
  const navigate = useNavigate();

  const filteredProjects = useMemo(()=>{
    return activeCategory==="All"? projects : projects.filter(p=>p.category===activeCategory);
  },[activeCategory]);

  const categoryImagesMap = {
    "Graphic Design": graphicDesignImages,
    "Web Development": webDesignImages,
    "Digital Marketing": digitalMarketingImages,
  };

  const showcaseImages = useMemo(()=>{
    if(activeCategory==="All"){
      return [...graphicDesignImages,...webDesignImages,...digitalMarketingImages];
    }
    return categoryImagesMap[activeCategory]||[];
  },[activeCategory]);

  return (
    <>
      {/* Hero */}
      <section className="py-32 bg-zinc-50">
        <div className="container mx-auto px-6">
          <MouseImageTrail images={trailImages} renderImageBuffer={50} rotationRange={25}>
            <div className="bg-white rounded-[4rem] py-48 flex items-center justify-center shadow-xl">
              <h3 className="text-6xl font-black uppercase">Hover <span className="text-gold-500">Me</span></h3>
            </div>
          </MouseImageTrail>
        </div>
      </section>

      {/* Projects + Gallery */}
      <section className="bg-[#FDFDFF] py-32">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0 overflow-hidden">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M80 0 L0 0 0 80" fill="none" stroke="#0f172a" strokeWidth="0.5"/>
              <circle cx="40" cy="40" r="1" fill="#0f172a"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)"/>
          </svg>
        </div>

        <div className="container mx-auto px-6 lg:px-16 pt-32 pb-20 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-32">
            <MotionWrapper direction="right">
              <div className="max-w-3xl">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-[2px] bg-[#FF7B54]"/>
                  <span className="text-[12px] font-mono font-bold text-[#FF7B54] uppercase tracking-[0.5em]">The Exhibit</span>
                </div>
                <h2 className="text-2xl md:text-[6rem] font-display font-bold text-[#0f172a] leading-[0.75] tracking-tighter uppercase">
                  Proven <br />
                  <span className="italic pt-4 font-light text-slate-300">Tactics.</span>
                </h2>
              </div>
            </MotionWrapper>

            <MotionWrapper direction="left">
              <div className="flex flex-col items-end">
                <div className="flex flex-wrap gap-2 bg-white/80 backdrop-blur-3xl p-2 rounded-full border border-slate-100 shadow-xl mb-6">
                  {categories.map(cat=>(
                    <button key={cat} onClick={()=>setActiveCategory(cat)}
                      className={`px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                        activeCategory===cat? 'bg-[#0f172a] text-white shadow-lg':'text-slate-400 hover:text-[#0f172a]'
                      }`}>
                      {cat}
                    </button>
                  ))}
                </div>
                <p className="text-right text-slate-400 font-light max-w-xs text-sm">
                  Strategic capabilities delivered across core digital domains for enterprise growth and visual excellence.
                </p>
              </div>
            </MotionWrapper>
          </div>

          <div className="relative pb-[10vh]">
            {filteredProjects.map((project,idx)=>(
              <ProjectCard key={project.id} project={project} index={idx}/>
            ))}
          </div>

          {/* Showcase Grid */}
          {/* <div className="mt-40 border-t pt-20">
            <h3 className="text-5xl font-bold mb-16"><span className="text-gold-500">V</span>isual <span className="text-gold-500">S</span>howcase — <span className="text-gold-500"> {activeCategory}</span> </h3>
            <motion.div key={activeCategory} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.4}}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[220px] gap-2">
              <AnimatePresence>
                {showcaseImages.map((img,index)=>(
                  // <motion.div key={img.image||img} layout initial={{opacity:0,scale:0.8}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:0.8}} transition={{duration:0.5}}
                  //   className={`relative overflow-hidden rounded-2xl ${
                  //     index%7===0? "col-span-2 row-span-2": index%5===0? "row-span-2":""
                  //   }`}>
                  //  <img 
                  //     src={img.image || img} 
                  //     className="w-full h-full object-contain object-center hover:scale-110 transition duration-700" 
                  //     alt="" 
                  //   />  
                  // </motion.div>
                  <motion.div
  key={img.image || img}
  layout
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.8 }}
  transition={{ duration: 0.5 }}
  className={`relative rounded-2xl ${
    index % 7 === 0
      ? "col-span-2 row-span-2"
      : index % 5 === 0
      ? "row-span-2"
      : ""
  }`}
>
  <img
    src={img.image || img}
    className="w-full h-auto object-contain object-center transition duration-700"
    alt=""
  />
</motion.div>

                ))}
              </AnimatePresence>
            </motion.div>
          </div> */}
          <div className="mt-40 border-t pt-20">
  <h3 className="text-3xl font-semibold mb-10">
    Visual Showcase — 
    <span className="text-gold-500"> {activeCategory}</span>
  </h3>

  <motion.div
    key={activeCategory}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.4 }}
    className="columns-2 sm:columns-3 lg:columns-4 gap-4"
  >
    <AnimatePresence>
      {showcaseImages.map((img, index) => (
        <motion.div
          key={img.image || img}
          layout
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.4 }}
          className="mb-4 break-inside-avoid rounded-2xl overflow-hidden"
        >
          <img
            src={img.image || img}
            className="w-full h-auto object-contain transition duration-500 hover:scale-105"
            alt=""
          />
        </motion.div>
      ))}
    </AnimatePresence>
  </motion.div>
</div>

          {/* CTA Section */}
          <div className="mt-40 border-t border-slate-100 pt-32">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <MotionWrapper direction="right">
               <h3 className="text-4xl md:text-6xl font-display font-bold text-[#0f172a] tracking-tighter leading-tight">
                 Architecting the <br /> 
                 <span className="text-[#FF7B54]">Exceptional.</span>
               </h3>
             </MotionWrapper>
            
             <MotionWrapper direction="left">
               <div className="flex flex-col items-start gap-10">
                 <p className="text-xl text-slate-500 font-light leading-relaxed max-w-lg">
                   Whether through high-performance web engineering, strategic digital marketing, or world-class graphic identity, we define the standard.
                 </p>
                 <button 
                  onClick={() => navigate('/contact')}
                  className="group relative bg-[#0f172a] px-10 py-8 rounded-full overflow-hidden transition-all hover:shadow-[0_40px_80px_-20px_rgba(15,23,42,0.3)] active:scale-95"
                >
                  <span className="relative z-10 text-white font-bold uppercase tracking-[0.4em] text-[11px]">Initiate Partnership</span>
                  <div className="absolute inset-0 bg-[#1e293b] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </button>
              </div>
            </MotionWrapper>
          </div>
        </div>
      
        </div>
      </section>
    </>
  );
};

export default Portfolio;
