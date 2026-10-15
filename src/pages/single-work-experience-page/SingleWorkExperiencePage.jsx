import { MotionConfig } from "motion/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button } from "../../components/button/Button";
import { CaseHero } from "../single-project-page/components/CaseHero";
import "../single-project-page/single-project-page.scss";
import WithTransition from "../with-transition/WithTransition";
import { ClientsSection } from "./components/ClientsSection";
import { Pager } from "./components/Pager";
import { PointsSection } from "./components/PointsSection";
import { ProseSection } from "./components/ProseSection";
import { TeamSection } from "./components/TeamSection";
import "./single-work-experience-page.scss";

// Each job lists its own sections in work_experience.json; the type picks
// the component. Each id doubles as the anchor the hero's contents link to.
const SECTION_TYPES = {
  clients: ClientsSection,
  points: PointsSection,
  prose: ProseSection,
  team: TeamSection,
};

const NOT_FOUND = {
  title: "Nothing here",
  excerpt: "There is no work-experience page at this address.",
};

export const SingleWorkExperiencePage = WithTransition(
  ({ setContentLoaded }) => {
    const { name } = useParams();

    const [data, setData] = useState(null);
    const [allEntries, setAllEntries] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
      fetch("/data/work_experience.json")
        .then((res) => res.json())
        .then((json) => {
          const entries = json.data;
          const entry = entries.find((item) => item.url === name);
          setAllEntries(entries.filter((item) => item.url));
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

    const currentIndex = allEntries.findIndex((item) => item.url === name);

    // CaseHero reads a project's shape.
    const hero = data && {
      title: data.company,
      excerpt: data.excerpt,
      spec: data.spec,
      caseStudy: { hero: data.hero },
    };

    const sections = (data?.sections ?? []).map((section, i) => {
      const Section = SECTION_TYPES[section.type];
      return (
        <div key={section.id} id={section.id} className="c-case-anchor" tabIndex={-1}>
          <Section section={section} num={i + 1} />
        </div>
      );
    });

    return (
      <MotionConfig reducedMotion="user">
        <div className="c-single-page c-case">
          {dataLoaded && <CaseHero project={hero ?? NOT_FOUND} />}

          {sections}

          {dataLoaded && !data && (
            <div className="container c-story__missing">
              <Button label="All work experience" to="/work-experience" />
            </div>
          )}

          {currentIndex !== -1 && (
            <Pager
              allEntries={allEntries}
              currentIndex={currentIndex}
              company={data.company}
            />
          )}
        </div>
      </MotionConfig>
    );
  },
);
