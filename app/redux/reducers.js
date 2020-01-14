import { combineReducers } from "redux";

import statusBar from "./statusBar/reducer";
import chats from "./chats/reducer";
import users from "./users/reducer";
import events from "./events/reducer";
import auth from "./auth/reducer";
import notification from "./notification/reducer";

const rootReducer = combineReducers({
  statusBar,
  events,
  chats,
  users,
  auth,
notification
});

export default rootReducer;
