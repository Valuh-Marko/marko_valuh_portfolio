import { SectionLabel } from "./SectionLabel";
import { ShotSlot } from "./ShotSlot";

export const SeatsSection = ({ seats, num }) => (
  <section className="container">
    <div className="c-case-section">
      <SectionLabel num={num} label="Three seats" />

      <div className="c-seats__head">
        <h2 className="c-section__title">{seats.title}</h2>
        <p className="c-context__lede">{seats.intro}</p>
      </div>

      <div className="c-seats">
        {seats.items.map((item) => (
          <article key={item.id} id={item.id} className="c-seat">
            <h3 className="c-seat__name">{item.seat}</h3>
            <code className="c-seat__role">{item.role}</code>
            <p className="c-seat__summary">{item.summary}</p>
            <ShotSlot shot={item.shot} />
            <ul className="c-seat__can">
              {item.can.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <p className="c-seat__guard">
              <strong>What protects it.</strong> {item.guard}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
