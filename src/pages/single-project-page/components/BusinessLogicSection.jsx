import { SectionLabel } from "./SectionLabel";

export const BusinessLogicSection = ({ businessLogic, num }) => (
  <div className="container">
    <div className="c-case-section">
      <SectionLabel num={num} label="Business Logic" />

      <div className="c-logic-wrapper">
        <h2 className="c-section__title">The densest logic in the codebase.</h2>
        <div className="c-logic-grid">
          {businessLogic.map((item) => (
            <article key={item.title} className="c-logic-card">
              <h3 className="c-logic-card__title">{item.title}</h3>
              <p className="c-logic-card__body">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  </div>
);
