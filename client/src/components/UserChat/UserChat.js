import React, { useRef, useCallback, useEffect } from "react";
import styled from "styled-components";

// import ClickAwayListener from "@mui/material/ClickAwayListener";
// import Grow from "@mui/material/Grow";
// import Paper from "@mui/material/Paper";
// import Popper from "@mui/material/Popper";
// import MenuItem from "@mui/material/MenuItem";
// import useContextMenu from "../Tests/useContextMenu";
import { style } from "../Tests/style.css";
import "react-contexify/dist/ReactContexify.css";
import {
  Menu,
  Item,
  Separator,
  Submenu,
  MenuProvider,
  useContextMenu,
} from "react-contexify";

import {
  StyledUserChatCont,
  StyledUserChatLayout,
  StyledUserChatText,
  StyledChats,
  StyledMenuList,
  StyledItem,
  StyledCircle,
} from "./userChatStyles.js";

function UserChat(props) {
  let MENU_ID = props.passMenu;
  const { show } = useContextMenu({
    id: MENU_ID,
  });

  const groupDialog = [
    "Archive chat",
    "Mute notification",
    "Exit group",
    "Pin chat",
    "Mark as read",
  ];
  const contactDialog = [
    "Archive chat",
    "Mute notification",
    "Delete chat",
    "Pin chat",
    "Mark as read",
  ];

  function handleContextMenu(event) {
    event.preventDefault();
    show(event, {
      props: {
        key: "value",
      },
    });
  }

  const handleItemClick = ({ event, props }) => console.log(event, props);

  return (
    <StyledUserChatLayout onContextMenu={handleContextMenu}>
      <StyledUserChatCont>
        <div className="chatHead">
          <StyledCircle />
        </div>
        <StyledUserChatText>
          <div className="chatName">
            <span className="spanHeading">WebMentor Freshers...</span>
            <span className="spansTime">6:37pm</span>
          </div>
          <div className="msgPreview">
            <p>emma: this is just a preview...</p>
          </div>
        </StyledUserChatText>
      </StyledUserChatCont>
      <Menu id={MENU_ID} style={{ width: "12rem" }}>
        {groupDialog.map((item) => {
          return <StyledItem onClick={handleItemClick}>{item}</StyledItem>;
        })}
      </Menu>
      <div className="borderBottom"></div>
    </StyledUserChatLayout>
  );
}

export default UserChat;

// EBEBEB
