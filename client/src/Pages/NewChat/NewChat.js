import React, { useState, useRef, useEffect } from "react";

import "./NewChat.css";

import { connect } from "react-redux";
import ClearIcon from "@mui/icons-material/Clear";
import { newChatToggle } from "../../Redux-State/action creators/pageActions";
import {
  StyledDiv,
  StyleProfileBox,
  DisplayPic,
  StyleProfilePicBox,
  CustomDiv,
  StyledEditIcon,
  StyledArrowBackIcon,
  StyledSearchIcon,
  StyledSearchBarContainer,
  StyledNewHeader,
  StyledContacts,
} from "./style";
function NewChat(props) {
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
    // divRef.current.style.backgroundColor = "#F0F2F5";
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
  function Contacts(props) {
    return (
      <div>
        <StyledContacts>
          <div className="addGrpIcon">
            <svg viewBox="0 0 32 32" width="32" height="32">
              <path
                fill="currentColor"
                d="M15.313 15.672c2.401 0 4.237-1.835 4.237-4.235S17.713 7.2 15.313 7.2s-4.235 1.836-4.235 4.237 1.834 4.235 4.235 4.235zm9.349-.64c1.571 0 2.773-1.201 2.773-2.772 0-1.571-1.202-2.773-2.773-2.773s-2.772 1.202-2.772 2.773c0 1.571 1.201 2.772 2.772 2.772zm-1.724 5.841a7.856 7.856 0 0 0-.889-1.107 8.074 8.074 0 0 0-1.825-1.413 9.05 9.05 0 0 0-.675-.346l-.021-.009c-1.107-.502-2.5-.851-4.232-.851-1.732 0-3.124.349-4.232.851l-.112.054a9.247 9.247 0 0 0-.705.374 8.137 8.137 0 0 0-1.705 1.341 7.991 7.991 0 0 0-.656.773 8.584 8.584 0 0 0-.233.334c-.063.095-.116.184-.164.263l-.012.02a4.495 4.495 0 0 0-.213.408v2.276h16.061v-2.276s-.07-.164-.225-.427a4.257 4.257 0 0 0-.162-.265zm1.724-4.357c-1.333 0-2.376.3-3.179.713a9.409 9.409 0 0 1 1.733 1.218c1.402 1.25 1.959 2.503 2.017 2.641l.021.049h4.954v-1.571s-1.294-3.05-5.546-3.05zM9.41 13.78H6.261v-3.152H4.344v3.152H1.2v1.918h3.144v3.145h1.917v-3.145H9.41V13.78z"
              ></path>
            </svg>
          </div>
          <h4>New group</h4>
        </StyledContacts>
      </div>
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
  //   color: rgb(51 183 246);
  return (
    <div className="newChatCont">
      <StyledDiv toggle={props.displayChatContainer} width="28rem">
        <StyledNewHeader>
          <div className="navArrow">
            {/* profile toggle */}

            <StyledArrowBackIcon onClick={props.newChatToggle} />
            <p>New chat</p>
          </div>
        </StyledNewHeader>

        <StyledSearchBarContainer ref={divRef}>
          <span className="searchIconCont">
            {" "}
            {focused ? <ArrowBack /> : <StyledSearchIcon />}
          </span>
          <span className="clearIconCont">
            {cancel ? <ClearIcon onClick={handleCancel} /> : ""}
          </span>
          <input
            ref={inputRef}
            type="text"
            className="inputSearch"
            placeholder={!focused ? "search contacts" : ""}
            // autoFocus={true}
            onFocus={focus}
            onBlur={unfocus}
            onChange={handleChange}
            // onClick={handleClick("search")}
          />
        </StyledSearchBarContainer>
        <Contacts />
      </StyledDiv>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    // search msg state
    displayChatContainer: state.newChat.displayChatContainer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    // search msg action
    newChatToggle: () => dispatch(newChatToggle()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(NewChat));
