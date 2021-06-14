import {
    LOADING,
    SUCCESS_MESSAGE,
    FAIL_MESSAGE,
    RESET
  } from './types';
  
  const initialState = {
    loading: false,
    success : false,
    fail: false,
    error:{},
    condidat: {},

  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: true
            };
        case SUCCESS_MESSAGE:
            return {
                ...state,
                success: true,
                condidat: action.payload,
                loading: false
            };
        case FAIL_MESSAGE:
            return {
                ...state,
                fail:true,
                error:action.payload,
                loading: false,
            };
        case RESET:
            return {
                ...state,
                fail:false,
                success: false,
                error:action.payload,
                loading: false,
            };
        default:
            return state;
    }
  }