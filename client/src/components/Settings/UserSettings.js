import React from "react";
import "./UserSettings.css";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
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

function UserSettings({ handleClickAction, toggle }) {
  const [open, setOpen] = React.useState(false);
  console.log(open);
  const handleClickOpen = () => {
    console.log("ewewe");
    // setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  function returnNothing() {
    return;
  }
  function SettingsOptions({ icon, text, clickAction }) {
    console.log(clickAction);
    return (
      <div className="settingsOption" onclick={handleClickOpen}>
        <div className="icon">{icon}</div>
        <div className="textCont">
          <p>{text}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="settings">
      <StyledContainer toggle={toggle} width="28rem">
        <div className="settingsHeader">
          <div className="navArrow">
            <StyledNavArrow display={toggle}>
              <div className="">
                <StyledArrowBackIcon onClick={handleClickAction} />
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
                clickAction={
                  optionText[index].name === "Theme"
                    ? handleClickOpen
                    : returnNothing
                }
              />
            );
          })}
        </div>
      </StyledContainer>
    </div>
  );
}

export default UserSettings;
