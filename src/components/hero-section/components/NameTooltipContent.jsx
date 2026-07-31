const META = [
  { label: "Role", value: "Frontend Developer" },
  { label: "Location", value: "Novi Sad, Serbia" },
  { label: "Experience", value: "5+ Years" },
  { label: "Status", value: "Employed" },
];

export const NameTooltipContent = () => (
  <div className="c-hero__tt-profile">
    <img className="c-hero__tt-avatar" src="/images/small-avatar.png" alt="" />
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
);
