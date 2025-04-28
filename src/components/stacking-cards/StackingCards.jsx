import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";
import { Card } from "./components/Card";
import "./stacking-cards.scss";

export const StackingCards = ({ response, label, className }) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const { data } = response;

  const top = useTransform(
    scrollYProgress,
    [0, 1],
    ["0rem", `-${5 * Math.floor(data.length / 2)}rem`]
  );

  return (
    <motion.div
      ref={container}
      className={`c-stacking-cards ${className && className}`}
    >
      {data.map((item) => (
        <Card
          label={label}
          index={item.id}
          data={item}
          top={top}
          key={item.id}
        />
      ))}
    </motion.div>
  );
};
