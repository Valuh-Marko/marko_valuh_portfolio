import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import heroImg from "../../assets/images/about.webp";
import { useWindowSize } from "../../hooks/useWindowSize";
import "./about-section.scss";

export const AboutSection = () => {
  const [response, setResponse] = useState();
  const aboutContainer = useRef(null);
  const { height, width } = useWindowSize();
  const respond = width < 768 ? "end" : "start";

  const { scrollYProgress: aboutScroll } = useScroll({
    target: aboutContainer,
    offset: ["start end", `end ${respond}`],
  });

  const y = useTransform(aboutScroll, [0, 1], [-height / 2, 0]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/data/projects.json");
      const data = await res.json();
      setResponse(data.data);
    }
    fetchData();
  }, []);

  return (
    <div ref={aboutContainer} className="c-about">
      <div className="container c-about__inner">
        <div className="c-section__label c-about__label">
          <span>/</span>
          <span>About</span>
        </div>

        <div className="c-about__left">
          <h2 className="c-about__title">
            Based in <span className="c-about__accent">Novi Sad - Serbia</span>,
            in support of local projects, helping ideas grow into something
            bigger.
          </h2>
        </div>

        <div className="c-about__right">
          {response &&
            response.slice(0, 3).map((project) => (
              <div key={project.title} className="c-about-project">
                <img
                  src={project.img_url}
                  alt={project.title}
                  className="c-about-project__img"
                />
                <div className="c-about-project__content">
                  <h5 className="c-about-project__title">{project.title}</h5>
                  <p className="c-about-project__desc">{project.excerpt}</p>
                </div>
              </div>
            ))}
        </div>
      </div>

      <motion.img
        className="c-about-img"
        src={heroImg}
        alt=""
        aria-hidden="true"
        style={{ y }}
      />
    </div>
  );
};
