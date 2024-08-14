"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const AboutUsPreview = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-spaceBold text-primary mb-4">O DigiMedic</h2>
            <p className="font-raleway text-primary-light mb-4">
              DigiMedic se specializuje na poskytování moderních technologických řešení pro zdravotnictví. Naším cílem je efektivní využití technologií pro zlepšení kvality a dostupnosti péče v České republice.
            </p>
            <Link href="/o-nas" className="text-primary font-spaceBold hover:text-primary-light transition-colors duration-300">
              Zjistit více o nás →
            </Link>
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/placeholder-image.jpg"
              alt="O DigiMedic"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
              layout="responsive"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPreview;