
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const HighlightScrub = () => {
  const textRef = useRef(null);
  const sentence = "We define the digital architecture that powers next-generation industry leaders through precise execution and artistic mastery.";

  useEffect(() => {
    if (!textRef.current) return;
    const words = textRef.current.querySelectorAll('.word');
    
    gsap.fromTo(words, 
      { opacity: 0.2, y: 10 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 1,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
          end: "bottom 40%",
          scrub: 1,
        }
      }
    );
  }, []);

  return (
    <div className="py-10 bg-white flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        <p ref={textRef} className="text-2xl md:text-4xl font-display font-bold text-zinc-900 leading-snug tracking-tight">
          {sentence.split(" ").map((word, i) => (
            <span key={i} className="word inline-block mr-[0.3em] transition-colors hover:text-gold-600">
              {word}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

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
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="bg-white p-12 md:p-16 rounded-[3rem] shadow-2xl border border-white/10"
          >
            <h3 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6 tracking-tight">
              Engineered for 
              <span className="relative inline-block px-8">
                <span className="text-gold-500">Impact</span>
                <svg
                  viewBox="0 0 286 73"
                  fill="none"
                  className="absolute -left-2 -right-2 -top-2 bottom-0 translate-y-2 pointer-events-none w-full h-full"
                >
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: false }}
                    transition={{
                      duration: 1.25,
                      delay: 0.5,
                      ease: "easeInOut",
                    }}
                    d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
                    stroke="#154d04"
                    strokeWidth="3"
                  />
                </svg>
              </span>
            </h3>
            <p className="text-zinc-500 text-lg leading-relaxed font-medium">
              We construct digital foundations that remain unshakable. While trends shift, our methodology remains rooted in permanent, strategic value.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export const ExplodingAssembly = () => {
  return null;
};
