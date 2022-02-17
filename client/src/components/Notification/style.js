import styled from "styled-components";
import FormHelperText from "@mui/material/FormHelperText";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";
import FormControlLabel from "@mui/material/FormControlLabel";

export const StyledContainer = styled.div`
  height: 100%; /* 100% Full-height */
  width: ${(props) =>
    props.toggle ? props.width : 0}; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1;
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #fff;

  overflow-x: hidden; /* Disable horizontal scroll */
  transition: 0.5s;
`;

// height: 100%;
//    width: ${(props) =>
//     props.toggle ? props.width : 0};
//   position: fixed;
//   z-index: 1;
//   top: 0;
//   left: 0;
//   background-color: #fff;

//   transition: 0.1s;
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
export const StyledNavArrow = styled.div`
  width: 22rem;
  height: 3rem;
  ${"" /* border: 1px solid blue; */}
  display: flex;
  align-items: center;
  ${"" /* justify-content: center; */}
  color: #fff;
  display: ${(props) => (props.display ? "flex" : "none")};

  p {
    margin-left: 2rem;
    font-size: 1.2rem;
  }
`;

export const StyledFormHelperText = styled(FormHelperText)`
  && {
    font-size: 0.8rem;
    color: #858585;
    margin-left: 2rem;
  }
`;

export function customStyles() {
  return {
    checkbox: {
      color: "#009688",
    },
    text: {
      color: "#EDEDED",
    },
  };
}
export const StyledFormControlLabel = styled(FormControlLabel)`
  && {
    .MuiFormControlLabel-label {
      font-size: 0.9rem;
    }
  }
`;

export const StyledNotificationHeader = styled.div`
  height: 6.5rem;
  /* border: 1px solid blue; */
  /* position: absolute; */
  background: #00bfa5;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const StyledNotificationContent = styled.div`
  width: 100%;
  background-color: #ededed;
  height: calc(100vh - 6.5rem);
  padding-left: 2rem;
  div {
    margin-bottom: 1rem;
    height: 3rem;
    /* border: 1px solid blue; */
  }
`;

// export const StyledNotificationContent = styled.div`
//   width: 100%;
//   background-color: #ededed;
//   height: calc;
//   padding-left: 2rem;
// `;

// export const StyledNotificationContent = styled.div`
//   width: 100%;
//   background-color: #ededed;
//   height: calc;
//   padding-left: 2rem;
// `;
