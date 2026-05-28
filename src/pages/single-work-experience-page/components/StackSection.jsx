import { SectionLabel } from "./SectionLabel";

const ICON_SLUGS = {
  TypeScript:          "typescript",
  JavaScript:          "javascript",
  HTML:                "html5",
  SCSS:                "sass",
  "SCSS/Sass":         "sass",
  Angular:             "angular",
  "Next.js":           "nextdotjs",
  "Nest.js":           "nestjs",
  RxJS:                "reactivex",
  NgRx:                null,
  "Angular Material":  null,
  Figma:               "figma",
  Storybook:           "storybook",
  Git:                 "git",
  ESLint:              "eslint",
  Jira:                "jira",
  Docker:              "docker",
  Jenkins:             "jenkins",
  GCP:                 "googlecloud",
  GraphQL:             "graphql",
  "GH Actions":        "githubactions",
  Webpack:             "webpack",
  PHP:                 "php",
  jQuery:              "jquery",
  GSAP:                "greensock",
  Bootstrap:           "bootstrap",
  Vagrant:             null,
  Swiper:              null,
  "REST API":          null,
  Shell:               null,
};

export const StackSection = ({ stack, num }) => (
  <div className="container">
    <div className="c-context-section">
      <SectionLabel num={num} label="Stack" />

      <div className="c-stack-wrapper">
        <h2 className="c-section__title">Tools I reach for here.</h2>
        <div className="c-stack-groups">
          {stack.map(({ category, items }) => (
            <div key={category} className="c-stack-row">
              <h4 className="c-stack-row__category">{category}</h4>
              <div className="c-stack-tiles">
                {items.map(({ name, usage }) => (
                  <div key={name} className="c-stack-tile">
                    {ICON_SLUGS[name] && (
                      <img
                        src={`https://cdn.simpleicons.org/${ICON_SLUGS[name]}/0a0a0a`}
                        alt={name}
                        className="c-stack-tile__icon"
                      />
                    )}
                    <span className="c-stack-tile__name">{name}</span>
                    <span className="c-stack-tile__usage">{usage}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
