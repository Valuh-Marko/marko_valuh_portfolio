import { MotionConfig } from "motion/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import WithTransition from "../with-transition/WithTransition";
import { AccessSection } from "./components/AccessSection";
import { ArchitectureSection } from "./components/ArchitectureSection";
import { BuildingSection } from "./components/BuildingSection";
import { CaseHero } from "./components/CaseHero";
import { DesignSystemSection } from "./components/DesignSystemSection";
import { EngineerBand } from "./components/EngineerBand";
import { GrowthSection } from "./components/GrowthSection";
import { MoneySection } from "./components/MoneySection";
import { NotYetSection } from "./components/NotYetSection";
import { Pager } from "./components/Pager";
import { ProcessSection } from "./components/ProcessSection";
import { ProvisioningSection } from "./components/ProvisioningSection";
import { SeatsSection } from "./components/SeatsSection";
import "./single-project-page.scss";

// Numbered sections in page order. The engineer band sits between the
// product seats and the engineering sections and takes no number. Each key
// doubles as the anchor id the hero's contents link to.
const SECTIONS = [
  { key: "building", Component: BuildingSection, prop: "building" },
  { key: "seats", Component: SeatsSection, prop: "seats" },
  { key: "engineer", Component: EngineerBand, prop: "engineer", unnumbered: true },
  { key: "architecture", Component: ArchitectureSection, prop: "architecture" },
  { key: "access", Component: AccessSection, prop: "access" },
  { key: "money", Component: MoneySection, prop: "money" },
  { key: "provisioning", Component: ProvisioningSection, prop: "provisioning" },
  { key: "process", Component: ProcessSection, prop: "process" },
  { key: "growth", Component: GrowthSection, prop: "growth" },
  { key: "notYet", Component: NotYetSection, prop: "notYet" },
  { key: "designSystem", Component: DesignSystemSection, prop: "designSystem" },
];

export const SingleProjectPage = WithTransition(
  ({ setContentLoaded }) => {
    const { name } = useParams();

    const [data, setData] = useState(null);
    const [allEntries, setAllEntries] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
      fetch("/data/projects.json")
        .then((res) => res.json())
        .then((json) => {
          const entries = json.data;
          const entry = entries.find((item) => item.url === name);
          setAllEntries(entries.filter((item) => item.caseStudy));
          setData(entry ?? null);
          setDataLoaded(true);
        })
        .catch((err) => console.error("Failed to load JSON:", err));
    }, [name]);

    useEffect(() => {
      if (dataLoaded) {
        setContentLoaded();
      }
    }, [dataLoaded, setContentLoaded]);

    const caseStudy = data?.caseStudy;
    const currentIndex = allEntries.findIndex((item) => item.url === name);

    let num = 0;
    const sections = SECTIONS.filter(({ prop }) => caseStudy?.[prop]).map(
      (section) => {
        const { key, Component, prop, unnumbered } = section;
        return (
          <div key={key} id={key} className="c-case-anchor" tabIndex={-1}>
            <Component
              {...{ [prop]: caseStudy[prop] }}
              num={unnumbered ? undefined : ++num}
            />
          </div>
        );
      },
    );

    return (
      <MotionConfig reducedMotion="user">
        <div className="c-single-page c-case">
          {data && <CaseHero project={data} />}

          {sections}

          {allEntries.length > 0 && (
            <Pager allEntries={allEntries} currentIndex={currentIndex} title={data?.title} />
          )}
        </div>
      </MotionConfig>
    );
  },
);
