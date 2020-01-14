import { SET_NOTIFICATION } from "./types";
import { LOGOUT } from "../auth/types";

const INITIAL_STATE = {
  loading: false,
  notification: true
};

const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_NOTIFICATION.SUCCESS:
      return { ...state, notification: payload, loading: false };
    case LOGOUT.SUCCESS: {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
};

export default reducer;
