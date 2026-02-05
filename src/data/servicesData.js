
import { FaRocket, FaShoppingCart, FaLaptopCode, FaNetworkWired, FaCogs } from "react-icons/fa";

export const servicesData = {
  "landing-pages": {
    title: "Landing Pages que Convierten",
    heroTitle: "¿Querés Vender Más? Tu Negocio Necesita una Landing Page.",
    heroSubtitle: "Transformamos visitas en clientes con diseños optimizados para la venta.",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80", 
    painPoints: [
      {
        title: "¿Perdés dinero en publicidad?",
        description: "Enviar tráfico a una web lenta o confusa es tirar el dinero. Necesitás una página diseñada para vender."
      },
      {
        title: "¿No convertís visitas en clientes?",
        description: "Sin un llamado a la acción claro, los usuarios se van. Nosotros guiamos al usuario hacia la compra."
      },
      {
        title: "¿Tu web actual es lenta?",
        description: "La velocidad es clave. Nuestras landing pages cargan al instante para no perder ni un solo lead."
      }
    ],
    solution: {
      title: "Diseño Estratégico para Resultados Reales",
      description: "No solo hacemos páginas bonitas. Creamos herramientas de venta. Analizamos tu público, diseñamos con psicología de consumo y programamos para la máxima velocidad.",
      features: [
        "Diseño 100% Responsivo (Móvil/PC)",
        "Optimización de Carga Extrema (Core Web Vitals)",
        "Integración con Pixel de Facebook y Google Analytics",
        "Formularios de Contacto y Botones a WhatsApp",
        "Copywriting Persuasivo"
      ]
    },
    process: [
      { step: 1, title: "Análisis", desc: "Entendemos tu oferta y tu público objetivo." },
      { step: 2, title: "Diseño", desc: "Creamos un prototipo visual enfocado en la conversión." },
      { step: 3, title: "Desarrollo", desc: "Programamos con las últimas tecnologías." },
      { step: 4, title: "Lanzamiento", desc: "Publicamos y conectamos tus herramientas de medición." }
    ],
    ctaText: "¡Quiero una Landing que Venda!",
  },
  "tiendas-online": {
    title: "Tiendas Online",
    heroTitle: "Tu Sucursal Digital Abierta las 24 Horas",
    heroSubtitle: "Vendé tus productos a todo el país, sin límites y con total control.",
    heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    painPoints: [
      {
        title: "¿Dependés solo de tu local físico?",
        description: "No te limites a tu barrio. Llegá a clientes de todo el país con una tienda online profesional."
      },
      {
        title: "¿Cansado de responder precios por MD?",
        description: "Automatizá tus ventas. Que tus clientes vean precios, stock y compren directamente."
      },
      {
        title: "¿Las comisiones te comen la ganancia?",
        description: "Olvidate de las comisiones abusivas de los marketplaces. Tu tienda, tus reglas."
      }
    ],
    solution: {
      title: "E-commerce Profesional y Autoadministrable",
      description: "Creamos tiendas online robustas, seguras y fáciles de usar. Vas a poder cargar productos, gestionar pedidos y cobrar de forma segura.",
      features: [
        "Integración con Mercado Pago y otras pasarelas",
        "Cálculo de envíos (Correo Argentino, Andreani)",
        "Panel de control fácil de usar",
        "Gestión de Stock y Pedidos",
        "Diseño optimizado para móviles"
      ]
    },
    process: [
      { step: 1, title: "Estructura", desc: "Definimos categorías y flujo de compra." },
      { step: 2, title: "Diseño UX", desc: "Diseñamos una experiencia de compra fluida." },
      { step: 3, title: "Integraciones", desc: "Configuramos pagos y envíos." },
      { step: 4, title: "Capacitación", desc: "Te enseñamos a usar tu tienda al 100%." }
    ],
    ctaText: "¡Quiero Vender Online!",
  },
  "sitios-web": {
    title: "Sitios Web Personalizados",
    heroTitle: "Diferenciate de la Competencia con una Web Única",
    heroSubtitle: "Diseño y desarrollo web a medida que transmite la verdadera esencia de tu marca.",
    heroImage: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    painPoints: [
      {
        title: "¿Tu web se ve igual a las demás?",
        description: "Las plantillas genéricas no destacan. Necesitás una identidad digital propia y memorable."
      },
      {
        title: "¿Tu sitio actual no transmite confianza?",
        description: "La primera impresión cuenta. Un diseño amateur aleja a los clientes potenciales."
      },
      {
        title: "¿Limitaciones técnicas?",
        description: "Si tu web no puede hacer lo que necesitás, estás perdiendo oportunidades de negocio."
      }
    ],
    solution: {
      title: "Desarrollo Web Premium a Medida",
      description: "No usamos plantillas. Escribimos código limpio y eficiente para crear experiencias web únicas, rápidas y totalmente adaptadas a tus necesidades.",
      features: [
        "Diseño UI/UX Exclusivo",
        "Animaciones e Interacciones Modernas",
        "Arquitectura de Información Optimizada",
        "SEO Técnico Avanzado",
        "Totalmente Escalable"
      ]
    },
    process: [
      { step: 1, title: "Discovery", desc: "Investigamos tu marca y objetivos." },
      { step: 2, title: "Prototipado", desc: "Diseñamos la estructura y el flujo visual." },
      { step: 3, title: "Código ", desc: "Desarrollo frontend y backend a medida." },
      { step: 4, title: "Deploy", desc: "Puesta en producción y optimización." }
    ],
    ctaText: "¡Quiero una Web Exclusiva!",
  },
  "conectividad": {
    title: "Conectividad Empresarial",
    heroTitle: "Internet y Redes que No Se Cortan",
    heroSubtitle: "Infraestructura de red robusta para empresas que no pueden permitirse parar.",
    heroImage: "https://images.unsplash.com/photo-1544197150-b99a580bb7f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    painPoints: [
      {
        title: "¿WiFi lento en la oficina?",
        description: "La baja velocidad afecta la productividad de todo tu equipo. Solucionalo de raíz."
      },
      {
        title: "¿Problemas de seguridad?",
        description: "Redes vulnerables ponen en riesgo los datos de tu empresa. Asegurá tu infraestructura."
      },
      {
        title: "¿Desconexiones constantes?",
        description: "La inestabilidad cuesta dinero. Garantizamos uptime y rendimiento."
      }
    ],
    solution: {
      title: "Soluciones de Redes Profesionales",
      description: "Diseñamos e implementamos redes cableadas e inalámbricas de alto rendimiento y seguridad empresarial.",
      features: [
        "Cableado Estructurado Certificado",
        "Redes WiFi Mesh Corporativas",
        "Seguridad Perimetral (Firewalls)",
        "Enlaces Punto a Punto",
        "Monitoreo de Red"
      ]
    },
    process: [
      { step: 1, title: "Relevamiento", desc: "Visitamos y analizamos tu infraestructura." },
      { step: 2, title: "Diseño", desc: "Planificamos la topología de red ideal." },
      { step: 3, title: "Instalación", desc: "Montaje de equipos y cableado." },
      { step: 4, title: "Certificación", desc: "Pruebas de velocidad y estabilidad." }
    ],
    ctaText: "¡Mejorar mi Conectividad!",
  },
  "software-medida": {
    title: "Software a Medida",
    heroTitle: "Automatizá y Escalablá tu Negocio",
    heroSubtitle: "Sistemas de gestión personalizados para optimizar tus procesos y ahorrar tiempo.",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    painPoints: [
      {
        title: "¿Vivis entre miles de Excel?",
        description: "La información descentralizada genera errores y perdida de tiempo. Unificá todo."
      },
      {
        title: "¿Tu sistema actual te queda chico?",
        description: "Los software enlatados son rígidos. Necesitás un sistema que se adapte a vos, no al revés."
      },
      {
        title: "¿No tenés datos para decidir?",
        description: "Sin reportes claros, navegás a ciegas. Tomá decisiones basadas en datos reales."
      }
    ],
    solution: {
      title: "Desarrollo de Software Empresarial",
      description: "Creamos herramientas digitales que resuelven problemas específicos de tu operatoria. CRMs, ERPs, Dashboards y más.",
      features: [
        "Sistemas Web (Accesibles desde cualquier lugar)",
        "Automatización de Tareas Repetitivas",
        "Gestión de Clientes y Proveedores",
        "Reportes y Métricas en Tiempo Real",
        "Seguridad y Backup de Datos"
      ]
    },
    process: [
      { step: 1, title: "Consultoría", desc: "Entendemos tus procesos y dolores." },
      { step: 2, title: "Arquitectura", desc: "Diseñamos la base de datos y lógica." },
      { step: 3, title: "Desarrollo", desc: "Programación iterativa con demos constantes." },
      { step: 4, title: "Implementación", desc: "Puesta en marcha y capacitación al personal." }
    ],
    ctaText: "¡Automatizar mi Negocio!",
  },
};
