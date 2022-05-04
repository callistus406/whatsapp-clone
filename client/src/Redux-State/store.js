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
  displaySettingsReducer,
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
  selectGroupParticipantsReducer,
  starredGrpMsgReducer,
  displayGrpMsgSectionReducer,
  displaySecurityReducer,
  displayPrivacyReducer,
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
  settings: displaySettingsReducer,
  logout: logoutReducer,
  // from settings
  notification: notificationReducer,
  theme: themeReducer,
  wallpaper: wallpaperReducer,
  blockedContacts: blockedContactsReducer,
  keyboardShortCuts: keyboardShortcutsReducer,
  help: helpReducer,
  selectContact: selectContactReducer,
  grpParticipants: selectGroupParticipantsReducer,
  starredGrpMsg: starredGrpMsgReducer,
  grpMsgSection: displayGrpMsgSectionReducer,
  security: displaySecurityReducer,
  privacy: displayPrivacyReducer,
});
export const store = createStore(rootReducer, applyMiddleware(logger));
