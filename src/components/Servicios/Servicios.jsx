import { motion } from "framer-motion";
import {
  ServiciosContainer,
  ServiciosGrid,
  Card,
  IconWrapper,
  CardTitle,
  CardText,
  CtaButton,
} from "./ServiciosStyles";
import {
  FaRocket,
  FaShoppingCart,
  FaLaptopCode,
  FaBullhorn,
  FaNetworkWired,
  FaCogs,
  FaPalette,
} from "react-icons/fa";

const serviciosData = [
  {
    id: 1,
    title: "Landing Pages que convierten",
    icon: <FaRocket />,
    description:
      "Transformamos tu idea en una página profesional optimizada para captar clientes y generar resultados.",
    cta: "Quiero mi landing",
  },
  {
    id: 2,
    title: "Tiendas Online",
    icon: <FaShoppingCart />,
    description:
      "Creamos tu tienda lista para vender con medios de pago, integración a redes y atención por WhatsApp.",
    cta: "Quiero mi tienda",
  },
  {
    id: 3,
    title: "Sitios Web Personalizados",
    icon: <FaLaptopCode />,
    description:
      "Diseñamos sitios únicos que reflejan la esencia de tu marca, transmitiendo confianza y profesionalismo.",
    cta: "Quiero mi web",
  },
  // {
  //   id: 4,
  //   title: "Contenido para Redes",
  //   icon: <FaPalette />,
  //   description:
  //     "Diseñamos piezas visuales impactantes que destacan tu marca y aumentan la interacción real.",
  //   cta: "Potenciar redes",
  // },
  // {
  //   id: 5,
  //   title: "Campañas Publicitarias",
  //   icon: <FaBullhorn />,
  //   description:
  //     "Estrategias publicitarias efectivas que multiplican tu alcance en redes, reels y marketplaces.",
  //   cta: "Quiero una campaña",
  // },
  {
    id: 6,
    title: "Conectividad Empresarial",
    icon: <FaNetworkWired />,
    description:
      "Diseñamos redes empresariales seguras y rápidas. Conectá tus equipos sin interrupciones.",
    cta: "Mejorar conectividad",
  },
  {
    id: 7,
    title: "Software a Medida",
    icon: <FaCogs />,
    description:
      "Desarrollamos soluciones personalizadas que optimizan la gestión y automatizan tus procesos.",
    cta: "Solicitar demo",
  },
];

const Servicios = () => {
  return (
    <ServiciosContainer id="servicios">
      <h2>
        <span>Servicios</span> que impulsan tu negocio 🚀
      </h2>
      <ServiciosGrid>
        {serviciosData.map((servicio, i) => (
          <motion.div
            key={servicio.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card>
              <IconWrapper>{servicio.icon}</IconWrapper>
              <CardTitle>{servicio.title}</CardTitle>
              <CardText>{servicio.description}</CardText>
              <CtaButton
                href="https://wa.me/1122684234"
                target="_blank"
                rel="noopener noreferrer"
              >
                {servicio.cta}
              </CtaButton>
            </Card>
          </motion.div>
        ))}
      </ServiciosGrid>
    </ServiciosContainer>
  );
};

export default Servicios;
