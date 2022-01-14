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
import StarredMsgs from "../Starred Msgs/StarredMsgs";
import UserSettings from "../Settings/UserSettings";
import { Notification } from "../Notification/Notification";
import BlockedContacts from "../Blocked Contacts/BlockedContacts";
import Status from "../Status/Status";
import "react-contexify/dist/ReactContexify.css";
import SearchContact from "../SearchContact/SearchContact";

import {
  Menu as ContexifyMenu,
  Item,
  Separator,
  Submenu,
  MenuProvider,
  useContextMenu,
} from "react-contexify";
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
} from "./HomeIcons";
const actions = [
  { icon: <InsertPhotoIcon />, name: "Share", class: "speedDial-contact" },

  { icon: <StickerIcon />, name: "Save", class: "speedDial-sticker" },
  { icon: <CameraAltIcon />, name: "Save", class: "speedDial-camera" },
  { icon: <InsertDriveFileIcon />, name: "Save", class: "speedDial-document " },
  { icon: <PersonIcon />, name: "Copy", class: "speedDial-photo" },
];

// Menu;
function Content({ homeProps, toggle }) {
  console.log(homeProps.displayProfileContainer);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const onClickHandler = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="topHeader">
      <div className="profileDisplay">
        <div className="profileIcon" onClick={homeProps.profileToggle}>
          <img
            className="avatarImage"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTApbxj4499GJJWMYvKUVnzMUBJBt1b_Aob0A&usqp=CAU"
            alt=""
            // srcset=""
          />
        </div>
        <div className="profileActions">
          <StyledActionIcons
            toggle={homeProps.displayStatusContainer}
            onClick={homeProps.statusToggle}
          >
            <StatusIcon />
          </StyledActionIcons>
          <StyledActionIcons
            toggle={homeProps.displayChatContainer}
            onClick={homeProps.newChatToggle}
          >
            <MessageIcon />
          </StyledActionIcons>

          <div>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Tooltip title="Account settings">
                <StyledActionIcons
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  background="#D5D5D5"
                  toggle={!open ? "account-menu" : undefined}
                  // onClick={handleDialog("options")}
                  onClick={(e) => onClickHandler(e)}
                >
                  <OptionsIcon />
                </StyledActionIcons>
              </Tooltip>
            </Box>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              // style={{ width: "30rem" }}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <StyledMenuItem onClick={homeProps.newGroupToggle}>
                New Group
              </StyledMenuItem>
              <StyledMenuItem onClick={homeProps.archiveToggle}>
                Archive
              </StyledMenuItem>
              {/* <Divider /> */}
              <StyledMenuItem onClick={homeProps.starredMsgsToggle}>
                Stared messages
              </StyledMenuItem>
              <StyledMenuItem onClick={homeProps.settingsToggle}>
                Settings
              </StyledMenuItem>
              <StyledMenuItem onClick={homeProps.logout}>
                Log out
              </StyledMenuItem>
            </Menu>
          </div>
        </div>
      </div>
      <div className="notificationMsgCont">
        <div className="notificationContent">
          <div className="iconCont">
            <div className="icon">
              <StyledNotificationIcon />{" "}
            </div>
          </div>
          <div className="notificationsText">
            {/* <div className="notificationMsg" </div> */}
            <div style={{ position: "relative" }} className="notificationMsg">
              <p>Get notification of new messages </p>
              <span>Turn on desktop notifications</span>
              <StyledSpan>
                <ArrowForwardIosIcon style={StyledIcon.smallIcon} />
              </StyledSpan>
            </div>
          </div>
        </div>
      </div>
      <CenterDivContent height="3.2rem">
        <StyledInputSearch />
        <StyledSearchIcon />
      </CenterDivContent>
    </div>
  );
}

function Home(props) {
  const [open, setOpen] = useState(false);
  console.log(props);
  function clickHandler() {
    setOpen(!open);
  }

  return (
    <div className="homeParentCont">
      <div className="layoutContainer">
        {/* {props.displayProfileContainer ? ( */}
        <UserProfile
          toggle={props.displayProfileContainer}
          handleClickAction={props.profileToggle}
        />
        <Status
          toggle={props.displayStatusContainer}
          handleClickAction={props.statusToggle}
        />

        <NewChat
          toggle={props.displayChatContainer}
          handleClickAction={props.newChatToggle}
        />
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
        />
        <SearchContact
          toggle={props.displayMsgSearchLayout}
          handleClickAction={props.toggleMsgSearch}
        />

        <div className="column1">
          <Content homeProps={props} />

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
        <StyledOpenChat margin={props.displayMsgSearchLayout}>
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
                  <span> friend 5</span>{" "}
                </div>
              </div>
            </div>
            <div className="icons">
              <div className="searchIcon">
                <SearchIcon click={props.toggleMsgSearch} />
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
    displayProfileContainer: state.profile.displayProfileContainer,
    displayStatusContainer: state.status.displayStatusContainer,
    displayChatContainer: state.newChat.displayChatContainer,
    // displayOptionsContainer: state.options.displayChatContainer,
    // search msg state
    displayMsgSearchLayout: state.searchMsg.displayMsgSearchLayout,
    // options state
    displayCreateNewGrp: state.newGroup.displayNewGroup,
    displayArchiveLayout: state.archive.displayArchive,
    displayStarredMgsLayout: state.starredMsgs.displayStarredMsgs,
    displaySettingsLayout: state.settings.displaySettings,
    logout: state.options.logout,
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
    profileToggle: () => dispatch(profileToggle()),
    statusToggle: () => dispatch(statusToggle()),
    newChatToggle: () => dispatch(newChatToggle()),
    optionsToggle: () => dispatch(optionsToggle()),
    // search msg action
    toggleMsgSearch: () => dispatch(toggleMsgSearch()),
    // sub menu actions
    newGroupToggle: () => dispatch(newGroupToggle()),
    archiveToggle: () => dispatch(archiveToggle()),
    starredMsgsToggle: () => dispatch(starredMsgsToggle()),
    settingsToggle: () => dispatch(settingsToggle()),
    logout: () => dispatch(logout()),
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
  let MENU_ID = "qwerty";
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
    <StyledMessageSpace onContextMenu={handleContextMenu}>
      <Menu id={MENU_ID} style={{ width: "12rem" }}>
        {groupDialog.map((item) => {
          return <StyledItem onClick={handleItemClick}>{item}</StyledItem>;
        })}
      </Menu>
    </StyledMessageSpace>
  );
}
function Options(props) {
  let MENU_ID = "qwerty";
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
    <StyledOptions onContextMenu={handleContextMenu}>
      <Menu id={MENU_ID} style={{ width: "12rem" }}>
        {groupDialog.map((item) => {
          return <StyledItem onClick={handleItemClick}>{item}</StyledItem>;
        })}
      </Menu>
    </StyledOptions>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
