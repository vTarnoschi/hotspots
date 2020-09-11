import React from "react";

import { HeaderWrapper } from "./style";

import Logo from "./Logo";
import Menu from "./Menu";

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />

      <Menu />
    </HeaderWrapper>
  );
};

export default Header;
