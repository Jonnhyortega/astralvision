import { HomeWrapper } from "./HomeStyles";
import { Hero } from "../../components/Hero/Hero";
import Publicidad from "../../components/Publicidad/Publicidad";
import Contact from "../Contact/Contact";
import Servicios from "../../components/Servicios/Servicios";
import HowWeDoIt from "../../components/HowWeDoIt/HowWeDoIt";
import Technologies from "../../components/TechnologiesComponente/Technologies";
import Opinions from "../../components/Opinions/Opinions";
import SEO from "../../components/SEO/SEO";

export const Home = () => {
  return (
    <HomeWrapper>
      <SEO 
        title="Astral Vision | Diseño Web & Soluciones Digitales"
        description="Agencia de diseño web y marketing digital. Creamos sitios modernos, tiendas online y estrategias SEO para potenciar tu negocio."
      />

      <Hero />
      <Servicios />
      <HowWeDoIt />
      <Opinions />
      <Contact useSEO={false} />
      <Technologies />
      {/* <Publicidad /> */}
    </HomeWrapper>
  );
};

export default Home;
