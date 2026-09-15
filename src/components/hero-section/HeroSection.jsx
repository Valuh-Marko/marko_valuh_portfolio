import { motion, useReducedMotion } from "motion/react";
import { Button } from "../button/Button";
import { RevealMask } from "../text-reveal/RevealMask";
import { TextReveal } from "../text-reveal/TextReveal";
import { Tooltip } from "../tooltip/Tooltip";
import { NameTooltipContent } from "./components/NameTooltipContent";
import "./hero-section.scss";

const EMAIL = "marko.valuh@gmail.com";

// Teams from work_experience.json, oldest first; AxiomQ is current.
const REFERENCES = "Ex. Codeplicity / EPAM Systems / NQode · Now AxiomQ";

// Screenshots and live sites from projects.json; the middle one is the
// only frame shown on phones.
const SHELF = [
  {
    title: "World Best Brands",
    href: "https://worldbestbrands.net/",
    image: "/images/wbb.webp",
  },
  {
    title: "STK Vojvodina, Novi Sad",
    href: "https://www.stkvojvodina.org.rs/",
    image: "/images/stkvojvodinapng.webp",
  },
  {
    title: "Dr Bean Coffee",
    href: "https://www.drbean.org/",
    image: "/images/drbean.webp",
  },
];
const MOBILE_INDEX = 1;

const frameVariants = {
  hidden: { y: "40%", opacity: 0 },
  show: (i) => ({
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.6,
      // Frames rise left to right as the text column lands.
      delay: 0.3 + i * 0.06,
      ease: [0.61, 0.16, 0.17, 0.93],
    },
  }),
};

export const HeroSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <div className="c-hero">
      <div className="container c-hero__column">
        <div className="c-hero__stack">
          <RevealMask index={0}>
            <Tooltip content={<NameTooltipContent />}>
              <img
                className="c-hero__avatar"
                src="/images/small-avatar.png"
                alt="Marko Valuh"
                width="56"
                height="56"
              />
            </Tooltip>
          </RevealMask>

          <RevealMask index={2}>
            <a className="c-hero__email" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
          </RevealMask>

          <h1 className="c-hero__title">
            <TextReveal text="Frontend Engineer" as="span" offset={4} />
          </h1>

          <p className="c-hero__intro">
            <TextReveal
              text="I bring solid frontend engineering skills and a sharp eye for UI/UX to craft seamless digital experiences."
              splitBy="word"
              offset={10}
            />
          </p>

          <RevealMask index={22}>
            <svg
              className="c-hero__asterisk"
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
          </RevealMask>

          <TextReveal
            as="p"
            text={REFERENCES}
            splitBy="word"
            offset={24}
            className="c-hero__references"
          />

          <div className="c-hero__action">
            <RevealMask index={34}>
              <Button
                label="Work Experience"
                color="white"
                variant="filled"
                to="/work-experience"
              />
            </RevealMask>
          </div>
        </div>
      </div>

      <ul className="container c-hero__shelf" aria-label="Selected projects">
        {SHELF.map(({ title, href, image }, i) => (
          <motion.li
            key={href}
            className={`c-hero__frame${i === MOBILE_INDEX ? " c-hero__frame--mobile" : ""}`}
            custom={i}
            initial={reduceMotion ? false : "hidden"}
            animate="show"
            variants={frameVariants}
          >
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="c-hero__frame-link"
              aria-label={`${title} (opens in a new tab)`}
            >
              <img
                className="c-hero__frame-img"
                src={image}
                alt=""
                loading={i === MOBILE_INDEX ? "eager" : "lazy"}
                decoding="async"
              />
            </a>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};
