import React, { memo } from "react";

import { HotspotsWrapper } from "./style";

const Hotspots = memo(({ top, left }) => (
  <HotspotsWrapper top={top} left={left} />
));

export default Hotspots;
