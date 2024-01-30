import React from "react";
import gaming from "./assets/gaming.svg";
import dancing from "./assets/dancing.svg";
import trekking from "./assets/trekking.svg";
import GridView from "./GridView";

function Interest() {
  const items = [
    { img: dancing, subtext: <h4>Dancing</h4> },
    { img: trekking, subtext: <h4>Trekking</h4> },
    { img: gaming, subtext: <h4>Gaming</h4> },
  ];
  return (
    <div className="interests-section">
      <GridView title={"Interests"} items={items} />
    </div>
  );
}

export default Interest;
