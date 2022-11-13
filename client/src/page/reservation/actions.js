import { LOADING_INSCRIPTION, SUCCESS_MESSAGE_INSCRIPTION, SET_ERROR_INSCRIPTION, LOADING_RESERVATION, SUCCESS_MESSAGE_RESERVATION, SET_ERROR_RESERVATION, LOADING_CONFIRMATION, SUCCESS_MESSAGE_CONFIRMATION, SET_ERROR_CONFIRMATION } from "./types";
import axios from "axios";

export const sendInscription = (inscriptionData) => (dispatch) => {
  dispatch({ type: LOADING_INSCRIPTION });
  axios
    .post(`/inscription`, inscriptionData)
    .then((res) => {
      console.log(res)
      dispatch({
        type: SUCCESS_MESSAGE_INSCRIPTION,
        payload:
            "تمت عملية التسجيل بنجاح",
      });
    })
    .catch((err) =>
      {
        console.log(err.response.data.error)
        dispatch({
          type: SET_ERROR_INSCRIPTION,
          payload: 
            err.response.data.error === "Reservation not confirmed"
            ? "الرجاء تأكيد التسجيل"
            : err.response.data.error === "Condidate not admitted"
            ? "،للأسف مطلبكم حظي بالرفض"
            : err.response.data.error === "You have already set your sector"
            ? "لقد قمت باختيار القطاع مسبقا"
            : "يوجد خلل في الشبكة",
        })
      }
    );
};

export const sendReservation = (reservationData) => (dispatch) => {
  dispatch({ type: LOADING_RESERVATION });
  axios
    .post(`/reservations`, reservationData)
    .then((res) => {
      console.log(res)
      dispatch({
        type: SUCCESS_MESSAGE_RESERVATION,
        payload:
            "تمت عملية التسجيل بنجاح. الرجاء إدخال الرقم لتأكيد العملية",
      });
    })
    .catch((err) =>
      {
        console.log(err.response.data.error)
        dispatch({
          type: SET_ERROR_RESERVATION,
          payload: 
            err.response.data.error === "Reservation not confirmed"
            ? "الرجاء تأكيد التسجيل"
            : err.response.data.error === "Condidate not admitted"
            ? "،للأسف مطلبكم حظي بالرفض"
            : err.response.data.error === "You are already have a confirmed reservation: 1"
            ? "لقد تم تسجيل هذا المترشح في دورة التكوين الأولى"
            : err.response.data.error === "You are already have a confirmed reservation: 2"
            ? "لقد تم تسجيل هذا المترشح في دورة التكوين الثانية"
            : err.response.data.error === "You are already have a confirmed reservation: 3"
            ? "لقد تم تسجيل هذا المترشح في دورة التكوين الثالثة"
            : "يوجد خلل في الشبكة",
        })
      }
    );
};


export const confirmReservation = (confirmationData) => (dispatch) => {
  dispatch({ type: LOADING_CONFIRMATION });
  axios
    .post(`/reservations/confirmation`, confirmationData)
    .then((res) => {
      dispatch({
        type: SUCCESS_MESSAGE_CONFIRMATION,
        payload: "تمت عملية التسجيل بنجاح",
      });
    })
    .catch((err) =>
      dispatch({
        type: SET_ERROR_CONFIRMATION,
        payload:
        err.response.data.error === "Verification code was incorrect"
            ? "الرجاء إعادة التثبت في الرقم السري"
            : err.response.data.error.includes('This Reservation was already confirmed with this phone number')
            ? "لقد تم تأكيد العملية سابقا"
            : "يوجد خلل ما، الرجاء التحقق من إرباطك من شبكة الأنترنات",
      })
    );
};

export const getCountPlaces = async () => {
  const response = await axios.get(`/reservations/count`)
  return response.data
};