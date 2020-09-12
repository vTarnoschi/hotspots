import React, { memo, useCallback } from "react";
import { useDispatch } from "react-redux";

import Form from "../Components/Form";
import Input from "../Components/Input";
import Button from "../Components/Button";

import { actionCreators } from "../Redux/hotspots";

const HotspotForm = memo(({ left, top }) => {
  const dispatch = useDispatch();

  const handleOnClick = useCallback(() => {
    const title = document.getElementById("hotspot-title").value;
    const description = document.getElementById("hotspot-description").value;

    const hotspot = {
      id: Math.floor(Math.random() * 8445),
      title,
      description,
      left,
      top,
    };

    const { newHotspot } = actionCreators();

    dispatch(newHotspot(hotspot));
  }, [left, top]);

  return (
    <Form>
      <Input label="Title" type="text" id="hotspot-title" />
      <Input label="Description" type="text" id="hotspot-description" />

      <Form.Footer>
        <Button size={95} onClick={handleOnClick}>
          Confirm
        </Button>
      </Form.Footer>
    </Form>
  );
});

export default HotspotForm;
