import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

import About from "../components/About";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>
          About Digital Elite Services | Web, SEO & Digital Solutions Experts
        </title>

        <meta
          name="description"
          content="Learn about Digital Elite Services, a results-driven digital agency specializing in web development, SEO, and online marketing solutions tailored to grow your business."
        />

        <meta
          name="keywords"
          content="about Digital Elite Services, digital agency Bangalore, SEO experts Bangalore, web development company, online marketing agency, branding solutions, digital solutions experts, web and SEO services"
        />

        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="About Digital Elite Services | Web, SEO & Digital Solutions Experts"
        />

        <meta
          property="og:description"
          content="Learn about Digital Elite Services, a results-driven digital agency specializing in web development, SEO, and online marketing solutions tailored to grow your business."
        />

        <meta
          property="og:url"
          content="https://digitaleliteservices.in/about"
        />

        <link rel="canonical" href="https://digitaleliteservices.in/about" />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-20"
      >
        <About />
      </motion.div>
    </>
  );
};

export default AboutPage;
