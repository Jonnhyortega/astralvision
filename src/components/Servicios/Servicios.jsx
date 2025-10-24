import { useState } from "react";
import {
  ServiciosContainer,
  Card,
  CardContent,
  CardTitle,
  CardText,
  CtaButton,
  BgImage,
} from "./ServiciosStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import "animate.css";

const serviciosData = [
  {
    id:1,
    title: "Landing Pages que convierten ",
    icon: "https://img.icons8.com/ios/50/rocket--v1.png",
    img: "https://res.cloudinary.com/do87isqjr/image/upload/v1760654855/BckgLandingPages_g51omv.webp",
    description:
      "Transformamos tu idea en una página profesional diseñada para captar clientes. Rápida, optimizada y lista para hacer crecer tu negocio.",
    cta: "Quiero mi landing",
  },
  {
    title: "Tiendas Online ",
    img: "https://res.cloudinary.com/do87isqjr/image/upload/v1760654856/BckgTiendaOnline_vaopo5.webp",
    icon: "https://img.icons8.com/ios/50/shopping-cart--v1.png",
    description:
    "Creamos tu tienda digital lista para vender con integración a WhatsApp, redes y medios de pago. Vendé 24/7, incluso mientras descansás.",
    cta: "Quiero mi tienda",
  },
  {
    title: "Sitios Web Personalizados ",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    icon: "https://img.icons8.com/ios/50/portfolio.png",
    description:
    "Diseñamos sitios web únicos que reflejan la esencia de tu marca. Transmití confianza, profesionalismo y estilo desde el primer clic.",
    cta: "Quiero mi web",
  },
  {
    title: "Contenido para Redes 📱",
    img: "https://res.cloudinary.com/do87isqjr/image/upload/v1760654855/BckgRedes_lzhr3a.webp",
    icon: "https://img.icons8.com/external-soleicons-line-amoghdesign/17/external-sociales-soleicons-line-vol-03-soleicons-line-amoghdesign.png",
    description:
      "Diseñamos piezas visuales impactantes: stories, flyers y banners que hacen destacar tu marca y generan interacción real.",
    cta: "Potenciar redes",
  },
  {
    title: "Campañas Publicitarias 🎯",
    img: "https://res.cloudinary.com/do87isqjr/image/upload/v1760654855/bckgCampa%C3%B1as_wgzmwp.webp",
    description:
      "Creamos estrategias publicitarias que multiplican tu alcance. Llevamos tu marca a los feeds, reels y marketplace correctos.",
    cta: "Quiero una campaña",
  },
  {
    title: "Conectividad Empresarial ⚙️",
    img: "https://res.cloudinary.com/do87isqjr/image/upload/v1760654855/bckgNetwork_tmhuod.webp",
    description:
      "Diseñamos e instalamos redes empresariales seguras, rápidas y estables. Conectá tus equipos y oficinas sin interrupciones.",
    cta: "Mejorar conectividad",
  },
  {
    title: "Software a Medida 💻",
    img: "https://wheelhub.es/wp-content/uploads/2024/02/soluciones-a-medida-wheelhub.png",
    description:
      "Creamos soluciones de software personalizadas para tu negocio. Automatizá procesos y optimizá tu gestión diaria.",
    cta: "Solicitar demo",
  },
];

const Servicios = () => {
  const [indexData, setIndexData] = useState(0);
  const [direction, setDirection] = useState(null);

  const choiceCard = (arrow) => {
    setDirection(arrow);
    setIndexData((prev) => {
      if (arrow === "left") return prev === 0 ? serviciosData.length - 1 : prev - 1;
      else return prev === serviciosData.length - 1 ? 0 : prev + 1;
    });
  };

  return (
    <ServiciosContainer>
      <h2>
        <span>Servicios</span> que impulsan tu negocio
      </h2>

      <FontAwesomeIcon
        onClick={() => choiceCard("left")}
        className="arrow arrow-left"
        icon={faArrowLeft}
      />
      <FontAwesomeIcon
        onClick={() => choiceCard("right")}
        className="arrow arrow-right"
        icon={faArrowRight}
      />

      <div className="cards-container">
        {/* 🔹 Contenedor arrastrable */}
        <motion.div
        key={indexData} // 🔥 fuerza el re-render suave entre cards
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.4}
        onDragEnd={(event, info) => {
          if (info.offset.x < -100) choiceCard("right");
          if (info.offset.x > 100) choiceCard("left");
        }}
        style={{ cursor: "grab" }}
        whileTap={{ cursor: "grabbing", scale: 0.98 }}
        initial={{ opacity: 0, x: direction === "left" ? -100 : 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: direction === "left" ? 100 : -100 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <Card>
          <BgImage src={serviciosData[indexData].img} />
          <div className="overlay" />
          <CardContent>
            <CardTitle>{serviciosData[indexData].title}</CardTitle>
            <CardText>{serviciosData[indexData].description}</CardText>
            <CtaButton href="https://wa.me/5491150109592" target="_blank">
              {serviciosData[indexData].cta}
            </CtaButton>
          </CardContent>
        </Card>
      </motion.div>

      </div>
    </ServiciosContainer>
  );
};

export default Servicios;
