import React from "react";

import Button from "../../Components/Button";

import { useGlobalContext } from "../../Context";

import HotspotsList from "./HotspotsList";

import { ContentWrapper } from "./style";

const Content = () => {
  const {
    state: { inspect },
    actions: { handleSetInspect },
  } = useGlobalContext();

  return (
    <ContentWrapper>
      <Button
        disabled={inspect}
        onClick={handleSetInspect}
        space={{
          top: 50,
          bottom: 50,
          left: 0,
          right: 0,
        }}
      >
        Create Hotspot
      </Button>

      <HotspotsList />
    </ContentWrapper>
  );
};

export default Content;
