import { motion } from "motion/react";
import React from "react";

export const BackEndTech = ({ index }) => {
  return (
    <motion.div className="c-auxiliary-container">
      <div className="c-section__label">AS/00{index}</div>
      <div className="c-auxiliary-content">
        <h3 className="c-auxiliary-content__title">Backend and Database</h3>

        <div className="c-auxiliary-content-stack">
          <div className="c-auxiliary-content-stack__item">
            <span className="c-auxiliary-content-stack__item-indicator">
              01
            </span>
            <h5 className="c-auxiliary-content-stack__item-tech">NestJS</h5>
            <span className="c-auxiliary-content-stack__item-description">
              What I reach for on the Node side. Modules, dependency injection
              and decorators give a backend the same shape a large Angular app
              has, which is most of why I picked it.
            </span>
          </div>
          <div className="c-auxiliary-content-stack__item">
            <span className="c-auxiliary-content-stack__item-indicator">
              02
            </span>
            <h5 className="c-auxiliary-content-stack__item-tech">PostgreSQL</h5>
            <span className="c-auxiliary-content-stack__item-description">
              My default database. Relational, strict about constraints, and
              willing to enforce the rules the application layer would
              eventually forget.
            </span>
          </div>
          <div className="c-auxiliary-content-stack__item">
            <span className="c-auxiliary-content-stack__item-indicator">
              03
            </span>
            <h5 className="c-auxiliary-content-stack__item-tech">MongoDB</h5>
            <span className="c-auxiliary-content-stack__item-description">
              Document storage for the cases where the shape of the data keeps
              moving and a migration per change would cost more than it is
              worth.
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
