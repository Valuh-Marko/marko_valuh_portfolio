import { motion, useReducedMotion } from "motion/react";
import { useContext } from "react";
import { ScrollContext } from "../../../context/ScrollContext";
import { RevealMask } from "../../../components/text-reveal/RevealMask";
import { TextReveal } from "../../../components/text-reveal/TextReveal";

const cellVariants = {
  hidden: { y: "40%", opacity: 0 },
  show: (i) => ({
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.6,
      // The contents rise left to right once the title has landed.
      delay: 0.45 + i * 0.06,
      ease: [0.61, 0.16, 0.17, 0.93],
    },
  }),
};

const Asterisk = () => (
  <svg
    className="c-case-hero__asterisk"
    viewBox="0 0 12 12"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M6 0.5v11M1.24 3.25l9.52 5.5M1.24 8.75l9.52-5.5"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

const ArrowDown = () => (
  <svg
    className="c-case-hero__toc-arrow"
    viewBox="0 0 12 12"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M6 1v10M1.75 6.75L6 11l4.25-4.25"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

// One spec line, revealed part by part after the asterisk. Each part keeps
// its separator inside its mask so the two arrive together; the plain space
// between masks is where a long line wraps on narrow screens.
const SpecLine = ({ parts, separator, index, highlight = false }) => (
  <p className="c-case-hero__spec-line">
    {parts.map((part, i) => {
      const last = i === parts.length - 1;
      return (
        <span key={part}>
          <RevealMask index={index + i}>
            {highlight ? (
              <span className="c-case-hero__highlight">{part}</span>
            ) : (
              part
            )}
            {!last && ` ${separator}`}
          </RevealMask>
          {!last && " "}
        </span>
      );
    })}
  </p>
);

// Black hero shared by every project page. Projects with a case study get
// the full-height version with the spec lines and the contents; the rest
// get title, excerpt and stack.
export const CaseHero = ({ project }) => {
  const { lenis } = useContext(ScrollContext);
  const reduceMotion = useReducedMotion();
  const hero = project.caseStudy?.hero;
  const hook = hero?.hook ?? project.excerpt;
  const titleLength = project.title.length;
  const hookLength = hook.split(" ").length;
  // The spec lines follow the asterisk, one line after another.
  const specStart = titleLength + hookLength + 1;

  // Glide to the section through Lenis instead of the native anchor jump,
  // then hand focus to it so keyboard users continue from there.
  const goTo = (event, id) => {
    const target = document.getElementById(id);
    if (!target || !lenis.current) return;
    event.preventDefault();
    lenis.current.scrollTo(target, {
      immediate: reduceMotion,
      onComplete: () => target.focus({ preventScroll: true }),
    });
  };

  return (
    <header className={`c-case-hero${hero ? " c-case-hero--full" : ""}`}>
      <div className="container c-case-hero__body">
        <div className="c-case-hero__main">
          <TextReveal
            as="h1"
            text={project.title}
            className="c-case-hero__title"
          />

          <TextReveal
            as="p"
            text={hook}
            splitBy="word"
            offset={titleLength}
            className="c-case-hero__hook"
          />

          <RevealMask index={titleLength + hookLength}>
            <Asterisk />
          </RevealMask>

          <div className="c-case-hero__spec">
            {hero && (
              <SpecLine
                parts={[hero.status, hero.period]}
                separator="·"
                index={specStart}
              />
            )}
            {hero && (
              <SpecLine
                parts={hero.highlights}
                separator="/"
                index={specStart + 2}
                highlight
              />
            )}
            {project.spec?.stack?.length > 0 && (
              <SpecLine
                parts={project.spec.stack}
                separator="·"
                index={specStart + 2 + (hero?.highlights.length ?? 0)}
              />
            )}
          </div>
        </div>
      </div>

      {hero && (
        <nav className="container" aria-label="Case study contents">
          <ul className="c-case-hero__toc">
            {hero.index.map((entry, i) => (
              <motion.li
                key={entry.id}
                className="c-case-hero__toc-item"
                custom={i}
                initial="hidden"
                animate="show"
                variants={cellVariants}
              >
                <a
                  className="c-case-hero__toc-link"
                  href={`#${entry.id}`}
                  onClick={(event) => goTo(event, entry.id)}
                >
                  <span className="c-case-hero__toc-label">
                    {entry.label}
                    <ArrowDown />
                  </span>
                  <span className="c-case-hero__toc-note">{entry.note}</span>
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};
