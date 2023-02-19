import { FeaturesCard } from "./FeaturesCard";
import {
  GlobeIcon,
  DesktopComputerIcon,
  CodeIcon,
  SupportIcon,
  FastForwardIcon,
  RefreshIcon,
} from "@heroicons/react/outline";

const FeaturesContent = [
  {
    id: 1,
    title: "Sitios web personalizados",
    description:
      "Crea sitios web únicos y adaptados a las necesidades de cada proyecto.",
    icon: GlobeIcon
  },
  {
    id: 2,
    title: "Soporte y acompañamiento",
    description:
      "Recibe atención personalizada y acompañamiento continuo durante todo el proceso.",
    icon: SupportIcon
  },
  {
    id: 3,
    title: "Diseño adaptable",
    description:
      "Crea diseños responsivos y adaptables a diferentes dispositivos y tamaños de pantalla.",
    icon: DesktopComputerIcon
  },
  {
    id: 4,
    title: "Experiencia del usuario",
    description:
      "Diseña sitios web con una experiencia de usuario amigable y eficiente.",
    icon: FastForwardIcon
  },
  {
    id: 5,
    title: "Optimización web",
    description:
      "Mejora el rendimiento del sitio web con técnicas de optimización y velocidad de carga.",
    icon: RefreshIcon
  },
  {
    id: 6,
    title: "Proyectos prácticos y reales",
    description:
      "Aprende a través de proyectos prácticos y reales, demostrando tus habilidades y competencias.",
    icon: CodeIcon
  },
];

export const FeaturesList = () => {
  return (
    <section id="features">
      <h2 className="text-center text-orange-700 text-4xl font-bold mt-10 mb-5">
        ¿Estás listo para descubrir el mundo de la programación?{" "}
      </h2>
      <p className="text-center text-xl font-bold mb-20 max-w-4xl mx-auto">
        Con mi experiencia en implementación de estrategias de marketing digital
        y desarrollo de aplicaciones web, te explicaré conceptos complejos de
        manera clara y sencilla
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center pb-10 sm:px-4">
        {FeaturesContent.map(({ description, id, title, icon }) => {
          return (
            <FeaturesCard
              key={id}
              title={title}
              description={description}
              icon={icon}
            />
          );
        })}
      </ul>
    </section>
  );
};
