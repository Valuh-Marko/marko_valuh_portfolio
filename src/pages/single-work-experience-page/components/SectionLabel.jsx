const pad = (n) => `WE/${String(n).padStart(3, "0")}`;

export const SectionLabel = ({ num, label }) => (
  <span className="c-section__label">
    <span>{pad(num)}</span>-<span>{label}</span>
  </span>
);
