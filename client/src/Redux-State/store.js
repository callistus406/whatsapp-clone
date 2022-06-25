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
  displayContactInfoReducer,
  SearchContactMsgReducer,
  displayConversationsReducer,
} from "./reducers/reducers";
import {
  requestReducer,
  userRequestReducer,
  userProfileRequestReducer,
  loginReducer,
} from "./reducers/requestReducers";
import thunk from "redux-thunk";
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
  // contact information
  contactInfo: displayContactInfoReducer,
  searchContactMsg: SearchContactMsgReducer,
  conversations: requestReducer,
  // requestReducer: requestReducer,
  // request user
  login: loginReducer,
  user: userRequestReducer,
  userProfile: userProfileRequestReducer,
});
export const store = createStore(rootReducer, applyMiddleware(logger, thunk));
