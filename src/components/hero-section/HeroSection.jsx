import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";
import heroImg from "../../assets/images/heading.webp";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Button } from "../button/Button";
import "./hero-section.scss";

export const HeroSection = () => {
  const heroContainer = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroContainer,
    offset: ["start start", "end start"],
  });
  const { height } = useWindowSize();
  const y = useTransform(heroScroll, [0, 1], [0, height / 2]);

  return (
    <div ref={heroContainer} className="c-hero">
      <div className="c-hero-container container">
        <h1 className="c-hero__title">
          Where Code Meets Canvas -
          <br />
          Frontend Engineering with an Artistic Touch
        </h1>
        <div className="c-hero-details">
          <h3 className="c-hero-subtitle">
            I bring solid frontend engineering skills and a sharp eye for UI/UX
            to craft seamless digital experiences.
          </h3>
          <Button color="white" label={"See my projects"} to="/projects" />
        </div>
      </div>

      {/* Background Paralax Image */}
      <motion.img
        className="c-hero-img"
        src={heroImg}
        alt="hero_img"
        style={{
          y: y,
        }}
      />
    </div>
  );
};
