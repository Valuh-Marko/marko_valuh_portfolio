import { SectionLabel } from "./SectionLabel";

export const ProvisioningSection = ({ provisioning, num }) => (
  <section className="container">
    <div className="c-case-section">
      <SectionLabel num={num} label="Provisioning" />

      <div className="c-wide">
        <h2 className="c-section__title">{provisioning.title}</h2>
        <p className="c-context__lede">{provisioning.lede}</p>

        <ol className="c-steps">
          {provisioning.steps.map((step, i) => (
            <li key={step.name} className="c-steps__item">
              <span className="c-steps__num">Step {i + 1}</span>
              <h3 className="c-steps__name">{step.name}</h3>
              <p className="c-steps__note">{step.note}</p>
            </li>
          ))}
        </ol>

        <div className="c-context__body c-provisioning__details">
          {provisioning.details.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <aside className="c-note">
          <p className="c-note__body">{provisioning.growth}</p>
        </aside>
      </div>
    </div>
  </section>
);
