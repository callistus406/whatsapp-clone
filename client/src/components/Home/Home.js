import React, { useRef, useCallback, useEffect, useState } from "react";
import "./Home.css";
import Box from "@mui/material/Box";
import { connect } from "react-redux";
import Menu from "@mui/material/Menu";
import UserChat from "../UserChat/UserChat";
import UserProfile from "../UserProfile/UserProfile";
import { CenterDivContent } from "../Styles/CustomStyles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// menu
import NewChat from "../NewChat/NewChat";
import Tooltip from "@mui/material/Tooltip";
import "react-contexify/dist/ReactContexify.css";
// speed dial
import PersonIcon from "@mui/icons-material/Person";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import NewGrp from "../ New Grp/NewGrp";
import ArchivedChats from "../Archived Chats/ArchivedChats";
import StarredMsgs from "../StarredMsgs/StarredMsgs";
import UserSettings from "../Settings/UserSettings";
import BlockedContacts from "../BlockedContacts/BlockedContacts";
import Status from "../Status/Status";
import "react-contexify/dist/ReactContexify.css";
import SearchContact from "../SearchContact/SearchContact";
import { groupDialog } from "../../GlobalVariables/variables";

import {
  profileToggle,
  newChatToggle,
  statusToggle,
  optionsToggle,
  newGroupToggle,
  archiveToggle,
  starredMsgsToggle,
  settingsToggle,
  toggleMsgSearch,
  logout,
  toggleGroupInfo,
} from "../../Redux-State/action creators/pageActions";
import {
  StyledSpeedDial,
  StyledSpan,
  StyledIcon,
  StyledInputSearch,
  StyledSearchIcon,
  StyledNotificationIcon,
  StyledActionIcons,
  StyledMenuItem,
  StyledMenuList,
  StyledMessageSpace,
  StyledBox,
  StyledItem,
  StyledOptions,
  StyledOpenChat,
  StyledContactsCol,
  StyledSearchBarContainer,
  StyledContextMenu,
  StyledContextMenuItem,
  StyledFab,
  StyledContextMenu4MsgSpace,
  StyledContextMenuItem4MsgSpace,
} from "./Home.style";
import {
  StatusIcon,
  MessageIcon,
  OptionsIcon,
  SearchIcon,
  MsgOptionsIcon,
  EmojiIcon,
  RecorderIcon,
  Attachment,
  StickerIcon,
  ProfileIcon,
} from "./HomeIcons";
import GroupInfo from "../GroupInfo/GroupInfo";
import MessageBox from "./MessageBox";
import HomeContent from "./HomeComp/HomeContent";
const actions = [
  { icon: <InsertPhotoIcon />, name: "photo", class: "speedDial-contact" },

  { icon: <StickerIcon />, name: "sicker", class: "speedDial-sticker" },
  { icon: <CameraAltIcon />, name: "camera", class: "speedDial-camera" },
  { icon: <InsertDriveFileIcon />, name: "file", class: "speedDial-document " },
  { icon: <PersonIcon />, name: "contact", class: "speedDial-photo" },
];

// Menu;

function Home(props) {
  const countRef = useRef(0);
  const msgCont = useRef();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    countRef.current = countRef.current + 1;
    msgCont.current = document.getElementById("margin");
    // console.log(msgCont);
    console.log(
      "home -0-0 rendered..............." + countRef.current + "---times"
    );
  });
  function clickHandler() {
    setOpen(!open);
  }

  return (
    <div className="homeParentCont">
      <div className="layoutContainer">
        {/* {props.displayProfileContainer ? ( */}

        <UserProfile />
        <Status />
        <NewChat />
        <NewGrp />

        <ArchivedChats />
        <StarredMsgs />
        <UserSettings />
        {/*
        

        <NewGrp
          toggle={props.displayCreateNewGrp}
          handleClickAction={props.newGroupToggle}
        />
        <ArchivedChats
          toggle={props.displayArchiveLayout}
          handleClickAction={props.archiveToggle}
        />
        <StarredMsgs
          toggle={props.displayStarredMgsLayout}
          handleClickAction={props.starredMsgsToggle}
        />
        <UserSettings
          toggle={props.displaySettingsLayout}
          handleClickAction={props.settingsToggle}
        /> */}
        {/* <GroupInfo
          toggle={props.displayGroupInfoLayout}
          handleClickAction={props.toggleGroupInfo}
        /> */}
        <SearchContact />
        <GroupInfo />
        <div className="column1">
          <HomeContent />

          <StyledContactsCol
            id="style-1"
            width="24rem"
            toggle={props.displayMsgSearchLayout}
          >
            <UserChat passMenu="qwerty" />
            <UserChat passMenu="qwerty1" />
            <UserChat passMenu="qwerty2" />
            <UserChat passMenu="qwerty3" />
            <UserChat passMenu="qwertyy" />
            <UserChat passMenu="qwerty1y" />
            <UserChat passMenu="qwerty2e" />
            <UserChat passMenu="qwerty3e" />
          </StyledContactsCol>
        </div>

        {/* <div className="chatColCont"> */}
        {/* here */}
        <MessageBox />
        <div className="">
          {/* commented */}
          {/* <div className="chatColDiv">
            <div className="imageCont">
              <img src={image} alt="image" srcset="" className="connectImage" />
            </div>
            <div className="textContent">
              <span>Keep Your Phone Connected</span>
              <p>
                Whatsapp Connects to your phone to sync your messages,To reduce
                data usage,connect your phone to wifi
              </p>
            </div>
          </div> */}
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    // displayProfileContainer: state.profile.displayProfileContainer,
    // displayStatusContainer: state.status.displayStatusContainer,
    // displayChatContainer: state.newChat.displayChatContainer,
    // displayOptionsContainer: state.options.displayChatContainer,
    // search msg state
    // displayMsgSearchLayout: state.searchMsg.displayMsgSearchLayout,
    // group info state
    displayGroupInfoLayout: state.groupInfo.displayGroupInfoLayout,
    // options state
    // displayCreateNewGrp: state.newGroup.displayNewGroup,
    // displayArchiveLayout: state.archive.displayArchive,
    // displayStarredMgsLayout: state.starredMsgs.displayStarredMsgs,
    // displaySettingsLayout: state.settings.displaySettings,
    // logout: state.options.logout,
    // settings sub menu
    // displayNotification: state.notification.displayNotification,
    // displayTheme: state.theme.displayTheme,
    // displayWallpaper: state.wallpaper.displayWallpaper,
    // displayBlockedContacts: state.blockedContacts.displayBlockedContacts,
    // displayKeyboardShortcuts: state.keyboardShortCuts.displayKeyboardShortcuts,
    // displayHelp: state.help.displayHelp,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    // profileToggle: () => dispatch(profileToggle()),
    // statusToggle: () => dispatch(statusToggle()),
    // newChatToggle: () => dispatch(newChatToggle()),
    optionsToggle: () => dispatch(optionsToggle()),
    // search msg action
    // toggleMsgSearch: () => dispatch(toggleMsgSearch()),
    // search group info
    toggleGroupInfo: () => dispatch(toggleGroupInfo()),
    // sub menu actions
    // newGroupToggle: () => dispatch(newGroupToggle()),
    // archiveToggle: () => dispatch(archiveToggle()),
    // starredMsgsToggle: () => dispatch(starredMsgsToggle()),
    // settingsToggle: () => dispatch(settingsToggle()),
    // logout: () => dispatch(logout()),
    // settings sub menu actions
    // toggleNotification: () => dispatch(toggleNotification()),
    // toggleTheme: () => dispatch(toggleTheme()),
    // toggleWallpaper: () => dispatch(toggleWallpaper()),
    // toggleBlockedContacts: () => dispatch(toggleBlockedContacts()),
    // toggleKeyboardShortcuts: () => dispatch(toggleKeyboardShortcuts()),
    // toggleHelp: () => dispatch(toggleHelp()),
  };
}

function Message(props) {
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

  const handleItemClick = ({ event, props }) => console.log(event, props);
  return (
    <StyledMessageSpace onContextMenu={handleContextMenu}>
      {/* <Menu id={MENU_ID} style={{ width: "12rem" }}>
        {groupDialog.map((item) => {
          return (
            <StyledItem key={item.id} onClick={handleItemClick}>
              {item.text}
            </StyledItem>
          );
        })}
      </Menu> */}
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
        {groupDialog.map((item) => {
          return (
            <StyledContextMenuItem onClick={handleClose}>
              {item.text}
            </StyledContextMenuItem>
          );
        })}
      </StyledContextMenu>
    </StyledMessageSpace>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Home));
