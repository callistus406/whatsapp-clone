import React, { useState } from "react";
import { connect } from "react-redux";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import { StyledActionIcons, StyledMenuItem } from "../style";
import Tooltip from "@mui/material/Tooltip";

import { OptionsIcon } from "../HomeIcons";
import {
  newGroupToggle,
  archiveToggle,
  starredMsgsToggle,
  settingsToggle,
  toggleMsgSearch,
  logout,
  showGroupInfo,
} from "../../../Redux-State/action creators/pageActions";
function CustomMenu(props) {
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

        <StyledMenuItem onClick={props.archiveToggle}>Archive</StyledMenuItem>
        <StyledMenuItem onClick={props.starredMsgsToggle}>
          Stared messages
        </StyledMenuItem>
        <StyledMenuItem onClick={props.settingsToggle}>Settings</StyledMenuItem>
        <StyledMenuItem onClick={props.logout}>Log out</StyledMenuItem>
      </Menu>
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
)(React.memo(CustomMenu));
