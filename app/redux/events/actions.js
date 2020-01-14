import {
  CREATE_EVENT,
 
} from "./types";

import configureStore from "../store";


const { store } = configureStore;


export const createEvent = payload => async dispatch => {
  dispatch({ type: CREATE_EVENT.REQUEST });
  try {
    // await fbDb.ref(`events/${payload.id}`).set(payload);
    // dispatch({
    //   type: CREATE_EVENT.SUCCESS,
    //   payload
    // });
    // dispatch(
    //   StatusBarActions.showStatusBar("success", "Event successfully created!")
    // );
  } catch (e) {
    // console.log("Error: ", e);
    dispatch({ type: CREATE_EVENT.ERROR });
  }
};


export default {
 
  createEvent,
 
};
