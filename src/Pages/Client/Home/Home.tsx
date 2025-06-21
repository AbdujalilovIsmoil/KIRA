import "./style.scss";
import { Banner, Hero, Payment, Services } from "./Components";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Banner />
      <Payment />
    </>
  );
};

export default Home;
