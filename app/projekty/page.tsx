"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    title: 'Elektronizace nemocnice sv. Anny',
    description: 'Kompletní digitalizace procesů a implementace elektronické zdravotní dokumentace.',
    image: '/placeholder-project1.jpg',
  },
  {
    title: 'Optimalizace vyúčtování pro síť poliklinik',
    description: 'Zavedení automatizovaného systému pro kontrolu a optimalizaci vyúčtování zdravotní péče.',
    image: '/placeholder-project2.jpg',
  },
  {
    title: 'Telemedicínská platforma pro praktické lékaře',
    description: 'Vývoj a implementace platformy pro vzdálené konzultace a sledování pacientů.',
    image: '/placeholder-project3.jpg',
  },
  {
    title: 'Interoperabilní systém pro sdílení zdravotních dat',
    description: 'Vytvoření bezpečného systému pro sdílení zdravotních dat mezi různými poskytovateli péče.',
    image: '/placeholder-project4.jpg',
  },
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-primary-bg py-20">
      <div className="container mx-auto">
        <motion.h1 
          className="text-4xl font-spaceBold text-primary mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Naše projekty
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-spaceBold text-primary mb-4">{project.title}</h2>
                <p className="font-raleway text-primary-light mb-4">{project.description}</p>
                <Link href={`/projekty/${project.title.toLowerCase().replace(/ /g, '-')}`} className="text-primary font-spaceBold hover:text-primary-light transition-colors duration-300">
                  Více informací →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;