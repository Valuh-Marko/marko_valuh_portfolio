import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

const MAX_SKEW_DEG = 2;
const BASE_SCALE = 1.25;
const EDGE_MARGIN = 0.2;

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export const HeroBackground = () => {
  const bgRef = useRef(null);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const glowOpacityTarget = useMotionValue(0);

  const clampedX = useTransform(mouseX, (v) =>
    clamp(v, EDGE_MARGIN, 1 - EDGE_MARGIN),
  );
  const clampedY = useTransform(mouseY, (v) =>
    clamp(v, EDGE_MARGIN, 1 - EDGE_MARGIN),
  );
  const skewSpringX = useSpring(clampedX, {
    stiffness: 150,
    damping: 20,
    mass: 0.5,
  });
  const skewSpringY = useSpring(clampedY, {
    stiffness: 150,
    damping: 20,
    mass: 0.5,
  });

  const transformOrigin = useTransform(
    [skewSpringX, skewSpringY],
    ([x, y]) => `${x * 100}% ${y * 100}%`,
  );
  const bgTransform = useTransform([skewSpringX, skewSpringY], ([x, y]) => {
    const skewX = (x - 0.5) * -MAX_SKEW_DEG;
    const skewY = (y - 0.5) * MAX_SKEW_DEG;
    return `scale(${BASE_SCALE}) skewX(${skewX}deg) skewY(${skewY}deg)`;
  });

  const glowSpringX = useSpring(mouseX, { stiffness: 55, damping: 9, mass: 1 });
  const glowSpringY = useSpring(mouseY, { stiffness: 55, damping: 9, mass: 1 });
  const glowX = useTransform(glowSpringX, (x) => `${x * 100}%`);
  const glowY = useTransform(glowSpringY, (y) => `${y * 100}%`);
  const glowOpacity = useSpring(glowOpacityTarget, {
    stiffness: 200,
    damping: 25,
  });

  useEffect(() => {
    const parent = bgRef.current.parentElement;

    const handleMouseMove = (e) => {
      const rect = parent.getBoundingClientRect();
      const isInside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      if (!isInside) {
        mouseX.set(0.5);
        mouseY.set(0.5);
        glowOpacityTarget.set(0);
        return;
      }

      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
      glowOpacityTarget.set(1);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY, glowOpacityTarget]);

  return (
    <motion.div
      className="c-hero__bg"
      ref={bgRef}
      style={{ transformOrigin, transform: bgTransform }}
    >
      <motion.div
        className="c-hero__bg-glow"
        style={{ opacity: glowOpacity, "--mouse-x": glowX, "--mouse-y": glowY }}
      />
    </motion.div>
  );
};
