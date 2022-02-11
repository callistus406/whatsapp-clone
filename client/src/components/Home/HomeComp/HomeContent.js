import React, { useRef, useCallback, useEffect, useState } from "react";
import "../Home.css";
import { connect } from "react-redux";
import ClearIcon from "@mui/icons-material/Clear";

import { CenterDivContent } from "../../Styles/CustomStyles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// menu
import NewChat from "../../NewChat/NewChat";
import "react-contexify/dist/ReactContexify.css";

import "react-contexify/dist/ReactContexify.css";
import SearchContact from "../../SearchContact/SearchContact";
import { groupDialog } from "../../../GlobalVariables/variables";

import {
  settingsToggle,
  logout,
} from "../../../Redux-State/action creators/pageActions";
import { StatusIcon, MessageIcon, ProfileIcon, ArrowBack } from "../HomeIcons";
import {
  StyledSpan,
  StyledIcon,
  StyledSearchIcon,
  StyledNotificationIcon,
  StyledActionIcons,
  StyledSearchBarContainer,
} from "../Home.style";
import CustomMenu from "./CustomMenu";
function Content(props) {
  const countRef = useRef(0);

  useEffect(() => {
    countRef.current = countRef.current + 1;
    // console.log(msgCont);
    console.log(
      "home content -0-0 rendered..............." +
        countRef.current +
        "---times"
    );
  });
  const [searchInput, setSearchInput] = useState(".");
  const inputRef = useRef();

  //
  const [focused, setFocus] = useState(false);

  const divRef = useRef();

  const [cancel, setCancel] = useState(false);

  const unfocus = () => {
    setFocus(false);
    divRef.current.style.backgroundColor = "#F7F7F7";
  };
  const focus = () => {
    setFocus(true);
    divRef.current.style.backgroundColor = "#fff";
  };
  const handleChange = (event) => {
    setSearchInput(event.target.value);

    if (searchInput.length) {
      setCancel(true);
    }
  };

  function handleCancel() {
    // setHide((prevState) => !prevState);
    inputRef.current.value = "";
    setCancel(false);
  }

  return (
    <>
      <div className="topHeader">
        <div className="profileDisplay">
          <ProfileIcon />
          <div className="profileActions">
            <StyledActionIcons>
              <StatusIcon />
            </StyledActionIcons>
            <StyledActionIcons>
              <MessageIcon />
            </StyledActionIcons>

            <div>
              <CustomMenu />
              {/* {"this contains popover menu "} */}
            </div>
          </div>
        </div>
        <div className="notificationMsgCont">
          <div className="notificationContent">
            <div className="iconCont">
              <div className="icon">
                <StyledNotificationIcon />{" "}
              </div>
            </div>
            <div className="notificationsText">
              {/* <div className="notificationMsg" </div> */}
              <div style={{ position: "relative" }} className="notificationMsg">
                <p>Get notification of new messages </p>
                <span>Turn on desktop notifications</span>
                <StyledSpan>
                  <ArrowForwardIosIcon style={StyledIcon.smallIcon} />
                </StyledSpan>
              </div>
            </div>
          </div>
        </div>
        <CenterDivContent height="3.2rem">
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
              onFocus={focus}
              onBlur={unfocus}
              onChange={handleChange}
              // onClick={handleClick("search")}
            />
          </StyledSearchBarContainer>
          {/* <StyledSearchIcon fontSize="small" /> */}
        </CenterDivContent>
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    logout: state.options.logout,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    settingsToggle: () => dispatch(settingsToggle()),
    logout: () => dispatch(logout()),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Content));
