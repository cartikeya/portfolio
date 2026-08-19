import React from "react";
import ContactForm from "./components/Contact";

function App() {
  const projects = [
    {
      title: "Service Provider Onboarding Portal",
      description:
        "A full-stack management dashboard for a Service provider with JWT authentication, protected routes, and real-time status updates.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind"],
      videoPlaceholder: "30s DaVinci Resolve Demo",
      link: "https://service-provider-onboarding-portal-one.vercel.app/",
    },
    {
      title: "IPL Mock Auction",
      description:
        "A multiplayer draft simulation featuring dynamic room code generation, real-time budget deductions, and complex state management.",
      tech: ["MERN Stack", "REST APIs", "React"],
      videoPlaceholder: "Room Code & Draft Demo",
      link: "https://project-c-inky.vercel.app/",
    },
    {
      title: "Dataweave: AI Data scraping tool",
      description:
        "A responsive, high-performance frontend interface designed for streamlined patient data access and medical record management.",
      tech: ["React", "Vite", "UI/UX Design"],
      videoPlaceholder: "UI Walkthrough Demo",
      link: "https://youtu.be/Bw6k3jHNo08",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fbfbfd] text-[#1d1d1f] font-sans selection:bg-blue-200">
      {/* ULTRA-CLEAN NAVBAR */}

      <nav className="fixed w-full top-0 bg-[#fbfbfd]/80 backdrop-blur-md z-50 border-b border-gray-200/50">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between text-xs font-semibold tracking-wide text-gray-500">
          <a
            href="#"
            className="hover:text-gray-900 transition-colors text-gray-900 font-bold text-sm"
          >
            Cartikeya
          </a>
          <div className="flex items-center space-x-6 md:space-x-8">
            <a
              href="#work"
              className="hidden sm:block hover:text-gray-900 transition-colors"
            >
              Work
            </a>
            <a
              href="#about"
              className="hidden sm:block hover:text-gray-900 transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="hidden sm:block hover:text-gray-900 transition-colors"
            >
              Contact
            </a>
            {/* The Resume Button */}
            <a
              href="https://drive.google.com/file/d/13Sh9SWzkljz8fgB2eKdmdWi9M7aXpBv_/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="bg-[#1d1d1f] text-white px-4 py-1.5 rounded-full hover:bg-black transition-all shadow-sm hover:shadow-md"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>

      {/* APPLE-STYLE HERO SECTION */}
      <main className="pt-40 pb-20 px-6 max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Subtle Eyebrow Text */}
        <p className="text-sm md:text-base font-semibold text-blue-600 tracking-widest uppercase mb-4">
          Full-Stack Developer
        </p>

        {/* Massive, tightly-tracked headline */}
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-[#1d1d1f] mb-6 leading-tight">
          I build full-stack <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500">
            digital experiences.
          </span>
        </h1>

        {/* Soft, readable subtext */}
        <p className="text-xl md:text-2xl text-[#86868b] font-medium max-w-2xl mx-auto mb-12 leading-relaxed tracking-tight">
          Specializing in React architecture, secure MERN backends, and
          cinematic user interfaces.
        </p>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="#work"
            className="bg-[#1d1d1f] text-white px-8 py-4 rounded-full font-semibold hover:bg-black transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            View My Projects
          </a>
          <a
            href="#contact"
            className="bg-white text-[#1d1d1f] border border-gray-300 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all"
          >
            Get In Touch
          </a>
        </div>
      </main>
      {/* WORK / PROJECTS SECTION */}
      <section id="work" className="py-32 px-6 max-w-6xl mx-auto">
        <div className="mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#1d1d1f] mb-4">
            Featured Projects.
          </h2>
          <p className="text-xl text-[#86868b] font-medium">
            Built from scratch. Deployed to the web.
          </p>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <div className="group bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-2 flex flex-col h-full cursor-pointer">
                {/* Video Placeholder */}
                <div className="w-full h-48 bg-gray-50 rounded-2xl mb-6 flex items-center justify-center overflow-hidden relative border border-gray-100">
                  <span className="text-gray-400 font-semibold text-sm tracking-wide">
                    [{project.videoPlaceholder}]
                  </span>

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Text Content */}
                <h3 className="text-2xl font-bold text-[#1d1d1f] mb-2 tracking-tight">
                  {project.title}
                </h3>

                <p className="text-[#86868b] text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#fbfbfd] text-[#1d1d1f] text-xs font-bold rounded-full border border-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
      {/* ABOUT / BENTO BOX SECTION */}
      <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#1d1d1f]">
            Behind the code.
          </h2>
        </div>

        {/* The 3-Card Minimalist Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 1. Profile Photo Card */}
          <div className="bg-gray-100 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden relative group aspect-square md:aspect-auto flex items-center justify-center">
            {/* Grab a cool photo of yourself, name it pfp.jpg, and drop it in your public folder */}
            <img
              src="/pfp.jpg"
              alt="Cartikeya"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Inner shadow for that glass/bezel look */}
            <div className="absolute inset-0 border-[4px] border-black/5 rounded-[2rem] pointer-events-none"></div>
          </div>

          {/* 2. Main Bio Card */}
          <div className="md:col-span-2 bg-white p-10 md:p-12 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col justify-center hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
              <h3 className="text-2xl font-bold text-[#1d1d1f] tracking-tight">
                The Engineer
              </h3>
              {/* Premium, subtle location pill */}
              <span className="inline-flex items-center px-4 py-1.5 bg-gray-50 text-gray-500 text-xs font-bold rounded-full border border-gray-200 tracking-wider uppercase shadow-sm w-max">
                📍 INDIA
              </span>
            </div>

            <p className="text-[#86868b] text-lg leading-relaxed font-medium">
              I am a 3rd-year B.Tech student building scalable software. When I
              am not writing React architecture or configuring MERN stack
              backends, I am actively planning my next adventure to travel the
              world full-time.
            </p>
          </div>

          {/* 3. The Tech Stack Strip (Dark Mode Card) */}
          <div className="md:col-span-3 bg-[#1d1d1f] p-10 md:p-12 rounded-[2rem] shadow-2xl flex flex-col items-center justify-center text-center mt-2">
            <p className="text-gray-400 font-bold mb-8 uppercase tracking-[0.2em] text-xs">
              Core Technologies
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-5">
              {[
                "ReactJS",
                "Node.js",
                "MongoDB",
                "JavaScript",
                "HTML/CSS",
                "Tailwind",
                "Git",
              ].map((skill, i) => (
                <span
                  key={i}
                  className="px-6 py-3 bg-white/10 text-white backdrop-blur-md rounded-full font-semibold border border-white/10 hover:bg-white/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* CONTACT & FOOTER SECTION */}
      <section
        id="contact"
        className="py-32 px-6 max-w-4xl mx-auto border-t border-gray-100 mt-20"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[#1d1d1f] mb-6">
            Let's build something.
          </h2>
          <p className="text-xl text-[#86868b] font-medium max-w-2xl mx-auto leading-relaxed">
            Whether you need a custom full-stack application for your business
            or a sleek frontend interface, I'm currently taking on freelance
            projects.
          </p>
        </div>

        {/* Minimalist Contact Form */}
        <ContactForm />

        {/* Minimalist Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm font-semibold text-gray-400 tracking-wide pt-8 border-t border-gray-100">
          <p>
            &copy; {new Date().getFullYear()} Cartikeya. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            {/* Add your actual social links here */}
            <a
              href="https://www.linkedin.com/in/cartikeyalavu/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-900 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/cartikeya"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-900 transition-colors"
            >
              GitHub
            </a>

            <a
              href="https://x.com/cartikeya"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-900 transition-colors"
            >
              X
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
