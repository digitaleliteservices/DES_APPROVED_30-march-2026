
import React from 'react';
import { motion } from 'framer-motion';
import Portfolio from '../components/Portfolio';

const PortfolioPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="pt-20"
    >
      <Portfolio />
    </motion.div>
  );
};

export default PortfolioPage;
