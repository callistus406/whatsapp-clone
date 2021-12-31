import React from "react";
import "./UserProfile.css";
import styled from "styled-components";
import EditIcon from "@mui/icons-material/Edit";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { connect } from "react-redux";
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
function UserProfile(props) {
  return (
    <div className="userProfileCont">
      <StyledDiv toggle={props.toggle} width="28rem">
        <div className="userProfileHeader">
          <div className="navArrow">
            {/* profile toggle */}
            <StyledArrowBackIcon onClick={props.clickAction.profileToggle} />
            <p>Profile</p>
          </div>
        </div>
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
      </StyledDiv>
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
