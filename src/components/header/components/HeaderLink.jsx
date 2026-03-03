import { motion } from "motion/react";
import { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useLocation } from "react-router";

export const HeaderLink = ({ to, children, index, isOpen }) => {
  const location = useLocation();
  const variant = isOpen ? "open" : "closed";
  const isActive = location.pathname === to;

  const ArrowComponent = () =>
    isActive ? <FaArrowLeft className="c-link__icon" /> : null;

  const width = {
    closed: {
      width: 0,
    },
    open: {
      width: "100%",
      transition: {
        duration: 1.2 * (index * 0.25),
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };

  useEffect(() => {}, [isOpen]);

  return (
    <Link to={to}>
      <motion.div
        animate={variant}
        variants={width}
        className={`c-link ${isActive ? "c-link--active" : ""}`}
      >
        <span className="c-link__indicator">0{index}</span>
        <span className="c-link__text">{children}</span>
        <ArrowComponent />
      </motion.div>
    </Link>
  );
};
