import React from "react";
import { connect } from "react-redux";
import { toggleStarredGrpMsgs } from "../../Redux-State/action creators/pageActions.js";
import {
  StyledContainer,
  StyledNavArrow,
  StyledArrowBackIcon,
  StyledStarredMsgsHeader,
  StyledStarredMsgsContent,
} from "./style.js";
function StarredMsgs(props) {
  console.log(props);
  return (
    <StyledContainer toggle={props.displayStarredGrpMsgs} width="28rem">
      <StyledStarredMsgsHeader>
        <div className="navArrow">
          <StyledNavArrow display={props.displayStarredGrpMsgs}>
            <div className="">
              <StyledArrowBackIcon onClick={props.toggleStarredGrpMsgs} />
            </div>
            <p>Starred messages</p>
          </StyledNavArrow>
        </div>
      </StyledStarredMsgsHeader>
      <StyledStarredMsgsContent>
        {/* this will be a conditional render */}
        <p className="placeholder">No starred messages</p>
      </StyledStarredMsgsContent>
    </StyledContainer>
  );
}

function mapStateToProps(state) {
  return {
    displayStarredGrpMsgs: state.starredGrpMsg.displayStarredGrpMsgs,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    toggleStarredGrpMsgs: () => dispatch(toggleStarredGrpMsgs()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StarredMsgs);
