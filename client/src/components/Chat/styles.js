import styled from 'styled-components';
import { styled as muiStyled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import { blue } from '@mui/material/colors';

export const StyledChatContainer = styled.div`
  height: auto;
  width: 100%;
  ${'' /* border: 1px solid blue; */}

  margin: auto;
  .title {
    ${'' /* margin-left: 1rem; */}
    margin: 1rem 1rem;
    color: #ab8a81;
    font-size: 0.9rem;
    ${'' /* font-weight: 100; */}
  }
`;

export const StyledChatLayoutCont = styled.div`
  width: 100%;
  ${'' /* height: 4.5rem; */}
  ${'' /* border: 1px solid yellow; */}
  display: flex;
  flex-direction: column;
  height: 4rem;
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
  /* border-bottom: 1px solid #f2f2f2; */
  /* border-bottom-height: 70%; */
  cursor: pointer;
  ${'' /* margin-bottom: 1rem; */}
  .borderBottom {
    /* height: 3px; */
    border-bottom: 1px solid #e3e3e3;

    width: 82%;
    margin-left: auto;
  }
  .chatHead {
    margin-right: 1rem;
  }
  .members {
    color: #cca788;
  }

  &:hover {
    background-color: #f5f6f6;
  }
`;
export const StyledUserChatCont = styled.div`
  width: 100%;
  display: flex;
  .caret {
    margin-right: 2rem;
    color: #667781;
    ${'' /* display: ${(props) => (props.hide ? 'none' : 'block')}; */}
  }
`;
export const StyledCaret = styled.div`
  color: #6e7e88;
  display: ${(props) => (props.hide ? 'none' : 'block')};
`;

export const StyledCircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  ${'' /* border: 1px solid blue; */}
  margin-left: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #dfe5e7;
`;

export const StyledUserChatText = styled.div`
  width: 100%;
  ${'' /* height: 2px; */}
  ${'' /* border: 1px solid red; */}
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h3 {
    color: #2f1e21;
    font-weight: 400;
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
  paddingTop: '0.5rem ',
  paddingBottom: '0.5rem ',
}));

export const StyledBox = styled(Box)`
  & {
    background-color: red;
  }
`;
