"use client"
import Image from 'next/image'
import capture1 from './capture1.jpg'
import styles from './page.module.css'
import {useRef, useState, useEffect, useMemo} from "react";
import Link from "next/link";

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
    url:string;
    location:string;
    description:string;
    stacks?: string[];
}

export default function Home() {
    const [isIntersectingExperience, setIsIntersectingExperience] = useState(false);
    const [isIntersectingAbout, setIsIntersectingAbout] = useState(true);
    const [isIntersectingProjects, setIsIntersectingProjects] = useState(false);

    const experience = useRef<HTMLDivElement>(null);
    const about = useRef<HTMLDivElement>(null);
    const projects = useRef<HTMLDivElement>(null);

    const experienceMenu = useRef<HTMLAnchorElement>(null);
    const aboutMenu = useRef<HTMLAnchorElement>(null);
    const projectsMenu = useRef<HTMLAnchorElement>(null);

    const internships: Work[] = [
        {
            name: "SENIORDEV",
            url: "https://seniordev-group.com/",
            position: "Web Developer",
            location: "Cotonou, Benin",
            date: "Mars 2023 - Juin 2023",
            description:
                "During this placement, we worked on creating a project management web application using ReactTS on the front-end and Laravel Sanctum on the backend. I also improved my analysis method using UML.",
            stacks: ["ReactJS", "Laravel Sanctum", "TypeScript", "JWT", "REST API", "PostgreSQL", "UML"],
        },
        {
            name: "SENIORDEV",
            url: "https://seniordev-group.com/",
            position: "Web Developer",
            location: "Cotonou, Benin",
            date: "Juil. 2022 - Sept. 2022",
            description:
                "During my placement, I developed my back-end development skills with Laravel and improved my front-end development skills with VueJS 2 by creating a web application for managing practical work.",
            stacks: ["VueJS", "Laravel", "JavaScript", "PHP", "MERISE", "MySQL"],
        },
    ];

    const theProjects: Project[] = [
        {
            name: "HRSoftwareSystem",
            url: "https://github.com/beryl452/hrSoftwareSystem",
            location: "/capture1.jpg",
            description: "It's a web-based project management application for the SENIORDEV company, and also manages payroll calculations based on penalties and bonuses.",
            stacks: ["ReactJS", "Laravel Sanctum", "TypeScript", "JWT", "REST API", "PostgreSQL", "UML"],
        }
    ];

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
                }
            },
            {threshold: 0.75}
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

        if (experience.current || about.current || projects.current) {
            return () => {
                observer.disconnect();
            };
        }
    }, []);

    useEffect(() => {
        if (aboutMenu.current) {
            if (isIntersectingAbout) {
                aboutMenu.current.querySelectorAll("#aboutMenu").forEach((el) => {
                    el.classList.add(`${styles.highlight}`);
                });

            } else {
                aboutMenu.current.querySelectorAll("#aboutMenu").forEach((el) => {
                    el.classList.remove(`${styles.highlight}`);
                });
            }
        }
    }, [isIntersectingAbout]);

    useEffect(() => {
        if (projectsMenu.current) {
            if (isIntersectingProjects) {
                projectsMenu.current.querySelectorAll("#projectsMenu").forEach((el) => {
                    el.classList.add(`${styles.highlight}`);
                });

            } else {
                projectsMenu.current.querySelectorAll("#projectsMenu").forEach((el) => {
                    el.classList.remove(`${styles.highlight}`);
                });
            }
        }
    }, [isIntersectingProjects]);

    useEffect(() => {
        if (experienceMenu.current) {
            if (isIntersectingExperience) {
                experienceMenu.current.querySelectorAll("#experienceMenu").forEach((el) => {
                    el.classList.add(`${styles.highlight}`);
                });
            } else {
                experienceMenu.current.querySelectorAll("#experienceMenu").forEach((el) => {
                    el.classList.remove(`${styles.highlight}`);
                });
            }
        }
    }, [isIntersectingExperience]);
    return (
        <main className={styles.main}>
            <div className={styles.wrapper}>
                <div>
                    <div className={styles.sticky}>
                        <div className={styles.me}>
                            <div>
                                <h1>Béryl HOUESSOU</h1>
                                <ul>
                                    <li> • Backend Developer &</li>
                                    <li> • Apprentice android developer</li>
                                </ul>
                            </div>
                            <div className={styles.menu}>
                                <div><a ref={aboutMenu} href={"#about"}>
                                    <span id={"aboutMenu"} className={`${styles.menuLine}`}></span>
                                    <span>ABOUT</span></a>
                                </div>

                                <div><a ref={experienceMenu} href={"#experience"}>
                                    <span id={"experienceMenu"} className={`${styles.menuLine}`}></span>
                                    <span>EXPERIENCE</span></a>
                                </div>
                                <div><a ref={projectsMenu} href={"#projects"}>
                                    <span id={"projectsMenu"} className={styles.menuLine}></span>
                                    <span>PROJECTS</span></a>
                                </div>
                            </div>
                            <div className={styles.social}>
                                <div>
                                    <a href="https://twitter.com/Bryl_07">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            role="img"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="0.15svw"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-twitter">
                                            <title>Twitter</title>
                                            <path
                                                d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                        </svg>
                                    </a>

                                    <a href="https://github.com/beryl452">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            role="img"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="0.15svw"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-github">
                                            <title>GitHub</title>
                                            <path
                                                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                        </svg>
                                    </a>

                                    <a href="https://www.linkedin.com/in/b%C3%A9ryl-houessou-03a016206/">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            role="img"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="0.15svw"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-linkedin">
                                            <title>LinkedIn</title>
                                            <path
                                                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                            <rect x="2" y="9" width="4" height="12"></rect>
                                            <circle cx="4" cy="4" r="2"></circle>
                                        </svg>
                                    </a>
                                    <a href={"https://github.com/beryl-07"}>
                                        <svg
                                            onClick={() => {
                                                location.href = "\"https://github.com/beryl-07\""
                                            }}
                                            xmlns="http://www.w3.org/2000/svg"
                                            role="img"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="0.15svw"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-github">
                                            <title>GitHub</title>
                                            <path
                                                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.side1}>
                    <div ref={about} id="about" className={`${styles.theComposant} ${styles.theComposant1}`}>
                        <h1>ABOUT</h1>
                        <p>I'm Béryl HOUESSOU, a mobile and backend developer (Laravel and NodeJS) currently finishing
                            my degree in Computer and Software Systems (SIL). I'm passionate about web app development
                            and with my growing interest in Android app development, I've decided to start <a className={styles.importante} href={"https://beryl.hashnode.dev/"}> a blog</a> to
                            document my learning journey.</p>
                        <p>These days, I'm concentrating mainly on my <a className={styles.importante}
                                                                         href={"https://www.coursera.org/professional-certificates/meta-android-developer"}> "Meta
                            Android Developer Professional Certificate". </a>
                            So I can create or help to create the excellent Android product. And to diversify a bit, I'm
                            learning Rust with <a className={styles.importante}
                                                  href={"https://www.amazon.com/Rust-Web-Programming-hands-applications/dp/1803234695"}
                            >"Rust Web Programming A hands-on guide to developing, packaging, and
                                deploying fully functional Rust web applications" by Maxwell Flitton </a> and I love
                            low-level
                            code.</p>
                        <p>In my spare time, I like to listen to music, watch videos on YouTube and, when I'm not in
                            front of a screen, I like to play basketball or ride my bike. </p>
                    </div>

                    <div ref={experience} id={"experience"}
                         className={`${styles.theComposant} ${styles.theComposant1}`}>
                        <h1>EXPERIENCE</h1>
                        <div className={styles.theComposant3}>
                            {internships.map((internship, index) => (
                                <div key={index} className={styles.theComposant4}>
                                    <div className={styles.date}>
                                        <h3>{internship.date}</h3>
                                    </div>
                                    <div className={styles.experienceDetails}>
                                        <div>
                                            <h3><a  href={internship.url}>{internship.position} • {internship.name}
                                                <span
                                                    className={styles.internship_url}
                                                >
                                                    <svg
                                                        width={15}
                                                        height={15}
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={2}
                                                        stroke="currentColor"
                                                        // className="bg-slate-300"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                                                        />
                                                    </svg>
                                                </span>
                                            </a>
                                            </h3>
                                            <p>{internship.description}</p>
                                        </div>
                                        {internship.stacks && (
                                            <div className={styles.stackContainer}>
                                                {internship.stacks.map((item) => <div
                                                    className={styles.stack}>{item}</div>)}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Link href={"https://1drv.ms/w/s!An6Of0ilaja5gZ4t4I3mTZQnrbhWRw?e=czP52h"}
                              className={`${styles.theComposant} ${styles.resume}`}>
                            <span>View Full Resume</span>
                            <svg
                                fill="#fff"
                                viewBox="0 0 15 15"
                                xmlns="http://www.w3.org/2000/svg"
                                id={styles.arrow}
                            >
                                <path
                                    d="M8.29289 2.29289C8.68342 1.90237 9.31658 1.90237 9.70711 2.29289L14.2071 6.79289C14.5976 7.18342 14.5976 7.81658 14.2071 8.20711L9.70711 12.7071C9.31658 13.0976 8.68342 13.0976 8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L11 8.5H1.5C0.947715 8.5 0.5 8.05228 0.5 7.5C0.5 6.94772 0.947715 6.5 1.5 6.5H11L8.29289 3.70711C7.90237 3.31658 7.90237 2.68342 8.29289 2.29289Z"/>
                            </svg>
                        </Link>
                    </div>
                    <div ref={projects} id={"projects"}
                         className={`${styles.theComposant} ${styles.theComposant1}`}>
                        <h1>PROJECTS</h1>
                        <div className={styles.theComposant3}>
                            {theProjects.map((project, index) => (
                                <div key={index} className={styles.theComposant4}>
                                    <div className={styles.date}>
                                        <Image src={capture1}
                                               width={150}
                                               height={100}
                                               alt={project.name}/>
                                    </div>
                                    <div className={styles.experienceDetails}>
                                        <div>
                                            <h3><a  href={project.url}>{project.name}
                                                <span
                                                    className={styles.internship_url}
                                                >
                                                    <svg
                                                        width={15}
                                                        height={15}
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={2}
                                                        stroke="currentColor"
                                                        // className="bg-slate-300"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                                                        />
                                                    </svg>
                                                </span>
                                            </a>
                                            </h3>
                                            <p>{project.description}</p>
                                        </div>
                                        {project.stacks && (
                                            <div className={styles.stackContainer}>
                                                {project.stacks.map((item) => <div
                                                    className={styles.stack}>{item}</div>)}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
