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
          raysSpeed={2}
          lightSpread={0.6}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.5}
          noiseAmount={0}
          distortion={0}
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
