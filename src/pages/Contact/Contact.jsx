import ContactForm from "../../components/ContactForm/ContactForm";
import styled from "styled-components";
import SocialContact from "../../components/SocialContact/SocialContact";
import SEO from "../../components/SEO/SEO";
import { Canvas } from "@react-three/fiber";
import { Stars, Sparkles, Cloud } from "@react-three/drei";

const ContactContainer = styled.section`
  width: 100%;
  min-height: 90vh ;
  display: flex;
  flex-direction: column ;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 100;
  padding: 80px 20px 40px;
  overflow: hidden;

  h2 {
    font-family: var(--font-sans);
    font-weight: 700;
    font-size: 3rem;
    letter-spacing: -0.02em;
    color: white;
    text-align: center;
    margin-top: 2rem;
    position: relative;
    z-index: 10;
    text-shadow: 0 0 10px rgba(0, 180, 216, 0.5);
  }

  @media (max-width: 768px) {
    padding: 110px 1.5rem 40px;
    h2 {
      font-size: 2.2rem;
      margin-top: 0.5rem;
    }
  }
`;

const Subtitle = styled.p`
  font-family: var(--font-sans);
  background: linear-gradient(90deg, #ffffff, #00b4d8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.15rem;
  line-height: 1.5;
  max-width: 650px;
  font-weight: 500;
  margin-top: 0.8rem;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;
  z-index: 10;
  padding: 0 1rem;
  
  @supports (-webkit-background-clip: text) {
    background: linear-gradient(90deg, #ffffff, #00b4d8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const BackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background: radial-gradient(circle at center, #0b0c15 0%, #000000 100%); /* Deep space base */
  
  canvas {
    width: 100% !important;
    height: 100% !important;
  }
`;

const Contact = ({ useSEO = true }) => {
  return (
    <ContactContainer>
      <BackgroundWrapper>
        <Canvas camera={{ position: [0, 0, 1] }}>
          <ambientLight intensity={0.5} />
          {/* Deep dense starfield */}
          <Stars 
            radius={100} 
            depth={50} 
            count={7000} 
            factor={4} 
            saturation={0} 
            fade 
            speed={1} 
          />
          {/* Cosmic Dust - Side Nebulas (Framing the content) */}
          <Cloud 
             opacity={0.2} 
             speed={0.2} 
             width={30} 
             depth={2} 
             segments={20} 
             position={[-18, 0, -15]} 
             color="#48cae4" 
           />
           <Cloud 
             opacity={0.2} 
             speed={0.2} 
             width={30} 
             depth={2} 
             segments={20} 
             position={[18, 0, -15]} 
             color="#7209b7" 
           />
           
           {/* Top and Bottom ambient dust (Far from text) */}
           <Cloud 
             opacity={0.15} 
             speed={0.1} 
             width={40} 
             depth={2} 
             segments={20} 
             position={[0, 12, -20]} 
             color="#560bad" 
           />
           <Cloud 
             opacity={0.15} 
             speed={0.1} 
             width={40} 
             depth={2} 
             segments={20} 
             position={[0, -12, -20]} 
             color="#4361ee" 
           />
          {/* Floating magical particles */}
          <Sparkles 
            count={200} 
            scale={10} 
            size={2} 
            speed={0.4} 
            opacity={0.5} 
            color="#00b4d8"
          />
        </Canvas>
      </BackgroundWrapper>

      {useSEO && (
        <SEO 
          title="Contacto | Astral Vision"
          description="¡Hablemos de tu proyecto! Contáctanos para cotizaciones de sitios web, tiendas virtuales y estrategias digitales."
        />
      )}

      <h2>Conectá con nosotros</h2>
      <Subtitle>¿Listo para escalar las ventas de tu negocio? Hablemos hoy mismo y armamos tu propuesta.</Subtitle>
      <div style={{ position: 'relative', zIndex: 10 }}>
        <SocialContact />
      </div>
    </ContactContainer>
  );
};

export default Contact;
