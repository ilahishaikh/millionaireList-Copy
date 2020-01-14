import SET_STATUS_BAR from "./types";

const showStatusBar = ( type = "", message = "", title = "", chatDetails, duration = 0, vibrate = false ) => ({
  type: SET_STATUS_BAR,
  payload: {
    status: true,
    type,
    title,
    message,
    chatDetails,
    duration,
    vibrate
  }
});

const hideStatusBar = ( type = "", message = "", title = "", duration = 0 ) => ({
  type: SET_STATUS_BAR,
  payload: {
    status: false,
    type,
    title,
    message,
    duration,

  }
});

export default {
  showStatusBar,
  hideStatusBar
};
