import styled from "styled-components";
import EditIcon from "@mui/icons-material/Edit";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

export const StyledContainer = styled.div`
  height: 100%; /* 100% Full-height */
  width: ${(props) =>
    props.toggle ? props.width : 0}; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1;
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #fff;

  transition: 0.1s;
`;
export const StyledDiv = styled.div`
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

export const StyleProfileBox = styled.div`
  height: 100%;
  width: 100%;
  background: #ededed;
`;

export const StyledArrowBackIcon = styled(ArrowBackIcon)`
  color: #fff;
  cursor: pointer;
`;
export const StyledNavArrow = styled.div`
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
export const StyledSettings = styled.div`
  .settingsHeader {
    height: 6.5rem;

    background: #00bfa5;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
  .content {
    width: 50%;
    height: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 2rem;
  }
  .status {
    width: 80%;
    height: 8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;
export const StyledSettingsOption = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }

  .icon {
    margin-left: 1rem;
    width: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .textCont {
    width: 17rem;
    padding-left: 1rem;
    font-size: large;
  }
`;
export const StyledSettingsContent = styled.div`
  width: 100%;
  height: 26rem;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #fff;
  overflow-x: hidden;
  .settingsProfileCont {
    width: 100%;
    height: 7rem;
    padding-left: 1rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
      background-color: #f5f5f5;
    }
    .settingsProfilePicCont {
      width: 100px;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      .settingsProfilePic {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #dfe5e7;
      }
      .settingsProfileContent {
        width: 18rem;
        height: 6rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        p {
          margin-bottom: 0.8rem;
          font-weight: 500;
        }
        span {
          color: #8c8c8c;
        }
      }
    }
  }
`;
