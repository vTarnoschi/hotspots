import styled from "styled-components";

export const PopoverWrapper = styled.div`
  .popover-content {
    z-index: 1;
    display: none;
    width: 200px;
    position: absolute;
    left: ${(props) => `${props.position.left - 100}px`};
    top: ${(props) => `${props.position.top + 40}px`};

    flex-direction: column;
    padding: 10px;
    border-radius: 5px;
    font-size: 14px;
    background: #fff;
    box-shadow: 0px 5px 10px 0px rgba(117, 117, 117, 0.5);

    .shadow {
      left: 93px;
      top: -28px;
      position: absolute;
      width: 33px;
      height: 30px;
      clip-path: polygon(50% 30%, 0% 100%, 100% 100%);
      background: rgba(0, 0, 0, 0.2);
      filter: blur(5px);
    }

    :after {
      background: #ffffff;
      left: 95px;
      top: -28px;
      clip-path: polygon(50% 30%, 0% 100%, 100% 100%);
      width: 30px;
      height: 30px;
      z-index: 1;
      content: " ";
      position: absolute;
    }
  }

  .popover-title {
    color: #808080;
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 10px;
  }

  .popover-description {
    color: #a5a5a5;
    font-size: 20px;
  }

  :hover {
    .popover-content {
      display: flex;
    }
  }
`;
