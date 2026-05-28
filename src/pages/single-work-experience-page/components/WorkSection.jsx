import { SectionLabel } from "./SectionLabel";

const WORK_TITLE_WORDS = [
  "", "A project", "Two projects", "Three projects", "Four projects", "Five projects",
];

const WorkCard = ({ item }) => (
  <article className="c-work-card">
    <div className="c-work-card__thumb">
      <span className="c-work-card__fig">FIG. {item.num}</span>
      <span className="c-work-card__placeholder">NDA-protected work</span>
    </div>
    <div className="c-work-card__meta">
      <span>{item.num} · {item.type}</span>
      <span>{item.dates}</span>
    </div>
    <h3 className="c-work-card__title">{item.title}</h3>
    <p className="c-work-card__blurb">{item.blurb}</p>
    <div className="c-work-card__tags">
      {item.tags.map((tag) => (
        <span key={tag} className="c-work-card__tag">{tag}</span>
      ))}
    </div>
  </article>
);

const FeaturedCard = ({ item }) => (
  <div className="c-work-featured">
    <div className="c-work-card__thumb">
      <span className="c-work-card__fig">FIG. {item.num}</span>
      <span className="c-work-card__placeholder">NDA-protected work</span>
    </div>
    <div className="c-work-featured__details">
      <div className="c-work-card__meta">
        <span>{item.num} · {item.type}</span>
        <span>{item.dates}</span>
      </div>
      <h3 className="c-work-card__title">{item.title}</h3>
      <p className="c-work-card__blurb">{item.blurb}</p>
      <div className="c-work-card__tags">
        {item.tags.map((tag) => (
          <span key={tag} className="c-work-card__tag">{tag}</span>
        ))}
      </div>
    </div>
  </div>
);

export const WorkSection = ({ work, num }) => {
  const title = `${WORK_TITLE_WORDS[work.length] ?? `${work.length} projects`} worth talking about.`;

  return (
    <div className="container">
      <div className="c-context-section">
        <SectionLabel num={num} label="Work" />

        <div className="c-work-wrapper">
          <h2 className="c-section__title">{title}</h2>
          {work.length === 1 ? (
            <FeaturedCard item={work[0]} />
          ) : (
            <div className="c-work-grid">
              {work.map((item) => <WorkCard key={item.num} item={item} />)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
