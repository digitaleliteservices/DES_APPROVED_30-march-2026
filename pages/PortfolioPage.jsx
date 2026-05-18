import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

import Portfolio from "../components/Portfolio";

const PortfolioPage = () => {
  return (
    <>
      <Helmet>
        <title>
          Our Portfolio | Digital Elite Services Projects & Case Studies
        </title>

        <meta
          name="description"
          content="Explore Digital Elite Services portfolio showcasing successful web design, development, and digital marketing projects that deliver measurable results."
        />

        <meta
          name="keywords"
          content="Digital Elite Services portfolio, web design portfolio Bangalore, digital marketing case studies, SEO projects, website development projects, branding portfolio, creative agency work, marketing success stories"
        />

        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="Our Portfolio | Digital Elite Services Projects & Case Studies"
        />

        <meta
          property="og:description"
          content="Explore Digital Elite Services portfolio showcasing successful web design, development, and digital marketing projects that deliver measurable results."
        />

        <meta
          property="og:url"
          content="https://digitaleliteservices.in/portfolio"
        />

        <link
          rel="canonical"
          href="https://digitaleliteservices.in/portfolio"
        />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-20"
      >
        <Portfolio />
      </motion.div>
    </>
  );
};

export default PortfolioPage;
