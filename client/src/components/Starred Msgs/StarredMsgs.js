import React from "react";
import {
  StyledContainer,
  StyledNavArrow,
  StyledArrowBackIcon,
  StyledStarredMsgsHeader,
  StyledStarredMsgsContent,
} from "./StarredMsgs.style.js";
function StarredMsgs({ handleClickAction, toggle }) {
  return (
    <StyledContainer toggle={toggle} width="28rem">
      <StyledStarredMsgsHeader>
        <div className="navArrow">
          <StyledNavArrow display={toggle}>
            <div className="">
              <StyledArrowBackIcon onClick={handleClickAction} />
            </div>
            <p>Starred messages</p>
          </StyledNavArrow>
        </div>
      </StyledStarredMsgsHeader>
      <StyledStarredMsgsContent></StyledStarredMsgsContent>
    </StyledContainer>
  );
}

export default StarredMsgs;
