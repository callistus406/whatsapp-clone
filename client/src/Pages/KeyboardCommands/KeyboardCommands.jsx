import React from "react";
import {
  StyledContainer,
  StyledHeader,
  StyledButton,
  StyledShortcuts,
  StyledShortcutsCol2,
  StyledMuiButton,
} from "./styles";
import Button from "@mui/material/Button";
import { styled as muiStyled } from "@mui/material/styles";
import { keyObjCol2, keyObj } from "../../GlobalVariables/variables";
import Dialog from "@mui/material/Dialog";

import { toggleKeyboardShortcuts } from "../../Redux-State/actionCreators/pageActions";
import { connect } from "react-redux";

export const StyledDialog = muiStyled(Dialog)(({ theme }) => ({
  backgroundColor: "rgba(255,255,255,0.9)",
  boxShadow: "none",
  border: "2px solid blue",
  height: "40rem",
  overflow: "auto",
  ".MuiPaper-root": {
    width: "70rem",
    overflow: "hidden",
    marginTop: "-20px",
  },
}));

function KeyboardCommands(props) {
  console.log(props.toggle);
  return (
    <StyledDialog
      open={true}
      // onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <StyledContainer>
        <StyledHeader>Keyboard shortcuts</StyledHeader>
        <div className="columnCont">
          <div className="istContainer">
            {/* <Buttons /> */}
            <Shortcuts />
          </div>
          <div className="secondContainer">
            <ShortcutsColumn2 />
          </div>
        </div>
      </StyledContainer>
    </StyledDialog>
  );
}

function Shortcuts(text, keys) {
  return (
    <StyledShortcuts>
      <div className="shortcuts">
        {" "}
        {keyObj.map((item, index) => {
          return (
            <div className="text">
              <p> {item.name}</p>
              <div className="btnContainer">
                {item.keys.map((element, index2) => {
                  return <Buttons text={element} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </StyledShortcuts>
  );
}

function ShortcutsColumn2(text, keys) {
  return (
    <StyledShortcutsCol2>
      <div className="shortcuts">
        {" "}
        {keyObjCol2.map((item, index) => {
          return (
            <div className="text">
              <p> {item.name}</p>
              <div className="btnContainer">
                {item.keys.map((element, index2) => {
                  return <Buttons text={element} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
      <StyledMuiButton>
        <Button variant="contained" disableElevation className="muiButton">
          OK
        </Button>
      </StyledMuiButton>
    </StyledShortcutsCol2>
  );
}
function Buttons({ text }) {
  return (
    <>
      <StyledButton className="button">{text}</StyledButton>
    </>
  );
}

function mapStateToProps(state) {
  return {
    displayKeyboardShortcuts: state.keyboardShortCuts.displayKeyboardShortcuts,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    toggleKeyboardShortcuts: (bool) => dispatch(toggleKeyboardShortcuts(bool)),
  };
}

// export default connect(mapStateToProps, mapDispatchToProps)(KeyboardCommands);
