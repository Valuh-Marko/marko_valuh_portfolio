import { motion } from "motion/react";
import { Button } from "../../button/Button";

export const Card = ({ label, index, data, top, long_desc, external = false }) => {
  const spec = data.spec;
  const cardId = `${label}/${String(index).padStart(3, "0")}`;

  return (
    <motion.div
      style={{ top: `${(index - 1) * 5}rem`, y: top }}
      className="c-card-container"
    >
      <div className="c-section__label">
        {label}/00{index}
      </div>

      <div className="c-card__content">
        <h3 className={`c-card__title ${data.subtitle ? "" : "c-card__title--no-subtitle"}`}>
          {data.title}
        </h3>
        {data.subtitle && (
          <div className="c-card__subtitle">{data.subtitle}</div>
        )}
        <p className="c-card__excerpt">
          {long_desc ? data.excerpt_xl : data.excerpt}
        </p>
        {external ? (
          <Button label="Visit Website" blankTarget={true} to={data.external_url} />
        ) : (
          <Button label="Find out more" to={data.url} />
        )}
      </div>

      {spec && (
        <aside className="c-card__spec">
          <header className="c-card__spec-head">
            <span className="c-card__spec-id">{cardId}</span>
            <span>SPEC SHEET</span>
          </header>

          <dl className="c-card__spec-fields">
            {external ? (
              <>
                <dt>Domain</dt>
                <dd>{spec.domain}</dd>
              </>
            ) : (
              <>
                <dt>Location</dt>
                <dd>
                  {spec.location}
                  {spec.locationSub && (
                    <span className="c-card__spec-sub">{spec.locationSub}</span>
                  )}
                </dd>
              </>
            )}
            {spec.stack?.length > 0 && (
              <>
                <dt>Stack</dt>
                <dd>
                  <div className="c-card__spec-chips">
                    {spec.stack.map((s) => <span key={s}>{s}</span>)}
                  </div>
                </dd>
              </>
            )}
          </dl>

          {spec.stats?.length > 0 && (
            <div className="c-card__spec-stats">
              <div className="c-card__spec-stats-label">Selected outcomes</div>
              <ul>
                {spec.stats.map((stat, i) => (
                  <li key={i} data-i={String(i + 1).padStart(2, "0")}>
                    <span><b>{stat.value}</b> {stat.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {spec.footer?.length > 0 && (
            <footer className="c-card__spec-footer">
              {spec.footer.map((f) => <span key={f}>{f}</span>)}
            </footer>
          )}
        </aside>
      )}
    </motion.div>
  );
};
