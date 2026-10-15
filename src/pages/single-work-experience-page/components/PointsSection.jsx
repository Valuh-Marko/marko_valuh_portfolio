import { SectionLabel } from "./SectionLabel";

export const PointsSection = ({ section, num }) => (
  <section className="container">
    <div className="c-case-section">
      <SectionLabel num={num} label={section.label} />

      <div className="c-story__text">
        <h2 className="c-section__title">{section.title}</h2>
        {section.intro && <p className="c-context__lede">{section.intro}</p>}
      </div>

      <dl className={`c-points${section.points.length === 2 ? " c-points--pair" : ""}`}>
        {section.points.map((point) => (
          <div key={point.term} className="c-points__item">
            <dt>{point.term}</dt>
            <dd>{point.body}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);
