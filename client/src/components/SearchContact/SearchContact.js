import React, { useEffect, useState, useRef } from "react";
// import styled from "styled-components";
import "./style.css";
import ClearIcon from "@mui/icons-material/Clear";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { toggleMsgSearch } from "../../Redux-State/action creators/pageActions";
import {
  StyledContainer,
  StyledNavArrow,
  StyledMsgSearchHeader,
  StyledMsgSearchContent,
  StyledSearchIcon,
  StyledSearchBarContainer,
} from "./SearchContact.style.js";
import { connect } from "react-redux";
// import {} from "./SearchContact.style";
function SearchContact(props) {
  const countRef = useRef(0);

  useEffect(() => {
    countRef.current = countRef.current + 1;
    console.log("message search rendered " + countRef.current + " times");
  });
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

  const handleChange = (event) => {
    setSearchInput(event.target.value);

    if (searchInput.length) {
      setCancel(true);
    }
  };

  function handleCancel() {
    setHide((prevState) => !prevState);
    inputRef.current.value = "";
    setCancel(false);
  }

  return (
    <div>
      <StyledContainer
        id="mySidenav"
        toggle={props.displayMsgSearchLayout}
        width="28rem"
      >
        <StyledMsgSearchHeader>
          <div className="navArrow">
            <StyledNavArrow>
              <div onClick={props.toggleMsgSearch}>
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
            // onChange={handleChange}
            // onClick={handleClick("search")}
          />
        </StyledSearchBarContainer>

        <StyledMsgSearchContent></StyledMsgSearchContent>
      </StyledContainer>
    </div>
  );
}
function ArrowBack() {
  return (
    <div>
      <svg viewBox="0 0 24 24" width="24" height="24" className="">
        <path
          fill="currentColor"
          d="M12 4l1.4 1.4L7.8 11H20v2H7.8l5.6 5.6L12 20l-8-8 8-8z"
        ></path>
      </svg>
    </div>
  );
}

function ContactIcon() {
  return (
    <svg viewBox="0 0 212 212" width="49" height="49" className="">
      <path
        fill="#DFE5E7"
        className="background"
        d="M106.251.5C164.653.5 212 47.846 212 106.25S164.653 212 106.25 212C47.846 212 .5 164.654.5 106.25S47.846.5 106.251.5z"
      ></path>
      <path
        fill="#FFF"
        className="primary"
        d="M173.561 171.615a62.767 62.767 0 0 0-2.065-2.955 67.7 67.7 0 0 0-2.608-3.299 70.112 70.112 0 0 0-3.184-3.527 71.097 71.097 0 0 0-5.924-5.47 72.458 72.458 0 0 0-10.204-7.026 75.2 75.2 0 0 0-5.98-3.055c-.062-.028-.118-.059-.18-.087-9.792-4.44-22.106-7.529-37.416-7.529s-27.624 3.089-37.416 7.529c-.338.153-.653.318-.985.474a75.37 75.37 0 0 0-6.229 3.298 72.589 72.589 0 0 0-9.15 6.395 71.243 71.243 0 0 0-5.924 5.47 70.064 70.064 0 0 0-3.184 3.527 67.142 67.142 0 0 0-2.609 3.299 63.292 63.292 0 0 0-2.065 2.955 56.33 56.33 0 0 0-1.447 2.324c-.033.056-.073.119-.104.174a47.92 47.92 0 0 0-1.07 1.926c-.559 1.068-.818 1.678-.818 1.678v.398c18.285 17.927 43.322 28.985 70.945 28.985 27.678 0 52.761-11.103 71.055-29.095v-.289s-.619-1.45-1.992-3.778a58.346 58.346 0 0 0-1.446-2.322zM106.002 125.5c2.645 0 5.212-.253 7.68-.737a38.272 38.272 0 0 0 3.624-.896 37.124 37.124 0 0 0 5.12-1.958 36.307 36.307 0 0 0 6.15-3.67 35.923 35.923 0 0 0 9.489-10.48 36.558 36.558 0 0 0 2.422-4.84 37.051 37.051 0 0 0 1.716-5.25c.299-1.208.542-2.443.725-3.701.275-1.887.417-3.827.417-5.811s-.142-3.925-.417-5.811a38.734 38.734 0 0 0-1.215-5.494 36.68 36.68 0 0 0-3.648-8.298 35.923 35.923 0 0 0-9.489-10.48 36.347 36.347 0 0 0-6.15-3.67 37.124 37.124 0 0 0-5.12-1.958 37.67 37.67 0 0 0-3.624-.896 39.875 39.875 0 0 0-7.68-.737c-21.162 0-37.345 16.183-37.345 37.345 0 21.159 16.183 37.342 37.345 37.342z"
      ></path>
    </svg>
  );
}
function DeleteIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" className="">
      <path
        fill="#B6B6B6"
        d="M17.25 7.8L16.2 6.75l-4.2 4.2-4.2-4.2L6.75 7.8l4.2 4.2-4.2 4.2 1.05 1.05 4.2-4.2 4.2 4.2 1.05-1.05-4.2-4.2 4.2-4.2z"
      ></path>
    </svg>
  );
}
function CancelButton() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" className="">
      <path
        fill="#51585C"
        d="m19.1 17.2-5.3-5.3 5.3-5.3-1.8-1.8-5.3 5.4-5.3-5.3-1.8 1.7 5.3 5.3-5.3 5.3L6.7 19l5.3-5.3 5.3 5.3 1.8-1.8z"
      ></path>
    </svg>
  );
}

function mapStateToProps(state) {
  return {
    // search msg state
    displayMsgSearchLayout: state.searchMsg.displayMsgSearchLayout,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    // search msg action
    toggleMsgSearch: () => dispatch(toggleMsgSearch()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContact);
