import { motion } from "motion/react";
import { revealVariants } from "./reveal-variants";
import "./text-reveal.scss";

// Staggered mask reveal, à la GSAP SplitText. Splits `text` into
// characters or words and animates each one in on mount, clipped by
// its own mask so it appears out of nowhere rather than fading in.
export const TextReveal = ({
  text,
  as = "span",
  splitBy = "char",
  offset = 0,
  className,
  unitClassName,
}) => {
  const MotionTag = motion[as];
  const units = splitBy === "word" ? text.split(" ") : [...text];

  return (
    <MotionTag
      className={className}
      aria-label={text}
      initial="hidden"
      animate="show"
    >
      <span className="c-text-reveal" aria-hidden="true">
        {units.map((unit, i) => (
          <span key={offset + i} className="c-text-reveal__mask">
            <motion.span
              className={`c-text-reveal__unit${unitClassName ? ` ${unitClassName}` : ""}`}
              custom={offset + i}
              variants={revealVariants}
            >
              {splitBy === "char" && unit === " " ? " " : unit}
              {splitBy === "word" && i < units.length - 1 ? " " : null}
            </motion.span>
          </span>
        ))}
      </span>
    </MotionTag>
  );
};
