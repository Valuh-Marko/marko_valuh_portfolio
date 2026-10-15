import { SectionLabel } from "./SectionLabel";

// The case study's counted-bar table, here counting people instead of tests.
export const TeamSection = ({ section, num }) => (
  <section className="container">
    <div className="c-case-section">
      <SectionLabel num={num} label={section.label} />

      <div className="c-wide">
        <h2 className="c-section__title">{section.title}</h2>
        <div className="c-context__body">
          {section.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <figure className="c-tests">
          <table className="c-tests__table">
            <tbody>
              {section.groups.map((group) => (
                <tr key={group.name}>
                  <td className="c-tests__count">{group.count}</td>
                  <th scope="row" className="c-tests__name">
                    {group.name}
                    <span className="c-tests__note">{group.note}</span>
                  </th>
                  <td className="c-tests__bar-cell" aria-hidden="true">
                    <span
                      className="c-tests__bar"
                      style={{ width: `${(group.count / section.total) * 100}%` }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td className="c-tests__count">{section.total}</td>
                <th scope="row" className="c-tests__name" colSpan={2}>
                  {section.caption}
                </th>
              </tr>
            </tfoot>
          </table>
        </figure>
      </div>
    </div>
  </section>
);
