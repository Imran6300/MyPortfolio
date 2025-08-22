import Css from "./AboutMeContainer.module.css";

const Intro = () => {
  return (
    <div className={Css.IntroContainer}>
      <h1 className={Css.heading}>
        👋 Hi, I’m Mubashir — A MERN Stack Developer Who turns ideas into real,
        live web experiences
      </h1>

      <p>
        I build full-stack applications from scratch using the MERN stack —
        MongoDB, Express, React, and Node. Whether it’s a landing page, a
        dashboard, or a complete SaaS product, I focus on clean code, responsive
        design, and performance.
      </p>

      <section>
        <h2>🛠️ What I’m good at:</h2>
        <ul>
          <li>Crafting modern, responsive UIs that feel smooth and fast</li>
          <li>
            Writing scalable backend code that keeps things running behind the
            scenes
          </li>
          <li>
            Deploying full-stack projects that just work — on desktop, tablet,
            or mobile
          </li>
        </ul>
      </section>

      <section>
        <h2>⚙️ My everyday tools:</h2>
        <ul>
          <li>Git & GitHub to manage and track project progress</li>
          <li>Figma to bring client ideas to life visually</li>
          <li>
            Postman for API testing, and Vercel/Netlify for seamless deployments
          </li>
        </ul>
      </section>

      <section>
        <h2>🚀 What I bring to the table:</h2>
        <ul>
          <li>Fast, reliable development with clean and readable code</li>
          <li>Projects that are fully deployed and mobile-ready</li>
          <li>
            Clear communication, progress updates, and always delivering on time
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Intro;
