import Css from "./AboutMeContainer.module.css";
import Intro from "./Intro";
import WorkCard from "./WorkCard";
const AboutMeContainer = () => {
  return (
    <div className={`${Css.aboutContainer}`}>
      <h1 className={`${Css.about}`}>About Me</h1>
      <Intro />
      <WorkCard />
    </div>
  );
};
export default AboutMeContainer;
