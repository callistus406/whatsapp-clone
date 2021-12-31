import { combineReducers, createStore } from "redux";
import { reducer, displayChatReducer } from "./reducers/reducers";

const rootReducer = combineReducers({
  displayProfileReducer: reducer,
  displayChatReducer: displayChatReducer,
});
export const store = createStore(rootReducer);
// topped herer
