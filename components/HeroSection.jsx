import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles, 
  Target, 
  TrendingUp, 
  Headphones, 
  Users, 
  Star, 
  Eye, 
  Briefcase 
} from 'lucide-react';

export default function HeroSection({ onCtaClick }) {
  const [isBoosting, setIsBoosting] = useState(false);
  const [boostLevel, setBoostLevel] = useState(156);

  const handleTriggerBoost = () => {
    if (isBoosting) return;
    setIsBoosting(true);
    const interval = setInterval(() => {
      setBoostLevel(prev => {
        if (prev >= 244) {
          clearInterval(interval);
          return 244;
        }
        return prev + 8;
      });
    }, 25);

    setTimeout(() => {
      setIsBoosting(false);
      setTimeout(() => {
        const resetInterval = setInterval(() => {
          setBoostLevel(prev => {
            if (prev <= 156) {
              clearInterval(resetInterval);
              return 156;
            }
            return prev - 6;
          });
        }, 20);
      }, 1500);
    }, 1800);
  };

  return (
    <section id="hero-section" className="relative overflow-hidden pt-2 pb-24 md:pt-2 md:pb-18 bg-white border-b border-slate-200/50">
        {/* bg-[#faf9f6] */}
      
      {/* Custom CSS Scoped Animation Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes customFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(-0.5deg); }
        }
        @keyframes customShake {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          20% { transform: translate(-1.5px, 1.5px) rotate(-1deg); }
          40% { transform: translate(1.5px, -1px) rotate(1deg); }
          60% { transform: translate(-1px, -1.5px) rotate(0.5deg); }
          80% { transform: translate(1px, 1px) rotate(-0.5deg); }
        }
        @keyframes particleDrift {
          0% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.8; }
          50% { transform: translateY(-40px) translateX(10px) scale(1.3); opacity: 0.4; }
          100% { transform: translateY(-80px) translateX(-5px) scale(0.8); opacity: 0; }
        }
        .animate-custom-float {
          animation: customFloat 5s ease-in-out infinite;
        }
        .animate-custom-shake {
          animation: customShake 0.15s linear infinite;
        }
        .particle-emit {
          animation: particleDrift 2.5s ease-out infinite;
        }
      `}} />

      {/* Soft Decorative Coral Grid Pattern in Corner limits */}
      <div className="absolute left-4 bottom-24 w-32 h-32 opacity-30 select-none pointer-events-none bg-[radial-gradient(#f97316_1.5px,transparent_1.5px)] bg-[size:12px_12px]" />
      <div className="absolute right-4 top-24 w-36 h-36 opacity-30 select-none pointer-events-none bg-[radial-gradient(#f97316_1.5px,transparent_1.5px)] bg-[size:12px_12px]" />

      {/* Dynamic Coral Soft Accent Lights behind laptop base */}
      <div className="absolute top-[40%] left-[45%] w-[480px] h-[480px] bg-orange-100/35 rounded-full blur-[110px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Main 3-Way Grid Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-11 items-center">
          
          {/* ==================== LEFT COLUMN: HERO TEXT & BASIC FEATURE ICON TRIGGERS ==================== */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col justify-center text-left space-y-7">
            
            {/* Pill Badge */}
            <div>
              <span className="inline-flex items-center gap-1.5 bg-white border border-orange-200/85 px-4 py-1.5 rounded-full shadow-sm text-[10px] font-black uppercase tracking-wider text-orange-600 font-mono">
                <span className="text-orange-500 font-extrabold animate-pulse">⚡</span> DIGITAL EXCELLENCE
              </span>
            </div>

            {/* Spectacular Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[38px] xl:text-[46px] font-black text-slate-950 tracking-tight leading-[1.08] select-none text-left">
              We Build Digital <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Experiences</span> That <br />
              Drive Results
            </h1>

            {/* Description Paragraph */}
            <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed select-text font-sans max-w-md font-normal">
              We combine creativity, technology, and data to craft powerful digital solutions that help your business grow faster and smarter.
            </p>

            {/* Highlight Mini Features columns */}
            <div className="grid grid-cols-3 gap-2.5 pt-1.5 select-none text-left">
              
              {/* Bullet 1 */}
              <div className="space-y-1.5 text-left">
                <div className="w-9 h-9 rounded-full bg-orange-50 text-orange-600 border border-orange-100 flex items-center justify-center">
                  <Target size={17} />
                </div>
                <div>
                  <h4 className="text-[11px] font-black text-slate-900 leading-none">Data-Driven</h4>
                  <p className="text-[9px] text-[#8a919f] mt-0.5 leading-tight">Smart strategies</p>
                </div>
              </div>

              {/* Bullet 2 */}
              <div className="space-y-1.5 text-left">
                <div className="w-9 h-9 rounded-full bg-orange-50 text-orange-600 border border-orange-100 flex items-center justify-center">
                  <TrendingUp size={17} />
                </div>
                <div>
                  <h4 className="text-[11px] font-black text-slate-900 leading-none">Proven Growth</h4>
                  <p className="text-[9px] text-[#8a919f] mt-0.5 leading-tight">Real & measurable</p>
                </div>
              </div>

              {/* Bullet 3 */}
              <div className="space-y-1.5 text-left">
                <div className="w-9 h-9 rounded-full bg-orange-50 text-orange-600 border border-orange-100 flex items-center justify-center">
                  <Headphones size={17} />
                </div>
                <div>
                  <h4 className="text-[11px] font-black text-slate-900 leading-none">24/7 Support</h4>
                  <p className="text-[9px] text-[#8a919f] mt-0.5 leading-tight">Always by your side</p>
                </div>
              </div>

            </div>

            {/* Large CTA buttons with cursor effects */}
            {/* <div className="flex flex-wrap items-center gap-3.5 pt-3 select-none">
              <button
                onClick={onCtaClick}
                className="px-6 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-xs tracking-wider uppercase shadow-lg shadow-orange-500/20 active:scale-95 transition-all text-center flex items-center gap-2 group cursor-pointer"
              >
                <span>Get Started</span>
                <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('services-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-900 font-extrabold text-xs tracking-wider uppercase border border-slate-200 shadow-sm active:scale-95 transition-all text-center flex items-center gap-2 group cursor-pointer"
              >
                <span>Explore Services</span>
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform opacity-70" />
              </button>
            </div> */}

          </div>

          {/* ==================== CENTER COLUMN: INTERACTIVE 3D PLATFORM, LAPTOP & LAUNCHING ROCKET ==================== */}
          <div className="lg:col-span-5 xl:col-span-5 relative flex items-center justify-center min-h-[460px] md:min-h-[520px] select-none">
            
            {/* Background Ambient Floating particles for visual atmosphere depth */}
            <div className="absolute top-[18%] left-[24%] w-2 h-2 rounded-full bg-orange-400 opacity-60 animate-ping" />
            <div className="absolute bottom-[35%] right-[12%] w-2.5 h-2.5 rounded-full bg-amber-400 opacity-55 animate-pulse" />
            <div className="absolute top-[65%] left-[8%] w-1.5 h-1.5 rounded-full bg-orange-400 opacity-50" />

            {/* Circular 3D Stage Podium Disk */}
            <div className="absolute bottom-[14%] left-1/2 -translate-x-1/2 w-[340px] md:w-[390px] h-[58px] bg-gradient-to-t from-[#e46e27]/25 to-[#f9aa77]/10 rounded-full blur-xl -z-10" />
            <div className="absolute bottom-[16%] left-1/2 -translate-x-1/2 w-[370px] md:w-[410px] h-[70px] bg-[#fdf3e9] border border-[#f0dac5] rounded-full shadow-[0_18px_38px_rgba(240,130,50,0.18)] -z-10 flex items-center justify-center">
              <div className="w-[350px] md:w-[385px] h-[55px] bg-[#f4e2d2] rounded-full border border-[#ebd0b8] shadow-[inset_0_2px_5px_rgba(255,255,255,0.7)]" />
            </div>

            {/* Rolling Steam Cloud 1 */}
            <div className="absolute bottom-[23%] left-[12%] w-[105px] h-[50px] bg-[#ffffff]/90 border border-slate-100 rounded-full blur-[1.5px] shadow-sm flex items-center justify-center text-[9px] font-bold text-slate-500 z-[10] cursor-pointer" onClick={handleTriggerBoost}>
              <span className="text-orange-500 font-black animate-pulse mr-1">•</span> SYSTEM LIVE
            </div>

            {/* Rolling Steam Cloud 2 */}
            <div className="absolute bottom-[19%] right-[10%] w-[120px] h-[55px] bg-[#fafafb]/95 border border-slate-100 rounded-full blur-[1px] shadow-md flex items-center justify-center text-[8.5px] font-mono text-slate-400 z-[10] cursor-pointer" style={{ animationDelay: '0.6s' }} onClick={handleTriggerBoost}>
              // LAUNCH_STAGE
            </div>

            {/* ================= LAPTOP CASING AND GRAPHICS INTERFACE ================= */}
            <div className="relative w-[340px] md:w-[365px] flex flex-col items-center">
              
              {/* Screens Bezel Unit */}
              <div className="relative w-[326px] md:w-[348px] h-[216px] md:h-[230px] rounded-2xl bg-slate-900 border-[6px] md:border-[7px] border-slate-800/95 shadow-2xl flex flex-col justify-between overflow-hidden">
                
                {/* Glass Glare Highlight lines */}
                <div className="absolute top-0 left-0 w-full h-[65px] bg-gradient-to-b from-white/10 to-transparent -rotate-12 transform scale-150 pointer-events-none z-10" />
                
                {/* Webcam Notch */}
                <div className="absolute top-[2px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-black flex items-center justify-center z-20">
                  <div className="w-[3px] h-[3px] rounded-full bg-emerald-500" />
                </div>

                {/* Dashboard Live Screen Inside */}
                <div className="p-4 bg-[#111522] text-left flex-1 flex flex-col justify-between relative text-slate-100 font-sans">
                  
                  {/* Living Banner */}
                  <div className="flex items-center justify-between text-[9px] text-[#8c97ad] font-bold border-b border-white/5 pb-1.5 font-mono">
                    <span>Business Growth</span>
                    <span className="text-emerald-400 font-black flex items-center gap-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> STATS RUNNING
                    </span>
                  </div>

                  {/* Stats numeric block */}
                  <div className="my-1.5 flex items-baseline justify-between select-text flex-row items-center">
                    <div>
                      <span className="text-[8px] text-slate-400 uppercase font-mono tracking-widest block">Total Growth</span>
                      <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400 font-mono tracking-tight leading-none">
                        +{boostLevel}%
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[7.5px] uppercase font-mono text-slate-500 block">System Boost</span>
                      <button
                        onClick={handleTriggerBoost}
                        className={`px-1.5 py-0.5 rounded text-[8px] tracking-wide font-extrabold uppercase select-none transition-all cursor-pointer ${
                          isBoosting 
                            ? 'bg-red-500 text-white animate-pulse' 
                            : 'bg-orange-500/10 hover:bg-orange-500 text-orange-400 hover:text-white border border-orange-500/25'
                        }`}
                      >
                        {isBoosting ? 'FIRING!' : 'BOOST'}
                      </button>
                    </div>
                  </div>

                  {/* SVG Line graph showing beautiful curve */}
                  <div className="h-16 relative mt-1 select-none">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 280 60">
                      <defs>
                        <linearGradient id="glowGradi" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#f37121" stopOpacity="0.45" />
                          <stop offset="100%" stopColor="#f37121" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      {/* Shimmer gradient underpath */}
                      <path
                        d={isBoosting
                          ? "M 10,50 Q 55,30 90,15 T 170,18 T 230,8 T 270,3"
                          : "M 10,50 Q 55,42 90,30 T 170,35 T 230,12 T 270,5"
                        }
                        fill="url(#glowGradi)"
                        className="transition-all duration-700 ease-out"
                      />
                      {/* Core vector line */}
                      <path
                        d={isBoosting
                          ? "M 10,50 Q 55,30 90,15 T 170,18 T 230,8 T 270,3"
                          : "M 10,50 Q 55,42 90,30 T 170,35 T 230,12 T 270,5"
                        }
                        fill="none"
                        stroke="#f37121"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        className="transition-all duration-700 ease-out"
                      />
                      {/* Glow circles */}
                      <circle cx="90" cy={isBoosting ? "15" : "30"} r="3" fill="#ffffff" stroke="#f37121" strokeWidth="2" className="transition-all duration-700" />
                      <circle cx="230" cy={isBoosting ? "8" : "12"} r="3" fill="#ffffff" stroke="#f37121" strokeWidth="2" className="transition-all duration-700" />
                    </svg>
                  </div>

                  {/* Low parameters row */}
                  <div className="grid grid-cols-3 gap-0.5 pt-1.5 border-t border-white/5 font-mono text-[8px] text-slate-400 select-text">
                    <div>
                      <p className="text-[6.5px] text-slate-500 uppercase">Users</p>
                      <p className="font-bold text-slate-200">2.4K <span className="text-emerald-400 font-extrabold">+12%</span></p>
                    </div>
                    <div>
                      <p className="text-[6.5px] text-slate-500 uppercase">Revenue</p>
                      <p className="font-bold text-slate-200">$84K <span className="text-emerald-400 font-extrabold">+23%</span></p>
                    </div>
                    <div>
                      <p className="text-[6.5px] text-slate-500 uppercase">Leads</p>
                      <p className="font-bold text-slate-200">1.2K <span className="text-emerald-400 font-extrabold">+18%</span></p>
                    </div>
                  </div>

                </div>

                {/* Premium Brand text on aluminum bottom shelf */}
                <div className="h-4.5 bg-[#1e2433] border-t border-white/20 flex items-center justify-center text-[7.5px] font-mono tracking-widest text-[#6c7b99] font-black uppercase">
                  INNOVATIVE DIGITAL LAB
                </div>

              </div>

              {/* Silver Keyboard Base Plate with drop shadow */}
              <div className="w-[342px] md:w-[380px] h-[13px] bg-gradient-to-b from-[#e2e8f0] via-[#cbd5e1] to-[#94a3b8] border-t-2 border-[#f1f5f9] rounded-b-xl shadow-xl relative -mt-1 z-10 flex flex-col justify-between overflow-hidden">
                <div className="w-full h-[2px] bg-white/45" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-slate-900 rounded-b" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-slate-400/40 rounded-t" />
              </div>

            </div>

            {/* ================= VECTOR FLOATING LAUNCH COMPILER ROCKET ================= */}
            <div 
              onClick={handleTriggerBoost}
              className={`absolute left-1/2 -ml-[71px] bottom-[215px] md:bottom-[245px] z-20 cursor-pointer transition-all duration-300 select-none ${
                isBoosting ? 'animate-custom-shake scale-110' : 'animate-custom-float'
              }`}
            >
              <div className="relative w-[100px] h-[180px] group flex flex-col items-center">
                
                {/* Dynamic Boost Exhaust Jets */}
                <div className="absolute top-[82%] left-1/2 -translate-x-1/2 w-9 h-24 origin-top flex flex-col items-center pointer-events-none">
                  {/* Fire Flare Core */}
                  <div className="w-5 h-16 bg-gradient-to-b from-yellow-300 via-orange-500 to-transparent rounded-full animate-pulse-blast blur-[1px]" />
                  {/* Outer Shimmer */}
                  <div className="absolute top-1.5 w-7 h-20 bg-gradient-to-b from-[#f97316]/90 via-red-500/30 to-transparent rounded-full animate-ping opacity-60" />
                </div>

                {/* Left stabiliser fin wing */}
                <div className="absolute top-[65%] left-[-8px] w-9 h-14 bg-gradient-to-br from-[#e45115] to-[#c13009] rounded-tl-3xl rounded-br-2xl transform rotate-12 -z-10 shadow-md border-l border-orange-500/40" />
                
                {/* Right stabiliser fin wing */}
                <div className="absolute top-[65%] right-[-8px] w-9 h-14 bg-gradient-to-bl from-[#e45115] to-[#c13009] rounded-tr-3xl rounded-bl-2xl transform -rotate-12 -z-10 shadow-md border-r border-orange-500/40" />

                {/* Exhaust jet exhaust plate */}
                <div className="absolute top-[76%] left-1/2 -translate-x-1/2 w-7 h-7 bg-slate-700 border-t border-slate-900 rounded" />

                {/* Fuselage metallic cylinder rocket core */}
                <div className="w-full h-full bg-gradient-to-b from-white via-[#f1f5f9] to-[#cbd5e1] rounded-full border border-slate-300/80 shadow-[inset_1px_2px_4px_white,0_10px_22px_rgba(30,40,58,0.22)] relative flex flex-col items-center pt-8">
                  
                  {/* Cap Nose cone red gradient */}
                  <div className="absolute top-0 w-full h-[50px] bg-gradient-to-b from-orange-500 to-[#e04f14] rounded-t-full border-b border-orange-700/50 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.4)]" />
                  <div className="absolute top-[50px] w-full h-[1px] bg-slate-300/60" />
                  <div className="absolute bottom-[35px] w-full h-[1px] bg-slate-300/60" />

                  {/* Window cabin display */}
                  <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border-4 border-slate-200/90 shadow-md flex items-center justify-center overflow-hidden leading-zero">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-[#38bdf8]/40 to-transparent opacity-85" />
                    <Sparkles size={11} className="text-white animate-pulse" />
                  </div>

                  {/* Highlight decorative metal bolts */}
                  <div className="absolute bottom-11 w-1.5 h-4.5 bg-[#ea580c]/15 rounded-full" />

                </div>

              </div>
            </div>


            {/* ================= FLOATING GLASS OVERLAY CARDS ================= */}
            
            {/* Floating Card 1: Top-Left (Avatars & 500+ Clients) */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.04 }}
              className="absolute top-[3%] left-[-4%] z-30 bg-white/95 backdrop-blur-sm border border-slate-200/90 p-3 rounded-2xl shadow-lg flex flex-col items-center text-center space-y-1 select-none pointer-events-auto cursor-pointer"
            >
              {/* 3 stacked user faces */}
              <div className="flex -space-x-1.5 justify-center mb-1">
                <img className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&fit=crop&q=80" alt="Client" />
                <img className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&fit=crop&q=80" alt="Client" />
                <img className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&fit=crop&q=80" alt="Client" />
              </div>
              <h4 className="text-[13px] font-black tracking-tight text-slate-900 leading-none">500+</h4>
              <p className="text-[8.5px] font-bold text-slate-500 leading-none">Happy Clients Worldwide</p>
              {/* Five star ratings */}
              <div className="flex gap-0.5 text-orange-500 pt-0.5">
                <Star size={9} fill="currentColor" strokeWidth={0} />
                <Star size={9} fill="currentColor" strokeWidth={0} />
                <Star size={9} fill="currentColor" strokeWidth={0} />
                <Star size={9} fill="currentColor" strokeWidth={0} />
                <Star size={9} fill="currentColor" strokeWidth={0} />
              </div>
            </motion.div>

            {/* Floating Card 2: Top-Right (ROI metrics trend box) */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              whileHover={{ scale: 1.04 }}
              className="absolute top-[16%] right-[-3%] z-30 bg-white/95 backdrop-blur-sm border border-slate-200/90 p-3 rounded-2xl shadow-lg space-y-1.5 flex flex-col justify-between text-left select-none pointer-events-auto cursor-pointer"
            >
              <div className="space-y-0.5 text-left">
                <span className="text-[8px] font-mono font-bold tracking-wider text-slate-500 block uppercase">ROI Increase</span>
                <p className="text-sm font-black text-orange-500 font-mono leading-none">+156%</p>
              </div>
              <div className="flex items-center gap-1 text-[8px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                <span>vs last month</span>
                <span>↗</span>
              </div>
            </motion.div>

            {/* Floating Card 3: Bottom-Right (Purple check icon, done counts) */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              whileHover={{ scale: 1.04 }}
              className="absolute bottom-[10%] right-[-5%] z-30 bg-white/95 backdrop-blur-sm border border-slate-200/90 p-3.5 rounded-2xl shadow-lg flex items-center gap-2.5 text-left select-none pointer-events-auto cursor-pointer"
            >
              <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100 shadow-sm shrink-0">
                <Briefcase size={15} />
              </div>
              <div>
                <span className="text-[8px] font-bold text-[#8a919f] uppercase block tracking-wider">Project Done</span>
                <p className="text-xs font-black text-slate-900 leading-none mt-0.5 font-sans">1,250+</p>
                <p className="text-[7.5px] font-extrabold text-slate-400 font-mono mt-0.5">Successful Projects</p>
              </div>
            </motion.div>

          </div>

          {/* ==================== RIGHT COLUMN: WHY CHOOSE US VERTICAL HIGHLIGHTS & CLIENT STACK ==================== */}
          <div className="lg:col-span-3 xl:col-span-3 space-y-8 select-none text-left">
            
            <div className="space-y-3">
              <span className="text-[10px] font-black tracking-widest text-[#ea580c] block uppercase font-mono">
                Why Choose Us
              </span>
              <h3 className="text-3xl font-black text-slate-950 tracking-tight leading-tighter font-sans">
                Your Success Is <br />
                Our <span className="text-orange-500 font-extrabold">Mission</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
                We don't just build websites or run campaigns. We build partnerships that create long-term value for your business.
              </p>
            </div>

            {/* Vertical Features Highlights List */}
            <div className="space-y-3 pt-1 select-none text-left">
              
              {/* Highlight Item 1 */}
              <div className="flex items-center gap-3 p-2 bg-transparent hover:bg-white rounded-xl hover:shadow-sm border border-transparent hover:border-slate-100 transition-all">
                <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#ea580c] flex items-center justify-center shrink-0 border border-orange-100/50">
                  <Users size={15} />
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-900 leading-none">Customized Solutions</h4>
                  <p className="text-[10px] text-slate-500 mt-0.5 leading-snug">Tailored strategies for your unique business needs</p>
                </div>
              </div>

              {/* Highlight Item 2 */}
              <div className="flex items-center gap-3 p-2 bg-transparent hover:bg-white rounded-xl hover:shadow-sm border border-transparent hover:border-slate-100 transition-all">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-650 flex items-center justify-center shrink-0 border border-indigo-100/50">
                  <Star size={15} />
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-900 leading-none">Expert Team</h4>
                  <p className="text-[10px] text-slate-500 mt-0.5 leading-snug">Industry experts passionate about your growth</p>
                </div>
              </div>

              {/* Highlight Item 3 */}
              <div className="flex items-center gap-3 p-2 bg-transparent hover:bg-white rounded-xl hover:shadow-sm border border-transparent hover:border-slate-100 transition-all">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-650 flex items-center justify-center shrink-0 border border-emerald-100/50">
                  <Eye size={15} />
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-900 leading-none">Transparent Process</h4>
                  <p className="text-[10px] text-slate-500 mt-0.5 leading-snug">Clear communication and complete transparency</p>
                </div>
              </div>

              {/* Highlight Item 4 */}
              <div className="flex items-center gap-3 p-2 bg-transparent hover:bg-white rounded-xl hover:shadow-sm border border-transparent hover:border-slate-100 transition-all">
                <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-650 flex items-center justify-center shrink-0 border border-sky-100/50">
                  <TrendingUp size={15} />
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-900 leading-none">Measurable Results</h4>
                  <p className="text-[10px] text-slate-500 mt-0.5 leading-snug">Data-backed results that speak for themselves</p>
                </div>
              </div>

            </div>

            {/* Bottom Client Proof of stack faces */}
            {/* <div className="flex items-center gap-2.5 pt-2 border-t border-slate-200/50">
              <div className="flex -space-x-1.5 select-none shrink-0">
                <img className="w-6 h-6 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&fit=crop&q=80" alt="Client avatar" />
                <img className="w-6 h-6 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&fit=crop&q=80" alt="Client avatar" />
                <img className="w-6 h-6 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&fit=crop&q=80" alt="Client avatar" />
                <img className="w-6 h-6 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=80&fit=crop&q=80" alt="Client avatar" />
                <img className="w-6 h-6 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&fit=crop&q=80" alt="Client avatar" />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-800 leading-snug">Trusted by 1000+</p>
                <p className="text-[8.5px] font-extrabold text-slate-400 uppercase tracking-wide leading-none">businesses worldwide</p>
              </div>
            </div> */}

          </div>

        </div>

        {/* =========================================================
            TRUSTED BRANDS CAPSULE BAR SYSTEM LAYOUT
            ========================================================= */}
        {/* <div className="mt-16 select-none max-w-6xl mx-auto">
          <div className="bg-white border border-slate-200/80 px-4 md:px-8 py-4 hand rounded-3xl shadow-[0_4px_22px_rgba(30,40,60,0.03)] flex flex-col md:flex-row items-center justify-between gap-5 text-center">
            
            
            <span className="text-[9px] font-extrabold uppercase text-[#8a919f] tracking-widest font-mono shrink-0">
              TRUSTED BY LEADING BRANDS
            </span>

           
            <div className="flex flex-wrap items-center justify-center gap-7 lg:gap-11 select-none">
              
            
              <div className="flex items-center gap-1 select-none">
                <svg className="w-4.5 h-4.5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22-.03-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                <span className="text-xs font-black tracking-tight text-slate-800 font-sans font-extrabold">Google</span>
              </div>

             
              <div className="flex items-center gap-1 select-none font-sans font-extrabold text-xs text-slate-800">
                <div className="grid grid-cols-2 gap-[2px] w-3.5 h-3.5 shrink-0">
                  <div className="bg-[#f25022]" />
                  <div className="bg-[#7fba00]" />
                  <div className="bg-[#00a4ef]" />
                  <div className="bg-[#ffb900]" />
                </div>
                <span>Microsoft</span>
              </div>

             
              <div className="flex items-center gap-1 select-none font-sans font-black text-xs text-slate-800">
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
                  <path fill="#e01e5a" d="M5.042 15.116a2.528 2.528 0 0 1-2.52 2.52 2.528 2.528 0 0 1-2.522-2.52 2.528 2.528 0 0 1 2.522-2.52h2.52v2.52zm1.261 0a2.528 2.528 0 0 1 2.52-2.52h5.043a2.528 2.528 0 0 1 2.522 2.52v5.042a2.528 2.528 0 0 1-2.522 2.52H8.823a2.528 2.528 0 0 1-2.52-2.52v-5.042z" />
                  <path fill="#2eb67d" d="M8.823 5.043a2.528 2.528 0 0 1-2.52-2.52A2.528 2.528 0 0 1 8.823 0a2.528 2.528 0 0 1 2.52 2.523v2.52h-2.52zm0 1.261a2.528 2.528 0 0 1 2.52 2.52v5.043a2.528 2.528 0 0 1-2.52 2.522H3.78a2.528 2.528 0 0 1-2.52-2.522V8.824a2.528 2.528 0 0 1 2.52-2.52h5.043z" />
                  <path fill="#36c5f0" d="M18.958 8.824a2.528 2.528 0 0 1 2.521-2.52 2.528 2.528 0 0 1 2.52 2.52 2.528 2.528 0 0 1-2.52 2.52h-2.521v-2.52zm-1.261 0a2.528 2.528 0 0 1-2.52 2.52h-5.043a2.528 2.528 0 0 1-2.522-2.52V3.78a2.528 2.528 0 0 1 2.522-2.52h5.043a2.528 2.528 0 0 1 2.52 2.52v5.043z" />
                  <path fill="#ecb22e" d="M15.177 18.957a2.528 2.528 0 0 1 2.521 2.522 2.528 2.528 0 0 1-2.521 2.521 2.528 2.528 0 0 1-2.52-2.521v-2.522h2.52zm0-1.261a2.528 2.528 0 0 1-2.52-2.52v-5.043a2.528 2.528 0 0 1 2.52-2.522h5.043a2.528 2.528 0 0 1 2.52 2.522v5.043a2.528 2.528 0 0 1-2.52 2.52h-5.043z" />
                </svg>
                <span>slack</span>
              </div>

             
              <div className="flex items-center gap-1 select-none font-sans font-black text-xs text-[#ff5a5f]">
                <svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 24 24">
                  <path d="M12 1c-.306 0-.612.062-.898.188A3.33 3.33 0 0 0 9.5 3c-.76.76-1.5 1.5-2.24 2.25l-.12.12C5.02 7.49 2.92 9.61.82 11.75a3.29 3.29 0 0 0-.13 4.67 3.33 3.33 0 0 0 3.29.93 2.14 2.14 0 0 1 2 .25c.57.43.91 1 1 1.62.15.8.69 1.48 1.44 1.83.75.35 1.6.3 2.3-.11.66-.39 1.4-.39 2.06 0 .7.41 1.55.46 2.3.11a2.38 2.38 0 0 0 1.44-1.83c.12-.66.46-1.24 1.05-1.67a2.1 2.1 0 0 1 2-.25c1 .35 2.15.02 2.82-.8a3.3 3.3 0 0 0-.1-4.64l-.06-.06c-2.12-2.15-4.22-4.25-6.32-6.38l-.13-.13A3.3 3.3 0 0 0 12.9 1.2c-.3-.13-.6-.2-.9-.2zm0 2c.16 0 .32.04.47.11a1.27 1.27 0 0 1 .59.81l.05.18.23.23c2 2 4 4 6 6l.12.12a1.3 1.3 0 0 1-.03 1.84 1.25 1.25 0 0 1-1.39.26l-.18-.08-.18-.08a4.13 4.13 0 0 0-4.06.49 4.14 4.14 0 0 0-2 3.26v.2l-.08.17a1.32 1.32 0 0 1-2.4 0l-.08-.17a4.14 4.14 0 0 0-2-3.26 4.13 4.13 0 0 0-4.06-.49l-.18.08-.18.08a1.25 1.25 0 0 1-1.39-.26 1.3 1.3 0 0 1-.02-1.84h.02c2-2 4-4 6-6l.2-.2c.15-.17.34-.31.55-.42.15-.07.31-.11.47-.11z" />
                </svg>
                <span>airbnb</span>
              </div>

             
              <span className="text-xs font-sans font-black tracking-widest text-[#000000] uppercase">
                UBER
              </span>

             
              <div className="flex items-center gap-1 select-none font-sans font-extrabold text-xs text-slate-800">
                <svg className="w-4 h-4 fill-[#96bf48] shrink-0" viewBox="0 0 24 24">
                  <path d="M18.8 5.4c-.2-.4-.6-.7-1.1-.7H6.3c-.5 0-1 .3-1.1.7l-2 5a.9.9 0 0 0 0 .7l4.8 11.2c.2.4.6.7 1.1.7h5.8c.5 0 1-.3 1.1-.7l4.8-11.2c.2-.2.2-.5 0-.7l-2-5zM12 1.5c-1.3 0-2.4 1-2.6 2.3h5.2C14.4 2.5 13.3 1.5 12 1.5z" />
                </svg>
                <span className="text-slate-800 font-extrabold text-xs">shopify</span>
              </div>

            </div>

          </div>
        </div> */}

      </div>
    </section>
  );
}
