import { motion } from "motion/react";
import { Button } from "../../button/Button";

export const Card = ({
  label,
  index,
  data,
  top,
  offset,
  long_desc,
  external = false,
}) => {
  return (
    <motion.div
      style={{ top: offset ?? `${(index - 1) * 5}rem`, y: top }}
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
