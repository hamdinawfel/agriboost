import {
  LOADING,
  SUCCESS_MESSAGE,
  FAIL_MESSAGE,
  RESET,
  SHOW_RESULT,
  CLOSE_RESULT,
  SET_ERROR,
} from "./types";

const initialState = {
  loading: false,
  success: "",
  error: false,
  errorMsg: "",
  showResult: false,
  data: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case SUCCESS_MESSAGE:
      return {
        ...state,
        success: "success",
        condidat: action.payload,
        loading: false,
      };
    case FAIL_MESSAGE:
      return {
        ...state,
        success: "fail",
        error: action.payload,
        loading: false,
      };
    case RESET:
      return {
        ...state,
        success: "",
      };
    case SHOW_RESULT:
      return {
        ...state,
        loading: false,
        error: false,
        showResult: true,
        data: action.payload,
      };
    case CLOSE_RESULT:
      return {
        ...state,
        showResult: false,
      };
    case SET_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
}
