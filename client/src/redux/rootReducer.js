import { combineReducers } from "redux";

import condidatReducer from "../page/home/reducer";
import reclamationReducer from "../page/reclamation/reducer.js";
import reservationReducer from "../page/reservation/reducer.js";

const rootReducer = combineReducers({
  condidate: condidatReducer,
  reclamation: reclamationReducer,
  reservation: reservationReducer,
});

export default rootReducer;
