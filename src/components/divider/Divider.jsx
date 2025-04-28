import React from "react";
import { motion } from "motion/react";
import "./divider.scss";

export const Divider = ({ vertical, state, color }) => {
  const variant = state ? "invisible" : "visible";

  const opacity = {
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: [0.76, 0, 0.24, 1],
      },
    },

    invisible: {
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <motion.div
      style={{
        borderColor: color,
      }}
      animate={variant}
      variants={opacity}
      className={`c-divider ${
        vertical ? "c-divider--vertical" : "c-divider--horizontal"
      }`}
    />
  );
};
