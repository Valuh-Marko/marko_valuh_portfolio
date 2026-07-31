import { motion } from "motion/react";
import { revealVariants } from "./reveal-variants";
import "./text-reveal.scss";

// Same mask-slide reveal as TextReveal, for a single non-text child
// (e.g. a button) instead of split characters/words.
export const RevealMask = ({ children, index = 0 }) => (
  <span className="c-text-reveal__mask">
    <motion.span
      className="c-text-reveal__unit"
      initial="hidden"
      animate="show"
      custom={index}
      variants={revealVariants}
    >
      {children}
    </motion.span>
  </span>
);
