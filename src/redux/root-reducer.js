import { combineReducers } from "redux";

import modeReducer from "./mode/mode.reducer";

export default combineReducers({
  mode: modeReducer,
});
