import {
    LOADING,
    SUCCESS_MESSAGE,
    FAIL_MESSAGE,
    RESET
  } from './types';
  import axios from 'axios';
  export const createCondidat = (data) => (dispatch) => {
    dispatch({ type: LOADING })
    axios
      .post("condidates/", data)
      .then(res => { 
        dispatch({ type: SUCCESS_MESSAGE,
        payload: res.data })
      })
      .catch(err =>
        dispatch({ type: FAIL_MESSAGE })
      );
  };
  export const reset = () => (dispatch) => {
    dispatch({ type: RESET })
  };
 