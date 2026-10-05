import { SectionLabel } from "./SectionLabel";

export const BuildingSection = ({ building, num }) => (
  <section className="container">
    <div className="c-case-section">
      <SectionLabel num={num} label="The building" />

      <div className="c-building__text">
        <h2 className="c-section__title">{building.title}</h2>
        <p className="c-context__lede">{building.lede}</p>
        <div className="c-context__body">
          {building.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>

      <figure className="c-tree">
        <ol className="c-tree__list">
          {building.tree.map((tier) => (
            <li key={tier.name} className="c-tree__tier">
              <span className="c-tree__name">{tier.name}</span>
              <span className="c-tree__note">{tier.note}</span>
            </li>
          ))}
        </ol>
        <figcaption className="c-tree__caption">{building.closing}</figcaption>
      </figure>
    </div>
  </section>
);
