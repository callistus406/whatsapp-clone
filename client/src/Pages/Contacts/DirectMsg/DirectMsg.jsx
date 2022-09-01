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
  StyledBox,
  StyledOpenChat,
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
} from "./icons";
// import "./Home.css";
// speed dial
import PersonIcon from "@mui/icons-material/Person";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import Messages from "../../Home/Conversation/Messages";
const actions = [
  { icon: <InsertPhotoIcon />, name: "photo", class: "speedDial-contact" },

  { icon: <StickerIcon />, name: "sicker", class: "speedDial-sticker" },
  { icon: <CameraAltIcon />, name: "camera", class: "speedDial-camera" },
  { icon: <InsertDriveFileIcon />, name: "file", class: "speedDial-document " },
  { icon: <PersonIcon />, name: "contact", class: "speedDial-photo" },
];
const textMsg = [];
function DirectMsg(props) {
  console.log(props.displayConversation);

  const { userMsg, fetchMessages } = props;
  const [message, setMessage] = useState([]);
  const countRef = useRef(1);
  const msgCont = useRef();
  const inputRef = useRef();
  const [open, setOpen] = useState(false);
  let msgStr = "";
  const date = new Date();

  // function getMessage(element) {
  //   setMessage([
  //     ...message,
  //     {
  //       from: "sender",
  //       msg: element.value,
  //       time:
  //         date.getHours() +
  //         ":" +
  //         date.getMinutes() +
  //         "" +
  //         (date.getHours() >= 12 ? "pm" : "am"),
  //     },
  //   ]);
  // }
  function clearInput(element) {
    return (element.value = "");
  }
  console.log(userMsg);
  // send message on click of the enter key
  useEffect(() => {
    let documentInput = document.getElementById("input");
    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        console.log("Enter key was pressed. Run your function.");
        event.preventDefault();
        // callMyFunction();
        // getMessage(documentInput);
        // console.log(message);
        setMessage(documentInput.value);

        clearInput(documentInput);
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  });

  console.log(message);
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

  // if (
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
      {!userMsg.loading ? <Messages id="qwerty" message={userMsg.data} /> : ""}
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
  // } else {
  //   return <h1>loading</h1>;
  // }
}

function mapStateToProps(state) {
  return {
    displaySearchContactMsg: state.searchContactMsg.displaySearchContactMsg,
    displayContactInfo: state.contactInfo.displayContactInfo,
    messages: state.messages,
    displayConversation: state.conversations,

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
