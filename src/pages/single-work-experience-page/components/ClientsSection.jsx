import { ShotSlot } from "../../single-project-page/components/ShotSlot";
import { SectionLabel } from "./SectionLabel";

// The case study's seat layout, one seat per client: six children each, so
// the screenshots line up across the row at xl.
export const ClientsSection = ({ section, num }) => (
  <section className="container">
    <div className="c-case-section">
      <SectionLabel num={num} label={section.label} />

      <div className="c-seats__head">
        <h2 className="c-section__title">{section.title}</h2>
        <p className="c-context__lede">{section.intro}</p>
      </div>

      <div className="c-seats">
        {section.items.map((item) => (
          <article key={item.id} id={item.id} className="c-seat" tabIndex={-1}>
            <h3 className="c-seat__name">{item.name}</h3>
            <span className="c-seat__role">{item.meta}</span>
            <p className="c-seat__summary">{item.summary}</p>
            <ShotSlot shot={item.shot} />
            <ul className="c-seat__can">
              {item.did.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <p className="c-tags">{item.tags.join(" · ")}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
