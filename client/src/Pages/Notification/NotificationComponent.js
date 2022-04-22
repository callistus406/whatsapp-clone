import React, { useEffect, useRef } from "react";
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
} from "./style";

import { toggleNotification } from "../../Redux-State/action creators/pageActions";
import { connect } from "react-redux";
export function NotificationComponent(props) {
  const countRef = useRef(0);

  useEffect(() => {
    countRef.current = countRef.current + 1;

    console.log("Notification logged " + countRef.current);
  });
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
      <StyledContainer
        toggle={props.displayNotification}
        width="28rem"
        id="mySidenav"
      >
        <StyledNotificationHeader>
          <div className="navArrow">
            <StyledNavArrow display={props.displayNotification}>
              <div className="">
                <StyledArrowBackIcon onClick={props.toggleNotification} />
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

function mapStateToProps(state) {
  return {
    displayNotification: state.notification.displayNotification,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    toggleNotification: () => dispatch(toggleNotification()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationComponent);
