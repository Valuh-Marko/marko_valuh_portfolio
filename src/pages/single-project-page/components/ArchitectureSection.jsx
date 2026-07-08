import { SectionLabel } from "./SectionLabel";

const ArchCard = ({ arch, tone }) => (
  <article className={`c-arch-card c-arch-card--${tone}`}>
    <h3 className="c-arch-card__title">{arch.title}</h3>
    <p className="c-arch-card__body">{arch.body}</p>
    <div className="c-arch-card__stack">
      {arch.stack.map((s) => (
        <span key={s}>{s}</span>
      ))}
    </div>
  </article>
);

export const ArchitectureSection = ({ architecture, num }) => (
  <div className="container">
    <div className="c-case-section">
      <SectionLabel num={num} label="Architecture" />

      <div className="c-arch-wrapper">
        <h2 className="c-section__title">Two codebases, one product.</h2>
        <div className="c-arch-grid">
          <ArchCard arch={architecture.backend} tone="backend" />
          <ArchCard arch={architecture.frontend} tone="frontend" />
        </div>

        <div className="c-arch-layers">
          {architecture.layers.map((layer, i) => (
            <div key={layer.name} className="c-arch-layer">
              <span className="c-arch-layer__num">{String(i + 1).padStart(2, "0")}</span>
              <span className="c-arch-layer__name">{layer.name}</span>
              <span className="c-arch-layer__models">{layer.models}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
