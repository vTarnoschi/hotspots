import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import List from "../../Components/List";

import { actionCreators } from "../../Redux/hotspots";

import { HotspotsListWrapper } from "./style";

const HotspotsList = () => {
  const dispatch = useDispatch();

  const { hotspots } = useSelector((state) => state);

  const handleOnDelete = useCallback(
    (id) => {
      const { deleteHotspot } = actionCreators();

      dispatch(deleteHotspot(id));
    },
    [dispatch]
  );

  if (hotspots.length === 0) {
    return null;
  }

  return (
    <HotspotsListWrapper>
      <List>
        <List.Title>List of Hotspot</List.Title>

        <List.Content>
          {hotspots.map((item) => (
            <div key={item.id}>
              <span>{item.title}</span>
              <a onClick={() => handleOnDelete(item.id)}>Delete</a>
            </div>
          ))}
        </List.Content>
      </List>
    </HotspotsListWrapper>
  );
};

export default HotspotsList;
