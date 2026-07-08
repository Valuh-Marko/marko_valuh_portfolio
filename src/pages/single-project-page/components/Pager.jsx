import { Link } from "react-router";

const pad = (n) => String(n).padStart(2, "0");

export const Pager = ({ allEntries, currentIndex, title }) => {
  const prevEntry = currentIndex > 0 ? allEntries[currentIndex - 1] : null;
  const nextEntry = currentIndex < allEntries.length - 1 ? allEntries[currentIndex + 1] : null;

  return (
    <div className="container">
      <nav className="c-pager">
        <div className="c-pager__prev">
          {prevEntry ? (
            <>
              <span className="c-pager__label">← Previous · {pad(currentIndex)}</span>
              <Link to={`/projects/${prevEntry.url}`} className="c-pager__link">
                {prevEntry.title}
              </Link>
            </>
          ) : (
            <span className="c-pager__empty">—</span>
          )}
        </div>

        <div className="c-pager__index">
          {pad(currentIndex + 1)} / {pad(allEntries.length)} — {title}
        </div>

        <div className="c-pager__next">
          {nextEntry ? (
            <>
              <span className="c-pager__label">Next · {pad(currentIndex + 2)} →</span>
              <Link to={`/projects/${nextEntry.url}`} className="c-pager__link">
                {nextEntry.title}
              </Link>
            </>
          ) : (
            <span className="c-pager__empty">—</span>
          )}
        </div>
      </nav>
    </div>
  );
};
