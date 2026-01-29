import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "Astral Vision | Diseño Web Profesional", 
  description = "Agencia de diseño web y desarrollo de software. Creamos sitios web modernos, tiendas online y aplicaciones a medida. Potencia tu negocio con nosotros.", 
  name = "Astral Vision", 
  type = "website",
  image = "/LogoAstral.webp",
  url,
  noindex = false
}) => {
  const siteUrl = url || window.location.href;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      {noindex && <meta name="robots" content="noindex, follow" />}
      {!noindex && <link rel="canonical" href={siteUrl} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={name} />
      <meta property="og:locale" content="es_ES" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": name,
          "url": "https://www.astralvisionestudio.com/",
          "logo": "https://www.astralvisionestudio.com/LogoAstral.webp",
          "image": "https://www.astralvisionestudio.com/LogoAstral.webp",
          "description": description,
          "address": {
             "@type": "PostalAddress",
             "addressCountry": "AR" 
          },
          "priceRange": "$$$"
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
