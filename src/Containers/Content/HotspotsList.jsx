import React from "react";

import List from "../../Components/List";

import { HotspotsListWrapper } from "./style";

const HotspotsList = () => {
  return (
    <HotspotsListWrapper>
      <List>
        <List.Title>List of Hotspot</List.Title>

        <List.Content>
          <div>
            <span>Hotspot #1</span>
            <a>Action</a>
          </div>
          <div>
            <span>Hotspot #2</span>
            <a>Action</a>
          </div>
        </List.Content>
      </List>
    </HotspotsListWrapper>
  );
};

export default HotspotsList;
