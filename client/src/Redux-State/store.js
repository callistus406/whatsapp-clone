import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { useEffect } from 'react';
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
  displayMessageReducer,
  displayConversationIdReducer,
  getMessageReducer,
  getTokenReducer,
} from './reducers/reducers';
import {
  requestReducer,
  userRequestReducer,
  userProfileRequestReducer,
  loginReducer,
  currentMessageReducer,
  currentChatReducer,
  refreshTokenReducer,
} from './reducers/requestReducers';
import thunk from 'redux-thunk';
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

  user: userRequestReducer,
  userProfile: userProfileRequestReducer,
  messages: currentMessageReducer,
  displayCurrentChat: displayMessageReducer,
  displayConversationId: displayConversationIdReducer,
  displayMessage: getMessageReducer,

  login: loginReducer,
  jwtRefresh: refreshTokenReducer,
  jwtToken: getTokenReducer,
});

const composeEnhancers = composeWithDevTools({
  trace: true,
  traceLimit: 25,
});
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);
