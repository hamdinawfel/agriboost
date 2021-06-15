import {
    SET_AUTHENTICATED,
    SET_UNAUTHENTICATED,
    LOADING_USER,
    GET_USER,
    SET_ERRORS,
    CLEAR_ERRORS,
    GET_CONDIDATES,
    LOADING_CONDIDATES,
    LOADING_CONDIDATES_COUNT,
    GET_CONDIDATES_COUNT
  } from './types';
  
  const initialState = {
    authenticated: false,
    loading: false,
    loadingCondidates: false,
    loadingCount: false,
    user:{},
    condidates:[],
    errors:{},
    count:''
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case SET_AUTHENTICATED:
        return {
          ...state,
          authenticated: true,
          loading:  false
        };
      case SET_UNAUTHENTICATED:
        return initialState;
      case GET_USER:
        return {
          ...state,
          user:action.payload,
          loading: false,
        };
      case LOADING_USER:
        return {
          ...state,
          loading: true
        };
      case LOADING_CONDIDATES:
        return {
          ...state,
          loadingCondidates: true
        };
      case GET_CONDIDATES:
        return {
          ...state,
          condidates: action.payload,
          loadingCondidates: false
        };
      case LOADING_CONDIDATES_COUNT:
        return {
          ...state,
          loadingCount: true
        };
      case GET_CONDIDATES_COUNT:
        return {
          ...state,
          count: action.payload,
          loadingCount: false
        };
        case SET_ERRORS:
        return {
          ...state,
          loading: false,
          errors: action.payload
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          errors: {}
        };
      default:
        return state;
    }
  }