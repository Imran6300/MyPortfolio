import Css from "./HeroMain.module.css";
import FadeContent from "../AnimatedComponents/FadeContent";
const Skills = () => {
  return (
    <div className={`${Css.heroSkills}`}>
      {
        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
        >
          <img src="http://localhost:5173/MyPortfolio/React.png" />
        </FadeContent>
      }
      {
        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
        >
          <img src="http://localhost:5173/MyPortfolio/NodeJS.png" />
        </FadeContent>
      }
      {
        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
        >
          <img src="http://localhost:5173/MyPortfolio/ExpressJS.png" />
        </FadeContent>
      }
      {
        <FadeContent
          blur={true}
          duration={1800}
          easing="ease-out"
          initialOpacity={0}
        >
          <img src="http://localhost:5173/MyPortfolio/MongoDB.png" />
        </FadeContent>
      }
    </div>
  );
};

export default Skills;
