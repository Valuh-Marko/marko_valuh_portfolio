import { SectionLabel } from "./SectionLabel";

export const DataModelSection = ({ dataModel, num }) => (
  <div className="container">
    <div className="c-case-section">
      <SectionLabel num={num} label="Data Model & Auth" />

      <div className="c-section__column">
        <p className="c-context__lede">{dataModel.rolesIntro}</p>

        <div className="c-auth-steps">
          {dataModel.authLayers.map((layer) => (
            <article key={layer.num} className="c-auth-step">
              <div className="c-auth-step__num">{layer.num}</div>
              <h3 className="c-auth-step__title">{layer.title}</h3>
              <p className="c-auth-step__body">{layer.body}</p>
            </article>
          ))}
        </div>

        {dataModel.callerRoleNote && (
          <p className="c-context__body">
            <span>{dataModel.callerRoleNote}</span>
          </p>
        )}
      </div>
    </div>
  </div>
);
