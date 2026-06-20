import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import heroImg from "../../assets/images/heading.webp";
import { Button } from "../button/Button";
import { useWindowSize } from "../../hooks/useWindowSize";
import "./hero-section.scss";

export const HeroSection = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const { height } = useWindowSize();
  const y = useTransform(scrollYProgress, [0, 1], [0, height / 3]);

  return (
    <div ref={container} className="c-hero">
      {/* Parallax background */}
      <motion.img
        className="c-hero__bg"
        src={heroImg}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        style={{ y }}
      />

      {/* Bottom rail */}
      <div className="c-hero__rail c-hero__rail--bot">
        <div className="container c-hero__rail-inner">
          <span>Novi Sad · Serbia</span>
          <span>Portfolio © 2026</span>
        </div>
      </div>

      {/* Main content */}
      <div className="c-hero__wrap">
        <div className="container c-hero__inner">
          <h1 className="c-hero__title">
            Where Code Meets Canvas Frontend Engineering with an{" "}
            <em className="c-hero__accent">Artistic Touch</em>
          </h1>

          <div className="c-hero__row">
            <div className="c-hero__copy">
              <p className="c-hero__sub">
                I bring solid frontend engineering skills and a sharp eye for
                UI/UX to craft seamless digital experiences.
              </p>
              <div className="c-hero__buttons">
                <Button
                  label="Work Experience"
                  color="white"
                  variant="filled"
                  to="/work-experience"
                />
                <Button
                  label="See my projects"
                  color="white"
                  variant="transparent"
                  to="/projects"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
