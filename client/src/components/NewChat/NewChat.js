import React, { useState, useRef, useEffect } from "react";

import "./NewChat.css";
import styled from "styled-components";
import EditIcon from "@mui/icons-material/Edit";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { connect } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
const StyledDiv = styled.div`
  height: 100%; /* 100% Full-height */
  width: ${(props) =>
    props.toggle ? props.width : 0}; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #fff;
  overflow-x: hidden; /* Disable horizontal scroll */
  transition: 0.5s;
`;

const StyleProfileBox = styled.div`
  height: 100%;
  width: 100%;
  background: #ededed;
`;

const DisplayPic = styled.div`
  height: 202px;
  width: 202px;
  border-radius: 50%;
  border: 1px solid blue;
`;
const StyleProfilePicBox = styled.div`
  height: 16rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CustomDiv = styled.div`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  border: ${(props) => props.border};
  display: ${(props) => props.display};
  justify-content:${(props) => props.justifyContent}
  align-items: ${(props) => props.alignItems};
  padding-left: ${(props) => props.padding}
`;
const StyledEditIcon = styled(EditIcon)`
  color: #919191;
`;
const StyledArrowBackIcon = styled(ArrowBackIcon)`
  color: #fff;
  cursor: pointer;
`;

const StyledSearchIcon = styled(SearchIcon)`
  & {
    color: #666c6f;
  }
`;

function NewChat({ handleClickAction, toggle }) {
  const [searchInput, setSearchInput] = useState(".");
  const [icons, setIcons] = useState({
    search: true,

    background: false,
  });
  useEffect(() => {
    console.log(icons.search);
    if (icons.search === false) {
      document.addEventListener("click", (e) => {
        console.log(e);
      });
    }
  }, [icons.search]);
  const divRef = useRef();
  const inputRef = useRef();
  const [cancel, setCancel] = useState(false);

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
      console.log(cancel);

      //   clickAction.newChatToggle();
    }
  };

  function handleCancel() {
    setSearchInput("");
    inputRef.current.value = "";
    setCancel(false);
  }
  function Contacts(props) {
    return (
      <div>
        <div className="contactCont">
          <div className="addGrpIcon">
            <svg viewBox="0 0 32 32" width="32" height="32" class="">
              <path
                fill="currentColor"
                d="M15.313 15.672c2.401 0 4.237-1.835 4.237-4.235S17.713 7.2 15.313 7.2s-4.235 1.836-4.235 4.237 1.834 4.235 4.235 4.235zm9.349-.64c1.571 0 2.773-1.201 2.773-2.772 0-1.571-1.202-2.773-2.773-2.773s-2.772 1.202-2.772 2.773c0 1.571 1.201 2.772 2.772 2.772zm-1.724 5.841a7.856 7.856 0 0 0-.889-1.107 8.074 8.074 0 0 0-1.825-1.413 9.05 9.05 0 0 0-.675-.346l-.021-.009c-1.107-.502-2.5-.851-4.232-.851-1.732 0-3.124.349-4.232.851l-.112.054a9.247 9.247 0 0 0-.705.374 8.137 8.137 0 0 0-1.705 1.341 7.991 7.991 0 0 0-.656.773 8.584 8.584 0 0 0-.233.334c-.063.095-.116.184-.164.263l-.012.02a4.495 4.495 0 0 0-.213.408v2.276h16.061v-2.276s-.07-.164-.225-.427a4.257 4.257 0 0 0-.162-.265zm1.724-4.357c-1.333 0-2.376.3-3.179.713a9.409 9.409 0 0 1 1.733 1.218c1.402 1.25 1.959 2.503 2.017 2.641l.021.049h4.954v-1.571s-1.294-3.05-5.546-3.05zM9.41 13.78H6.261v-3.152H4.344v3.152H1.2v1.918h3.144v3.145h1.917v-3.145H9.41V13.78z"
              ></path>
            </svg>
          </div>
          <h4>New group</h4>
        </div>
      </div>
    );
  }
  function ArrowBack() {
    return (
      <div>
        <svg viewBox="0 0 24 24" width="24" height="24" class="">
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
      <StyledDiv toggle={toggle} width="28rem">
        <div className="newChatHeader">
          <div className="navArrow">
            {/* profile toggle */}

            <StyledArrowBackIcon onClick={handleClickAction.newChatToggle} />
            <p>New chat</p>
          </div>
        </div>
        <div className="searchBarCont" ref={divRef}>
          <span className="searchIconCont">
            {" "}
            {icons.search ? <StyledSearchIcon /> : <ArrowBack />}
          </span>
          <span className="clearIconCont">
            {cancel ? <ClearIcon onClick={handleCancel} /> : ""}
          </span>
          <input
            type="text"
            ref={inputRef}
            className="inputSearch"
            onChange={handleChange}
            onClick={handleClick("search")}
          />
        </div>
        <Contacts />
      </StyledDiv>
    </div>
  );
}

export default NewChat;
