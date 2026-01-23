import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import heroImg from "../../assets/images/about.webp";
import { Divider } from "../../components/divider/Divider";
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
      <div className="c-about-container container">
        <h2 className="c-about__title">
          Based in <br />
          Novi Sad - Serbia
        </h2>
        <div className="c-about-details">
          <h3 className="c-about-subtitle">
            In support of local projects, helping ideas grow into something
            bigger. <br />
            Just some of what I had the chance to contribute to:
          </h3>
        </div>
        <Divider />
        <div className="c-about-project-container">
          {response &&
            response.map(
              (project, idx) =>
                idx < 3 && (
                  <div className="c-about-project">
                    <img
                      src={project.img_url}
                      alt=""
                      className="c-about-project__img"
                    />
                    <h5 className="c-about-project__title">{project.title}</h5>
                    <p className="c-about-project__desc">{project.excerpt}</p>
                  </div>
                )
            )}
        </div>
      </div>

      {/* Background Paralax Image */}
      <motion.img
        className="c-about-img"
        src={heroImg}
        alt="hero_img"
        style={{
          y: y,
        }}
      />
    </div>
  );
};
