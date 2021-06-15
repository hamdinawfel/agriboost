import {
    LOADING_USER,
    GET_USER,
    SET_ERRORS,
    CLEAR_ERRORS,
    SET_AUTHENTICATED,
    SET_UNAUTHENTICATED,
    GET_CONDIDATES,
    LOADING_CONDIDATES,
    LOADING_CONDIDATES_COUNT,
    GET_CONDIDATES_COUNT
  } from './types';
  import axios from 'axios';
  import jwtDecode from 'jwt-decode';
  
  export const loginUser = (userData) => (dispatch) => {
    dispatch({ type: LOADING_USER });
    axios
      .post("/users/login", userData)
      .then(res => { 
        setAuthorizationHeader(res.data.token);
        dispatch(getUserData());
        dispatch({ type: SET_AUTHENTICATED });
        dispatch({ type: CLEAR_ERRORS });
      })
      .catch(err =>
        dispatch({
          type: SET_ERRORS,
          payload: err.response.data
        })
      );
  };
  
  
  export const logoutUser = () => (dispatch) => {
    localStorage.removeItem('accessToken');
    delete axios.defaults.headers.common['Authorization'];
    dispatch({ type: SET_UNAUTHENTICATED });
  };

  export const getUserData = () => (dispatch) => {
    dispatch({ type: LOADING_USER });
   const  token = localStorage.getItem("accessToken");
    const decodedToken = jwtDecode(token);
    axios
      .get(`/users/${decodedToken._id}`)
      .then((res) => {
        dispatch({
          type: GET_USER,
          payload: res.data
        });
      })
      .catch((err) => console.log(err));
  };
  const setAuthorizationHeader = (token) => {
    const accessToken = `bearer ${token}`;
    localStorage.setItem('accessToken', accessToken);
    axios.defaults.headers.common['Authorization'] = accessToken;
  };

  export const clearErrors = () => (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  }

  export const getCondidates = (page) => (dispatch) => {
    dispatch({ type: LOADING_CONDIDATES });
  const token = localStorage.getItem("accessToken");
  if(token){
    const decodedToken = jwtDecode(token);
    if(decodedToken.exp *1000 < Date.now()){
      dispatch(logoutUser());
    }else{
      dispatch({ type: SET_AUTHENTICATED });
      axios.defaults.headers.common['Authorization'] = token;
    }
  }
    axios
      .get(`/condidates?page=${page}`)
      .then((res) => {
        dispatch({
          type: GET_CONDIDATES,
          payload: res.data
        });
      })
      .catch((err) => console.log(err));
  };

  export const getCondidatesCount = () => (dispatch) => { 
    dispatch({ type: LOADING_CONDIDATES_COUNT });
    axios
      .get('/condidates/count')
      .then((res) => {
        dispatch({
          type: GET_CONDIDATES_COUNT,
          payload: res.data
        });
      })
      .catch((err) => console.log(err));
  };