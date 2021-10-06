import { LOADING, SUCCESS_MESSAGE, SET_ERROR } from "./types";
const initialState = {
  loading: false,
  success: false,
  error: false,
  alertMessage: "",
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case SUCCESS_MESSAGE:
      return {
        ...state,
        success: true,
        error: false,
        alertMessage: payload,
      };

    case SET_ERROR:
      return {
        ...state,
        error: true,
        success: false,
        alertMessage: payload,
      };

    default:
      return state;
  }
}
