import React, { useEffect, useState, useRef } from "react";
// import styled from "styled-components";
// import "./style.css";
import ClearIcon from "@mui/icons-material/Clear";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import {
  StyledContainer,
  StyledNavArrow,
  StyledMsgSearchHeader,
  StyledMsgSearchContent,
  StyledSearchIcon,
  StyledSearchBarContainer,
} from "./groupInfo.style.js";

function GroupInfo({ handleClickAction, toggle }) {
  const [searchInput, setSearchInput] = useState(".");
  const [icons, setIcons] = useState({
    search: true,

    background: false,
  });

  const divRef = useRef();
  const inputRef = useRef();
  const [cancel, setCancel] = useState(false);
  const [hide, setHide] = useState(false);

  let propStore;
  const handleClick = (prop) => (event) => {
    divRef.current.style.backgroundColor = "#fff";

    if (prop === "search") {
      propStore = icons.search;
    } else if (prop === "background") {
      propStore = icons.background;
    }
    setIcons({ ...icons, [prop]: !propStore });
  };
  // console.log(icons.search);

  const handleChange = (event) => {
    setSearchInput(event.target.value);

    if (searchInput.length) {
      setCancel(true);
      // console.log(cancel);

      //   clickAction.newChatToggle();
    }
  };
  document.addEventListener("click", () => {
    setIcons({ ...icons, search: !propStore });
  });
  function handleCancel() {
    setHide((prevState) => !prevState);
    inputRef.current.value = "";
    setCancel(false);
  }

  return (
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

      <StyledSearchBarContainer ref={divRef}>
        <span className="searchIconCont">
          {" "}
          {icons.search ? <StyledSearchIcon /> : <ArrowBack />}
        </span>
        <span className="clearIconCont">
          {cancel ? <ClearIcon onClick={handleCancel} /> : ""}
        </span>
        <input
          ref={inputRef}
          type="text"
          className="inputSearch"
          onChange={handleChange}
          onClick={handleClick("search")}
        />
      </StyledSearchBarContainer>

      <StyledMsgSearchContent></StyledMsgSearchContent>
    </StyledContainer>
  );
}

function ArrowBack() {
  return (
    <div>
      <svg viewBox="0 0 24 24" width="24" height="24">
        <path
          fill="currentColor"
          d="M12 4l1.4 1.4L7.8 11H20v2H7.8l5.6 5.6L12 20l-8-8 8-8z"
        ></path>
      </svg>
    </div>
  );
}
function CancelButton() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24">
      <path
        fill="#51585C"
        d="m19.1 17.2-5.3-5.3 5.3-5.3-1.8-1.8-5.3 5.4-5.3-5.3-1.8 1.7 5.3 5.3-5.3 5.3L6.7 19l5.3-5.3 5.3 5.3 1.8-1.8z"
      ></path>
    </svg>
  );
}
export default GroupInfo;
