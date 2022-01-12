import React from "react";
import {
  StyledContainer,
  StyledNavArrow,
  StyledArrowBackIcon,
  StyledHelpHeader,
  StyledHelpContent,
  StyledCustomDiv,
  StyledHelpLinksContainer,
} from "./Help.style.js";
function Help(props) {
  return (
    <StyledContainer toggle={props.toggle} width="28rem">
      <StyledHelpHeader>
        <div className="navArrow">
          <StyledNavArrow display={props.toggle}>
            <div className="">
              <StyledArrowBackIcon onClick={props.clickAction.profileToggle} />
            </div>
            <p>Help</p>
          </StyledNavArrow>
        </div>
      </StyledHelpHeader>
      <StyledHelpContent toggle={props.toggle} width="28rem">
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

export default Help;
