import { motion } from "motion/react";
import React from "react";

export const BackEndTech = ({ index }) => {
  return (
    <motion.div className="c-auxiliary-container">
      <div className="c-auxiliary__label">AS/00{index}</div>
      <div className="c-auxiliary-content">
        <h3 className="c-auxiliary-content__title">Backend and Database</h3>

        <div className="c-auxiliary-content-stack">
          <div className="c-auxiliary-content-stack__item">
            <span className="c-auxiliary-content-stack__item-indicator">
              01
            </span>
            <h5 className="c-auxiliary-content-stack__item-tech">NestJS</h5>
            <span className="c-auxiliary-content-stack__item-description">
              NestJS is a progressive Node.js framework for building efficient,
              scalable, and maintainable server-side applications, using modern
              JavaScript/TypeScript features and design patterns.
            </span>
          </div>
          <div className="c-auxiliary-content-stack__item">
            <span className="c-auxiliary-content-stack__item-indicator">
              02
            </span>
            <h5 className="c-auxiliary-content-stack__item-tech">PostgreSQL</h5>
            <span className="c-auxiliary-content-stack__item-description">
              PostgreSQL is a powerful, open-source relational database system
              known for its robustness, scalability, and support for advanced
              querying and ACID compliance.
            </span>
          </div>
          <div className="c-auxiliary-content-stack__item">
            <span className="c-auxiliary-content-stack__item-indicator">
              03
            </span>
            <h5 className="c-auxiliary-content-stack__item-tech">MongoDB</h5>
            <span className="c-auxiliary-content-stack__item-description">
              MongoDB is a NoSQL database that stores data in flexible,
              JSON-like documents, providing scalability and agility for
              applications that require high performance and rapid development
              cycles.
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
