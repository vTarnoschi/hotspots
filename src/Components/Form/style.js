import styled from "styled-components";

export const FormWrapper = styled.div`
  margin: 10px 0;
`;

export const FormFooterWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
`;

export const FormItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  .span-error {
    color: #ff0000;
    min-height: 20px;
  }
`;
