import { combineReducers, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

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
  displayGroupInfo,
  displayMsgSearchBarReducer,
  selectContactReducer,
} from "./reducers/reducers";

const rootReducer = combineReducers({
  profile: displayProfileReducer,
  status: displayStatusReducer,
  newChat: displayChatReducer,
  options: displayOptionsReducer,
  // from search msg
  searchMsg: displayMsgSearchBarReducer,
  // from group info
  groupInfo: displayGroupInfo,
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
  selectContact: selectContactReducer,
});
export const store = createStore(rootReducer, applyMiddleware(logger));
