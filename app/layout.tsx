import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import FloatingNavbar from '@/components/FloatingNavbar'
import BackgroundGrid from '@/components/BackgroundGrid'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DigiMedic - Digitální páteř českého zdravotnictví',
  description: 'DigiMedic poskytuje moderní technologická řešení pro zdravotnictví, zaměřuje se na efektivní využití technologií pro zlepšení kvality a dostupnosti péče.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <BackgroundGrid />
          <Header />
          <FloatingNavbar />
          <main className="min-h-screen relative">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
