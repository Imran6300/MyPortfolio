import Css from "./myProjects.module.css";

const MyProjects = () => {
  return (
    <>
      <h1 className={Css.Projects}>My Projects</h1>

      <div className={Css.myProjects}>
        <div className={Css.scrollContainer}>
          <section className={Css.card}>
            <div className={`${Css.left}`}>
              <h2>Furniture E-Commerce Platform</h2>
              <h4 style={{ color: "white" }}>
                Full-stack e-commerce web app for buying and selling furniture
                with secure payments and admin controls.
              </h4>
              <h6>overview :</h6>
              <p style={{ color: "white" }}>
                This MERN-based e-commerce platform allows users to browse
                products, add them to the cart, and complete secure payments. It
                includes an admin dashboard for managing products and orders,
                ensuring smooth backend operations.
              </p>
              <h6>Key Features :</h6>
              <ul>
                <li>JWT authentication with bcrypt password hashing</li>
                <li>Stripe payment gateway integration</li>
                <li>Admin dashboard for product management</li>
                <li>Responsive UI using Tailwind CSS</li>
                <li>REST API for product & order data</li>
              </ul>
              <h6>
                GitHub :{" "}
                <a href="https://github.com/Imran6300/Practice" target="_main">
                  github.com/Imran6300/Repo
                </a>{" "}
              </h6>
            </div>
            <hr className={`${Css.hr}`} />
            <div className={`${Css.right}`}>
              <div className={`${Css.cardImg}`}>
                <img src="./furniture.png" alt="" />
              </div>
            </div>
          </section>
          <section className={Css.card}>
            <div className="left">
              <h2>Digital Agency</h2>
              <h4 style={{ color: "white" }}>
                A professional agency platform built to showcase services,
                portfolio, and client solutions.
              </h4>
              <h6>overview :</h6>
              <p style={{ color: "white" }}>
                I developed this digital agency website as a full-stack project
                to represent a modern business presence online. The platform
                highlights services, displays a dynamic portfolio of work, and
                provides clients with an easy way to connect. The goal was to
                create a clean, responsive, and engaging site that reflects the
                quality of digital products we deliver.
              </p>
              <h6>Key Features :</h6>
              <ul>
                <li>
                  Responsive and modern UI for an engaging user experience
                </li>
                <li>
                  Portfolio showcase with project details and case studies
                </li>
                <li>Service pages designed to highlight offerings clearly</li>
                <li>Mobile-first, cross-device compatible layout</li>
                <li>
                  Contact form integration for seamless client communication
                </li>
              </ul>
              <h6>
                GitHub :{" "}
                <a href="https://github.com/Imran6300/Practice" target="_main">
                  github.com/Imran6300/Repo
                </a>{" "}
              </h6>
            </div>
            <hr className={`${Css.hr}`} />
            <div className="right">
              <div className={`${Css.cardImg}`}>
                <img src="./DigitalAgency.png" alt="" />
              </div>
            </div>
          </section>
          <section className={Css.card}>
            <div className="left">
              <h2>Furniture E-Commerce Platform</h2>
              <h4 style={{ color: "white" }}>
                Full-stack e-commerce web app for buying and selling furniture
                with secure payments and admin controls.
              </h4>
              <h6>overview :</h6>
              <p style={{ color: "white" }}>
                This MERN-based e-commerce platform allows users to browse
                products, add them to the cart, and complete secure payments. It
                includes an admin dashboard for managing products and orders,
                ensuring smooth backend operations.
              </p>
              <h6>Key Features :</h6>
              <ul>
                <li>JWT authentication with bcrypt password hashing</li>
                <li>Stripe payment gateway integration</li>
                <li>Admin dashboard for product management</li>
                <li>Responsive UI using Tailwind CSS</li>
                <li>REST API for product & order data</li>
              </ul>
              <h6>
                GitHub :{" "}
                <a href="https://github.com/Imran6300/Practice" target="_main">
                  github.com/Imran6300/Repo
                </a>{" "}
              </h6>
            </div>
            <hr className={`${Css.hr}`} />
            <div className="right">
              <div className={`${Css.cardImg}`}>
                <img src="./furniture.png" alt="" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default MyProjects;
