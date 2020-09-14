import React from "react";
import { shallow } from "enzyme";

import Button from "../../src/Components/Button";

describe("Button Component tests", () => {
  it("should render Button Component", () => {
    const props = {
      children: "Create Hotspot",
      space: {
        top: 50,
        bottom: 50,
        left: 0,
        right: 0,
      },
      size: 200,
      disabled: false,
    };

    const wrapper = shallow(<Button {...props} />);

    expect(wrapper.props().space.top).toBe(50);
    expect(wrapper.props().space.bottom).toBe(50);
    expect(wrapper.props().size).toBe(200);
    expect(wrapper.props().disabled).toBe(false);

    expect(wrapper).toMatchSnapshot();
  });
});
