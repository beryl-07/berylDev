"use client";

import React, { useRef, useState, useEffect } from "react"
import Image, { StaticImageData } from 'next/image'
import Experience from './_components/Experience'
import Capture1 from './_assets/capture1.jpg'
import Adpme from './_assets/adpme.png'
import ComingSoon from './_assets/comingSoon.gif'
import Certification1 from './_assets/Coursera J2E8P9MHTJ34.jpg'
import Certification2 from './_assets/Coursera S4GNHJN4ANTF.jpg'
import Certification3 from './_assets/Coursera N2J4BBHEB4ZS.jpg'

interface Work {
  name: string;
  url?: string;
  location: string;
  position: string;
  date: string;
  description: string;
  stacks?: string[];
}

interface Certificate {
  name: string;
  url: string;
  image: StaticImageData;
}

interface Project {
  name: string;
  url: string;
  image: StaticImageData;
  // location: string;
  description: string;
  stacks?: string[];
}

export default function Home() {

  const [isIntersectingExperience, setIsIntersectingExperience] = useState(false);
  const [isIntersectingAbout, setIsIntersectingAbout] = useState(true);
  const [isIntersectingProjects, setIsIntersectingProjects] = useState(false);
  const [isIntersectingCertifications, setIsIntersectingCertifications] = useState(false);


  const experience = useRef<HTMLDivElement>(null);
  const about = useRef<HTMLDivElement>(null);
  const projects = useRef<HTMLDivElement>(null);
  const certifications = useRef<HTMLDivElement>(null);

  const experienceMenu = useRef<HTMLLIElement>(null);
  const aboutMenu = useRef<HTMLLIElement>(null);
  const projectsMenu = useRef<HTMLLIElement>(null);
  const certificationsMenu = useRef<HTMLLIElement>(null);


  const [cursorPosition, setCursorPosition] = useState({ top: -255, left: -255 })
  const onMouseMove = (e: React.MouseEvent) => {
    setCursorPosition({ top: e.screenY, left: e.screenX });
  }
  const internships: Work[] = [
    {
      name: "ADPME",
      url: "https://adpme.bj/",
      position: "Back-end Developer",
      location: "Cotonou, Benin",
      date: "November 2023 - Present",
      description:`During my internship, I worked on the development of the ADPME website (Front-Office and Back-Office), mainly on the back-end using Node and Express JS with a code architecture inspired by the default NestJS applications. I've also improved my skills in using the Prisma ORM and DevOps tools like Docker and Docker Compose.`,
      stacks: ["NodeJS", "ExpressJS", "TypeScript", "Prisma", "Docker", "Docker Compose", "PostgreSQL", "PM2"]
    },
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
  const myCertifications: Certificate[] = [
    {
      name: "React Basics",
      url: "https://www.coursera.org/account/accomplishments/verify/N2J4BBHEB4ZS",
      image: Certification3
    },
    {
      name: "Programming Fundamentals in Kotlin",
      url: "https://www.coursera.org/account/accomplishments/verify/S4GNHJN4ANTF",
      image: Certification2
    },
    {
      name: "Introduction to Android Mobile Application Development",
      url: "https://www.coursera.org/account/accomplishments/verify/J2E8P9MHTJ34",
      image: Certification1,
    },
  ];

  const myProjects: Project[] = [
    {
      name: "AskVibe",
      url: "https://github.com/beryl452/AskVibe",
      image: ComingSoon,
      description: "AskVibe is an interactive event management platform designed to enhance event experiences by providing real-time Q&A sessions, voting mechanisms, and robust role-based access control."
    },
    {
      name: "ADPME Website",
      url: "https://adpme.bj/",
      image: Adpme,
      description: "It's a website for the Agency for the Promotion of Entrepreneurship in Benin. It's a platform for the management of the agency's activities and the management of the projects it supports."
    },
    {
      name: "Human Ressource Software",
      url: "https://github.com/beryl452/hrSoftwareSystem",
      image: Capture1,
      description: " It's a web-based project management application for the SENIORDEV company, and also manages payroll calculations based on penalties and bonuses."
    }
  ]
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        switch (entry.target.id) {
          case "experience":
            setIsIntersectingExperience(entry.isIntersecting);
            break;
          case "about":
            setIsIntersectingAbout(entry.isIntersecting);
            break;
          case "projects":
            setIsIntersectingProjects(entry.isIntersecting);
            break;
          case "certifications":
            setIsIntersectingCertifications(entry.isIntersecting);
            break;
        }
      },
      { threshold: 0.75 }
    );

    if (experience.current) {
      observer.observe(experience.current);
    }

    if (about.current) {
      observer.observe(about.current);
    }

    if (projects.current) {
      observer.observe(projects.current);
    }

    if (certifications.current) {
      observer.observe(certifications.current);
    }

    if (experience.current || about.current || projects.current || certifications.current) {
      return () => {
        observer.disconnect();
      };
    }
  }, []);

  useEffect(() => {
    if (aboutMenu.current) {
      if (isIntersectingAbout) {
        aboutMenu.current.querySelectorAll("#aboutMenu").forEach((el) => {
          el.classList.add(`active`);
        });
      } else {
        aboutMenu.current.querySelectorAll("#aboutMenu").forEach((el) => {
          el.classList.remove(`active`);
        });
      }
    }
  }, [isIntersectingAbout]);

  useEffect(() => {
    if (projectsMenu.current) {
      if (isIntersectingProjects) {
        projectsMenu.current.querySelectorAll("#projectsMenu").forEach((el) => {
          el.classList.add(`active`);
        });
      } else {
        projectsMenu.current.querySelectorAll("#projectsMenu").forEach((el) => {
          el.classList.remove(`active`)
        });
      }
    }
  }, [isIntersectingProjects]);

  useEffect(() => {
    if (experienceMenu.current) {
      if (isIntersectingExperience) {
        experienceMenu.current.querySelectorAll("#experienceMenu").forEach((el) => {
          el.classList.add(`active`)
        });
      } else {
        experienceMenu.current.querySelectorAll("#experienceMenu").forEach((el) => {
          el.classList.remove(`active`);
        });
      }
    }
  }, [isIntersectingExperience]);

  useEffect(() => {
    if (certificationsMenu.current) {
      if (isIntersectingCertifications) {
        certificationsMenu.current.querySelectorAll("#certificationsMenu").forEach((el) => {
          el.classList.add(`active`)
        });
      } else {
        certificationsMenu.current.querySelectorAll("#certificationsMenu").forEach((el) => {
          el.classList.remove(`active`);
        });
      }
    }
  }, [isIntersectingCertifications]);

  return (

    <div onMouseMove={onMouseMove} className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900 min-h-screen min-w-screen mx-auto py-12 font-sans md:py-20 lg:px-24 lg:py-0 md:flex md:justify-end md:relative">
      <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute" style={{ background: `radial-gradient(600px at ${cursorPosition.left}px ${cursorPosition.top}px, rgba(29, 78, 216, 0.15), transparent 80%)` }}></div>
      <div className="lg:flex lg:justify-between lg:gap-4"></div>

      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 md:min-h-screen">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            <a href="/">Béryl HOUESSOU</a>
          </h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
            Software developer
          </h2>
          <p className="mt-4 max-w-xs leading-normal">
            My specialties? Listening attentively, clarifying the problem, and solving it.
          </p>
          <nav className="nav hidden lg:block" aria-label="In-page jump links">
            <ul className="mt-16 w-max">
              <li ref={aboutMenu} >
                <a id={"aboutMenu"} className="group flex items-center py-3" href="#about">
                  <span className="aboutChild nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none">
                  </span>
                  <span className="aboutChild nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    About
                  </span>
                </a>
              </li>
              <li ref={experienceMenu}>
                <a id={"experienceMenu"} className="group flex items-center py-3 " href="#experience">
                  <span className="experienceChild nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none">
                  </span>
                  <span className="experienceChild nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    Experience
                  </span>
                </a>
              </li>
              <li ref={projectsMenu}>
                <a id={"projectsMenu"} className="group flex items-center py-3 " href="#projects">
                  <span className="projectsChild nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none">
                  </span>
                  <span className="projectsChild nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    Projects
                  </span>
                </a>
              </li>
              <li ref={certificationsMenu}>
                <a id={"certificationsMenu"} className="group flex items-center py-3 " href="#certifications">
                  <span className="certificationsChild nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none">
                  </span>
                  <span className="certificationsChild nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    Certifications
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
          <li className="mr-5 text-xs">
            <a className="block hover:text-slate-200" href="https://github.com/beryl452" target="_blank" rel="noreferrer">
              <span className="sr-only">GitHub</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                <path
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>                    </a>
          </li>
          <li className="mr-5 text-xs">
            <a className="block hover:text-slate-200" href="https://www.instagram.com/beryl.hoe/" target="_blank" rel="noreferrer">
              <span className="sr-only">Instagram</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" fill="currentColor" className="h-6 w-6" aria-hidden="true"><path d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34"></path></svg>

            </a>
          </li>
          <li className="mr-5 text-xs">
            <a className="block hover:text-slate-200" href="https://twitter.com/Bryl_07" target="_blank" rel="noreferrer">
              <span className="sr-only">Twitter</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 248 204" fill="currentColor" className="h-6 w-6" aria-hidden="true"><path id="white_background" d="M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04   C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66   c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64   c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76   c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26   c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"></path></svg>
            </a>
          </li>
          <li className="mr-5 text-xs">
            <a className="block hover:text-slate-200" href="https://www.linkedin.com/in/berylhouessou/" target="_blank" rel="noreferrer">
              <span className="sr-only">LinkedIn</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path
                  d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
            </a>
          </li>
          <li className="mr-5 text-xs">
            <a className="block hover:text-slate-200" href="https://github.com/beryl-07" target="_blank" rel="noreferrer">
              <span className="sr-only">GitHub</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                <path
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>                    </a>
          </li>
        </ul>
      </header>
      <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
        <section ref={about} id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
          </div>
          <div>
            <p className="mb-4">
              An adaptable, detail-oriented software developer, I&#x27;m deeply interested in building functional, scalable software that improves quality of life. I currently work with <span className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"> Node.js [Adonis.js, Express.js, Nest.js], TypeScript, Python, and PostgreSQL</span>, leveraging these technologies to create robust backend solutions.
            </p>
            <p className="mb-4">
              I&#x27;m currently finishing the <span className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">ALX program in the Backend specialty</span> by developing <span className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">AskVibe</span>, a platform to streamline event management with real-time features. My professional experience also includes proficiency in <span className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">Laravel, React.js, Docker and Github</span>, with a strong focus on efficient and collaborative development.
            </p>
            <p className="mb-4">
            In my spare time, I like to listen to music, watch videos on YouTube and, when I&#x27;m not in front of a screen, I like to play basketball or ride my bike. I am continuously learning and striving to understand in depth the tools and technologies I use, ensuring that I can deliver high-quality, innovative solutions.
            </p>
          </div>
        </section>
        <section ref={experience} id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
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
              <a className="inline-flex items-center leading-tight text-slate-200 font-semibold group" aria-label="View Full Resume" target="_blank" href="./Resume_Béryl_HOUESSOU.pdf">
                <span>
                  <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none"> View Full </span>
                  <span className="whitespace-nowrap">
                    <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none"> Resume </span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" aria-hidden="true"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path></svg>
                  </span>
                </span>
              </a>
            </div>
          </div>
        </section>
        <section ref={projects} id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
          </div>
          <div>
            <ul className="group/list">
              {
                myProjects.map((project: Project, index: any) => (
                  <li className="mb-12" key={index}>
                    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <div className="z-10 sm:order-2 sm:col-span-6">
                        <h3>
                          <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href={project.url} target="_blank" rel="noreferrer" aria-label="Build a HRSoftware System">
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span> {project.name} <span className="inline-block">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
                            </span>
                            </span>
                          </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">{project.description}</p>
                      </div>
                      <Image alt="" loading="lazy" width="200" height="48" decoding="async" data-nimg="1" className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" style={{ color: "transparent" }} src={project.image} />
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>
        </section>
        <section ref={certifications} id="certifications" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Certifications</h2>
          </div>
          <div>
            <ul className="group/list">
              {
                myCertifications.map((certification: Certificate, index: any) => (
                  <li className="mb-12" key={index}>
                    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <div className="z-10 sm:order-2 sm:col-span-6 flex items-center">
                        <h3>
                          <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href={certification.url} target="_blank" rel="noreferrer" aria-label="Build a HRSoftware System">
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>  <span className="inline-block"> {certification.name}
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
                            </span>
                            </span>
                          </a>
                        </h3>
                      </div>
                      <Image alt="" loading="lazy" width="200" height="48" decoding="async" data-nimg="1" className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" style={{ color: "transparent" }} src={certification.image} />
                    </div>
                  </li>
                ))
              }


            </ul>
          </div>
        </section>
        <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0"><p>Loosely coded in <a href="https://www.jetbrains.com/fr-fr/idea/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer">IntelliJ Idea</a> by yours truly. Built with <a href="https://nextjs.org/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer">Next.js</a> and <a href="https://tailwindcss.com/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer">Tailwind CSS</a>, deployed with <a href="https://vercel.com/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer">Vercel</a>. All text is set in the <a href="https://rsms.me/inter/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer">Inter</a> typeface.</p></footer>
      </main>
      {/* </div> */}
    </div>
  )
}
