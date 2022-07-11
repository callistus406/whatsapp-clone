import { messageDialog, groupContext } from "../../GlobalVariables/variables";
import React, { useRef, useCallback, useEffect, useState } from "react";
import "../../Pages/Home/Home.css";
import { connect } from "react-redux";
import {
  toggleMsgSearch,
  showGroupInfo,
} from "../../Redux-State/actionCreators/pageActions";
import {
  StyledSpeedDial,
  StyledMessageSpace,
  StyledBox,
  StyledOpenChat,
  StyledMessageCont,
  StyledMsgName,
  StyledMsgInfo,
  StyledMsgNumber,
  StyledMsgInfoIcon,
  StyledKeyBoardArrow,
  StyledContextMenu,
  StyledContextMenuItem,
  StyledFab,
  StyledContextMenu4MsgSpace,
  StyledContextMenuItem4MsgSpace,
} from "./style";

function ReceivedMsgs() {
  const msgInfoRef = useRef();
  const [borderBottom, setBorderBottom] = useState(false);
  const [showArrow, setShowArrow] = useState(false);
  function addBorderBottom(bool) {
    setBorderBottom(bool);
  }

  function hideArrow(value) {
    setShowArrow(value);
  }
  const date = new Date();
  const mins = date.getMinutes();
  const hours = date.getHours();
  const [contextMenu, setContextMenu] = React.useState(null);

  const handleContextMenu = (event) => {
    event.preventDefault();
    setContextMenu(
      contextMenu === null
        ? {
            mouseX: event.clientX - 2,
            mouseY: event.clientY - 4,
          }
        : // repeated contextmenu when it is already open closes it with Chrome 84 on Ubuntu
          // Other native context menus might behave different.
          // With this behavior we prevent contextmenu from the backdrop to re-locale existing context menus.
          null
    );
  };

  const handleClose = () => {
    setContextMenu(null);
  };

  return (
    <div
      onContextMenu={handleClose}
      class="talk-bubble tri-right left-top"
      onMouseEnter={() => hideArrow(true)}
      onMouseLeave={() => hideArrow(false)}
    >
      <StyledMsgInfo>
        <div
          className=""
          onMouseEnter={() => addBorderBottom(true)}
          onMouseLeave={() => addBorderBottom(false)}
        >
          <StyledMsgNumber border={borderBottom}>
            +2349034543567
          </StyledMsgNumber>{" "}
          <StyledMsgName border={borderBottom}> ~oladipo</StyledMsgName>
        </div>

        <StyledKeyBoardArrow hide={showArrow} onClick={handleContextMenu}>
          <StyledMsgInfoIcon fontSize="medium" />
        </StyledKeyBoardArrow>
        <StyledContextMenu
          PaperProps={{
            style: {
              // maxHeight: ITEM_HEIGHT * 4.5,
              minHeight: "16.9rem",
              width: "auto",
            },
          }}
          open={contextMenu !== null}
          onClose={handleClose}
          anchorReference="anchorPosition"
          autoFocus={false}
          anchorPosition={
            contextMenu !== null
              ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
              : undefined
          }
        >
          {messageDialog.map((item) => {
            return (
              <StyledContextMenuItem onClick={handleClose}>
                {item.text}
              </StyledContextMenuItem>
            );
          })}
        </StyledContextMenu>
      </StyledMsgInfo>
      <div class="talktext">
        <p>
          This one adds a right triangle on the left, flush at the top by using
          .tri-right and .left-top to specify the location.
        </p>
        <div className="msgTime">
          <div>
            <span>{hours}:</span>
            <span>{mins}</span>
            <span className="timeZo">
              {date.getHours() >= 12 ? "pm" : "am"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ReceivedMsgs;
