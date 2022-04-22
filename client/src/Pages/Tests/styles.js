import styled from "styled-components";
import Fab from "@mui/material/Fab";
import Checkbox from "@mui/material/Checkbox";
import DialogContent from "@mui/material/DialogContent";
import SearchIcon from "@mui/icons-material/Search";

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
  .inputSearch {
    margin-top: 0.4rem;
    ${"" /* margin-top: 1rem; */}

    width: 27.25rem;
    height: 2.1rem;
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
export const StyledDialogContent = styled(DialogContent)`
  && {
    padding: 0;
    ${"" /* margin-top: 0.9rem; */}
  }
`;
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
