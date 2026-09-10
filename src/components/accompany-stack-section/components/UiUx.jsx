import { motion } from "motion/react";
import React from "react";

export const UiUx = ({ index }) => {
  return (
    <motion.div className="c-auxiliary-container">
      <div className="c-section__label">AS/00{index}</div>
      <div className="c-auxiliary-content">
        <h3 className="c-auxiliary-content__title">
          User Interface and Experience
        </h3>

        <div className="c-auxiliary-content-stack">
          <div className="c-auxiliary-content-stack__item">
            <span className="c-auxiliary-content-stack__item-indicator">
              01
            </span>
            <h5 className="c-auxiliary-content-stack__item-tech">Figma</h5>
            <span className="c-auxiliary-content-stack__item-description">
              Where the designs arrive. I live in the inspect panel, pulling
              spacing and type scales straight into the component library.
            </span>
          </div>
          <div className="c-auxiliary-content-stack__item">
            <span className="c-auxiliary-content-stack__item-indicator">
              02
            </span>
            <h5 className="c-auxiliary-content-stack__item-tech">
              Framer <br />
              Motion
            </h5>
            <span className="c-auxiliary-content-stack__item-description">
              The animation library behind most of the motion on this site.
              Transitions declared in the component, not in a timeline
              somewhere else.
            </span>
          </div>
          <div className="c-auxiliary-content-stack__item">
            <span className="c-auxiliary-content-stack__item-indicator">
              03
            </span>
            <h5 className="c-auxiliary-content-stack__item-tech">SCSS</h5>
            <span className="c-auxiliary-content-stack__item-description">
              Variables, nesting and mixins. Enough structure to keep a large
              stylesheet navigable without moving styling into JavaScript.
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
