import styled from "styled-components";
import SpeedDial from "@mui/material/SpeedDial";
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";
import NotificationsOffIcon from "@mui/icons-material/NotificationsOff";
import Box from "@mui/material/Box";
import MenuList from "@mui/material/MenuList";
import Image from "../img/bgDefault2.png";
import {
  Menu,
  Item,
  Separator,
  Submenu,
  MenuProvider,
  useContextMenu,
} from "react-contexify";
export const StyledSpeedDial = styled(SpeedDial)`
  .MuiFab-root {
    box-shadow: none;
    height: 50px !important;
    width: 50px !important;
    color: white;
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
  width: 60%;
  height: 2rem;
  border-radius: 18px;
  background-color: #fff;
  border: none;
  ${"" /* position: relative; */}
  ${"" /* padding-right: 4px; */}
    &:focus {
    outline: none;
  }
`;
export const StyledSearchIcon = styled(SearchIcon)`
  ${"" /* color: #fff; */}
  position: absolute;
  left: 110px;
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

export const StyledBox = styled(Box)`
  & {
    background-color: red;
  }
`;
export const StyledMessageSpace = styled.div`
  width: 100%;
  height: calc(100vh - (3.6rem + 3.875rem));
  ${"" /* background-color: pink; */}
  background-image: url(${Image});
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

export const StyledOpenChat = styled.div`
  width: 100%;
  height: 100vh;
  margin-right: ${(props) => (props.margin ? "23rem" : "0rem")};
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
