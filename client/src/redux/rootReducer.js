import { combineReducers } from "redux";

import condidatReducer from "../page/home/reducer";
import reclamationReducer from "../page/reclamation/reducer.js";
import { reservationReducer, confirmReservationReducer } from "../page/reservation/reducer";

const rootReducer = combineReducers({
  condidate: condidatReducer,
  reclamation: reclamationReducer,
  reservation: reservationReducer,
  confirmation: confirmReservationReducer,
});

export default rootReducer;
