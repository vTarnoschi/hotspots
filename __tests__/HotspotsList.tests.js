import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { mount } from "enzyme";

import HotspotsList from "../src/Containers/Content/HotspotsList";

jest.mock("react-redux");

describe("HotspotsList tests", () => {
  const dispatch = useDispatch.mockReturnValue(jest.fn());

  useSelector.mockReturnValue({
    hotspots: [
      { id: 1, title: "Teste" },
      { id: 2, title: "Teste 2" },
    ],
  });

  const wrapper = mount(<HotspotsList />);

  it("should render hotspots items", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should remove an item from list", () => {
    const link = wrapper.find("a").first();
    link.simulate("click", { id: 1 });

    expect(dispatch).toHaveBeenCalledTimes(1);
  });
});
