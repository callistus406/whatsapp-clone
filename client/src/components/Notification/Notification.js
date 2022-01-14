import React from "react";
import Checkbox from "@mui/material/Checkbox";
import {
  StyledContainer,
  StyledNavArrow,
  StyledArrowBackIcon,
  StyledFormControlLabel,
  customStyles,
  StyledFormHelperText,
  StyledNotificationHeader,
  StyledNotificationContent,
} from "./Notification.style";

export function Notification({ handleClickAction, toggle }) {
  const styles = customStyles();

  const [checked, setChecked] = React.useState({
    sounds: true,
    desktopAlert: true,
    showPreview: true,
    cancelAllDesktopNotification: false,
  });

  const handleChange = (prop) => (event) => {
    let propStore;
    if (prop === "sounds") {
      propStore = checked.sounds;
    } else if (prop === "desktopAlert") {
      propStore = checked.desktopAlert;
      //   clickAction.newChatToggle();
    } else if (prop === "showPreview") {
      propStore = checked.showPreview;
    } else if (prop === "cancelAllDesktopNotification") {
      propStore = checked.cancelAllDesktopNotification;
    }
    setChecked({ ...checked, [prop]: !propStore });
    // setShowDialog({ ...showDialog, [prop]: !propStore });
  };

  return (
    <div className="notification">
      <StyledContainer toggle={toggle} width="28rem" id="mySidenav">
        <StyledNotificationHeader>
          <div className="navArrow">
            <StyledNavArrow display={toggle}>
              <div className="">
                <StyledArrowBackIcon onClick={handleClickAction} />
              </div>
              <p>Notifications</p>
            </StyledNavArrow>
          </div>
        </StyledNotificationHeader>

        <StyledNotificationContent>
          <div>
            <StyledFormControlLabel
              //   className={styles.text}
              control={
                <Checkbox
                  defaultChecked
                  checked={checked.sounds}
                  onChange={handleChange("sounds")}
                  style={styles.checkbox}
                />
              }
              label="Sounds"
            />
          </div>
          {/* ............................. */}
          <div>
            <StyledFormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  checked={checked.desktopAlert}
                  onChange={handleChange("desktopAlert")}
                  style={styles.checkbox}
                />
              }
              label="Desktop Alerts"
            />
            <StyledFormHelperText>
              Display message text in desktop background
            </StyledFormHelperText>
          </div>
          {/* ......................... */}
          <div>
            <StyledFormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  checked={checked.showPreview}
                  onChange={handleChange("showPreview")}
                  style={styles.checkbox}
                />
              }
              label="Show Previews"
            />
          </div>
          <div>
            <StyledFormControlLabel
              control={
                <Checkbox
                  style={styles.checkbox}
                  defaultChecked
                  checked={checked.cancelAllDesktopNotification}
                  onChange={handleChange("cancelAllDesktopNotification")}
                />
              }
              label="Turn off all desktop notifications"
            />
          </div>
        </StyledNotificationContent>
      </StyledContainer>
    </div>
  );
}

// <div className="notification">
// <StyledContainer toggle={props.toggle} width="28rem">
//   <div className="notificationHeader">
//     <div className="navArrow">
//       <StyledNavArrow display={props.toggle}>
//         <div className="">
//           <StyledArrowBackIcon
//             onClick={props.clickAction.profileToggle}
//           />
//         </div>
//         <p>Notifications</p>
//       </StyledNavArrow>
//     </div>
//   </div>
//   .notification
// </StyledContainer>
// </div>
