import React from "react";
import { HomeWrapper } from "./HomeStyles";
import { Hero } from "../../components/Hero/Hero";
import Contact from "../Contact/Contact";
import Servicios from "../../components/Servicios/Servicios";
export const Home = () => {
  return (
    <HomeWrapper>
      <Hero />
      <Servicios />
      <Contact />
    </HomeWrapper>
  );
};

export default Home;
