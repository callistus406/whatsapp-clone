import styled from "styled-components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";

export const StyledContainer = styled.div`
  height: 100%; /* 100% Full-height */
  width: ${(props) => (props.toggle ? "23rem" : "0rem")};
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;

  overflow-x: hidden;
  transition: 0.1s;
`;

export const StyledNavArrow = styled.div`
  width: 22rem;
  height: 3rem;
  display: flex;
  align-items: center;

  display: "flex";
  .cancel {
    cursor: pointer;
  }
  p {
    color: #0c0c0c;
    margin-left: 2rem;
    font-size: 1.1rem;
  }
`;

export const StyledMsgSearchHeader = styled.div`
  height: 3.625rem;
  background: #ededed;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
export const StyledMsgSearchContent = styled.div`
  height: calc(100vh - (3.625rem + 3rem));
  width: ${(props) => (props.toggle ? props.width : 0)};
  display: ${(props) => (props.toggle ? "block" : "none")};
  margin: 4px, 4px;
  transition: 0.1s;
  min-width: 28rem;
  overflow-x: hidden;
  overflow-y: auto;
  border: 1px solid blue;
  ${"" /* background: red; */}

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
  background-color: #f7f7f7;
  .inputSearch {
    width: 21.5rem;
    height: 2.1rem;
    border: none;
    border-radius: 0.4rem;
    font-size: 0.95rem;
    color: #737373;
    padding-left: 2.5rem;
    padding-right: 1rem;
    ::placeholder {
      color: #77868f;
    }
    &:focus {
      outline: none;
    }
  }
  .searchIconCont {
    position: absolute;
    margin-left: -19rem;
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
    margin-left: 20rem;
    display: flex;
    align-items: center;
    justify-content: center;
    .MuiSvgIcon-root {
      color: #666c6f;

      width: 1rem;
      height: 1rem;
    }
  }
`;
