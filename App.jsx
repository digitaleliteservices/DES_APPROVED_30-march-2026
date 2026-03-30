
import React, { useState, useEffect } from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  useLocation 
} from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import FloatingSidebar from './components/MessageIcons';

import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import { ArrowUp } from 'lucide-react';
import MagneticButton from './components/MagneticButton';
import DESLogo from './assets/images/DES-LOGO.png';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    const handleScroll = () => setShowBackToTop(window.scrollY > 700);
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (isLoading) {
    return (
      <AnimatePresence>
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-zinc-950 flex flex-col items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 opacity-20">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [0, 360],
                  x: [0, 100 * (i % 2 === 0 ? 1 : -1), 0],
                  y: [0, 100 * (i < 3 ? 1 : -1), 0]
                }}
                transition={{ 
                  duration: 8 + i * 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className={`absolute ${i % 2 === 0 ? 'bg-gold-600/30' : 'bg-brand-600/30'} blur-[100px] rounded-full`}
                style={{
                  width: `${300 + i * 80}px`,
                  height: `${300 + i * 80}px`,
                  top: `${15 * i}%`,
                  left: `${15 * i}%`,
                }}
              />
            ))}
          </div>
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex flex-col items-center gap-6 relative z-10">
             <div className="w-32 h-32 flex items-center justify-center">
                <img src={DESLogo} className="w-full h-full object-contain animate-float" alt="Logo" />
             </div>
             <div className="flex flex-col items-center">
                <span className="text-white font-display font-black text-4xl uppercase tracking-tighter">Digital Elite <span className="text-gold-500">Service</span></span>
                <span className="text-zinc-500 font-bold uppercase tracking-[0.4em] text-xs mt-2">Redefining Excellence</span>
             </div>
          </motion.div>
          <div className="mt-12 w-64 h-[2px] bg-white/10 rounded-full overflow-hidden relative z-10">
            <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1.8, ease: "easeInOut" }} className="h-full bg-gradient-to-r from-brand-500 to-gold-500 shadow-[0_0_30px_#C5A021]" />
          </div>
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <Router>
      <ScrollToTop />
      <CustomCursor />
      <div className="relative antialiased font-sans selection:bg-gold-500 selection:text-white">
        <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-500 to-gold-500 z-[101] origin-left" style={{ scaleX }} />
        <Navbar />
        <main className="min-h-screen">
          <FloatingSidebar />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
        <AnimatePresence>
          {showBackToTop && (
            <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} className="fixed bottom-10 right-10 z-50">
              <MagneticButton onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <button className="w-16 h-16 bg-gold-500 text-white rounded-3xl flex items-center justify-center shadow-2xl hover:bg-gold-600 transition-all hover:scale-110">
                  <ArrowUp size={28} strokeWidth={3} />
                </button>
              </MagneticButton>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <style>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 30s linear infinite; }
        .perspective-1000 { perspective: 1000px; }
        body { cursor: none; }
        a, button, .cursor-pointer { cursor: none !important; }
      `}</style>
    </Router>
  );
};

export default App;
