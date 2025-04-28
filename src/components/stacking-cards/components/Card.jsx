import { motion } from "motion/react";
import React, { useEffect, useState } from "react";
import { Button } from "../../button/Button";

const images = import.meta.glob("../../../assets/images/*.svg");

const loadImage = async (index) => {
  const path = `../../../assets/images/${index}.svg`;
  const importer = images[path];
  if (importer) {
    const module = await importer();
    return module.default;
  }
  return null;
};

export const Card = ({ label, index, data, top, long_desc }) => {
  const [src, setSrc] = useState(null);

  useEffect(() => {
    loadImage(index).then(setSrc);
  }, [index]);

  return (
    <motion.div
      style={{
        top: `${(index - 1) * 5}rem`,
        y: top,
      }}
      className="c-card-container"
    >
      <div className="c-card__label">
        {label}/00{index}
      </div>
      <div className="c-card__content">
        <h3 className="c-card__title">{data.title}</h3>
        <p className="c-card__excerpt">
          {long_desc ? data.excerpt_xl : data.excerpt}
        </p>
        <Button label="Find out more" to={data.url} />
      </div>
      <div className="c-card__img-holder">
        <img className="c-card__img" src={src} alt="card-img" />
      </div>
    </motion.div>
  );
};
