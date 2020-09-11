import React from "react";
import { useSelector } from "react-redux";

import Header from "./Header";
import Content from "./Content";

const MainApp = () => {
  const teste = useSelector((state) => state);
  console.log(teste);

  return (
    <React.Fragment>
      <Header />

      <Content />
    </React.Fragment>
  );
};

export default MainApp;
