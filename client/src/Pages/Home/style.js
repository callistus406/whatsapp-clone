import styled from 'styled-components';
import SpeedDial from '@mui/material/SpeedDial';
import SearchIcon from '@mui/icons-material/Search';

import NotificationsOffIcon from '@mui/icons-material/NotificationsOff';
import Box from '@mui/material/Box';
import MenuList from '@mui/material/MenuList';
import Image from '../../Assets/img/bgDefault2.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Menu from '@mui/material/Menu';
import { styled as muiStyled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';

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
    '' /* display: flex;
  align-items: center;
  flex-direction: column; */
  }
`;

export const StyledIcon = {
  smallIcon: {
    width: '13px',
    height: '13px',
    // marginLeft: "1px",
    marginTop: '5px',
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
  background-color: ${(props) => (props.toggle ? '#D5D5D5' : '#EDEDED')};
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
    ${'' /* margin-bottom: 0.5rem; */}
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
  fontSize: '0.8rem',
}));
export const StyledContextMenu4MsgSpace = muiStyled(Menu)(({ theme }) => ({
  fontSize: '1rem',
}));
export const StyledContextMenuItem4MsgSpace = muiStyled(MenuItem)(
  ({ theme }) => ({
    fontSize: '0.9rem',
    color: '#48565F',
    height: '2.5rem',
  })
);
export const StyledContextMenuItem = muiStyled(MenuItem)(({ theme }) => ({
  fontSize: '0.9rem',
}));

export const StyledBox = styled(Box)`
  & {
    background-color: red;
  }
`;
export const StyledMessageSpace = styled.div`
  width: 100%;
  height: calc(100vh - (3.6rem + 3.875rem));
  position: relative;
  background-image: url(${Image});
  ${'' /* z-index:-1; */}
  ${'' /* .......................... */}
`;

export const StyledMessageCont = styled.div`
  width: 100%;
  height: calc(100vh - (3.6rem + 3.875rem));
  ${'' /* position: absolute; */}
  border: 1px solid blue;
  display: flex;
  flex-direction: column;

  z-index: 1; /* Stay on top */

  overflow-x: hidden;

  &::-webkit-scrollbar-track {
    ${'' /* -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */}
    ${'' /* border-radius: 10px; */}
    background-color: #eae6df transparent transparent transparentt;
  }

  &::-webkit-scrollbar {
    width: 5px;
    background-color: #eae6df;
  }

  &::-webkit-scrollbar-thumb {
    height: 10px;

    border-radius: 10px;
    ${'' /* -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */}
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
    ${'' /* border: 1px solid blue; */}
  }
  .arrowCont {
    border: 1px solid blue;
    position: relative;
    .keyBoardArrow {
      ${'' /* position: absolute; */}
    }
  }
`;

export const StyledKeyBoardArrow = styled.span`
  display: ${(props) => (props.hide ? 'flex' : 'none')};
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
  border-bottom: ${(props) => (props.border ? ' 1px solid #363a3c' : 'none')};
`;
export const StyledMsgNumber = styled.span`
  font-size: 0.8rem;
  color: #acafb1;
  margin-left: 0.5rem;
  border-bottom: ${(props) => (props.border ? ' 1px solid #363a3c' : 'none')};
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

export const StyledSearchBarContainer = styled.div`
  height: 3rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 0 0.5rem;
  .filterIconCont {
    margin-left: auto;
    ${'' /* margin-right: 0.3rem; */}
    width: 30px;
    height: 30px;
    border-radius: 50%;
    ${'' /* border: 1px solid blue; */}
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    ${
      '' /* &:hover {
      background: #00a884;
    } */
    }
  }
  .inputSearch {
    width: 24.5rem;
    height: 2.3rem;
    border: none;
    background-color: #f0f2f5;
    border-radius: 0.5rem;
    font-size: 0.95rem;
    color: #737373;
    padding-left: 3.5rem;
    padding-right: 1rem;
    ::placeholder {
      color: #72828b;
      font-size: 0.9rem;
    }
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
  margin-right: ${(props) => (props.toggle ? '23rem' : '0rem')};
  ${'' /* border: 1px solid blue; */}
  transition: 0.2s;
`;
export const StyledContactsCol = styled.div`
  ${'' /* border: 1px solid blue; */}
  margin: 4px, 4px;
  /* padding: 4px; */
  /* background-color: green; */
  min-width: ${(props) => (props.toggle ? props.width : '28rem')};
  ${'' /* height: calc(100vh - (3.7rem + 5.8rem + 3rem + 71px)); */}
  height:auto;
  overflow-x: hidden;
  overflow-y: auto;
  text-align: justify;
  transition: 0.2s;
`;

// message box

export const StyledFab = styled.div`
  width: 40px;
  height: 40px;
  z-index: 1000;
  border-radius: 50%;
  ${'' /* border: 1px solid blue; */}
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

// message box

export const StyledOpenChatHead = styled.div`
  background: #ededed;
  width: 100%;
  height: 3.6rem;
  display: flex;
  padding-left: 1rem;
  cursor: pointer;

  align-items: center;

  .imageCont {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    .image {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: aliceblue;
    }
  }
  .icons {
    width: 7rem;
    height: 3.5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .searchIcon {
      width: 30px;
      height: 30px;
      border-radius: 50%;

      display: flex;
      justify-content: center;
      align-items: center;
    }
    .optionIcon {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      /* border: 1px solid blue; */
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const StyledChatHeadInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 3.5rem;
  .title {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    height: 3rem;
    margin-left: 1rem;
    div {
      font-size: 0.8rem;
    }
  }
`;

// msg bar

export const StyledMsgBar = styled.div`
  width: 100%;
  height: 3.875rem;
  background-color: #f0f0f0;
  display: flex;
  justify-content: space-around;
  .emojiIcons {
    width: 5.7rem;
    height: 3rem;
    display: flex;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .emojiCont {
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .emoji {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .attachmentCont {
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }
    .attachment {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .recorderCont {
      width: 50px;
      height: 50px;

      display: flex;
      justify-content: center;
      align-items: center;
    }
    .recorder {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const StyledMsgInputCont = styled.div`
  width: 80%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  .msgInput {
    width: 100%;
    height: 2.625rem;
    border-radius: 0.7rem;
    font-size: 1rem;
    color: #626262;
    background: #ffffff;
    border: none;
    padding-left: 1rem;
    &:focus {
      outline: none;
    }
    &:placeholder {
      color: #9b9b9b;
      font-size: 0.9rem;
    }
  }
`;

// chat col

export const StyledChatsCol = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f8f9fa;
  .chatColDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 74%;
    .textContent {
      display: flex;
      flex-direction: column;
      text-align: center;
      height: 7rem;
      justify-content: space-around;
      .connectImage {
        width: 240px;
        height: 240px;
      }
      span {
        font-size: 32px;
        color: #525252;
      }
      p {
        font-size: 15px;
        color: #a0a1a2;
      }
    }
    .imageCont {
      width: 250px;
      height: 250px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
`;
