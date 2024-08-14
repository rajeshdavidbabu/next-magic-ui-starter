"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-primary-bg py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src="/Brand materials/DigiMedic-logo-long.svg"
              alt="DigiMedic Logo"
              width={160}
              height={36}
              className="h-8 w-auto"
            />
          </motion.div>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link href="/sluzby" className="text-primary hover:text-primary-light transition-colors">Služby</Link></li>
            <li><Link href="/projekty" className="text-primary hover:text-primary-light transition-colors">Projekty</Link></li>
            <li><Link href="/o-nas" className="text-primary hover:text-primary-light transition-colors">O nás</Link></li>
            <li><Link href="/kontakt" className="text-primary hover:text-primary-light transition-colors">Kontakt</Link></li>
            <li><Link href="/blog" className="text-primary hover:text-primary-light transition-colors">Blog</Link></li>
          </ul>
        </nav>
        <motion.button
          className="hidden md:block bg-primary text-white px-4 py-2 rounded-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Kontaktujte nás
        </motion.button>
        <button className="md:hidden text-primary" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white"
          >
            <nav className="container mx-auto py-4">
              <ul className="space-y-2">
                <li><Link href="/sluzby" className="block text-primary hover:text-primary-light transition-colors">Služby</Link></li>
                <li><Link href="/projekty" className="block text-primary hover:text-primary-light transition-colors">Projekty</Link></li>
                <li><Link href="/o-nas" className="block text-primary hover:text-primary-light transition-colors">O nás</Link></li>
                <li><Link href="/kontakt" className="block text-primary hover:text-primary-light transition-colors">Kontakt</Link></li>
                <li><Link href="/blog" className="block text-primary hover:text-primary-light transition-colors">Blog</Link></li>
              </ul>
              <motion.button
                className="mt-4 bg-primary text-white px-4 py-2 rounded-md w-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Kontaktujte nás
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;