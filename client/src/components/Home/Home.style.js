import styled from "styled-components";
import SpeedDial from "@mui/material/SpeedDial";
import SearchIcon from "@mui/icons-material/Search";

import NotificationsOffIcon from "@mui/icons-material/NotificationsOff";
import Box from "@mui/material/Box";
import MenuList from "@mui/material/MenuList";
import Image from "../img/bgDefault2.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Menu from "@mui/material/Menu";
import { styled as muiStyled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";

import {
  MenuContexify,
  Item,
  Separator,
  Submenu,
  MenuProvider,
  useContextMenu,
} from "react-contexify";
export const StyledSpeedDial = styled(SpeedDial)`
  && {
    .MuiFab-root {
      box-shadow: none;
      height: 45px !important;
      width: 45px !important;
      color: white;
    }
  }
`;
export const StyledSpan = styled.span`
  position: absolute;

  color: #404b4f;
  ${
    "" /* display: flex;
  align-items: center;
  flex-direction: column; */
  }
`;

export const StyledIcon = {
  smallIcon: {
    width: "13px",
    height: "13px",
    // marginLeft: "1px",
    marginTop: "5px",
  },
};

export const StyledInputSearch = styled.input`
  width: 90%;
  height: 2.1rem;
  border: none;
  border-radius: 7rem;
  font-size: 0.95rem;
  color: #737373;
  padding-left: 3.5rem;
  padding-right: 1rem;
  &:focus {
    outline: none;
  }
`;
export const StyledSearchIcon = styled(SearchIcon)`
  && {
    position: absolute;
    margin-left: -14%;
    color: #5a6064;
  }
`;

export const StyledNotificationIcon = styled(NotificationsOffIcon)`
  &:hover {
    cursor: pointer;
  }
`;
export const StyledActionIcons = styled.div`
  background-color: ${(props) => (props.toggle ? "#D5D5D5" : "#EDEDED")};
  cursor: pointer;
  height: 40px;
  width: 40px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
// export const styledProfileContainer = styled.div``;
export const StyledMenuItem = styled(MenuItem)`
  && {
    width: 100%;
    font-size: 0.9rem;
    ${"" /* margin-bottom: 0.5rem; */}
    padding-top: 0.7rem;
    padding-bottom: 0.7rem;
  }
`;

export const StyledMenuList = styled(MenuList)`
  & {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
  }
`;

export const StyledContextMenu = muiStyled(Menu)(({ theme }) => ({
  fontSize: "0.8rem",
}));
export const StyledContextMenu4MsgSpace = muiStyled(Menu)(({ theme }) => ({
  fontSize: "1rem",
}));
export const StyledContextMenuItem4MsgSpace = muiStyled(MenuItem)(
  ({ theme }) => ({
    fontSize: "1rem",
  })
);
export const StyledContextMenuItem = muiStyled(MenuItem)(({ theme }) => ({
  fontSize: "0.9rem",
}));

export const StyledBox = styled(Box)`
  & {
    background-color: red;
  }
`;
export const StyledMessageSpace = styled.div`
  width: 100%;
  height: calc(100vh - (3.6rem + 3.875rem));

  background-image: url(${Image});
z-index:-1;
  ${"" /* .......................... */}

  }
`;

export const StyledMessageCont = styled.div`
  width: 100%;
  height: calc(100vh - (3.6rem + 3.875rem));
  position: relative;

  border: 1px solid blue;
  display: flex;
  flex-direction: column;

  z-index: 1; /* Stay on top */

  overflow-x: hidden;

  &::-webkit-scrollbar-track {
    ${"" /* -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */}
    ${"" /* border-radius: 10px; */}
    background-color: #eae6df transparent transparent transparentt;
  }

  &::-webkit-scrollbar {
    width: 5px;
    background-color: #eae6df;
  }

  &::-webkit-scrollbar-thumb {
    height: 10px;

    border-radius: 10px;
    ${"" /* -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */}
    background-color: #BDBCB8;
  }
`;

export const StyledMsgInfo = styled.div`
  margin-left: 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 0.5rem;
  div {
    width: 40%;
    ${"" /* border: 1px solid blue; */}
  }
  .arrowCont {
    border: 1px solid blue;
    position: relative;
    .keyBoardArrow {
      ${"" /* position: absolute; */}
    }
  }
`;

export const StyledKeyBoardArrow = styled.span`
  display: ${(props) => (props.hide ? "flex" : "none")};
`;
export const StyledMsgInfoIcon = styled(KeyboardArrowDownIcon)`
  && {
    position: absolute;
    margin-left: -1.2rem;
    margin-top: -0.6rem;
    color: #a4b0b8;
  }
`;
export const StyledMsgName = styled.span`
  font-size: 0.8rem;
  color: #acafb1;
  margin-left: 0.5rem;
  border-bottom: ${(props) => (props.border ? " 1px solid #363a3c" : "none")};
`;
export const StyledMsgNumber = styled.span`
  font-size: 0.8rem;
  color: #acafb1;
  margin-left: 0.5rem;
  border-bottom: ${(props) => (props.border ? " 1px solid #363a3c" : "none")};
`;
export const StyledOptions = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid blue;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledItem = styled(Item)`
  & {
    .react-contexify__item__content {
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      font-size: 0.9rem;
    }

    .react-contexify {
      min-width: 20rem;
    }
  }
`;
export const StyledSearchBarContainer = styled.div`
  height: 3rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7f7f7;
  .inputSearch {
    width: 25rem;
    height: 2.1rem;
    border: none;
    border-radius: 7rem;
    font-size: 0.95rem;
    color: #737373;
    padding-left: 3.5rem;
    padding-right: 1rem;
    &:focus {
      outline: none;
    }
  }
  .searchIconCont {
    position: absolute;
    margin-left: -21rem;
    display: flex;
    align-items: center;
    justify-content: center;
    .MuiSvgIcon-root {
      width: 1.2rem;
      height: 1.2rem;
      /* display: none; */
    }
  }
  .clearIconCont {
    position: absolute;
    margin-left: 21rem;
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

export const StyledOpenChat = styled.div`
  width: 100%;
  height: 100vh;
  margin-right: ${(props) => (props.toggle ? "23rem" : "0rem")};
  ${"" /* border: 1px solid blue; */}
  transition: 0.2s;
`;
export const StyledContactsCol = styled.div`
  ${"" /* border: 1px solid blue; */}
  margin: 4px, 4px;
  /* padding: 4px; */
  /* background-color: green; */
  min-width: ${(props) => (props.toggle ? props.width : "28rem")};
  height: 65.5vh;
  overflow-x: hidden;
  overflow-y: auto;
  text-align: justify;
  transition: 0.2s;
`;

// message box

export const StyledFab = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  ${"" /* border: 1px solid blue; */}
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #888d90;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
`;
