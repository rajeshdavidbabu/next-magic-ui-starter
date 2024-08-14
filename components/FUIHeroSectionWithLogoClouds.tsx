"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import AnimatedShinyText from "./magicui/animated-shiny-text";

export default function FUIHeroSectionWithLogoClouds() {
  const stakeholderLogos = [
    "/stakeholders logos/ehdsi_logo_en_0.png",
    "/stakeholders logos/ihe-czech.png",
    "/stakeholders logos/logo-uzis.svg",
    "/stakeholders logos/Ministerstvo zdravotnictví_idStvjuw2U_2.svg",
  ];

  return (
    <div className="w-full flex flex-col bg-primary-faintest">
      <section className="py-28">
        <div className="max-w-screen-xl mx-auto text-primary gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
          <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
            <AnimatedShinyText className="text-sm text-primary-light group font-geist px-5 py-2 bg-gradient-to-tr from-primary/5 via-primary-light/5 to-transparent border-[2px] border-primary/5 rounded-3xl inline-block">
              Digitální páteř českého zdravotnictví
              <ChevronRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
            </AnimatedShinyText>
            <h2 className="text-4xl md:text-5xl font-geist font-normal tracking-tighter lg:text-5xl text-primary">
              Pomáháme zdravotnickým zařízením růst a poskytovat lepší péči
            </h2>
            <p className="font-geist text-primary-dark">
              Naše inovativní řešení digitalizace a optimalizace procesů ve zdravotnictví přináší efektivitu, přesnost a lepší péči o pacienty.
            </p>
            <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              <button className="inline-flex h-12 items-center justify-center font-geist rounded-md border border-primary bg-primary text-white px-6 font-medium transition-colors hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                Zjistit více 
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 ml-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
            <Image
              src="/Brand materials/digitalni pater.png"
              alt="DigiMedic Hero Image"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="mt-14 px-4 md:px-8">
          <p className="text-center font-displayAlt text-sm text-primary-dark font-semibold mb-4">
            Důvěřují nám přední zdravotnické instituce
          </p>
          <div className="flex justify-center items-center flex-wrap gap-x-12 gap-y-6 mt-6">
            {stakeholderLogos.map((logo, index) => (
              <Image
                key={index}
                src={logo}
                alt={`Stakeholder logo ${index + 1}`}
                width={100}
                height={50}
                className="opacity-80 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}