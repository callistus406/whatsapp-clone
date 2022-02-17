import React from "react";
import { connect } from "react-redux";
import { ArchiveIcon } from "./icons";
import {
  StyledContainer,
  StyledNavArrow,
  StyledArrowBackIcon,
  StyledArchiveHeader,
  StyledArchiveContent,
} from "./styles";
import { archiveToggle } from "../../Redux-State/action creators/pageActions.js";
function ArchivedChats(props) {
  return (
    <div>
      <StyledContainer toggle={props.displayArchiveLayout} width="28rem">
        <StyledArchiveHeader>
          <div className="navArrow">
            <StyledNavArrow display={props.displayArchiveLayout}>
              <div className="">
                <StyledArrowBackIcon onClick={props.archiveToggle} />
              </div>
              <p>Archived Chats</p>
            </StyledNavArrow>
          </div>
        </StyledArchiveHeader>
        <StyledArchiveContent toggle={props.displayArchiveLayout} width="28rem">
          <div className="archiveIcon">
            <ArchiveIcon />
          </div>
        </StyledArchiveContent>
      </StyledContainer>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    displayArchiveLayout: state.archive.displayArchive,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    archiveToggle: () => dispatch(archiveToggle()),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ArchivedChats);
