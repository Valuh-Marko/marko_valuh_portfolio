import { ShotSlot } from "../../single-project-page/components/ShotSlot";
import { SectionLabel } from "./SectionLabel";

export const ProseSection = ({ section, num }) => (
  <section className="container">
    <div className="c-case-section">
      <SectionLabel num={num} label={section.label} />

      <div className="c-story__text">
        <h2 className="c-section__title">{section.title}</h2>
        <p className="c-context__lede">{section.lede}</p>
        {section.body && (
          <div className="c-context__body">
            {section.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        )}
      </div>

      {section.shot && <ShotSlot shot={section.shot} className="c-story__shot" />}
    </div>
  </section>
);
