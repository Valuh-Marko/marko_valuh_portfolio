import React from "react";
import { Divider } from "../divider/Divider";
import { Link } from "react-router";
import { MdOutlineArrowOutward } from "react-icons/md";
import "./footer.scss";

export const Footer = () => {
  return (
    <div className="c-footer">
      <h5 className="c-footer-logo">MV - Marko Valuh</h5>
      <h5 className="c-footer__heading">Contact</h5>
      <h5 className="c-footer__heading">Navigate</h5>
      <Divider color={"black"} />
      <div className="c-footer__links">
        <a className="c-footer-link" href="mailto: marko.valuh@gmail.com">
          marko.valuh@gmail.com
        </a>
        <a
          className="c-footer-link"
          href="https://www.linkedin.com/in/marko-valuh/"
        >
          LinkedIn
        </a>
      </div>
      <div className="c-footer__navigation">
        <Link className="c-footer-link" to="/">
          Homepage
          <MdOutlineArrowOutward />
        </Link>
        <Link className="c-footer-link" to="/projects">
          Projects
          <MdOutlineArrowOutward />
        </Link>
        <Link className="c-footer-link" to="/work-experience">
          Work Experience
          <MdOutlineArrowOutward />
        </Link>
      </div>
      <div className="c-footer__disclaimer">
        <span>&copy; 2025 Marko Valuh</span>
      </div>
    </div>
  );
};
