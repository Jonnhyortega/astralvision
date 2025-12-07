import { HomeWrapper } from "./HomeStyles";
import { Hero } from "../../components/Hero/Hero";
import Publicidad from "../../components/Publicidad/Publicidad";
import Contact from "../Contact/Contact";
import Servicios from "../../components/Servicios/Servicios";
import HowWeDoIt from "../../components/HowWeDoIt/HowWeDoIt";
import Technologies from "../../components/TechnologiesComponente/Technologies";
import Opinions from "../../components/Opinions/Opinions";
export const Home = () => {
  return (
    <HomeWrapper>
      <Hero />
      <Servicios />
      <HowWeDoIt />
      <Opinions />
      <Contact />
      <Technologies />
      {/* <Publicidad /> */}
    </HomeWrapper>
  );
};

export default Home;
