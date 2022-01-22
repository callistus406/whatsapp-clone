import React, { useRef, useCallback, useEffect, useState } from "react";
import "../Home.css";
import Box from "@mui/material/Box";
import { connect } from "react-redux";

import { CenterDivContent } from "../../Styles/CustomStyles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// menu
import NewChat from "../../NewChat/NewChat";
import Tooltip from "@mui/material/Tooltip";
import "react-contexify/dist/ReactContexify.css";
// speed dial
import Menu from "@mui/material/Menu";

import NewGrp from "../../ New Grp/NewGrp";
import ArchivedChats from "../../Archived Chats/ArchivedChats";
import StarredMsgs from "../../Starred Msgs/StarredMsgs";
import UserSettings from "../../Settings/UserSettings";
import { Notification } from "../../Notification/Notification";
import BlockedContacts from "../../Blocked Contacts/BlockedContacts";
import "react-contexify/dist/ReactContexify.css";
import SearchContact from "../../SearchContact/SearchContact";
import { groupDialog } from "../../../Global variables/variables";
import {
  Menu as ContexifyMenu,
  Item,
  Separator,
  Submenu,
  MenuProvider,
  useContextMenu,
} from "react-contexify";
import {
  newGroupToggle,
  archiveToggle,
  starredMsgsToggle,
  settingsToggle,
  toggleMsgSearch,
  logout,
  toggleGroupInfo,
} from "../../../Redux-State/action creators/pageActions";
import {
  StatusIcon,
  MessageIcon,
  OptionsIcon,
  SearchIcon,
  MsgOptionsIcon,
  EmojiIcon,
  ProfileIcon,
} from "../HomeIcons";
import {
  StyledSpeedDial,
  StyledSpan,
  StyledIcon,
  StyledInputSearch,
  StyledSearchIcon,
  StyledNotificationIcon,
  StyledActionIcons,
  StyledMenuItem,
  StyledMenuList,
  StyledMessageSpace,
  StyledBox,
  StyledItem,
  StyledOptions,
  StyledOpenChat,
  StyledContactsCol,
} from "../Home.style";
function Content(props) {
  // console.log(homeProps);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const onClickHandler = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <NewGrp />
      <ArchivedChats />
      <StarredMsgs />
      <UserSettings />
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
                    <OptionsIcon />
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
                <StyledMenuItem onClick={props.newGroupToggle}>
                  New Group
                </StyledMenuItem>
                <StyledMenuItem onClick={props.archiveToggle}>
                  Archive
                </StyledMenuItem>
                <StyledMenuItem onClick={props.starredMsgsToggle}>
                  Stared messages
                </StyledMenuItem>
                <StyledMenuItem onClick={props.settingsToggle}>
                  Settings
                </StyledMenuItem>
                <StyledMenuItem onClick={props.logout}>Log out</StyledMenuItem>
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
    </>
  );
}

function mapStateToProps(state) {
  return {
    displayCreateNewGrp: state.newGroup.displayNewGroup,
    displayArchiveLayout: state.archive.displayArchive,
    displayStarredMgsLayout: state.starredMsgs.displayStarredMsgs,
    displaySettingsLayout: state.settings.displaySettings,
    logout: state.options.logout,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    newGroupToggle: () => dispatch(newGroupToggle()),
    archiveToggle: () => dispatch(archiveToggle()),
    starredMsgsToggle: () => dispatch(starredMsgsToggle()),
    settingsToggle: () => dispatch(settingsToggle()),
    logout: () => dispatch(logout()),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Content));
