import {
  GET_USERS,
 
} from "./types";




export const getUsers = () => async dispatch => {
  dispatch({ type: GET_USERS.REQUEST });
  try {
    // fbDb.ref("users").on("value", snapshot => {
    //   dispatch({ type: GET_USERS.SUCCESS, payload: snapshot.val() });
    // });
  } catch (e) {
    //console.log(e);
    dispatch({ type: GET_USERS.REQUEST });
  }
};


export default {
  getUsers,
 
};
