import React, { useEffect } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";

export const HeaderLink = ({ to, children, index, isOpen }) => {
  const variant = isOpen ? "open" : "closed";

  const width = {
    closed: {
      width: 0,
    },
    open: {
      width: "100%",
      transition: {
        duration: 1.2 * (index * 0.25),
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };

  useEffect(() => {}, [isOpen]);

  return (
    <Link to={to}>
      <motion.div animate={variant} variants={width} className="c-link">
        <span className="c-link__indicator">0{index}</span>
        <span className="c-link__text">{children}</span>
      </motion.div>
    </Link>
  );
};
