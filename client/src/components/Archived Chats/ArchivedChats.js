import React from "react";
import { connect } from "react-redux";

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

function ArchiveIcon() {
  return (
    <svg viewBox="0 0 90 90" width="90" height="90">
      <path
        fill="#FFFFFF"
        d="M71.109 24.113l-4.288-5.222c-.594-.934-1.825-1.528-3.396-1.528h-36.85a5.083 5.083 0 0 0-3.693 1.528l-3.991 5.222c-.934 1.231-1.528 2.462-1.528 3.991v38.377a6.16 6.16 0 0 0 6.156 6.156h42.962a6.16 6.16 0 0 0 6.156-6.156V28.104c0-1.529-.595-2.76-1.528-3.991zM45.042 61.896L28.146 45h10.741v-6.156h12.269V45h10.741L45.042 61.896zM23.859 23.519l2.462-3.057H63.17l2.759 3.057h-42.07z"
      ></path>
    </svg>
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
