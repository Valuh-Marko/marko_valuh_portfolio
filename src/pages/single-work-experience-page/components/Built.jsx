// What I built, one row per piece of work.
export const Built = ({ items }) => (
  <dl className="c-built">
    {items.map((item) => (
      <div key={item.term} className="c-built__row">
        <dt>{item.term}</dt>
        <dd>{item.body}</dd>
      </div>
    ))}
  </dl>
);
