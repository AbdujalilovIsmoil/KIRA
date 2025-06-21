import "./style.scss";
import { Banner, Hero, Payment, Possibility, Services } from "./Components";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Banner />
      <Possibility />
      <Payment />
    </>
  );
};

export default Home;
