import { SectionLabel } from "./SectionLabel";

const META_FIELDS = [
  { key: "role",         label: "Role" },
  { key: "tenure",       label: "Tenure",       asideKey: "tenureYears" },
  { key: "location",     label: "Location" },
  { key: "team",         label: "Team" },
  { key: "reportsTo",    label: "Reports to" },
  { key: "primaryStack", label: "Primary stack" },
];

export const ContextSection = ({ context, num }) => {
  const meta = context.meta;

  return (
    <div className="container">
      <div className="c-context-section">
        <SectionLabel num={num} label="Context" />

        <div className="c-section__column">
          <div>
            <p className="c-context__lede">{context.lede}</p>
            <div className="c-context__body">
              {context.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        <dl className="c-context__meta">
          {META_FIELDS.map(({ key, label, asideKey }) => (
            <div key={key} className="c-context__meta-item">
              <dt>{label}</dt>
              <dd>
                <span>{meta[key]}</span>
                {asideKey && meta[asideKey] && (
                  <span className="c-context__meta-aside">{meta[asideKey]}</span>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};
