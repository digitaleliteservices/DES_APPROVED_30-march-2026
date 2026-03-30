
import React from 'react';
import { motion } from 'framer-motion';

const paths = [
  "M44.7,-76.4C58.3,-69.2,70.1,-58.5,78.2,-45.5C86.3,-32.5,90.6,-16.2,88.4,-0.6C86.3,15,77.7,29.9,68.2,43.2C58.7,56.5,48.2,68.2,35.2,74.5C22.2,80.7,6.8,81.5,-8.1,79.5C-22.9,77.5,-37.2,72.7,-50.3,64.8C-63.4,56.9,-75.4,45.8,-82.4,32.3C-89.4,18.8,-91.4,2.9,-87.8,-11.9C-84.3,-26.8,-75.2,-40.5,-63.9,-49.6C-52.6,-58.7,-39.1,-63.1,-26.3,-70.9C-13.5,-78.7,-1.4,-89.8,11.3,-90.7C24,-91.6,31.2,-83.5,44.7,-76.4Z",
  "M40.2,-68.1C51.6,-61.8,60.2,-50.2,66.3,-37.7C72.5,-25.1,76.2,-11.5,75.2,1.8C74.3,15,68.7,27.8,60.8,39.3C52.9,50.7,42.7,60.8,30.5,67.3C18.4,73.8,4.2,76.7,-10.1,75.4C-24.4,74.1,-38.7,68.6,-50.1,60C-61.5,51.4,-70,39.7,-75.4,26.4C-80.8,13.2,-83.1,-1.5,-80.7,-15.8C-78.4,-30.1,-71.4,-44.1,-60.7,-50.8C-50,-57.6,-35.6,-57.2,-23,-63C-10.4,-68.8,0.4,-80.8,11.8,-80.2C23.2,-79.6,28.8,-74.3,40.2,-68.1Z",
  "M48.7,-74.6C62.4,-68.2,72.3,-53.4,78.5,-38.3C84.7,-23.3,87.1,-8,84.9,6.7C82.7,21.4,75.8,35.6,66.2,47.9C56.6,60.2,44.2,70.5,30.3,76.5C16.4,82.5,1,84.1,-14.2,81.4C-29.4,78.7,-44.5,71.6,-56.3,61.8C-68.1,52.1,-76.7,39.6,-81.4,25.8C-86.2,12.1,-87.1,-2.9,-83.4,-17.1C-79.8,-31.3,-71.6,-44.7,-60.1,-52.1C-48.6,-59.5,-33.8,-60.9,-20.9,-68C-8.1,-75.1,2.8,-87.8,15.1,-89.6C27.3,-91.3,34.9,-81,48.7,-74.6Z"
];

const SVGMorph = ({ color = "fill-gold-100/30", className = "" }) => {
  return (
    <div className={`absolute pointer-events-none z-0 ${className}`}>
      <svg viewBox="-100 -100 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" style={{ stopColor: 'currentColor', stopOpacity: 0.2 }} />
            <stop offset="100%" style={{ stopColor: 'currentColor', stopOpacity: 0 }} />
          </radialGradient>
        </defs>
        <motion.path
          d={paths[0]}
          animate={{ d: paths }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut"
          }}
          className={color}
        />
        <motion.path
          d={paths[2]}
          animate={{ 
            d: [paths[2], paths[1], paths[0]],
            rotate: [0, 360]
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "linear"
          }}
          className={`${color} opacity-40`}
          style={{ transformOrigin: 'center' }}
        />
      </svg>
    </div>
  );
};

export default SVGMorph;
