// import React, { useEffect, useRef } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { SERVICES } from '../constants';
// import { SERVICE_META } from '../components/Services';
// import { SERVICE_DETAILS } from '../data/serviceDetails';
// import { 
//   ArrowRight, CheckCircle2, PhoneCall,
//   Lightbulb, Target, Tag, Clock, Users, ShieldCheck, TrendingUp, Play
// } from 'lucide-react';

// gsap.registerPlugin(ScrollTrigger);

// const getIconForTitle = (title) => {
//   const t = title.toLowerCase();
//   if (t.includes('creative') || t.includes('idea')) return <Lightbulb />;
//   if (t.includes('custom') || t.includes('target')) return <Target />;
//   if (t.includes('price') || t.includes('afford')) return <Tag />;
//   if (t.includes('time') || t.includes('quick')) return <Clock />;
//   if (t.includes('client') || t.includes('team')) return <Users />;
//   if (t.includes('trust') || t.includes('credible')) return <ShieldCheck />;
//   if (t.includes('boost') || t.includes('growth')) return <TrendingUp />;
//   return <CheckCircle2 />;
// };

// const ServiceDetailsPage = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const containerRef = useRef(null);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [id]);

//   const selectedService = SERVICES.find(s => s.id === id);
//   const selectedDetails = SERVICE_DETAILS[id];
//   const serviceIndex = SERVICES.findIndex(s => s.id === id);
//   const meta = SERVICE_META[serviceIndex];

//   useEffect(() => {
//     if (!selectedService || !containerRef.current) return;

//     const ctx = gsap.context(() => {
//       // Use fromTo to guarantee opacity recovers even if scrollTrigger has issues
//       gsap.fromTo('.hero-content > *', 
//         { y: 30, opacity: 0 },
//         { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
//       );
      
//       gsap.utils.toArray('.feature-card').forEach((card, i) => {
//         gsap.fromTo(card,
//           { y: 40 },
//           {
//             scrollTrigger: { trigger: card, start: 'top 95%' },
//             y: 0, duration: 0.6, delay: (i % 3) * 0.1, ease: 'power3.out'
//           }
//         );
//       });

//       gsap.utils.toArray('.why-choose-item').forEach((item, i) => {
//         gsap.fromTo(item,
//           { y: 30 },
//           {
//             scrollTrigger: { trigger: item, start: 'top 95%' },
//             y: 0, duration: 0.6, delay: (i % 5) * 0.1, ease: 'power3.out'
//           }
//         );
//       });
      
//       gsap.fromTo('.power-list li', 
//         { x: -30 },
//         {
//           scrollTrigger: { trigger: '.power-list', start: 'top 85%' },
//           x: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out'
//         }
//       );

//       gsap.utils.toArray('.process-step').forEach((step, i) => {
//         gsap.fromTo(step,
//           { y: 30 },
//           {
//             scrollTrigger: { trigger: step, start: 'top 90%' },
//             y: 0, duration: 0.6, delay: i * 0.1, ease: 'power3.out'
//           }
//         );
//       });
//     }, containerRef);
//     return () => ctx.revert();
//   }, [selectedService]);

//   if (!selectedService || !selectedDetails) {
//     return <div className="min-h-screen bg-slate-900" />;
//   }

//   const whyChooseUs = selectedDetails.detailedContent?.[0];
//   const powerOfDesign = selectedDetails.detailedContent?.[1];
//   const designProcess = selectedDetails.detailedContent?.[2];

//   return (
//     <div ref={containerRef} className="min-h-screen font-sans selection:bg-fuchsia-500/30 text-slate-800 bg-white">
      
//       {/* 1. HERO SECTION */}
//       <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900">
//         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/30 rounded-full blur-[100px] pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
//         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-900/40 rounded-full blur-[100px] pointer-events-none transform -translate-x-1/3 translate-y-1/3" />
        
//         <div className="container mx-auto px-6 lg:px-12 relative z-10">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
            
//             <div className="hero-content text-white">
//               <div className="inline-block px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-[10px] font-bold uppercase tracking-widest mb-6 shadow-sm">
//                 {selectedDetails.subtitle}
//               </div>
              
//               <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
//                 Design That <br/>
//                 Tells Your Story.<br/>
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-fuchsia-500 to-orange-500">
//                   Builds Your Brand.
//                 </span>
//               </h1>
              
//               <p className="text-base lg:text-lg text-slate-300 mb-10 max-w-xl font-normal leading-relaxed">
//                 {selectedDetails.desc}
//               </p>
              
//               <div className="flex flex-wrap gap-4 items-center">
//                 <button 
//                   onClick={() => document.getElementById('core-services').scrollIntoView({behavior: 'smooth'})}
//                   className="px-8 py-3.5 bg-gradient-to-r from-fuchsia-500 to-purple-600 rounded-full text-white font-semibold text-sm hover:shadow-lg transition-all flex items-center gap-2"
//                 >
//                   Explore Services <ArrowRight size={16} />
//                 </button>
//                 <button 
//                   onClick={() => navigate('/portfolio')}
//                   className="px-6 py-3.5 border border-white/20 rounded-full text-white font-semibold text-sm hover:bg-white/10 transition-all flex items-center gap-3"
//                 >
//                   <div className="w-6 h-6 rounded-full border border-white flex items-center justify-center">
//                     <Play size={10} fill="currentColor" className="ml-0.5" />
//                   </div>
//                   View Our Work
//                 </button>
//               </div>
//             </div>

//             <div className="relative flex justify-center lg:justify-end hero-content">
//               <div className="relative w-full max-w-xl">
//                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-indigo-600/30 rounded-full blur-[80px]" />
//                  <img src={meta?.img || "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800"} alt="Service Graphic" className="relative z-10 w-full h-auto object-contain drop-shadow-2xl" />
//               </div>
//             </div>
//           </div>
          
//           <div className="hero-content mt-24 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8">
//             {[
//               { label: 'Projects Completed', value: '500+' },
//               { label: 'Client Satisfaction', value: '98%' },
//               { label: 'Years Experience', value: '10+' },
//               { label: 'Industries Served', value: '50+' },
//             ].map((stat, i) => (
//               <div key={i} className="flex items-center gap-4">
//                 <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-orange-400">
//                   <CheckCircle2 size={24} />
//                 </div>
//                 <div>
//                   <div className="text-white font-bold text-2xl">{stat.value}</div>
//                   <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-0.5">{stat.label}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 2. CORE SERVICES SECTION */}
//       <section id="core-services" className="py-24 bg-slate-50">
//         <div className="container mx-auto px-6 lg:px-12">
//           <div className="text-center mb-16 max-w-3xl mx-auto">
//             <div className="text-indigo-700 text-[11px] font-bold uppercase tracking-widest mb-4">Our Core Services</div>
//             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Professional {selectedService.title} Services</h2>
//             <p className="text-slate-600 text-sm md:text-base">Comprehensive solutions tailored to meet the diverse needs of businesses across industries.</p>
//           </div>

//           <div className="features-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {selectedDetails.features.map((feature, i) => {
//               const isObj = typeof feature === 'object' && feature !== null;
//               const rawTitle = isObj ? feature.title : feature;
//               const desc = isObj ? feature.desc : 'Professional and creative solutions designed to capture attention and communicate your message clearly to your audience.';
//               const match = rawTitle.match(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])\s*(.*)/);
//               const text = match ? match[2] : rawTitle;
//               const num = (i + 1).toString().padStart(2, '0');
//               const colors = [
//                 { text: 'text-purple-700', bg: 'bg-purple-100', icon: 'text-purple-700' },
//                 { text: 'text-pink-600', bg: 'bg-pink-100', icon: 'text-pink-600' },
//                 { text: 'text-orange-500', bg: 'bg-orange-100', icon: 'text-orange-500' },
//                 { text: 'text-teal-500', bg: 'bg-teal-100', icon: 'text-teal-500' },
//                 { text: 'text-fuchsia-600', bg: 'bg-fuchsia-100', icon: 'text-fuchsia-600' },
//                 { text: 'text-blue-600', bg: 'bg-blue-100', icon: 'text-blue-600' }
//               ];
//               const theme = colors[i % colors.length];

//               return (
//                 <div key={i} className="feature-card bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all flex flex-col h-full">
//                   <div className="flex justify-between items-start mb-6">
//                     <div className={`w-14 h-14 rounded-2xl ${theme.bg} flex items-center justify-center text-2xl`}>
//                       {match ? match[1] : '✨'}
//                     </div>
//                     <span className={`text-sm font-bold opacity-30 ${theme.text}`}>{num}</span>
//                   </div>
//                   <h4 className="text-xl font-bold text-slate-900 mb-3">{text}</h4>
//                   <p className="text-slate-500 text-sm mb-8 leading-relaxed flex-grow">
//                     {desc}
//                   </p>
//                   <button className={`text-[13px] font-bold ${theme.text} flex items-center gap-1.5 hover:gap-2.5 transition-all mt-auto`}>
//                     Learn More <ArrowRight size={14} />
//                   </button>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* 3. WHY CHOOSE US */}
//       {whyChooseUs && (
//         <section className="py-24 relative overflow-hidden bg-slate-900">
//           <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent bg-[length:24px_24px]" />
          
//           <div className="container mx-auto px-6 lg:px-12 relative z-10">
//             <div className="text-center mb-16">
//               <div className="text-fuchsia-400 text-[11px] font-bold uppercase tracking-widest mb-4">Why Choose Us?</div>
//               <h2 className="text-3xl md:text-4xl font-bold text-white">
//                 Why Businesses Choose <br/>Digital Elite Services?
//               </h2>
//             </div>

//             <div className="why-choose-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
//               {whyChooseUs.items.map((item, i) => {
//                 const colors = ['bg-indigo-600', 'bg-pink-600', 'bg-orange-500', 'bg-teal-500', 'bg-blue-600'];
//                 const bgColor = colors[i % colors.length];
//                 return (
//                   <div key={i} className="why-choose-item text-center flex flex-col items-center">
//                     <div className={`w-20 h-20 rounded-full ${bgColor} flex items-center justify-center text-white mb-6 shadow-lg border-[4px] border-slate-900 ring-1 ring-white/10`}>
//                       {getIconForTitle(item.name)}
//                     </div>
//                     <h4 className="text-white font-bold mb-2 text-[13px] tracking-wide">{item.name}</h4>
//                     <p className="text-slate-400 text-[11px] leading-relaxed max-w-[180px]">{item.text}</p>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* 4. THE POWER OF GREAT DESIGN */}
//       {powerOfDesign && (
//         <section className="py-24 bg-slate-50 overflow-hidden">
//           <div className="container mx-auto px-6 lg:px-12">
//             <div className="grid lg:grid-cols-2 gap-16 items-center">
//               <div>
//                 <div className="text-indigo-700 text-[11px] font-bold uppercase tracking-widest mb-4">The Power of Great Design</div>
//                 <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-10 leading-tight">
//                   Design That Drives <br/>
//                   Business Growth
//                 </h2>
                
//                 <ul className="power-list space-y-8">
//                   {powerOfDesign.items.map((item, i) => (
//                     <li key={i} className="flex gap-5">
//                       <div className="mt-1 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
//                         <CheckCircle2 size={12} strokeWidth={3} />
//                       </div>
//                       <div>
//                         <h4 className="text-slate-900 font-bold mb-1.5 text-[15px]">{item.name}</h4>
//                         <p className="text-slate-600 text-[13px] leading-relaxed">{item.text}</p>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//               <div className="relative h-[400px] lg:h-[500px]">
//                 <div className="absolute inset-0 bg-purple-500/10 rounded-[3rem] blur-[60px]" />
//                 <img src={meta?.img || "https://images.unsplash.com/photo-1561070791-2526d30994b5"} alt="Growth" className="relative z-10 w-full h-full object-cover rounded-3xl shadow-xl rotate-2 hover:rotate-0 transition-transform duration-700" />
//               </div>
//             </div>
//           </div>
//         </section>
//       )}

//       {/* 5. OUR DESIGN PROCESS */}
//       {designProcess && (
//         <section className="py-24 bg-white">
//           <div className="container mx-auto px-6 lg:px-12">
//             <div className="text-center mb-20">
//               <div className="text-indigo-700 text-[11px] font-bold uppercase tracking-widest mb-4">Our Design Process</div>
//               <h2 className="text-3xl md:text-4xl font-bold text-slate-900">A Simple & Effective Design Process</h2>
//             </div>

//             <div className="process-timeline relative max-w-5xl mx-auto">
//               <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-0 border-t border-dashed border-slate-300 z-0" />
              
//               <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
//                 {designProcess.items.map((item, i) => {
//                   const num = (i + 1).toString().padStart(2, '0');
//                   const colors = ['bg-purple-700', 'bg-pink-600', 'bg-orange-500', 'bg-teal-500', 'bg-blue-600'];
//                   const bgColor = colors[i % colors.length];
//                   return (
//                     <div key={i} className="process-step text-center">
//                       <div className={`w-20 h-20 mx-auto rounded-full ${bgColor} flex items-center justify-center text-white mb-6 shadow-xl border-[6px] border-white`}>
//                         {getIconForTitle(item.name)}
//                       </div>
//                       <div className="text-indigo-700 font-bold text-[11px] mb-2">{num}</div>
//                       <h4 className="text-slate-900 font-bold text-[13px] mb-3 h-10 px-2">{item.name.replace(/^\d+\.\s*/, '')}</h4>
//                       <p className="text-slate-500 text-[11px] leading-relaxed px-2">{item.text}</p>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </section>
//       )}

//       {/* 6. FOOTER CTA */}
//       <section className="py-20 bg-slate-900 relative overflow-hidden">
//         <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
        
//         <div className="container mx-auto px-6 lg:px-12 relative z-10">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
//                 Ready to Elevate Your Brand?
//               </h2>
//               <p className="text-slate-300 text-base mb-10 max-w-md">
//                 Let's create stunning designs that leave a lasting impression and drive your business forward.
//               </p>
//               <div className="flex flex-wrap gap-6 items-center">
//                 <button 
//                   onClick={() => navigate('/contact')}
//                   className="px-8 py-4 bg-gradient-to-r from-fuchsia-500 to-pink-600 rounded-full text-white font-bold text-[13px] hover:shadow-lg transition-all flex items-center gap-2"
//                 >
//                   Get Started Today <ArrowRight size={16} />
//                 </button>
//                 <div className="flex items-center gap-4 text-white">
//                   <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
//                     <PhoneCall size={18} />
//                   </div>
//                   <div>
//                     <div className="text-[11px] text-slate-400 mb-0.5">Talk to Our Expert</div>
//                     <div className="font-bold text-base">+91 78926 98774</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             <div className="hidden lg:flex justify-end">
//               <div className="relative w-80 h-80">
//                 <img src={meta?.img || "https://images.unsplash.com/photo-1561070791-2526d30994b5"} alt="Graphic" className="w-full h-full object-cover rounded-3xl opacity-80 mix-blend-overlay" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default ServiceDetailsPage;


// import React, { useEffect, useRef } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { SERVICES } from '../constants';
// import { SERVICE_META } from '../components/Services';
// import { SERVICE_DETAILS } from '../data/serviceDetails';
// import { 
//   ArrowRight, CheckCircle2, PhoneCall,
//   Lightbulb, Target, Tag, Clock, Users, ShieldCheck, TrendingUp, Play,
//   Search, Settings, Globe, FileText, Link, MapPin,
//   BarChart3, ClipboardCheck, Activity, Eye, Zap, Rocket,
//   PenTool, Code, ShoppingCart, Layout, Plug, Wrench,
//   Sparkles, Palette, Image, Newspaper, Monitor, Package, CreditCard,
//   Bot, Mail, Database, Headphones, MessageCircle, Megaphone,
//   ChartNoAxesCombined, Award, Cpu, Heart, Trophy, Shield
// } from 'lucide-react';

// gsap.registerPlugin(ScrollTrigger);

// // Icon mapping for different feature types
// const getIconForTitle = (title, iconType = null) => {
//   // If specific icon is provided from the data
//   if (iconType) {
//     const IconComponent = iconType;
//     return <IconComponent size={32} strokeWidth={1.5} />;
//   }
  
//   const t = title.toLowerCase();
  
//   // SEO related icons
//   if (t.includes('keyword') || t.includes('search')) return <Search size={32} strokeWidth={1.5} />;
//   if (t.includes('on-page') || t.includes('optimization')) return <Settings size={32} strokeWidth={1.5} />;
//   if (t.includes('technical') || t.includes('backend')) return <Globe size={32} strokeWidth={1.5} />;
//   if (t.includes('content')) return <FileText size={32} strokeWidth={1.5} />;
//   if (t.includes('link')) return <Link size={32} strokeWidth={1.5} />;
//   if (t.includes('local')) return <MapPin size={32} strokeWidth={1.5} />;
  
//   // Web dev related icons
//   if (t.includes('ui/ux') || t.includes('design')) return <PenTool size={32} strokeWidth={1.5} />;
//   if (t.includes('custom') && t.includes('web')) return <Code size={32} strokeWidth={1.5} />;
//   if (t.includes('e-commerce') || t.includes('ecommerce')) return <ShoppingCart size={32} strokeWidth={1.5} />;
//   if (t.includes('creative') || t.includes('layout')) return <Layout size={32} strokeWidth={1.5} />;
//   if (t.includes('api') || t.includes('integration')) return <Plug size={32} strokeWidth={1.5} />;
//   if (t.includes('maintenance') || t.includes('support')) return <Wrench size={32} strokeWidth={1.5} />;
  
//   // SMM related icons
//   if (t.includes('social media strategy')) return <Target size={32} strokeWidth={1.5} />;
//   if (t.includes('creative content')) return <Sparkles size={32} strokeWidth={1.5} />;
//   if (t.includes('management')) return <Calendar size={32} strokeWidth={1.5} />;
//   if (t.includes('paid') || t.includes('advertising')) return <Megaphone size={32} strokeWidth={1.5} />;
//   if (t.includes('analytics') || t.includes('tracking')) return <ChartNoAxesCombined size={32} strokeWidth={1.5} />;
//   if (t.includes('brand engagement')) return <MessageCircle size={32} strokeWidth={1.5} />;
  
//   // Graphic design related icons
//   if (t.includes('logo') || t.includes('brand identity')) return <Palette size={32} strokeWidth={1.5} />;
//   if (t.includes('social media creatives')) return <Image size={32} strokeWidth={1.5} />;
//   if (t.includes('brochure') || t.includes('flyer')) return <Newspaper size={32} strokeWidth={1.5} />;
//   if (t.includes('website graphics') || t.includes('ui elements')) return <Monitor size={32} strokeWidth={1.5} />;
//   if (t.includes('packaging')) return <Package size={32} strokeWidth={1.5} />;
//   if (t.includes('business cards') || t.includes('stationery')) return <CreditCard size={32} strokeWidth={1.5} />;
  
//   // Lead gen / PPC related icons
//   if (t.includes('paid search')) return <Search size={32} strokeWidth={1.5} />;
//   if (t.includes('display') || t.includes('remarketing')) return <Eye size={32} strokeWidth={1.5} />;
//   if (t.includes('conversion')) return <TrendingUp size={32} strokeWidth={1.5} />;
//   if (t.includes('crm')) return <Database size={32} strokeWidth={1.5} />;
  
//   // WhatsApp automation related icons
//   if (t.includes('chatbot')) return <Bot size={32} strokeWidth={1.5} />;
//   if (t.includes('bulk messaging')) return <Mail size={32} strokeWidth={1.5} />;
//   if (t.includes('24/7')) return <Headphones size={32} strokeWidth={1.5} />;
  
//   // General icons
//   if (t.includes('creative') || t.includes('idea')) return <Lightbulb size={32} strokeWidth={1.5} />;
//   if (t.includes('custom') || t.includes('target')) return <Target size={32} strokeWidth={1.5} />;
//   if (t.includes('price') || t.includes('afford')) return <Tag size={32} strokeWidth={1.5} />;
//   if (t.includes('time') || t.includes('quick')) return <Clock size={32} strokeWidth={1.5} />;
//   if (t.includes('client') || t.includes('team') || t.includes('expert')) return <Users size={32} strokeWidth={1.5} />;
//   if (t.includes('trust') || t.includes('credible') || t.includes('ethical')) return <ShieldCheck size={32} strokeWidth={1.5} />;
//   if (t.includes('boost') || t.includes('growth') || t.includes('result')) return <TrendingUp size={32} strokeWidth={1.5} />;
//   if (t.includes('transparent') || t.includes('reporting')) return <ClipboardCheck size={32} strokeWidth={1.5} />;
//   if (t.includes('data-driven')) return <BarChart3 size={32} strokeWidth={1.5} />;
//   if (t.includes('audit')) return <Activity size={32} strokeWidth={1.5} />;
//   if (t.includes('visibility')) return <Eye size={32} strokeWidth={1.5} />;
//   if (t.includes('latest technologies')) return <Cpu size={32} strokeWidth={1.5} />;
//   if (t.includes('end-to-end')) return <Rocket size={32} strokeWidth={1.5} />;
//   if (t.includes('measurable results')) return <BarChart3 size={32} strokeWidth={1.5} />;
//   if (t.includes('competitive edge')) return <Trophy size={32} strokeWidth={1.5} />;
//   if (t.includes('customer engagement')) return <Heart size={32} strokeWidth={1.5} />;
//   if (t.includes('brand strength')) return <Shield size={32} strokeWidth={1.5} />;
  
//   // Default icon
//   return <CheckCircle2 size={32} strokeWidth={1.5} />;
// };

// // Helper to extract emoji-free text
// const getCleanText = (text) => {
//   const match = text.match(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])\s*(.*)/);
//   return match ? match[2] : text;
// };

// const ServiceDetailsPage = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const containerRef = useRef(null);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [id]);

//   const selectedService = SERVICES.find(s => s.id === id);
//   const selectedDetails = SERVICE_DETAILS[id];
//   const serviceIndex = SERVICES.findIndex(s => s.id === id);
//   const meta = SERVICE_META[serviceIndex];

//   useEffect(() => {
//     if (!selectedService || !containerRef.current) return;

//     const ctx = gsap.context(() => {
//       gsap.fromTo('.hero-content > *', 
//         { y: 30, opacity: 0 },
//         { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
//       );
      
//       gsap.utils.toArray('.feature-card').forEach((card, i) => {
//         gsap.fromTo(card,
//           { y: 40 },
//           {
//             scrollTrigger: { trigger: card, start: 'top 95%' },
//             y: 0, duration: 0.6, delay: (i % 3) * 0.1, ease: 'power3.out'
//           }
//         );
//       });

//       gsap.utils.toArray('.why-choose-item').forEach((item, i) => {
//         gsap.fromTo(item,
//           { y: 30 },
//           {
//             scrollTrigger: { trigger: item, start: 'top 95%' },
//             y: 0, duration: 0.6, delay: (i % 5) * 0.1, ease: 'power3.out'
//           }
//         );
//       });
      
//       gsap.fromTo('.power-list li', 
//         { x: -30 },
//         {
//           scrollTrigger: { trigger: '.power-list', start: 'top 85%' },
//           x: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out'
//         }
//       );

//       gsap.utils.toArray('.process-step').forEach((step, i) => {
//         gsap.fromTo(step,
//           { y: 30 },
//           {
//             scrollTrigger: { trigger: step, start: 'top 90%' },
//             y: 0, duration: 0.6, delay: i * 0.1, ease: 'power3.out'
//           }
//         );
//       });
//     }, containerRef);
//     return () => ctx.revert();
//   }, [selectedService]);

//   if (!selectedService || !selectedDetails) {
//     return <div className="min-h-screen bg-slate-900" />;
//   }

//   const whyChooseUs = selectedDetails.detailedContent?.[0];
//   const powerOfDesign = selectedDetails.detailedContent?.[1];
//   const designProcess = selectedDetails.detailedContent?.[2];

//   return (
//     <div ref={containerRef} className="min-h-screen font-sans selection:bg-fuchsia-500/30 text-slate-800 bg-white">
      
//       {/* 1. HERO SECTION */}
//       <section className="relative pt-22 pb-20 lg:pt-28 lg:pb-22 overflow-hidden bg-slate-900">
//         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/30 rounded-full blur-[100px] pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
//         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-900/40 rounded-full blur-[100px] pointer-events-none transform -translate-x-1/3 translate-y-1/3" />
        
//         <div className="container mx-auto px-6 lg:px-12 relative z-10">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
            
//             <div className="hero-content text-white">
//               <div className="inline-block px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-[10px] font-bold uppercase tracking-widest mb-6 shadow-sm">
//                 {selectedDetails.subtitle}
//               </div>
              
//               <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
//                 Design That <br/>
//                 Tells Your Story.<br/>
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-fuchsia-500 to-orange-500">
//                   Builds Your Brand.
//                 </span>
//               </h1>
              
//               <p className="text-base lg:text-lg text-slate-300 mb-10 max-w-xl font-normal leading-relaxed">
//                 {selectedDetails.desc}
//               </p>
              
//               {/* <div className="flex flex-wrap gap-4 items-center">
//                 <button 
//                   onClick={() => document.getElementById('core-services').scrollIntoView({behavior: 'smooth'})}
//                   className="px-8 py-3.5 bg-gradient-to-r from-fuchsia-500 to-purple-600 rounded-full text-white font-semibold text-sm hover:shadow-lg transition-all flex items-center gap-2"
//                 >
//                   Explore Services <ArrowRight size={16} />
//                 </button>
//                 <button 
//                   onClick={() => navigate('/portfolio')}
//                   className="px-6 py-3.5 border border-white/20 rounded-full text-white font-semibold text-sm hover:bg-white/10 transition-all flex items-center gap-3"
//                 >
//                   <div className="w-6 h-6 rounded-full border border-white flex items-center justify-center">
//                     <Play size={10} fill="currentColor" className="ml-0.5" />
//                   </div>
//                   View Our Work
//                 </button>
//               </div> */}
//             </div>

//             <div className="relative flex justify-center lg:justify-end hero-content">
//               <div className="relative w-full max-w-xl">
//                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-indigo-600/30 rounded-full blur-[80px]" />
//                  <img src={meta?.img || "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800"} alt="Service Graphic" className="relative z-10 w-full h-auto object-contain drop-shadow-2xl" />
//               </div>
//             </div>
//           </div>
          
//           <div className="hero-content mt-24 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8">
//             {[
//               { label: 'Projects Completed', value: '500+' },
//               { label: 'Client Satisfaction', value: '98%' },
//               { label: 'Years Experience', value: '10+' },
//               { label: 'Industries Served', value: '50+' },
//             ].map((stat, i) => (
//               <div key={i} className="flex items-center gap-4">
//                 <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-orange-400">
//                   <CheckCircle2 size={24} />
//                 </div>
//                 <div>
//                   <div className="text-white font-bold text-2xl">{stat.value}</div>
//                   <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-0.5">{stat.label}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 2. CORE SERVICES SECTION */}
//       <section id="core-services" className="py-24 bg-slate-50">
//         <div className="container mx-auto px-6 lg:px-12">
//           <div className="text-center mb-16 max-w-3xl mx-auto">
//             <div className="text-indigo-700 text-[11px] font-bold uppercase tracking-widest mb-4">Our Core Services</div>
//             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Professional {selectedService.title} Services</h2>
//             <p className="text-slate-600 text-sm md:text-base">Comprehensive solutions tailored to meet the diverse needs of businesses across industries.</p>
//           </div>

//           <div className="features-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {selectedDetails.features.map((feature, i) => {
//               const isObj = typeof feature === 'object' && feature !== null;
//               const rawTitle = isObj ? feature.title : feature;
//               const desc = isObj ? feature.desc : 'Professional and creative solutions designed to capture attention and communicate your message clearly to your audience.';
//               const iconFromData = isObj && feature.icon ? feature.icon : null;
//               const cleanTitle = getCleanText(rawTitle);
//               const num = (i + 1).toString().padStart(2, '0');
//               const colors = [
//                 { text: 'text-purple-700', bg: 'bg-purple-100', icon: 'text-purple-700' },
//                 { text: 'text-pink-600', bg: 'bg-pink-100', icon: 'text-pink-600' },
//                 { text: 'text-orange-500', bg: 'bg-orange-100', icon: 'text-orange-500' },
//                 { text: 'text-teal-500', bg: 'bg-teal-100', icon: 'text-teal-500' },
//                 { text: 'text-fuchsia-600', bg: 'bg-fuchsia-100', icon: 'text-fuchsia-600' },
//                 { text: 'text-blue-600', bg: 'bg-blue-100', icon: 'text-blue-600' }
//               ];
//               const theme = colors[i % colors.length];

//               return (
//                 <div key={i} className="feature-card bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all flex flex-col h-full">
//                   <div className="flex justify-between items-start mb-6">
//                     <div className={`w-14 h-14 rounded-2xl ${theme.bg} flex items-center justify-center ${theme.icon}`}>
//                       {getIconForTitle(rawTitle, iconFromData)}
//                     </div>
//                     <span className={`text-sm font-bold opacity-30 ${theme.text}`}>{num}</span>
//                   </div>
//                   <h4 className="text-xl font-bold text-slate-900 mb-3">{cleanTitle}</h4>
//                   <p className="text-slate-500 text-sm mb-8 leading-relaxed flex-grow">
//                     {desc}
//                   </p>
//                   <button className={`text-[13px] font-bold ${theme.text} flex items-center gap-1.5 hover:gap-2.5 transition-all mt-auto`}>
//                     Learn More <ArrowRight size={14} />
//                   </button>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* 3. WHY CHOOSE US */}
//       {whyChooseUs && (
//         <section className="py-24 relative overflow-hidden bg-slate-900">
//           <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent bg-[length:24px_24px]" />
          
//           <div className="container mx-auto px-6 lg:px-12 relative z-10">
//             <div className="text-center mb-16">
//               <div className="text-fuchsia-400 text-[11px] font-bold uppercase tracking-widest mb-4">Why Choose Us?</div>
//               <h2 className="text-3xl md:text-4xl font-bold text-white">
//                 Why Businesses Choose <br/>Digital Elite Services?
//               </h2>
//             </div>

//             <div className="why-choose-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
//               {whyChooseUs.items.map((item, i) => {
//                 const colors = ['bg-indigo-600', 'bg-pink-600', 'bg-orange-500', 'bg-teal-500', 'bg-blue-600'];
//                 const bgColor = colors[i % colors.length];
//                 const iconFromData = item.icon;
//                 return (
//                   <div key={i} className="why-choose-item text-center flex flex-col items-center">
//                     <div className={`w-20 h-20 rounded-full ${bgColor} flex items-center justify-center text-white mb-6 shadow-lg border-[4px] border-slate-900 ring-1 ring-white/10`}>
//                       {getIconForTitle(item.name, iconFromData)}
//                     </div>
//                     <h4 className="text-white font-bold mb-2 text-[13px] tracking-wide">{item.name}</h4>
//                     <p className="text-slate-400 text-[11px] leading-relaxed max-w-[180px]">{item.text}</p>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* 4. THE POWER OF GREAT DESIGN */}
//       {powerOfDesign && (
//         <section className="py-24 bg-slate-50 overflow-hidden">
//           <div className="container mx-auto px-6 lg:px-12">
//             <div className="grid lg:grid-cols-2 gap-16 items-center">
//               <div>
//                 <div className="text-indigo-700 text-[11px] font-bold uppercase tracking-widest mb-4">The Power of Great Design</div>
//                 <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-10 leading-tight">
//                   Design That Drives <br/>
//                   Business Growth
//                 </h2>
                
//                 <ul className="power-list space-y-8">
//                   {powerOfDesign.items.map((item, i) => {
//                     const iconFromData = item.icon;
//                     return (
//                       <li key={i} className="flex gap-5">
//                         <div className="mt-1 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
//                           <CheckCircle2 size={12} strokeWidth={3} />
//                         </div>
//                         <div>
//                           <h4 className="text-slate-900 font-bold mb-1.5 text-[15px]">{item.name}</h4>
//                           <p className="text-slate-600 text-[13px] leading-relaxed">{item.text}</p>
//                         </div>
//                       </li>
//                     );
//                   })}
//                 </ul>
//               </div>
//               <div className="relative h-[400px] lg:h-[500px]">
//                 <div className="absolute inset-0 bg-purple-500/10 rounded-[3rem] blur-[60px]" />
//                 <img src={meta?.img || "https://images.unsplash.com/photo-1561070791-2526d30994b5"} alt="Growth" className="relative z-10 w-full h-full object-cover rounded-3xl shadow-xl rotate-2 hover:rotate-0 transition-transform duration-700" />
//               </div>
//             </div>
//           </div>
//         </section>
//       )}

//       {/* 5. OUR DESIGN PROCESS */}
//       {designProcess && (
//         <section className="py-24 bg-white">
//           <div className="container mx-auto px-6 lg:px-12">
//             <div className="text-center mb-20">
//               <div className="text-indigo-700 text-[11px] font-bold uppercase tracking-widest mb-4">Our Design Process</div>
//               <h2 className="text-3xl md:text-4xl font-bold text-slate-900">A Simple & Effective Design Process</h2>
//             </div>

//             <div className="process-timeline relative max-w-5xl mx-auto">
//               <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-0 border-t border-dashed border-slate-300 z-0" />
              
//               <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
//                 {designProcess.items.map((item, i) => {
//                   const num = (i + 1).toString().padStart(2, '0');
//                   const colors = ['bg-purple-700', 'bg-pink-600', 'bg-orange-500', 'bg-teal-500', 'bg-blue-600'];
//                   const bgColor = colors[i % colors.length];
//                   const iconFromData = item.icon;
//                   const cleanName = item.name.replace(/^\d+\.\s*/, '');
                  
//                   return (
//                     <div key={i} className="process-step text-center">
//                       <div className={`w-20 h-20 mx-auto rounded-full ${bgColor} flex items-center justify-center text-white mb-6 shadow-xl border-[6px] border-white`}>
//                         {getIconForTitle(item.name, iconFromData)}
//                       </div>
//                       <div className="text-indigo-700 font-bold text-[11px] mb-2">{num}</div>
//                       <h4 className="text-slate-900 font-bold text-[13px] mb-3 h-10 px-2">{cleanName}</h4>
//                       <p className="text-slate-500 text-[11px] leading-relaxed px-2">{item.text}</p>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </section>
//       )}

//       {/* 6. FOOTER CTA */}
//       <section className="py-20 bg-slate-900 relative overflow-hidden">
//         <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
        
//         <div className="container mx-auto px-6 lg:px-12 relative z-10">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
//                 Ready to Elevate Your Brand?
//               </h2>
//               <p className="text-slate-300 text-base mb-10 max-w-md">
//                 Let's create stunning designs that leave a lasting impression and drive your business forward.
//               </p>
//               <div className="flex flex-wrap gap-6 items-center">
//                 <button 
//                   onClick={() => navigate('/contact')}
//                   className="px-8 py-4 bg-gradient-to-r from-fuchsia-500 to-pink-600 rounded-full text-white font-bold text-[13px] hover:shadow-lg transition-all flex items-center gap-2"
//                 >
//                   Get Started Today <ArrowRight size={16} />
//                 </button>
//                 <div className="flex items-center gap-4 text-white">
//                   <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
//                     <PhoneCall size={18} />
//                   </div>
//                   <div>
//                     <div className="text-[11px] text-slate-400 mb-0.5">Talk to Our Expert</div>
//                     <div className="font-bold text-base">+91 78926 98774</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             <div className="hidden lg:flex justify-end">
//               <div className="relative w-80 h-80">
//                 <img src={meta?.img || "https://images.unsplash.com/photo-1561070791-2526d30994b5"} alt="Graphic" className="w-full h-full object-cover rounded-3xl opacity-80 mix-blend-overlay" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default ServiceDetailsPage;



// import React, { useEffect, useRef } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { SERVICES } from '../constants';
// import { SERVICE_META } from '../components/Services';
// import { SERVICE_DETAILS } from '../data/serviceDetails';
// import { 
//   ArrowRight, CheckCircle2, PhoneCall,
//   Lightbulb, Target, Tag, Clock, Users, ShieldCheck, TrendingUp, Play,
//   Search, Settings, Globe, FileText, Link, MapPin,
//   BarChart3, ClipboardCheck, Activity, Eye, Zap, Rocket,
//   PenTool, Code, ShoppingCart, Layout, Plug, Wrench,
//   Sparkles, Palette, Image, Newspaper, Monitor, Package, CreditCard,
//   Bot, Mail, Database, Headphones, MessageCircle, Megaphone,
//   ChartNoAxesCombined, Award, Cpu, Heart, Trophy, Shield
// } from 'lucide-react';

// gsap.registerPlugin(ScrollTrigger);

// // Icon mapping for different feature types
// const getIconForTitle = (title, iconType = null) => {
//   if (iconType) {
//     const IconComponent = iconType;
//     return <IconComponent size={32} strokeWidth={1.5} />;
//   }
  
//   const t = title.toLowerCase();
  
//   // SEO related icons
//   if (t.includes('keyword') || t.includes('search')) return <Search size={32} strokeWidth={1.5} />;
//   if (t.includes('on-page') || t.includes('optimization')) return <Settings size={32} strokeWidth={1.5} />;
//   if (t.includes('technical') || t.includes('backend')) return <Globe size={32} strokeWidth={1.5} />;
//   if (t.includes('content')) return <FileText size={32} strokeWidth={1.5} />;
//   if (t.includes('link')) return <Link size={32} strokeWidth={1.5} />;
//   if (t.includes('local')) return <MapPin size={32} strokeWidth={1.5} />;
  
//   // Web dev related icons
//   if (t.includes('ui/ux') || t.includes('design')) return <PenTool size={32} strokeWidth={1.5} />;
//   if (t.includes('custom') && t.includes('web')) return <Code size={32} strokeWidth={1.5} />;
//   if (t.includes('e-commerce') || t.includes('ecommerce')) return <ShoppingCart size={32} strokeWidth={1.5} />;
//   if (t.includes('creative') || t.includes('layout')) return <Layout size={32} strokeWidth={1.5} />;
//   if (t.includes('api') || t.includes('integration')) return <Plug size={32} strokeWidth={1.5} />;
//   if (t.includes('maintenance') || t.includes('support')) return <Wrench size={32} strokeWidth={1.5} />;
  
//   // SMM related icons
//   if (t.includes('social media strategy')) return <Target size={32} strokeWidth={1.5} />;
//   if (t.includes('creative content')) return <Sparkles size={32} strokeWidth={1.5} />;
//   if (t.includes('management')) return <Calendar size={32} strokeWidth={1.5} />;
//   if (t.includes('paid') || t.includes('advertising')) return <Megaphone size={32} strokeWidth={1.5} />;
//   if (t.includes('analytics') || t.includes('tracking')) return <ChartNoAxesCombined size={32} strokeWidth={1.5} />;
//   if (t.includes('brand engagement')) return <MessageCircle size={32} strokeWidth={1.5} />;
  
//   // Graphic design related icons
//   if (t.includes('logo') || t.includes('brand identity')) return <Palette size={32} strokeWidth={1.5} />;
//   if (t.includes('social media creatives')) return <Image size={32} strokeWidth={1.5} />;
//   if (t.includes('brochure') || t.includes('flyer')) return <Newspaper size={32} strokeWidth={1.5} />;
//   if (t.includes('website graphics') || t.includes('ui elements')) return <Monitor size={32} strokeWidth={1.5} />;
//   if (t.includes('packaging')) return <Package size={32} strokeWidth={1.5} />;
//   if (t.includes('business cards') || t.includes('stationery')) return <CreditCard size={32} strokeWidth={1.5} />;
  
//   // Lead gen / PPC related icons
//   if (t.includes('paid search')) return <Search size={32} strokeWidth={1.5} />;
//   if (t.includes('display') || t.includes('remarketing')) return <Eye size={32} strokeWidth={1.5} />;
//   if (t.includes('conversion')) return <TrendingUp size={32} strokeWidth={1.5} />;
//   if (t.includes('crm')) return <Database size={32} strokeWidth={1.5} />;
  
//   // WhatsApp automation related icons
//   if (t.includes('chatbot')) return <Bot size={32} strokeWidth={1.5} />;
//   if (t.includes('bulk messaging')) return <Mail size={32} strokeWidth={1.5} />;
//   if (t.includes('24/7')) return <Headphones size={32} strokeWidth={1.5} />;
  
//   // General icons
//   if (t.includes('creative') || t.includes('idea')) return <Lightbulb size={32} strokeWidth={1.5} />;
//   if (t.includes('custom') || t.includes('target')) return <Target size={32} strokeWidth={1.5} />;
//   if (t.includes('price') || t.includes('afford')) return <Tag size={32} strokeWidth={1.5} />;
//   if (t.includes('time') || t.includes('quick')) return <Clock size={32} strokeWidth={1.5} />;
//   if (t.includes('client') || t.includes('team') || t.includes('expert')) return <Users size={32} strokeWidth={1.5} />;
//   if (t.includes('trust') || t.includes('credible') || t.includes('ethical')) return <ShieldCheck size={32} strokeWidth={1.5} />;
//   if (t.includes('boost') || t.includes('growth') || t.includes('result')) return <TrendingUp size={32} strokeWidth={1.5} />;
//   if (t.includes('transparent') || t.includes('reporting')) return <ClipboardCheck size={32} strokeWidth={1.5} />;
//   if (t.includes('data-driven')) return <BarChart3 size={32} strokeWidth={1.5} />;
//   if (t.includes('audit')) return <Activity size={32} strokeWidth={1.5} />;
//   if (t.includes('visibility')) return <Eye size={32} strokeWidth={1.5} />;
//   if (t.includes('latest technologies')) return <Cpu size={32} strokeWidth={1.5} />;
//   if (t.includes('end-to-end')) return <Rocket size={32} strokeWidth={1.5} />;
//   if (t.includes('measurable results')) return <BarChart3 size={32} strokeWidth={1.5} />;
//   if (t.includes('competitive edge')) return <Trophy size={32} strokeWidth={1.5} />;
//   if (t.includes('customer engagement')) return <Heart size={32} strokeWidth={1.5} />;
//   if (t.includes('brand strength')) return <Shield size={32} strokeWidth={1.5} />;
  
//   return <CheckCircle2 size={32} strokeWidth={1.5} />;
// };

// // Get dynamic hero title based on service
// const getHeroTitle = (serviceId, serviceTitle) => {
//   const titles = {
//     'seo': {
//       line1: 'Dominate Search',
//       line2: 'Rankings.',
//       gradient: 'Drive Organic Growth.'
//     },
//     'web-dev': {
//       line1: 'Build Digital',
//       line2: 'Excellence.',
//       gradient: 'Create Powerful Experiences.'
//     },
//     'smm': {
//       line1: 'Conquer Social',
//       line2: 'Media.',
//       gradient: 'Build Engaged Communities.'
//     },
//     'graphic-design': {
//       line1: 'Design That',
//       line2: 'Tells Your Story.',
//       gradient: 'Builds Your Brand.'
//     },
//     'lead-gen': {
//       line1: 'Supercharge Your',
//       line2: 'Sales.',
//       gradient: 'Generate Quality Leads.'
//     },
//     'wa': {
//       line1: 'Smart WhatsApp',
//       line2: 'Automation.',
//       gradient: 'Scale Customer Communication.'
//     }
//   };
  
//   const defaultTitle = {
//     line1: 'Design That',
//     line2: 'Tells Your Story.',
//     gradient: 'Builds Your Brand.'
//   };
  
//   return titles[serviceId] || defaultTitle;
// };

// // Helper to extract emoji-free text
// const getCleanText = (text) => {
//   const match = text.match(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])\s*(.*)/);
//   return match ? match[2] : text;
// };

// const ServiceDetailsPage = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const containerRef = useRef(null);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [id]);

//   const selectedService = SERVICES.find(s => s.id === id);
//   const selectedDetails = SERVICE_DETAILS[id];
//   const serviceIndex = SERVICES.findIndex(s => s.id === id);
//   const meta = SERVICE_META[serviceIndex];
//   const heroTitle = getHeroTitle(id, selectedService?.title);

//   useEffect(() => {
//     if (!selectedService || !containerRef.current) return;

//     const ctx = gsap.context(() => {
//       gsap.fromTo('.hero-content > *', 
//         { y: 30, opacity: 0 },
//         { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
//       );
      
//       gsap.utils.toArray('.feature-card').forEach((card, i) => {
//         gsap.fromTo(card,
//           { y: 40 },
//           {
//             scrollTrigger: { trigger: card, start: 'top 95%' },
//             y: 0, duration: 0.6, delay: (i % 3) * 0.1, ease: 'power3.out'
//           }
//         );
//       });

//       gsap.utils.toArray('.why-choose-item').forEach((item, i) => {
//         gsap.fromTo(item,
//           { y: 30 },
//           {
//             scrollTrigger: { trigger: item, start: 'top 95%' },
//             y: 0, duration: 0.6, delay: (i % 5) * 0.1, ease: 'power3.out'
//           }
//         );
//       });
      
//       gsap.fromTo('.power-list li', 
//         { x: -30 },
//         {
//           scrollTrigger: { trigger: '.power-list', start: 'top 85%' },
//           x: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out'
//         }
//       );

//       gsap.utils.toArray('.process-step').forEach((step, i) => {
//         gsap.fromTo(step,
//           { y: 30 },
//           {
//             scrollTrigger: { trigger: step, start: 'top 90%' },
//             y: 0, duration: 0.6, delay: i * 0.1, ease: 'power3.out'
//           }
//         );
//       });
//     }, containerRef);
//     return () => ctx.revert();
//   }, [selectedService]);

//   if (!selectedService || !selectedDetails) {
//     return <div className="min-h-screen bg-slate-900" />;
//   }

//   const whyChooseUs = selectedDetails.detailedContent?.[0];
//   const powerOfDesign = selectedDetails.detailedContent?.[1];
//   const designProcess = selectedDetails.detailedContent?.[2];

//   return (
//     <div ref={containerRef} className="min-h-screen font-sans selection:bg-fuchsia-500/30 text-slate-800 bg-white">
      
//       {/* 1. HERO SECTION */}
//       <section className="relative pt-32 pb-20 lg:pt-38 lg:pb-32 overflow-hidden bg-slate-900">
//         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/30 rounded-full blur-[100px] pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
//         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-900/40 rounded-full blur-[100px] pointer-events-none transform -translate-x-1/3 translate-y-1/3" />
        
//         <div className="container mx-auto px-6 lg:px-12 relative z-10">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
            
//             <div className="hero-content text-white">
//               <div className="inline-block px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-[10px] font-bold uppercase tracking-widest mb-6 shadow-sm">
//                 {selectedDetails.subtitle}
//               </div>
              
//               <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight">
//                 {heroTitle.line1} <br/>
//                 {heroTitle.line2}<br/>
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-fuchsia-500 to-orange-500">
//                   {heroTitle.gradient}
//                 </span>
//               </h1>
              
//               <p className="text-base lg:text-lg text-slate-300 mb-10 max-w-xl font-normal leading-relaxed">
//                 {selectedDetails.desc}
//               </p>
              
//               {/* <div className="flex flex-wrap gap-4 items-center">
//                 <button 
//                   onClick={() => document.getElementById('core-services').scrollIntoView({behavior: 'smooth'})}
//                   className="px-8 py-3.5 bg-gradient-to-r from-fuchsia-500 to-purple-600 rounded-full text-white font-semibold text-sm hover:shadow-lg transition-all flex items-center gap-2"
//                 >
//                   Explore Services <ArrowRight size={16} />
//                 </button>
//                 <button 
//                   onClick={() => navigate('/portfolio')}
//                   className="px-6 py-3.5 border border-white/20 rounded-full text-white font-semibold text-sm hover:bg-white/10 transition-all flex items-center gap-3"
//                 >
//                   <div className="w-6 h-6 rounded-full border border-white flex items-center justify-center">
//                     <Play size={10} fill="currentColor" className="ml-0.5" />
//                   </div>
//                   View Our Work
//                 </button>
//               </div> */}
//             </div>

//             <div className="relative flex justify-center lg:justify-end hero-content">
//               <div className="relative w-full max-w-xl">
//                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-indigo-600/30 rounded-full blur-[80px]" />
//                  <img src={meta?.img } alt="Service Graphic" className="relative z-10 w-full h-auto object-contain drop-shadow-2xl" />
//               </div>
//             </div>
//           </div>
          
//           <div className="hero-content mt-24 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8">
//             {[
//               { label: 'Projects Completed', value: '500+' },
//               { label: 'Client Satisfaction', value: '98%' },
//               { label: 'Years Experience', value: '10+' },
//               { label: 'Industries Served', value: '50+' },
//             ].map((stat, i) => (
//               <div key={i} className="flex items-center gap-4">
//                 <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-orange-400">
//                   <CheckCircle2 size={24} />
//                 </div>
//                 <div>
//                   <div className="text-white font-bold text-2xl">{stat.value}</div>
//                   <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-0.5">{stat.label}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 2. CORE SERVICES SECTION */}
//       <section id="core-services" className="py-24 bg-slate-50">
//         <div className="container mx-auto px-6 lg:px-12">
//           <div className="text-center mb-16 max-w-3xl mx-auto">
//             <div className="text-indigo-700 text-[11px] font-bold uppercase tracking-widest mb-4">Our Core Services</div>
//             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Professional {selectedService.title} Services</h2>
//             <p className="text-slate-600 text-sm md:text-base">Comprehensive solutions tailored to meet the diverse needs of businesses across industries.</p>
//           </div>

//           <div className="features-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {selectedDetails.features.map((feature, i) => {
//               const isObj = typeof feature === 'object' && feature !== null;
//               const rawTitle = isObj ? feature.title : feature;
//               const desc = isObj ? feature.desc : 'Professional and creative solutions designed to capture attention and communicate your message clearly to your audience.';
//               const iconFromData = isObj && feature.icon ? feature.icon : null;
//               const cleanTitle = getCleanText(rawTitle);
//               const num = (i + 1).toString().padStart(2, '0');
//               const colors = [
//                 { text: 'text-purple-700', bg: 'bg-purple-100', icon: 'text-purple-700' },
//                 { text: 'text-pink-600', bg: 'bg-pink-100', icon: 'text-pink-600' },
//                 { text: 'text-orange-500', bg: 'bg-orange-100', icon: 'text-orange-500' },
//                 { text: 'text-teal-500', bg: 'bg-teal-100', icon: 'text-teal-500' },
//                 { text: 'text-fuchsia-600', bg: 'bg-fuchsia-100', icon: 'text-fuchsia-600' },
//                 { text: 'text-blue-600', bg: 'bg-blue-100', icon: 'text-blue-600' }
//               ];
//               const theme = colors[i % colors.length];

//               return (
//                 <div key={i} className="feature-card bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all flex flex-col h-full">
//                   <div className="flex justify-between items-start mb-6">
//                     <div className={`w-14 h-14 rounded-2xl ${theme.bg} flex items-center justify-center ${theme.icon}`}>
//                       {getIconForTitle(rawTitle, iconFromData)}
//                     </div>
//                     <span className={`text-sm font-bold opacity-30 ${theme.text}`}>{num}</span>
//                   </div>
//                   <h4 className="text-xl font-bold text-slate-900 mb-3">{cleanTitle}</h4>
//                   <p className="text-slate-500 text-sm mb-8 leading-relaxed flex-grow">
//                     {desc}
//                   </p>
//                   <button className={`text-[13px] font-bold ${theme.text} flex items-center gap-1.5 hover:gap-2.5 transition-all mt-auto`}>
//                     Learn More <ArrowRight size={14} />
//                   </button>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* 3. WHY CHOOSE US */}
//       {whyChooseUs && (
//         <section className="py-24 relative overflow-hidden bg-slate-900">
//           <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent bg-[length:24px_24px]" />
          
//           <div className="container mx-auto px-6 lg:px-12 relative z-10">
//             <div className="text-center mb-16">
//               <div className="text-fuchsia-400 text-[11px] font-bold uppercase tracking-widest mb-4">Why Choose Us?</div>
//               <h2 className="text-3xl md:text-4xl font-bold text-white">
//                 Why Businesses Choose <br/>Digital Elite Services?
//               </h2>
//             </div>

//             <div className="why-choose-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
//               {whyChooseUs.items.map((item, i) => {
//                 const colors = ['bg-indigo-600', 'bg-pink-600', 'bg-orange-500', 'bg-teal-500', 'bg-blue-600'];
//                 const bgColor = colors[i % colors.length];
//                 const iconFromData = item.icon;
//                 return (
//                   <div key={i} className="why-choose-item text-center flex flex-col items-center">
//                     <div className={`w-20 h-20 rounded-full ${bgColor} flex items-center justify-center text-white mb-6 shadow-lg border-[4px] border-slate-900 ring-1 ring-white/10`}>
//                       {getIconForTitle(item.name, iconFromData)}
//                     </div>
//                     <h4 className="text-white font-bold mb-2 text-[13px] tracking-wide">{item.name}</h4>
//                     <p className="text-slate-400 text-[11px] leading-relaxed max-w-[180px]">{item.text}</p>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* 4. THE POWER OF GREAT DESIGN */}
//       {powerOfDesign && (
//         <section className="py-24 bg-slate-50 overflow-hidden">
//           <div className="container mx-auto px-6 lg:px-12">
//             <div className="grid lg:grid-cols-2 gap-16 items-center">
//               <div>
//                 <div className="text-indigo-700 text-[11px] font-bold uppercase tracking-widest mb-4">The Power of Great Design</div>
//                 <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-10 leading-tight">
//                   Design That Drives <br/>
//                   Business Growth
//                 </h2>
                
//                 <ul className="power-list space-y-8">
//                   {powerOfDesign.items.map((item, i) => {
//                     const iconFromData = item.icon;
//                     return (
//                       <li key={i} className="flex gap-5">
//                         <div className="mt-1 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
//                           <CheckCircle2 size={12} strokeWidth={3} />
//                         </div>
//                         <div>
//                           <h4 className="text-slate-900 font-bold mb-1.5 text-[15px]">{item.name}</h4>
//                           <p className="text-slate-600 text-[13px] leading-relaxed">{item.text}</p>
//                         </div>
//                       </li>
//                     );
//                   })}
//                 </ul>
//               </div>
//               <div className="relative h-[400px] lg:h-[500px]">
//                 <div className="absolute inset-0 bg-purple-500/10 rounded-[3rem] blur-[60px]" />
//                 <img src={meta?.img || "https://images.unsplash.com/photo-1561070791-2526d30994b5"} alt="Growth" className="relative z-10 w-full h-full object-cover rounded-3xl shadow-xl rotate-2 hover:rotate-0 transition-transform duration-700" />
//               </div>
//             </div>
//           </div>
//         </section>
//       )}

//       {/* 5. OUR DESIGN PROCESS */}
//       {designProcess && (
//         <section className="py-24 bg-white">
//           <div className="container mx-auto px-6 lg:px-12">
//             <div className="text-center mb-20">
//               <div className="text-indigo-700 text-[11px] font-bold uppercase tracking-widest mb-4">Our Design Process</div>
//               <h2 className="text-3xl md:text-4xl font-bold text-slate-900">A Simple & Effective Design Process</h2>
//             </div>

//             <div className="process-timeline relative max-w-5xl mx-auto">
//               <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-0 border-t border-dashed border-slate-300 z-0" />
              
//               <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
//                 {designProcess.items.map((item, i) => {
//                   const num = (i + 1).toString().padStart(2, '0');
//                   const colors = ['bg-purple-700', 'bg-pink-600', 'bg-orange-500', 'bg-teal-500', 'bg-blue-600'];
//                   const bgColor = colors[i % colors.length];
//                   const iconFromData = item.icon;
//                   const cleanName = item.name.replace(/^\d+\.\s*/, '');
                  
//                   return (
//                     <div key={i} className="process-step text-center">
//                       <div className={`w-20 h-20 mx-auto rounded-full ${bgColor} flex items-center justify-center text-white mb-6 shadow-xl border-[6px] border-white`}>
//                         {getIconForTitle(item.name, iconFromData)}
//                       </div>
//                       <div className="text-indigo-700 font-bold text-[11px] mb-2">{num}</div>
//                       <h4 className="text-slate-900 font-bold text-[13px] mb-3 h-10 px-2">{cleanName}</h4>
//                       <p className="text-slate-500 text-[11px] leading-relaxed px-2">{item.text}</p>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </section>
//       )}

//       {/* 6. FOOTER CTA */}
//       <section className="py-20 bg-slate-900 relative overflow-hidden">
//         <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
        
//         <div className="container mx-auto px-6 lg:px-12 relative z-10">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
//                 Ready to Elevate Your Brand?
//               </h2>
//               <p className="text-slate-300 text-base mb-10 max-w-md">
//                 Let's create stunning designs that leave a lasting impression and drive your business forward.
//               </p>
//               <div className="flex flex-wrap gap-6 items-center">
//                 <button 
//                   onClick={() => navigate('/contact')}
//                   className="px-8 py-4 bg-gradient-to-r from-fuchsia-500 to-pink-600 rounded-full text-white font-bold text-[13px] hover:shadow-lg transition-all flex items-center gap-2"
//                 >
//                   Get Started Today <ArrowRight size={16} />
//                 </button>
//                 <div className="flex items-center gap-4 text-white">
//                   <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
//                     <PhoneCall size={18} />
//                   </div>
//                   <div>
//                     <div className="text-[11px] text-slate-400 mb-0.5">Talk to Our Expert</div>
//                     <div className="font-bold text-base">+91 78926 98774</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             <div className="hidden lg:flex justify-end">
//               <div className="relative w-80 h-80">
//                 <img src={meta?.img || "https://images.unsplash.com/photo-1561070791-2526d30994b5"} alt="Graphic" className="w-full h-full object-cover rounded-3xl opacity-80 mix-blend-overlay" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default ServiceDetailsPage;


import React, { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SERVICES } from '../constants';
import { SERVICE_META } from '../components/Services';
import { SERVICE_DETAILS } from '../data/serviceDetails';
import { 
  ArrowRight, CheckCircle2, PhoneCall,
  Lightbulb, Target, Tag, Clock, Users, ShieldCheck, TrendingUp, Play,
  Search, Settings, Globe, FileText, Link, MapPin,
  BarChart3, ClipboardCheck, Activity, Eye, Zap, Rocket,
  PenTool, Code, ShoppingCart, Layout, Plug, Wrench,
  Sparkles, Palette, Image, Newspaper, Monitor, Package, CreditCard,
  Bot, Mail, Database, Headphones, MessageCircle, Megaphone,
  ChartNoAxesCombined, Award, Cpu, Heart, Trophy, Shield
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Icon mapping for different feature types
const getIconForTitle = (title, iconType = null) => {
  if (iconType) {
    const IconComponent = iconType;
    return <IconComponent size={32} strokeWidth={1.5} />;
  }
  
  const t = title.toLowerCase();
  
  // SEO related icons
  if (t.includes('keyword') || t.includes('search')) return <Search size={32} strokeWidth={1.5} />;
  if (t.includes('on-page') || t.includes('optimization')) return <Settings size={32} strokeWidth={1.5} />;
  if (t.includes('technical') || t.includes('backend')) return <Globe size={32} strokeWidth={1.5} />;
  if (t.includes('content')) return <FileText size={32} strokeWidth={1.5} />;
  if (t.includes('link')) return <Link size={32} strokeWidth={1.5} />;
  if (t.includes('local')) return <MapPin size={32} strokeWidth={1.5} />;
  
  // Web dev related icons
  if (t.includes('ui/ux') || t.includes('design')) return <PenTool size={32} strokeWidth={1.5} />;
  if (t.includes('custom') && t.includes('web')) return <Code size={32} strokeWidth={1.5} />;
  if (t.includes('e-commerce') || t.includes('ecommerce')) return <ShoppingCart size={32} strokeWidth={1.5} />;
  if (t.includes('creative') || t.includes('layout')) return <Layout size={32} strokeWidth={1.5} />;
  if (t.includes('api') || t.includes('integration')) return <Plug size={32} strokeWidth={1.5} />;
  if (t.includes('maintenance') || t.includes('support')) return <Wrench size={32} strokeWidth={1.5} />;
  
  // SMM related icons
  if (t.includes('social media strategy')) return <Target size={32} strokeWidth={1.5} />;
  if (t.includes('creative content')) return <Sparkles size={32} strokeWidth={1.5} />;
  if (t.includes('management')) return <Calendar size={32} strokeWidth={1.5} />;
  if (t.includes('paid') || t.includes('advertising')) return <Megaphone size={32} strokeWidth={1.5} />;
  if (t.includes('analytics') || t.includes('tracking')) return <ChartNoAxesCombined size={32} strokeWidth={1.5} />;
  if (t.includes('brand engagement')) return <MessageCircle size={32} strokeWidth={1.5} />;
  
  // Graphic design related icons
  if (t.includes('logo') || t.includes('brand identity')) return <Palette size={32} strokeWidth={1.5} />;
  if (t.includes('social media creatives')) return <Image size={32} strokeWidth={1.5} />;
  if (t.includes('brochure') || t.includes('flyer')) return <Newspaper size={32} strokeWidth={1.5} />;
  if (t.includes('website graphics') || t.includes('ui elements')) return <Monitor size={32} strokeWidth={1.5} />;
  if (t.includes('packaging')) return <Package size={32} strokeWidth={1.5} />;
  if (t.includes('business cards') || t.includes('stationery')) return <CreditCard size={32} strokeWidth={1.5} />;
  
  // Lead gen / PPC related icons
  if (t.includes('paid search')) return <Search size={32} strokeWidth={1.5} />;
  if (t.includes('display') || t.includes('remarketing')) return <Eye size={32} strokeWidth={1.5} />;
  if (t.includes('conversion')) return <TrendingUp size={32} strokeWidth={1.5} />;
  if (t.includes('crm')) return <Database size={32} strokeWidth={1.5} />;
  
  // WhatsApp automation related icons
  if (t.includes('chatbot')) return <Bot size={32} strokeWidth={1.5} />;
  if (t.includes('bulk messaging')) return <Mail size={32} strokeWidth={1.5} />;
  if (t.includes('24/7')) return <Headphones size={32} strokeWidth={1.5} />;
  
  // General icons
  if (t.includes('creative') || t.includes('idea')) return <Lightbulb size={32} strokeWidth={1.5} />;
  if (t.includes('custom') || t.includes('target')) return <Target size={32} strokeWidth={1.5} />;
  if (t.includes('price') || t.includes('afford')) return <Tag size={32} strokeWidth={1.5} />;
  if (t.includes('time') || t.includes('quick')) return <Clock size={32} strokeWidth={1.5} />;
  if (t.includes('client') || t.includes('team') || t.includes('expert')) return <Users size={32} strokeWidth={1.5} />;
  if (t.includes('trust') || t.includes('credible') || t.includes('ethical')) return <ShieldCheck size={32} strokeWidth={1.5} />;
  if (t.includes('boost') || t.includes('growth') || t.includes('result')) return <TrendingUp size={32} strokeWidth={1.5} />;
  if (t.includes('transparent') || t.includes('reporting')) return <ClipboardCheck size={32} strokeWidth={1.5} />;
  if (t.includes('data-driven')) return <BarChart3 size={32} strokeWidth={1.5} />;
  if (t.includes('audit')) return <Activity size={32} strokeWidth={1.5} />;
  if (t.includes('visibility')) return <Eye size={32} strokeWidth={1.5} />;
  if (t.includes('latest technologies')) return <Cpu size={32} strokeWidth={1.5} />;
  if (t.includes('end-to-end')) return <Rocket size={32} strokeWidth={1.5} />;
  if (t.includes('measurable results')) return <BarChart3 size={32} strokeWidth={1.5} />;
  if (t.includes('competitive edge')) return <Trophy size={32} strokeWidth={1.5} />;
  if (t.includes('customer engagement')) return <Heart size={32} strokeWidth={1.5} />;
  if (t.includes('brand strength')) return <Shield size={32} strokeWidth={1.5} />;
  
  return <CheckCircle2 size={32} strokeWidth={1.5} />;
};

// Get dynamic hero title based on service
const getHeroTitle = (serviceId, serviceTitle) => {
  const titles = {
    'seo': {
      line1: 'Dominate Search',
      line2: 'Rankings.',
      gradient: 'Drive Organic Growth.'
    },
    'web-development': {
      line1: 'Build Digital',
      line2: 'Excellence.',
      gradient: 'Create Powerful Experiences.'
    },
    'social-media-marketing': {
      line1: 'Conquer Social',
      line2: 'Media.',
      gradient: 'Build Engaged Communities.'
    },
    'graphic-design': {
      line1: 'Design That',
      line2: 'Tells Your Story.',
      gradient: 'Builds Your Brand.'
    },
    'lead-generation': {
      line1: 'Supercharge Your',
      line2: 'Sales.',
      gradient: 'Generate Quality Leads.'
    },
    'whatsapp-automation': {
      line1: 'Smart WhatsApp',
      line2: 'Automation.',
      gradient: 'Scale Customer Communication.'
    }
  };
  
  const defaultTitle = {
    line1: 'Design That',
    line2: 'Tells Your Story.',
    gradient: 'Builds Your Brand.'
  };
  
  return titles[serviceId] || defaultTitle;
};

// Helper to extract emoji-free text
const getCleanText = (text) => {
  const match = text.match(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])\s*(.*)/);
  return match ? match[2] : text;
};

const ServiceDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const selectedService = SERVICES.find(s => s.id === id);
  const selectedDetails = SERVICE_DETAILS[id];
  const serviceIndex = SERVICES.findIndex(s => s.id === id);
  const meta = SERVICE_META[serviceIndex];
  const heroTitle = getHeroTitle(id, selectedService?.title);

  useEffect(() => {
    if (!selectedService || !containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-content > *', 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
      );
      
      gsap.utils.toArray('.feature-card').forEach((card, i) => {
        gsap.fromTo(card,
          { y: 40 },
          {
            scrollTrigger: { trigger: card, start: 'top 95%' },
            y: 0, duration: 0.6, delay: (i % 3) * 0.1, ease: 'power3.out'
          }
        );
      });

      gsap.utils.toArray('.why-choose-item').forEach((item, i) => {
        gsap.fromTo(item,
          { y: 30 },
          {
            scrollTrigger: { trigger: item, start: 'top 95%' },
            y: 0, duration: 0.6, delay: (i % 5) * 0.1, ease: 'power3.out'
          }
        );
      });
      
      gsap.fromTo('.power-list li', 
        { x: -30 },
        {
          scrollTrigger: { trigger: '.power-list', start: 'top 85%' },
          x: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out'
        }
      );

      gsap.utils.toArray('.process-step').forEach((step, i) => {
        gsap.fromTo(step,
          { y: 30 },
          {
            scrollTrigger: { trigger: step, start: 'top 90%' },
            y: 0, duration: 0.6, delay: i * 0.1, ease: 'power3.out'
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, [selectedService]);

  if (!selectedService || !selectedDetails) {
    return <div className="min-h-screen bg-slate-900" />;
  }

  const whyChooseUs = selectedDetails.detailedContent?.[0];
  const powerOfDesign = selectedDetails.detailedContent?.[1];
  const designProcess = selectedDetails.detailedContent?.[2];

  // Get the image from the selected service
  const serviceImage = selectedService.img;

  return (
    <div ref={containerRef} className="min-h-screen font-sans selection:bg-fuchsia-500/30 text-slate-800 bg-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-38 lg:pb-32 overflow-hidden bg-slate-100">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/30 rounded-full blur-[100px] pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-900/40 rounded-full blur-[100px] pointer-events-none transform -translate-x-1/3 translate-y-1/3" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div className="hero-content text-white">
              <div className="inline-block px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-700 text-[10px] font-bold uppercase tracking-widest mb-6 shadow-sm">
                {selectedDetails.subtitle}
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl text-slate-700 font-bold mb-6 leading-tight tracking-tight">
                {heroTitle.line1} <br/>
                {heroTitle.line2}<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-fuchsia-500 to-orange-500">
                  {heroTitle.gradient}
                </span>
              </h1>
              
              <p className="text-base lg:text-lg text-slate-900 mb-10 max-w-xl font-normal leading-relaxed">
                {selectedDetails.desc}
              </p>
              
              {/* <div className="flex flex-wrap gap-4 items-center">
                <button 
                  onClick={() => document.getElementById('core-services').scrollIntoView({behavior: 'smooth'})}
                  className="px-8 py-3.5 bg-gradient-to-r from-fuchsia-500 to-purple-600 rounded-full text-white font-semibold text-sm hover:shadow-lg transition-all flex items-center gap-2"
                >
                  Explore Services <ArrowRight size={16} />
                </button>
                <button 
                  onClick={() => navigate('/portfolio')}
                  className="px-6 py-3.5 border border-white/20 rounded-full text-white font-semibold text-sm hover:bg-white/10 transition-all flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full border border-white flex items-center justify-center">
                    <Play size={10} fill="currentColor" className="ml-0.5" />
                  </div>
                  View Our Work
                </button>
              </div> */}
            </div>

            <div className="relative flex justify-center lg:justify-end hero-content">
              <div className="relative w-full max-w-xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-indigo-600/30 rounded-full blur-[80px]" />
                {serviceImage ? (
                  <img 
                    src={serviceImage} 
                    alt={selectedService.title} 
                    className="relative z-10 w-full h-auto max-h-[80vh] object-contain" 
                  />
                ) : (
                  <div className="relative z-10 w-full h-96 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-2xl flex items-center justify-center">
                    <Globe size={80} className="text-white/30" />
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="hero-content mt-20 pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Projects Completed', value: '500+' },
              { label: 'Client Satisfaction', value: '98%' },
              { label: 'Years Experience', value: '10+' },
              { label: 'Industries Served', value: '50+' },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-orange-400">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <div className="text-[#4e1fadff] font-bold text-2xl">{stat.value}</div>
                  <div className="text-slate-700 text-[10px] font-bold uppercase tracking-widest mt-0.5">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. CORE SERVICES SECTION */}
      <section id="core-services" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="text-indigo-700 text-[11px] font-bold uppercase tracking-widest mb-4">Our Core Services</div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Professional {selectedService.title} Services</h2>
            <p className="text-slate-600 text-sm md:text-base">Comprehensive solutions tailored to meet the diverse needs of businesses across industries.</p>
          </div>

          <div className="features-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedDetails.features.map((feature, i) => {
              const isObj = typeof feature === 'object' && feature !== null;
              const rawTitle = isObj ? feature.title : feature;
              const desc = isObj ? feature.desc : 'Professional and creative solutions designed to capture attention and communicate your message clearly to your audience.';
              const iconFromData = isObj && feature.icon ? feature.icon : null;
              const cleanTitle = getCleanText(rawTitle);
              const num = (i + 1).toString().padStart(2, '0');
              const colors = [
                { text: 'text-purple-700', bg: 'bg-purple-100', icon: 'text-purple-700' },
                { text: 'text-pink-600', bg: 'bg-pink-100', icon: 'text-pink-600' },
                { text: 'text-orange-500', bg: 'bg-orange-100', icon: 'text-orange-500' },
                { text: 'text-teal-500', bg: 'bg-teal-100', icon: 'text-teal-500' },
                { text: 'text-fuchsia-600', bg: 'bg-fuchsia-100', icon: 'text-fuchsia-600' },
                { text: 'text-blue-600', bg: 'bg-blue-100', icon: 'text-blue-600' }
              ];
              const theme = colors[i % colors.length];

              return (
                <div key={i} className="feature-card bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${theme.bg} flex items-center justify-center ${theme.icon}`}>
                      {getIconForTitle(rawTitle, iconFromData)}
                    </div>
                    <span className={`text-sm font-bold opacity-30 ${theme.text}`}>{num}</span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{cleanTitle}</h4>
                  <p className="text-slate-500 text-sm mb-1 leading-relaxed flex-grow">
                    {desc}
                  </p>
                  {/* <button className={`text-[13px] font-bold ${theme.text} flex items-center gap-1.5 hover:gap-2.5 transition-all mt-auto`}>
                    Learn More <ArrowRight size={14} />
                  </button> */}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US */}
      {whyChooseUs && (
        <section className="py-20 relative overflow-hidden bg-slate-900">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent bg-[length:24px_24px]" />
          
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="text-center mb-16">
              <div className="text-fuchsia-400 text-[11px] font-bold uppercase tracking-widest mb-4">Why Choose Us?</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Why Businesses Choose <br/>Digital Elite Services?
              </h2>
            </div>

            <div className="why-choose-grid flex flex-wrap items-start justify-center gap-8 lg:gap-4">
              {whyChooseUs.items.map((item, i) => {
                const colors = ['bg-indigo-600', 'bg-pink-600', 'bg-orange-500', 'bg-teal-500', 'bg-blue-600'];
                const bgColor = colors[i % colors.length];
                const iconFromData = item.icon;
                return (
                  <div key={i} className="why-choose-item text-center flex flex-col items-center w-[calc(50%-1rem)] md:w-[calc(33.333%-1.33rem)] lg:w-[calc(20%-1rem)]">
                    <div className={`w-20 h-20 rounded-full ${bgColor} flex items-center justify-center text-white mb-6 shadow-lg border-[4px] border-slate-900 ring-1 ring-white/10`}>
                      {getIconForTitle(item.name, iconFromData)}
                    </div>
                    <h4 className="text-white font-bold mb-2 text-[13px] tracking-wide">{item.name}</h4>
                    <p className="text-slate-400 text-[11px] leading-relaxed max-w-[180px]">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 4. THE POWER OF GREAT DESIGN */}
      {powerOfDesign && (
        <section className="py-24 bg-slate-50 overflow-hidden">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="text-indigo-700 text-[11px] font-bold uppercase tracking-widest mb-4">The Power of Great Design</div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-10 leading-tight">
                  Design That Drives <br/>
                  Business Growth
                </h2>
                
                <ul className="power-list space-y-8">
                  {powerOfDesign.items.map((item, i) => {
                    const iconFromData = item.icon;
                    return (
                      <li key={i} className="flex gap-5">
                        <div className="mt-1 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
                          <CheckCircle2 size={12} strokeWidth={3} />
                        </div>
                        <div>
                          <h4 className="text-slate-900 font-bold mb-1.5 text-[15px]">{item.name}</h4>
                          <p className="text-slate-600 text-[13px] leading-relaxed">{item.text}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="relative h-[400px] lg:h-[500px]">
                <div className="absolute inset-0 bg-purple-500/10 rounded-[3rem] blur-[60px]" />
                <img src={serviceImage || "https://images.unsplash.com/photo-1561070791-2526d30994b5"} alt="Growth" className="relative z-10 w-full h-full object-cover rounded-3xl shadow-xl rotate-2 hover:rotate-0 transition-transform duration-700" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 5. OUR DESIGN PROCESS */}
      {designProcess && (
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-20">
              <div className="text-indigo-700 text-[11px] font-bold uppercase tracking-widest mb-4">Our Design Process</div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">A Simple & Effective Design Process</h2>
            </div>

            <div className="process-timeline relative max-w-5xl mx-auto">
              <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-0 border-t border-dashed border-slate-300 z-0" />
              
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
                {designProcess.items.map((item, i) => {
                  const num = (i + 1).toString().padStart(2, '0');
                  const colors = ['bg-purple-700', 'bg-pink-600', 'bg-orange-500', 'bg-teal-500', 'bg-blue-600'];
                  const bgColor = colors[i % colors.length];
                  const iconFromData = item.icon;
                  const cleanName = item.name.replace(/^\d+\.\s*/, '');
                  
                  return (
                    <div key={i} className="process-step text-center">
                      <div className={`w-20 h-20 mx-auto rounded-full ${bgColor} flex items-center justify-center text-white mb-6 shadow-xl border-[6px] border-white`}>
                        {getIconForTitle(item.name, iconFromData)}
                      </div>
                      <div className="text-indigo-700 font-bold text-[11px] mb-2">{num}</div>
                      <h4 className="text-slate-900 font-bold text-[13px] mb-3 h-10 px-2">{cleanName}</h4>
                      <p className="text-slate-500 text-[11px] leading-relaxed px-2">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 6. FOOTER CTA */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Ready to Elevate Your Brand?
              </h2>
              <p className="text-slate-300 text-base mb-10 max-w-md">
                Let's create stunning designs that leave a lasting impression and drive your business forward.
              </p>
              <div className="flex flex-wrap gap-6 items-center">
                <button 
                  onClick={() => navigate('/contact')}
                  className="px-8 py-4 bg-gradient-to-r from-fuchsia-500 to-pink-600 rounded-full text-white font-bold text-[13px] hover:shadow-lg transition-all flex items-center gap-2"
                >
                  Get Started Today <ArrowRight size={16} />
                </button>
                <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                    <PhoneCall size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 mb-0.5">Talk to Our Expert</div>
                    <div className="font-bold text-base">+91 6366930178</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:flex justify-end">
              <div className="relative w-80 h-80">
                <img src={serviceImage || "https://images.unsplash.com/photo-1561070791-2526d30994b5"} alt="Graphic" className="w-full h-full object-cover rounded-3xl opacity-80 mix-blend-overlay" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServiceDetailsPage;