import { SectionLabel } from "./SectionLabel";

export const ProblemSection = ({ problem, num }) => (
  <div className="container">
    <div className="c-case-section">
      <SectionLabel num={num} label="Problem" />

      <div className="c-section__column">
        <p className="c-context__lede">{problem.lede}</p>
        <div className="c-context__body">
          {problem.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
        {problem.closing && <p className="c-problem__closing">{problem.closing}</p>}
      </div>

      <div className="c-hierarchy">
        <h4 className="c-hierarchy__title">Domain hierarchy</h4>
        <ol className="c-hierarchy__list">
          {problem.hierarchy.map((tier) => (
            <li key={tier} className="c-hierarchy__item">
              {tier}
            </li>
          ))}
        </ol>
      </div>
    </div>
  </div>
);
