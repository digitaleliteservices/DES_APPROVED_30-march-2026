
import React from 'react';
import { 
  Search, 
  Globe, 
  Smartphone, 
  Layers, 
  Megaphone, 
  PenTool,
  TrendingUp,
  Mail,
  Zap
} from 'lucide-react';

import ALIZA from './assets/images/ALIZA.png';
import Bankedge from './assets/images/BE.png';
import ChaskaTea from './assets/images/CHASKA.png';
import HumStrum from './assets/images/BEE.png';
import MLG from './assets/images/MLG.png';
import MatchingMatching from './assets/images/MM.png';
import Plumeria from './assets/images/Plumeria.png';
import SriMatru from './assets/images/SM.png';
import SriSaiExim from './assets/images/SSE.png';
import NorthEastReality from './assets/images/NER.png';
import DefenceHousingSociety from './assets/images/DHS.png';
import NeelTechnologies from './assets/images/NEEL.png';
import RajaVrukshaGroup from './assets/images/RPL.png';
import AquaGoldPlus from './assets/images/AQUA+.png';
import CoreMarketingService from './assets/images/CMS.png';
import RoyalMonkEvents from './assets/images/RM.png';
//import AWTechnologies from './assets/images/AWTech.png';
import AirzenTech from './assets/images/AIRZEN.png';
import DESLOGO from './assets/images/DES-LOGO.png';



import portfolioImage2 from './assets/portfolio/portfolio-img1.png';
import PortfolioImage5 from  './assets/portfolio/portfolio-img2.png';
import portfolioImage3 from './assets/portfolio/portfolio-img3.png';
import portfolioImage4 from './assets/portfolio/portfolio-img4.png';
import portfolioImage1 from './assets/portfolio/portfolio-img5.png';
import portfolioImage6 from './assets/portfolio/portfolio-img6.png';
import portfolioImage7 from './assets/portfolio/portfolio-img7.png';
import portfolioImage8 from './assets/portfolio/portfolio-img8.png';
import portfolioImage9 from './assets/portfolio/portfolio-img9.png';
import portfolioImage10 from './assets/portfolio/portfolio-img10.png';
import portfolioImage11 from './assets/portfolio/portfolio-img11.jpeg'
import portfolioImage12 from './assets/portfolio/portfolio-img12.jpeg'
import portfolioImage13 from './assets/portfolio/portfolio-img13.jpeg'
import portfolioImage14 from './assets/portfolio/portfolio-img14.jpeg'
import portfolioImage15 from './assets/portfolio/portfolio-img15.jpeg'
import portfolioImage16 from './assets/portfolio/portfolio-img16.jpeg'
import portfolioImage17 from './assets/portfolio/portfolio-img17.jpeg'
import portfolioImage18 from './assets/portfolio/portfolio-img18.jpeg'
import portfolioImage19 from './assets/portfolio/portfolio-img19.jpeg'
import portfolioImage20 from './assets/portfolio/portfolio-img20.jpeg'
import portfolioImage21 from './assets/portfolio/portfolio-img21.jpeg'
import portfolioImage22 from './assets/portfolio/portfolio-img22.jpeg'

import WebProject1 from './assets/portfolio/WebProject1.png';
import WebProject2 from './assets/portfolio/WebProject2.png';
import WebProject3 from './assets/portfolio/WebProject3.png';
import WebProject4 from './assets/portfolio/WebProject4.png';
import WebProject5 from './assets/portfolio/WebProject5.png';
import WebProject6 from './assets/portfolio/WebProject6.png';
import WebProject7 from './assets/portfolio/WebProject7.png';
import WebProject8 from './assets/portfolio/WebProject8.png';
import WebProject9 from './assets/portfolio/WebProject9.png';
import WebProject10 from './assets/portfolio/WebProject10.png';
import WebProject11 from './assets/portfolio/WebProject11.png';

import DigitalProject1 from './assets/portfolio/DigitalProject1.jpeg'; 
import DigitalProject2 from './assets/portfolio/DigitalProject2.jpeg';
import DigitalProject3 from './assets/portfolio/DigitalProject3.jpeg';
import DigitalProject4 from './assets/portfolio/DigitalProject4.jpeg';
import DigitalProject5 from './assets/portfolio/DigitalProject5.jpeg';
import DigitalProject6 from './assets/portfolio/DigitalProject6.jpeg';
import DigitalProject7 from './assets/portfolio/DigitalProject7.jpeg';


export const DES_LOGO = DESLOGO;
export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  // { name: 'Contact', href: '/contact' },
];

export const SERVICES = [
  {
    id: 'seo',
    title: 'Digital Marketing',
    description: 'Boost your visibility and rank higher on Google search results with our data-driven digital marketing and SEO strategies.',
    icon: 'Search',
    color: 'bg-blue-500',
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'High-performance, responsive websites built with the latest technologies to convert visitors into customers.',
    icon: 'Globe',
    color: 'bg-indigo-500',
  },
  {
    id: 'smm',
    title: 'Social Media Marketing',
    description: 'Engage your audience across social platforms and build a community around your brand identity.',
    icon: 'Megaphone',
    color: 'bg-purple-500',
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description: 'Creative visual solutions that capture attention and communicate your brand message effectively.',
    icon: 'PenTool',
    color: 'bg-pink-500',
  },
  {
    id: 'lead-gen',
    title: 'Lead Generation',
    description: 'Strategic PPC and email campaigns designed to fill your sales pipeline with qualified prospects.',
    icon: 'TrendingUp',
    color: 'bg-emerald-500',
  },
];


export const TESTIMONIALS = [
  {
    id: '1',
    name: 'SriSaiExim',
    role: 'CEO',
    content: 'Digital Elite Services transformed our online presence. Our traffic grew by 200% in just six months!',
    avatar: SriSaiExim,
  },
  {
    id: '2',
    name: 'RajaVruksha Group',
    role: 'Founder',
    content: 'The web development team is top-notch. They delivered a complex platform ahead of schedule and perfectly on brand.',
    avatar: RajaVrukshaGroup,
  },
  {
    id: '3',
    name: 'Defence Housing Society',
    role: 'Marketing Director',
    content: 'Their social media strategies actually drive sales, not just likes. Highly recommend their holistic approach.',
    avatar: DefenceHousingSociety,
  },
  {
    id: '4',
    name: 'NorthEast Reality',
    role: 'Operations Head',
    content: 'Professional, creative, and highly responsive team. They understood our vision perfectly and executed beyond expectations.',
    avatar: NorthEastReality,
  },
  {
    id: '5',
    name: 'Sri Matru',
    role: 'Managing Director',
    content: 'From branding to digital marketing, everything was handled smoothly. We saw measurable growth within the first quarter.',
    avatar: SriMatru,
  },
];

export const SERVICE_ICONS = {
  Search: <Search className="w-6 h-6" />,
  Globe: <Globe className="w-6 h-6" />,
  Smartphone: <Smartphone className="w-6 h-6" />,
  Layers: <Layers className="w-6 h-6" />,
  Megaphone: <Megaphone className="w-6 h-6" />,
  PenTool: <PenTool className="w-6 h-6" />,
  TrendingUp: <TrendingUp className="w-6 h-6" />,
  Mail: <Mail className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
};
export const CLIENTS = [
  {
    id: 1,
    title: "Defence Housing Society",
    category: "Housing Co-operative",
    image: DefenceHousingSociety,
    externalUrl: "https://defencehousingsociety.com/",
  },
  {
    id: 2,
    title: "Raja Vruksha Group",
    category: "Real Estate",
    image: RajaVrukshaGroup,
    externalUrl: "https://rajavrukshagroup.in/",
  },
  {
    id: 3,
    title: "Plumeria Resort",
    category: "Hospitality",
    image: Plumeria,
    externalUrl: "https://plumeriaresort.in/",
  },
  {
    id: 4,
    title: "Sri Matru",
    category: "Infrastructure",
    image: SriMatru,
    externalUrl: "https://srimatru.in/",
  },
  {
    id: 5,
    title: "North East Reality",
    category: "Property Listings",
    image: NorthEastReality,
    externalUrl: "https://northeastreality.in/",
  },
  {
    id: 6,
    title: "Sri Sai Exim",
    category: "Global Trade",
    image: SriSaiExim,
    externalUrl: "https://test.srisaiexim.in/",
  },
  {
    id: 7,
    title: "Neel Technologies",
    category: "IT Solutions",
    image: NeelTechnologies,
    externalUrl: "https://www.neeltechnologies.com/",
  },
  {
    id: 8,
    title: "Chaska Tea",
    category: "Food & Beverage",
    image: ChaskaTea,
    externalUrl: "https://example.com/chaska-tea",
  },
  {
    id: 9,
    title: "Airzen Technologies",
    category: "Technology",
    image: AirzenTech,
    externalUrl: "https://example.com/airzen-technologies",
  },
  {
    id: 10,
    title: "Bankedge",
    category: "Financial Services",
    image: Bankedge,
    externalUrl: "https://example.com/bankedge",
  },
  {
    id: 11,
    title: "MLG Corporate",
    category: "Corporate Services",
    image: MLG,
    externalUrl: "https://example.com/mlg-corporate",
  },
  {
    id: 12,
    title: "Hum & Strum Music School Pvt Ltd",
    category: "Education & Music",
    image: HumStrum,
    externalUrl: "https://example.com/hum-and-strum",
  },
  {
    id: 13,
    title: "Aliza Store",
    category: "E-commerce",
    image: ALIZA,
    externalUrl: "https://example.com/aliza-store",
  },
  {
    id: 14,
    title: "Core Marketing Service",
    category: "Marketing & Advertising",
    image: CoreMarketingService,
    externalUrl: "https://example.com/core-marketing",
  },
  {
    id: 15,
    title: "Royal Monk Events",
    category: "Events & Entertainment",
    image: RoyalMonkEvents,
    externalUrl: "https://example.com/royal-monk-events",
  },
  // {
  //   id: 16,
  //   title: "AW Technologies",
  //   category: "IT & Software",
  //   image: "", // AWTechnologies, --- IGNORE ---
  //   externalUrl: "https://example.com/aw-technologies",
  // },
  {
    id: 17,
    title: "Matching Matching",
    category: "Lifestyle & Services",
    image: MatchingMatching,
    externalUrl: "https://example.com/matching-matching",
  },
  {
    id: 18, title: "Aqua Gold Plus",
    category: "Water Solutions",
    image: AquaGoldPlus,
    externalUrl: "https://example.com/aqua-gold-plus",
  }
];

export const projects = [
{ 
  id: "WEB-001",
  index: "01",
  client: "CheRaVaNa",
  title: "Nature to Nutrition Platform", 
  category: "Web Development", 
  color: "#2E5E3B",
  image: WebProject1,
  description: "Built a modern full-stack e-commerce platform for CheRaVaNa, enabling seamless product browsing, secure checkout, and efficient inventory management.",
  kpi: "Sales Growth: +30%",
  tech: ["React.js", "Tailwind CSS"]
}
,
  {
  id: "MKT-002",
  index: "02",
  client: "Defence Housing Society",
  title: "Predictive Growth Engine",
  category: "Digital Marketing",
  color: "#0a9466ff",
  image: DigitalProject2,
  description: "AI-powered marketing intelligence platform optimizing cross-device ad performance with 98% forecast accuracy.",
  kpi: "Conversion: +156%",
  tech: ["BigQuery", "Looker Studio", "Python", "AI Forecasting"]
}
,
 {
  "id": "DES-003",
  "index": "03",
  "client": "AURA DESIGN LAB",
  "title": "Real Estate Poster Design",
  "category": "Graphic Design",
  "color": "#a53d3dff",
  "image": portfolioImage1,
  "description": "A bold promotional poster crafted to highlight residential plot value through clean typography, 3D compositing, and aspirational lifestyle visuals—designed for strong visual impact across digital and print.",
  "kpi": "Engagement: +89%",
  "tech": ["Figma", "Photoshop", "After Effects"]
}

,
  {
  "id": "WEB-004",
  "index": "04",
  "client": "Defence Habitat Housing Co-Operative Society",
  "title": "Real Estate Landing Page",
  "category": "Web Development",
  "color": "#232f65ff",
  "image": WebProject2,
  "description": "A modern responsive landing page built to showcase residential layouts, drive enquiries, and capture leads through a fast and clean user experience.",
  "kpi": "Performance: Optimized UX & Lead Capture",
  "tech": ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"]
}
,
 {
  id: "MKT-005",
  index: "05",
  client: "Rajavruksha",
  title: "Omni-Channel Strategy",
  category: "Digital Marketing",
  color: "#39496eff",
  image: DigitalProject3,
  description: "Data-driven omni-channel campaign aligning demographic insights with ad spend to scale high-intent audiences.",
  kpi: "Revenue: +214%",
  tech: ["Meta Ads", "Google Ads", "HubSpot", "GA4"]
}
,
  {
  "id": "WEB-006",
  "index": "06",
  "client": "Rajavruksha",
  "title": "Real Estate Website",
  "category": "Web Development",
  "color": "#7e7530ff",
  "image": portfolioImage10,
  "description": "High-performance real estate website built for speed, responsiveness, and lead conversion.",
  "kpi": "UX: Optimized Engagement",
  "tech": ["Next.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"]
}
,
  {
  "id": "DES-007",
  "index": "07",
  "client": "MLG",
  "title": "Promotional Poster Design",
  "category": "Graphic Design",
  "color": "#553336ff",
  "image": portfolioImage11,
  "description": "Premium promotional poster crafted to elevate brand presence and capture attention with bold visuals and clear messaging.",
  "kpi": "Engagement: Increased Visibility",
  "tech": ["Figma", "Photoshop"]
}
,
  {
  id: "MKT-008",
  index: "08",
  client: "CMS",
  title: "Sustainability Data Story",
  category: "Digital Marketing",
  color: "#233274ff",
  image: DigitalProject4,
  description: "Time-based campaign optimization using behavioral analytics to maximize renewable engagement and reduce acquisition costs.",
  kpi: "CPA: -35%",
  tech: ["SEO/SEM", "Tableau", "Segment", "Data Analytics"]
}

];

export const graphicDesignImages = [
  {
    id: 1,
    title: "CheRaVaNa",
    category: "Graphic Design",
    image: portfolioImage1,
  },
  {
    id: 2,
    title: "Lumina Brand Identity",
    category: "Graphic Design",
    image: portfolioImage2,
  },
  {
    id: 3,
    title: "Solaris Marketing Campaign",
    category: "Graphic Design",
    image: portfolioImage3,
  },
  {
    id: 4,
    title: "Solaris Marketing Campaign",
    category: "Graphic Design",
    image: portfolioImage4,
  },
  {
    id: 5,
    title: "Solaris Marketing Campaign",
    category: "Graphic Design",
    image: PortfolioImage5,
  },
  {
    id: 6,
    title: "Solaris Marketing Campaign",
    category: "Graphic Design",
    image: portfolioImage6,
  },
  {
    id: 7,
    title: "Solaris Marketing Campaign",
    category: "Graphic Design",
    image: portfolioImage7,
  },
  {
    id: 8,
    title: "Solaris Marketing Campaign",
    category: "Graphic Design",
    image: portfolioImage8,
  },
  {
    id: 9,
    title: "Solaris Marketing Campaign",
    category: "Graphic Design",
    image: portfolioImage9,
  },
  {
    id: 10,
    title: "Solaris Marketing Campaign",
    category: "Graphic Design",
    image: portfolioImage10,
  },
  {
    id: 11,
    title: "Solaris Marketing Campaign",
    category: "Graphic Design",
    image: portfolioImage11,
  },
  {
    id: 12,
    title: "Solaris Marketing Campaign",
    category: "Graphic Design",
    image: portfolioImage12,
  },
  {
    id: 13,
    title: "Solaris Marketing Campaign",
    category: "Graphic Design",
    image: portfolioImage13,
  },
  {
    id: 14,
    title: "Solaris Marketing Campaign",
    category: "Graphic Design",
    image: portfolioImage14,
  },
  {
    id: 15,
    title: "Solaris Marketing Campaign",
    category: "Graphic Design",
    image: portfolioImage15,
  },
  {
    id: 16,
    title: "Solaris Marketing Campaign",
    category: "Graphic Design",
    image: portfolioImage16,
  },
  {
    id: 17,
    title: "Solaris Marketing Campaign",
    category: "Graphic Design",
    image: portfolioImage17,
  },
  {
    id: 18,
    title: "Solaris Marketing Campaign",
    category: "Graphic Design",
    image: portfolioImage18,
  },
  {
    id: 19,
    title: "Solaris Marketing Campaign",
    category: "Graphic Design",
    image: portfolioImage19,
  },
  {
    id: 20,
    title: "Solaris Marketing Campaign",
    category: "Graphic Design",
    image: portfolioImage20,
  },
  {
    id:21,
    title: "Solaris Marketing Campaign",
    category: "Graphic Design",
    image: portfolioImage21,
  },
  {
    id:22,
    title: "Solaris Marketing Campaign",
    category: "Graphic Design",
    image: portfolioImage22,
  },
 
];

export const webDesignImages = [
  {
    id: 1,
    title: "CheRaVaNa",
    category: "Web Design",
    image:WebProject1,
  },
  {
    id: 2,
    title: "Lumina Brand Identity",
    category: "Web Design",
    image: WebProject2,
  },
  {
    id: 3,
    title: "Solaris Marketing Campaign",
    category: "Web Design",
    image: WebProject3,
  },
  {
    id: 4,
    title: "Solaris Marketing Campaign",
    category: "Web Design",
    image: WebProject4,
  },
  {
    id: 5,
    title: "Solaris Marketing Campaign",
    category: "Web Design",
    image: WebProject5,
  },
  {
    id: 6,
    title: "Solaris Marketing Campaign",
    category: "Web Design",
    image: WebProject6,
  },
  {
    id: 7,
    title: "Solaris Marketing Campaign",
    category: "Web Design",
    image: WebProject7,
  },
  {
    id: 8,
    title: "Solaris Marketing Campaign",
    category: "Web Design",
    image: WebProject8,
  },
  {
    id: 9,
    title: "Solaris Marketing Campaign",
    category: "Web Design",
    image: WebProject9,
  },
  {
    id: 10,
    title: "Solaris Marketing Campaign",
    category: "Web Design",
    image: WebProject10,
  },
  {
    id: 11,
    title: "Solaris Marketing Campaign",
    category: "Web Design",
    image: WebProject11,
  },
];

export const digitalMarketingImages = [
  {
    id: 1,
    title: "CheRaVaNa",
    category: "Digital Marketing",
    image: DigitalProject1,
  },
  {
    id: 2,
    title: "Lumina Brand Identity",
    category: "Digital Marketing",
    image: DigitalProject2,
  },
  {
    id: 3,
    title: "Solaris Marketing Campaign",
    category: "Digital Marketing",
    image: DigitalProject3,
  },
  {
    id: 4,
    title: "Sustainability Data Story",
    category: "Digital Marketing",
    image: DigitalProject4,
  }
  ,
  {
    id: 5,
    title: "Solaris Marketing Campaign",
    category: "Digital Marketing",
    image: DigitalProject5,
  },
  {
    id: 6,
    title: "Solaris Marketing Campaign",
    category: "Digital Marketing",
    image: DigitalProject6,
  },
  {
    id: 7,
    title: "Solaris Marketing Campaign",
    category: "Digital Marketing",
    image: DigitalProject7,
  },
  {
    id: 8,
    title: "Solaris Marketing Campaign",
    category: "Digital Marketing",
    image: "https://plus.unsplash.com/premium_photo-1683872921964-25348002a392?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    title: "Solaris Marketing Campaign",
    category: "Digital Marketing",
    image: "https://i.pinimg.com/1200x/fc/2f/d3/fc2fd38bb1f61bbd38a5c765503c632e.jpg",
  }, 
  {
    id: 10,
    title: "Solaris Marketing Campaign",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 11,
    title: "Solaris Marketing Campaign",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 12,
    title: "Solaris Marketing Campaign",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 13,
    title: "Solaris Marketing Campaign",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  },
  // {
  //   id: 14,
  //   title: "Solaris Marketing Campaign",
  //   category: "Digital Marketing",
  //   image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop",
  // },
  // {
  //   id: 15,
  //   title: "Solaris Marketing Campaign",
  //   category: "Digital Marketing",
  //   image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
  // },
  // {
  //   id: 16,
  //   title: "Solaris Marketing Campaign",
  //   category: "Digital Marketing",
  //   image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
  // },
  // {
  //   id: 17,
  //   title: "Solaris Marketing Campaign",
  //   category: "Digital Marketing",
  //   image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
  // },
  // {
  //   id: 18,
  //   title: "Solaris Marketing Campaign",
  //   category: "Digital Marketing",
  //   image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
  // },
  // {
  //   id: 19,
  //   title: "Solaris Marketing Campaign",
  //   category: "Digital Marketing",
  //   image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=800&auto=format&fit=crop",
  // },
  // {
  //   id: 20,
  //   title: "Solaris Marketing Campaign",
  //   category: "Digital Marketing",
  //   image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
  // },
  // {
  //   id: 21,
  //   title: "Solaris Marketing Campaign",
  //   category: "Digital Marketing",
  //   image: "https://images.unsplash.com/photo-1504868584819-f8e90526354c?q=80&w=800&auto=format&fit=crop",
  // },
  // {
  //   id: 22,
  //   title: "Solaris Marketing Campaign",
  //   category: "Digital Marketing",
  //   image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
  // },
  // {
  //   id: 23,
  //   title: "Solaris Marketing Campaign",
  //   category: "Digital Marketing",
  //   image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800&auto=format&fit=crop",
  // },
  // {
  //   id: 24,
  //   title: "Solaris Marketing Campaign",
  //   category: "Digital Marketing",
  //   image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop",
  // },
  // {
  //   id: 25,
  //   title: "Solaris Marketing Campaign",
  //   category: "Digital Marketing",
  //   image: "https://images.unsplash.com/photo-1557426272-fc759fbb7a8d?q=80&w=800&auto=format&fit=crop",
  // },
  // {
  //   id: 26,
  //   title: "Solaris Marketing Campaign",
  //   category: "Digital Marketing",
  //   image: "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=800&auto=format&fit=crop",
  // },
  // {
  //   id: 27,
  //   title: "Solaris Marketing Campaign",
  //   category: "Digital Marketing",
  //   image: "https://images.unsplash.com/photo-1556761175-5973cf0f32e7?q=80&w=800&auto=format&fit=crop",
  // },
  // {
  //   id: 28,
  //   title: "Solaris Marketing Campaign",
  //   category: "Digital Marketing",
  //   image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
  // },
  // {
  //   id: 29,
  //   title: "Solaris Marketing Campaign",
  //   category: "Digital Marketing",
  //   image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
  // },
  // {
  //   id: 30,
  //   title: "Solaris Marketing Campaign",
  //   category: "Digital Marketing",
  //   image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop",
  // },
  // {
  //   id: 31,
  //   title: "Solaris Marketing Campaign",
  //   category: "Digital Marketing",
  //   image: "https://images.unsplash.com/photo-1522071823991-b5ae72c4b0d7?q=80&w=800&auto=format&fit=crop",
  // },
  // {
  //   id: 32,
  //   title: "Solaris Marketing Campaign",
  //   category: "Digital Marketing",
  //   image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=800&auto=format&fit=crop",
  // },
];
    
  
