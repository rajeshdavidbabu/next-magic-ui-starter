"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { Home } from 'lucide-react'; // Update import to use lucide-react

interface NavItem {
  href: string;
  label: string;
}

interface FloatingNavbarProps {
  navItems?: NavItem[];
  backgroundColor?: string;
  textColor?: string;
  hoverColor?: string;
}

const defaultNavItems: NavItem[] = [
  { href: "/sluzby", label: "Služby" },
  { href: "/projekty", label: "Projekty" },
  { href: "/o-nas", label: "O nás" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/blog", label: "Blog" },
];

const FloatingNavbar: React.FC<FloatingNavbarProps> = ({
  navItems = defaultNavItems,
  backgroundColor = "bg-white",
  textColor = "text-gray-700",
  hoverColor = "hover:text-gray-900",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start({ y: 0, opacity: 1 });
    } else {
      controls.start({ y: -100, opacity: 0 });
    }
  }, [isVisible, controls]);

  return (
    <motion.nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 ${backgroundColor} rounded-full shadow-lg px-6 py-3 z-50`}
      initial={{ y: -100, opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.3 }}
    >
      <ul className="flex items-center space-x-6">
        <li>
          <Link href="/" className={`${textColor} ${hoverColor} transition-colors`}>
            <Home className="w-6 h-6" /> {/* Adjust Home icon size */}
          </Link>
        </li>
        {navItems.map((item, index) => (
          <li key={index}>
            <Link href={item.href} className={`${textColor} ${hoverColor} transition-colors font-regular`}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default FloatingNavbar;