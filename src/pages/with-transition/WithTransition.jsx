// withPageTransition.tsx
import { motion } from "motion/react";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { anim } from "../../utils/utils";
import "./page-transition.scss";
import { useState } from "react";
import { Loader } from "../../components/loader/Loader";

const WithTransition = (WrappedComponent) => {
  const Component = WrappedComponent;

  function TransitionWrapper() {
    const [isLoaded, setIsLoaded] = useState(false);

    const opacity = {
      initial: {
        opacity: 0,
      },
      enter: {
        opacity: 1,
        transition: {
          duration: 0.425,
          ease: [0.52, 0, 0.34, 1],
        },
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
        y: "100vh",
      },
      enter: {
        y: "100vh",
      },
      exit: {
        y: "0",
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
        <Header shouldShow={isLoaded} />
        <motion.div className="c-page-anim__page" {...anim(perspective)}>
          {!isLoaded && (
            <motion.div className="c-page-anim__loader" {...anim(opacity)}>
              <Loader />
            </motion.div>
          )}
          <motion.div
            {...anim(opacity)}
            animate={isLoaded ? "enter" : "initial"}
          >
            <Component setContentLoaded={() => setIsLoaded(true)} />
            <Footer />
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return TransitionWrapper;
};

export default WithTransition;
