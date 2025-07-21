import { motion, useScroll, useTransform } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import workExperience from "../../assets/images/work_experience.webp";
import { TechIcon } from "../../components/tech-icon/TechIcon";
import { useWindowSize } from "../../hooks/useWindowSize";
import WithTransition from "../with-transition/WithTransition";
import "./single-work-experience-page.scss";

export const SingleWorkExperiencePage = WithTransition(() => {
  const { name } = useParams();

  const container = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const { height } = useWindowSize();
  const y = useTransform(heroScroll, [0, 1], [0, height / 4]);

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`/work-experience/${name}.json`)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Failed to load JSON:", err));
  }, [name]);

  const subheading = `${data?.role} - ${data?.location}`;
  const workTime = `${data?.duration.from} - ${data?.duration.to}`;

  return (
    <div className="c-single-page">
      <div ref={container} className="c-single-page-hero">
        <div className="c-single-page-hero-container container">
          <h1 className="c-single-page-hero__title">{data?.company}</h1>
          <div className="c-single-page-hero-details">
            <h3 className="c-single-page-hero-subtitle">
              <span className="big-subheading">{subheading}</span>
              <span className="small-subheading">{workTime}</span>
            </h3>
          </div>
        </div>

        {/* Background Paralax Image */}
        <motion.img
          className="c-single-page-hero-img"
          src={workExperience}
          alt="hero_img"
          style={{
            y: y,
          }}
        />
      </div>
      <div className="container">
        {data?.projects.map((project, index) => (
          <div key={`${index}-project`} className="c-project-container">
            <div className="c-project__label">p/00{index}</div>
            <div className="c-project__content">
              <h3 className="c-project__title">{project.name}</h3>
              <p className="c-project__subtitle">{project.role}</p>
              <p className="c-project__excerpt">
                {project.description.map((desc, index) => (
                  <li key={`${index}-desc`}>{desc}</li>
                ))}
              </p>
            </div>
            <div className="c-project__tech">
              {project?.technologies.map((tech, index) => (
                <div key={`${index}-tech`} className="c-tech">
                  <TechIcon tech={tech} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});
