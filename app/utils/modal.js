import { clearModalType } from "Reducers/general/modalType";
import { clearModalProps } from "Reducers/general/modalProps";

export const clearModal = (dispatch) => {
  dispatch(clearModalType());
  dispatch(clearModalProps());
};
