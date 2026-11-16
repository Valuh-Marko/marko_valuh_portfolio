import { Built } from "./Built";
import { SectionLabel } from "./SectionLabel";

// Several projects under one heading, side by side from lg. For clients that
// can't be named or shown, so there are no screenshots.
export const ProjectsSection = ({ section, num }) => (
  <section className="container">
    <div className="c-case-section">
      <SectionLabel num={num} label={section.label} />

      <div className="c-job__text">
        <h2 className="c-section__title">{section.title}</h2>
        <p className="c-context__lede">{section.lede}</p>
      </div>

      <div className="c-job__projects">
        {section.items.map((item) => (
          <article key={item.name} className="c-job__project">
            <h3 className="c-job__project-name">{item.name}</h3>
            <p className="c-tags c-job__meta">{item.meta}</p>
            <p className="c-job__project-summary">{item.summary}</p>
            <Built items={item.built} />
            <p className="c-tags">{item.tags.join(" · ")}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
