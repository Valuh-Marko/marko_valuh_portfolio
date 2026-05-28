import { SectionLabel } from "./SectionLabel";

export const ScopeSection = ({ scope, num }) => (
  <div className="container">
    <div className="c-context-section">
      <SectionLabel num={num} label="Scope" />

      <div className="c-scope-wrapper">
        <h2 className="c-section__title">What I actually do here.</h2>
        <div className="c-scope">
          {scope.map((item) => (
            <article key={item.num} className="c-scope__item">
              <div className="c-scope__num">
                <span>{item.num}</span>
                <span>{item.area}</span>
              </div>
              <h3 className="c-scope__title">{item.title}</h3>
              <p className="c-scope__body">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  </div>
);
