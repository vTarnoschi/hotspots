import React from "react";

import GlobalProvider from "../Context";

import Header from "./Header";
import Content from "./Content";

const MainApp = () => {
  return (
    <GlobalProvider>
      <Header />

      <Content />
    </GlobalProvider>
  );
};

export default MainApp;
