import { motion, useScroll, useTransform } from "motion/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import workExperience from "../../assets/images/work_experience.webp";
import { useWindowSize } from "../../hooks/useWindowSize";
import WithTransition from "../with-transition/WithTransition";
import { ApproachSection } from "./components/ApproachSection";
import { ContextSection } from "./components/ContextSection";
import { Pager } from "./components/Pager";
import { ScopeSection } from "./components/ScopeSection";
import { StackSection } from "./components/StackSection";
import { WorkSection } from "./components/WorkSection";
import "./single-work-experience-page.scss";

export const SingleWorkExperiencePage = WithTransition(
  ({ setContentLoaded }) => {
    const { name } = useParams();

    const container = useRef(null);
    const { scrollYProgress: heroScroll } = useScroll({
      target: container,
      offset: ["start start", "end start"],
    });
    const { height } = useWindowSize();
    const y = useTransform(heroScroll, [0, 1], [0, height / 4]);

    const [data, setData] = useState(null);
    const [allEntries, setAllEntries] = useState([]);

    useEffect(() => {
      fetch("/data/work_experience.json")
        .then((res) => res.json())
        .then((json) => {
          const entries = json.data;
          const entry = entries.find((item) => item.url === name);
          setAllEntries(entries);
          setData(entry ?? null);
          setContentLoaded();
        })
        .catch((err) => console.error("Failed to load JSON:", err));
    }, [name]);

    const meta = data?.context?.meta;
    const subheading = meta ? `${meta.role} — ${meta.location}` : "";
    const currentIndex = allEntries.findIndex((item) => item.url === name);

    const sections = [
      data?.context && {
        key: "context",
        render: (num) => <ContextSection context={data.context} num={num} />,
      },
      data?.scope?.length > 0 && {
        key: "scope",
        render: (num) => <ScopeSection scope={data.scope} num={num} />,
      },
      data?.work?.length > 0 && {
        key: "work",
        render: (num) => <WorkSection work={data.work} num={num} />,
      },
      data?.stack?.length > 0 && {
        key: "stack",
        render: (num) => <StackSection stack={data.stack} num={num} />,
      },
      data?.approach?.length > 0 && {
        key: "approach",
        render: (num) => <ApproachSection approach={data.approach} num={num} />,
      },
    ].filter(Boolean);

    return (
      <div className="c-single-page">
        {/* ── Hero ─────────────────────────────────────────────── */}
        <div ref={container} className="c-single-page-hero">
          <div className="c-single-page-hero-container container">
            <h1 className="c-single-page-hero__title">{data?.company}</h1>
            <div className="c-single-page-hero-details">
              <h3 className="c-single-page-hero-subtitle">
                <span className="big-subheading">{subheading}</span>
                <span className="small-subheading">{data?.subtitle}</span>
              </h3>
            </div>
          </div>
          <motion.img
            className="c-single-page-hero-img"
            src={workExperience}
            alt="hero_img"
            style={{ y }}
          />
        </div>

        {/* ── Sections ─────────────────────────────────────────── */}
        {sections.map(({ key, render }, index) => (
          <Fragment key={key}>{render(index + 1)}</Fragment>
        ))}

        {/* ── Pager ────────────────────────────────────────────── */}
        {allEntries.length > 0 && (
          <Pager
            allEntries={allEntries}
            currentIndex={currentIndex}
            company={data?.company}
          />
        )}
      </div>
    );
  },
);
