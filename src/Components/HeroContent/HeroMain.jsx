import Introduction from "./Introduction";
import Image from "./Image";
import Skills from "./Skills";
import Css from "./HeroMain.module.css";
const HeroMain = () => {
  return (
    <div className={`${Css.heroContainer}`}>
      <Introduction />
      <Image />
      <Skills />
    </div>
  );
};

export default HeroMain;
