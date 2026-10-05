// A product screenshot, or a hatched slot holding its place until the
// image exists. Set `src` in projects.json to swap the slot for the image.
export const ShotSlot = ({ shot, className = "" }) => (
  <figure className={`c-shot ${className}`}>
    <div className="c-shot__frame">
      {shot.src ? (
        <img
          className="c-shot__img"
          src={shot.src}
          alt={shot.alt}
          loading="lazy"
          decoding="async"
        />
      ) : (
        <span className="c-shot__pending">Screenshot pending · 16:10</span>
      )}
    </div>
    <figcaption className="c-shot__caption">{shot.caption}</figcaption>
  </figure>
);
