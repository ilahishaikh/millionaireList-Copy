import { SET_NOTIFICATION } from "./types";
import { setFcmToken } from "../auth/actions";

export const updateNotification = (
  uid,
  notificationStatus
) => async dispatch => {
  // let fcmToken = null;
  // if (notificationStatus) {
  //   fcmToken = await firebase.messaging().getToken();
  // }
  // dispatch(setFcmToken(uid, fcmToken));
  // dispatch({
  //   type: SET_NOTIFICATION.SUCCESS,
  //   payload: notificationStatus
  // });
};

export default {
  updateNotification
};
