import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Card } from "./components/Card";
import "./stacking-cards.scss";

export const StackingCards = ({
  response,
  label,
  className,
  long_desc,
  external = false,
}) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const { data, location } = response;

  const parsedData = data.map((item) => {
    return {
      ...item,
      url: `${location}/${item.url}`,
    };
  });

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
      {parsedData.map((item) => (
        <Card
          label={label}
          index={item.id}
          data={item}
          top={top}
          key={item.id}
          long_desc={long_desc}
          external={external}
        />
      ))}
    </motion.div>
  );
};
