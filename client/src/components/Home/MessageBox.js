import { groupDialog } from "../../Global variables/variables";
import React, { useRef, useCallback, useEffect, useState } from "react";
import Menu from "@mui/material/Menu";
import { connect } from "react-redux";

import { toggleMsgSearch } from "../../Redux-State/action creators/pageActions";
import {
  StyledSpeedDial,
  StyledMenuList,
  StyledMessageSpace,
  StyledBox,
  StyledItem,
  StyledOptions,
  StyledOpenChat,
  StyledContactsCol,
} from "./Home.style";
import { Menu as ContexifyMenu, useContextMenu } from "react-contexify";
import {
  SearchIcon,
  MsgOptionsIcon,
  EmojiIcon,
  RecorderIcon,
  Attachment,
  StickerIcon,
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
function MessageBox(props) {
  const countRef = useRef(1);
  const msgCont = useRef();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    countRef.current = countRef.current + 1;
    msgCont.current = document.getElementById("margin");
    // console.log(msgCont);
  });
  // console.log(props.displayMsgSearchLayout);

  const clickHandler = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <StyledOpenChat toggle={props.displayMsgSearchLayout}>
      <div className="openChatHead">
        <div className="imageCont">
          <div className="image"></div>
        </div>
        <div className="chatHeadInfo">
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
          <Options className="optionIcon">
            <MsgOptionsIcon />
          </Options>
        </div>
      </div>
      <Message id="qwerty" />
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
                  boxShadow: 0,
                }}
                icon={<Attachment />}
                onClick={clickHandler}
                open={open}
              >
                {/* <div className="pin"></div>  */}
                {actions.map((action) => (
                  <SpeedDialAction
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
    </StyledMessageSpace>
  );
});
const Options = React.memo(function Options(props) {
  // const countRef = useRef(0);

  // useEffect(() => {
  //   countRef.current = countRef.current + 1;
  //   console.log("options logged " + countRef.current);
  // });
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
    <StyledOptions onContextMenu={handleContextMenu}>
      <Menu id={MENU_ID} style={{ width: "12rem" }}>
        {groupDialog.map((item) => {
          return (
            <StyledItem key={item.id} onClick={handleItemClick}>
              {item.text}
            </StyledItem>
          );
        })}
      </Menu>
    </StyledOptions>
  );
});

function mapStateToProps(state) {
  return {
    // search msg state
    displayMsgSearchLayout: state.searchMsg.displayMsgSearchLayout,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    // search msg action
    toggleMsgSearch: () => dispatch(toggleMsgSearch()),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(MessageBox));
