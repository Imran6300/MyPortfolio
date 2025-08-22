import HeroSection from "../Components/Herosection";
import HeroMain from "../Components/HeroContent/HeroMain";
import AboutMeContainer from "../Components/Pages/AboutMe/AboutMeContainer";
import MyProjects from "../Components/Pages/MyProjects/myProjects";
import ContactContainer from "../Components/Pages/ContactMe/ContactContainer";
import Footer from "../Components/Footer";
import "./App.css";

function App() {
  return (
    <>
      {/* Hero */}
      <div className="hero">
        <HeroSection
          raysOrigin="top-center"
          raysColor="#C9D1D9"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
        <HeroMain />
      </div>

      {/* Sections */}
      <section id="about-me">
        <AboutMeContainer />
      </section>

      <section id="projects">
        <MyProjects />
      </section>

      <section id="contact">
        <ContactContainer />
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
