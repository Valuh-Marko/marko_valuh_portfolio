import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import workExperience from "../../assets/images/work_experience.webp";
import { StackingCards } from "../../components/stacking-cards/StackingCards";
import { useWindowSize } from "../../hooks/useWindowSize";
import WithTransition from "../with-transition/WithTransition";
import "./work_experience.scss";

export const WorkExperiencePage = WithTransition(({ setContentLoaded }) => {
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
      const res = await fetch("/data/work_experience.json");
      const data = await res.json();
      setResponse(data);
      setContentLoaded();
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="c-work-experience">
        <div ref={container} className="c-work-experience-hero">
          <div className="c-work-experience-hero-container container">
            <div className="c-page-hero__row">
              <span className="c-section__label">
                <span>/</span>
                <span>Work Experience</span>
              </span>
              <div className="c-page-hero__content">
                <h1 className="c-work-experience-hero__title">
                  Experience & Expertise
                </h1>
                <div className="c-work-experience-hero-details">
                  <h3 className="c-work-experience-hero-subtitle">
                    Over 4 years of hands-on industry experience.
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Background Paralax Image */}
          <motion.img
            className="c-work-experience-hero-img"
            src={workExperience}
            alt="hero_img"
            style={{
              y: y,
            }}
          />
        </div>
        <div className="container">
          {response && (
            <StackingCards
              className="c-work-experience__cards"
              label={"WE"}
              response={response}
              speed={1.5}
            ></StackingCards>
          )}
        </div>
      </div>
    </>
  );
});
