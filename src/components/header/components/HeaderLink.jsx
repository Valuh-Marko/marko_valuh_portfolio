import { motion } from "motion/react";
import { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { ScrollContext } from "../../../context/ScrollContext";

export const HeaderLink = ({ to, children, index, isOpen }) => {
  const { lenis } = useContext(ScrollContext);
  const location = useLocation();
  const variant = isOpen ? "open" : "closed";
  const isActive = location.pathname === to;

  const handleActiveClick = () => {
    if (isActive) {
      lenis.current.scrollTo(0, 0);
    }
  };

  const width = {
    closed: {
      opacity: 0,
      width: 0,
    },
    open: {
      width: "100%",
      transition: {
        opacity: 1,
        duration: 0.62,
        delay: index * 0.16,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };

  useEffect(() => {}, [isOpen]);

  return (
    <Link to={to} onClick={handleActiveClick}>
      <motion.div animate={variant} variants={width} className="c-link">
        <span className="c-link__indicator">0{index}</span>
        <span className="c-link__text">{children}</span>
      </motion.div>
    </Link>
  );
};
