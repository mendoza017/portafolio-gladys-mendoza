import { Phone } from "lucide-react";
import { LinkedInIcon } from "@/components/LinkedInIcon";
import { WHATSAPP_LINK } from "@/lib/constants";

export const SELF_SUMMARY_LABEL = "RESUMEN";
export const EXPERIENCE_LABEL = "Experiencia";
export const EDUCATION_LABEL = "Educación";
export const PROFILES_LABEL = "Perfiles";
export const SOCIAL_MEDIA_LABEL = "Redes sociales";

export const selfSummary =
  "Comunicadora Social con 4 años de experiencia liderando estrategias de comunicación digital para emprendimientos, fundaciones y empresas. Apasionada por el trabajo social y comunitario, con enfoque estratégico, organizado y orientado a resultados.";

export const experienceList = [
  {
    date: "Mar 2023 - Jun 2026",
    position: "Community Manager y apoyo en proyectos sociales y culturales",
    company: "Fundación Dame Esos 5",
    duties: [
      "Creación y edición de contenido para los proyectos sociales realizados por la fundación.",
      "Planeación de contenidos, gestión de redes sociales y comunicación de iniciativas ante la comunidad.",
      "Proyectos: Portal Cultural (2025 y 2026), Programa Expresarte (2024 y 2025), Bocetos de Aprendiz (2025), Club de Pintura para Aficionados (2024), Atrapa Sueños (2025).",
    ],
  },
  {
    date: "Feb 2024 - May 2026",
    position: "Líder de Comunicaciones",
    company: "Colectivo Guerreras Yurbaco",
    duties: [
      "Creación de la parrilla orgánica.",
      "Grabación de los proyectos realizados por el colectivo.",
      "Investigar y analizar las tendencias de RRSS.",
      "Diseño de fotografía y videos para la Tienda Turística y Artesanal Guerreras Yurbaco.",
    ],
  },
  {
    date: "Jul 2024 - Jul 2025",
    position: "Community Manager",
    company: "Invercolombia",
    duties: [
      "Creación de parrilla orgánica de contenidos.",
      "Investigación y análisis de tendencias de redes sociales.",
      "Monitoreo y actualización de cuentas en RRSS.",
    ],
  },
  {
    date: "Dic 2024 - May 2025",
    position: "Community Manager Freelancer",
    company: "Fundación Lili Grande",
    duties: [
      "Gestión de redes sociales y creación de contenido.",
      "Apoyo a campañas, eventos y lanzamientos.",
      "Coordinación de identidad de marca y línea editorial.",
    ],
  },
  {
    date: "Dic 2024 - May 2025",
    position: "Community Manager Freelancer",
    company: "Parxxe Cocktail",
    duties: [
      "Creación de contenido y manejo de redes sociales.",
      "Dirección de contenidos.",
      "Investigación e implementación de tendencias.",
    ],
  },
  {
    date: "Jun 2024 - Nov 2024",
    position: "Community Manager Freelancer",
    company: "Coralina Construcciones",
    duties: [
      "Gestión de redes sociales y creación de contenido.",
      "Planeación y ejecución de estrategias de comunicación digital.",
      "Elaboración de informes.",
    ],
  },
  {
    date: "Feb 2026 - May 2026",
    position: "Community Manager Freelancer",
    company: "DTF Studio Turbaco",
    duties: [
      "Creación de contenido y manejo de redes sociales.",
      "Grabación y edición en CapCut y Canva.",
      "Monitoreo y actualización de cuentas en RRSS.",
    ],
  },
  {
    date: "Actual",
    position: "Community Manager Freelancer",
    company: "Agencia creativa Hexakom SAS",
    duties: [
      "Creación de parrilla orgánica.",
      "Investigar e implementar tendencias.",
      "Evaluación y monitoreo de pautas en Facebook ADS.",
    ],
  },
  {
    date: "Nov 2022 - Dic 2023",
    position: "Estratega de Contenido Digital",
    company: "BavPublicidad",
    duties: [
      "Apoyo en crear estrategia de RRSS.",
      "Investigar e implementar las tendencias de RRSS.",
      "Monitoreo en la actualización de las cuentas.",
      "Generación de contenido y evaluación del diseño de email marketing y blog.",
      "Acompañamiento, evaluación, control y monitoreo de pautas publicitarias.",
      "Manejo de Canva y CapCut.",
    ],
  },
  {
    date: "Feb 2021 - Oct 2021",
    position: "Community Manager",
    company: "Zona Norte El Periódico",
    duties: [
      "Creación de contenido y manejo de RRSS.",
      "Redacción y organización de notas informativas.",
      "Actualización de la lista de contactos de las fuentes.",
    ],
  },
];

export const educationList = [
  {
    date: "2023",
    title: "Comunicación Social",
    entity: "Universidad de Cartagena.",
  },
  {
    date: "2012",
    title: "Bachiller Académico",
    entity: "Institución Educativa Crisanto Luque",
  },
];

export const socialMediaList = [
  {
    icon: <LinkedInIcon className="w-5 h-5" />,
    link: "https://www.linkedin.com/in/gladys-paola-mendoza-d%C3%ADaz-/",
    label: "LinkedIn",
  },
  {
    icon: <Phone className="w-5 h-5" />,
    link: WHATSAPP_LINK,
    label: "WhatsApp",
  },
];
