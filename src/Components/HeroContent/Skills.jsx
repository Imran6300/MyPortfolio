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
          <img src="React.png" />
        </FadeContent>
      }
      {
        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
        >
          <img src="NodeJS.png" />
        </FadeContent>
      }
      {
        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
        >
          <img src="ExpressJS.png" />
        </FadeContent>
      }
      {
        <FadeContent
          blur={true}
          duration={1800}
          easing="ease-out"
          initialOpacity={0}
        >
          <img src="MongoDB.png" />
        </FadeContent>
      }
    </div>
  );
};

export default Skills;
