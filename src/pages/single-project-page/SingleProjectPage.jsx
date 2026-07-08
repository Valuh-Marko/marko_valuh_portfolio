import { motion, useScroll, useTransform } from "motion/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import projects from "../../assets/images/projects.webp";
import { useWindowSize } from "../../hooks/useWindowSize";
import WithTransition from "../with-transition/WithTransition";
import { ArchitectureSection } from "./components/ArchitectureSection";
import { BusinessLogicSection } from "./components/BusinessLogicSection";
import { DataModelSection } from "./components/DataModelSection";
import { DesignSystemSection } from "./components/DesignSystemSection";
import { FeatureInventorySection } from "./components/FeatureInventorySection";
import { FrontendSection } from "./components/FrontendSection";
import { OverviewSection } from "./components/OverviewSection";
import { Pager } from "./components/Pager";
import { ProblemSection } from "./components/ProblemSection";
import { ProcessSection } from "./components/ProcessSection";
import { ScopeDeferralsSection } from "./components/ScopeDeferralsSection";
import { SnapshotSection } from "./components/SnapshotSection";
import { TimelineSection } from "./components/TimelineSection";
import { WarStorySection } from "./components/WarStorySection";
import "./single-project-page.scss";

export const SingleProjectPage = WithTransition(
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
      fetch("/data/projects.json")
        .then((res) => res.json())
        .then((json) => {
          const entries = json.data;
          const entry = entries.find((item) => item.url === name);
          setAllEntries(entries.filter((item) => item.caseStudy));
          setData(entry ?? null);
          setContentLoaded();
        })
        .catch((err) => console.error("Failed to load JSON:", err));
    }, [name]);

    const caseStudy = data?.caseStudy;
    const currentIndex = allEntries.findIndex((item) => item.url === name);

    const sections = [
      caseStudy?.overview && {
        key: "overview",
        render: (num) => <OverviewSection overview={caseStudy.overview} num={num} />,
      },
      caseStudy?.snapshot && {
        key: "snapshot",
        render: (num) => <SnapshotSection snapshot={caseStudy.snapshot} num={num} />,
      },
      caseStudy?.problem && {
        key: "problem",
        render: (num) => <ProblemSection problem={caseStudy.problem} num={num} />,
      },
      caseStudy?.architecture && {
        key: "architecture",
        render: (num) => (
          <ArchitectureSection architecture={caseStudy.architecture} num={num} />
        ),
      },
      caseStudy?.dataModel && {
        key: "dataModel",
        render: (num) => <DataModelSection dataModel={caseStudy.dataModel} num={num} />,
      },
      caseStudy?.businessLogic?.length > 0 && {
        key: "businessLogic",
        render: (num) => (
          <BusinessLogicSection businessLogic={caseStudy.businessLogic} num={num} />
        ),
      },
      caseStudy?.process && {
        key: "process",
        render: (num) => <ProcessSection process={caseStudy.process} num={num} />,
      },
      caseStudy?.frontendDeepDive && {
        key: "frontendDeepDive",
        render: (num) => (
          <FrontendSection frontendDeepDive={caseStudy.frontendDeepDive} num={num} />
        ),
      },
      caseStudy?.featureInventory?.length > 0 && {
        key: "featureInventory",
        render: (num) => (
          <FeatureInventorySection featureInventory={caseStudy.featureInventory} num={num} />
        ),
      },
      caseStudy?.designSystem && {
        key: "designSystem",
        render: (num) => <DesignSystemSection designSystem={caseStudy.designSystem} num={num} />,
      },
      caseStudy?.warStory && {
        key: "warStory",
        render: (num) => <WarStorySection warStory={caseStudy.warStory} num={num} />,
      },
      caseStudy?.scopeDeferrals?.length > 0 && {
        key: "scopeDeferrals",
        render: (num) => (
          <ScopeDeferralsSection scopeDeferrals={caseStudy.scopeDeferrals} num={num} />
        ),
      },
      caseStudy?.timeline && {
        key: "timeline",
        render: (num) => <TimelineSection timeline={caseStudy.timeline} num={num} />,
      },
    ].filter(Boolean);

    return (
      <div className="c-single-page">
        {/* ── Hero ─────────────────────────────────────────────── */}
        <div ref={container} className="c-single-page-hero">
          <div className="c-single-page-hero-container container">
            <div className="c-page-hero__content">
              <h1 className="c-single-page-hero__title">{data?.title}</h1>
              <div className="c-single-page-hero-details">
                {!caseStudy?.overview && (
                  <h3 className="c-single-page-hero-subtitle">
                    <span className="big-subheading">{data?.excerpt}</span>
                  </h3>
                )}
                {data?.spec?.stack?.length > 0 && (
                  <div className="c-single-page-hero-chips">
                    {data.spec.stack.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <motion.img
            className="c-single-page-hero-img"
            src={projects}
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
          <Pager allEntries={allEntries} currentIndex={currentIndex} title={data?.title} />
        )}
      </div>
    );
  },
);
