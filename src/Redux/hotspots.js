import Storage from "../Utils/Storage";

const types = {
  ADD: "ADD_HOTSPOT",
  DEL: "DELETE_HOTSPOT",
};

function addHotspot(state, action) {
  const { payload } = action;

  Storage.setLocalStorage("hotspots", [...state, payload]);

  return [...state, payload];
}

function delHotspot(state, action) {
  const { id } = action;

  const newState = state.filter((item) => item.id !== id);

  Storage.setLocalStorage("hotspots", newState);

  return newState
}

function getInitialState() {
  const values = Storage.getLocalStorage("hotspots")

  return values || [];
}

const initialState = getInitialState();

export default function hotspotsReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD:
      return addHotspot(state, action);
    case types.DEL:
      return delHotspot(state, action);
    default:
      return state;
  }
}

export function actionCreators() {
  return {
    newHotspot: (payload) => ({
      type: types.ADD,
      payload,
    }),
    deleteHotspot: (id) => ({
      type: types.DEL,
      id,
    }),
  };
}
