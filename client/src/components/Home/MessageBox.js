import { groupDialog } from "../../Global variables/variables";
import React, { useRef, useCallback, useEffect, useState } from "react";
import Menu from "@mui/material/Menu";
import { connect } from "react-redux";
import {
  toggleMsgSearch,
  toggleGroupInfo,
} from "../../Redux-State/action creators/pageActions";
import {
  StyledSpeedDial,
  StyledMenuList,
  StyledMessageSpace,
  StyledBox,
  StyledItem,
  StyledOptions,
  StyledOpenChat,
  StyledContactsCol,
  StyledMessageCont,
  StyledMsgName,
  StyledMsgInfo,
  StyledMsgNumber,
  StyledMsgInfoIcon,
  StyledKeyBoardArrow,
} from "./Home.style";
import { Menu as ContexifyMenu, useContextMenu } from "react-contexify";
import {
  SearchIcon,
  MsgOptionsIcon,
  EmojiIcon,
  RecorderIcon,
  Attachment,
  StickerIcon,
  Tick,
} from "./HomeIcons";
import "./Home.css";

// speed dial
import PersonIcon from "@mui/icons-material/Person";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

const actions = [
  { icon: <InsertPhotoIcon />, name: "photo", class: "speedDial-contact" },

  { icon: <StickerIcon />, name: "sicker", class: "speedDial-sticker" },
  { icon: <CameraAltIcon />, name: "camera", class: "speedDial-camera" },
  { icon: <InsertDriveFileIcon />, name: "file", class: "speedDial-document " },
  { icon: <PersonIcon />, name: "contact", class: "speedDial-photo" },
];
const textMsg = [];
function MessageBox(props) {
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
  console.log(message);
  useEffect(() => {
    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        console.log("Enter key was pressed. Run your function.");
        event.preventDefault();
        // callMyFunction();
        getMessage(document.getElementById("input"));
        // console.log(message);
        textMsg.push(message);
        clearInput(document.getElementById("input"));
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  });
  // console.log(props.displayMsgSearchLayout);

  const clickHandler = useCallback(() => {
    setOpen(!open);
  }, [open]);

  let MENU_ID = "qwerty";
  const { show } = useContextMenu({
    id: MENU_ID,
  });

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
    <StyledOpenChat
      toggle={props.displayMsgSearchLayout || props.displayGroupInfoLayout}
    >
      <div className="openChatHead">
        <div className="imageCont" onClick={props.toggleGroupInfo}>
          <div className="image"></div>
        </div>
        <div className="chatHeadInfo" onClick={props.toggleGroupInfo}>
          <div className="title">
            <p>Nigeria News</p>
            <div>
              {" "}
              <span> friend 1</span> <span> friend 2</span>{" "}
              <span> friend 3</span>
              <span> friend 4</span>
              <span> friend 5</span> <span> friend 1</span>{" "}
            </div>
          </div>
        </div>
        <div className="icons">
          <div className="searchIcon">
            <SearchIcon margin={msgCont} />
          </div>
          <div className="optionIcon" onClick={handleContextMenu}>
            <MsgOptionsIcon />
            <Menu id={MENU_ID} style={{ width: "12rem" }}>
              {groupDialog.map((item) => {
                return (
                  <StyledItem key={item.id} onClick={handleItemClick}>
                    {item.text}
                  </StyledItem>
                );
              })}
            </Menu>
          </div>
        </div>
      </div>
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
                    boxShadow={false}
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
  let MENU_ID = "qwerty";
  const { show } = useContextMenu({
    id: MENU_ID,
  });

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
    <StyledMessageSpace onContextMenu={handleContextMenu}>
      <Menu id={MENU_ID} style={{ width: "12rem" }}>
        {groupDialog.map((item) => {
          return (
            <StyledItem key={item.id} onClick={handleItemClick}>
              {item.text}
            </StyledItem>
          );
        })}
      </Menu>

      <StyledMessageCont>
        <ReceivedMsgs />

        <ReceivedMsgs />
        {props.message.map(function (msg) {
          if (msg.from === "sender") {
            return <SentMsgs message={msg.msg} />;
          }
          return "";
        })}
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

  return (
    <div
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

        <StyledKeyBoardArrow hide={showArrow}>
          <StyledMsgInfoIcon fontSize="medium" />
        </StyledKeyBoardArrow>
      </StyledMsgInfo>
      <div class="talktext">
        <p>
          This one adds a right triangle on the left, flush at the top by using
          .tri-right and .left-top to specify the location.
        </p>
        <div className="msgTime">
          <div>
            <span>{date.getHours()}:</span>
            <span>{date.getMinutes()}</span>
            <span>{date.getHours() >= 12 ? "pm" : "am"}</span>
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

// const Options = React.memo(function Options(props) {

//   return (
//     <StyledOptions onContextMenu={handleContextMenu}>
//       <Menu id={MENU_ID} style={{ width: "12rem" }}>
//         {groupDialog.map((item) => {
//           return (
//             <StyledItem key={item.id} onClick={handleItemClick}>
//               {item.text}
//             </StyledItem>
//           );
//         })}
//       </Menu>
//     </StyledOptions>
//   );
// });

function mapStateToProps(state) {
  return {
    displayGroupInfoLayout: state.groupInfo.displayGroupInfoLayout,

    displayMsgSearchLayout: state.searchMsg.displayMsgSearchLayout,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    toggleGroupInfo: () => dispatch(toggleGroupInfo()),

    toggleMsgSearch: () => dispatch(toggleMsgSearch()),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(MessageBox));
