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

const serviciosData = [
  {
    title: "Creamos tu Landing Page",
    img: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980",
    description:
      "Atrae más clientes con una página única y efectiva. Dale estilo y profesionalismo a tu marca con una pagina de aterrizaje donde se muestre informacion de tu negocio/emprendimiento.",
  },
  {
    title: "Creación de Tiendas Online",
    img: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514",
    description:
      "Desarrollamos tu tienda online con todo lo necesario para empezar a vender. En un mundo digitalizado, estar offline es perder oportunidades. Con una tienda física, cuando tomas vacaciones, tus ingresos se detienen; con tu negocio online, puedes generar ingresos desde cualquier lugar, ¡incluso desde la playa! ",
  },
  {
    title: "Sitios Webs Personalizados",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    description:
      "Creamos un diseño a medida que refleja la identidad de tu marca, transmitiendo profesionalismo y autenticidad. Somos especialistas en diseño y entendemos cómo plasmar la esencia de tu negocio en cada detalle, generando una experiencia visual única que conecta con tu audiencia.",
  },
  {
    title: "Flyers, Banners, Contenido para Redes",
    img: "https://images.unsplash.com/photo-1485217988980-11786ced9454",
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
            {/* <CardButton>Conocer Más</CardButton> */}
          </CardContent>
        </Card>
      ))}
    </ServiciosContainer>
  );
};

export default Servicios;
