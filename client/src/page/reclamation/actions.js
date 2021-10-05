import { LOADING, SUCCESS_MESSAGE, FAIL_MESSAGE } from "./types";
import axios from "axios";

export const sendReclamation = (reclamationData) => (dispatch) => {
  dispatch({ type: LOADING });
  axios
    .post(`/reclamations/`, reclamationData)
    .then((res) => {
      dispatch({ type: SUCCESS_MESSAGE });
    })
    .catch((err) => dispatch({ type: FAIL_MESSAGE }));
};
