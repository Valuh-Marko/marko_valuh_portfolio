import { motion } from "motion/react";
import React from "react";

export const WorkFlowTech = ({ index }) => {
  return (
    <motion.div className="c-auxiliary-container">
      <div className="c-section__label">AS/00{index}</div>
      <div className="c-auxiliary-content">
        <h3 className="c-auxiliary-content__title">Tools & Technologies</h3>

        <div className="c-auxiliary-content-stack">
          <div className="c-auxiliary-content-stack__item">
            <span className="c-auxiliary-content-stack__item-indicator">
              01
            </span>
            <h5 className="c-auxiliary-content-stack__item-tech">Docker</h5>
            <span className="c-auxiliary-content-stack__item-description">
              The same environment on my machine and in production, which is
              how "works on my machine" stops being an explanation anyone
              accepts.
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
              Where the code lives, where review happens, and where CI runs.
              Most standards I introduce to a team end up as a pipeline step
              here.
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
              Playwright for end-to-end runs across browsers, Jest for units
              and integration. Both exist so that a refactor is a decision
              rather than a gamble.
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
