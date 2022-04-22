import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 70%;
  height: auto;
  border: 1px solid blue;

  .columnCont {
    display: flex;
    justify-content: space-between;
    .istContainer {
      width: 49%;
      height: 30rem;
      border: 1px solid blue;
    }
    .secondContainer {
      width: 49%;
      height: 30rem;
      border: 1px solid blue;
    }
  }
`;

export const StyledHeader = styled.div`
  width: 100%;
  height: 3rem;
  border: 1px solid black;
`;
export const StyledButton = styled.button`
  padding: 0 0.5rem;
  font-size: 1rem;
`;
export const StyledShortcuts = styled.div`
  display: flex;
`;
