import { combineReducers } from 'redux';

import condidatReducer from '../page/home/reducer';

const rootReducer = combineReducers({

   
    condidat: condidatReducer,
  })
  
export default rootReducer;