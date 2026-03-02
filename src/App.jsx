import React from "react";

function App() {
  const projects = [
    {
      title: "Computer Shop site CRM",
      description:
        "A full-stack management dashboard for a local device repair shop with JWT authentication, protected routes, and real-time status updates.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind"],
      videoPlaceholder: "30s DaVinci Resolve Demo",
    },
    {
      title: "IPL Mock Auction",
      description:
        "A multiplayer draft simulation featuring dynamic room code generation, real-time budget deductions, and complex state management.",
      tech: ["MERN Stack", "REST APIs", "React"],
      videoPlaceholder: "Room Code & Draft Demo",
    },
    {
      title: "HealthRakshakCard",
      description:
        "A responsive, high-performance frontend interface designed for streamlined patient data access and medical record management.",
      tech: ["React", "Vite", "UI/UX Design"],
      videoPlaceholder: "UI Walkthrough Demo",
    },
  ];
  return (
    <div className="min-h-screen bg-[#fbfbfd] text-[#1d1d1f] font-sans selection:bg-blue-200">
      {/* ULTRA-CLEAN NAVBAR */}
      <nav className="fixed w-full top-0 bg-[#fbfbfd]/80 backdrop-blur-md z-50 border-b border-gray-200/50">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between text-xs font-semibold tracking-wide text-gray-500">
          <a
            href="#"
            className="hover:text-gray-900 transition-colors text-gray-900 font-bold"
          >
            Cartikeya
          </a>
          <div className="flex space-x-8">
            <a href="#work" className="hover:text-gray-900 transition-colors">
              Work
            </a>
            <a href="#about" className="hover:text-gray-900 transition-colors">
              About
            </a>
            <a
              href="#contact"
              className="hover:text-gray-900 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* APPLE-STYLE HERO SECTION */}
      <main className="pt-40 pb-20 px-6 max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Subtle Eyebrow Text */}
        <p className="text-sm md:text-base font-semibold text-blue-600 tracking-widest uppercase mb-4">
          Software Engineer & Creator
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
            Selected Work.
          </h2>
          <p className="text-xl text-[#86868b] font-medium">
            Built from scratch. Deployed to the web.
          </p>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Video Placeholder (Cinematic rounded container) */}
              <div className="w-full h-48 bg-gray-50 rounded-2xl mb-6 flex items-center justify-center overflow-hidden relative border border-gray-100">
                <span className="text-gray-400 font-semibold text-sm tracking-wide">
                  [{project.videoPlaceholder}]
                </span>
                {/* Overlay gradient for a subtle Apple sheen on hover */}
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
          ))}
        </div>
      </section>
      {/* CONTACT & FOOTER SECTION */}
      <section
        id="contact"
        className="py-32 px-6 max-w-4xl mx-auto text-center border-t border-gray-100 mt-20"
      >
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[#1d1d1f] mb-6">
          Let's build something.
        </h2>
        <p className="text-xl text-[#86868b] font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
          Whether you need a custom full-stack application for your business or
          a sleek frontend interface, I'm currently taking on freelance
          projects.
        </p>

        {/* Replace with your actual email */}
        <a
          href="mailto:cartikeya.official@gmail.com"
          className="inline-block bg-[#1d1d1f] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-black transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 mb-24"
        >
          Drop me an email
        </a>

        {/* Minimalist Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm font-semibold text-gray-400 tracking-wide pt-8 border-t border-gray-100">
          <p>
            &copy; {new Date().getFullYear()} Cartikeya. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            {/* The Local Flex */}
            <span className="text-gray-300">|</span>
            <p>Based in Vizag</p>
            <span className="text-gray-300">|</span>
            {/* Add your actual social links here */}
            <a
              href="https://www.linkedin.com/in/cartikeya-lavu-59577828a/"
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
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
