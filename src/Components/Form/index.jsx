import React, { memo } from "react";

import { FormFooterWrapper, FormWrapper } from "./style";

const FormFooter = memo(({ children }) => (
  <FormFooterWrapper>{children}</FormFooterWrapper>
));

const Form = memo(({ children }) => <FormWrapper>{children}</FormWrapper>);

Form.Footer = FormFooter;

export default Form;
