import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  MessageCircle,
  Phone,
  Mail,
  Share2,
  X
} from "lucide-react";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function FloatingSidebar() {
  const [showSocials, setShowSocials] = useState(false);

  const phoneNumber = "916366930178";
  const email = "info@digitaleliteservices.in";

  const contactButtons = [
    {
      label: "WhatsApp",
      icon: <MessageCircle size={20} />,
      link: `https://wa.me/${phoneNumber}`,
      bg: "bg-[#25D366]"
    },
    {
      label: "Call Us",
      icon: <Phone size={20} />,
      link: `tel:+${phoneNumber}`,
      bg: "bg-[#2ecc71]"
    },
    {
      label: "Email Us",
      icon: <Mail size={20} />,
      link: `mailto:${email}`,
      bg: "bg-[#3498db]"
    }
  ];

  const socialButtons = [
    {
      label: "Twitter",
      icon: <FaTwitter size={20} />,
      link: "https://x.com/_DigitalElite_",
      bg: "bg-[#1DA1F2]"
    },
    {
      label: "Facebook",
      icon: <FaFacebook size={20} />,
      link: "https://www.facebook.com/people/Digital-Elite-Service/61578403771896/",
      bg: "bg-[#1877F2]"
    },
    {
      label: "Instagram",
      icon: <FaInstagram size={20} />,
      link: "https://www.instagram.com/digital_elite_services",
      bg: "bg-[#E4405F]"
    },
    {
      label: "YouTube",
      icon: <FaYoutube size={20} />,
      link: "https://www.youtube.com/@DigitalEliteServices/shorts",
      bg: "bg-[#FF0000]"
    }
  ];

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[70] flex flex-col items-end gap-[2px]">
      
      {/* Contact Buttons - Shown by Default */}
      {contactButtons.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-end"
        >
          <div className={`relative ${item.bg} text-white h-[52px] w-[52px] group-hover:w-44 transition-all duration-300 ease-in-out overflow-hidden shadow-lg flex items-center ${index === 0 ? 'rounded-tl-xl' : ''}`}>
            <span className="absolute left-4 opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 font-bold text-[11px] uppercase tracking-wider whitespace-nowrap">
              {item.label}
            </span>
            <div className="absolute right-4">{item.icon}</div>
          </div>
        </a>
      ))}

      {/* Social Media Group Toggle */}
      <button
        onClick={() => setShowSocials(!showSocials)}
        className="group relative flex items-center justify-end cursor-pointer"
      >
        <div className={`relative ${showSocials ? 'bg-zinc-800' : 'bg-zinc-600'} text-white h-[52px] w-[52px] group-hover:w-44 transition-all duration-300 ease-in-out overflow-hidden shadow-lg flex items-center ${!showSocials ? 'rounded-bl-xl' : ''}`}>
          <span className="absolute left-4 opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 font-bold text-[11px] uppercase tracking-wider whitespace-nowrap">
            {showSocials ? 'Hide Socials' : 'Social Media'}
          </span>
          <div className="absolute right-4">
            <Share2 size={20} className={showSocials ? 'rotate-45 transition-transform' : ''} />
          </div>
        </div>
      </button>

      {/* Social Media Buttons (Nested) */}
      <AnimatePresence>
        {showSocials && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="flex flex-col items-end gap-[2px] overflow-hidden"
          >
            {socialButtons.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-end"
              >
                <div className={`relative ${item.bg} text-white h-[48px] w-[48px] group-hover:w-40 transition-all duration-300 ease-in-out overflow-hidden shadow-lg flex items-center ${index === socialButtons.length - 1 ? 'rounded-bl-xl' : ''}`}>
                  <span className="absolute left-4 opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 font-bold text-[10px] uppercase tracking-wider whitespace-nowrap">
                    {item.label}
                  </span>
                  <div className="absolute right-3.5">{item.icon}</div>
                </div>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
