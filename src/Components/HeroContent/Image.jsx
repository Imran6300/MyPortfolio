import Css from "./HeroMain.module.css";
import FadeContent from "../AnimatedComponents/FadeContent";

const Image = () => {
  return (
    <div className={Css.HeroImage}>
      <FadeContent blur duration={1000} easing="ease-out" initialOpacity={0}>
        <img src={`./Imran.png`} alt="Imran" />
      </FadeContent>
    </div>
  );
};

export default Image;
