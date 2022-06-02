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

import { keyObjCol2, keyObj } from "../../GlobalVariables/variables";
function KeyboardCommands() {
  return (
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
  );
}

export default KeyboardCommands;

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
