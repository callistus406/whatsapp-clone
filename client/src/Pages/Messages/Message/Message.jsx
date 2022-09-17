import {
  StyledMessageSpace,
  StyledMessageCont,
  StyledMsgInfo,
  StyledMsgInfoIcon,
  StyledKeyBoardArrow,
  StyledContextMenu,
  StyledContextMenuItem,
  StyledFab,
  StyledContextMenu4MsgSpace,
  StyledContextMenuItem4MsgSpace,
} from "../style";
import {
  messageDialog,
  groupContext,
} from "../../../GlobalVariables/variables";
import React, { useRef, useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { connect } from "react-redux";
import { toggleContactMsg } from "../../../Redux-State/actionCreators/pageActions";
import { fetchMessages } from "../../../Redux-State/actionCreators/fetchRequestActions";
import { format } from "timeago.js";

function Message({ message, getUser, displayMessage, newMessage }) {
  console.log(getUser.data._id);
  const messageScroll = useRef();
  const msgSpaceRef = useRef();
  const prevHeight = useRef(0);
  const [height, setHeight] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const scrollToBottom = () => {
    messageScroll.current.scrollIntoView({ behavior: "smooth" });
  };
  let detect = 0;
  console.log(newMessage);
  const listenToScroll = () => {
    const winScroll =
      document.getElementById("base").scrollTop |
      document.getElementById("base").scrollTop;

    if (winScroll > detect) {
      detect = winScroll - 2;
      setIsVisible(false);
    } else if (winScroll < detect) {
      setIsVisible(true);
    }
  };
  // review this code
  useEffect(() => {
    document.getElementById("base").addEventListener("scroll", listenToScroll);
    console.log(document.getElementById("base"));
    return () =>
      document
        .getElementById("base")
        .removeEventListener("scroll", listenToScroll);
  }, []);

  // for scroll to bottom

  useEffect(() => {
    scrollToBottom();
  }, [message]);

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
    <StyledMessageSpace
      onContextMenu={handleContextMenu}
      style={{ cursor: "context-menu" }}
      id="styledMessageSpace"
    >
      <StyledContextMenu4MsgSpace
        PaperProps={{
          style: {
            // maxHeight: "5rem",
            height: "auto",
            minWidth: "13rem",
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
        {groupContext.map((item) => {
          return (
            <StyledContextMenuItem4MsgSpace onClick={handleClose}>
              {item.text}
            </StyledContextMenuItem4MsgSpace>
          );
        })}
      </StyledContextMenu4MsgSpace>

      <StyledMessageCont ref={msgSpaceRef} id="base">
        {message.map((item, index) => {
          if (item.sender !== getUser.data._id) {
            return (
              <ReceivedMsgs
                key={index}
                msgText={item.text}
                msgTime={item.createdAt}
              />
            );
          } else {
            return (
              <SentMsgs
                key={index}
                msgText={item.text}
                msgTime={item.createdAt}
              />
            );
          }
        })}
        {}
        {isVisible && (
          <StyledFab onClick={scrollToBottom}>
            <KeyboardArrowDownIcon />
          </StyledFab>
        )}

        <div ref={messageScroll} />
      </StyledMessageCont>
    </StyledMessageSpace>
  );
}

function ReceivedMsgs({ msgText, msgTime }) {
  console.log(msgText, msgTime);
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
          {/* <StyledMsgNumber border={borderBottom}>
            +2349034543567
          </StyledMsgNumber>{" "} */}
          {/* <StyledMsgName border={borderBottom}> ~oladipo</StyledMsgName> */}
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
        <p>{msgText}</p>
        <div className="msgTime">
          <div>
            {/* <span>{hours}:</span>
            <span>{mins}</span> */}
            <span className="timeZo">{format(msgTime)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
function SentMsgs({ msgText, msgTime }) {
  return (
    <div class="talk-bubble-sent tri-right-send right-top alignSentMsgs">
      {/* replies */}
      <div class="talktext-sent">
        <p>{msgText}</p>
        <div className="msgTime">
          <div>
            <span>{format(msgTime)}</span>
            <Tick />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Tick(props) {
  return (
    <svg viewBox="0 0 16 15" width="15" height="14">
      <path
        fill="#718388"
        d="m15.01 3.316-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"
      ></path>
    </svg>
  );
}
function mapStateToProps(state) {
  return {
    displayContactInfo: state.contactInfo.displayContactInfo,
    messages: state.messages,
    getUser: state.user,
    displayMessage: state.displayMessage.getMessage,

    // displayConversation: state.conversation.displayConversation,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    fetchMessages: (data) => dispatch(fetchMessages(data)),
    toggleContactMsg: (bool) => dispatch(toggleContactMsg(bool)),
    // toggleConversation: (bool) => dispatch(toggleConversation(bool)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Message);
