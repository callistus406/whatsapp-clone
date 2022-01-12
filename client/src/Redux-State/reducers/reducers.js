import {
  TOGGLE_PROFILE,
  TOGGLE_STATUS,
  TOGGLE_NEW_CHAT,
  TOGGLE_OPTIONS,
  TOGGLE_NEW_GROUP,
  TOGGLE_ARCHIVE,
  TOGGLE_STARRED_MSGS,
  TOGGLE_SETTINGS,
  LOGOUT,
  TOGGLE_HELP,
  TOGGLE_THEME,
  TOGGLE_KEYBOARD_SHORTCUTS,
  TOGGLE_NOTIFICATION,
  TOGGLE_CHAT_WALLPAPER,
  TOGGLE_BLOCKED_CONTACTS,
} from "../actions/actionTypes";

const initialState = {
  displayProfileContainer: false,
  displayStatusContainer: false,
  displayChatContainer: false,
  displayOptionsContainer: false,
};

export function displayProfileReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_PROFILE:
      return {
        ...state,
        displayProfileContainer: !state.displayProfileContainer,
      };
    default:
      return state;
  }
}
export function displayStatusReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_STATUS:
      return {
        ...state,
        displayStatusContainer: !state.displayStatusContainer,
      };
    default:
      return state;
  }
}
export function displayChatReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_NEW_CHAT:
      return {
        ...state,
        displayChatContainer: !state.displayChatContainer,
      };
    default:
      return state;
  }
}
export function displayOptionsReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_OPTIONS:
      return {
        ...state,
        displayOptionsContainer: !state.displayOptionsContainer,
      };
    default:
      return state;
  }
}

// reducers for options
const optionsInitialState = {
  displayNewGroup: false,
  displayArchive: false,
  displayStarredMsgs: false,
  displaySettings: false,
  logout: false,
};

export function newGroupReducer(state = optionsInitialState, action) {
  switch (action.type) {
    case TOGGLE_NEW_GROUP:
      return {
        ...state,
        displayNewGroup: !state.displayNewGroup,
      };
    default:
      return state;
  }
}
export function archiveReducer(state = optionsInitialState, action) {
  switch (action.type) {
    case TOGGLE_ARCHIVE:
      return {
        ...state,
        displayArchive: !state.displayArchive,
      };
    default:
      return state;
  }
}
export function starredMsgsReducer(state = optionsInitialState, action) {
  switch (action.type) {
    case TOGGLE_STARRED_MSGS:
      return {
        ...state,
        displayStarredMsgs: !state.displayStarredMsgs,
      };
    default:
      return state;
  }
}
export function settingsReducer(state = optionsInitialState, action) {
  switch (action.type) {
    case TOGGLE_SETTINGS:
      return {
        ...state,
        displaySettings: !state.displaySettings,
      };
    default:
      return state;
  }
}
export function logoutReducer(state = optionsInitialState, action) {
  switch (action.type) {
    case LOGOUT:
      return {
        ...state,
        logout: !state.logout,
      };
    default:
      return state;
  }
}
// reducers for settings sub menu
const settingsInitialState = {
  displayNotification: false,
  displayTheme: false,
  displayWallpaper: false,
  displayBlockedContacts: false,
  displayKeyboardShortcuts: false,
  displayHelp: false,
};

export function notificationReducer(state = settingsInitialState, action) {
  switch (action.type) {
    case TOGGLE_NOTIFICATION:
      return {
        ...state,
        displayNotification: !state.displayNotification,
      };
    default:
      return state;
  }
}
export function themeReducer(state = settingsInitialState, action) {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        displayTheme: !state.displayTheme,
      };
    default:
      return state;
  }
}
export function wallpaperReducer(state = settingsInitialState, action) {
  switch (action.type) {
    case TOGGLE_CHAT_WALLPAPER:
      return {
        ...state,
        displayWallpaper: !state.displayWallpaper,
      };
    default:
      return state;
  }
}
export function archivedMsgsReducer(state = settingsInitialState, action) {
  switch (action.type) {
    case TOGGLE_BLOCKED_CONTACTS:
      return {
        ...state,
        displayArchivedMsgs: !state.displayArchivedMsgs,
      };
    default:
      return state;
  }
}

export function blockedContactsReducer(state = settingsInitialState, action) {
  switch (action.type) {
    case TOGGLE_NOTIFICATION:
      return {
        ...state,
        displayBlockedContacts: !state.displayBlockedContacts,
      };
    default:
      return state;
  }
}

export function keyboardShortcutsReducer(state = settingsInitialState, action) {
  switch (action.type) {
    case TOGGLE_KEYBOARD_SHORTCUTS:
      return {
        ...state,
        displayKeyboardShortcuts: !state.displayKeyboardShortcuts,
      };
    default:
      return state;
  }
}
export function helpReducer(state = settingsInitialState, action) {
  switch (action.type) {
    case TOGGLE_HELP:
      return {
        ...state,
        displayHelp: !state.displayHelp,
      };
    default:
      return state;
  }
}
