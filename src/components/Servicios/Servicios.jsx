import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Reveal, RevealItem } from "../motion";
import { staggerContainer, revealViewport, hoverLift } from "../../lib/motion";
import {
  ServiciosContainer,
  ServiciosGrid,
  IconWrapper,
  CardTitle,
  CardText,
  CtaButton
} from "./ServiciosStyles";
import { TiltCard } from "./TiltCard";
import {
  FaRocket,
  FaShoppingCart,
  FaLaptopCode,
  FaNetworkWired,
  FaCogs,
} from "react-icons/fa";
import SEO from "../SEO/SEO";

const serviciosData = [
  {
    id: 1,
    title: "Landing Pages que convierten",
    slug: "landing-pages",
    icon: <FaRocket />,
    description:
      "Transformamos tu idea en una página profesional optimizada para captar clientes y generar resultados.",
  },
  {
    id: 2,
    title: "Tiendas Online",
    slug: "tiendas-online",
    icon: <FaShoppingCart />,
    description:
      "Creamos tu tienda lista para vender con medios de pago, integración a redes y atención por WhatsApp.",
  },
  {
    id: 3,
    title: "Sitios Web Personalizados",
    slug: "sitios-web",
    icon: <FaLaptopCode />,
    description:
      "Diseñamos sitios únicos que reflejan la esencia de tu marca, transmitiendo confianza y profesionalismo.",
  },
  {
    id: 6,
    title: "Conectividad Empresarial",
    slug: "conectividad",
    icon: <FaNetworkWired />,
    description:
      "Diseñamos redes empresariales seguras y rápidas. Conectá tus equipos sin interrupciones.",
  },
  {
    id: 7,
    title: "Software a Medida",
    slug: "software-medida",
    icon: <FaCogs />,
    description:
      "Desarrollamos soluciones personalizadas que optimizan la gestión y automatizan tus procesos.",
  },
];

const Servicios = () => {
  return (
    <ServiciosContainer id="servicios">
      
      <SEO 
        title="Servicios de Diseño Web | Astral Vision"
        description="Servicios de desarrollo web, diseño UX/UI, SEO y mantenimiento. Soluciones a medida para startups y empresas."
      />

      <Reveal as="h2">
        <span>Servicios</span> que impulsan tu negocio
      </Reveal>
      <ServiciosGrid
        as={motion.div}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        variants={staggerContainer}
      >
        {serviciosData.map((servicio) => (
          <RevealItem
            key={servicio.id}
            whileHover={hoverLift}
            style={{ height: '100%' }}
          >
            <Link to={`/servicios/${servicio.slug}`} style={{ textDecoration: 'none', height: '100%', display: 'block' }}>
              <TiltCard>
                <div style={{textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                  <IconWrapper>{servicio.icon}</IconWrapper>
                  <CardTitle>{servicio.title}</CardTitle>
                  <CardText>{servicio.description}</CardText>
                  <span style={{ marginTop: 'auto', color: 'var(--third)', fontSize: '0.9rem', fontWeight: 'bold' }}>Ver más &rarr;</span>
                </div>
              </TiltCard>
            </Link>
          </RevealItem>
        ))}
      </ServiciosGrid>

      <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center' }}>
        <CtaButton
            href="https://wa.me/541176513862"
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
