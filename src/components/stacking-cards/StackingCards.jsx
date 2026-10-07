import { Card } from "./components/Card";
import "./stacking-cards.scss";

export const StackingCards = ({
  response,
  label,
  className,
  long_desc,
  external = false,
  speed = 1.15,
}) => {
  const { data, location } = response;

  const parsedData = data.map((item) => {
    return {
      ...item,
      url: item.url ? `${location}/${item.url}` : null,
    };
  });

  return (
    <div className={`c-stacking-cards${className ? ` ${className}` : ""}`}>
      <div className="c-stacking-cards__track">
        {parsedData.map((item) => (
          <Card
            label={label}
            index={item.id}
            data={item}
            speed={speed}
            key={item.id}
            long_desc={long_desc}
            external={external}
          />
        ))}
      </div>
    </div>
  );
};
