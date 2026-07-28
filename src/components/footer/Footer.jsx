import React from "react";
import { Divider } from "../divider/Divider";
import { Link } from "react-router";
import { MdOutlineArrowOutward } from "react-icons/md";
import { useScrambleText } from "../../hooks/useScrambleText";
import "./footer.scss";

const FooterLink = ({ label, href, to, showIcon = false }) => {
  const [text, scramble] = useScrambleText(label);

  if (to) {
    return (
      <Link className="c-footer-link" to={to} onMouseEnter={() => scramble()}>
        {text}
        {showIcon && <MdOutlineArrowOutward />}
      </Link>
    );
  }

  return (
    <a className="c-footer-link" href={href} onMouseEnter={() => scramble()}>
      {text}
    </a>
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
