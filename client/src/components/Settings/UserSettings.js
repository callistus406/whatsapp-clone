import React from "react";
import "./UserSettings.css";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { connect } from "react-redux";
import NotificationComponent from "../Notification/NotificationComponent";
import { Help as HelpComponent } from "../Help/Help";
import BlockedContacts from "../Blocked Contacts/BlockedContacts";
import SelectTheme from "../SelectTheme/SelectTheme";
// import {optionTex}
import { settingsToggle } from "../../Redux-State/action creators/pageActions";
import {
  toggleNotification,
  toggleTheme,
  toggleWallpaper,
  toggleBlockedContacts,
  toggleKeyboardShortcuts,
  toggleHelp,
} from "../../Redux-State/action creators/pageActions";
import {
  StyledContainer,
  StyledArrowBackIcon,
  StyledNavArrow,
} from "./UserSettings.styles";
import {
  Notification,
  Theme,
  ChatWallpaper,
  Blocked,
  KeyboardShortcuts,
  Help,
  Avatar,
} from "./settingsIcons";

const optionText = [
  { id: 1, name: "Notification" },
  { id: 2, name: "Theme" },
  { id: 3, name: "Chat Wallpaper" },
  { id: 4, name: "Blocked" },
  { id: 5, name: "Keyboard shortcuts" },
  { id: 6, name: "Help" },
];
// const arr = [<Notification />];
const options = [
  <Notification />,
  <Theme />,
  <ChatWallpaper />,
  <Blocked />,
  <KeyboardShortcuts />,
  <Help />,
];

function UserSettings(props) {
  const actions = [
    props.toggleNotification,
    props.toggleTheme,
    props.toggleWallpaper,
    props.toggleBlockedContacts,
    props.toggleKeyboardShortcuts,
    props.toggleHelp,
  ];
  // console.log(props);
  const [open, setOpen] = React.useState(false);
  // console.log(open);
  const handleClickOpen = () => {
    // console.log("ewewe");
    // setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  function returnNothing() {
    return;
  }
  function SettingsOptions(props) {
    return (
      <div className="settingsOption" onClick={props.clickAction}>
        <div className="icon">{props.icon}</div>
        <div className="textCont">
          <p>{props.text}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="settings">
      <StyledContainer toggle={props.displaySettingsLayout} width="28rem">
        <div className="settingsHeader">
          <div className="navArrow">
            <StyledNavArrow display={props.displaySettingsLayout}>
              <div className="">
                <StyledArrowBackIcon onClick={props.settingsToggle} />
              </div>
              <p>Settings</p>
            </StyledNavArrow>
          </div>
        </div>
        <div className="settingsContent">
          <div className="settingsProfileCont">
            <div className="settingsProfilePicCont">
              <div className="settingsProfilePic">
                <Avatar />
              </div>
            </div>
            <div className="settingsProfileContent">
              <p>Callistus</p>
              <span>Loading About...</span>
            </div>
          </div>
          {options.map(function (item, index) {
            return (
              <SettingsOptions
                icon={item}
                text={optionText[index].name}
                key={optionText[index].id}
                clickAction={actions[index]}
              />
            );
          })}
        </div>
      </StyledContainer>
      <NotificationComponent />
      <BlockedContacts
        toggle={props.displayBlockedContacts}
        handleClickAction={props.toggleBlockedContacts}
      />
      <HelpComponent
        toggle={props.displayHelp}
        handleClickAction={props.toggleHelp}
      />
      <SelectTheme
        toggle={props.displayTheme}
        handleClickAction={props.toggleTheme}
      />
    </div>
  );
}
function mapStateToProps(state) {
  return {
    displayNotification: state.notification.displayNotification,
    displayTheme: state.theme.displayTheme,
    displayWallpaper: state.wallpaper.displayWallpaper,
    displayBlockedContacts: state.blockedContacts.displayBlockedContacts,
    displayKeyboardShortcuts: state.keyboardShortCuts.displayKeyboardShortcuts,
    displayHelp: state.help.displayHelp,
    // search msg state
    displaySettingsLayout: state.settings.displaySettings,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    toggleNotification: () => dispatch(toggleNotification()),
    toggleTheme: () => dispatch(toggleTheme()),
    toggleWallpaper: () => dispatch(toggleWallpaper()),
    toggleBlockedContacts: () => dispatch(toggleBlockedContacts()),
    toggleKeyboardShortcuts: () => dispatch(toggleKeyboardShortcuts()),
    toggleHelp: () => dispatch(toggleHelp()),
    // search msg action
    settingsToggle: () => dispatch(settingsToggle()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSettings);
