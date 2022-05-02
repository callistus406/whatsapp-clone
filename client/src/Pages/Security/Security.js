import React from "react";
import {
  StyledContainer,
  StyledNavArrow,
  StyledArrowBackIcon,
  StyledSecurityHeader,
  StyledSecurityContent,
  StyledCustomDiv,
  StyledSecurityLinksContainer,
} from "./style.js";
function Security({ handleClickAction, toggle }) {
  console.log(toggle);
  return (
    <StyledContainer toggle={toggle} width="28rem">
      <StyledSecurityHeader>
        <div className="navArrow">
          <StyledNavArrow display={toggle}>
            <div className="">
              <StyledArrowBackIcon onClick={() => handleClickAction(false)} />
            </div>
            <p>Security</p>
          </StyledNavArrow>
        </div>
      </StyledSecurityHeader>
      <StyledSecurityContent toggle={toggle} width="28rem">
        <div className="iconCont">
          <div className="icon"></div>
        </div>
        <StyledSecurityLinksContainer>
          <StyledCustomDiv>
            <p>Security Center</p>
          </StyledCustomDiv>
          <div className="border"></div>
          <StyledCustomDiv>
            <p>Contact us</p>
          </StyledCustomDiv>
          <div className="border"></div>

          <StyledCustomDiv>
            <p>Terms and Privacy Policy</p>
          </StyledCustomDiv>
        </StyledSecurityLinksContainer>
      </StyledSecurityContent>
    </StyledContainer>
  );
}
export default Security;
