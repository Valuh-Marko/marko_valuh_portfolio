import { motion } from "motion/react";
import { useContext, useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link, useLocation } from "react-router";
import { ScrollContext } from "../../context/ScrollContext";
import { Button } from "../button/Button";
import "./desktop-header.scss";

const NAV_LINKS = [
  { label: "Homepage", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Work Experience", to: "/work-experience" },
];

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

export const DesktopHeader = ({ shouldShow }) => {
  const { directionRef, scrollYRef, lenis } = useContext(ScrollContext);
  const [direction, setDirection] = useState("hide");
  const [isAtTop, setIsAtTop] = useState(true);
  const location = useLocation();
  const pendingAtTopRef = useRef(true);
  const colorTimeoutRef = useRef(null);

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

    const check = () => {
      const next =
        directionRef.current === 1 && scrollYRef.current > 100
          ? "hide"
          : "show";

      if (next !== lastDirection && shouldShow) {
        lastDirection = next;
        setDirection(next);
      }

      const nextAtTop = scrollYRef.current <= 100;
      if (nextAtTop !== pendingAtTopRef.current) {
        pendingAtTopRef.current = nextAtTop;
        clearTimeout(colorTimeoutRef.current);

        if (nextAtTop) {
          setIsAtTop(true);
        } else {
          colorTimeoutRef.current = setTimeout(
            () => setIsAtTop(false),
            HIDE_ANIMATION_MS
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
      className={`c-desktop-header${isAtTop ? " is-top" : ""}`}
      initial="hide"
      animate={direction}
      variants={slideY}
    >
      <div className="container c-desktop-header__inner">

        <Link to="/" className="c-desktop-header__label" onClick={handleLogoClick}>
          <img src="/marko_valuh_logo.png" alt="Marko Valuh" className="c-desktop-header__wordmark" />
          <h5>Marko Valuh</h5>
        </Link>

        <nav className="c-desktop-header__nav">
          {NAV_LINKS.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className={`c-desktop-header__link${location.pathname === to ? " is-active" : ""}`}
            >
              {label}
            </Link>
          ))}
          <span className="c-desktop-header__separator">|</span>
          <a
            href="https://github.com/Valuh-Marko"
            target="_blank"
            className="c-desktop-header__icon"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/marko-valuh/"
            target="_blank"
            className="c-desktop-header__icon"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:marko.valuh@gmail.com"
            className="c-desktop-header__icon"
          >
            <MdEmail />
          </a>
        </nav>

        <div className="c-desktop-header__actions">
          <Button
            label="Download CV"
            to="/files/marko-valuh-resume.pdf"
            blankTarget={true}
            color={isAtTop ? "white" : "black"}
            variant="filled"
          />
        </div>

      </div>
    </motion.header>
  );
};
