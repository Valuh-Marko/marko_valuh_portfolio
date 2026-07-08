import { SectionLabel } from "./SectionLabel";

export const FrontendSection = ({ frontendDeepDive, num }) => {
  const feature = frontendDeepDive.standoutFeature;

  return (
    <div className="container">
      <div className="c-case-section">
        <SectionLabel num={num} label="Frontend" />

        <div className="c-section__column">
          <p className="c-context__lede">{frontendDeepDive.body}</p>
        </div>

        {feature && (
          <div className="c-standout">
            <div className="c-standout__thumb">
              <span className="c-standout__placeholder">Screenshot pending</span>
            </div>
            <div className="c-standout__details">
              <h3 className="c-standout__title">{feature.title}</h3>
              <p className="c-standout__intro">{feature.intro}</p>
              <ul className="c-standout__steps">
                {feature.steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
