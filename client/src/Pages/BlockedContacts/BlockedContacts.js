import React from "react";

import { connect } from "react-redux";
import {
  StyledContainer,
  StyledNavArrow,
  StyledArrowBackIcon,
  StyledBlockedContactsHeader,
  StyledBlockedContactsContent,
  StyledCustomDiv,
  StyledHelpLinksContainer,
  StyledContactContainer,
  StyledAddContact,
  StyledContactInfo,
  StyledFormHelperText,
} from "./style.js";
import { DeleteIcon, AddContactIcon, ContactIcon } from "./icons";
import { displaySettings } from "../../Redux-State/actionCreators/pageActions";
function BlockedContacts({ handleClickAction, toggle }) {
  return (
    <StyledContainer toggle={toggle} width="28rem">
      <StyledBlockedContactsHeader>
        <div className="navArrow">
          <StyledNavArrow display={toggle}>
            <div className="">
              <StyledArrowBackIcon onClick={handleClickAction} />
            </div>
            <p>Help</p>
          </StyledNavArrow>
        </div>
      </StyledBlockedContactsHeader>
      <StyledBlockedContactsContent toggle={toggle} width="28rem">
        <StyledAddContact>
          <div className="iconCont">
            <div className="icon">
              <AddContactIcon />
            </div>
          </div>
          <p>Add blocked contact</p>
        </StyledAddContact>
        <StyledContactContainer>
          <div className="avatarCont">
            <div className="avatar">
              <ContactIcon />
            </div>
          </div>
          <StyledContactInfo>
            <div className="name">
              <p>Fabianski</p>
            </div>
            <div className="about">
              <p>football hero</p>
            </div>
          </StyledContactInfo>
          <div className="deleteIconCont">
            <div className="deleteIcon">
              <DeleteIcon />
            </div>
          </div>
        </StyledContactContainer>
        <StyledFormHelperText>
          Blocked contacts will no longer be able to call you or send you
          messages
        </StyledFormHelperText>
      </StyledBlockedContactsContent>
    </StyledContainer>
  );
}

function mapStateToProps(state) {
  return {
    displaySettingsLayout: state.settings.displaySettings,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    displaySettings: (bool) => dispatch(displaySettings(bool)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BlockedContacts);
