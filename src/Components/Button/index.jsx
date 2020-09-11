import React, { memo } from "react";

import { ButtonWrapper } from "./style";

const Button = memo(({ children, space, ...props }) => (
  <ButtonWrapper {...props} space={space}>
    {children}
  </ButtonWrapper>
));

export default Button;
