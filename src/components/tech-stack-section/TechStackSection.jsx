import React from "react";

import "./tech-stack-section.scss";

const STACK = [
  "Angular",
  "Next.js",
  "Nest.js",
  "TypeScript",
  "Tailwind",
  "MongoDB",
];

const ICON_SLUGS = {
  Angular: "angular",
  "Next.js": "nextdotjs",
  "Nest.js": "nestjs",
  TypeScript: "typescript",
  Tailwind: "tailwindcss",
  MongoDB: "mongodb",
};

export const TechStackSection = () => {
  return (
    <div className="container">
      <div className="c-section">
        {/* first column */}
        <span className="c-section__label">
          <span>/</span>
          <span>Tech Stack</span>
        </span>
        {/* second column */}
        <div className="c-section__column">
          <h3 className="c-section__title">
            Crafting efficient solutions <br /> with industry standard tools
          </h3>
        </div>
        <div
          className="c-section__column"
          style={{
            gridColumn: "2 / span 2",
          }}
        >
          <div className="c-section-icon-wrapper">
            {STACK.map((name) => (
              <div key={name} className="c-stack-tile">
                {ICON_SLUGS[name] && (
                  <img
                    src={`https://cdn.simpleicons.org/${ICON_SLUGS[name]}/0a0a0a`}
                    alt={name}
                    className="c-stack-tile__icon c-stack-tile__icon--lg"
                  />
                )}
                <span className="c-stack-tile__name">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
