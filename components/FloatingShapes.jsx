
import React from 'react';
import { motion } from 'framer-motion';

const FloatingShapes = ({ count }) => {
  const shapes = Array.from({ length: count }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 60 + 20,
    duration: Math.random() * 20 + 20,
    delay: Math.random() * 5,
    color: i % 3 === 0 ? 'gold' : i % 3 === 1 ? 'brand' : 'zinc'
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute rounded-full opacity-10 ${
            shape.color === 'gold' ? 'bg-gold-400' :
            shape.color === 'brand' ? 'bg-brand-400' : 'bg-zinc-400'
          }`}
          style={{
            width: shape.size,
            height: shape.size,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default FloatingShapes;
