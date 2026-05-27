
import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { Mail, Phone, MapPin, Heart, ArrowRight } from 'lucide-react';
import { DES_LOGO } from '../constants';
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const socials = [
  { icon: <FaTwitter />, link: "https://x.com/_DigitalElite_" },
  { icon: <FaFacebook />, link: "https://www.facebook.com/people/Digital-Elite-Service/61578403771896/" },
  { icon: <FaInstagram />, link: "https://www.instagram.com/digital_elite_services" },
  { icon: <FaYoutube />, link: "https://www.youtube.com/@DigitalEliteServices/shorts" },
];


const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white pt-24 pb-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[120px] -mr-40 -mt-40" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-3 group cursor-pointer">
              <div className="w-10 h-10 bg-white p-1.5 rounded-lg flex items-center justify-center shadow-lg group-hover:rotate-3 transition-transform">
                <img src={DES_LOGO} className="w-full h-full object-contain" alt="Logo" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl tracking-tight leading-none">
                  Digital Elite <span className="text-[#FF7B54]">Service</span>
                </span>
              </div>
            </Link>
            <p className="text-zinc-400 text-base leading-relaxed font-normal">
              Empowering industry leaders to dominate the digital landscape through strategy and engineering.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 mb-8">Intelligence</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-zinc-400 hover:text-[#FF7B54] transition-all font-medium text-sm tracking-wide">
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/privacy-policy" className="text-zinc-400 hover:text-[#FF7B54] transition-all font-medium text-sm tracking-wide">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="text-zinc-400 hover:text-[#FF7B54] transition-all font-medium text-sm tracking-wide">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 mb-8">Specialties</h4>
            <ul className="space-y-4">
              {['Elite SEO', 'Web Architecture', 'Visual Design', 'Growth Strategy'].map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-zinc-400 hover:text-[#89E0F0] transition-all font-medium text-sm tracking-wide">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 mb-8">
              Follow Us
            </h4>

            <ul className="flex gap-5">
              {socials.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-[#89E0F0] transition-all text-lg"
                  >
                    {item.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 mb-8">Connect</h4>
            <p className="text-zinc-400 mb-6 text-sm font-normal">Join our network for digital tactics.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Secure Email" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 outline-none focus:ring-1 focus:ring-[#FF7B54] transition-all pr-12 text-sm" 
              />
              <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#FF7B54] hover:bg-[#FFB26B] text-white px-3 rounded-lg transition-all">
                <ArrowRight size={16} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>

        {/* <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-zinc-500 font-medium tracking-tight text-xs">© 2026 Digital Elite Service. Redefined.</p>
        </div> */}
         <div className="border-t border-zinc-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-sm">
          <p>
            © {new Date().getFullYear()} Digital Elite Service. Redefined.
          </p>
          <div className="flex gap-4 mt-3 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-[#FF7B54] transition text-zinc-500 hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="hover:text-[#FF7B54] transition text-zinc-500 hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;


// import React from "react";
// import { Github, Linkedin, Mail } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="bg-zinc-900 text-zinc-400">
//       <div className="max-w-7xl mx-auto px-6 py-12">

//         {/* Top section */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

//           {/* Brand */}
//           <div>
//             <h2 className="text-white text-xl font-semibold tracking-wide">
//               K S GANESH
//             </h2>
//             <p className="mt-3 text-sm leading-relaxed">
//               Full-Stack Developer crafting clean, scalable, and modern web
//               experiences.
//             </p>
//           </div>

//           {/* Links */}
//           <div>
//             <h3 className="text-white font-medium mb-4">Quick Links</h3>
//             <ul className="space-y-2 text-sm">
//               <li><a href="#home" className="hover:text-white transition">Home</a></li>
//               <li><a href="#about" className="hover:text-white transition">About</a></li>
//               <li><a href="#services" className="hover:text-white transition">Services</a></li>
//               <li><a href="/privacy-policy" className="hover:text-white transition">Privacy Policy</a></li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h3 className="text-white font-medium mb-4">Contact</h3>
//             <div className="flex items-center gap-4">
//               <a href="mailto:yourmail@example.com" className="hover:text-white transition">
//                 <Mail size={18} />
//               </a>
//               <a href="#" className="hover:text-white transition">
//                 <Github size={18} />
//               </a>
//               <a href="#" className="hover:text-white transition">
//                 <Linkedin size={18} />
//               </a>
//             </div>
//           </div>

//         </div>

//         {/* Divider */}
//         <div className="border-t border-zinc-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-sm">
//           <p>
//             © {new Date().getFullYear()} K S GANESH. All rights reserved.
//           </p>
//           <div className="flex gap-4 mt-3 md:mt-0">
//             <a href="/privacy-policy" className="hover:text-white transition">
//               Privacy Policy
//             </a>
//             <a href="/terms-and-conditions" className="hover:text-white transition">
//               Terms & Conditions
//             </a>
//           </div>
//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;
