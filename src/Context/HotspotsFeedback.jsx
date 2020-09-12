import React from "react";
import { useSelector } from "react-redux";
import Hotspots from "../Components/Hotspots";

const HotspotsFeedback = () => {
  const { hotspots } = useSelector((state) => state);

  return hotspots.map((item) => <Hotspots key={item.id} top={item.top} left={item.left} />);
};

export default HotspotsFeedback;
