import React from "react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Real-Time IoT Monitoring Dashboard",
      description:
        "Full-stack IoT platform with real-time sensor monitoring, MQTT + Socket.io live data streaming, advanced charting, and a secure Node.js backend.",
      tech: ["React", "Node.js", "MQTT", "MongoDB", "Chart.js", "ESP32"],
      liveLink: "https://live-temperature-sensor.vercel.app",
      githubLink: "https://github.com/Imran6300/Live-Temperature-Sensor",
      featured: true,
      image: "/iotdashboard.png",
    },
    {
      title: "Overseas Education & Services Platform",
      description:
        "Responsive overseas platform enabling users to explore international education options, view country and university details, submit inquiries, and securely authenticate using a modern MERN stack.",
      tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      liveLink: "https://khizar-overseas.vercel.app/",
      githubLink: "https://github.com/Imran6300/Study-Abroad-Overseas",
      image: "/overseas.png",
    },
    {
      title: "MERN E-commerce Platform ",
      description:
        "Responsive e-commerce web application with product browsing, cart functionality, order flow, and secure authentication using the MERN stack.",
      tech: ["Next.js", "MongoDB", "Tailwind CSS", "Express", "JWT"],
      liveLink: "https://ecommers-store-569.vercel.app/",
      githubLink: "https://github.com/Imran6300/Ecommers-Store",
      image: "/ecommers.png",
    },
  ];

  return (
    <section id="projects" className="py-24 lg:py-40 bg-[#112240]">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="mb-20 text-center lg:text-left">
          <p className="text-[#64FFDA] font-mono text-lg mb-4 animate-fade-up">
            02. Featured Projects
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white animate-fade-up [animation-delay:150ms]">
            Things I’ve Built
          </h2>

          <div className="w-40 h-1 bg-[#64FFDA] mt-8 mx-auto lg:mx-0 animate-fade-up [animation-delay:300ms]" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative bg-[#0A192F] rounded-2xl overflow-hidden
                border border-white/5 hover:border-[#64FFDA]/40
                transition-all duration-700 shadow-lg hover:shadow-2xl
                hover:shadow-[#64FFDA]/10 hover:-translate-y-3
                animate-fade-up
                ${
                  project.featured ? "lg:col-span-2 lg:grid lg:grid-cols-2" : ""
                }`}
              style={{ animationDelay: `${400 + index * 200}ms` }}
            >
              {/* IMAGE (FIXED – FULLY VISIBLE) */}
              <div
                className={`
                  relative flex items-center justify-center
                  bg-[#020c1b]
                  ${project.featured ? "h-80 lg:h-[420px]" : "h-64"}
                  overflow-hidden
                `}
              >
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="
                    max-w-full max-h-full
                    object-contain
                    transition-transform duration-700
                    group-hover:scale-105
                  "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/60 to-transparent pointer-events-none" />
              </div>

              {/* CONTENT */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                {project.featured && (
                  <span className="text-[#64FFDA] font-mono text-sm mb-3">
                    Featured Project
                  </span>
                )}

                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-[#64FFDA] transition">
                  {project.title}
                </h3>

                <p className="text-[#CCD6F6] text-base lg:text-lg leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 text-xs font-mono
                      text-[#64FFDA] bg-[#64FFDA]/5
                      rounded-lg border border-[#64FFDA]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-8">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#64FFDA] hover:text-white transition flex items-center gap-2 font-mono"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#64FFDA] hover:text-white transition flex items-center gap-2 font-mono"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-24 animate-fade-up [animation-delay:1200ms]">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-4
              px-12 py-5
              text-[#64FFDA]
              border-2 border-[#64FFDA]
              rounded-xl
              hover:bg-[#64FFDA]/10
              hover:scale-105
              transition-all duration-500
              font-mono text-lg
            "
          >
            View Full Project Archive →
          </a>
        </div>
      </div>
    </section>
  );
}
