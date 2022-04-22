import styled from "styled-components";
import EditIcon from "@mui/icons-material/Edit";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";

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

export const DisplayPic = styled.div`
  height: 202px;
  width: 202px;
  border-radius: 50%;
  border: 1px solid blue;
`;
export const StyleProfilePicBox = styled.div`
  height: 16rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CustomDiv = styled.div`
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
export const StyledEditIcon = styled(EditIcon)`
  color: #919191;
`;
export const StyledArrowBackIcon = styled(ArrowBackIcon)`
  color: #fff;
  cursor: pointer;
`;

export const StyledSearchIcon = styled(SearchIcon)`
  & {
    color: #666c6f;
  }
`;

export const StyledSearchBarContainer = styled.div`
  height: 3rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  .inputSearch {
    width: 26rem;
    height: 2.1rem;
    border: none;
    border-radius: 0.3rem;
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
    margin-left: -22rem;
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

export const StyledNewHeader = styled.div`
  height: 6.6rem;
  width: 100%;
  background: #008069;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  .navArrow {
    width: 25rem;
    height: 3rem;
    /* border: 1px solid blue; */
    display: flex;
    align-items: center;
    color: #fff;
    p {
      margin-left: 2rem;
      font-size: 1.2rem;
    }
  }
`;

export const StyledContacts = styled.div`
  height: 5rem;
  width: 100%;
  border-bottom: 1px solid rgb(240, 240, 240);
  display: flex;
  align-items: center;
  margin-left: 1rem;
  &:hover {
    background: #f8f9fa;
    cursor: pointer;
  }
  h4 {
    font-weight: 540;
    margin-left: 1rem;
  }

  .addGrpIcon {
    width: 47px;
    height: 47px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #009688;
    color: #fff;
  }
`;
