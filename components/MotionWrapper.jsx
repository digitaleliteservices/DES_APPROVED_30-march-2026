
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const MotionWrapper = ({ 
  children, 
  delay = 0, 
  direction = 'up',
  variant = 'fade',
  className = "",
  viewportMargin = "-100px"
}) => {
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, direction === 'up' ? -120 : 120]);

  const animations = {
    fade: {
      hidden: {
        opacity: 0,
        y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
        x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
        filter: "blur(15px)"
      },
      visible: {
        opacity: 1,
        y: 0,
        x: 0,
        filter: "blur(0px)",
        transition: {
          duration: 1.2,
          delay,
          ease: [0.16, 1, 0.3, 1],
        },
      },
    },
    clip: {
      hidden: { 
        clipPath: "inset(100% 0 0 0)",
        opacity: 0,
        scale: 1.05
      },
      visible: { 
        clipPath: "inset(0% 0 0 0)",
        opacity: 1,
        scale: 1,
        transition: {
          duration: 1.8,
          delay,
          ease: [0.77, 0, 0.175, 1],
        },
      },
    },
    zoom: {
      hidden: { opacity: 0, scale: 0.92, filter: "blur(8px)" },
      visible: { 
        opacity: 1, 
        scale: 1,
        filter: "blur(0px)",
        transition: {
          duration: 1,
          delay,
          type: "spring",
          stiffness: 50,
          damping: 20
        }
      },
    },
    skew: {
      hidden: { opacity: 0, skewY: 3, y: 60 },
      visible: { 
        opacity: 1, 
        skewY: 0, 
        y: 0,
        transition: {
          duration: 1.4,
          delay,
          ease: [0.22, 1, 0.36, 1]
        }
      },
    }
  };

  if (variant === 'parallax') {
    return (
      <motion.div style={{ y: yRange }} className={className}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: viewportMargin, amount: 0.1 }}
      variants={animations[variant]}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
