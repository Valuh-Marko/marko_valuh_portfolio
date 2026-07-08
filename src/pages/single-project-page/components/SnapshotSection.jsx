import { SectionLabel } from "./SectionLabel";

const ICON_SLUGS = {
  NestJS: "nestjs",
  Prisma: "prisma",
  PostgreSQL: "postgresql",
  "Next.js": "nextdotjs",
  React: "react",
  TypeScript: "typescript",
};

const RepoCard = ({ repo, tone }) => (
  <article className={`c-snapshot-card c-snapshot-card--${tone}`}>
    <span className="c-snapshot-card__repo">{repo.repo}</span>
    <div className="c-snapshot-card__stack">
      {repo.stack
        .split(",")
        .map((item) => item.trim())
        .map((name) => (
          <span key={name} className="c-snapshot-card__stack-item">
            {ICON_SLUGS[name] && (
              <img
                src={`https://cdn.simpleicons.org/${ICON_SLUGS[name]}/0a0a0a`}
                alt={name}
                className="c-snapshot-card__stack-icon"
              />
            )}
          </span>
        ))}
    </div>
  </article>
);

export const SnapshotSection = ({ snapshot, num }) => (
  <div className="container">
    <div className="c-case-section">
      <SectionLabel num={num} label="Snapshot" />

      <div className="c-snapshot-wrapper">
        <div className="c-snapshot-grid">
          <RepoCard repo={snapshot.backend} tone="backend" />
          <RepoCard repo={snapshot.frontend} tone="frontend" />
        </div>

        <dl className="c-snapshot-facts">
          <div className="c-snapshot-fact">
            <dt>Real-time layer</dt>
            <dd>{snapshot.realTime}</dd>
          </div>
          <div className="c-snapshot-fact">
            <dt>API surface</dt>
            <dd>{snapshot.apiSurface}</dd>
          </div>
          <div className="c-snapshot-fact">
            <dt>Contract discipline</dt>
            <dd>{snapshot.contractDiscipline}</dd>
          </div>
        </dl>

        {snapshot.soloNote && (
          <p className="c-snapshot__note">{snapshot.soloNote}</p>
        )}
      </div>
    </div>
  </div>
);
