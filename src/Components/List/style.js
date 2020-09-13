import styled from "styled-components";

export const ListWrapper = styled.div``;

export const ListTitleWrapper = styled.div`
  padding: 10px;
  background: #ebebeb;
  color: #808080;
  font-weight: 500;
`;

export const ListContentWrapper = styled.div`
  div {
    padding: 8px 10px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #c1c1c1;

    span {
      font-weight: 500;
      color: #808080;
      flex: 1;
    }

    a {
      color: #808080;
      cursor: pointer;
      transition: opacity 0.2s ease;

      :hover {
        opacity: 0.5;
      }
    }
  }
`;
