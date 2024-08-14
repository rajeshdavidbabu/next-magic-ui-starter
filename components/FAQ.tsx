"use client";

// React and Next.js imports
import React, { useState } from "react";

// Third-party library imports
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
  link?: string;
};

const content: FAQItem[] = [
  {
    question: "Co je DigiMedic?",
    answer:
      "DigiMedic je digitální platforma pro české zdravotnictví, která poskytuje inovativní řešení pro efektivnější a kvalitnější zdravotní péči.",
    link: "/o-nas",
  },
  {
    question: "Jaké služby DigiMedic nabízí?",
    answer:
      "DigiMedic nabízí širokou škálu služeb včetně digitalizace zdravotnické dokumentace, telemedicíny, analýzy zdravotnických dat a optimalizace procesů ve zdravotnictví.",
    link: "/sluzby",
  },
  {
    question: "Jak může DigiMedic pomoci zdravotnickým zařízením?",
    answer:
      "DigiMedic pomáhá zdravotnickým zařízením zefektivnit jejich procesy, zlepšit kvalitu péče o pacienty a snížit administrativní zátěž prostřednictvím moderních technologických řešení.",
  },
  {
    question: "Je DigiMedic v souladu s GDPR a ochranou osobních údajů?",
    answer:
      "Ano, DigiMedic klade velký důraz na bezpečnost dat a ochranu osobních údajů. Všechna naše řešení jsou plně v souladu s GDPR a dalšími relevantními předpisy.",
    link: "/ochrana-soukromi",
  },
];

const AccordionItem: React.FC<{ item: FAQItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex w-full justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium">{item.question}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && (
        <div className="mt-2">
          <p className="text-gray-600">{item.answer}</p>
          {item.link && (
            <a
              href={item.link}
              className="mt-2 flex items-center text-primary opacity-60 transition-all hover:opacity-100"
            >
              Zjistit více <ArrowUpRight className="ml-1" size="16" />
            </a>
          )}
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section className="bg-primary-faintest py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Často kladené otázky</h2>
        <h3 className="text-xl text-primary-light mb-8">
          Nemůžete najít odpověď, kterou hledáte? Kontaktujte náš zákaznický support tým.
        </h3>
        <div className="mt-4 flex flex-col gap-4 md:mt-8">
          {content.map((item, index) => (
            <AccordionItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;