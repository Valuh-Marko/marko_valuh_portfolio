import { SectionLabel } from "./SectionLabel";

export const DesignSystemSection = ({ designSystem, num }) => (
  <section className="container">
    <div className="c-case-section">
      <SectionLabel num={num} label="Design system" />

      <div className="c-wide">
        <h2 className="c-section__title">{designSystem.title}</h2>
        <p className="c-context__lede">{designSystem.intro}</p>

        <ul className="c-swatches">
          {designSystem.swatches.map((swatch) => (
            <li key={swatch.name} className="c-swatch">
              <span
                className="c-swatch__chip"
                style={{ backgroundColor: swatch.value }}
              />
              <code className="c-swatch__name">{swatch.name}</code>
              <code className="c-swatch__value">{swatch.value}</code>
              <span className="c-swatch__usage">{swatch.usage}</span>
            </li>
          ))}
        </ul>

        <dl className="c-fonts">
          {designSystem.fonts.map((font) => (
            <div key={font.name} className="c-fonts__row">
              <dt>{font.name}</dt>
              <dd>{font.usage}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </section>
);
