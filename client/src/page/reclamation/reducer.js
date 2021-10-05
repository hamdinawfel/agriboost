import { LOADING, SUCCESS_MESSAGE, FAIL_MESSAGE } from "./types";
const initialState = {
  loading: false,
  success: "",
  errorMsg: "",
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
        success: "success",
        loading: false,
      };
    case FAIL_MESSAGE:
      return {
        ...state,
        success: "fail",
        loading: false,
      };

    default:
      return state;
  }
}
