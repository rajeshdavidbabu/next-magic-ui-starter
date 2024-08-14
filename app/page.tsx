import FUIHeroSectionWithLogoClouds from '@/components/FUIHeroSectionWithLogoClouds'
import FAQ from '@/components/FAQ'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="min-h-screen">
      <FUIHeroSectionWithLogoClouds />
      <main className="container mx-auto px-4 py-16">
        <section className="mb-16 bg-white bg-opacity-80 backdrop-blur-sm rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-primary mb-4">Naše služby</h2>
          <ul className="list-disc list-inside text-primary-light">
            <li>Poskytování moderních technologických řešení pro zdravotnictví</li>
            <li>Efektivní využití technologií pro zlepšení kvality a dostupnosti péče</li>
            <li>Digitalizace a automatizace procesů ve zdravotnictví</li>
          </ul>
        </section>

        <section className="mb-16 bg-white bg-opacity-80 backdrop-blur-sm rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-primary mb-4">Naše vize</h2>
          <p className="text-primary-light mb-4">
            Naše projekty a iniciativy mají jediný cíl: <strong>zlepšit zdravotní péči v České republice</strong>.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <Image
              src="/Brand materials/INTEREPROABILNI SIT.png"
              alt="Interoperabilní síť"
              width={400}
              height={300}
              className="rounded-lg shadow-md"
            />
            <Image
              src="/Brand materials/digitalni pater.svg"
              alt="Digitální páteř"
              width={400}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
        </section>

        <section className="bg-white bg-opacity-80 backdrop-blur-sm rounded-lg shadow-md p-8">
          <FAQ />
        </section>
      </main>
    </div>
  )
}
