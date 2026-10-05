import { SectionLabel } from "./SectionLabel";

export const ArchitectureSection = ({ architecture, num }) => (
  <section className="container">
    <div className="c-case-section">
      <SectionLabel num={num} label="Architecture" />

      <div className="c-wide">
        <h2 className="c-section__title">{architecture.title}</h2>
        <p className="c-context__lede">{architecture.intro}</p>

        <div className="c-arch-apps">
          {architecture.apps.map((app) => (
            <article key={app.name} className="c-arch-app">
              <h3 className="c-arch-app__name">{app.name}</h3>
              <p className="c-arch-app__body">{app.body}</p>
              <p className="c-tags">{app.stack.join(" · ")}</p>
            </article>
          ))}
        </div>

        <table className="c-layers">
          <caption className="c-figure-caption">
            Schema layers
          </caption>
          <tbody>
            {architecture.layers.map((layer) => (
              <tr key={layer.name}>
                <th scope="row">{layer.name}</th>
                <td>{layer.models}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);
