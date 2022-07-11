import React, { useEffect, useRef } from "react";
import {
  StyledContainer,
  StyledNavArrow,
  StyledArrowBackIcon,
  StyledNewGrpHeader,
  StyledNewGrpContent,
  StyledInputContainer,
  StyledContactHeading,
  StyledContactInfo,
  StyledContactContainer,
} from "./styles.js";
import { ContactIcon, DeleteIcon } from "./icons.js";
import { newGroupToggle } from "../../Redux-State/actionCreators/pageActions";
import { connect } from "react-redux";
function NewGrp(props) {
  const countRef = useRef(0);
  // console.log(props);
  useEffect(() => {
    countRef.current = countRef.current + 1;
    console.log(
      "New Grp -0-0 rendered..............." + countRef.current + "---times"
    );
  });
  return (
    <StyledContainer toggle={props.displayCreateNewGrp} width="28rem">
      <StyledNewGrpHeader>
        <div className="navArrow">
          <StyledNavArrow toggle={props.displayCreateNewGrp}>
            <div className="" onClick={props.newGroupToggle}>
              <StyledArrowBackIcon />
            </div>
            <p>Add group participants</p>
          </StyledNavArrow>
        </div>
      </StyledNewGrpHeader>
      <StyledNewGrpContent>
        <StyledInputContainer>
          <input type="text" placeholder="Type contact name     " />
        </StyledInputContainer>
        <StyledContactHeading>
          <p>#</p>
        </StyledContactHeading>
        <ShowContact name="Micheal" about="Manager" />
        <ShowContact name="David" about="Musician" />
        <ShowContact name="Gangster" about="coder" />
        <ShowContact name="Miracle" about="Loading About..." />
      </StyledNewGrpContent>
    </StyledContainer>
  );
}

function ShowContact({ name, about }) {
  return (
    <StyledContactContainer>
      <div className="avatarCont">
        <div className="avatar">
          <ContactIcon />
        </div>
      </div>
      <StyledContactInfo>
        <div className="name">
          <p>{name}</p>
        </div>
        <div className="about">
          {/* placeholder loading About... */}
          <p>{about}</p>
        </div>
      </StyledContactInfo>
      <div className="deleteIconCont">
        {/* <div className="deleteIcon">
            <DeleteIcon />
          </div> */}
      </div>
    </StyledContactContainer>
  );
}

function mapStateToProps(state) {
  return {
    // search msg state
    displayCreateNewGrp: state.newGroup.displayNewGroup,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    // search msg action
    newGroupToggle: () => dispatch(newGroupToggle()),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(NewGrp);
