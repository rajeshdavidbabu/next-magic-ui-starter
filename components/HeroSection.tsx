"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        <motion.h1 
          className="text-5xl font-spaceBold text-primary mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Digitální Páteř Vaší lékařské praxe
        </motion.h1>
        <motion.p 
          className="text-xl font-raleway text-primary-light mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Modernizujeme české zdravotnictví pomocí inovativních technologických řešení
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Link href="/kontakt" className="bg-primary text-white px-8 py-3 rounded-md font-spaceBold text-lg hover:bg-primary-light transition-colors duration-300">
            Zjistit více
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;