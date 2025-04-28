import React from "react";
import { FaReact } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

import "./tech-stack-section.scss";

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
            Crafting efficient solutions <br /> with industry standard tools:
          </h3>
          <div className="c-section-icon-wrapper">
            <FaReact className="c-tech-icon" title="React" />
            <FaAngular className="c-tech-icon" title="Angular" />
            <SiTypescript className="c-tech-icon" title="Typescript" />
            <RiTailwindCssFill className="c-tech-icon" title="Tailwind" />
          </div>
        </div>
        {/* Third Column */}
        <span className="c-section__label c-section__label--alt">
          <span>/</span>
          <span>Front_End</span>
        </span>
      </div>
    </div>
  );
};
