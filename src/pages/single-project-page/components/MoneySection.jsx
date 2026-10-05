import { SectionLabel } from "./SectionLabel";
import { ShotSlot } from "./ShotSlot";

// A ledger drawn from illustrative rows: one storno pair, then the line a
// published report draws under the period.
const LedgerFigure = ({ ledger }) => {
  const reversedBy = Object.fromEntries(
    ledger.rows.filter((row) => row.reverses).map((row) => [row.reverses, row.id]),
  );

  return (
    <figure className="c-ledger">
      <table className="c-ledger__table">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Date</th>
            <th scope="col">Entry</th>
            <th scope="col" className="c-ledger__amount">
              RSD
            </th>
          </tr>
        </thead>
        <tbody>
          {ledger.rows.map((row) => (
            <tr
              key={row.id}
              className={row.reverses ? "c-ledger__row--storno" : undefined}
            >
              <td className="c-ledger__id">{row.id}</td>
              <td>{row.date}</td>
              <td>
                {row.text}
                {row.reverses && (
                  <span className="c-ledger__link">Reverses {row.reverses}</span>
                )}
                {reversedBy[row.id] && (
                  <span className="c-ledger__link">Reversed by {reversedBy[row.id]}</span>
                )}
              </td>
              <td className="c-ledger__amount">{row.amount}</td>
            </tr>
          ))}
        </tbody>
        <tbody className="c-ledger__locked">
          <tr className="c-ledger__lock">
            <td colSpan={4}>{ledger.lock}</td>
          </tr>
          <tr className="c-ledger__refused">
            <td className="c-ledger__id" aria-hidden="true" />
            <td>{ledger.refused.date}</td>
            <td>{ledger.refused.text}</td>
            <td className="c-ledger__amount">
              <span className="c-ledger__status">{ledger.refused.result}</span>
            </td>
          </tr>
        </tbody>
      </table>
      <figcaption className="c-figure-caption">{ledger.caption}</figcaption>
    </figure>
  );
};

export const MoneySection = ({ money, num }) => (
  <section className="container">
    <div className="c-case-section">
      <SectionLabel num={num} label="Money" />

      <div className="c-money__text">
        <h2 className="c-section__title">{money.title}</h2>
        <p className="c-context__lede">{money.lede}</p>
      </div>

      <ShotSlot shot={money.shot} className="c-money__shot" />

      <LedgerFigure ledger={money.ledger} />

      <dl className="c-points">
        {money.points.map((point) => (
          <div key={point.title} className="c-points__item">
            <dt>{point.title}</dt>
            <dd>{point.body}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);
