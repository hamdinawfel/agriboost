import {
  LOADING,
  SUCCESS_MESSAGE,
  FAIL_MESSAGE,
  RESET,
  SHOW_RESULT,
  CLOSE_RESULT,
  SET_ERROR,
  FIRST_STEP,
  SECOND_STEP,
  THIRD_STEP,
  LAST_STEP,
} from "./types";

const initialState = {
  loading: false,
  success: "",
  error: false,
  errorMsg: "",
  showResult: false,
  data: {},
  printData: {},
  activeStep: 0,
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
        printData: action.payload,
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
    case FIRST_STEP:
      return {
        ...state,
        activeStep: 0,
      };
    case SECOND_STEP:
      return {
        ...state,
        activeStep: 1,
      };
    case THIRD_STEP:
      return {
        ...state,
        activeStep: 2,
      };
    case LAST_STEP:
      return {
        ...state,
        activeStep: 3,
      };
    default:
      return state;
  }
}
