import React, { Suspense, useMemo } from "react";
import "./tech-icon.scss";

const iconCache = new Map();

export const getLazyIcon = (tech) => {
  if (iconCache.has(tech)) return iconCache.get(tech);

  const map = {
    React: () => import("react-icons/fa").then((m) => ({ default: m.FaReact })),
    "React Router": () =>
      import("react-icons/fa").then((m) => ({ default: m.FaRoute })),
    "Framer Motion": () =>
      import("react-icons/si").then((m) => ({ default: m.SiFramer })),
    SCSS: () => import("react-icons/fa").then((m) => ({ default: m.FaSass })),
    "React Icons": () =>
      import("react-icons/fa").then((m) => ({ default: m.FaIcons })),
    JavaScript: () =>
      import("react-icons/di").then((m) => ({ default: m.DiJavascript })),
    "React.lazy": () =>
      import("react-icons/fa").then((m) => ({ default: m.FaCode })),
    Suspense: () =>
      import("react-icons/fa").then((m) => ({ default: m.FaSpinner })),
    Webpack: () =>
      import("react-icons/fa").then((m) => ({ default: m.FaCogs })),
    Vite: () => import("react-icons/si").then((m) => ({ default: m.SiVite })),
    "Create React App": () =>
      import("react-icons/fa").then((m) => ({ default: m.FaRocket })),
    Angular: () =>
      import("react-icons/fa").then((m) => ({ default: m.FaAngular })),
    "Next.js": () =>
      import("react-icons/si").then((m) => ({ default: m.SiNextdotjs })),
    "Nest.js": () =>
      import("react-icons/si").then((m) => ({ default: m.SiNestjs })),
    Docker: () =>
      import("react-icons/fa").then((m) => ({ default: m.FaDocker })),
    Vercel: () =>
      import("react-icons/si").then((m) => ({ default: m.SiVercel })),
    PHP: () => import("react-icons/fa").then((m) => ({ default: m.FaPhp })),
    Vagrant: () =>
      import("react-icons/fa").then((m) => ({ default: m.FaServer })),
    Figma: () => import("react-icons/fa").then((m) => ({ default: m.FaFigma })),
    "JSON-based content system": () =>
      import("react-icons/bs").then((m) => ({ default: m.BsFileEarmarkCode })),
      "Google Cloud Platform": () =>
    import("react-icons/di").then((m) => ({ default: m.DiGoogleCloudPlatform }))
  };

  const loader = map[tech];
  if (!loader) return null;

  const LazyIcon = React.lazy(loader);
  iconCache.set(tech, LazyIcon);
  return LazyIcon;
};

export const TechIcon = ({ tech }) => {
  const Icon = useMemo(() => getLazyIcon(tech));
  if (!Icon) return null;

  return (
    <Suspense fallback={<span>🔄</span>}>
      <div className="c-tech-icon">
        <Icon title={tech} size={56} />
        <div className="c-icon__title">{tech}</div>
      </div>
    </Suspense>
  );
};
