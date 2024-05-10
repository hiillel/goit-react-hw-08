import HomePageImage from "../../images/contactsImage.jpg";
import css from "./HomePage.module.css";
const HomePage = () => {
  return (
    <div className={css.container}>
      <div className={css.img_container}>
        <img
          src={HomePageImage}
          alt="Smartphone with contact"
          className={css.img}
        />
      </div>
      <div className={css.text_container}>
        <div className={css.header}>
          <h1 className={css.text}>
            <p className={css.paragraph}>
              Hello and welcome to our <span>Contact Book App</span>! 📱📚 We
              are thrilled to have you join us. With our user-friendly interface
              and powerful features, managing your contacts has never been
              easier.
            </p>
            <p>
              Whether you are organizing personal connections or professional
              networks, we are here to streamline your experience. Feel free to
              explore and make the most out of our app. Happy connecting!
            </p>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
