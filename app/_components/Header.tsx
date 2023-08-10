import Image from "next/image"

export default function Header() {
    return (
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                    <a href="/">Brittany Chiang</a>
                </h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                    Lead Engineer at Upstatement
                </h2>
                <p className="mt-4 max-w-xs leading-normal">
                    I build accessible, inclusive products and digital experiences for the web.
                </p>
                <nav className="nav hidden lg:block" aria-label="In-page jump links">
                    <ul className="mt-16 w-max">
                        <li>
                            <a className="group flex items-center py-3 active" href="#about">
                                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none">
                                </span>
                                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                                    About
                                </span>
                            </a>
                        </li>
                        <li>
                            <a className="group flex items-center py-3 " href="#experience">
                                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none">
                                </span>
                                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                                    Experience
                                </span>
                            </a>
                        </li>
                        <li>
                            <a className="group flex items-center py-3 " href="#projects">
                                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none">
                                </span>
                                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                                    Projects
                                </span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
                <li className="mr-5 text-xs">
                    <a className="block hover:text-slate-200" href="https://github.com/bchiang7" target="_blank" rel="noreferrer">
                        <span className="sr-only">GitHub</span>
                        <Image 
                        src={"../_assets/github.svg"} 
                        alt={"GitHub"} 
                        className="h-6 w-6" 
                        width={1.5rem}
                        height={1.5rem}

                        />
                    </a>
                </li>
                <li className="mr-5 text-xs">
                    <a className="block hover:text-slate-200" href="https://instagram.com/bchiang7" target="_blank" rel="noreferrer">
                        <span className="sr-only">Instagram</span>
                        <Image src={"../_assets/instagram.svg"} alt={"Instagram"} className="h-6 w-6" />
                    </a>
                </li>
                <li className="mr-5 text-xs">
                    <a className="block hover:text-slate-200" href="https://twitter.com/bchiang7" target="_blank" rel="noreferrer">
                        <span className="sr-only">Twitter</span>
                        <Image src={"../_assets/twitter.svg"} alt={"Twitter"} className="h-6 w-6" />
                    </a>
                </li>
                <li className="mr-5 text-xs">
                    <a className="block hover:text-slate-200" href="https://www.linkedin.com/in/bchiang7/" target="_blank" rel="noreferrer">
                        <span className="sr-only">LinkedIn</span>
                        <Image src={"../_assets/linkedin.svg"} alt={"LinkedIn"} className="h-6 w-6" />
                    </a>
                </li>
            </ul>
        </header>
    )
}