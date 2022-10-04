import { LOADING_RESERVATION, SUCCESS_MESSAGE_RESERVATION, SET_ERROR_RESERVATION, LOADING_CONFIRMATION, SUCCESS_MESSAGE_CONFIRMATION, SET_ERROR_CONFIRMATION } from "./types";
import axios from "axios";

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
            ? "للأسف هذا المترشح غير مقبول"
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
          err.response.status === 403
            ? "هذه العملية غير مسموح بها، لقد سبق وتم إرسال الإعتراض"
            : err.response.status !== 429
            ? "يوجد خلل ما، الرجاء التحقق من إرباطك من شبكة الأنترنات"
            : "لقد أجريت العديد من المحاولات في وقت قصير، حاول لاحقا",
      })
    );
};