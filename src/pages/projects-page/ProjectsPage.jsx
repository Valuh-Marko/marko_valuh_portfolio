import React, { useRef } from "react";
import WithTransition from "../with-transition/WithTransition";
import { motion, useScroll, useTransform } from "motion/react";
import { useWindowSize } from "../../hooks/useWindowSize";
import projects from "../../assets/images/projects.webp";
import { StackingCards } from "../../components/stacking-cards/StackingCards";
import response from "../../data/work_experience.json";
import "./projects_page.scss";

export const ProjectsPage = WithTransition(() => {
  const container = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const { height } = useWindowSize();
  const y = useTransform(heroScroll, [0, 1], [0, height / 3]);

  return (
    <div className="c-projects">
      <div ref={container} className="c-projects-hero">
        <div className="c-projects-hero-container container">
          <h1 className="c-projects-hero__title">Projects & Creations</h1>
          <div className="c-projects-hero-details">
            <h3 className="c-projects-hero-subtitle">
              Exploring solutions through real-world projects.
            </h3>
          </div>
        </div>

        {/* Background Paralax Image */}
        <motion.img
          className="c-projects-hero-img"
          src={projects}
          alt="hero_img"
          style={{
            y: y,
          }}
        />
      </div>
      <div className="container">
        <StackingCards
          className="c-projects__cards"
          label={"P"}
          response={response}
        ></StackingCards>
      </div>
    </div>
  );
});
