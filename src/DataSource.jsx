import * as React from "react";
import "./components/Chip/Chip.css";

export function DataSource(props) {
return (
<div className="data-sources">
    <p>{props.appInfo.dataSource}</p>
</div>
)}

export default DataSource;