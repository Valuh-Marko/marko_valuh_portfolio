import { motion } from "motion/react";
import { useContext, useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link, useLocation } from "react-router";
import { ScrollContext } from "../../context/ScrollContext";
import { useScrambleText } from "../../hooks/useScrambleText";
import { Button } from "../button/Button";
import "./desktop-header.scss";

const NAV_LINKS = [
  { label: "Homepage", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Work Experience", to: "/work-experience" },
];

const HERO_SELECTOR =
  ".c-hero, .c-projects-hero, .c-work-experience-hero, .c-single-page-hero";

const MotionLink = motion.create(Link);
const TAP_SCALE = { scale: 0.95 };
const TAP_TRANSITION = { duration: 0.1 };

const slideY = {
  show: {
    y: 0,
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  hide: {
    y: "-100%",
    transition: { duration: 0.4, delay: 0.1, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    y: "-100%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
};

const HIDE_ANIMATION_MS =
  (slideY.hide.transition.delay + slideY.hide.transition.duration) * 1000;

const HeaderNavLink = ({ label, to, isActive }) => {
  const [text, scramble] = useScrambleText(label);

  return (
    <MotionLink
      to={to}
      className={`c-desktop-header__link${isActive ? " is-active" : ""}`}
      onMouseEnter={() => scramble()}
      whileTap={TAP_SCALE}
      transition={TAP_TRANSITION}
    >
      {text}
    </MotionLink>
  );
};

export const DesktopHeader = ({ shouldShow }) => {
  const { directionRef, scrollYRef, lenis } = useContext(ScrollContext);
  const [direction, setDirection] = useState("hide");
  const [isAtTop, setIsAtTop] = useState(true);
  const location = useLocation();
  const pendingAtTopRef = useRef(isAtTop);
  const colorTimeoutRef = useRef(null);
  const headerRef = useRef(null);

  const handleLogoClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      lenis.current?.scrollTo(0);
    }
  };

  useEffect(() => {
    return () => clearTimeout(colorTimeoutRef.current);
  }, []);

  useEffect(() => {
    let lastDirection = direction;
    const heroEl = document.querySelector(HERO_SELECTOR);

    const check = () => {
      const next =
        directionRef.current === 1 && scrollYRef.current > 100
          ? "hide"
          : "show";

      if (next !== lastDirection && shouldShow) {
        lastDirection = next;
        setDirection(next);
      }

      const headerHeight = headerRef.current?.offsetHeight ?? 0;
      const nextAtTop = heroEl
        ? heroEl.getBoundingClientRect().bottom > headerHeight
        : false;

      if (nextAtTop !== pendingAtTopRef.current) {
        pendingAtTopRef.current = nextAtTop;
        clearTimeout(colorTimeoutRef.current);

        if (nextAtTop) {
          setIsAtTop(true);
        } else {
          colorTimeoutRef.current = setTimeout(
            () => setIsAtTop(false),
            HIDE_ANIMATION_MS,
          );
        }
      }

      requestAnimationFrame(check);
    };

    const id = requestAnimationFrame(check);
    return () => cancelAnimationFrame(id);
  }, [directionRef, scrollYRef, direction, shouldShow]);

  return (
    <motion.header
      ref={headerRef}
      className={`c-desktop-header${isAtTop ? "" : " is-scrolled"}`}
      initial="hide"
      animate={direction}
      variants={slideY}
    >
      <div className="container c-desktop-header__inner">
        <MotionLink
          to="/"
          className="c-desktop-header__label"
          onClick={handleLogoClick}
          whileTap={TAP_SCALE}
          transition={TAP_TRANSITION}
        >
          <img
            src="/marko_valuh_logo.png"
            alt="Marko Valuh"
            className="c-desktop-header__wordmark"
          />
        </MotionLink>

        <nav className="c-desktop-header__nav">
          {NAV_LINKS.map(({ label, to }) => (
            <HeaderNavLink
              key={to}
              label={label}
              to={to}
              isActive={location.pathname === to}
            />
          ))}
          <span className="c-desktop-header__separator">|</span>
          <motion.a
            href="https://github.com/Valuh-Marko"
            target="_blank"
            className="c-desktop-header__icon"
            whileTap={TAP_SCALE}
            transition={TAP_TRANSITION}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/marko-valuh/"
            target="_blank"
            className="c-desktop-header__icon"
            whileTap={TAP_SCALE}
            transition={TAP_TRANSITION}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="mailto:marko.valuh@gmail.com"
            className="c-desktop-header__icon"
            whileTap={TAP_SCALE}
            transition={TAP_TRANSITION}
          >
            <MdEmail />
          </motion.a>
        </nav>

        <div className="c-desktop-header__actions">
          <Button
            label="Download CV"
            to="/files/marko-valuh-resume.pdf"
            blankTarget={true}
            color={isAtTop ? "white" : "black"}
          />
        </div>
      </div>
    </motion.header>
  );
};
