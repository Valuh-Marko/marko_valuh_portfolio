import { useEffect, useState } from "react";
import { StackingCards } from "../stacking-cards/StackingCards";
import "./work-experience.scss";

export const WorkExperience = ({ setContentLoaded }) => {
  const [response, setResponse] = useState();

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
    <div className="container">
      <div className="c-section">
        {/* first column */}
        <span className="c-section__label">
          <span>/</span>
          <span>work experience</span>
        </span>
        {/* second column */}
        <div className="c-section__column">
          <h3 className="c-section__title">The Journey Behind the Expertise</h3>
        </div>
      </div>
      {response && <StackingCards label={"AS"} response={response} />}
    </div>
  );
};
