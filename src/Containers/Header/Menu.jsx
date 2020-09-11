import React from "react";

import { MenuLinkWrapper } from "./style";

const menuLinksConfig = [
  {
    id: 1,
    label: "Link 1",
  },
  {
    id: 2,
    label: "Link 2",
  },
  {
    id: 3,
    label: "Link 3",
  },
  {
    id: 4,
    label: "Link 4",
  },
];

const Menu = () => (
  <MenuLinkWrapper>
    {menuLinksConfig.map((menu) => (
      <span key={menu.id}>{menu.label}</span>
    ))}
  </MenuLinkWrapper>
);

export default Menu;
