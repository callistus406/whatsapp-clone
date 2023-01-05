import styled from 'styled-components';
import MenuList from '@mui/material/MenuList';
import { styled as muiStyled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Badge from '@mui/material/Badge';
export const StyledDivider = styled.div`
  border: 0.2px solid #f5f5f5;
  margin-left: auto;

  &:hover {
    width: 0;
  }
`;
export const StyledUserChatCont = styled.div`
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
export const StyledUserChatLayout = styled.div``;
// export const StyledBadge = styled.div`
//   background: #25d366;
//   color: #fff;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 2px 2px;

//   border-radius: 50%;
//   span {
//     font-size: 0.7rem;
//   }
// `;

export const StyledBadge = muiStyled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -2,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export const StyledUserChatText = styled.div`
  width: 100%;
  height: 3rem;
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 1rem;

  .userNameContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* padding-right: 1rem; */
    .username {
      font-size: 1.2rem;
    }
    .msgTime {
      font-size: 0.8rem;
      color: #4aa955;
      font-weight: 800;
    }
  }
  .msgPreview {
    color: #654f73;
  }
  .spanHeading {
    font-size: 1.1rem;
  }
  .userMsgContainer {
    display: flex;
    .msgPreview {
      margin-top: -0.7rem;
      font-size: 0.95rem;
    }
    position: relative;
    .msgBadge {
      position: absolute;
      right: 0rem;
      top: -1rem;

      border: 1px solid blue;
      display: flex;

      div {
        /* position: absolute; */

        /* margin-left: rem; */
      }
    }
  }
  .chatName {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .spansTime {
      font-size: 1rem;
      margin-right: 1.5rem;
      font-size: 0.9rem;
    }
  }
`;

export const StyledChats = styled.div`
  width: 100%;
  height: 3rem;
  border: 1px solid blue;
`;
export const StyledCircle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid blue;
  margin-left: 1rem;
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
    fontSize: '1rem',
  })
);
export const StyledContextMenuItem = muiStyled(MenuItem)(({ theme }) => ({
  fontSize: '0.9rem',
  height: '2.35rem',
}));
