import Css from "./WorkCard.module.css";
import SpotlightCard from "../../AnimatedComponents/SpotlightCard";
const WorkCard = () => {
  return (
    <section className={`${Css.whyworkwithme}`}>
      <h2>💼 Why Work With Me</h2>
      <div className={`${Css.cardcontainer}`}>
        {
          <SpotlightCard
            className={`${Css.customspotlightcard} ${Css.card}`}
            spotlightColor="#58A6FF"
          >
            <h3>✅ I care about your idea as much as you do.</h3>
            <p>
              Every project I take on gets my full attention — from planning to
              final polish. I treat your product like it’s my own.
            </p>
          </SpotlightCard>
        }
        {
          <SpotlightCard
            className={`${Css.customspotlightcard} ${Css.card}`}
            spotlightColor="#58A6FF"
          >
            <h3>✅ Not just code — I deliver clean, usable solutions.</h3>
            <p>
              I don’t just “make it work.” I make sure it works well, loads
              fast, and looks great on all screens.
            </p>
          </SpotlightCard>
        }
        {
          <SpotlightCard
            className={`${Css.customspotlightcard} ${Css.card}`}
            spotlightColor="#58A6FF"
          >
            <h3>✅ You’ll always know what’s going on.</h3>
            <p>
              I believe in clear, consistent communication. You’ll get regular
              updates, quick replies, and no surprises.
            </p>
          </SpotlightCard>
        }
        {
          <SpotlightCard
            className={`${Css.customspotlightcard} ${Css.card}`}
            spotlightColor="#58A6FF"
          >
            <h3>✅ Deadlines are sacred.</h3>
            <p>
              If I commit, I deliver — no excuses. Your timeline and goals stay
              at the center of everything I do.
            </p>
          </SpotlightCard>
        }
        {
          <SpotlightCard
            className={`${Css.customspotlightcard} ${Css.card}`}
            spotlightColor="#58A6FF"
          >
            <h3>✅ Your users come first.</h3>
            <p>
              From UI design to backend logic, I always build with the end-user
              in mind. That means better UX, happier customers, and fewer bugs.
            </p>
          </SpotlightCard>
        }
        {
          <SpotlightCard
            className={`${Css.customspotlightcard} ${Css.card}`}
            spotlightColor="#58A6FF "
          >
            <h3>✅ I grow with your project.</h3>
            <p>
              As your needs evolve, I adapt — whether it’s adding new features,
              scaling performance, or refining design for your next big
              milestone.
            </p>
          </SpotlightCard>
        }
      </div>
    </section>
  );
};

export default WorkCard;
