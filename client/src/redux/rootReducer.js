import { combineReducers } from "redux";

import condidatReducer from "../page/home/reducer";
import reclamationReducer from "../page/reclamation/reducer.js";

const rootReducer = combineReducers({
  condidate: condidatReducer,
  reclamation: reclamationReducer,
});

export default rootReducer;
