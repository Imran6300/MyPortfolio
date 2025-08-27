import Css from "./HeroMain.module.css";
import FadeContent from "../AnimatedComponents/FadeContent";

const Image = () => {
  return (
    <div className={Css.HeroImage}>
      <FadeContent blur duration={1000} easing="ease-out" initialOpacity={0}>
        <img src={`http://localhost:5173/MyPortfolio/Imran.png`} alt="Imran" />
      </FadeContent>
    </div>
  );
};

export default Image;
