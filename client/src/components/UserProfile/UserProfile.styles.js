import styled from "styled-components";
import EditIcon from "@mui/icons-material/Edit";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
export const StyledContainer = styled.div`
  height: 100%; /* 100% Full-height */
  width: ${(props) =>
    props.toggle ? props.width : 0}; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #fff;
  overflow-x: hidden;
  transition: 0.5s;

  .content {
    width: 50%;
    height: 5rem;
    ${"" /* border: 1px solid blue; */}
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 2rem;
  }
  .status {
    width: 80%;
    height: 8rem;
    /* border: 1px solid blue; */
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .editIcon {
    display: flex;
    align-items: flex-end;
    margin-left: auto;
    margin-bottom: 1rem;
    margin-right: 1rem;
  }
`;

export const StyledProfileHeader = styled.div`
  height: 6.6rem;
  width: 100%;
  background: #00bfa5;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
export const StyledNavArrow = styled.div`
  width: 80%;
  height: 3rem;
  ${"" /* border: 1px solid blue; */}
  display: flex;
  align-items: center;
  color: #fff;
  p {
    margin-left: 2rem;
  }
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
