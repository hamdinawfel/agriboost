import { combineReducers } from "redux";

import condidatReducer from "../page/home/reducer";

const rootReducer = combineReducers({
  condidate: condidatReducer,
});

export default rootReducer;
