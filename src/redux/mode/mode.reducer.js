const INITIAL_STATE = {
  darkMode: false,
};

const modeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_DARK_MODE":
      return {
        ...state,
        darkMode: action.payload,
      };
    default:
      return state;
  }
};

export default modeReducer;
