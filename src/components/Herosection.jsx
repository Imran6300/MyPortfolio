import React from "react";
import { scrollToSection } from "../utils/scrollToSection";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        bg-gradient-to-br from-[#0A192F] to-[#112240]
        pt-24 md:pt-28 lg:pt-24
        flex items-center
        px-6 lg:px-20

        before:absolute before:inset-x-0 before:top-0 before:h-24
        before:bg-gradient-to-b before:from-[#0A192F]/80 before:to-transparent
        before:pointer-events-none
      "
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
        {/* Text */}
        <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
          <p className="text-[#64FFDA] text-base md:text-lg font-mono animate-fade-up">
            Hi, my name is
          </p>

          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white
          leading-tight animate-fade-up [animation-delay:120ms]"
          >
            Syed Mubashir.
          </h1>

          <h2
            className="text-2xl md:text-4xl lg:text-5xl font-bold
          text-[#AAB4C3] leading-tight animate-fade-up [animation-delay:240ms]"
          >
            I build <span className="text-[#64FFDA]">secure</span>, scalable web
            & IoT systems.
          </h2>

          <p
            className="text-[#8892B0] text-base md:text-lg max-w-2xl leading-relaxed
          mx-auto lg:mx-0 animate-fade-up [animation-delay:360ms]"
          >
            I’m a MERN stack developer focused on full-stack applications, IoT
            integrations, and performance-critical systems.
            <br />
            <br />I help businesses ship secure, production-ready products using
            MongoDB, Express, React, and Node.js.
          </p>

          <div className="pt-8 animate-fade-up [animation-delay:520ms]">
            <a
              className="
                inline-flex items-center gap-2
                px-8 py-4 text-base md:text-lg font-mono
                text-[#64FFDA] border border-[#64FFDA] rounded-lg
                hover:bg-[#64FFDA]/15
                hover:-translate-y-1
                hover:shadow-[0_0_25px_rgba(100,255,218,0.25)]
                transition-all duration-300 cursor-pointer
              "
              onClick={() => scrollToSection("#projects")}
            >
              Check out my projects →
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-up [animation-delay:700ms]">
          <div className="relative group">
            <div
              className="absolute -inset-3 bg-[#64FFDA]
            rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-700"
            />

            <div
              className="relative bg-[#112240] p-2 rounded-2xl
            group-hover:-translate-y-3 group-hover:scale-105
            transition-all duration-700 shadow-2xl"
            >
              <img
                src="/Imran.png"
                alt="Syed Imran"
                className="
                  w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80
                  object-cover rounded-xl
                  border-4 border-[#0A192F]
                  grayscale group-hover:grayscale-0
                  transition-all duration-1000
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
