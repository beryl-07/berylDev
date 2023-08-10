"use client";  

import Image from 'next/image'
import Header from './_components/Header'
import About from './_components/About'
import Experience from './_components/Experience'
import { useState } from 'react';
interface Work {
  name: string;
  url?: string;
  location: string;
  position: string;
  date: string;
  description: string;
  stacks?: string[];
}

interface Project {
  name: string;
  url: string;
  location: string;
  description: string;
  stacks?: string[];
}

export default function Home() {
  const [cursorPosition, setCursorPosition] = useState({ top: 0, left: 0 })
  const onMouseMove = (e: React.MouseEvent) => {
      setCursorPosition({ top: e.screenY, left: e.screenX });
  }
  const internships: Work[] = [
    {
      name: "SENIORDEV",
      url: "https://seniordev-group.com/",
      position: "Web Developer",
      location: "Cotonou, Benin",
      date: "March 2023 - June 2023",
      description:
        "During this placement, we worked on creating a project management web application using ReactTS on the front-end and Laravel Sanctum on the backend. I also improved my analysis method using UML.",
      stacks: ["ReactJS", "Laravel Sanctum", "TypeScript", "JWT", "REST API", "PostgreSQL", "UML"],
    },
    {
      name: "SENIORDEV",
      url: "https://seniordev-group.com/",
      position: "Web Developer",
      location: "Cotonou, Benin",
      date: "July 2022 - September 2022",
      description:
        "During my placement, I developed my back-end development skills with Laravel and improved my front-end development skills with VueJS 2 by creating a web application for managing practical work.",
      stacks: ["VueJS", "Laravel", "JavaScript", "PHP", "MERISE", "MySQL"],
    },
  ];

  return (
    <div onMouseMove={onMouseMove} className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900 mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 md:flex md:justify-end">
      <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute" style={{background: `radial-gradient(600px at ${cursorPosition.left}px ${cursorPosition.top}px, rgba(29, 78, 216, 0.15), transparent 80%)`}}></div>
      <div className="lg:flex lg:justify-between lg:gap-4"></div>
      {/* <div className="md:flex md:justify-end"> */}
        <Header />
        <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
          <About />
          <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
            </div>
            <div>
              <ol className="group/list">
                {internships.map((work: Work, index: any) => (
                  <Experience work={work} key={index} />
                ))}
              </ol>
              <div className="mt-12">
                <a className="inline-flex items-center leading-tight text-slate-200 font-semibold group" aria-label="View Full Résumé" href="/resume.pdf">
                  <span>
                    <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none"> View Full </span>
                    <span className="whitespace-nowrap">
                      <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none"> Résumé </span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" aria-hidden="true"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path></svg>
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </section>
          <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
            </div>
            <div>
              <ul className="group/list">
                <li className="mb-12">
                  <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <div className="z-10 sm:order-2 sm:col-span-6">
                      <h3>
                        <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href="https://github.com/beryl452/hrSoftwareSystem" target="_blank" rel="noreferrer" aria-label="Build a Spotify Connected App">
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          <span>Build a Human Ressource Software <span className="inline-block"> App Web
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
                          </span>
                          </span>
                        </a>
                      </h3>
                      <p className="mt-2 text-sm leading-normal">It&#x27;s a web-based project management application for the SENIORDEV company, and also manages payroll calculations based on penalties and bonuses.</p>
                    </div>
                    <img alt="" loading="lazy" width="200" height="48" decoding="async" data-nimg="1" className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" style={{ color: "transparent" }} src="./capture1.jpg" />
                  </div>
                </li>
              </ul>
            </div>
          </section>
          <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0"><p>Loosely coded in <a href="https://www.jetbrains.com/fr-fr/idea/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer">IntelliJ Idea</a> by yours truly. Built with <a href="https://nextjs.org/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer">Next.js</a> and <a href="https://tailwindcss.com/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer">Tailwind CSS</a>, deployed with <a href="https://vercel.com/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer">Vercel</a>. All text is set in the <a href="https://rsms.me/inter/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer">Inter</a> typeface.</p></footer>
        </main>
      {/* </div> */}
    </div>
  )
}
