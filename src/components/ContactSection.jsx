import React from "react";

export default function ContactSection() {
  // 🔒 Invisible fix — NO UI CHANGE
  const openEmail = (e) => {
    e.preventDefault();
    window.location.href = "mailto:syedimran8742@gmail.com";
  };

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-40 bg-[#0A192F] overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <img
          src="https://thumbs.dreamstime.com/b/technology-background-glowing-blue-cyan-electronic-circuit-board-lines-dark-gradient-abstract-to-light-403924659.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/80 via-[#0A192F]/90 to-[#0A192F] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="mb-20 text-center">
          <p className="text-[#64FFDA] font-mono text-lg mb-4">
            03. Get In Touch
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Let’s build something meaningful
          </h2>

          <div className="w-32 h-[2px] bg-[#64FFDA]/80 mt-8 mx-auto" />

          <p className="mt-10 text-[#8892B0] text-lg max-w-2xl mx-auto">
            I’m open to new opportunities and impactful projects. Whether you
            have an idea or just want to say hello, my inbox is always open.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Form */}
          <div>
            <form
              onSubmit={async (e) => {
                e.preventDefault();

                const formData = new FormData(e.target);

                const res = await fetch("/api/contact", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    name: formData.get("name"),
                    email: formData.get("email"),
                    message: formData.get("message"),
                  }),
                });

                if (res.ok) {
                  alert("Message sent successfully 🚀");
                  e.target.reset();
                } else {
                  alert("Failed to send message ❌");
                }
              }}
              className="space-y-8 bg-[#112240]/60 backdrop-blur-sm p-10 rounded-2xl border border-white/10 shadow-2xl"
            >
              <div>
                <label className="block text-[#CCD6F6] font-mono mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  name="name"
                  className="w-full px-6 py-4 rounded-lg bg-[#0A192F] border border-white/10 text-white focus:border-[#64FFDA] focus:ring-2 focus:ring-[#64FFDA]/20 outline-none"
                />
              </div>

              <div>
                <label className="block text-[#CCD6F6] font-mono mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  name="email"
                  required
                  className="w-full px-6 py-4 rounded-lg bg-[#0A192F] border border-white/10 text-white focus:border-[#64FFDA] focus:ring-2 focus:ring-[#64FFDA]/20 outline-none"
                />
              </div>

              <div>
                <label className="block text-[#CCD6F6] font-mono mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  placeholder="Tell me about your project..."
                  name="message"
                  required
                  className="w-full px-6 py-4 rounded-lg bg-[#0A192F] border border-white/10 text-white focus:border-[#64FFDA] focus:ring-2 focus:ring-[#64FFDA]/20 outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-4 px-10 py-5 rounded-lg bg-[#64FFDA] text-[#0A192F] font-semibold text-lg hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(100,255,218,0.45)] transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Socials */}
          <div className="space-y-12">
            <div className="text-center lg:text-left">
              <p className="text-[#8892B0] text-lg mb-8">
                You can also find me here
              </p>

              <div className="flex justify-center lg:justify-start gap-8">
                {[
                  {
                    href: "https://github.com/imran6300",
                    label: "GitHub",
                    icon: GitHubIcon,
                  },
                  {
                    href: "https://www.linkedin.com/in/syed-mubashir-ahmed-475362340/",
                    label: "LinkedIn",
                    icon: LinkedInIcon,
                  },
                  {
                    href: "mailto:syedimran8742@gmail.com",
                    label: "Email",
                    icon: MailIcon,
                  },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    onClick={label === "Email" ? openEmail : undefined}
                    className="
                      text-[#64FFDA]
                      hover:text-white
                      hover:-translate-y-1
                      hover:shadow-[0_0_20px_rgba(100,255,218,0.3)]
                      transition-all duration-300
                    "
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            <p className="text-center lg:text-left text-[#8892B0] text-sm">
              © 2025 Syed Imran. Built with React & Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Icons */

function GitHubIcon() {
  return (
    <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.6 0-12 5.4-12 12 0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2.9-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.8-1.6 8.2-6.1 8.2-11.4 0-6.6-5.4-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.1 1.5-2.1 2.9v5.7H9.4V9h3.4v1.6h.1c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4c-1.1 0-2.1-.9-2.1-2.1 0-1.1 1-2.1 2.1-2.1 1.2 0 2.1 1 2.1 2.1 0 1.2-.9 2.1-2.1 2.1zM7.1 20.4H3.6V9h3.5v11.4z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      className="w-9 h-9"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8l7.9 5.3a2 2 0 002.2 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}
