import "./style.scss";
import { BannerImage } from "Assets/Images/Jpg";

const Banner = () => {
  const backgroundStyle = {
    height: 400,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundImage: `linear-gradient(rgba(0, 41, 107, 0.502)),url(${BannerImage})`,
  };

  return (
    <section
      className='banner'
      style={backgroundStyle}
    >
      <div className='container'>
        <h2 className='banner-title'>
          THE LARGEST ON-DEMAND TRANSPORTATION MARKET
        </h2>
      </div>
    </section>
  );
};

export default Banner;
