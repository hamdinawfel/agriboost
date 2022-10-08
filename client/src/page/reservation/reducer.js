import { LOADING_RESERVATION, SUCCESS_MESSAGE_RESERVATION, SET_ERROR_RESERVATION, LOADING_CONFIRMATION, SUCCESS_MESSAGE_CONFIRMATION, SET_ERROR_CONFIRMATION, RESET } from "./types";
const initialState = {
  loading: false,
  success: false,
  error: false,
  alertMessage: "",
};

export const reservationReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING_RESERVATION:
      return {
        ...state,
        loading: true,
      };
    case SUCCESS_MESSAGE_RESERVATION:
      return {
        ...state,
        loading: false,
        success: true,
        error: false,
        alertMessage: payload,
      };

    case SET_ERROR_RESERVATION:
      return {
        ...state,
        loading: false,
        error: true,
        success: false,
        alertMessage: payload,
      };

    case RESET:
      return {
        ...state,
        loading: false,
        error: false,
        success: false,
        alertMessage: "",
      };

    default:
      return state;
  }
}


export const confirmReservationReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING_CONFIRMATION:
      return {
        ...state,
        loading: true,
      };
    case SUCCESS_MESSAGE_CONFIRMATION:
      return {
        ...state,
        loading: false,
        success: true,
        error: false,
        alertMessage: payload,
      };

    case SET_ERROR_CONFIRMATION:
      return {
        ...state,
        loading: false,
        error: true,
        success: false,
        alertMessage: payload,
      };
      case RESET:
      return {
        ...state,
        loading: false,
        error: false,
        success: false,
        alertMessage: "",
      };

    default:
      return state;
  }
}
