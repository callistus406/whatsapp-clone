import { combineReducers, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  displayProfileReducer,
  displayStatusReducer,
  displayChatReducer,
  displayOptionsReducer,
  newGroupReducer,
  archiveReducer,
  starredMsgsReducer,
  settingsReducer,
  logoutReducer,
  notificationReducer,
  themeReducer,
  wallpaperReducer,
  blockedContactsReducer,
  keyboardShortcutsReducer,
  helpReducer,
} from "./reducers/reducers";

const rootReducer = combineReducers({
  profile: displayProfileReducer,
  status: displayStatusReducer,
  newChat: displayChatReducer,
  options: displayOptionsReducer,
  // from options
  newGroup: newGroupReducer,
  archive: archiveReducer,
  starredMsgs: starredMsgsReducer,
  settings: settingsReducer,
  logout: logoutReducer,
  // from settings
  notification: notificationReducer,
  theme: themeReducer,
  wallpaper: wallpaperReducer,
  blockedContacts: blockedContactsReducer,
  keyboardShortCuts: keyboardShortcutsReducer,
  help: helpReducer,
});
export const store = createStore(rootReducer, applyMiddleware(logger));
