import React from "react";
import {
  StyledContainer,
  StyledNavArrow,
  StyledArrowBackIcon,
  StyledHelpHeader,
  StyledHelpContent,
  StyledCustomDiv,
  StyledHelpLinksContainer,
} from "./style.js";
export function Help({ handleClickAction, toggle }) {
  return (
    <StyledContainer toggle={toggle} width="28rem">
      <StyledHelpHeader>
        <div className="navArrow">
          <StyledNavArrow display={toggle}>
            <div className="">
              <StyledArrowBackIcon onClick={handleClickAction} />
            </div>
            <p>Help</p>
          </StyledNavArrow>
        </div>
      </StyledHelpHeader>
      <StyledHelpContent toggle={toggle} width="28rem">
        <div className="iconCont">
          <div className="icon"></div>
        </div>
        <StyledHelpLinksContainer>
          <StyledCustomDiv>
            <p>Help Center</p>
          </StyledCustomDiv>
          <div className="border"></div>
          <StyledCustomDiv>
            <p>Contact us</p>
          </StyledCustomDiv>
          <div className="border"></div>

          <StyledCustomDiv>
            <p>Terms and Privacy Policy</p>
          </StyledCustomDiv>
        </StyledHelpLinksContainer>
      </StyledHelpContent>
    </StyledContainer>
  );
}
