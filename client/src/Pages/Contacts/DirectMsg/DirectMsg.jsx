import {
  messageDialog,
  groupContext,
} from "../../../GlobalVariables/variables";
import React, { useRef, useCallback, useEffect, useState } from "react";

import { connect } from "react-redux";
import {
  toggleContactMsg,
  toggleContactInfo,
  toggleConversation,
} from "../../../Redux-State/actionCreators/pageActions";
import { fetchMessages } from "../../../Redux-State/actionCreators/fetchRequestActions";
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
  StyledOpenChatHead,
} from "./style";
import {
  SearchIcon,
  MsgOptionsIcon,
  EmojiIcon,
  RecorderIcon,
  Attachment,
  StickerIcon,
  Tick,
} from "./icons";
// import "./Home.css";

// speed dial
import PersonIcon from "@mui/icons-material/Person";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const actions = [
  { icon: <InsertPhotoIcon />, name: "photo", class: "speedDial-contact" },

  { icon: <StickerIcon />, name: "sicker", class: "speedDial-sticker" },
  { icon: <CameraAltIcon />, name: "camera", class: "speedDial-camera" },
  { icon: <InsertDriveFileIcon />, name: "file", class: "speedDial-document " },
  { icon: <PersonIcon />, name: "contact", class: "speedDial-photo" },
];
const textMsg = [];
function DirectMsg(props) {
  const { userMsg, fetchMessages } = props;
  const [message, setMessage] = useState([]);
  const countRef = useRef(1);
  const msgCont = useRef();
  const inputRef = useRef();
  const [open, setOpen] = useState(false);
  let msgStr = "";
  const date = new Date();

  function getMessage(element) {
    setMessage([
      ...message,
      {
        from: "sender",
        msg: element.value,
        time:
          date.getHours() +
          ":" +
          date.getMinutes() +
          "" +
          (date.getHours() >= 12 ? "pm" : "am"),
      },
    ]);
  }
  function clearInput(element) {
    return (element.value = "");
  }
  console.log(userMsg);
  useEffect(() => {
    let documentInput = document.getElementById("input");
    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        console.log("Enter key was pressed. Run your function.");
        event.preventDefault();
        // callMyFunction();
        getMessage(documentInput);
        // console.log(message);
        textMsg.push(message);
        clearInput(documentInput);
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  });
  // console.log(props.displayMsgSearchLayout);
  // useEffect(() => {
  //   fetchMessages()

  // }, []);
  const clickHandler = useCallback(() => {
    setOpen(!open);
  }, [open]);

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
    <StyledOpenChat
      toggle={props.displaySearchContactMsg || props.displayContactInfo}
    >
      <StyledOpenChatHead>
        <div
          className="imageCont"
          onClick={() => props.toggleContactInfo(true)}
        >
          <div className="image"></div>
        </div>
        <div
          className="chatHeadInfo"
          onClick={() => props.toggleContactInfo(true)}
        >
          <div className="title">
            <p>+2348143568829</p>
          </div>
        </div>
        <div className="icons">
          <div className="searchIcon">
            <SearchIcon margin={msgCont} />
          </div>
          <div className="optionIcon" onClick={handleContextMenu}>
            <MsgOptionsIcon />
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
          </div>
        </div>
      </StyledOpenChatHead>
      <Message id="qwerty" message={message} />
      <div className="msgBar">
        <div className="emojiIcons">
          <div className="emojiCont">
            <div className="emoji">
              <EmojiIcon />
            </div>
          </div>
          <div className="attachmentCont">
            <StyledBox
              sx={{
                // height: 350,
                transform: "translateZ(0px)",
                flexGrow: 1,
              }}
            >
              <StyledSpeedDial
                ariaLabel="SpeedDial openIcon example"
                sx={{
                  position: "absolute",
                  bottom: -25,
                  left: -9,
                  boxShadow: "none",
                }}
                icon={<Attachment />}
                onClick={clickHandler}
                open={open}
              >
                {/* <div className="pin"></div>  */}
                {actions.map((action) => (
                  <SpeedDialAction
                    // boxShadow={false}
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    className={`${action.class} `}
                    disableRipple={true}
                  />
                ))}
              </StyledSpeedDial>
            </StyledBox>
            <div className="attachment"></div>
          </div>
        </div>

        <div className="msgInputCont">
          <input
            type="text"
            id="input"
            className="msgInput"
            placeholder="Type a message"
            // onChange={(e) => setMessage(e.target.value)}
            // onKeyPress={getMessage}
          />
        </div>

        <div className="recorderCont">
          <div className="recorder">
            <RecorderIcon />
          </div>
        </div>
      </div>
    </StyledOpenChat>
  );
}

const Message = React.memo(function Message(props) {
  const messageScroll = useRef();
  const msgSpaceRef = useRef();
  const prevHeight = useRef(0);
  const [height, setHeight] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const scrollToBottom = () => {
    messageScroll.current.scrollIntoView({ behavior: "smooth" });
  };
  let detect = 0;

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
  useEffect(() => {
    console.log("wewewe");
    document.getElementById("base").addEventListener("scroll", listenToScroll);
    return () =>
      document
        .getElementById("base")
        .removeEventListener("scroll", listenToScroll);
  }, []);

  useEffect(() => {}, []);
  // for scroll to bottom

  useEffect(() => {
    scrollToBottom();
  }, [props.message]);

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
        <ReceivedMsgs key="qwerty" />

        <ReceivedMsgs key="qwerty2" />
        {props.message.map(function (msg, idx) {
          if (msg.from === "sender") {
            return <SentMsgs message={msg.msg} key={idx} />;
          }
          return "";
        })}
        {isVisible && (
          <StyledFab onClick={scrollToBottom}>
            <KeyboardArrowDownIcon />
          </StyledFab>
        )}

        <div ref={messageScroll} />
      </StyledMessageCont>
    </StyledMessageSpace>
  );
});

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
        <p>This one adds a right triangle on the left, flush</p>
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
function SentMsgs(props) {
  return (
    <div class="talk-bubble-sent tri-right-send right-top alignSentMsgs">
      {/* replies */}
      <div class="talktext-sent">
        <p>
          {props.message
            ? props.message
            : "This one adds a right triangle on the left, flush at the top by using .tri-right and .left-top to specify the location"}
        </p>
        <div className="msgTime">
          <div>
            <span>2:29 pm </span>
            <Tick />
          </div>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    displaySearchContactMsg: state.searchContactMsg.displaySearchContactMsg,
    displayContactInfo: state.contactInfo.displayContactInfo,
    messages: state.messages,
    // displayConversation: state.conversation.displayConversation,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    toggleContactInfo: (bool) => dispatch(toggleContactInfo(bool)),
    fetchMessages: (data) => dispatch(fetchMessages(data)),
    toggleContactMsg: (bool) => dispatch(toggleContactMsg(bool)),
    // toggleConversation: (bool) => dispatch(toggleConversation(bool)),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(DirectMsg));
