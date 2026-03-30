
import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';

import MethodologySection from '../components/MethodologySection';
import MotionWrapper from '../components/MotionWrapper';
import { SERVICES } from '../constants';
import {
  ArrowRight,
  Search,
  Compass,
  Palette,
  RefreshCw,
  X,
  CheckCircle2,
  SearchCheck,
  Users,
  Zap,
  BarChart3,
  ShieldCheck,
  Target,
  Code, Megaphone
} from 'lucide-react';

const DETAILED_APPROACH = [
  {
    title: "Client Understanding",
    desc: "We begin by analysing each client’s goals, challenges, and target audience to build a solid foundation.",
    icon: <SearchCheck size={24} />,
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    title: "Customized Strategy",
    desc: "Crafting tailored solutions that combine creativity, technology, and data-driven insights for unique impact.",
    icon: <Compass size={24} />,
    color: "bg-gold-500/10 text-gold-500"
  },
  {
    title: "Creative Execution",
    desc: "Delivering visually compelling designs, engaging campaigns, and high-performance web solutions that stand out.",
    icon: <Palette size={24} />,
    color: "bg-purple-500/10 text-purple-500"
  },
  {
    title: "Collaboration",
    desc: "Working closely with clients as an extension of their team to ensure absolute alignment and transparency.",
    icon: <Users size={24} />,
    color: "bg-emerald-500/10 text-emerald-500"
  },
  {
    title: "Continuous Optimization",
    desc: "Monitoring performance in real-time and refining strategies to maximize results and drive higher ROI.",
    icon: <Zap size={24} />,
    color: "bg-orange-500/10 text-orange-500"
  },
  {
    title: "Measurable Impact",
    desc: "Focusing strictly on outcomes that drive tangible growth, engagement, and long-term business success.",
    icon: <BarChart3 size={24} />,
    color: "bg-indigo-500/10 text-indigo-500"
  },
  {
    title: "Quality & Timely Delivery",
    desc: "We deliver high-quality digital solutions with extreme precision and punctuality, ensuring client satisfaction.",
    icon: <ShieldCheck size={24} />,
    color: "bg-red-500/10 text-red-500"
  }
];

import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Partnership from '../components/Partnership';
import Clients from '../components/Clients';
import { HighlightScrub, FixedTextMask } from '../components/AdvancedMotions';
import AdvancedMotions1 from '../components/AdvancedMotions1';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const springConfig = { mass: 1, stiffness: 40, damping: 20 };
  const marqueeX = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1500]), springConfig);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      ref={containerRef}
    >
      <Hero />
      <Clients />

      {/* <div className="bg-white py-24 border-y border-zinc-100 overflow-hidden relative">
        <motion.div style={{ x: marqueeX }} className="flex whitespace-nowrap items-center gap-20">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-10 text-zinc-100">
              <span className="text-6xl font-black uppercase tracking-tighter hover:text-gold-500 transition-colors duration-700 cursor-none select-none">Elite Innovation</span>
              <div className="w-4 h-4 rounded-full bg-gold-500" />
              <span className="text-6xl font-black uppercase tracking-tighter hover:text-zinc-900 transition-colors duration-700 cursor-none select-none">Strategic Growth</span>
              <div className="w-4 h-4 rounded-full bg-zinc-200" />
            </div>
          ))}
        </motion.div>
      </div> */}

      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <MotionWrapper variant="fade">
              <h2 className="text-gold-600 font-black uppercase tracking-[0.4em] text-[10px] mb-6 flex items-center justify-center gap-3">
                <span className="text-xl">🌟</span> Discover With Us
              </h2>
              <h3 className="text-4xl md:text-6xl font-display font-black text-zinc-900 mb-8 tracking-tighter uppercase leading-tight">
                What We
                <span className="relative inline-block px-8">
                  <span className="text-gold-500 ">Offer {" "}</span>
                  <svg
                    viewBox="0 0 286 73"
                    fill="none"
                    className="absolute -left-1 -right-4 -top-2 bottom-0 translate-y-2 pointer-events-none w-full h-full"
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
              <p className="text-xl text-zinc-500 leading-relaxed font-medium">
                Tailored services that combine creativity, strategy and engineering — built to move your brand forward.
              </p>
            </MotionWrapper>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <MotionWrapper variant="fade" delay={0.1}>
              <div className="group relative bg-zinc-50 rounded-[3rem] p-12 h-full flex flex-col border border-zinc-100 hover:border-gold-500 transition-all duration-500 hover:shadow-2xl hover:shadow-gold-500/10">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-gold-500 mb-10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-sm">
                  <Megaphone size={32} />
                </div>
                <h4 className="text-2xl font-display font-black text-zinc-900 uppercase tracking-tighter mb-4">
                  Digital Marketing <br /><span className="text-gold-500">Excellence</span>
                </h4>
                <p className="text-zinc-500 font-medium leading-relaxed mb-10">
                  We craft strategies that amplify visibility, engage audiences, and drive measurable growth.
                </p>
                <button
                  onClick={() => navigate('/contact')}
                  className="mt-auto flex items-center gap-3 text-[10px] font-black text-zinc-900 uppercase tracking-[0.3em] group/btn hover:text-gold-600 transition-colors"
                >
                  Let's talk
                  <ArrowRight size={14} className="text-gold-500 group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>
            </MotionWrapper>

            <MotionWrapper variant="fade" delay={0.2}>
              <div className="group relative bg-zinc-950 rounded-[3rem] p-12 h-full flex flex-col border border-white/5 hover:border-gold-500 transition-all duration-500 hover:shadow-2xl hover:shadow-gold-500/20">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-gold-500 mb-10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <Palette size={32} />
                </div>
                <h4 className="text-2xl font-display font-black text-white uppercase tracking-tighter mb-4">
                  Creative  Design <br /><span className="text-gold-500">& Branding</span>
                </h4>
                <p className="text-zinc-400 font-medium leading-relaxed mb-10">
                  From graphics to complete brand identities, we design with impact — ensuring your message is memorable.
                </p>
                <button
                  onClick={() => navigate('/contact')}
                  className="mt-auto flex items-center gap-3 text-[10px] font-black text-white uppercase tracking-[0.3em] group/btn hover:text-gold-600 transition-colors"
                >
                  Let's talk
                  <ArrowRight size={14} className="text-gold-500 group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>
            </MotionWrapper>

            <MotionWrapper variant="fade" delay={0.3}>
              <div className="group relative bg-zinc-50 rounded-[3rem] p-12 h-full flex flex-col border border-zinc-100 hover:border-gold-500 transition-all duration-500 hover:shadow-2xl hover:shadow-gold-500/10">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-gold-500 mb-10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-sm">
                  <Code size={32} />
                </div>
                <h4 className="text-2xl font-display font-black text-zinc-900 uppercase tracking-tighter mb-4">
                  Custom Web <br /><span className="text-gold-500">Development</span>
                </h4>
                <p className="text-zinc-500 font-medium leading-relaxed mb-10">
                  We build tailored web solutions that transform ideas into powerful digital experiences.
                </p>
                <button
                  onClick={() => navigate('/contact')}
                  className="mt-auto flex items-center gap-3 text-[10px] font-black text-zinc-900 uppercase tracking-[0.3em] group/btn hover:text-gold-600 transition-colors"
                >
                  Let's talk
                  <ArrowRight size={14} className="text-gold-500 group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      <HighlightScrub />
      <Partnership />
      <AdvancedMotions1 />
      <FixedTextMask />
      <MethodologySection />

      {/* <section className="py-40 bg-green-950 relative overflow-hidden">
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
                Always Giving You <br /><span className="text-gold-500">Exactly</span> What You Need
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
                  Ready for <br />Results?
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
      </section> */}

      <Testimonials />
    </motion.div>
  );
};

export default Home;
