import React from "react";
import { FaInstagram, FaFacebook, FaGoogle } from "react-icons/fa";
import { SiWhatsapp, SiGmail } from "react-icons/si";
import { SocialContactWrapper } from "./SocialContactStyles";

const SocialContact = () => {
  const links = [
    { href:"https://wa.me/541122684234?text=Hola%20Astral%20Vision!%20Quiero%20más%20información%20sobre%20sus%20servicios.", icon: <SiWhatsapp />, color: "#25D366", label: "WhatsApp" },
    { href: "https://www.instagram.com/astralvisionco/", icon: <FaInstagram />, color: "#E4405F", label: "Instagram" },
    { href: "https://www.facebook.com/profile.php?id=61573859531556", icon: <FaFacebook />, color: "#1877F2", label: "Facebook" },
    { href: "mailto:astralvisionestudio@gmail.com", icon: <SiGmail />, color: "#EA4335", label: "Gmail" },
    // { href: "https://maps.app.goo.gl/MuDzaEkscywn51hK8", icon: <FaGoogle />, color: "#4285F4", label: "Ubicación" },
  ];

  return (
    <SocialContactWrapper>
      {links.map(({ href, icon, color, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          title={label}
          style={{ "--hover-color": color }}
        >
          {icon}
          <span>{label}</span>
        </a>
      ))}
    </SocialContactWrapper>
  );
};

export default SocialContact;
