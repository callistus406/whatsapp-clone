import React from "react";
import {
  StyledContainer,
  StyledHeader,
  StyledButton,
  StyledShortcuts,
} from "./styles";
import { textObj, keyObj } from "../../GlobalVariables/variables";
function KeyboardCommands() {
  return (
    <StyledContainer>
      <StyledHeader>Keyboard shortcuts</StyledHeader>
      <div className="columnCont">
        <div className="istContainer">
          {/* <Buttons /> */}
          <Shortcuts />
        </div>
        <div className="secondContainer"></div>
      </div>
    </StyledContainer>
  );
}

export default KeyboardCommands;

function Shortcuts(text, keys) {
  return (
    <StyledShortcuts>
      <div className="shortcuts">
        {textObj.map((item) => {
          return <p> {item.name}</p>;
        })}
      </div>
      <div className="keys">
        {keyObj.map((item) => {
          return item.keys.map((key) => {
            return (
              <div className="">
                <Buttons text={key} />
              </div>
            );
          });
        })}
      </div>
    </StyledShortcuts>
  );
}
function Buttons({ text }) {
  return (
    <>
      <StyledButton>{text}</StyledButton>
    </>
  );
}
