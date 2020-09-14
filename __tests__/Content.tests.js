import React from "react";
import { shallow } from "enzyme";

import * as AppContext from "../src/Context";

import Content from "../src/Containers/Content";

jest.mock("react-redux");

describe("Content tests", () => {
  it("should render Content", () => {
    const contenxtValues = {
      state: { inspect: false },
      actions: { handleSetInscpect: jest.fn() },
    };

    jest
      .spyOn(AppContext, "useGlobalContext")
      .mockImplementation(() => contenxtValues);

    const wrapper = shallow(<Content />);

    expect(wrapper).toMatchSnapshot();
  });
});
