import { Provider } from "react-redux";
import React, { useEffect, useRef, useState } from "react";
import { store } from "../../Redux-State/store";
import Home from "../Home/Home";
import SearchContact from "../SearchContact/SearchContact";
// import ContextMenu from "../components/Tests/Context";
import ContextMenuHoc from "../ContextMenu/ContextMenuHoc";
// import
import { CustomizedDialogs } from "../Tests/Contacts";
import FloatingActionButtons from "../Tests/Fab";
import Scroll from "../Tests/Scroll";
import ConnectionError from "../Interrupts/ConnectionMsg/ConnectionError";
import { KeyboardShortcuts } from "../Settings/icons";
import Register from "../Register/Register";
// import KeyboardCommands from "../KeyboardCommands/KeyboardCommands";

function Whatsapp() {
  return (
    <Provider store={store}>
      <div>
        {/* <Meee mee="qwerty" />
        <Meee mee="qwerty1" />
        <Meee mee="qwerty2" />
        <Meee mee="qwerty3" /> */}
        {/* <UserChat passMenu="qwerty" />
        <UserChat pacurl -XPOST "http://localhost:9200/products/_update/100" -H 'Content-Type: application/json' -d'{  "doc": {    "source":"jumia.com.ng"  }}'ssMenu="qwerty1" />
        <UserChat passMenu="qwerty2" />
        <UserChat passMenu="qwerty3" /> */}
        {/* luxury */}
        <Register />
        {/* <FloatingActionButtons /> */}
        {/* <SearchContact /> */}

        {/* <MenuListComposition /> */}
      </div>
    </Provider>
  );
}

export default Whatsapp;
