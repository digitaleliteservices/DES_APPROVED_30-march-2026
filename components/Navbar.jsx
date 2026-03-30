
// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X } from 'lucide-react';
// import { NAV_LINKS, DES_LOGO } from '../constants';


// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 20);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-[#E0F7FA] py-3 shadow-sm' : 'bg-transparent py-6'}`}>
//       <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
//         <Link to="/" className="flex items-center gap-3 group">
//           <div className="w-9 h-9 bg-white p-1 rounded-lg shadow-sm border border-zinc-100 flex items-center justify-center">
//             <img src={DES_LOGO} className="w-full h-full object-contain" alt="DES Logo" />
//           </div>
//           <span className="font-display font-bold text-xl tracking-tight text-[#2D3142]">
//             Digital Elite <span className="text-[#FF7B54]">Service</span>
//           </span>
//         </Link>

//         <div className="hidden md:flex items-center space-x-10">
//           {NAV_LINKS.filter(l => ['Home', 'About', 'Services', 'Portfolio', 'Contact'].includes(l.name)).map((link) => (
//             <Link
//               key={link.name}
//               to={link.href}
//               className={`text-[13px] font-semibold transition-all uppercase tracking-wider ${location.pathname === link.href ? 'text-[#FF7B54]' : 'text-[#7D8597] hover:text-[#2D3142]'}`}
//             >
//               {link.name}
//             </Link>
//           ))}
//         </div>

//         <button className="md:hidden p-2 text-zinc-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
//           {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="absolute top-full left-0 w-full bg-white border-b border-zinc-100 shadow-xl md:hidden">
//             <div className="flex flex-col p-8 space-y-6">
//               {NAV_LINKS.map((link) => (
//                 <Link
//                   key={link.name}
//                   to={link.href}
//                   onClick={() => setIsMobileMenuOpen(false)}
//                   className={`text-base font-bold uppercase tracking-widest ${location.pathname === link.href ? 'text-[#FF7B54]' : 'text-[#7D8597]'}`}
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, DES_LOGO } from '../constants';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg border-b border-[#E0F7FA] shadow-sm py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative flex items-center justify-between">

        {/* Logo - Left */}
        <Link to="/" className="flex items-center gap-3 group z-10">
          <div className="w-10 h-10 bg-white p-1 rounded-lg shadow-sm border border-zinc-100 flex items-center justify-center overflow-hidden">
            <img
              src={DES_LOGO}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              alt="DES Logo"
            />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-[#2D3142]">
            Digital Elite <span className="text-[#FF7B54]">Service</span>
          </span>
        </Link>

        {/* Centered Desktop Menu */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-10">
          {NAV_LINKS.filter((l) =>
            ['Home', 'About', 'Services', 'Portfolio', 'Contact'].includes(l.name)
          ).map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`relative text-[13px] font-semibold uppercase tracking-wider transition-colors duration-300 ${
                location.pathname === link.href
                  ? 'text-[#FF7B54]'
                  : 'text-[#7D8597] hover:text-[#2D3142]'
              }`}
            >
              {link.name}

              {/* Animated underline */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-[#FF7B54] transition-all duration-300 ${
                  location.pathname === link.href
                    ? 'w-full'
                    : 'w-0 hover:w-full'
                }`}
              />
            </Link>
          ))}
        </div>

        {/* CTA Button - Right */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="px-6 py-2.5 bg-[#FF7B54] text-white text-sm font-bold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-[#2D3142] z-10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-white border-b border-[#E0F7FA] shadow-xl md:hidden"
          >
            <div className="flex flex-col p-8 space-y-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-base font-bold uppercase tracking-widest ${
                    location.pathname === link.href
                      ? 'text-[#FF7B54]'
                      : 'text-[#7D8597]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 px-6 py-3 bg-[#FF7B54] text-white text-center font-bold rounded-lg"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
