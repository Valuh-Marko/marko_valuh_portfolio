import { motion } from "motion/react";
import React from "react";

export const UiUx = ({ index }) => {
  return (
    <motion.div className="c-auxiliary-container">
      <div className="c-auxiliary__label">AS/00{index}</div>
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
              Figma is a collaborative design tool used to create user
              interfaces, prototypes, and design systems directly in the
              browser.
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
              Framer Motion is a powerful animation library for React that makes
              it easy to add smooth, interactive transitions and gestures.
            </span>
          </div>
          <div className="c-auxiliary-content-stack__item">
            <span className="c-auxiliary-content-stack__item-indicator">
              03
            </span>
            <h5 className="c-auxiliary-content-stack__item-tech">SCSS</h5>
            <span className="c-auxiliary-content-stack__item-description">
              SCSS is a CSS preprocessor that extends regular CSS with
              variables, nesting, mixins, and other handy features to make
              stylesheets more maintainable.
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
