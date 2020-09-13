import React, { memo, useCallback, useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import Form from "../Components/Form";
import Input from "../Components/Input";
import Button from "../Components/Button";

import { actionCreators } from "../Redux/hotspots";

const initialFormValues = {
  title: {
    value: "",
    error: false,
  },
  description: {
    value: "",
    error: false,
  },
};

const HotspotForm = memo(({ left, top, callback }) => {
  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState(initialFormValues);

  useEffect(() => () => setFormValues(initialFormValues), []);

  const handleOnClick = useCallback(() => {
    const { title, description } = formValues;

    if (title.value === "" || description.value === "") {
      setFormValues((state) => ({
        ...state,
        title: {
          ...state.title,
          error: !title.value,
        },
        description: {
          ...state.description,
          error: !description.value,
        },
      }));
    } else {
      const hotspot = {
        id: Math.floor(Math.random() * 8445),
        title: title.value,
        description: description.value,
        left,
        top,
      };

      const { newHotspot } = actionCreators();

      dispatch(newHotspot(hotspot));

      if (callback) callback();
    }
  }, [left, top, formValues, callback]);

  console.log(formValues);

  const handleOnChange = (evt) => {
    const { value, id } = evt.target;

    setFormValues((state) => ({
      ...state,
      [id]: {
        value,
        error: !value,
      },
    }));
  };

  return (
    <Form>
      <Form.Item
        label="Title"
        message="Title is Required!"
        hasError={formValues.title.error}
      >
        <Input
          type="text"
          id="title"
          onChange={handleOnChange}
          autoComplete="off"
        />
      </Form.Item>

      <Form.Item
        label="Description"
        message="Description  is Required!"
        hasError={formValues.description.error}
      >
        <Input
          type="text"
          id="description"
          onChange={handleOnChange}
          autoComplete="off"
        />
      </Form.Item>

      <Form.Footer>
        <Button size={95} onClick={handleOnClick}>
          Confirm
        </Button>
      </Form.Footer>
    </Form>
  );
});

export default HotspotForm;
