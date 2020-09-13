import React, { memo } from "react";

import { PopoverWrapper } from "./style";

const Popover = memo(({ title, description, position, children }) => (
  <PopoverWrapper position={position}>
    <div className="popover-content">
      <div className="popover-title">{title}</div>
      <div className="popover-description">{description}</div>
    </div>
    {children}
  </PopoverWrapper>
));

export default Popover;
