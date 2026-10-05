import { SectionLabel } from "./SectionLabel";

export const NotYetSection = ({ notYet, num }) => (
  <section className="container">
    <div className="c-case-section">
      <SectionLabel num={num} label="Not yet" />

      <div className="c-wide">
        <h2 className="c-section__title">{notYet.title}</h2>
        <ul className="c-not-yet__list">
          {notYet.deferrals.map((item) => (
            <li key={item.title} className="c-not-yet__item">
              <span className="c-not-yet__title">{item.title}</span>
              <span className="c-not-yet__note">{item.note}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);
