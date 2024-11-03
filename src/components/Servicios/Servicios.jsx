import React from "react";
import {
  ServiciosContainer,
  Card,
  CardImage,
  CardContent,
  CardTitle,
  CardText,
  CardButton,
} from "./ServiciosStyles";
import bckgLanding from "../../imgs/BackgroundServicios/BckgLandingPages.jpg";
import bckgTienda from "../../imgs/BackgroundServicios/BckgTiendaOnline.jpg";
import bckgRedes from "../../imgs/BackgroundServicios/BckgRedes.jpg";
const serviciosData = [
  {
    title: "Creamos tu Landing Page",
    img: bckgLanding,
    description:
      "Atrae más clientes con una página única y efectiva. Dale estilo y profesionalismo a tu marca con una pagina de aterrizaje donde se muestre informacion de tu negocio/emprendimiento.",
  },
  {
    title: "Creación de Tiendas Online",
    img: bckgTienda,
    description:
      "Creamos tu tienda online con todas las herramientas necesarias para que comiences a vender de inmediato. En un mundo cada vez más digital, estar offline significa perder oportunidades. Mientras que en una tienda física los ingresos se detienen en vacaciones, con tu negocio online puedes generar ventas en cualquier momento y lugar, ¡incluso mientras disfrutas de un merecido descanso! ",
  },
  {
    title: "Sitios Webs Personalizados",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    description:
      "Creamos un diseño a medida que refleja la identidad de tu marca, transmitiendo profesionalismo y autenticidad. Somos especialistas en diseño y entendemos cómo plasmar la esencia de tu negocio en cada detalle, generando una experiencia visual única que conecta con tu audiencia.",
  },
  {
    title: "Flyers, Banners, Contenido para Redes",
    img: bckgRedes,
    description:
      "Potencia tu marca en redes sociales con contenido visual impactante y profesional. Creamos stories, posts y material gráfico diseñado especialmente para destacar lo mejor de tu emprendimiento, capturando la atención de tu audiencia y generando interacción. Nuestro enfoque está en construir una imagen sólida y atractiva que lleve tu marca al siguiente nivel.",
  },
];

const Servicios = () => {
  return (
    <ServiciosContainer>
      {serviciosData.map((servicio, index) => (
        <Card key={index} reverse={index % 2 !== 0}>
          <CardImage src={servicio.img} alt={servicio.title} />
          <CardContent>
            <CardTitle>{servicio.title}</CardTitle>
            <CardText>{servicio.description}</CardText>
          </CardContent>
        </Card>
      ))}
    </ServiciosContainer>
  );
};

export default Servicios;
