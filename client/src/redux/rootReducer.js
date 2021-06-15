import { combineReducers } from 'redux';

import condidatReducer from '../page/home/reducer';
import adminReducer from '../page/adminPanel/reducer';

const rootReducer = combineReducers({

   
    condidat: condidatReducer,
    admin: adminReducer,
  })
  
export default rootReducer;