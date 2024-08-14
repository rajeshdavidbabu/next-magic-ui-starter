"use client";

import React from 'react';
import { motion } from 'framer-motion';

const services = ['Vývoj softwaru na míru', 'Implementace technologických řešení', 'Kontrola vyúčtování', 'Virtuální asistence', 'Asistence při elektronizaci'];

const ServicesOverview = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-spaceBold text-primary mb-12 text-center">Naše služby</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-primary-bg p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
            >
              <h3 className="text-xl font-spaceBold text-primary mb-4">{service}</h3>
              <p className="font-raleway text-primary-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;