import { ShotSlot } from "../../single-project-page/components/ShotSlot";
import { Built } from "./Built";
import { SectionLabel } from "./SectionLabel";

// One engagement per section: headline and prose, then whatever proves it.
// A screenshot sits beside the built list at xl; a chain of layers takes the
// case study's tree figure and sits beside the text instead.
export const EngagementSection = ({ section, num }) => (
  <section className="container">
    <div className="c-case-section">
      <SectionLabel num={num} label={section.label} />

      <div className={`c-job__text${section.chain ? " c-job__text--beside" : ""}`}>
        <h2 className="c-section__title">{section.title}</h2>
        {section.meta && <p className="c-tags c-job__meta">{section.meta}</p>}
        <p className="c-context__lede">{section.lede}</p>
        {section.body && (
          <div className="c-context__body">
            {section.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        )}
      </div>

      {section.chain && (
        <figure className="c-tree">
          <ol className="c-tree__list">
            {section.chain.links.map((link) => (
              <li key={link.name} className="c-tree__tier">
                <span className="c-tree__name">{link.name}</span>
                <span className="c-tree__note">{link.note}</span>
              </li>
            ))}
          </ol>
          <figcaption className="c-tree__caption">{section.chain.caption}</figcaption>
        </figure>
      )}

      {section.shot && <ShotSlot shot={section.shot} className="c-job__shot" />}

      {section.built && (
        <div className={`c-job__built${section.shot ? " c-job__built--beside" : ""}`}>
          <Built items={section.built} />
          {section.tags && <p className="c-tags">{section.tags.join(" · ")}</p>}
        </div>
      )}
    </div>
  </section>
);
