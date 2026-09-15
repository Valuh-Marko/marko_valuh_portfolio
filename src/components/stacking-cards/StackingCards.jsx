import { motion, useScroll, useTransform } from "motion/react";
import { useLayoutEffect, useRef, useState } from "react";
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
  // Sticky offset per card (px): the summed header heights of the cards
  // above it, so each card pins right under the previous card's title.
  const [offsets, setOffsets] = useState([]);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
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

  useLayoutEffect(() => {
    const el = container.current;
    if (!el) return;

    const measure = () => {
      const cards = [...el.querySelectorAll(".c-card-container")];
      let acc = 0;
      setOffsets(
        cards.map((card) => {
          const offset = acc;
          // Header = everything above the excerpt: label, title, subtitle
          // when present, and the 3rem margin under whichever comes last.
          const excerpt = card.querySelector(".c-card__excerpt");
          acc +=
            excerpt.getBoundingClientRect().top -
            card.getBoundingClientRect().top;
          return offset;
        }),
      );
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [data]);

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
        {parsedData.map((item, i) => (
          <Card
            label={label}
            index={item.id}
            data={item}
            top={top}
            offset={offsets[i]}
            key={item.id}
            long_desc={long_desc}
            external={external}
          />
        ))}
      </motion.div>
    </div>
  );
};
