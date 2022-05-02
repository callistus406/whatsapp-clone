import styled from "styled-components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const StyledContainer = styled.div`
  height: 100%; /* 100% Full-height */
  width: ${(props) =>
    props.toggle ? props.width : 0}; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #fff;

  transition: 0.1s;
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
    font-size: 1.1rem;
  }
`;

export const StyledSecurityHeader = styled.div`
  height: 6.5rem;
  /* border: 1px solid blue; */
  /* position: absolute; */
  background: #00bfa5;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
export const StyledSecurityContent = styled.div`
  height: calc(100vh - 6.5rem);
  width: ${(props) => (props.toggle ? props.width : 0)}
  background: #ededed;
  display: ${(props) => (props.toggle ? "block" : "none")};
  margin: 4px, 4px;
  transition:0.1s;
  min-width: 28rem;
  overflow-x: hidden;
  overflow-y: auto;

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
  .iconCont {
    width: 100%;
    height: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icon {
    width: 200px;
    height: 200px;
    border: 1px solid blue;
    border-radius: 50%;
    align-self: center;
  }
`;

export const StyledCustomDiv = styled.div`
  height: 3.75rem;
  width: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  ${"" /* margin-bottom: 1rem; */}
  padding-left: 1.5rem;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
  p {
    font-size: 1rem;
    font-weight: 500;
  }
`;
export const StyledSecurityLinksContainer = styled.div`
  ${"" /* calc 100vh-6.5rem - 200px */}
  height: calc((100vh - 10rem) - 200px);

  background-color: #fff;

  .border {
    ${"" /* height: 1px; */}
    border: 1px solid #F2F2F2;
    width: 94.5%;
    margin-left: auto;
  }
`;
