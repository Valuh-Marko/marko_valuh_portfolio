import { SectionLabel } from "./SectionLabel";

export const GrowthSection = ({ growth, num }) => (
  <section className="container">
    <div className="c-case-section">
      <SectionLabel num={num} label="Growth" />

      <div className="c-wide">
        <h2 className="c-section__title">{growth.title}</h2>

        <ol className="c-bursts">
          {growth.bursts.map((burst) => (
            <li key={burst.date} className="c-bursts__item">
              <time className="c-bursts__date" dateTime={burst.date}>
                {burst.date}
              </time>
              <h3 className="c-bursts__title">{burst.title}</h3>
              <p className="c-bursts__body">{burst.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);
