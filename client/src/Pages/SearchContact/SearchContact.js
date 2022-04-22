import React, { useEffect, useState, useRef, useCallback } from "react";
import "./style.css";
import ClearIcon from "@mui/icons-material/Clear";
import { toggleMsgSearch } from "../../Redux-State/action creators/pageActions";
import {
  StyledContainer,
  StyledNavArrow,
  StyledMsgSearchHeader,
  StyledMsgSearchContent,
  StyledSearchIcon,
  StyledSearchBarContainer,
} from "./style.js";
import { DeleteIcon, CancelButton, ArrowBack } from "./icons";
import { connect } from "react-redux";
function SearchContact(props) {
  const countRef = useRef(0);
  const inputRef = useRef();
  const arrowRef = useRef();
  useEffect(() => {
    countRef.current = countRef.current + 1;
    console.log("message search rendered " + countRef.current + " times");
  });
  const [searchInput, setSearchInput] = useState(".");

  //
  const [focused, setFocus] = useState(false);

  const divRef = useRef();

  const [cancel, setCancel] = useState(false);
  const [hide, setHide] = useState(false);

  const unfocus = () => {
    setFocus(false);
    divRef.current.style.backgroundColor = "#F0F2F5";
  };
  const focus = () => {
    setFocus(true);
    // divRef.current.style.backgroundColor = "#fff";
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
            {focused ? <ArrowBack /> : <StyledSearchIcon fontSize="small" />}
          </span>
          <span className="clearIconCont">
            {cancel ? <ClearIcon onClick={handleCancel} /> : ""}
          </span>
          <input
            ref={inputRef}
            type="text"
            className="inputSearch"
            // autoFocus={true}
            placeholder={!focused ? "Search..." : ""}
            onFocus={focus}
            onBlur={unfocus}
            onChange={handleChange}
            // onClick={handleClick("search")}
          />
        </StyledSearchBarContainer>

        <StyledMsgSearchContent></StyledMsgSearchContent>
      </StyledContainer>
    </div>
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
