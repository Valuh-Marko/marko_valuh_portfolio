import { SectionLabel } from "./SectionLabel";

export const OverviewSection = ({ overview, num }) => (
  <div className="container">
    <div className="c-case-section">
      <SectionLabel num={num} label="Overview" />

      <div className="c-section__column">
        <p className="c-context__lede">{overview.lede}</p>
      </div>

      {overview.results?.length > 0 && (
        <dl className="c-context__meta">
          {overview.results.map((result) => (
            <div key={result.label} className="c-context__meta-item">
              <dt>{result.label}</dt>
              <dd>{result.value}</dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  </div>
);
