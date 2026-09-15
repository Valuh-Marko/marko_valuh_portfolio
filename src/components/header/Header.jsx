import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useContext, useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link, useLocation } from "react-router";
import { ScrollContext } from "../../context/ScrollContext";
import { useScrollLock } from "../../hooks/useLockScroll";
import { useScrambleText } from "../../hooks/useScrambleText";
import { Button } from "../button/Button";
import "./header.scss";

const NAV_LINKS = [
  { label: "Homepage", to: "/" },
  { label: "Work Experience", to: "/work-experience" },
  { label: "Projects", to: "/projects" },
];

const CV_FILE = "/files/Marko Valuh - Frontend Developer.pdf";

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/Valuh-Marko", Icon: FaGithub },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/marko-valuh/",
    Icon: FaLinkedin,
  },
  { label: "Email", href: "mailto:marko.valuh@gmail.com", Icon: MdEmail },
];

const HERO_SELECTOR =
  ".c-hero, .c-projects-hero, .c-work-experience-hero, .c-single-page-hero";

// Matches the `md` breakpoint in styles/_mixin.scss, where the burger hands
// over to the inline nav.
const DESKTOP_QUERY = "(min-width: 768px)";

const MotionLink = motion.create(Link);
const TAP_SCALE = { scale: 0.95 };
const TAP_TRANSITION = { duration: 0.1 };
const EASE = [0.76, 0, 0.24, 1];

const slideY = {
  show: {
    y: 0,
    transition: { duration: 0.4, ease: EASE },
  },
  hide: {
    y: "-100%",
    transition: { duration: 0.4, delay: 0.1, ease: EASE },
  },
  exit: {
    y: "-100%",
    transition: { duration: 0.4, ease: EASE },
  },
};

const HIDE_ANIMATION_MS =
  (slideY.hide.transition.delay + slideY.hide.transition.duration) * 1000;

// Three-line burger from the original mobile header: the outer lines fold
// into a cross on the middle line's axis while the middle one fades.
const burgerFirst = {
  closed: { rotate: 0, y: 0 },
  open: { rotate: -45, y: "6px" },
};
const burgerMiddle = {
  closed: { opacity: 1 },
  open: { opacity: 0 },
};
const burgerLast = {
  closed: { rotate: 0, y: 0 },
  open: { rotate: 45, y: "-4px" },
};

// The menu wipes down from under the bar, then the rows drop in the same
// direction in sequence. Closing folds everything back up in one short move.
const menuPanel = {
  closed: {
    clipPath: "inset(0 0 100% 0)",
    transition: { duration: 0.35, ease: EASE },
  },
  open: {
    clipPath: "inset(0 0 0% 0)",
    transition: {
      duration: 0.5,
      ease: EASE,
      delayChildren: 0.15,
      staggerChildren: 0.06,
    },
  },
};
const menuPanelReduced = {
  closed: { opacity: 0, transition: { duration: 0.2 } },
  open: { opacity: 1, transition: { duration: 0.2 } },
};
const menuRow = {
  closed: {
    y: "-0.75rem",
    opacity: 0,
    transition: { duration: 0.2, ease: EASE },
  },
  open: { y: 0, opacity: 1, transition: { duration: 0.5, ease: EASE } },
};
const menuRowReduced = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
};

const HeaderNavLink = ({ label, to, isActive }) => {
  const [text, scramble] = useScrambleText(label);

  return (
    <MotionLink
      to={to}
      className={`c-header__link${isActive ? " is-active" : ""}`}
      onMouseEnter={() => scramble()}
      whileTap={TAP_SCALE}
      transition={TAP_TRANSITION}
    >
      {text}
    </MotionLink>
  );
};

export const Header = ({ shouldShow }) => {
  const { directionRef, scrollYRef, lenis } = useContext(ScrollContext);
  const [direction, setDirection] = useState("hide");
  const [isAtTop, setIsAtTop] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const reduceMotion = useReducedMotion();
  const pendingAtTopRef = useRef(isAtTop);
  const colorTimeoutRef = useRef(null);
  const headerRef = useRef(null);

  useScrollLock(isOpen);

  const closeMenu = () => setIsOpen(false);

  const handleLogoClick = (e) => {
    closeMenu();
    if (location.pathname === "/") {
      e.preventDefault();
      lenis.current?.scrollTo(0);
    }
  };

  useEffect(() => {
    return () => clearTimeout(colorTimeoutRef.current);
  }, []);

  // While the menu is open the page behind it must not move, and Escape or
  // growing past the breakpoint (tablet rotation) closes it.
  useEffect(() => {
    if (!isOpen) return;

    const instance = lenis.current;
    instance?.stop();

    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    const query = window.matchMedia(DESKTOP_QUERY);
    const onQueryChange = (e) => {
      if (e.matches) setIsOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    query.addEventListener("change", onQueryChange);

    return () => {
      instance?.start();
      window.removeEventListener("keydown", onKeyDown);
      query.removeEventListener("change", onQueryChange);
    };
  }, [isOpen, lenis]);

  // Runs on Lenis scroll events (the provider updates the refs first), plus
  // once on mount and route change, instead of polling every frame.
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
    };

    // The provider creates Lenis in its own effect, which runs after this
    // one on first mount, so wait a frame for it if needed.
    let rafId = null;
    let subscribed = null;
    const subscribe = () => {
      const instance = lenis.current;
      if (!instance) {
        rafId = requestAnimationFrame(subscribe);
        return;
      }
      subscribed = instance;
      instance.on("scroll", check);
      check();
    };
    subscribe();

    return () => {
      cancelAnimationFrame(rafId);
      subscribed?.off("scroll", check);
    };
  }, [
    directionRef,
    scrollYRef,
    lenis,
    direction,
    shouldShow,
    location.pathname,
  ]);

  const menuState = isOpen ? "open" : "closed";
  const headerClass = `c-header${isAtTop ? "" : " is-scrolled"}${
    isOpen ? " is-open" : ""
  }`;

  return (
    <motion.header
      ref={headerRef}
      className={headerClass}
      initial="hide"
      animate={direction}
      variants={slideY}
    >
      <div className="container c-header__inner">
        <MotionLink
          to="/"
          className="c-header__label"
          onClick={handleLogoClick}
          whileTap={TAP_SCALE}
          transition={TAP_TRANSITION}
        >
          <img
            src="/marko_valuh_logo.png"
            alt="Marko Valuh"
            className="c-header__wordmark"
          />
        </MotionLink>

        <nav className="c-header__nav" aria-label="Primary">
          {NAV_LINKS.map(({ label, to }) => (
            <HeaderNavLink
              key={to}
              label={label}
              to={to}
              isActive={location.pathname === to}
            />
          ))}
        </nav>

        <div className="c-header__actions">
          <Button
            label="Download CV"
            to={CV_FILE}
            blankTarget={true}
            color={isAtTop ? "white" : "black"}
          />
        </div>

        <button
          type="button"
          className="c-header__burger"
          aria-expanded={isOpen}
          aria-controls="header-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="c-header__burger-lines" aria-hidden="true">
            <motion.span
              className="c-header__burger-line"
              animate={menuState}
              variants={burgerFirst}
            />
            <motion.span
              className="c-header__burger-line"
              animate={menuState}
              variants={burgerMiddle}
            />
            <motion.span
              className="c-header__burger-line"
              animate={menuState}
              variants={burgerLast}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="header-menu"
            className="c-header__menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={reduceMotion ? menuPanelReduced : menuPanel}
          >
            <nav className="c-header__menu-nav" aria-label="Primary">
              {NAV_LINKS.map(({ label, to }) => (
                <motion.div
                  key={to}
                  className="c-header__menu-row"
                  variants={reduceMotion ? menuRowReduced : menuRow}
                >
                  <MotionLink
                    to={to}
                    className={`c-header__menu-link${
                      location.pathname === to ? " is-active" : ""
                    }`}
                    onClick={closeMenu}
                    whileTap={TAP_SCALE}
                    transition={TAP_TRANSITION}
                  >
                    {label}
                  </MotionLink>
                </motion.div>
              ))}
            </nav>

            <motion.div
              className="c-header__menu-footer"
              variants={reduceMotion ? menuRowReduced : menuRow}
            >
              <Button
                label="Download CV"
                to={CV_FILE}
                blankTarget={true}
                color="white"
                variant="filled"
                size="lg"
              />
              <div className="c-header__menu-socials">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    className="c-header__menu-social"
                    aria-label={social.label}
                    target={
                      social.href.startsWith("mailto:") ? undefined : "_blank"
                    }
                    rel="noreferrer"
                  >
                    <social.Icon />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
