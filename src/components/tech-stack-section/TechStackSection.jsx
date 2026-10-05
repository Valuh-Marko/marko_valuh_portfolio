import React from "react";

import { Tooltip } from "../tooltip/Tooltip";
import { STACK } from "./stack";
import { StackTooltipContent } from "./StackTooltipContent";
import "./tech-stack-section.scss";

// Long enough that sweeping the cursor across the plate stays quiet.
const TOOLTIP_DELAY = 680;

export const TechStackSection = () => {
  return (
    <div className="container">
      <div className="c-section">
        {/* first column */}
        <span className="c-section__label">
          <span>/</span>
          <span>Tech Stack</span>
        </span>
        {/* second column */}
        <div className="c-section__column">
          <h2 className="c-section__title c-tech-stack__title">
            The tools I reach for before anything else
          </h2>
        </div>
        {/* One sliced-corner plate split into cells by white channels; the
            tooltip sits inside each <li> so the list keeps valid markup. */}
        <ul className="c-stack-plate">
          {STACK.map((tech) => (
            <li key={tech.name} className="c-stack-plate__cell">
              <Tooltip
                content={<StackTooltipContent tech={tech} />}
                showDelay={TOOLTIP_DELAY}
              >
                <div className="c-stack-plate__inner">
                  <tech.Icon className="c-stack-plate__icon" aria-hidden="true" />
                  <span className="c-stack-plate__name">{tech.name}</span>
                </div>
              </Tooltip>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
