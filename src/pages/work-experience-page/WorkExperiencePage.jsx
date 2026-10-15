import { MotionConfig } from "motion/react";
import { useEffect, useState } from "react";
import { StackingCards } from "../../components/stacking-cards/StackingCards";
import { CaseHero } from "../single-project-page/components/CaseHero";
import "../single-project-page/single-project-page.scss";
import WithTransition from "../with-transition/WithTransition";
import "./work_experience.scss";

const HERO = {
  title: "Work experience",
  excerpt:
    "Front-end work since February 2021. A small agency first, then two years on a live betting product at EPAM, three clients through NQode, and now AxiomQ.",
};

export const WorkExperiencePage = WithTransition(({ setContentLoaded }) => {
  const [response, setResponse] = useState();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/data/work_experience.json");
      const data = await res.json();
      setResponse(data);
      setContentLoaded();
    }

    fetchData();
  }, [setContentLoaded]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="c-work-experience c-case">
        <CaseHero project={HERO} />
        <div className="container">
          <h2 className="u-visually-hidden">Jobs</h2>
          {response && (
            <StackingCards
              className="c-work-experience__cards"
              label={"WE"}
              response={response}
            ></StackingCards>
          )}
        </div>
      </div>
    </MotionConfig>
  );
});
