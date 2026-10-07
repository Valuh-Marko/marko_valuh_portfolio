import { motion, useScroll, useTransform } from "motion/react";
import { useLayoutEffect, useRef, useState } from "react";
import { Button } from "../../button/Button";

export const Card = ({ label, index, data, speed, long_desc, external = false }) => {
  const ref = useRef(null);
  const nextRef = useRef(null);

  // This card's height in px: once it sticks at the top, the next card
  // covers it over exactly that much scroll. Motion's scroll offsets take
  // px, so re-measure whenever the card resizes.
  const [height, setHeight] = useState(null);

  // Declared before useScroll so the next card is set when it measures.
  useLayoutEffect(() => {
    const el = ref.current;
    // The next card is the next sibling in the track. The last card has
    // nothing sliding over it, so it scrolls on as normal.
    nextRef.current = el.nextElementSibling;
    if (!nextRef.current) return;

    const observer = new ResizeObserver(() => setHeight(el.offsetHeight));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // From this card hitting the top until the next card lands on it. Once the
  // next card sticks, its offsetTop includes the sticky offset, so progress
  // holds at 1.
  const { scrollYProgress } = useScroll({
    target: nextRef,
    offset: height ? [`start ${height}px`, "start start"] : undefined,
  });
  // Keep drifting up at a fraction of the scroll speed while covered.
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `-${20 * speed}%`]);

  return (
    <motion.div
      ref={ref}
      style={height ? { y } : undefined}
      className="c-card-container"
    >
      <div className="c-section__label">
        {label}/00{index}
      </div>

      <div className="c-card__content">
        <h3 className={`c-card__title ${data.subtitle ? "" : "c-card__title--no-subtitle"}`}>
          {data.title}
        </h3>
        {data.subtitle && (
          <div className="c-card__subtitle">{data.subtitle}</div>
        )}
        <p className="c-card__excerpt">
          {long_desc ? data.excerpt_xl : data.excerpt}
        </p>
        {external ? (
          <>
            {data.external_url && (
              <Button label="Visit Website" blankTarget={true} to={data.external_url} />
            )}
            {data.caseStudy && <Button label="View Case Study" to={data.url} />}
          </>
        ) : (
          data.url && <Button label="Find out more" to={data.url} />
        )}
      </div>

      <figure className="c-card__visual">
        {data.image ? (
          <img
            src={data.image}
            alt={data.title}
            className="c-card__visual-img"
            loading="lazy"
          />
        ) : (
          <span className="c-card__visual-placeholder">Screenshot pending</span>
        )}
      </figure>
    </motion.div>
  );
};
