import { SectionLabel } from "./SectionLabel";

const DENIED = new Set(["403", "hidden"]);

const MatrixCell = ({ value }) => {
  if (value === null) {
    return (
      <td className="c-matrix__cell c-matrix__cell--none">
        <span aria-hidden="true">–</span>
        <span className="u-visually-hidden">Not asserted</span>
      </td>
    );
  }

  return (
    <td
      className={`c-matrix__cell${DENIED.has(value) ? " c-matrix__cell--denied" : ""}`}
    >
      {value}
    </td>
  );
};

export const AccessSection = ({ access, num }) => (
  <section className="container">
    <div className="c-case-section">
      <SectionLabel num={num} label="Access" />

      <div className="c-access__text">
        <h2 className="c-section__title">{access.title}</h2>
        <p className="c-context__lede">{access.lede}</p>
      </div>

      <dl className="c-policies">
        {access.policies.map((policy) => (
          <div key={policy.name} className="c-policies__row">
            <dt>
              <code>{policy.name}</code>
            </dt>
            <dd>{policy.note}</dd>
          </div>
        ))}
      </dl>

      <div className="c-context__body c-access__body">
        {access.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <figure className="c-matrix">
        <div className="c-matrix__scroll" tabIndex={0} role="region" aria-label="Access matrix">
          <table className="c-matrix__table">
            <thead>
              <tr>
                <th scope="col" className="c-matrix__corner">
                  <span className="u-visually-hidden">Actor</span>
                </th>
                {access.matrix.cols.map((col) => (
                  <th key={col} scope="col">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {access.matrix.rows.map((row) => (
                <tr key={row.actor}>
                  <th scope="row">{row.actor}</th>
                  {row.cells.map((value, i) => (
                    <MatrixCell key={access.matrix.cols[i]} value={value} />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <figcaption className="c-figure-caption">{access.matrix.caption}</figcaption>
      </figure>

      <aside className="c-note">
        <h3 className="c-note__title">{access.growth.title}</h3>
        <p className="c-note__body">{access.growth.body}</p>
      </aside>
    </div>
  </section>
);
