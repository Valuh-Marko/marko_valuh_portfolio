import { SectionLabel } from "./SectionLabel";

export const WarStorySection = ({ warStory, num }) => (
  <div className="container">
    <div className="c-case-section">
      <SectionLabel num={num} label="War Story" />

      <div className="c-section__column c-war-story">
        <h3 className="c-war-story__title">{warStory.title}</h3>
        <p className="c-war-story__body">{warStory.body}</p>
      </div>
    </div>
  </div>
);
