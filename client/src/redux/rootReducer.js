import { combineReducers } from 'redux';

import condidatReducer from '../page/home/reducer';
import adminReducer from '../page/adminPanel/reducer';

const rootReducer = combineReducers({
    condidate: condidatReducer,
    admin: adminReducer,
  })
  
export default rootReducer;