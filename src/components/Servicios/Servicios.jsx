import { useState } from "react";
import {
  ServiciosContainer,
  Card,
  CardContent,
  CardTitle,
  CardText,
} from "./ServiciosStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import bckgLanding from "../../imgs/BackgroundServicios/BckgLandingPages.webp";
import bckgTienda from "../../imgs/BackgroundServicios/BckgTiendaOnline.webp";
import bckgRedes from "../../imgs/BackgroundServicios/BckgRedes.webp";
import bckgCampaña from "../../imgs/BackgroundServicios/bckgCampañas.webp";
import bckgNetwork from "../../imgs/BackgroundServicios/bckgNetwork.webp";
import bckgSoftware from "../../imgs/BackgroundServicios/bckgSoftware.webp";
import "animate.css";


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
      "Potenciá tu marca en redes sociales con contenido visual impactante y profesional. Creamos stories, posts y material gráfico diseñado especialmente para destacar lo mejor de tu emprendimiento, capturando la atención de tu audiencia y generando interacción. Nuestro enfoque está en construir una imagen sólida y atractiva que lleve tu marca al siguiente nivel.",
  },
  {
    title: "Campañas de publicidad",
    img: bckgCampaña,
    description:
      "Ideamos campañas de publicidad para que tu producto/servicio o lo que quieras vender tenga llegada absoluta en todos los rincones las redes sociales, feeds de facebook e instagram, reels, marketplace, messenger, etc. Inundá la redes sociales con tu marca.",
  },
  {
    title: "Conectividad Empresarial: Redes a tu Medida",
    img: bckgNetwork,
    description:
      "Impulsa la productividad de tu empresa con soluciones de conectividad diseñadas para ti. Ofrecemos instalación, configuración y mantenimiento de redes empresariales seguras y eficientes, incluyendo VPN, redes LAN/WAN e integración de IoT. Aseguramos una comunicación fluida entre tus equipos y oficinas, optimizando procesos y garantizando la seguridad de tus datos. ¡Conéctate al futuro con infraestructura de red confiable y profesional!",
  },
  {
    title: "Desarrollo de software a Medida",
    img: bckgSoftware,
    description:
      "Desarrollamos soluciones de software personalizadas para adaptarse a las necesidades específicas de tu empresa. Nuestros expertos crean sistemas informáticos que optimizan procesos, mejoran la eficiencia y garantizan la escalabilidad. Desde aplicaciones móviles hasta sistemas de gestión empresarial, ofrecemos soluciones tecnológicas que impulsan tu negocio hacia el éxito.",
  },
];


const Servicios = () => {
  const [indexData, setIndexData] = useState(0);
  const [animateOut, setAnimateOut] = useState(false);
  const [animateIn, setAnimateIn] = useState(true);
  const [direction, setDirection] = useState(null);


  const choiceCard = (arrow) => {
    setAnimateOut(true);
    setAnimateIn(false);
    setDirection(arrow); 

    setTimeout(() => {
      if (arrow === "left") {
        setIndexData((prevIndex) =>
          prevIndex === 0 ? serviciosData.length - 1 : prevIndex - 1
        );
      } else if (arrow === "right") {
        setIndexData((prevIndex) =>
          prevIndex === serviciosData.length - 1 ? 0 : prevIndex + 1
        );
      }
      setAnimateOut(false);
      setAnimateIn(true);
    }, 500);
  };


  return (
    <ServiciosContainer>
      <h2>Nuestros servicios</h2>

      <FontAwesomeIcon
        onClick={() => {
          choiceCard("left");
        }}
        className="arrow arrow-left"
        icon={faArrowLeft}
      />
      <FontAwesomeIcon
        onClick={() => {
          choiceCard("right");
        }}
        className="arrow arrow-right"
        icon={faArrowRight}
      />

      <div className="cards-container">
        <Card
          className={`animate__animated ${
            animateOut
              ? direction === "left"
                ? "animate__backOutRight"
                : "animate__backOutLeft"
              : animateIn
              ? direction === "left"
                ? "animate__fadeInLeft"
                : "animate__fadeInRight"
              : ""
          }`}
          reverse={indexData % 2 !== 0}
          // style={{
          //   backgroundImage: `url(${serviciosData[indexData].img})`,
          //   backgroundSize: "cover",
          //   backgroundPosition: "center",
          // }}
        >
          <div className="overlay"></div>
          <CardContent>
            <CardTitle className="text-title">
              {serviciosData[indexData].title}
            </CardTitle>
            <CardText>{serviciosData[indexData].description}</CardText>
          </CardContent>
        </Card>
      </div>
    </ServiciosContainer>
  );
};

export default Servicios;
