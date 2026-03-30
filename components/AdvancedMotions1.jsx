
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import gsap from 'gsap';
import Lottie from 'lottie-react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import stategy from '../assets/lottie/strategy.json';
import design from '../assets/lottie/design.json';
import code from '../assets/lottie/code.json';
import growth from '../assets/lottie/growth.json';

// Replace these with your chosen Lottie JSON URLs or local imports
const strategyAnimation = stategy // ← find real URL
const designAnimation = design
const codeAnimation = code
const growthAnimation = growth

gsap.registerPlugin(ScrollTrigger);

export const HighlightScrub = () => {
  const textRef = useRef(null);
  const sentence = "We don't just follow trends. We define the digital architecture that powers the next generation of industry leaders through precise execution and artistic mastery.";

  useEffect(() => {
    if (!textRef.current) return;
    const words = textRef.current.querySelectorAll('.word');

    gsap.fromTo(words,
      { opacity: 0.1, y: 15 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "bottom 30%",
          scrub: true,
        }
      }
    );
  }, []);

  return (
    <div className="py-9 bg-zinc-650 flex items-center justify-center px-6">
      <div className="max-w-5xl">
        <p ref={textRef} className="text-xl md:text-4xl font-display font-extrabold text-black leading-[1.1] tracking-tight">
          {sentence.split(" ").map((word, i) => (
            <span key={i} className="word inline-block mr-[0.3em] transition-colors hover:text-gold-500 duration-300">
              {word}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

// export const ExplodingAssembly = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     if (!containerRef.current) return;
//     const items = containerRef.current.querySelectorAll('.assemble-item');

//     items.forEach((item, i) => {
//       const xSign = i % 2 === 0 ? -1 : 1;
//       const ySign = i < 2 ? -1 : 1;

//       gsap.fromTo(item, 
//         { 
//           x: 400 * xSign, 
//           y: 400 * ySign, 
//           opacity: 0, 
//           rotate: 45 * xSign 
//         },
//         {
//           x: 0,
//           y: 0,
//           opacity: 1,
//           rotate: 0,
//           scrollTrigger: {
//             trigger: containerRef.current,
//             start: "top 90%",
//             end: "top 30%",
//             scrub: 1.5,
//           }
//         }
//       );
//     });
//   }, []);

//   return (
//     <div className="py-40 bg-slate-50 overflow-hidden">
//       <div className="container mx-auto px-6">
//         <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {[
//             { title: "Strategy", icon: "🎯" },
//             { title: "Design", icon: "🎨" },
//             { title: "Code", icon: "💻" },
//             { title: "Growth", icon: "🚀" }
//           ].map((item, i) => (
//             <div key={i} className="assemble-item bg-white p-12 rounded-[2.5rem] shadow-xl border border-slate-100 flex flex-col items-center text-center">
//               <span className="text-6xl mb-6">{item.icon}</span>
//               <h4 className="text-2xl font-bold text-slate-900">{item.title}</h4>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export const ExplodingAssembly = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     if (!containerRef.current) return;

//     const items = containerRef.current.querySelectorAll(".assemble-item");

//     items.forEach((item, i) => {
//       const xSign = i % 2 === 0 ? -1 : 1;
//       const ySign = i < 2 ? -1 : 1;

//       gsap.fromTo(
//         item,
//         {
//           x: 400 * xSign,
//           y: 400 * ySign,
//           opacity: 0,
//           rotate: 45 * xSign,
//         },
//         {
//           x: 0,
//           y: 0,
//           opacity: 1,
//           rotate: 0,
//           scrollTrigger: {
//             trigger: containerRef.current,
//             start: "top 90%",
//             end: "top 30%",
//             scrub: 1.5,
//           },
//         }
//       );
//     });
//   }, []);

//   const cards = [
//     { title: "Strategy", animation: strategyAnimation },
//     { title: "Design", animation: designAnimation },
//     { title: "Code", animation: codeAnimation },
//     { title: "Growth", animation: growthAnimation },
//   ];

//   return (
//     <div className="py-40 bg-transparent overflow-hidden">
//       <div className="container bg-transparent mx-auto px-0">
//         <div
//           ref={containerRef}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
//         >
//           {cards.map((item, i) => (
//             <div
//               key={i}
//               className="assemble-item bg-transparent p-0  flex flex-col items-center text-center"
//             >
//               <div className="w-52 h-52 mb-3">
//                 <Lottie
//                   animationData={item.animation}
//                   loop
//                   autoplay
//                 />
//               </div>

//               <h4 className="text-2xl font-bold text-gold-500">
//                 {item.title}
//               </h4>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };


export const ExplodingAssembly = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll(".assemble-item");
    const texts = container.querySelectorAll(".assemble-text");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=200%",
        scrub: true,
        pin: true,
      },
    });

    // STEP 1 – Lottie cards explode in
    items.forEach((item, i) => {
      const xSign = i % 2 === 0 ? -1 : 1;
      const ySign = i < 2 ? -1 : 1;

      tl.fromTo(
        item,
        {
          x: 400 * xSign,
          y: 400 * ySign,
          opacity: 0,
          rotate: 45 * xSign,
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          rotate: 0,
          duration: 1,
        },
        0
      );
    });

    // STEP 2 – Text opacity increase ONLY (no movement)
    tl.fromTo(
      texts,
      { opacity: 0 },
      {
        opacity: 1,
        stagger: 0.2,
        duration: 1,
      },
      1 // starts after lottie settles
    );

    return () => ScrollTrigger.killAll();
  }, []);

  const cards = [
    { title: "Strategy", animation: strategyAnimation },
    { title: "Design", animation: designAnimation },
    { title: "Code", animation: codeAnimation },
    { title: "Growth", animation: growthAnimation },
  ];

  return (
    <div className="bg-transparent overflow-hidden">
      <div className="container mx-auto px-0">
        <div
          ref={containerRef}
          className="min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center"
        >
          {cards.map((item, i) => (
            <div
              key={i}
              className="assemble-item flex flex-col items-center text-center"
            >
              <div className="w-52 h-52 mb-3">
                <Lottie animationData={item.animation} loop autoplay />
              </div>

              <h4 className="assemble-text text-2xl font-bold text-gold-500 opacity-0">
                {item.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


// export const ExplodingAssembly = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     if (!containerRef.current) return;
//     const items = containerRef.current.querySelectorAll('.assemble-item');

//     items.forEach((item, i) => {
//       const xSign = i % 2 === 0 ? -1 : 1;
//       const ySign = i < 2 ? -1 : 1;

//       gsap.fromTo(
//         item,
//         {
//           x: 400 * xSign,
//           y: 400 * ySign,
//           opacity: 0,
//           rotate: 45 * xSign,
//         },
//         {
//           x: 0,
//           y: 0,
//           opacity: 1,
//           rotate: 0,
//           scrollTrigger: {
//             trigger: containerRef.current,
//             start: 'top 90%',
//             end: 'top 30%',
//             scrub: 1.5,
//           },
//         }
//       );
//     });
//   }, []);

//   const animations = [
//     { title: 'Strategy', src: strategyAnimation },
//     { title: 'Design',   src: designAnimation },
//     { title: 'Code',     src: codeAnimation },
//     { title: 'Growth',   src: growthAnimation },
//   ];

//   return (
//     <div className="py-40 bg-slate-50 overflow-hidden dark:bg-slate-900">
//       <div className="container mx-auto px-6">
//         <div
//           ref={containerRef}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
//         >
//           {animations.map((item, i) => (
//             <div
//               key={i}
//               className="assemble-item bg-white dark:bg-slate-800 p-12 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center transition-transform hover:scale-105"
//             >
//               <div className="w-32 h-32 mb-6">
//                 <Lottie
//                   animationData={item.src}  // or use src={item.src} if using URL directly (some versions support it)
//                   loop={true}
//                   autoplay={true}
//                   style={{ width: '100%', height: '100%' }}
//                 />
//               </div>
//               <h4 className="text-2xl font-bold text-slate-900 dark:text-white">
//                 {item.title}
//               </h4>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
export const FixedTextMask = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <div className="h-[100vh] bg-brand-600 flex items-center justify-center overflow-hidden relative">
      <motion.h2
        style={{ x }}
        className="text-[30vw] font-black text-white/10 whitespace-nowrap pointer-events-none select-none"
      >
        DIGITAL ELITE DIGITAL ELITE DIGITAL ELITE
      </motion.h2>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-3xl text-center px-6">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="bg-white p-16 rounded-[4rem] shadow-[0_50px_100px_rgba(0,0,0,0.1)]"
          >
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Built to Last</h3>
            <p className="text-slate-600 text-lg leading-relaxed">Our foundations are rooted in permanent value, not fleeting hype. We construct digital legacies that remain fixed while the world moves around them.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ExplodingAssembly;
