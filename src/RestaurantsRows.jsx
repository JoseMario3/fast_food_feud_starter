import * as React from "react";
import Chip from "./components/Chip/Chip";
import "./components/Chip/Chip.css";

export function RestaurantsRow(props) {
return (
<div className="RestaurantsRow">
    <h2 className="title">Restaurants</h2>
    <div className="restaurants options">
      {props.restaurants.map((restaurant) => (
        <Chip
          label={restaurant}
          key={restaurant}
          isActive={restaurant == props.currentRestaurant}
          onClick={() => props.setRestaurant(restaurant)}
          onClose={(e) => {e.stopPropagation(); props.setRestaurant(null)}}
        />
      ))}
    </div>
</div>
)}

export default RestaurantsRow;