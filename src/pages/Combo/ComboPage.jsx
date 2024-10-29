// src/components/ComboPage.js
import React, { useRef } from "react";
import HeroSection from "../../components/ComboSections/HeroSection";
import SolutionSection from "../../components/ComboSections/SolutionSection";
import CTASection from "../../components/ComboSections/CtaSection";

const ComboPage = () => {
  const sectionsRef = useRef([]);

  const navigateToSection = (index) => {
    sectionsRef.current[index]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div ref={(el) => (sectionsRef.current[0] = el)}>
        <HeroSection navigateToSection={navigateToSection} />
      </div>
      <div ref={(el) => (sectionsRef.current[1] = el)}>
        <SolutionSection navigateToSection={navigateToSection} />
      </div>
      <div ref={(el) => (sectionsRef.current[2] = el)}>
        <CTASection />
      </div>
    </div>
  );
};

export default ComboPage;
