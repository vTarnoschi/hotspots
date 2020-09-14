import React from "react";
import { shallow } from "enzyme";

import App from "../src/Containers/MainApp";

describe("App Render", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });
});
