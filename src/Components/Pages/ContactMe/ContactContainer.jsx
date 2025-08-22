import FormContainer from "./FormContainer";
import Css from "./ContactContainer.module.css";

const ContactContainer = () => {
  return (
    <div className={`${Css.container}`}>
      <h1 className={`${Css.contact}`}>Contact Me</h1>
      <div className={`${Css.cardbody}`}>
        <FormContainer />
      </div>
    </div>
  );
};

export default ContactContainer;
