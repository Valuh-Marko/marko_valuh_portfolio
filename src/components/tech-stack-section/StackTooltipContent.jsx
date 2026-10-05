// Same caption language as the hero's ID card: name, then a mono meta grid.
export const StackTooltipContent = ({ tech }) => (
  <div className="c-stack-tt">
    <h4 className="c-stack-tt__name">{tech.name}</h4>
    <span className="c-stack-tt__label">Used at</span>
    <ul className="c-stack-tt__list">
      {tech.usedAt.map((place) => (
        <li className="c-stack-tt__row" key={`${place.at}-${place.for ?? ""}`}>
          <span className="c-stack-tt__at">{place.at}</span>
          {place.for && <span className="c-stack-tt__for">{place.for}</span>}
        </li>
      ))}
    </ul>
  </div>
);
