import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Button } from "../button/Button";
import { useFlicker } from "../../hooks/useFlicker";
import { RevealMask } from "../text-reveal/RevealMask";
import { TextReveal } from "../text-reveal/TextReveal";
import { Tooltip } from "../tooltip/Tooltip";
import { HeroBackground } from "./components/HeroBackground";
import { NameTooltipContent } from "./components/NameTooltipContent";
import "./hero-section.scss";

const MAX_OFFSET = 8;

export const HeroSection = () => {
  const heroRef = useRef(null);
  const isNameFlickering = useFlicker();

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 15, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 15, mass: 0.5 });
  const x = useTransform(springX, (v) => (v - 0.5) * 2 * MAX_OFFSET);
  const y = useTransform(springY, (v) => (v - 0.5) * 2 * MAX_OFFSET);

  useEffect(() => {
    const hero = heroRef.current;

    const handleMouseMove = (e) => {
      const rect = hero.getBoundingClientRect();
      const isInside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      if (!isInside) {
        mouseX.set(0.5);
        mouseY.set(0.5);
        return;
      }

      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="c-hero" ref={heroRef}>
      <HeroBackground />

      {/* Bottom rail */}
      <div className="c-hero__rail c-hero__rail--bot">
        <div className="container c-hero__rail-inner">
          <TextReveal as="span" text="Novi Sad · Serbia" splitBy="word" />
          <TextReveal as="span" text="Portfolio © 2026" splitBy="word" />
        </div>
      </div>

      {/* Main content */}
      <div className="c-hero__wrap">
        <div className="container c-hero__inner">
          <motion.h1 className="c-hero__title" style={{ x, y }}>
            <TextReveal text="Frontend Engineering with an" splitBy="word" />{" "}
            <TextReveal
              text="Artistic Touch"
              as="em"
              splitBy="word"
              offset={4}
              className="c-hero__accent"
            />
          </motion.h1>

          <div className="c-hero__row">
            <div className="c-hero__copy">
              <motion.p className="c-hero__sub" style={{ x, y }}>
                <TextReveal text="My name is " splitBy="word" />
                <Tooltip content={<NameTooltipContent />}>
                  <TextReveal
                    text="Marko Valuh "
                    splitBy="word"
                    className={`c-hero__name${isNameFlickering ? " c-hero__name--flicker" : ""}`}
                  />
                </Tooltip>
                <TextReveal
                  text="and I bring solid frontend engineering skills and a sharp eye for UI/UX to craft seamless digital experiences."
                  splitBy="word"
                />
              </motion.p>
              <motion.div className="c-hero__buttons" style={{ x, y }}>
                <RevealMask index={0}>
                  <Button
                    label="Work Experience"
                    color="white"
                    variant="filled"
                    to="/work-experience"
                  />
                </RevealMask>
                <RevealMask index={1}>
                  <Button
                    label="See my projects"
                    color="white"
                    variant="transparent"
                    to="/projects"
                  />
                </RevealMask>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
