import React, { memo, useCallback, useContext, useState } from "react";

import Modal from "../Components/Modal";

import HotspotForm from "./HotspotForm";
import HotspotsFeedback from "./HotspotsFeedback";

import AppWrapper from "./style";

const GlobalContext = React.createContext();

const screenConfig = {
  width: window.screen.availWidth,
  height: window.screen.availHeight,
};

const initialState = {
  inspect: false,
  modalConfig: {
    visible: false,
    left: 0,
    top: 0,
  },
};

function getPoisition(left, top) {
  let positions = {
    leftAux: left,
    topAux: top,
  };

  const maxWidthAllowed = (screenConfig.width * 75) / 100;
  const maxHeigthAllowed = (screenConfig.height * 85) / 100;

  if (left > maxWidthAllowed) positions.leftAux = left - 350;

  if (top > maxHeigthAllowed) positions.topAux = top - 77;

  return positions;
}

const GlobalProvider = memo(({ children }) => {
  const [state, setState] = useState(initialState);

  const handleSetInspect = () =>
    setState((state) => ({
      ...state,
      inspect: !state.inscpect,
    }));

  const handleOnClick = (evt) => {
    const { clientX, clientY } = evt;

    const positions = getPoisition(clientX, clientY);

    setState((state) => ({
      ...state,
      modalConfig: {
        visible: true,
        left: positions.leftAux,
        top: positions.topAux,
      },
    }));
  };

  const handleOnClose = () => setState(initialState);

  const provider = useCallback(
    () => ({
      state: {
        inspect: state.inspect,
      },
      actions: {
        handleSetInspect,
      },
    }),
    [handleSetInspect]
  );

  return (
    <React.Fragment>
      <GlobalContext.Provider value={provider()}>
        <AppWrapper
          inspect={state.inspect}
          onClick={state.inspect ? handleOnClick : undefined}
        >
          {children}
        </AppWrapper>

        <HotspotsFeedback />
      </GlobalContext.Provider>

      <Modal
        visible={state.modalConfig.visible}
        title="New Hotspot"
        onClose={handleOnClose}
        position={{ left: state.modalConfig.left, top: state.modalConfig.top }}
      >
        <HotspotForm
          left={state.modalConfig.left}
          top={state.modalConfig.top}
        />
      </Modal>
    </React.Fragment>
  );
});

export const useGlobalContext = () => useContext(GlobalContext);

export default GlobalProvider;
