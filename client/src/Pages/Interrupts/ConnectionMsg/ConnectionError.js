import React from "react";
import { StyledContainer } from "./styles";
function ConnectionError() {
  return (
    <StyledContainer>
      <div className="dialog">
        <h3>Computer not connected</h3>
        <div className="msg">
          <p>Make sure your computer has an active Internet connection.</p>
        </div>
      </div>
    </StyledContainer>
  );
}

export default ConnectionError;
