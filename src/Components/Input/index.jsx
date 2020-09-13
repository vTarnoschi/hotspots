import React, { memo } from "react";

import { InputStyle } from "./style";

const Input = memo(({ ...props }) => <InputStyle {...props} />);

export default Input;
