import { Provider } from "react-redux";
import "./App.css";
import Home from "./components/Home/Home";
import { store } from "./Redux-State/store";
import Status from "./components/Status/Status";
import MenuListComposition from "./components/Tests/Tests";
import BasicPopover from "./components/Tests/Poper";
// import Settings from "./components/Settings/UserSettings";
import Meee from "./components/Tests/Meee";
import Poper from "./components/Tests/Poper";
import UserChat from "./components/UserChat/UserChat";
import { useState } from "react";

import SearchContact from "./components/SearchContact/SearchContact";
import {
  Menu,
  Item,
  Separator,
  Submenu,
  MenuProvider,
  useContextMenu,
} from "react-contexify";
function App() {
  return (
    <Provider store={store}>
      <div>
        {/* <Meee mee="qwerty" />
        <Meee mee="qwerty1" />
        <Meee mee="qwerty2" />
        <Meee mee="qwerty3" /> */}
        {/* <UserChat passMenu="qwerty" />
        <UserChat passMenu="qwerty1" />
        <UserChat passMenu="qwerty2" />
        <UserChat passMenu="qwerty3" /> */}

        <Home />

        {/* <MenuListComposition /> */}
      </div>
    </Provider>
  );
}

export default App;
