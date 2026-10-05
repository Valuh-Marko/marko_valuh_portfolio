import { SectionLabel } from "./SectionLabel";

export const ProcessSection = ({ process, num }) => {
  const { tests } = process;
  const total = Number(tests.total);

  return (
    <section className="container">
      <div className="c-case-section">
        <SectionLabel num={num} label="Testing" />

        <div className="c-wide">
          <h2 className="c-section__title">{process.title}</h2>
          <div className="c-context__body c-process__body">
            {process.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <figure className="c-tests">
            <table className="c-tests__table">
              <tbody>
                {tests.groups.map((group) => (
                  <tr key={group.name}>
                    <td className="c-tests__count">{group.count}</td>
                    <th scope="row" className="c-tests__name">
                      {group.name}
                      <span className="c-tests__note">{group.note}</span>
                    </th>
                    <td className="c-tests__bar-cell" aria-hidden="true">
                      <span
                        className="c-tests__bar"
                        style={{ width: `${(group.count / total) * 100}%` }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td className="c-tests__count">{tests.total}</td>
                  <th scope="row" className="c-tests__name" colSpan={2}>
                    {tests.caption}
                  </th>
                </tr>
              </tfoot>
            </table>
          </figure>
        </div>
      </div>
    </section>
  );
};
