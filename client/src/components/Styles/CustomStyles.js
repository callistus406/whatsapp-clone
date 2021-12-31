import styled from "styled-components";

export const CenterDivContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => (props.height ? props.height : "2rem")};
  width: ${(props) => (props.width ? props.width : "auto")};
`;
