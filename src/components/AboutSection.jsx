import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-[#0A192F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="mb-16 text-center lg:text-left">
          <p className="text-[#64FFDA] font-mono mb-3 animate-fade-up">
            01. About Me
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white animate-fade-up [animation-delay:150ms]">
            Building systems that scale in the real world
          </h2>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* LEFT: About Content */}
          <div className="lg:col-span-7 space-y-6 animate-fade-up [animation-delay:300ms]">
            <p className="text-[#CCD6F6] text-lg leading-relaxed">
              I’m{" "}
              <span className="text-white font-semibold">Syed Mubashir</span>, a
              MERN stack developer with a strong interest in{" "}
              <span className="text-[#64FFDA]">
                IoT and performance-critical systems
              </span>
              . I enjoy turning complex ideas into clean, maintainable, and
              scalable applications.
            </p>

            <p className="text-[#8892B0] text-lg leading-relaxed">
              From full-stack web platforms to real-time IoT dashboards, I focus
              on building solutions that are reliable, secure, and ready for
              production use.
            </p>

            <p className="text-[#8892B0] text-lg leading-relaxed">
              I care deeply about clean code, system design, and user
              experience. My goal is always to ship products that solve real
              problems — not just demos.
            </p>

            {/* Highlights */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { label: "Full-Stack", value: "MERN" },
                { label: "Focus", value: "IoT + Web" },
                { label: "Mindset", value: "Production-Ready" },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className="p-5 rounded-xl bg-[#112240]/60 border border-white/10
                  hover:border-[#64FFDA]/40 transition"
                >
                  <p className="text-[#64FFDA] font-mono text-sm">
                    {item.label}
                  </p>
                  <p className="text-white font-semibold text-lg mt-1">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Skills & Stats */}
          <div className="lg:col-span-5 animate-fade-up [animation-delay:450ms]">
            <div className="p-8 rounded-2xl bg-[#112240]/70 border border-white/10 backdrop-blur">
              <h3 className="text-white font-semibold text-xl mb-6">
                Tools & Technologies
              </h3>

              <div className="flex flex-wrap gap-3">
                {[
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "PostgreSQL",
                  "Tailwind CSS",
                  "REST APIs",
                  "MQTT",
                  "ESP32",
                  "Docker",
                  "Git & GitHub",
                ].map((skill, index) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full text-sm font-mono
                    bg-[#0A192F] text-[#8892B0]
                    border border-white/10
                    hover:border-[#64FFDA] hover:text-[#64FFDA]
                    transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Mini Stats */}
              <div className="mt-10 grid grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-3xl font-bold text-[#64FFDA]">10+</p>
                  <p className="text-sm text-[#8892B0] mt-1">Projects</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#64FFDA]">MERN</p>
                  <p className="text-sm text-[#8892B0] mt-1">Specialization</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#64FFDA]">IoT</p>
                  <p className="text-sm text-[#8892B0] mt-1">Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
