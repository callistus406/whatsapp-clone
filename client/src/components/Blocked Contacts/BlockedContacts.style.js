import styled from "styled-components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FormHelperText from "@mui/material/FormHelperText";
export const StyledContainer = styled.div`
  height: 100%; /* 100% Full-height */
  width: ${(props) =>
    props.toggle ? props.width : 0}; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #fff;

  ${"" /* transition: 0.1s; */}
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
    font-size: 1.1rem;
  }
`;
export const StyledFormHelperText = styled(FormHelperText)`
  && {
    font-size: 0.9rem;
    margin-left: 1rem;
    margin-top: 1rem;
  }
`;

export const StyledBlockedContactsHeader = styled.div`
  height: 6.5rem;
  background: #00bfa5;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
export const StyledBlockedContactsContent = styled.div`
  height: calc(100vh - 6.5rem);
  background: #ededed;
  display: ${(props) => (props.toggle ? "block" : "none")};
  margin: 4px, 4px;
  transition: 0.1s;
  min-width: 28rem;
  overflow-x: hidden;
  overflow-y: auto;
  ${"" /* border: 1px solid blue; */}

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 5px;
    background-color: #bfbfbf;
  }

  &::-webkit-scrollbar-thumb {
    height: 10px;

    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #bfbfbf;
  }
`;
export const StyledAddContact = styled.div`
  width: 100%;
  height: 3.75rem;
  ${"" /* border: 1px solid blue; */}
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f0f0f0;
  background: #fff;
  &:hover {
    background: #f5f5f5;
  }
  padding-left: 1rem;
  .iconCont {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    .icon {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  p {
    font-size: 1.1 rem;
  }
`;

export const StyledContactContainer = styled.div`
  width: 100%;
  height: 4.438rem;
  display: flex;
  cursor: pointer;
  align-items: center;
  padding-left: 1rem;
  background: #fff;

  &:hover {
    background: #f5f5f5;
  }
  .avatarCont {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    .avatar {
      width: 49px;
      height: 49px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .deleteIconCont {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    .deleteIcon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const StyledContactInfo = styled.div`
  width: 100%;
  height: 4rem;
  padding-left: 1rem;
  .name {
    height: 1.5rem;
    margin-bottom: 0.5rem;
    font-weight: 300;
    margin-top: 0.5rem;
  }
  .about {
    height: 1.5rem;
    ${"" /* border: 1px solid blue; */}
    font-size: 0.9rem;
    color: #9d9d9d;
  }
`;
