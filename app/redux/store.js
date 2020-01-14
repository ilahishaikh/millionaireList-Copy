import thunk from "redux-thunk";
//import storage from "redux-persist/lib/storage";
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import { createBlacklistFilter } from "redux-persist-transform-filter";
import AsyncStorage from '@react-native-community/async-storage';

import rootReducer from "./reducers";

const filterState = createBlacklistFilter("auth", ["loading"]);
const eventStateFilter = createBlacklistFilter("events", [
  "loading",
  "locationResults"
]);
const userStateFilter = createBlacklistFilter("users", ["loading"]);
const chatStateFilter = createBlacklistFilter("chats", [
  "loading",
  "activeChatId"
]);

const persistConfig = {
  key: "root",
  storage :AsyncStorage,
  blacklist: ["statusBar"],
  transforms: [filterState, eventStateFilter, userStateFilter, chatStateFilter]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
const persistor = persistStore(store);

export default { store, persistor };
