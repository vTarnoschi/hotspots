const types = {
  ADD: "ADD_HOTSPOT",
  DEL: "DELETE_HOTSPOT",
};

function addHotspot(state, action) {
  const { payload } = action;

  return [...state, payload];
}

function delHotspot(state, action) {
  const { id } = action;

  const newHotspots = state.filter((item) => item.id !== id);

  return [...state, newHotspots];
}

const initialState = [];

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
