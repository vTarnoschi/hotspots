import React, { memo } from "react";

import { InputWrapper, InputStyle, LabelStyle } from "./style";

const Input = memo(({ label, ...props }) => (
  <InputWrapper>
    <LabelStyle>{label}</LabelStyle>
    <InputStyle {...props} />
  </InputWrapper>
));

export default Input;
