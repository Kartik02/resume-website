import React from "react";

function Heading({ title, subtext }) {
  return (
    <div className="heading">
      <div className="title">{title}</div>
      <div className="subtext">{subtext}</div>
    </div>
  );
}

export default Heading;
