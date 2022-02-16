import React from "react";
import { connect } from "react-redux";
import { starredMsgsToggle } from "../../Redux-State/action creators/pageActions.js";
import {
  StyledContainer,
  StyledNavArrow,
  StyledArrowBackIcon,
  StyledStarredMsgsHeader,
  StyledStarredMsgsContent,
} from "./StarredMsgs.style.js";
function StarredMsgs(props) {
  return (
    <StyledContainer toggle={props.displayStarredMgsLayout} width="28rem">
      <StyledStarredMsgsHeader>
        <div className="navArrow">
          <StyledNavArrow display={props.displayStarredMgsLayout}>
            <div className="">
              <StyledArrowBackIcon onClick={props.starredMsgsToggle} />
            </div>
            <p>Starred messages</p>
          </StyledNavArrow>
        </div>
      </StyledStarredMsgsHeader>
      <StyledStarredMsgsContent></StyledStarredMsgsContent>
    </StyledContainer>
  );
}

function mapStateToProps(state) {
  return {
    displayStarredMgsLayout: state.starredMsgs.displayStarredMsgs,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    starredMsgsToggle: () => dispatch(starredMsgsToggle()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StarredMsgs);