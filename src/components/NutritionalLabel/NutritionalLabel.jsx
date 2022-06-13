import * as React from "react";
import { nutritionFacts } from "../../constants";
import "./NutritionalLabel.css";

export function NutritionalLabel(props) {
  return (
    <div className="nutritional-label">
      <h3 className="title">Nutrition Facts</h3>

      <h4 className="item-name">{props.selectedMenuItem}</h4>

      <ul className="fact-list">
        {nutritionFacts.forEach((fact) => (
          <NutritionalLabelFact
            fact={fact}
            key={fact.id}
            label={fact.label}
            attribute={fact.attribute}
          />
        ))}
      </ul>
    </div>
  );
}

export function NutritionalLabelFact(props) {
  return (
    <li className="nutrition-fact">
      <span className="fact-label">{props.label}</span>{" "}
      <span className="fact-value">{/* WRITE CODE HERE */}</span>
    </li>
  );
}

export default NutritionalLabel;
