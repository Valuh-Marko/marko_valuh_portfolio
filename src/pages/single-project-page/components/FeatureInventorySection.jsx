import { SectionLabel } from "./SectionLabel";

export const FeatureInventorySection = ({ featureInventory, num }) => (
  <div className="container">
    <div className="c-case-section">
      <SectionLabel num={num} label="Feature Inventory" />

      <div className="c-inventory-wrapper">
        <h2 className="c-section__title">What's actually shipped.</h2>
        <div className="c-inventory-grid">
          {featureInventory.map((item) => (
            <div key={item.name} className="c-inventory-item">
              <span className="c-inventory-item__tag">{item.status}</span>
              <span className="c-inventory-item__name">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
