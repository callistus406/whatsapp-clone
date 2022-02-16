import { Provider } from "react-redux";
import React, { useEffect, useRef } from "react";
import { store } from "../Redux-State/store";
import Home from "../components/Home/Home";
import SearchContact from "../components/SearchContact/SearchContact";
// import ContextMenu from "../components/Tests/Context";
import ContextMenuHoc from "../components/ContextMenu/ContextMenuHoc";
// import
import { CustomizedDialogs } from "../components/Tests/Contacts";
import FloatingActionButtons from "../components/Tests/Fab";
import Scroll from "../components/Tests/Scroll";
function Whatsapp() {
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
        {/* <FloatingActionButtons /> */}
        {/* <SearchContact /> */}

        {/* <MenuListComposition /> */}
      </div>
    </Provider>
  );
}

export default Whatsapp;
