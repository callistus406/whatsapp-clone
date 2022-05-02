import React, { useRef, useEffect } from "react";
import {
  StyledContainer,
  StyleProfileBox,
  DisplayPic,
  StyleProfilePicBox,
  CustomDiv,
  StyledEditIcon,
  StyledArrowBackIcon,
  StyledProfileHeader,
  StyledNavArrow,
  StyledProfileContent,
} from "./styles";
import { hideProfile } from "../../Redux-State/actionCreators/pageActions";
import { connect } from "react-redux";

function UserProfile(props) {
  const countRef = useRef(0);

  useEffect(() => {
    countRef.current = countRef.current + 1;

    console.log("profile logged " + countRef.current);
  });
  return (
    <StyledContainer toggle={props.displayProfileContainer} width="28rem">
      <StyledProfileHeader>
        <StyledNavArrow>
          {/* profile toggle */}
          <StyledArrowBackIcon onClick={() => props.hideProfile(false)} />
          <p>Profile</p>
        </StyledNavArrow>
      </StyledProfileHeader>
      <StyledProfileContent>
        <div className="profileContent"></div>
        <StyleProfileBox>
          <StyleProfilePicBox>
            <DisplayPic></DisplayPic>
          </StyleProfilePicBox>

          <CustomDiv
            height="5.4rem"
            width="100%"
            background="#fff"
            color="#008069"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <div className="content">
              <p>Your name</p>
              <span style={{ color: "#000" }}>Callistus</span>
            </div>
            <div className="editIcon">
              <StyledEditIcon />
            </div>
          </CustomDiv>
          <CustomDiv
            height="4.7rem"
            width="100%"
            background="#EDEDED"
            color="#43B1A7"
            display="flex"
            justifyContent="center"
            alignItems="center"
            fontSize="1rem"
            padding="1rem"
          >
            <p
              style={{
                alignSelf: "center",
                width: "90%",
              }}
            >
              This is not your username or pin.This name will be visible to your
              whatsapp contacts
            </p>
          </CustomDiv>
          <CustomDiv
            height="8.5rem"
            width="100%"
            background="#fff"
            color="#43B1A7"
            padding="1rem"
            display="flex"
          >
            <div className="status">
              <p>About</p>
              <span style={{ color: "#000" }}>
                This is where you enter you status
              </span>
            </div>
            <div className="editIcon">
              <StyledEditIcon />
            </div>
          </CustomDiv>
        </StyleProfileBox>
      </StyledProfileContent>
    </StyledContainer>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    hideProfile: () => dispatch(hideProfile()),
  };
}

function mapStateToProps(state) {
  return {
    displayProfileContainer: state.profile.displayProfileContainer,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(UserProfile));
// function mapStateToProps(state) {
//   return {
//     displayProfileContainer: state.displayProfileContainer,
//   };
// }
// function mapDispatchToProps(dispatch) {
//   return {
//     displayProfile: () => dispatch(displayProfile()),
//   };
// }
// className={props.toggle ? "userProfileCont" : ""}
