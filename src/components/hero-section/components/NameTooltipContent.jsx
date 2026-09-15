// Role is left out on purpose: the tooltip opens right above the
// "Frontend Engineer" headline, so it would say the same thing twice.
const META = [
  { label: "Based in", value: "Novi Sad, Serbia" },
  { label: "Experience", value: "5+ years" },
];

export const NameTooltipContent = () => (
  <div className="c-hero__tt-profile">
    <img className="c-hero__tt-avatar" src="/images/small-avatar.png" alt="" />
    <div className="c-hero__tt-caption">
      <h3 className="c-hero__tt-name">Marko Valuh</h3>
      <ul className="c-hero__tt-meta">
        {META.map(({ label, value }) => (
          <li className="c-hero__tt-meta-row" key={label}>
            <span className="c-hero__tt-meta-label">{label}</span>
            <span className="c-hero__tt-meta-value">{value}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
