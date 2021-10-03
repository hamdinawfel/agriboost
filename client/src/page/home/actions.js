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

export const createCondidat = () => (dispatch) => {
  dispatch({ type: LOADING });
  const candidateData = {
    //Personel Info : STEP 1
    cin: JSON.parse(localStorage.getItem("cin")),
    fingerPrint: JSON.parse(localStorage.getItem("fingerPrint")),
    firstName: JSON.parse(localStorage.getItem("firstName")),
    lastName: JSON.parse(localStorage.getItem("lastName")),
    birthDay: JSON.parse(localStorage.getItem("birthDay")),
    address: JSON.parse(localStorage.getItem("address")),
    village: JSON.parse(localStorage.getItem("village")),
    city: "القيروان",
    sexe: JSON.parse(localStorage.getItem("sexe")),
    civilStatus: JSON.parse(localStorage.getItem("civilStatus")),
    phone: JSON.parse(localStorage.getItem("phone")),
    email: JSON.parse(localStorage.getItem("email")),
    // Supplementary info : STEP 2
    edicationalLevel: JSON.parse(localStorage.getItem("edicationalLevel")),
    lastStadyLevel: JSON.parse(localStorage.getItem("lastStadyLevel")),
    isCandidateHaveCnss: JSON.parse(
      localStorage.getItem("isCandidateHaveCnss")
    ),
    snssDuration: JSON.parse(localStorage.getItem("snssDuration")),
    cnssId: JSON.parse(localStorage.getItem("cnssId")),
    isCandidateHavePatente: JSON.parse(
      localStorage.getItem("isCandidateHavePatente")
    ),
    patenteDuration: JSON.parse(localStorage.getItem("patenteDuration")),
    patenteId: JSON.parse(localStorage.getItem("patenteId")),
    isCandidateHaveAnetiInscription: JSON.parse(
      localStorage.getItem("isCandidateHaveAnetiInscription")
    ),
    // Social info : STEP 3
    candidateTreatmentCard: JSON.parse(
      localStorage.getItem("candidateTreatmentCard")
    ),
    isCandidateHaveChildren: JSON.parse(
      localStorage.getItem("isCandidateHaveChildren")
    ),
    isCandidateHaveSiblings: JSON.parse(
      localStorage.getItem("isCandidateHaveSiblings")
    ),
  };
  axios
    .post(`/condidates/`, candidateData)
    .then((res) => {
      dispatch({ type: SUCCESS_MESSAGE, payload: res.data });
      localStorage.clear();
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
