import * as React from "react";
import Chip from "./components/Chip/Chip";
import "./components/Chip/Chip.css";

export function CategoriesColumn (props){
return (
<div className="CategoriesColumn col">
  <div className="categories options">
    <h2 className="title">Categories</h2>
    {props.categories.map((category) => (
      <Chip
        label={category}
        key={category}
        isActive={category == props.currentCategory}
        onClick={() => props.setCategory(category)}
        onClose={(e) => {e.stopPropagation(); props.setCategory(null)}}
      />
    ))}
  </div>
</div>
)}

export default CategoriesColumn;