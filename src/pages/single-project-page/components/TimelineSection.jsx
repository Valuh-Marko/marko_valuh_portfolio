import { SectionLabel } from "./SectionLabel";

export const TimelineSection = ({ timeline, num }) => (
  <div className="container">
    <div className="c-case-section">
      <SectionLabel num={num} label="Timeline" />

      <div className="c-timeline-wrapper">
        <h2 className="c-section__title">Build order & velocity.</h2>

        <div className="c-timeline-columns">
          <div className="c-timeline-col">
            <h4 className="c-timeline-col__heading">Backend</h4>
            <div className="c-timeline">
              {timeline.backend.map((item) => (
                <div key={item.milestone} className="c-timeline-item">
                  <span className="c-timeline-item__milestone">{item.milestone}</span>
                  <span className="c-timeline-item__detail">{item.detail}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="c-timeline-col">
            <h4 className="c-timeline-col__heading">Frontend</h4>
            <div className="c-timeline">
              {timeline.frontend.map((item) => (
                <div key={item.step} className="c-timeline-item">
                  <span className="c-timeline-item__milestone">{item.step}</span>
                  <span className="c-timeline-item__detail">{item.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
