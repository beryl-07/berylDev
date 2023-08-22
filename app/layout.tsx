import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Béryl HOUESSOU',
  description: "Hi, I'm Béryl HOUESSOU mobile & backend developer living in Cotonou, Benin",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <Head>
        <meta
          name="description"
          content="
            
Béryl HOUESSOU
Software developer
I'm mobile (Android, Kotlin) and web (Laravel, NodeJS, ReactJS, VueJS) developer
          "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="JZ3l0D5SEGqbS5q4iEb0hI8gw6A4DH8ZsRbrlg4NrJ8" />
      </Head>
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