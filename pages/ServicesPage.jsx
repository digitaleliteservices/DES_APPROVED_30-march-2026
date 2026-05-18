import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

import Services from "../components/Services";

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>
          SEO, PPC, Web Development & Digital Marketing Services Bangalore |
          Digital Elite Services
        </title>

        <meta
          name="description"
          content="Explore Digital Elite Services offerings including SEO, PPC, social media marketing, web development, graphic designing, and WhatsApp automation services in Bangalore."
        />

        <meta
          name="keywords"
          content="SEO company Bangalore, PPC services Bangalore, social media marketing Bangalore, web development company Bangalore, graphic designing company Bangalore, WhatsApp automation services India, digital marketing agency Bangalore, lead generation services"
        />

        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="SEO, PPC, Web Development & Digital Marketing Services Bangalore | Digital Elite Services"
        />

        <meta
          property="og:description"
          content="Explore Digital Elite Services offerings including SEO, PPC, social media marketing, web development, graphic designing, and WhatsApp automation services in Bangalore."
        />

        <meta
          property="og:url"
          content="https://digitaleliteservices.in/services"
        />

        <link rel="canonical" href="https://digitaleliteservices.in/services" />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-20"
      >
        <Services />
      </motion.div>
    </>
  );
};

export default ServicesPage;
