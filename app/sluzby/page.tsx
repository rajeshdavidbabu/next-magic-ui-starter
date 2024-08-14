"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Icons, IconName } from '../../components/Icons';
import { GoogleGeminiEffect } from '../../components/ui/google-gemini-effect';

interface Service {
  title: string;
  description: string;
  icon: IconName;
}

const services: Service[] = [
  {
    title: 'Vývoj softwaru na míru',
    description: 'Vytváříme specializovaný software pro zdravotnická zařízení, který odpovídá jejich specifickým potřebám a požadavkům.',
    icon: 'MonitorSmartphone',
  },
  {
    title: 'Implementace technologických řešení',
    description: 'Pomáháme zdravotnickým zařízením implementovat nejnovější technologie pro zefektivnění jejich procesů a zlepšení péče o pacienty.',
    icon: 'Rocket',
  },
  {
    title: 'Kontrola vyúčtování',
    description: 'Nabízíme služby kontroly a optimalizace vyúčtování zdravotní péče pro maximalizaci příjmů a minimalizaci chyb.',
    icon: 'BarChart3',
  },
  {
    title: 'Virtuální asistence',
    description: 'Poskytujeme virtuální asistenční služby pro efektivní správu administrativních úkolů ve zdravotnictví.',
    icon: 'Bot',
  },
  {
    title: 'Asistence při elektronizaci',
    description: 'Podporujeme zdravotnická zařízení při přechodu na elektronické systémy a digitalizaci procesů.',
    icon: 'Smartphone',
  },
  {
    title: 'Optimalizace zdravotnických procesů',
    description: 'Analyzujeme a optimalizujeme procesy ve zdravotnických zařízeních pro zvýšení efektivity a kvality péče.',
    icon: 'HospitalIcon',
  },
];

const ServicesPage = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const pathLengths = Array.from({ length: 5 }).map((_, i) =>
    useTransform(scrollYProgress, [0, 1], [0.1, 1])
  );

  return (
    <div className="min-h-screen">
      <section ref={heroRef} className="h-screen relative overflow-hidden">
        <GoogleGeminiEffect
          pathLengths={pathLengths}
          title="Naše služby"
          description="Komplexní řešení pro digitalizaci a optimalizaci zdravotnictví"
        />
      </section>
      <section className="bg-white">
        <div className="container mx-auto py-20">
          <h2 className="text-4xl font-spaceBold text-primary mb-12 text-center">Přehled našich služeb</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = Icons[service.icon];
              return (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  <div className="text-4xl mb-4 text-primary">
                    <Icon size={48} />
                  </div>
                  <h3 className="text-2xl font-spaceBold text-primary mb-4">{service.title}</h3>
                  <p className="font-raleway text-primary-light mb-4">{service.description}</p>
                  <Link href={`/sluzby/${service.title.toLowerCase().replace(/ /g, '-')}`} className="text-primary font-spaceBold hover:text-primary-light transition-colors duration-300">
                    Zjistit více →
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-primary-faintest py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-spaceBold text-primary mb-12 text-center">Proč zvolit naše služby</h2>
          <p className="text-center text-primary-light mb-8">
            Nabízíme komplexní řešení šitá na míru potřebám vašeho zdravotnického zařízení. Naše služby jsou založeny na nejnovějších technologiích a osvědčených postupech v oblasti digitalizace zdravotnictví.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;