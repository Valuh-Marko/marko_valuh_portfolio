import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useContext, useEffect, useRef, useState } from "react";
import { MdArrowDownward, MdOutlineArrowOutward } from "react-icons/md";
import { Link, useLocation } from "react-router";
import { ScrollContext } from "../../context/ScrollContext";
import { useScrollLock } from "../../hooks/useLockScroll";
import { useScrambleText } from "../../hooks/useScrambleText";
import "./header.scss";

const NAV_LINKS = [
  { label: "Homepage", to: "/" },
  { label: "Experience", to: "/work-experience" },
  { label: "Projects", to: "/projects" },
];

export const CV_FILE = "/files/Marko Valuh - Frontend Developer.pdf";

// The second tier under the destinations: same behaviour, a fraction of the
// size. The arrow says what the link does: fetch a file or leave the site.
const ACTION_LINKS = [
  { label: "Download CV", href: CV_FILE, isDownload: true },
  { label: "GitHub", href: "https://github.com/Valuh-Marko" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/marko-valuh/" },
  { label: "Email", href: "mailto:marko.valuh@gmail.com" },
];

const HERO_SELECTOR =
  ".c-hero, .c-projects-hero, .c-work-experience-hero, .c-single-page-hero, .c-case-hero";

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
// into a cross on the middle line's axis while the middle one fades. To land
// there, each outer line moves by one line thickness plus one gap. The
// stylesheet takes both sizes from these constants via custom properties.
const BURGER_LINE = 3;
const BURGER_GAP = 4;
const BURGER_PITCH = BURGER_LINE + BURGER_GAP;
const burgerSize = {
  "--burger-line": `${BURGER_LINE}px`,
  "--burger-gap": `${BURGER_GAP}px`,
};

const burgerFirst = {
  closed: { rotate: 0, y: 0 },
  open: { rotate: -45, y: BURGER_PITCH },
};
const burgerMiddle = {
  closed: { opacity: 1 },
  open: { opacity: 0 },
};
const burgerLast = {
  closed: { rotate: 0, y: 0 },
  open: { rotate: 45, y: -BURGER_PITCH },
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
// Passes the panel's state down and drops the action links in one by one
// after the destinations.
const menuActions = {
  closed: {},
  open: { transition: { staggerChildren: 0.05 } },
};

// aria-label keeps the accessible name stable while the visible text scrambles.
const MenuLink = ({ label, to, isActive, onClick }) => {
  const [text, scramble] = useScrambleText(label);

  return (
    <MotionLink
      to={to}
      className={`c-header__menu-link${isActive ? " is-active" : ""}`}
      aria-label={label}
      onClick={onClick}
      onMouseEnter={() => scramble()}
      whileTap={TAP_SCALE}
      transition={TAP_TRANSITION}
    >
      {text}
    </MotionLink>
  );
};

const MenuAction = ({ label, href, isDownload }) => {
  const [text, scramble] = useScrambleText(label);
  const Icon = isDownload ? MdArrowDownward : MdOutlineArrowOutward;

  return (
    <motion.a
      href={href}
      className={`c-header__menu-action${isDownload ? " is-download" : ""}`}
      aria-label={label}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel="noreferrer"
      onMouseEnter={() => scramble()}
      whileTap={TAP_SCALE}
      transition={TAP_TRANSITION}
    >
      <span>{text}</span>
      <Icon className="c-header__menu-action-icon" aria-hidden="true" />
    </motion.a>
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

  // Switching pages leaves the menu open for the page transition to cover.
  // Lenis has to run again first: it ignores the scroll-to-top the route
  // exit fires while the open menu has it stopped.
  const handleNavigate = (to) => {
    if (location.pathname === to) {
      closeMenu();
      return;
    }
    lenis.current?.start();
  };

  const handleLogoClick = (e) => {
    handleNavigate("/");
    if (location.pathname === "/") {
      e.preventDefault();
      lenis.current?.scrollTo(0);
    }
  };

  useEffect(() => {
    return () => clearTimeout(colorTimeoutRef.current);
  }, []);

  // While the menu is open the page behind it must not move, and Escape
  // closes it.
  useEffect(() => {
    if (!isOpen) return;

    const instance = lenis.current;
    instance?.stop();

    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      instance?.start();
      window.removeEventListener("keydown", onKeyDown);
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

        <button
          type="button"
          className="c-header__burger"
          aria-expanded={isOpen}
          aria-controls="header-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span
            className="c-header__burger-lines"
            style={burgerSize}
            aria-hidden="true"
          >
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
            <nav className="container c-header__menu-nav" aria-label="Primary">
              {NAV_LINKS.map(({ label, to }) => (
                <motion.div
                  key={to}
                  className="c-header__menu-row"
                  variants={reduceMotion ? menuRowReduced : menuRow}
                >
                  <MenuLink
                    label={label}
                    to={to}
                    isActive={location.pathname === to}
                    onClick={() => handleNavigate(to)}
                  />
                </motion.div>
              ))}
            </nav>

            <div className="container c-header__menu-footer">
              <motion.ul
                className="c-header__menu-actions"
                variants={menuActions}
              >
                {ACTION_LINKS.map((action) => (
                  <motion.li
                    key={action.href}
                    variants={reduceMotion ? menuRowReduced : menuRow}
                  >
                    <MenuAction {...action} />
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
