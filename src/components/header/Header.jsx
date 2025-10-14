import { motion } from "motion/react";
import { useContext, useEffect, useState } from "react";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Divider } from "../divider/Divider";
import { firstBar, headerHeight, lastBar, opacity } from "./animation/anims";
import { HeaderLink } from "./components/HeaderLink";
import "./header.scss";
import { ScrollContext } from "../../context/ScrollContext";

export const Header = ({ shouldShow }) => {
  const { directionRef, scrollYRef } = useContext(ScrollContext);
  const [direction, setDirection] = useState("hide");
  const [isOpen, setIsOpen] = useState(false);
  const { height } = useWindowSize();
  const variant = isOpen ? "open" : "closed";

  const slideOut = {
    show: {
      y: "1rem",
      x: "1rem",
      transition: {
        duration: 0.4,
        ease: [0.76, 0, 0.24, 1],
      },
    },

    hide: {
      y: "-100%",
      x: "1rem",
      transition: {
        duration: 0.4,
        delay: 0.2,
        ease: [0.76, 0, 0.24, 1],
      },
    },

    exit: {
      y: "-100%",
      x: "1rem",
      opacity: 0,
      transition: {
        duration: 0.4,
        delay: 0.15,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  useEffect(() => {
    let lastDirection = direction;

    const checkDirection = () => {
      const newDirection =
        directionRef.current === 1 && !isOpen && scrollYRef.current > 100
          ? "hide"
          : "show";

      if (newDirection !== lastDirection && shouldShow) {
        lastDirection = newDirection;
        setDirection(newDirection);
      }

      requestAnimationFrame(checkDirection);
    };

    const frameId = requestAnimationFrame(checkDirection);
    return () => cancelAnimationFrame(frameId);
  }, [directionRef, scrollYRef, isOpen, direction, shouldShow]);

  return (
    <motion.div
      initial={"hide"}
      variants={slideOut}
      animate={direction}
      exit={"exit"}
      className="c-header-wrapper"
    >
      <motion.div
        initial={{
          maxHeight: "6.5rem",
        }}
        animate={variant}
        variants={headerHeight(height)}
        exit={{
          maxHeight: "6.5rem",
          transition: {
            duration: 0.4,
            ease: [0.76, 0, 0.24, 1],
          },
        }}
        className="c-header"
      >
        <div className="c-header-bar">
          <Link to="/" className="c-header-bar__logo">
            <img className="c-logo" src={`/mv_logo_simple.png`} />
          </Link>
          <div className="c-header-bar__info">
            <h5 className="c-header-bar__info-name">Marko Valuh</h5>
            <p className="c-header-bar__info-title">
              <span>Front-End</span> <span>Developer</span>
            </p>
          </div>
          <Divider vertical={true} state={isOpen} />
          <div
            className="c-header-bar__menu-icon"
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* Burger Menu */}
            <div className="c-bar-holder">
              <motion.div
                animate={variant}
                variants={firstBar}
                className="c-bar-line"
              ></motion.div>
              <motion.div
                animate={variant}
                variants={opacity}
                className="c-bar-line"
              ></motion.div>
              <motion.div
                animate={variant}
                variants={lastBar}
                className="c-bar-line"
              ></motion.div>
            </div>
          </div>
        </div>
        <div className="c-header-links">
          <HeaderLink to="/" isOpen={isOpen} index={1}>
            Homepage
          </HeaderLink>
          <HeaderLink isOpen={isOpen} to="/projects" index={2}>
            Projects
          </HeaderLink>
          <HeaderLink isOpen={isOpen} to="/work-experience" index={3}>
            Work Experience
          </HeaderLink>
        </div>
        <div className="c-header-contact">
          <div className="c-header-contact__left">
            Contact <br /> Me
          </div>
          <div className="c-header-contact__center">
            <span>LET'S TALK</span>
            <div className="c-socials-holder">
              <a
                href="https://www.linkedin.com/in/marko-valuh/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
              <a href="mailto:marko.valuh@gmail.com" target="_blank">
                <MdEmail />
              </a>
            </div>
          </div>
          <span className="c-header-label">download CV</span>
          <Divider vertical={true} color={"black"} />
          <a
            href={`/files/Marko_Valuh_resume.pdf`}
            download
            className="c-header-contact-download-wrapper"
          >
            <div className="c-header-contact-download">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                <path
                  fill="#000000"
                  d="m18.294 16.793-5.293 5.293V1h-1v21.086l-5.295-5.294-.707.707L12.501 24l6.5-6.5-.707-.707z"
                />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                <path
                  fill="#000000"
                  d="m18.294 16.793-5.293 5.293V1h-1v21.086l-5.295-5.294-.707.707L12.501 24l6.5-6.5-.707-.707z"
                />
              </svg>
            </div>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};
