import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import projects from "../../assets/images/projects.webp";
import { StackingCards } from "../../components/stacking-cards/StackingCards";
import { useWindowSize } from "../../hooks/useWindowSize";
import WithTransition from "../with-transition/WithTransition";
import "./projects_page.scss";

export const ProjectsPage = WithTransition(({ setContentLoaded }) => {
  const [response, setResponse] = useState();

  const container = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const { height } = useWindowSize();
  const y = useTransform(heroScroll, [0, 1], [0, height / 3]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/data/projects.json");
      const data = await res.json();
      setResponse(data);
      setContentLoaded();
    }

    fetchData();
  });

  return (
    <>
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
          {response && (
            <StackingCards
              className="c-projects__cards"
              label={"P"}
              response={response}
              long_desc={true}
              external={true}
            ></StackingCards>
          )}
        </div>
      </div>
    </>
  );
});
