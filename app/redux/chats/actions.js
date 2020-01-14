import { Platform } from "react-native";
import {
 
  CURRENT_CHAT,
  CURRENT_CHAT_RESET,
 
} from "./types";

import configureStore from "../store";

const { store } = configureStore;





export const currentChat = item => dispatch => {
  dispatch({
    type: CURRENT_CHAT,
    payload: { item }
  });
};
export const currentChatReset = item => dispatch => {
  dispatch({
    type: CURRENT_CHAT_RESET
  });
};

export default {
  
  currentChat,
  
};
