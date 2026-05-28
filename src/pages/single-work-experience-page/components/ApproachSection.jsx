import { SectionLabel } from "./SectionLabel";

export const ApproachSection = ({ approach, num }) => (
  <div className="container">
    <div className="c-context-section">
      <SectionLabel num={num} label="Approach" />

      <div className="c-approach-wrapper">
        <h2 className="c-section__title">How I try to work, here and elsewhere.</h2>
        <div className="c-approach">
          {approach.map((item) => (
            <article key={item.num} className="c-approach__card">
              <div className="c-approach__num">{item.num} / Principle</div>
              <h3 className="c-approach__title">{item.title}</h3>
              <p className="c-approach__body">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  </div>
);
