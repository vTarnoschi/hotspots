import React from "react";

import Button from "../../Components/Button";

import HotspotsList from "./HotspotsList";

import { ContentWrapper } from "./style";

const Content = () => {
  return (
    <ContentWrapper>
      <Button
        space={{
          top: 50,
          bottom: 50,
          left: 0,
          right: 0,
        }}
      >
        Criar Hotspot
      </Button>

      <HotspotsList />
    </ContentWrapper>
  );
};

export default Content;
