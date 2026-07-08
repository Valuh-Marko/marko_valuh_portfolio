import { SectionLabel } from "./SectionLabel";

export const DesignSystemSection = ({ designSystem, num }) => (
  <div className="container">
    <div className="c-case-section">
      <SectionLabel num={num} label="Design System" />

      <div className="c-section__column">
        <p className="c-context__lede">{designSystem.intro}</p>
      </div>

      <div className="c-swatches">
        {designSystem.swatches.map((swatch) => (
          <div key={swatch.name} className="c-swatch">
            <span className="c-swatch__chip" style={{ backgroundColor: swatch.hex }} />
            <span className="c-swatch__name">{swatch.name}</span>
            <span className="c-swatch__usage">{swatch.usage}</span>
          </div>
        ))}
      </div>

      <div className="c-fonts">
        {designSystem.fonts.map((font) => (
          <div key={font.name} className="c-font-sample">
            <span className="c-font-sample__name">{font.name}</span>
            <span className="c-font-sample__usage">{font.usage}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);
