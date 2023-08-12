import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Béryl HOUESSOU - Android Developer, Backend Developer',
  description: "Hi, I'm Béryl HOUESSOU mobile & backend developer living in Cotonou, Benin",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={
          // inter.className + 
          "bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900"}
      >
          {children}
      </body>
    </html>
  )
}