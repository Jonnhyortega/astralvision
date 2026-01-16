import { motion } from "framer-motion";
import {
  ServiciosContainer,
  ServiciosGrid,
  IconWrapper,
  CardTitle,
  CardText,
  CtaButton, 
} from "./ServiciosStyles";
import { TiltCard } from "./TiltCard";
import {
  FaRocket,
  FaShoppingCart,
  FaLaptopCode,
  FaNetworkWired,
  FaCogs,
} from "react-icons/fa";

const serviciosData = [
  {
    id: 1,
    title: "Landing Pages que convierten",
    icon: <FaRocket />,
    description:
      "Transformamos tu idea en una página profesional optimizada para captar clientes y generar resultados.",
  },
  {
    id: 2,
    title: "Tiendas Online",
    icon: <FaShoppingCart />,
    description:
      "Creamos tu tienda lista para vender con medios de pago, integración a redes y atención por WhatsApp.",
  },
  {
    id: 3,
    title: "Sitios Web Personalizados",
    icon: <FaLaptopCode />,
    description:
      "Diseñamos sitios únicos que reflejan la esencia de tu marca, transmitiendo confianza y profesionalismo.",
  },
  {
    id: 6,
    title: "Conectividad Empresarial",
    icon: <FaNetworkWired />,
    description:
      "Diseñamos redes empresariales seguras y rápidas. Conectá tus equipos sin interrupciones.",
  },
  {
    id: 7,
    title: "Software a Medida",
    icon: <FaCogs />,
    description:
      "Desarrollamos soluciones personalizadas que optimizan la gestión y automatizan tus procesos.",
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
            style={{ height: '100%' }} 
          >
            <TiltCard>
              <div style={{textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <IconWrapper>{servicio.icon}</IconWrapper>
                <CardTitle>{servicio.title}</CardTitle>
                <CardText>{servicio.description}</CardText>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </ServiciosGrid>

      <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center' }}>
        <CtaButton
            href="https://wa.me/1122684234"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '1.2rem', padding: '1rem 3rem' }}
        >
            ¡Quiero potenciar mi negocio!
        </CtaButton>
      </div>
    </ServiciosContainer>
  );
};

export default Servicios;
