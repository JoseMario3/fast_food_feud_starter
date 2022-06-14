import * as React from "react";
import Chip from "./components/Chip/Chip";
import NutritionalLabel from "./components/NutritionalLabel/NutritionalLabel";
import "./components/Chip/Chip.css";

export function MenuDisplay(props) {
return (
<div className="MenuDisplay display">
    <div className="MenuItemButtons menu-items">
      <h2 className="title">Menu Items</h2>
      {props.currentMenuItems.map((menuItem, idx) => (
        <Chip
          label={menuItem.item_name}
          key={idx}
          isActive={menuItem === props.currentMenuItem}
          onClick={() => {
            props.setSelectedMenuItem(menuItem);
          }}
          onClose={(e) => {e.stopPropagation(); props.setSelectedMenuItem(null)}}
        />
      ))}
    </div>

    {/* NUTRITION FACTS */}
    <div className="NutritionFacts nutrition-facts">
      {props.currentMenuItem != null && <NutritionalLabel item={props.currentMenuItem}/>}
    </div>
  </div>
)}

export default MenuDisplay;