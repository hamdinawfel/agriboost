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
import axios from "axios";

export const createCondidat = (data) => (dispatch) => {
  dispatch({ type: LOADING });
  axios
    .post(`/condidates/`, data)
    .then((res) => {
      dispatch({ type: SUCCESS_MESSAGE, payload: res.data });
    })
    .catch((err) => dispatch({ type: FAIL_MESSAGE }));
};
export const reset = () => (dispatch) => {
  dispatch({ type: RESET });
};
export const getResult = (condidateCin) => (dispatch) => {
  dispatch({ type: LOADING });
  axios
    .get(`/condidates/${condidateCin}`)
    .then((res) => {
      dispatch({ type: SHOW_RESULT, payload: res.data });
    })
    .catch((err) =>
      dispatch({
        type: SET_ERROR,
        payload:
          err.response.status === 404
            ? "الرجاء التثبت من رقم بطاقة التعريف الوطنية"
            : err.response.status !== 429
            ? "يوجد خلل ما، الرجاء التحقق من إرباطك من شبكة الأنترنات"
            : "لقد أجريت العديد من محاولات الدخول في وقت قصير، حاول لاحقا",
      })
    );
};

export const closeResult = () => (dispatch) => {
  dispatch({ type: CLOSE_RESULT });
};
export const displayFirstStep = () => (dispatch) => {
  dispatch({ type: FIRST_STEP });
};
export const displaySecondStep = () => (dispatch) => {
  dispatch({ type: SECOND_STEP });
};
export const displayThirdStep = () => (dispatch) => {
  dispatch({ type: THIRD_STEP });
};
export const displayLastStep = () => (dispatch) => {
  dispatch({ type: LAST_STEP });
};
