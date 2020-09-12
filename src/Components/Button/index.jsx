import React, { memo } from "react";
import PropTypes from "prop-types";

import { ButtonWrapper } from "./style";

const Button = memo(({ children, space, size, disabled, ...props }) => (
  <ButtonWrapper {...props} space={space} size={size} disabled={disabled}>
    {children}
  </ButtonWrapper>
));

Button.propTypes = {
  children: PropTypes.node.isRequired,
  space: PropTypes.shape({
    top: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number,
    right: PropTypes.number,
  }),
  size: PropTypes.number,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  space: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  size: 200,
  disabled: false,
};

export default Button;
