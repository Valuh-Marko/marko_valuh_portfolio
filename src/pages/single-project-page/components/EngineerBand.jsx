// Black interstitial between the three product seats and the engineering
// sections below.
export const EngineerBand = ({ engineer }) => (
  <section className="c-engineer">
    <div className="container c-engineer__inner">
      <h2 className="c-engineer__title">{engineer.title}</h2>
      <p className="c-engineer__body">{engineer.body}</p>
    </div>
  </section>
);
