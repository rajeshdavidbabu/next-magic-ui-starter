"use client";

import React from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-primary-bg py-20">
      <div className="container mx-auto">
        <motion.h1 
          className="text-4xl font-spaceBold text-primary mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Kontaktujte nás
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-spaceBold text-primary mb-4">Kontaktní informace</h2>
            <p className="font-raleway text-primary-light mb-2">
              <strong>Email:</strong> info@digimedic.cz
            </p>
            <p className="font-raleway text-primary-light mb-2">
              <strong>Telefon:</strong> +420 123 456 789
            </p>
            <p className="font-raleway text-primary-light mb-6">
              <strong>Adresa:</strong> Technologická 1, 110 00 Praha 1
            </p>
            
            <h2 className="text-2xl font-spaceBold text-primary mb-4">Otevírací doba</h2>
            <p className="font-raleway text-primary-light mb-1">Pondělí - Pátek: 9:00 - 17:00</p>
            <p className="font-raleway text-primary-light mb-6">Sobota - Neděle: Zavřeno</p>
            
            <h2 className="text-2xl font-spaceBold text-primary mb-4">Sledujte nás</h2>
            <div className="flex space-x-4">
              {/* Zde přidejte ikony sociálních sítí */}
              <a href="#" className="text-primary hover:text-primary-light transition-colors duration-300">
                Facebook
              </a>
              <a href="#" className="text-primary hover:text-primary-light transition-colors duration-300">
                LinkedIn
              </a>
              <a href="#" className="text-primary hover:text-primary-light transition-colors duration-300">
                Twitter
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-spaceBold text-primary mb-4">Napište nám</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-spaceBold text-primary mb-2">Jméno</label>
                <input type="text" id="name" name="name" className="w-full p-2 border border-primary-light rounded" />
              </div>
              <div>
                <label htmlFor="email" className="block font-spaceBold text-primary mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full p-2 border border-primary-light rounded" />
              </div>
              <div>
                <label htmlFor="message" className="block font-spaceBold text-primary mb-2">Zpráva</label>
                <textarea id="message" name="message" rows={4} className="w-full p-2 border border-primary-light rounded"></textarea>
              </div>
              <button type="submit" className="bg-primary text-white px-6 py-2 rounded font-spaceBold hover:bg-primary-light transition-colors duration-300">
                Odeslat
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;