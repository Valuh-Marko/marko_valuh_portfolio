// withPageTransition.tsx
import { motion } from "motion/react";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { anim } from "../../utils/utils";
import "./page-transition.scss";

const WithTransition = (WrappedComponent) => {
  const Component = WrappedComponent;
  return ({ scrollDirection }) => {
    const opacity = {
      initial: {
        opacity: 0,
      },
      enter: {
        opacity: 1,
      },
      exit: {
        opacity: 0.5,
        transition: {
          duration: 0.6,
          ease: [0.76, 0, 0.24, 1],
        },
      },
    };

    const slide = {
      initial: {
        top: "100vh",
      },
      enter: {
        top: "100vh",
      },
      exit: {
        top: "0",
        transition: {
          duration: 0.6,
          ease: [0.76, 0, 0.24, 1],
        },
      },
    };

    const perspective = {
      initial: {
        y: 0,
        scale: 1,
        opacity: 1,
        backgroundColor: "white",
      },
      enter: {
        y: 0,
        scale: 1,
        opacity: 1,
        backgroundColor: "white",
      },

      exit: {
        y: -100,
        scale: 0.85,
        opacity: 0,
        backgroundColor: "white",
        transition: {
          duration: 1.2,
          ease: [0.76, 0, 0.24, 1],
        },
      },
    };

    return (
      <div className="c-page-anim">
        <motion.div {...anim(slide)} className="c-page-anim__slide" />
        <motion.div className="c-page-anim__page" {...anim(perspective)}>
          <motion.div {...anim(opacity)}>
            <Header scrollDirection={scrollDirection} />
            <Component />
            <Footer />
          </motion.div>
        </motion.div>
      </div>
    );
  };
};

export default WithTransition;
