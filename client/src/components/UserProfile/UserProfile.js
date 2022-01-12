import React from "react";
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
} from "./UserProfile.styles";
function UserProfile({ handleClickAction, toggle }) {
  console.log(handleClickAction);
  return (
    <div className="userProfileCont">
      <StyledContainer toggle={toggle} width="28rem">
        <StyledProfileHeader>
          <StyledNavArrow>
            {/* profile toggle */}
            <StyledArrowBackIcon onClick={handleClickAction} />
            <p>Profile</p>
          </StyledNavArrow>
        </StyledProfileHeader>
        <div className="profileContent"></div>
        <StyleProfileBox>
          <StyleProfilePicBox>
            <DisplayPic></DisplayPic>
          </StyleProfilePicBox>

          <CustomDiv
            height="5.4rem"
            width="100%"
            background="#fff"
            color="#43B1A7"
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
      </StyledContainer>
    </div>
  );
}
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

export default UserProfile;
// className={props.toggle ? "userProfileCont" : ""}
