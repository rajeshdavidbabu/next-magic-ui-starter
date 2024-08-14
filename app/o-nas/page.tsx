"use client";

import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-primary-bg py-20">
      <div className="container mx-auto">
        <motion.h1 
          className="text-4xl font-spaceBold text-primary mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          O DigiMedic
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-spaceBold text-primary mb-4">Naše mise</h2>
            <p className="font-raleway text-primary-light mb-6">
              DigiMedic se zavazuje k modernizaci českého zdravotnictví prostřednictvím inovativních technologických řešení. Naším cílem je zlepšit kvalitu a dostupnost zdravotní péče pro všechny občany České republiky.
            </p>
            <h2 className="text-2xl font-spaceBold text-primary mb-4">Naše hodnoty</h2>
            <ul className="list-disc list-inside font-raleway text-primary-light mb-6">
              <li>Inovace v zdravotnictví</li>
              <li>Spolehlivost a bezpečnost</li>
              <li>Orientace na pacienta</li>
              <li>Efektivita a optimalizace procesů</li>
              <li>Neustálé vzdělávání a rozvoj</li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-spaceBold text-primary mb-4">Náš příběh</h2>
            <p className="font-raleway text-primary-light mb-6">
              DigiMedic byl založen v roce 2020 skupinou odborníků z oblasti zdravotnictví a informačních technologií. Spojili jsme své síly s cílem přinést do českého zdravotnictví nejmodernější technologická řešení a pomoci tak zlepšit kvalitu péče o pacienty.
            </p>
            <p className="font-raleway text-primary-light mb-6">
              Od našeho založení jsme úspěšně realizovali řadu projektů pro nemocnice, polikliniky a další zdravotnická zařízení po celé České republice. Naše řešení pomáhají lékařům a zdravotnickému personálu efektivněji pracovat, minimalizovat chyby a poskytovat pacientům lepší péči.
            </p>
            <p className="font-raleway text-primary-light">
              Jsme odhodláni pokračovat v naší misi a přinášet inovace do českého zdravotnictví. S každým projektem se učíme a rosteme, abychom mohli nabízet stále lepší a efektivnější řešení pro digitalizaci a modernizaci zdravotní péče.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;