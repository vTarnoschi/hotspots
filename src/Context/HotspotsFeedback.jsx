import React from "react";
import { useSelector } from "react-redux";

import Popover from "../Components/Popover";
import Hotspots from "../Components/Hotspots";

const HotspotsFeedback = () => {
  const { hotspots } = useSelector((state) => state);

  return hotspots.map((item) => (
    <Popover
      key={item.id}
      title={item.title}
      description={item.description}
      position={{ left: item.left, top: item.top }}
    >
      <Hotspots top={item.top} left={item.left} />
    </Popover>
  ));
};

export default HotspotsFeedback;
