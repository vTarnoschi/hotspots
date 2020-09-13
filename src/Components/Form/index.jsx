import React, { memo } from "react";

import { FormFooterWrapper, FormWrapper, FormItemWrapper } from "./style";

const FormFooter = memo(({ children }) => (
  <FormFooterWrapper>{children}</FormFooterWrapper>
));

const FormItem = memo(({ children, message, label, hasError }) => (
  <FormItemWrapper>
    <span>{label}</span>
    {React.Children.map(children, (child) =>
      React.cloneElement(child, { hasError })
    )}
    <div className="span-error">{hasError && <span>{message}</span>}</div>
  </FormItemWrapper>
));

const Form = memo(({ children }) => <FormWrapper>{children}</FormWrapper>);

Form.Footer = FormFooter;
Form.Item = FormItem;

export default Form;
