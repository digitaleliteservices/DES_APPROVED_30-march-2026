
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '../constants';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import MotionWrapper from './MotionWrapper';

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  const current = TESTIMONIALS[index];

  return (
    <section className="py-24 bg-slate-950 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-brand-600 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <MotionWrapper direction="right">
              <h2 className="text-brand-400 font-bold uppercase tracking-widest text-xs mb-4">Kind Words</h2>
              <h3 className="text-3xl md:text-4xl font-display font-extrabold mb-8 leading-tight">
                Trusted by Forward-Thinking Companies
              </h3>
              <p className="text-slate-400 text-base mb-10 max-w-lg">
                We measure our success by the growth and achievements of our partners. 
                Hear what they have to say about our partnership.
              </p>
              
              <div className="flex items-center gap-6">
                <div className="flex gap-4">
                  <button onClick={prev} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-colors">
                    <ChevronLeft size={24} />
                  </button>
                  <button onClick={next} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-colors">
                    <ChevronRight size={24} />
                  </button>
                </div>
                
                <div className="flex gap-2">
                  {TESTIMONIALS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === index ? 'w-8 bg-brand-500' : 'w-2 bg-white/20'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </MotionWrapper>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="relative min-h-[420px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, x: 50, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -50, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-white/5 backdrop-blur-lg border border-white/10 p-10 md:p-14 rounded-[3rem] relative w-full"
                >
                  <Quote size={80} className="text-brand-500/10 absolute top-6 left-6" />
                  <p className="text-sm md:text-base font-medium leading-relaxed mb-10 relative z-10 italic">
                    "{current.content}"
                  </p>
                  <div className="flex items-center gap-5">
                   
                    
                      <div className="w-16 h-16 rounded-2xl border-2 border-brand-500 shadow-lg shadow-brand-500/20 bg-white flex items-center justify-center">
                        <img
                          src={current.avatar}
                          alt={current.name}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold">{current.name}</h4>
                      <p className="text-brand-400 font-medium">{current.role}</p>
                      </div>
                      
                      <div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
