import { SectionLabel } from "./SectionLabel";

export const ProcessSection = ({ process, num }) => (
  <div className="container">
    <div className="c-case-section">
      <SectionLabel num={num} label="Engineering Process" />

      <div className="c-section__column">
        <div className="c-context__body">
          {process.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  </div>
);
