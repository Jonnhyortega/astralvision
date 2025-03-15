import { HomeWrapper } from "./HomeStyles";
import { Hero } from "../../components/Hero/Hero";
import Publicidad from "../../components/Publicidad/Publicidad";
import Contact from "../Contact/Contact";
import Servicios from "../../components/Servicios/Servicios";
import HowWeDoIt from "../../components/HowWeDoIt/HowWeDoIt";
import Technologies from "../../components/TechnologiesComponente/Technologies";
export const Home = () => {
  return (
    <HomeWrapper>
      <Hero />
      <Servicios />
      <HowWeDoIt />
      <Technologies />
      <Publicidad />
      <Contact />
    </HomeWrapper>
  );
};

export default Home;
