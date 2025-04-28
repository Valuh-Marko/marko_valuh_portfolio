import React from "react";
import "./work-experience.scss";
import { StackingCards } from "../stacking-cards/StackingCards";
import response from "../../data/work_experience.json";

export const WorkExperience = () => {
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
      <StackingCards label={"AS"} response={response} />
    </div>
  );
};
