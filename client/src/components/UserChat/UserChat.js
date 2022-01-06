import React, { useRef, useCallback, useEffect } from "react";
import styled from "styled-components";
import "./UserChat.css";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
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
const StyledChats = styled.div`
  width: 100%;
  height: 3rem;
  border: 1px solid blue;
`;
const StyledCircle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid blue;
  margin-left: 1rem;
`;
const StyledMenuList = styled(MenuList)`
  & {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
  }
`;

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

  const StyledItem = styled(Item)`
    & {
      .react-contexify__item__content {
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
        font-size: 0.9rem;
      }

      .react-contexify {
        min-width: 20rem;
      }
    }
  `;

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
    <div className="userChatLayout" onContextMenu={handleContextMenu}>
      <div className="userChatCont">
        <div className="chatHead">
          <StyledCircle />
        </div>
        <div className="chatText">
          <div className="chatName">
            <span className="spanHeading">WebMentor Freshers...</span>
            <span className="spansTime">6:37pm</span>
          </div>
          <div className="msgPreview">
            <p>emma: this is just a preview...</p>
          </div>
        </div>
      </div>
      <Menu id={MENU_ID} style={{ width: "12rem" }}>
        {groupDialog.map((item) => {
          return <StyledItem onClick={handleItemClick}>{item}</StyledItem>;
        })}
      </Menu>
      <div className="borderBottom"></div>
    </div>
  );
}

export default UserChat;

// EBEBEB
