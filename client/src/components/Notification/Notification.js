import React from "react";
import "./Notification.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import styled from "styled-components";
import EditIcon from "@mui/icons-material/Edit";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { connect } from "react-redux";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { makeStyles } from "@mui/styles";
import FormHelperText from "@mui/material/FormHelperText";

const StyledContainer = styled.div`
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  border: 1px solid blue;
  overflow-x: hidden; /* Disable horizontal scroll */
  transition: 0.5s;
`;

// height: 100%;
//    width: ${(props) =>
//     props.toggle ? props.width : 0};
//   position: fixed;
//   z-index: 1;
//   top: 0;
//   left: 0;
//   background-color: #fff;

//   transition: 0.1s;
const StyledDiv = styled.div`
  height: 100%; /* 100% Full-height */
  width: ${(props) =>
    props.toggle ? props.width : 0}; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #fff;
  overflow-x: hidden; /* Disable horizontal scroll */
  transition: 0.5s;
`;

const StyleProfileBox = styled.div`
  height: 100%;
  width: 100%;
  background: #ededed;
`;

const DisplayPic = styled.div`
  height: 202px;
  width: 202px;
  border-radius: 50%;
  border: 1px solid blue;
`;
const StyleProfilePicBox = styled.div`
  height: 16rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CustomDiv = styled.div`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  border: ${(props) => props.border};
  display: ${(props) => props.display};
  justify-content:${(props) => props.justifyContent}
  align-items: ${(props) => props.alignItems};
  padding-left: ${(props) => props.padding}
`;
const StyledEditIcon = styled(EditIcon)`
  color: #919191;
`;
const StyledArrowBackIcon = styled(ArrowBackIcon)`
  color: #fff;
  cursor: pointer;
`;
const StyledNavArrow = styled.div`
  width: 22rem;
  height: 3rem;
  ${"" /* border: 1px solid blue; */}
  display: flex;
  align-items: center;
  ${"" /* justify-content: center; */}
  color: #fff;
  display: ${(props) => (props.display ? "flex" : "none")};

  p {
    margin-left: 2rem;
    font-size: 1.2rem;
  }
`;

const StyledFormHelperText = styled(FormHelperText)`
  && {
    font-size: 0.8rem;
    color: #858585;
    margin-left: 2rem;
  }
`;

function customStyles() {
  return {
    checkbox: {
      color: "#009688",
    },
    text: {
      color: "#EDEDED",
    },
  };
}
const StyledFormControlLabel = styled(FormControlLabel)`
  && {
    .MuiFormControlLabel-label {
      font-size: 0.9rem;
    }
  }
`;

function Notification({ handleClickAction, toggle }) {
  const styles = customStyles();
  const [checked, setChecked] = React.useState({
    sounds: true,
    desktopAlert: true,
    showPreview: true,
    cancelAllDesktopNotification: false,
  });
  console.log(
    checked.sounds,
    checked.showPreview,
    checked.desktopAlert,
    checked.cancelAllDesktopNotification
  );

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
        <div className="notificationHeader">
          <div className="navArrow">
            <StyledNavArrow display={toggle}>
              <div className="">
                <StyledArrowBackIcon onClick={handleClickAction} />
              </div>
              <p>Notifications</p>
            </StyledNavArrow>
          </div>
        </div>
        <div className="notificationContent">
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
        </div>
      </StyledContainer>
    </div>
  );
}

export default Notification;

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
