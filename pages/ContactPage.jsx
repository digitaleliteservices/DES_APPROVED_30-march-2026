import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

import Contact from "../components/Contact";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>
          Contact Digital Elite Services | Get in Touch for Web & Marketing
          Solutions
        </title>

        <meta
          name="description"
          content="Contact Digital Elite Services for expert web development, SEO, and digital marketing solutions. Reach out today to discuss your project and grow your business online."
        />

        <meta
          name="keywords"
          content="contact Digital Elite Services, digital marketing agency contact, SEO company Bangalore contact, web development services Bangalore, marketing consultation, business growth solutions, digital agency support"
        />

        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="Contact Digital Elite Services | Get in Touch for Web & Marketing Solutions"
        />

        <meta
          property="og:description"
          content="Contact Digital Elite Services for expert web development, SEO, and digital marketing solutions. Reach out today to discuss your project and grow your business online."
        />

        <meta
          property="og:url"
          content="https://digitaleliteservices.in/contact"
        />

        <link rel="canonical" href="https://digitaleliteservices.in/contact" />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-20"
      >
        <Contact />
      </motion.div>
    </>
  );
};

export default ContactPage;
