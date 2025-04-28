import React, { useState } from "react";

import { Button } from "../button/Button";
import { BackEndTech } from "./components/BackEndTech";
import { UiUx } from "./components/UiUx";
import { WorkFlowTech } from "./components/WorkFlowTech";
import "./accompany-stack-section.scss";

export const AccompanyStackSection = () => {
  const [index, setIndex] = useState(1);

  return (
    <div className="container">
      <div className="c-acc-stack">
        <div className="c-acc-stack__label">
          <span>/</span>
          <span>Auxiliary Stack</span>
        </div>
        <div className="c-acc-button-stack">
          <Button
            onClick={() => setIndex(1)}
            label="UI / UX"
            selected={index === 1}
          />
          <Button
            onClick={() => setIndex(2)}
            label="Back_end & DB"
            selected={index === 2}
          />
          <Button
            onClick={() => setIndex(3)}
            label="Tools & Technologies"
            selected={index === 3}
          />
        </div>
      </div>
      <div className="c-acc-stack-container">
        {index === 1 && <UiUx index={index} />}
        {index === 2 && <BackEndTech index={index} />}
        {index === 3 && <WorkFlowTech index={index} />}
      </div>
    </div>
  );
};
