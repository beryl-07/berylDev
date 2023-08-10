export default function About() {
    return (
        <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
          </div>
          <div>
            <p className="mb-4">
              I&#x27;m Béryl HOUESSOU, a mobile and backend developer (Laravel and NodeJS) currently finishing my degree in Computer and Software Systems (SIL). I&#x27;m passionate about web app development and with my growing interest in Android app development, I&#x27;ve decided to start
              <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" href="https://beryl.hashnode.dev/" target="_blank" rel="noreferrer"> a blog </a>
              to document my learning journey.
              advertising agency
            </p>
            <p className="mb-4">
              These days, I&#x27;m concentrating mainly on my
              <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" href="https://www.coursera.org/professional-certificates/meta-android-developer" target="_blank" rel="noreferrer"> &#x22;Meta Android Developer Professional Certificate&#x22;. </a>
              So I can create or help to create the excellent Android product. And to diversify a bit, I&#x27;m learning Rust with
              <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" href="https://www.amazon.com/Rust-Web-Programming-hands-applications/dp/1803234695" target="_blank" rel="noreferrer"> &#x22;Rust Web Programming A hands-on guide to developing, packaging, and deploying fully functional Rust web applications&#x22; by Maxwell Flitton </a>
              and I love low-level code.
            </p>
            <p className="mb-4">
              In my spare time, I like to listen to music, watch videos on YouTube and, when I'm not in front of a screen, I like to play basketball or ride my bike.
            </p>
          </div>
        </section>
    )
}