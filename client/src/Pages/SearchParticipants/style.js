import styled from "styled-components";
import Fab from "@mui/material/Fab";
import Checkbox from "@mui/material/Checkbox";
import DialogContent from "@mui/material/DialogContent";
import SearchIcon from "@mui/icons-material/Search";
import { styled as muiStyled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

import DialogTitle from "@mui/material/DialogTitle";
export const StyledFab = styled(Fab)`
  && {
    position: absolute;
    margin-left: 23rem;
    margin-top: -2rem;
    background: #00a884;
    color: #fff;
  }
`;
export const StyledCheckbox = styled(Checkbox)`
  && {
    color: #008069;
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
    margin-left: 0.6rem;

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

export const StyledBorderBottom = styled.div`
  /* height: 3px; */
  border-bottom: 1px solid #e3e3e3;

  width: 70%;
  margin-left: auto;
`;
export const StyledContactInfo = styled.div`
  width: 100%;
  height: 4rem;
  padding-left: 1rem;
  .nameText {
    height: 1.5rem;
    margin-bottom: 0.5rem;
    font-weight: 400;
    font-size: 1.1rem;
    margin-top: 0.5rem;
    color: #000;
  }
  .about {
    height: 1.5rem;
    ${"" /* border: 1px solid blue; */}
    font-size: 0.9rem;
    color: #9d9d9d;
  }
`;
export const StyledContactsTitle = styled(StyledContactContainer)`
  && {
    height: 5rem;
    margin-top: 0;
    span {
      font-size: 1rem
      font-weight:400;
      color: #2f9784;

    }
    &:hover{
     background:#fff; 
    }
  }
`;

export const StyledBottom = styled.div`
  height: ${(props) => (props.display ? "4rem" : "0rem")};
  background-color: rgb(0, 128, 105);
  width: 100%;
  display: flex;
  transition: 0.3s;
  .names {
    ${"" /* display: flex; */}
    display:flex;
    color: #fff;
    align-self: center;
    font-size: 1.1rem;
    margin-left: 1rem;
  }
`;
// export const StyledBootstrapDialog = styled(BootstrapDialog)`
//   && {
//     ${"" /* width: 25rem; */}
//   }
// `;

export const StyledSearchBarContainer = styled.div`
  height: 3rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 0 0.8rem;
  margin-bottom: 0.5rem;
  .inputSearch {
    margin-top: 0.4rem;
    ${"" /* margin-top: 1rem; */}

    width: 27.25rem;
    height: 2.33rem;
    border: none;
    border-radius: 0.45rem;
    font-size: 0.95rem;
    color: #737373;
    padding-left: 3.5rem;
    padding-right: 1rem;
    background: #f0f2f5;
    &:focus {
      outline: none;
    }
  }
  .searchIconCont {
    position: absolute;
    margin-left: -24rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.45rem;
    .MuiSvgIcon-root {
      width: 1.2rem;
      height: 1.2rem;
      color: #54656f;
      /* display: none; */
    }
  }
  .clearIconCont {
    position: absolute;
    margin-left: 24.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    .MuiSvgIcon-root {
      color: #666c6f;

      width: 1.2rem;
      height: 1.2rem;
    }
  }
`;
export const StyledSearchIcon = styled(SearchIcon)`
  & {
    color: #666c6f;
  }
`;
export const StyledFloatingActionButtons = styled.div`
  && {
    display: ${(props) => (props.display ? "block" : "none")};
  }
`;
export const StyledDialogContent = muiStyled(DialogContent)(({ theme }) => ({
  padding: "0",
  "&::-webkit-scrollbar-track": {
    backgroundColor: "#ededed",
  },

  "&::-webkit-scrollbar": {
    width: "5px",
    backgroundColor: "#ededed",
  },

  " &::-webkit-scrollbar-thumb": {
    height: "10px",

    borderRadius: "10px",
    backgroundColor: " #bfbfbf",
  },
  border: "none",
}));

export function ArrowBack(props) {
  return (
    <div>
      <svg viewBox="0 0 24 24" width="24" height="24">
        <path
          fill="currentColor"
          d="M12 4l1.4 1.4L7.8 11H20v2H7.8l5.6 5.6L12 20l-8-8 8-8z"
        ></path>
      </svg>
    </div>
  );
}

//
export const StyledCircle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid blue;
  margin-left: 1rem;
`;
export const StyledMembersChatText = styled.div`
  width: 100%;
  height: 3rem;
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .spanHeading {
    font-size: 1rem;
  }

  .msgPreview {
    margin-top: -0.7rem;
    font-size: 0.95rem;
    color: #868686;
  }
  .chatName {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .role {
      font-size: 0.7rem;
      margin-right: 1.5rem;
      ${"" /* font-size: 0.9rem; */}

      display: flex;
      align-items: center;
      padding: 0 0.5rem;
      border-radius: 3px;
      color: #4aa26c;
      background-color: #e7fce3;
    }
  }
`;

export const StyledMembersChatCont = styled.div`
  width: 100%;
  height: 4.5rem;
  /* border: 1px solid blue; */
  display: flex;
  align-items: center;
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
  /* border-bottom: 1px solid #f2f2f2; */
  /* border-bottom-height: 70%; */
  cursor: pointer;

  .borderBottom {
    /* height: 3px; */
    border-bottom: 1px solid #e3e3e3;

    width: 82%;
    margin-left: auto;
  }
  .chatHead {
    margin-right: 1rem;
  }

  &:hover {
    background-color: #f5f5f5;
  }
`;

// Alphabetical header

export const StyledAlphabeticalHeader = styled.div`
  height: ${(props) => (props.space ? " 4rem" : "0")};
  ${"" /* border: 1px solid blue; */}
  ${"" /* padding-bottom: 0.5rem; */}
  width: 100%;
  display: flex;
  ${"" /* align-items: center; */}
  ${"" /* justify-content: space-between; */}
  padding-left: 2rem;
  ${"" /* flex-direction: column; */}
  .borderBottom {
    border-bottom: 1px solid #f5f6f6;
    width: 89%;
    margin-left: auto;
    ${"" /* height: 2rem; */}
  }
  .title {
    display: flex;
    align-items: center;
  }
`;

export const StyledButton = muiStyled(Button)(({ theme }) => ({
  backgroundColor: "#008069",
  minWidth: "4rem",
  color: "#fff",
  "&:hover": {
    background: "#017561",
  },
  marginRight: "1rem",
  marginBottom: "1rem",
}));
export const StyledDialogTitle = muiStyled(DialogTitle)(({ theme }) => ({
  backgroundColor: "#008069",
  color: "#F4FAF8",
  borderRadius: "none",
  display: "flex",
  alignItems: "center",
  fontSize: "1.1rem",
}));
export const StyledDialog = muiStyled(Dialog)(({ theme }) => ({
  backgroundColor: "rgba(255,255,255,0.9)",
  boxShadow: "none",
}));
export const StyledSpace = styled.div`
  ${"" /* height: 1rem; */}
  width: 23rem;
`;
