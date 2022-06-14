import * as React from "react";

export function Chip({ label = "", isActive = false, onClick = () => {}, onClose = () => {}}) {
  let buttonClassName = isActive ? "chip active" : "chip";
  return (
    <button className={buttonClassName} onClick={onClick}>
      <p className="label">{label}</p>
      <span className="close" role="button" onClick={onClose}>{`X`}</span>
    </button>
  );
}

export default Chip;
