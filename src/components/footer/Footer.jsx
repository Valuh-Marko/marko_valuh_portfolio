import React from "react";
import { motion } from "motion/react";
import { Divider } from "../divider/Divider";
import { Link } from "react-router";
import { MdOutlineArrowOutward } from "react-icons/md";
import { useScrambleText } from "../../hooks/useScrambleText";
import "./footer.scss";

const MotionLink = motion.create(Link);
const TAP_SCALE = { scale: 0.95 };
const TAP_TRANSITION = { duration: 0.1 };

const FooterLink = ({ label, href, to, showIcon = false }) => {
  const [text, scramble] = useScrambleText(label);

  if (to) {
    return (
      <MotionLink
        className="c-footer-link"
        to={to}
        onMouseEnter={() => scramble()}
        whileTap={TAP_SCALE}
        transition={TAP_TRANSITION}
      >
        {text}
        {showIcon && <MdOutlineArrowOutward />}
      </MotionLink>
    );
  }

  return (
    <motion.a
      className="c-footer-link"
      href={href}
      onMouseEnter={() => scramble()}
      whileTap={TAP_SCALE}
      transition={TAP_TRANSITION}
    >
      {text}
    </motion.a>
  );
};

export const Footer = () => {
  return (
    <div className="c-footer">
      <div className="c-footer__logo-holder">
        <img className="c-footer-logo" src={`/marko_valuh_logo.png`} />
        <h5>Marko Valuh</h5>
      </div>
      <h5 className="c-footer__heading">Contact</h5>
      <h5 className="c-footer__heading">Navigate</h5>
      <Divider color={"black"} />
      <div className="c-footer__links">
        <FooterLink
          href="mailto: marko.valuh@gmail.com"
          label="marko.valuh@gmail.com"
        />
        <FooterLink
          href="https://www.linkedin.com/in/marko-valuh/"
          label="LinkedIn"
        />
        <FooterLink href="https://github.com/Valuh-Marko" label="GitHub" />
      </div>
      <div className="c-footer__navigation">
        <FooterLink to="/" label="Homepage" showIcon />
        <FooterLink to="/projects" label="Projects" showIcon />
        <FooterLink to="/work-experience" label="Work Experience" showIcon />
      </div>
      <div className="c-footer__disclaimer">
        <span>&copy; 2026 Marko Valuh</span>
      </div>
    </div>
  );
};
