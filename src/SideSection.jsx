import React from "react";

function SideSection({ title, img, points }) {
  return (
    <div className="side-section">
      <div className="feature-image">
        <img src={img} alt="title" />
      </div>
      <div className="context">
        <div className="title">{title}</div>
        <div className="points">
          <div>
            {points.map((point) => (
              <div style={{ marginBottom: 20 }}>{point}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideSection;
