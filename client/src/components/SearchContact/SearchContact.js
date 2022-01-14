import React, { useEffect } from "react";
import styled from "styled-components";
import "./style.css";
import {
  StyledContainer,
  StyledNavArrow,
  StyledArrowBackIcon,
  StyledMsgSearchHeader,
  StyledMsgSearchContent,
  StyledInputContainer,
  StyledContactHeading,
  StyledContactInfo,
  StyledContactContainer,
} from "./SearchContact.style.js";

function SearchContact({ handleClickAction, toggle }) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [mack, setMack] = React.useState(false);
  function openNav() {
    setMack((prevState) => !prevState);
  }
  console.log(mack);
  function closeNav() {}

  return (
    <div>
      {/* <StyledNavContainer> */}
      <StyledContainer id="mySidenav" toggle={toggle} width="28rem">
        <StyledMsgSearchHeader>
          <div className="navArrow">
            <StyledNavArrow>
              <div onClick={handleClickAction}>
                <CancelButton />
              </div>
              <p>Search Messages</p>
            </StyledNavArrow>
          </div>
        </StyledMsgSearchHeader>
        <StyledMsgSearchContent>
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
        </StyledMsgSearchContent>
      </StyledContainer>
      {/* <a
          href="javascript:void(0)"
          className="closebtn"
          onClick={function () {
            return (document.getElementById("mySidenav").style.width = "0");
          }}
        >
          &times;
        </a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="kjjj">Contact</a>

        <div className="cont"></div>
      </StyledNavContainer> */}

      {/* <span
        onClick={function () {
          return (document.getElementById("mySidenav").style.width = "26rem");
        }}
      >
        open
      </span>

      <div id="main"></div> */}
    </div>
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
function ContactIcon() {
  return (
    <svg viewBox="0 0 212 212" width="49" height="49" class="">
      <path
        fill="#DFE5E7"
        class="background"
        d="M106.251.5C164.653.5 212 47.846 212 106.25S164.653 212 106.25 212C47.846 212 .5 164.654.5 106.25S47.846.5 106.251.5z"
      ></path>
      <path
        fill="#FFF"
        class="primary"
        d="M173.561 171.615a62.767 62.767 0 0 0-2.065-2.955 67.7 67.7 0 0 0-2.608-3.299 70.112 70.112 0 0 0-3.184-3.527 71.097 71.097 0 0 0-5.924-5.47 72.458 72.458 0 0 0-10.204-7.026 75.2 75.2 0 0 0-5.98-3.055c-.062-.028-.118-.059-.18-.087-9.792-4.44-22.106-7.529-37.416-7.529s-27.624 3.089-37.416 7.529c-.338.153-.653.318-.985.474a75.37 75.37 0 0 0-6.229 3.298 72.589 72.589 0 0 0-9.15 6.395 71.243 71.243 0 0 0-5.924 5.47 70.064 70.064 0 0 0-3.184 3.527 67.142 67.142 0 0 0-2.609 3.299 63.292 63.292 0 0 0-2.065 2.955 56.33 56.33 0 0 0-1.447 2.324c-.033.056-.073.119-.104.174a47.92 47.92 0 0 0-1.07 1.926c-.559 1.068-.818 1.678-.818 1.678v.398c18.285 17.927 43.322 28.985 70.945 28.985 27.678 0 52.761-11.103 71.055-29.095v-.289s-.619-1.45-1.992-3.778a58.346 58.346 0 0 0-1.446-2.322zM106.002 125.5c2.645 0 5.212-.253 7.68-.737a38.272 38.272 0 0 0 3.624-.896 37.124 37.124 0 0 0 5.12-1.958 36.307 36.307 0 0 0 6.15-3.67 35.923 35.923 0 0 0 9.489-10.48 36.558 36.558 0 0 0 2.422-4.84 37.051 37.051 0 0 0 1.716-5.25c.299-1.208.542-2.443.725-3.701.275-1.887.417-3.827.417-5.811s-.142-3.925-.417-5.811a38.734 38.734 0 0 0-1.215-5.494 36.68 36.68 0 0 0-3.648-8.298 35.923 35.923 0 0 0-9.489-10.48 36.347 36.347 0 0 0-6.15-3.67 37.124 37.124 0 0 0-5.12-1.958 37.67 37.67 0 0 0-3.624-.896 39.875 39.875 0 0 0-7.68-.737c-21.162 0-37.345 16.183-37.345 37.345 0 21.159 16.183 37.342 37.345 37.342z"
      ></path>
    </svg>
  );
}
function DeleteIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" class="">
      <path
        fill="#B6B6B6"
        d="M17.25 7.8L16.2 6.75l-4.2 4.2-4.2-4.2L6.75 7.8l4.2 4.2-4.2 4.2 1.05 1.05 4.2-4.2 4.2 4.2 1.05-1.05-4.2-4.2 4.2-4.2z"
      ></path>
    </svg>
  );
}
function CancelButton() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" class="">
      <path
        fill="#51585C"
        d="m19.1 17.2-5.3-5.3 5.3-5.3-1.8-1.8-5.3 5.4-5.3-5.3-1.8 1.7 5.3 5.3-5.3 5.3L6.7 19l5.3-5.3 5.3 5.3 1.8-1.8z"
      ></path>
    </svg>
  );
}

export default SearchContact;
