import { LOADING, SUCCESS_MESSAGE, SET_ERROR } from "./types";
import axios from "axios";

export const sendReclamation = (reclamationData) => (dispatch) => {
  dispatch({ type: LOADING });
  axios
    .post(`/reclamations/`, reclamationData)
    .then((res) => {
      dispatch({
        type: SUCCESS_MESSAGE,
        payload:
          "لقد تمت عملية الإرسال بنجاح، سوف يتم الإتصال بك في أقرب الأجال",
      });
    })
    .catch((err) =>
      dispatch({
        type: SET_ERROR,
        payload:
          err.response.status === 403
            ? "هذه العملية غير مسموح بها، لقد سبق وتم إرسال الإعتراض"
            : err.response.status !== 429
            ? "يوجد خلل ما، الرجاء التحقق من إرباطك من شبكة الأنترنات"
            : "لقد أجريت العديد من المحاولات في وقت قصير، حاول لاحقا",
      })
    );
};
