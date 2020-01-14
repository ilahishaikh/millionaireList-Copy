import {
  LOGIN,

} from "./types";

export const requestLogin = () => dispatch => {
  dispatch({ type: LOGIN.REQUEST });
};

export const fbLogin = payload => async dispatch => {
  dispatch({ type: LOGIN.REQUEST });
  const { token } = payload;
  try {
    
  } catch (e) {
  //  console.log(e);
    dispatch({ type: LOGIN.ERROR });
    dispatch(
      StatusBarActions.showStatusBar(
        "error",
        "Some error occured. Please try again!"
      )
    );
  }
};





export default {
  fbLogin,
  
};
