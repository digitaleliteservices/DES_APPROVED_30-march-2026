import React from 'react';
import { createRoot } from 'react-dom/client';
import { useNavigate } from 'react-router-dom';
import { 
  Zap, 
  Layers, 
  CheckCircle2, 
  Sparkles,
  Search,
  Users,
  MousePointer2,
  ShieldCheck,
  TrendingUp
} from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * COMPREHENSIVE METHODOLOGY DATA
 */
const DETAILED_APPROACH = [
  {
    title: "Discovery",
    desc: "We dive deep into your unique challenges, extracting the core truths that define your brand and goals through rigorous analysis.",
    icon: <Search className="text-zinc-800 group-hover:text-gold-600 transition-colors" size={24} />,
    color: "bg-black/5"
  },
  {
    title: "Alignment",
    desc: "Matching our capabilities with your specific vision, ensuring we are perfectly calibrated before the first line of code is written.",
    icon: <Users className="text-zinc-800 group-hover:text-gold-600 transition-colors" size={24} />,
    color: "bg-black/5"
  },
  {
    title: "Strategy",
    desc: "Crafting a technical and creative roadmap that balances ambition with precision for maximum market impact.",
    icon: <Zap className="text-zinc-800 group-hover:text-gold-600 transition-colors" size={24} />,
    color: "bg-black/5"
  },
  {
    title: "Prototyping",
    desc: "Rapidly visualizing concepts to test usability and flow, ensuring the user experience is flawless from the start.",
    icon: <MousePointer2 className="text-zinc-800 group-hover:text-gold-600 transition-colors" size={24} />,
    color: "bg-black/5"
  },
  {
    title: "Engineering",
    desc: "Turning concepts into high-performance reality with a focus on quality, speed, and seamless scalability.",
    icon: <Layers className="text-zinc-800 group-hover:text-gold-600 transition-colors" size={24} />,
    color: "bg-black/5"
  },
  {
    title: "Quality Control",
    desc: "Rigorous testing protocols across all devices and environments to ensure your product is resilient and secure.",
    icon: <ShieldCheck className="text-zinc-800 group-hover:text-gold-600 transition-colors" size={24} />,
    color: "bg-black/5"
  },
  {
    title: "Scale & Grow",
    desc: "Using real-time data insights to evolve your platform and maintain a significant competitive advantage.",
    icon: <TrendingUp className="text-zinc-800 group-hover:text-gold-600 transition-colors" size={24} />,
    color: "bg-black/5"
  }
];

/**
 * REUSABLE COMPONENTS
 */
const MotionWrapper = ({ children, variant = "fade", delay = 0, className = "" }) => {
  const variants = {
    fade: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
    },
    scale: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
    }
  };

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      variants={variants[variant]}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const BackgroundPremium = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden bg-[#acbfb8]">
    <div className="absolute inset-0 bg-[#acbfb8]" />
    
    <div 
      className="absolute inset-0 opacity-[0.4] mix-blend-soft-light" 
      style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='400' height='400' viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1.2'%3E%3Cpath d='M50 50 Q100 10 150 50 Q100 90 50 50 M50 50 L150 50 M70 40 L100 25 M90 45 L120 30 M110 50 L140 40 M70 60 L100 75 M90 55 L120 70 M110 50 L140 60' transform='rotate(15 50 50)'/%3E%3Cpath d='M250 150 Q300 110 350 150 Q300 190 250 150 M250 150 L350 150' transform='rotate(-20 250 150)'/%3E%3Cpath d='M100 250 Q150 210 200 250 Q150 290 100 250 M100 250 L200 250' transform='rotate(45 100 250)'/%3E%3Cpath d='M300 300 Q350 260 400 300 Q350 340 300 300 M300 300 L400 300' transform='rotate(-10 300 300)'/%3E%3Cpath d='M10 350 Q60 310 110 350 Q60 390 10 350 M10 350 L110 350' transform='rotate(10 10 350)'/%3E%3Cpath d='M180 20 Q230 -20 280 20 Q230 60 180 20 M180 20 L280 20' transform='rotate(30 180 20)'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '400px 400px'
      }} 
    />

    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,_rgba(255,255,255,0.4)_0%,_transparent_50%)]" />
    <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,_rgba(0,0,0,0.05)_0%,_transparent_50%)]" />
  </div>
);

const MethodologySection = () => {
  
  const navigate = useNavigate();

  return (
    <section className="py-32 md:py-18 relative overflow-hidden selection:bg-gold-500/30">
      <BackgroundPremium />

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-24 md:mb-32">
          <MotionWrapper variant="fade">
            <div className="inline-flex items-center gap-3 bg-white/40 backdrop-blur-md px-6 py-2 rounded-full mb-10 border border-white/40 shadow-sm">
              <Sparkles size={14} className="text-gold-600 animate-spin-slow" />
              <span className="text-zinc-800 font-bold uppercase tracking-[0.4em] text-[10px]">Methodology</span>
            </div>
            
            <h2 className="text-2xl md:text-[2rem] lg:text-[4.5rem] font-black text-zinc-900 mb-10 tracking-tighter uppercase leading-[0.85] text-balance">
              <motion.span 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="block mb-2 drop-shadow-sm"
              >
                Always Giving You
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="block text-gold-600 italic drop-shadow-[0_8px_25px_rgba(255,255,255,0.8)] lowercase first-letter:uppercase"
              >
                Exactly What You Need
              </motion.span>
            </h2>
            
            <p className="text-lg md:text-xl text-zinc-800/80 leading-relaxed max-w-3xl mx-auto font-medium opacity-95">
              No more scattered details or convoluted tasks. We line everything up so nothing gets lost—anticipating and resolving before you have to ask.
            </p>
          </MotionWrapper>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {DETAILED_APPROACH.map((step, idx) => (
            <MotionWrapper key={idx} variant="fade" delay={idx * 0.1}>
              <div className="group relative bg-white/60 backdrop-blur-xl border border-white/40 rounded-[3rem] p-10 h-full flex flex-col transition-all duration-700 hover:bg-zinc-900 hover:border-zinc-800 hover:-translate-y-4 hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)]">
                <div className="absolute top-10 right-10 text-[10px] font-black text-zinc-400 group-hover:text-gold-500 transition-colors uppercase tracking-[0.3em]">
                  Step {idx + 1}
                </div>

                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 bg-white/50 group-hover:bg-white/10`}>
                  {step.icon}
                </div>
                
                <h4 className="text-xl md:text-2xl font-black text-zinc-900 group-hover:text-white mb-4 tracking-tight uppercase leading-none transition-colors">
                  {step.title}
                </h4>
                
                <p className="text-zinc-700 text-sm leading-relaxed group-hover:text-zinc-400 font-medium transition-colors">
                  {step.desc}
                </p>

                <div className="mt-auto pt-10 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <div className="w-10 h-1 bg-gold-600 rounded-full" />
                </div>
              </div>
            </MotionWrapper>
          ))}

          <MotionWrapper delay={DETAILED_APPROACH.length * 0.1} variant="fade">
            <div className="relative group overflow-hidden bg-zinc-900 backdrop-blur-2xl border border-zinc-800 rounded-[3rem] p-10 h-full flex flex-col justify-center items-center text-center shadow-2xl transition-all duration-500 hover:scale-[1.03] hover:bg-black">
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-gold-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              
              <CheckCircle2 size={56} className="text-gold-500 mb-6 relative z-10" strokeWidth={1} />
              
              <h4 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-4 relative z-10 leading-[0.9]">
                Ready for <br/>Results?
              </h4>
              <p className="text-zinc-400 text-sm font-medium mb-10 relative z-10 px-4">Let's align our expertise with your vision today.</p>
              
              <button 
                onClick={() => navigate('/contact')}
                className="relative z-10 w-full py-5 bg-gold-600 text-zinc-950 rounded-[1.5rem] font-black uppercase tracking-[0.3em] text-[10px] hover:bg-gold-500 transition-all shadow-xl active:scale-95"
              >
                Get Started
              </button>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
