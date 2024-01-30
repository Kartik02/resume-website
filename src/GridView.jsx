import React from "react";

function GridView({ title, items }) {
  return (
    <div className="grid-view-section">
      <div className="title">{title}</div>
      <div className="context">
        {items.map((item, index) => (
          <div className="item">
            {item.img && <img src={item.img} alt={"img" + index} />}
            <div className="subtext">{item.subtext}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GridView;
