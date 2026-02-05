
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { servicesData } from "../../data/servicesData";
import {
  PageContainer,
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  CTAButton,
  Section,
  SectionTitle,
  GridThree,
  Card,
  SolutionSection,
  VisualContainer,
  FloatingIconWrapper,
  FeatureList,
  ProcessStep,
  FinalCTA
} from "./ServiceLandingStyles";
import SEO from "../../components/SEO/SEO";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";
import { FaRocket, FaShoppingCart, FaLaptopCode, FaNetworkWired, FaCogs } from "react-icons/fa";

const iconMap = {
  "landing-pages": <FaRocket />,
  "tiendas-online": <FaShoppingCart />,
  "sitios-web": <FaLaptopCode />,
  "conectividad": <FaNetworkWired />,
  "software-medida": <FaCogs />,
};

const ServiceLanding = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = servicesData[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <PageContainer>
        <Navbar />
        <div style={{ height: "80vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <h2>Servicio no encontrado</h2>
        </div>
        <Footer />
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <SEO 
        title={`${service.title} | Astral Vision`}
        description={service.heroSubtitle}
        image={service.heroImage}
      />
      
      {/* <Navbar /> */}

      <HeroSection bgImage={service.heroImage}>
        <HeroContent>
          <HeroTitle>{service.heroTitle}</HeroTitle>
          <HeroSubtitle>{service.heroSubtitle}</HeroSubtitle>
          <CTAButton href="https://wa.me/541176513862" target="_blank" rel="noopener noreferrer">
            {service.ctaText}
          </CTAButton>
        </HeroContent>
      </HeroSection>

      <Section>
        <SectionTitle>¿Por qué <span>elegirnos?</span></SectionTitle>
        <GridThree>
          {service.painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card>
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </Card>
            </motion.div>
          ))}
        </GridThree>
      </Section>

      <Section>
        <SolutionSection>
          <div>
            <SectionTitle style={{ textAlign: "left", marginBottom: "2rem" }}>
              {service.solution.title}
            </SectionTitle>
            <p style={{ color: "#ccc", lineHeight: "1.8", fontSize: "1.1rem" }}>
              {service.solution.description}
            </p>
            <FeatureList>
              {service.solution.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </FeatureList>
          </div>
          
          <VisualContainer>
            <FloatingIconWrapper>
               {iconMap[slug] || <FaRocket />}
            </FloatingIconWrapper>
          </VisualContainer>

        </SolutionSection>
      </Section>

      <Section>
        <SectionTitle>¿Cómo <span>trabajamos?</span></SectionTitle>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {service.process.map((step, index) => (
            <ProcessStep key={index}>
              <span className="step-number">0{step.step}</span>
              <div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            </ProcessStep>
          ))}
        </div>
      </Section>

      <FinalCTA>
        <h2>¿Listo para empezar?</h2>
        <CTAButton href="https://wa.me/541176513862" target="_blank" rel="noopener noreferrer">
          Solicitar Presupuesto
        </CTAButton>
      </FinalCTA>

      <Footer />
    </PageContainer>
  );
};

export default ServiceLanding;
