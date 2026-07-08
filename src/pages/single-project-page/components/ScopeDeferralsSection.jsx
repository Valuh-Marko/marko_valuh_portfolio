import { SectionLabel } from "./SectionLabel";

export const ScopeDeferralsSection = ({ scopeDeferrals, num }) => (
  <div className="container">
    <div className="c-case-section">
      <SectionLabel num={num} label="Scope & Deferrals" />

      <div className="c-deferrals-wrapper">
        <h2 className="c-section__title">Deliberately not built yet.</h2>
        <div className="c-deferrals-list">
          {scopeDeferrals.map((item) => (
            <article key={item.title} className="c-deferral-item">
              <span className="c-deferral-item__tag">Planned</span>
              <h3 className="c-deferral-item__title">{item.title}</h3>
              <p className="c-deferral-item__note">{item.note}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  </div>
);
