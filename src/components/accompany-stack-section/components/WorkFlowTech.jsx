import { motion } from "motion/react";
import React from "react";

export const WorkFlowTech = ({ index }) => {
  return (
    <motion.div className="c-auxiliary-container">
      <div className="c-auxiliary__label">AS/00{index}</div>
      <div className="c-auxiliary-content">
        <h3 className="c-auxiliary-content__title">Tools & Technologies</h3>

        <div className="c-auxiliary-content-stack">
          <div className="c-auxiliary-content-stack__item">
            <span className="c-auxiliary-content-stack__item-indicator">
              01
            </span>
            <h5 className="c-auxiliary-content-stack__item-tech">Docker</h5>
            <span className="c-auxiliary-content-stack__item-description">
              A tool for creating isolated, consistent environments, enabling
              smooth development and deployment across different systems without
              conflicts.
            </span>
          </div>
          <div className="c-auxiliary-content-stack__item">
            <span className="c-auxiliary-content-stack__item-indicator">
              02
            </span>
            <h5 className="c-auxiliary-content-stack__item-tech">
              GitHub / <br />
              GitLab
            </h5>
            <span className="c-auxiliary-content-stack__item-description">
              Version control platforms for managing code, enabling
              collaboration, and automating workflows with features like pull
              requests, CI/CD, and project tracking.
            </span>
          </div>
          <div className="c-auxiliary-content-stack__item">
            <span className="c-auxiliary-content-stack__item-indicator">
              03
            </span>
            <h5 className="c-auxiliary-content-stack__item-tech">
              Playwright / <br />
              Jest
            </h5>
            <span className="c-auxiliary-content-stack__item-description">
              Playwright is used for end-to-end testing across multiple
              browsers, while Jest provides a robust testing framework for unit
              and integration tests, ensuring code reliability and quality.
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
