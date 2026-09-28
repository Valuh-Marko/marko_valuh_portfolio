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
  speed = 1,
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
      url: item.url ? `${location}/${item.url}` : null,
    };
  });

  const top = useTransform(
    scrollYProgress,
    [0, 1],
    ["0rem", `-${5 * Math.floor(data.length / 2) * speed}rem`],
  );

  return (
    <div className={`c-stacking-cards${className ? ` ${className}` : ""}`}>
      <motion.div
        ref={container}
        // The cards' drift is a transform, so their layout boxes stay put.
        // Pull the content below up by the same amount so no blank space
        // opens under the last card. The outer wrapper shrinks with this
        // margin, so the track's box never extends the page past the footer.
        style={{ marginBottom: top }}
        className="c-stacking-cards__track"
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
    </div>
  );
};
