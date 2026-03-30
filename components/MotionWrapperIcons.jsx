import React from "react";
import { motion } from "framer-motion";

export default function MotionWrapperIcons({
  children,
  delay = 0,
  variant = "fade",
}) {
  const variants = {
    fade: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration: 0.6, delay },
      },
    },
    slideUp: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay },
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants[variant]}
    >
      {children}
    </motion.div>
  );
}
