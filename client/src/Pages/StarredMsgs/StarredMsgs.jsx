import React from 'react';
import { connect } from 'react-redux';
import { starredMsgsToggle } from '../../Redux-State/actionCreators/pageActions.js';
import {
  StyledContainer,
  StyledNavArrow,
  StyledArrowBackIcon,
  StyledStarredMsgsHeader,
  StyledStarredMsgsContent,
} from './style.js';
function StarredMsgs(props) {
  return (
    <StyledContainer toggle={props.displayStarredMgsLayout} width="28rem">
      {props.displayStarredMgsLayout ? (
        <>
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
          <StyledStarredMsgsContent>
            <p>No starred Message</p>
          </StyledStarredMsgsContent>
        </>
      ) : (
        ''
      )}
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
