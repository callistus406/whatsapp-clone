import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 70%;
  height: 37rem;

  background-color: #f7f8fa;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  margin: auto;
  .columnCont {
    display: flex;
    justify-content: space-between;
    .istContainer {
      width: 49%;
      height: calc(37rem - 3rem);

      ${"" /* border: 1px solid blue; */}
    }
    .secondContainer {
      width: 49%;
      height: calc(37rem - 3rem);
      ${"" /* border: 1px solid blue; */}
    }
  }
`;

export const StyledHeader = styled.div`
  width: 100%;
  height: 3rem;
  margin-left: 20px;
  color: #3b4a54;
  font-size: 1.2rem;
`;
export const StyledButton = styled.button`
  padding: 0 0.5rem;
  font-size: 1rem;
`;
export const StyledShortcuts = styled.div`
  ${"" /* display: flex; */}
  .shortcuts {
    width: 100%;

    .text {
      display: flex;
      ${"" /* border: 1px solid yellow; */}
      justify-content: space-between;
      align-items: center;
      margin-bottom: 25px;

      p {
        color: #404e58;
        margin-left: 1rem;
      }
      .btnContainer {
        display: flex;
        padding-right: 0.5em;

        ${"" /* min-width: 90px; */}
        .button {
          padding: 5px 8px;
          margin-left: 7px;
          font-size: 0.8rem;
          border-radius: 3px;
          outline: none;
          border: 1px solid #b8bdc3;
          background-color: #e0e3e6;
        }
      }
    }
  }
`;
export const StyledShortcutsCol2 = styled.div`
  ${"" /* display: flex; */}
  .shortcuts {
    width: 100%;

    .text {
      display: flex;
      ${"" /* border: 1px solid yellow; */}
      justify-content: space-between;
      align-items: center;
      margin-bottom: 25px;
      p {
        color: #404e58;
        ${"" /* border: 1px solid blue; */};
      }
      .btnContainer {
        display: flex;
        padding-right: 1em;

        ${"" /* min-width: 90px; */}
        .button {
          padding: 5px 8px;
          margin-left: 7px;
          font-size: 0.8rem;
          border-radius: 3px;
          outline: none;
          border: 1px solid #b8bdc3;
          background-color: #e0e3e6;
        }
      }
    }
  }
`;

export const StyledMuiButton = styled.div`
  && {
    width: 100%;

    display: flex;
    justify-content: flex-end;
    .muiButton {
      background-color: #008069;
      margin-top: 15px;
      margin-right: 1rem;
    }
  }
`;
