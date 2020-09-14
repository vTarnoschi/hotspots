import React from "react";
import { shallow } from "enzyme";

import Hotspots from "../../src/Components/Hotspots";

describe("Hotspots Component tests", () => {
  it("should render Hotspots Component", () => {
    const props = { top: 200, left: 120 };

    const wrapper = shallow(<Hotspots {...props} />);

    expect(wrapper.props().left).toBe(120);
    expect(wrapper.props().top).toBe(200);
  });
});
