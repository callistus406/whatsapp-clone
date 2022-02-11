import React, { useEffect, useState, useRef } from "react";
import { ArrowBack, CancelButton, Avatar, InfoIcon } from "./icons.js";
import ClearIcon from "@mui/icons-material/Clear";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import SearchIcon from "@mui/icons-material/Search";
// switch
import Switch from "@mui/material/Switch";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import LogoutIcon from "@mui/icons-material/Logout";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { styled as muiStyled } from "@mui/material/styles";
import styled from "styled-components";

import {
  StyledContainer,
  StyledNavArrow,
  StyledMsgSearchHeader,
  StyledGroupImg,
  StyledGroupInfo,
  GroupInfoContent,
  GroupInfoLinks,
  StyledStarredMsg,
  StyledMuteNotification,
  StyledGroupInfoActions,
  StyledMembersChatCont,
  StyledMembersChatText,
  StyledCircle,
  StyledMembersLayout,
  StyledMembersHeader,
  StyledGroupHeading,
} from "./style.js";
import {
  toggleGroupInfo,
  toggleGrpParticipants,
} from "../../Redux-State/action creators/pageActions";
import { connect } from "react-redux";
import SearchParticipants from "../Search Participants/SearchParticipants.js";
function GroupInfo(props) {
  console.log(props);

  const [editInfo, setEditInfo] = useState(false);

  function showIcon(bool) {
    setEditInfo(bool);
  }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  function AlertDialog() {
    const StyledButton = muiStyled(Button)(({ theme }) => ({
      backgroundColor: "#008069",
      minWidth: "4rem",
      color: "#fff",
      "&:hover": {
        background: "#017561",
      },
      marginRight: "1rem",
      marginBottom: "1rem",
    }));
    const StyledDialogTitle = muiStyled(DialogTitle)(({ theme }) => ({
      color: "#55626A",
      fontSize: "0.9rem",
    }));
    const StyledDialog = muiStyled(Dialog)(({ theme }) => ({}));
    const StyledSpace = styled.div`
      ${"" /* height: 1rem; */}
      width: 23rem;
    `;
    return (
      <div>
        <StyledDialog
          open={open}
          // onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <StyledDialogTitle id="alert-dialog-title">
            Only admins can edit this group's info
          </StyledDialogTitle>
          <DialogContent>
            <StyledSpace>
              {/* Only admins can edit this group's info */}
            </StyledSpace>
          </DialogContent>
          <DialogActions>
            <StyledButton onClick={handleClose} autoFocus>
              OK
            </StyledButton>
          </DialogActions>
        </StyledDialog>
      </div>
    );
  }

  return (
    // <GroupInfoContent>

    <StyledContainer id="mySidenav" toggle={props.displayGroupInfoLayout}>
      <StyledMsgSearchHeader>
        <div className="navArrow">
          <StyledNavArrow>
            <div onClick={props.toggleGroupInfo}>
              <CancelButton />
            </div>
            <p>Group info</p>
          </StyledNavArrow>
        </div>
      </StyledMsgSearchHeader>
      {/*  */}
      <GroupInfoContent>
        <StyledGroupImg>
          <div className="circleImg">
            <Avatar />
          </div>
          <StyledGroupHeading
            onMouseEnter={() => showIcon(true)}
            onMouseLeave={() => showIcon(false)}
          >
            <span className="groupName">NIGERIA NEWS </span>
            {editInfo ? (
              <span className="groupInfoIcon" onClick={handleClickOpen}>
                <InfoIcon />
              </span>
            ) : (
              ""
            )}
          </StyledGroupHeading>
          <p>Group 173 participants</p>
        </StyledGroupImg>
        <StyledGroupInfo>
          <span>Group created by +2348143674356, on 04/06/2018 at 6:10 pm</span>
        </StyledGroupInfo>
        <GroupInfoLinks>
          <div className="placeholder">
            <p>Media, Links and docs</p>
            <span>
              {" "}
              <ArrowForwardIosIcon fontSize="small" />
            </span>
          </div>
        </GroupInfoLinks>
        <StyledStarredMsg>
          <div className="starredMsg">
            <div>
              <span className="star">
                <StarRoundedIcon fontSize="small" />
              </span>
              <p>Starred messages</p>
            </div>
            <span className="arrowForward">
              <ArrowForwardIosIcon fontSize="small" />
            </span>
          </div>
        </StyledStarredMsg>

        <StyledMuteNotification>
          <div className="starredMsg">
            <div>
              <span className="bell">
                <NotificationsRoundedIcon fontSize="small" />
              </span>
              <p className="text">Mute notification</p>
            </div>
            <span className="switch">
              <Mute fontSize="small" />
            </span>
          </div>
          <p className="conditional">until tomorrow at 3:22 am</p>
        </StyledMuteNotification>

        <StyledMembersLayout>
          <StyledMembersHeader>
            <p>254 participants</p>
            <div onClick={props.toggleGrpParticipants}>
              <SearchIcon />
              <SearchParticipants activate={props.displayGrpParticipants} />
            </div>
          </StyledMembersHeader>
          <Members role="Group admin" />
          <Members />
          <Members />
          <Members />
          <Members />
        </StyledMembersLayout>

        <StyledGroupInfoActions>
          <div className="exitCont">
            <div className="exit">
              <span className="exitIcon">
                <LogoutIcon color="error" />
              </span>
              <p>Exit group</p>
            </div>
          </div>
          <div className="reportCont">
            <div className="report">
              <span className="reportIcon">
                <ThumbDownAltIcon color="error" />
              </span>
              <p>Report group</p>
            </div>
          </div>
        </StyledGroupInfoActions>
      </GroupInfoContent>
    </StyledContainer>
    // </GroupInfoContent>
  );
}

function Mute() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
}

function Members(props) {
  return (
    <StyledMembersChatCont>
      <div className="chatHead">
        <StyledCircle />
      </div>
      <StyledMembersChatText>
        <div className="chatName">
          <span className="spanHeading">+2348109364893</span>
          <span className={props.role ? "role" : ""}>{props.role}</span>
        </div>
        <div className="msgPreview">
          <p>Loading about...</p>
        </div>
      </StyledMembersChatText>
    </StyledMembersChatCont>
  );
}
function mapStateToProps(state) {
  return {
    // search msg state
    displayGroupInfoLayout: state.groupInfo.displayGroupInfoLayout,
    // get participants state
    displayGrpParticipants: state.grpParticipants.displayGrpParticipants,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    // search msg action
    toggleGroupInfo: () => dispatch(toggleGroupInfo()),
    // action to get group participants
    toggleGrpParticipants: () => dispatch(toggleGrpParticipants()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupInfo);
