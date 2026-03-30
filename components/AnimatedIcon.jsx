
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

export const AnimatedIcon = ({ type, isHovered, mousePos }) => {
  const containerRef = useRef(null);
  const scanBarRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Initial State / Idle
      gsap.set(".tech-node", { opacity: 0.3 });
      gsap.to(".tech-line", { strokeDashoffset: 0, duration: 1.5, ease: "power2.out" });

      if (isHovered) {
        // 2. The "System Scan" Effect
        gsap.fromTo(scanBarRef.current, 
          { top: "-10%", opacity: 0 }, 
          { top: "110%", opacity: 0.8, duration: 1.2, ease: "none", repeat: -1 }
        );

        // 3. Advanced Interactions per Type
        switch (type) {
          case 'Innovation':
            gsap.to(".core-module", { rotate: 90, scale: 1.1, duration: 0.8, ease: "expo.out" });
            gsap.to(".orbit-ring", { rotate: 360, duration: 10, repeat: -1, ease: "none" });
            gsap.to(".data-dot", { opacity: 1, y: -5, stagger: 0.1, repeat: -1, yoyo: true });
            break;
          case 'Integrity':
            gsap.to(".seal-inner", { scale: 0.9, duration: 0.4, repeat: -1, yoyo: true, ease: "sine.inOut" });
            gsap.to(".lock-bar", { x: 5, duration: 0.1, repeat: 5, yoyo: true });
            break;
          case 'Excellence':
            gsap.to(".target-cross", { scale: 1.5, opacity: 1, duration: 0.5, ease: "back.out(3)" });
            gsap.to(".measure-line", { width: "100%", duration: 0.8, ease: "power4.out" });
            break;
          case 'Collaboration':
            gsap.to(".node-link", { strokeDashoffset: 0, opacity: 1, duration: 0.6, stagger: 0.2 });
            gsap.to(".node-point", { scale: 1.5, fill: "#ca8a04", duration: 0.3, stagger: 0.1 });
            break;
          case 'Client-Centric':
            gsap.to(".focus-frame", { padding: "2px", duration: 0.3, ease: "power2.out" });
            gsap.to(".center-pulse", { scale: 2, opacity: 0, duration: 1, repeat: -1 });
            break;
          case 'Adaptability':
            gsap.to(".wave-bar", { height: "80%", duration: 0.4, stagger: { each: 0.1, from: "center", repeat: -1, yoyo: true } });
            break;
        }
      } else {
        // RESET
        if (scanBarRef.current) gsap.set(scanBarRef.current, { opacity: 0 });
        gsap.to(".core-module, .orbit-ring, .target-cross, .node-point", { rotate: 0, scale: 1, opacity: 0.3, fill: "none", duration: 0.5 });
        gsap.to(".measure-line", { width: "0%", duration: 0.5 });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [isHovered, type]);

  // Precision Parallax
  useEffect(() => {
    if (!containerRef.current || !isHovered) return;
    gsap.to(containerRef.current, {
      x: mousePos.x * 8,
      y: mousePos.y * 8,
      rotateX: -mousePos.y * 10,
      rotateY: mousePos.x * 10,
      duration: 0.4,
      ease: "power3.out"
    });
  }, [mousePos, isHovered]);

  const renderCorporateSVG = () => {
    const common = { viewBox: "0 0 48 48", className: "w-full h-full relative z-10", fill: "none", stroke: "currentColor" };
    
    switch (type) {
      case 'Innovation':
        return (
          <svg {...common}>
            <circle cx="24" cy="24" r="20" className="tech-line opacity-10" strokeWidth="0.5" strokeDasharray="2 2" />
            <circle cx="24" cy="24" r="15" className="orbit-ring tech-line" strokeWidth="1" strokeDasharray="5 15" />
            <rect x="18" y="18" width="12" height="12" className="core-module tech-line" strokeWidth="2" />
            <circle cx="24" cy="12" r="1.5" className="data-dot fill-gold-600" />
            <circle cx="36" cy="24" r="1.5" className="data-dot fill-gold-600" />
            <circle cx="24" cy="36" r="1.5" className="data-dot fill-gold-600" />
          </svg>
        );
      case 'Integrity':
        return (
          <svg {...common}>
            <path d="M12 12H36V36H12V12Z" className="tech-line opacity-20" strokeWidth="1" />
            <path d="M24 8V16M24 32V40M8 24H16M32 24H40" className="tech-line opacity-30" strokeWidth="1" />
            <rect x="20" y="20" width="8" height="8" className="seal-inner tech-line" stroke="#ca8a04" strokeWidth="2" />
            <path d="M16 24H32" className="lock-bar tech-line" stroke="#ca8a04" strokeWidth="1" opacity="0.5" />
          </svg>
        );
      case 'Excellence':
        return (
          <svg {...common}>
            <path d="M4 24H44" className="tech-line opacity-10" strokeWidth="0.5" />
            <path d="M24 4V44" className="tech-line opacity-10" strokeWidth="0.5" />
            <circle cx="24" cy="24" r="8" className="tech-line" strokeWidth="1.5" />
            <path d="M20 24L24 20L28 24L24 28Z" className="target-cross tech-line" fill="#ca8a04" fillOpacity="0.2" />
            <line x1="12" y1="34" x2="36" y2="34" className="tech-line opacity-20" strokeWidth="1" />
            <line x1="12" y1="34" x2="12" y2="34" className="measure-line" stroke="#ca8a04" strokeWidth="2" />
          </svg>
        );
      case 'Collaboration':
        return (
          <svg {...common}>
            <circle cx="14" cy="14" r="3" className="node-point tech-line" strokeWidth="1" />
            <circle cx="34" cy="14" r="3" className="node-point tech-line" strokeWidth="1" />
            <circle cx="24" cy="34" r="3" className="node-point tech-line" strokeWidth="1" />
            <path d="M17 14H31" className="node-link tech-line" strokeWidth="1.5" strokeDasharray="100" strokeDashoffset="100" opacity="0" />
            <path d="M15.5 16.5L22.5 31.5" className="node-link tech-line" strokeWidth="1.5" strokeDasharray="100" strokeDashoffset="100" opacity="0" />
            <path d="M32.5 16.5L25.5 31.5" className="node-link tech-line" strokeWidth="1.5" strokeDasharray="100" strokeDashoffset="100" opacity="0" />
          </svg>
        );
      case 'Client-Centric':
        return (
          <svg {...common}>
            <path d="M10 10V16M10 10H16M38 10V16M38 10H32M10 38V32M10 38H16M38 38V32M38 38H32" className="focus-frame tech-line" strokeWidth="1.5" />
            <circle cx="24" cy="24" r="2" className="center-pulse" fill="#ca8a04" />
            <circle cx="24" cy="24" r="6" className="tech-line" strokeWidth="1" strokeDasharray="2 4" />
          </svg>
        );
      case 'Adaptability':
        return (
          <svg {...common}>
            <rect x="10" y="20" width="4" height="8" className="wave-bar tech-line" fill="#ca8a04" fillOpacity="0.1" />
            <rect x="18" y="16" width="4" height="16" className="wave-bar tech-line" fill="#ca8a04" fillOpacity="0.1" />
            <rect x="26" y="12" width="4" height="24" className="wave-bar tech-line" fill="#ca8a04" fillOpacity="0.1" />
            <rect x="34" y="18" width="4" height="12" className="wave-bar tech-line" fill="#ca8a04" fillOpacity="0.1" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-xl"
      style={{ perspective: "1000px" }}
    >
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', backgroundSize: '8px 8px' }} />
      
      <div 
        ref={scanBarRef}
        className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold-500/50 to-transparent z-20 pointer-events-none blur-[1px]"
      />

      {renderCorporateSVG()}
    </div>
  );
};
