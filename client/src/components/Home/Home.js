import React, { useRef, useCallback, useEffect, useState } from "react";
import MenuList from "@mui/material/MenuList";

import { style } from "../Tests/style.css";
import styled from "styled-components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import NotificationsOffIcon from "@mui/icons-material/NotificationsOff";
import SearchIcon from "@mui/icons-material/Search";
import "./Home.css";
import UserChat from "../UserChat/UserChat";
import { CenterDivContent } from "../Styles/CustomStyles";
import UserProfile from "../UserProfile/UserProfile";
import { connect } from "react-redux";
import {
  profileToggle,
  newChatToggle,
} from "../../Redux-State/action creators/pageActions";
import { createRef } from "react";
import image from "../img/MyImage.png";
// menu
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import NewChat from "../NewChat/NewChat";
import UserSettings from "../Settings/UserSettings";

import "react-contexify/dist/ReactContexify.css";
const StyledSpan = styled.span`
  position: absolute;

  color: #404b4f;
  ${
    "" /* display: flex;
  align-items: center;
  flex-direction: column; */
  }
`;
const StyledIcon = {
  smallIcon: {
    width: "13px",
    height: "13px",
    // marginLeft: "1px",
    marginTop: "5px",
  },
};

const StyledInputSearch = styled.input`
  width: 60%;
  height: 2rem;
  border-radius: 18px;
  background-color: #fff;
  border: none;
  ${"" /* position: relative; */}
  ${"" /* padding-right: 4px; */}
  &:focus {
    outline: none;
  }
`;
const StyledSearchIcon = styled(SearchIcon)`
  ${"" /* color: #fff; */}
  position: absolute;
  left: 110px;
`;

const StyledNotificationIcon = styled(NotificationsOffIcon)`
  &:hover {
    cursor: pointer;
  }
`;
const StyledActionIcons = styled.div`
  background-color: ${(props) => (props.toggle ? "#EDEDED" : props.background)};
  cursor: pointer;
  height: 40px;
  width: 40px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
// const styledProfileContainer = styled.div``;
const StyledMenuItem = styled(MenuItem)`
  && {
    width: 100%;
    font-size: 0.9rem;
    ${"" /* margin-bottom: 0.5rem; */}
    padding-top: 0.7rem;
    padding-bottom: 0.7rem;
  }
`;

// Menu;
function Content({ clickAction }) {
  const [showProfile, setShowProfile] = useState(false);
  const [showDialog, setShowDialog] = useState({
    status: true,
    msg: true,
    options: true,
  });

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const onClickHandler = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // function AccountMenu() {
  //   return (

  //   );
  // }
  // console.log(showDialog.status);
  const handleClick = (event) => {};
  const handleDialog = (prop) => (event) => {
    // console.log(showDialog.options);

    let propStore;
    if (prop === "status") {
      propStore = showDialog.status;
    } else if (prop === "msg") {
      propStore = showDialog.msg;
      clickAction.newChatToggle();
    } else if (prop === "options") {
      propStore = showDialog.options;
    }
    // console.log(propStore);
    setShowDialog({ ...showDialog, [prop]: !propStore });
  };

  return (
    <div className="topHeader">
      <div className="profileDisplay">
        <div className="profileIcon" onClick={clickAction.profileToggle}>
          <img
            className="avatarImage"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTApbxj4499GJJWMYvKUVnzMUBJBt1b_Aob0A&usqp=CAU"
            alt=""
            // srcset=""
          />
        </div>
        <div className="profileActions">
          <StyledActionIcons
            toggle={showDialog.status}
            onClick={handleDialog("status")}
            background="#D5D5D5"
          >
            <svg
              id="df9d3429-f0ef-48b5-b5eb-f9d27b2deba6"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              class=""
            >
              <path
                fill="#51585C"
                d="M12.072 1.761a10.05 10.05 0 0 0-9.303 5.65.977.977 0 0 0 1.756.855 8.098 8.098 0 0 1 7.496-4.553.977.977 0 1 0 .051-1.952zM1.926 13.64a10.052 10.052 0 0 0 7.461 7.925.977.977 0 0 0 .471-1.895 8.097 8.097 0 0 1-6.012-6.386.977.977 0 0 0-1.92.356zm13.729 7.454a10.053 10.053 0 0 0 6.201-8.946.976.976 0 1 0-1.951-.081v.014a8.097 8.097 0 0 1-4.997 7.209.977.977 0 0 0 .727 1.813l.02-.009z"
              ></path>
              <path
                fill="#51585C"
                d="M19 1.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"
              ></path>
            </svg>
          </StyledActionIcons>
          <StyledActionIcons
            background="#D5D5D5"
            toggle={showDialog.msg}
            onClick={handleDialog("msg")}
          >
            <svg viewBox="0 0 24 24" width="24" height="24" class="">
              <path
                fill="#51585C"
                d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z"
              ></path>
            </svg>
          </StyledActionIcons>

          <div>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Tooltip title="Account settings">
                <StyledActionIcons
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  background="#D5D5D5"
                  toggle={!open ? "account-menu" : undefined}
                  // onClick={handleDialog("options")}
                  onClick={(e) => onClickHandler(e)}
                >
                  {/* <Avatar sx={{ width: 32, height: 32 }}>M</Avatar> */}
                  <svg viewBox="0 0 24 24" width="24" height="24" class="">
                    <path
                      fill="#51585C"
                      d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"
                    ></path>
                  </svg>
                </StyledActionIcons>
              </Tooltip>
            </Box>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              // style={{ width: "30rem" }}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <StyledMenuItem>New Group</StyledMenuItem>
              <StyledMenuItem>Archive</StyledMenuItem>
              {/* <Divider /> */}
              <StyledMenuItem>Stared messages</StyledMenuItem>
              <StyledMenuItem>Settings</StyledMenuItem>
              <StyledMenuItem>Log out</StyledMenuItem>
            </Menu>
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
        <StyledInputSearch />
        <StyledSearchIcon />
      </CenterDivContent>
    </div>
  );
}

const StyledChats = styled.div`
  width: 100%;
  height: 3rem;
  border: 1px solid blue;
`;
const StyledCircle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid blue;
  margin-left: 1rem;
`;
const StyledMenuList = styled(MenuList)`
  & {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
  }
`;

function Home(props) {
  return (
    <div className="homeParentCont">
      <div className="layoutContainer">
        {/* {props.displayProfileContainer ? ( */}
        {/* <UserProfile
          toggle={props.displayProfileContainer}
          clickAction={props}
        /> */}
        <UserSettings
          toggle={props.displayProfileContainer}
          clickAction={props}
        />
        <NewChat toggle={props.displayChatContainer} clickAction={props} />

        <div className="column1">
          <Content clickAction={props} />

          <div className="contactsCol" id="style-1">
            <UserChat passMenu="qwerty" />
            <UserChat passMenu="qwerty1" />
            <UserChat passMenu="qwerty2" />
            <UserChat passMenu="qwerty3" />
          </div>
        </div>

        <div className="chatColCont">
          <div className="openChat">
            <div className="openChatHead">
              <div className="imageCont">
                <div className="image"></div>
              </div>
              <div className="chatHeadInfo">
                <div className="title">
                  <p>Nigeria News</p>
                  <div>
                    {" "}
                    <span> friend 1</span> <span> friend 2</span>{" "}
                    <span> friend 3</span>
                    <span> friend 4</span>
                    <span> friend 5</span>{" "}
                  </div>
                </div>
              </div>
              <div className="icons">
                <div className="searchIcon">
                  <svg viewBox="0 0 24 24" width="24" height="24" class="">
                    <path
                      fill="#51585C"
                      d="M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5-5.2zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z"
                    ></path>
                  </svg>
                </div>
                <div className="optionIcon">
                  <svg viewBox="0 0 24 24" width="24" height="24" class="">
                    <path
                      fill="#51585C"
                      d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="msgSpace"></div>
          </div>
          <div className="msgBar">
            <div className="emojiIcons">
              <div className="emojiCont">
                <div className="emoji">
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    class="ekdr8vow dhq51u3o"
                  >
                    <path
                      fill="#797E81"
                      d="M9.153 11.603c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zm-3.204 1.362c-.026-.307-.131 5.218 6.063 5.551 6.066-.25 6.066-5.551 6.066-5.551-6.078 1.416-12.129 0-12.129 0zm11.363 1.108s-.669 1.959-5.051 1.959c-3.505 0-5.388-1.164-5.607-1.959 0 0 5.912 1.055 10.658 0zM11.804 1.011C5.609 1.011.978 6.033.978 12.228s4.826 10.761 11.021 10.761S23.02 18.423 23.02 12.228c.001-6.195-5.021-11.217-11.216-11.217zM12 21.354c-5.273 0-9.381-3.886-9.381-9.159s3.942-9.548 9.215-9.548 9.548 4.275 9.548 9.548c-.001 5.272-4.109 9.159-9.382 9.159zm3.108-9.751c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="attachmentCont">
                <div className="attachment">
                  <svg viewBox="0 0 24 24" width="24" height="24" class="">
                    <path
                      fill="#797E81"
                      d="M1.816 15.556v.002c0 1.502.584 2.912 1.646 3.972s2.472 1.647 3.974 1.647a5.58 5.58 0 0 0 3.972-1.645l9.547-9.548c.769-.768 1.147-1.767 1.058-2.817-.079-.968-.548-1.927-1.319-2.698-1.594-1.592-4.068-1.711-5.517-.262l-7.916 7.915c-.881.881-.792 2.25.214 3.261.959.958 2.423 1.053 3.263.215l5.511-5.512c.28-.28.267-.722.053-.936l-.244-.244c-.191-.191-.567-.349-.957.04l-5.506 5.506c-.18.18-.635.127-.976-.214-.098-.097-.576-.613-.213-.973l7.915-7.917c.818-.817 2.267-.699 3.23.262.5.501.802 1.1.849 1.685.051.573-.156 1.111-.589 1.543l-9.547 9.549a3.97 3.97 0 0 1-2.829 1.171 3.975 3.975 0 0 1-2.83-1.173 3.973 3.973 0 0 1-1.172-2.828c0-1.071.415-2.076 1.172-2.83l7.209-7.211c.157-.157.264-.579.028-.814L11.5 4.36a.572.572 0 0 0-.834.018l-7.205 7.207a5.577 5.577 0 0 0-1.645 3.971z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            <div className="msgInputCont">
              <input type="text" className="msgInput" />
            </div>

            <div className="recorderCont">
              <div className="recorder"></div>
            </div>
          </div>
          <div className="">
            {/* commented */}
            {/* <div className="chatColDiv">
            <div className="imageCont">
              <img src={image} alt="image" srcset="" className="connectImage" />
            </div>
            <div className="textContent">
              <span>Keep Your Phone Connected</span>
              <p>
                Whatsapp Connects to your phone to sync your messages,To reduce
                data usage,connect your phone to wifi
              </p>
            </div>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    displayProfileContainer:
      state.displayProfileReducer.displayProfileContainer,
    displayChatContainer: state.displayChatReducer.displayChatContainer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    profileToggle: () => dispatch(profileToggle()),
    newChatToggle: () => dispatch(newChatToggle()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
