import "./style.scss";
import { Link } from "react-router-dom";
import { HeroBackgroundImage } from "Assets/Images/Jpg";

const Hero = () => {
  const backgroundStyle = {
    height: 688,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundImage: `linear-gradient(rgba(0, 41, 107, 0.502)),url(${HeroBackgroundImage})`,
  };

  return (
    <section
      className='hero'
      style={backgroundStyle}
    >
      <h1 className='visually-hidden'>KIRA</h1>
      <div className='container'>
        <div className='hero__content'>
          <h3 className='hero__content-welcome'>Welcome to KIRA</h3>
          <h2 className='hero__content-title'>
            One Journey Every Voice Every Destination
          </h2>
          <p className='hero__content-description'>
            We are an online plant shop offering a wide range of cheap and
            trendy plants. Use our plants to create an unique Urban Jungle.
            Order your favorite plants!
          </p>

          <Link
            className='hero-shop-now'
            to='/'
          >
            show now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
