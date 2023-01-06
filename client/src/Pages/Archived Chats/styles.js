import styled from 'styled-components';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const StyledContainer = styled.div`
  height: 100%; /* 100% Full-height */
  width: ${(props) =>
    props.toggle ? props.width : 0}; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 2; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #fff;
  overflow-x: hidden; /* Disable horizontal scroll */
  transition: 0.5s;
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

export const StyledArrowBackIcon = styled(ArrowBackIcon)`
  color: #fff;
  cursor: pointer;
`;
export const StyledNavArrow = styled.div`
  width: 22rem;
  height: 3rem;
  ${'' /* border: 1px solid blue; */}
  display: flex;
  align-items: center;
  ${'' /* justify-content: center; */}
  color: #fff;
  display: ${(props) => (props.display ? 'flex' : 'none')};

  p {
    margin-left: 2rem;
    font-size: 1.1rem;
  }
`;

export const StyledArchiveHeader = styled.div`
  height: 6.5rem;
  /* border: 1px solid blue; */
  /* position: absolute; */
  background: #00bfa5;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
export const StyledArchiveContent = styled.div`
  height: calc(100vh - 6.5rem);
  ${'' /* width:${(props) => (props.toggle ? props.width : 0)} */}
  display: ${(props) => (props.toggle ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  border: 1px solid blue;

  .archiveIcon {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    background-color: #e6e6e6;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
