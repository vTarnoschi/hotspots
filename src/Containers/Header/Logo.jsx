import React from "react";

import LogoPng from "../../Assets/logo.png";

import { LogoWrapper } from "./style";

const Logo = () => (
  <LogoWrapper>
    <img src={LogoPng} alt="Conpass" />
  </LogoWrapper>
);

export default Logo;
