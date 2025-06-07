import React, { useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import { useScrambleText } from "../../hooks/useScrambleText";
import { FaArrowRight } from "react-icons/fa";
import "./button.scss";
import { Link } from "react-router";

export const Button = ({
  label,
  color = "black",
  variant = "transparent",
  onClick,
  selected = false,
  to,
  blankTarget = false,
}) => {
  const [text, scramble] = useScrambleText(label);
  const ref = useRef(null);
  const isInView = useInView(ref);

  const visualVariant = selected
    ? variant === "filled"
      ? "transparent"
      : "filled"
    : variant;

  useEffect(() => {
    scramble();
  }, [isInView, scramble]);

  if (to) {
    return blankTarget ? (
      <a href={to} target="_blank">
        <motion.div
          ref={ref}
          className={`c-button c-button--${visualVariant} c-button--${visualVariant}--${color}`}
          onMouseEnter={() => scramble()}
        >
          <span>{text}</span>
          <FaArrowRight className="c-button-icon" />
        </motion.div>
      </a>
    ) : (
      <Link to={to}>
        <motion.div
          ref={ref}
          className={`c-button c-button--${visualVariant} c-button--${visualVariant}--${color}`}
          onMouseEnter={() => scramble()}
        >
          <span>{text}</span>
          <FaArrowRight className="c-button-icon" />
        </motion.div>
      </Link>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={`c-button c-button--${visualVariant} c-button--${visualVariant}--${color} ${
        selected && "selected"
      }`}
      onMouseEnter={() => scramble()}
      onClick={onClick}
    >
      <span>{text}</span>
    </motion.div>
  );
};
