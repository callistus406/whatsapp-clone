import React, { useEffect, useState, useRef, useReducer } from 'react';
import { ArrowBack, CancelButton, Avatar, InfoIcon } from './icons.js';
import ClearIcon from '@mui/icons-material/Clear';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import SearchIcon from '@mui/icons-material/Search';
// switch
import Switch from '@mui/material/Switch';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import LogoutIcon from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { styled as muiStyled } from '@mui/material/styles';
import styled from 'styled-components';
import LockIcon from '@mui/icons-material/Lock';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  StyledContainer,
  StyledNavArrow,
  StyledMsgSearchHeader,
  StyledGroupImg,
  StyledContactInfo,
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
  StyledGroupInstruction,
  StyledDisappearingMsgs,
  StyledEncryption,
  StyledDeleteChat,
  StyledSeparator,
} from './style.js';
import {
  toggleContactMsg,
  showGroupInfo,
  hideGroupInfo,
  showGrpParticipants,
  closeGrpParticipants,
  toggleStarredGrpMsgs,
  toggleContactInfo,
} from '../../../Redux-State/actionCreators/pageActions';
import { connect } from 'react-redux';
import SearchParticipants from '../../SearchParticipants/SearchParticipants.jsx';
import StarredMsgs from '../../GroupStarredMsgs/StarredMsgs';
function ContactInfo(props) {
  const membersRef = useRef();
  const username = '';
  const scrollToBottom = () => {
    membersRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  // useEffect(() => {
  //   scrollToBottom();
  // }, []);
  function handleScroll() {
    scrollToBottom();
  }
  console.log(props);

  const [editInfo, setEditInfo] = useState({
    title: false,
    info: false,
  });

  function showIcon(prop) {
    if (prop === 'title') {
      setEditInfo({ ...editInfo, [prop]: true });
    }
    if (prop === 'info') {
      setEditInfo({ ...editInfo, [prop]: true });
    }
  }
  function hideIcon(prop) {
    if (prop === 'title') {
      setEditInfo({ ...editInfo, [prop]: false });
    }
    if (prop === 'info') {
      setEditInfo({ ...editInfo, [prop]: false });
    }
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
      backgroundColor: '#008069',
      minWidth: '4rem',
      color: '#fff',
      '&:hover': {
        background: '#017561',
      },
      marginRight: '1rem',
      marginBottom: '1rem',
    }));
    const StyledDialogTitle = muiStyled(DialogTitle)(({ theme }) => ({
      color: '#55626A',
      fontSize: '0.9rem',
    }));
    const StyledDialog = muiStyled(Dialog)(({ theme }) => ({
      backgroundColor: 'rgba(255,255,255,0.9)',
      boxShadow: 'none',
    }));
    const StyledSpace = styled.div`
      ${'' /* height: 1rem; */}
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

    <StyledContainer id="mySidenav" toggle={props.displayContactInfo}>
      <AlertDialog />
      <StarredMsgs toggle={props.displayStarredGrpMsgs} />
      <StyledMsgSearchHeader>
        <div className="navArrow">
          <StyledNavArrow>
            <div onClick={() => props.toggleContactInfo(false)}>
              <CancelButton />
            </div>
            <p>Contact Info</p>
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
            onMouseEnter={() => showIcon('title')}
            onMouseLeave={() => hideIcon('title')}
          >
            <span className="groupName">Generous </span>
            {/* {editInfo ? (
              <span className="groupInfoIcon" onClick={handleClickOpen}>
                <InfoIcon />
              </span>
            ) : (
              ""
            )} */}
          </StyledGroupHeading>
          <p onClick={handleScroll}>+2348143568829</p>
        </StyledGroupImg>
        <StyledContactInfo>
          <StyledGroupInstruction
          // onMouseEnter={() => showIcon("info")}
          // onMouseLeave={() => hideIcon("info")}
          >
            <p className="aboutContact">About</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatem, aspernatur!
            </p>
            {/* {editInfo ? (
              <span className="groupInfoIcon" onClick={handleClickOpen}>
                <InfoIcon />
              </span>
            ) : (
              ""
            )} */}
          </StyledGroupInstruction>
          {/* <span>Group created by +2348143674356, on 04/06/2018 at 6:10 pm</span> */}
        </StyledContactInfo>
        <GroupInfoLinks>
          <div className="placeholder">
            <p>Media, Links and docs</p>
            <span>
              {' '}
              <ArrowForwardIosIcon fontSize="small" />
            </span>
          </div>
        </GroupInfoLinks>
        <StyledStarredMsg>
          <div className="starredMsg" onClick={props.toggleStarredGrpMsgs}>
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

          <StyledDisappearingMsgs>
            <div className="disappearingMsg">
              <div className="textCont">
                <span className="clock">
                  <ClockIcon />
                </span>
                <p lassName="info">Disappearing Messages</p>
                <span className="arrow">
                  {' '}
                  <ArrowForwardIosIcon fontSize="small" />
                </span>
              </div>

              <p className="text">off</p>
            </div>
          </StyledDisappearingMsgs>

          <StyledEncryption>
            <div className="encryption">
              <div className="textCont">
                <span className="clock">
                  <LockIcon fontSize="small" />
                </span>
                <p lassName="info">Encryption</p>
              </div>
              <p className="text">Messages are end-to-end encrypted. </p>

              <p className="text">Click to verify</p>
            </div>
          </StyledEncryption>
        </StyledMuteNotification>

        {/* <StyledMembersLayout ref={membersRef}>
          <StyledMembersHeader>
            <p>254 participants</p>
            <div>
              <SearchIcon onClick={() => props.showGrpParticipants(true)} />
              <SearchParticipants />
            </div>
          </StyledMembersHeader>
          <Members role="Group admin" />
          <Members />
          <Members />
          <Members />
          <Members />
        </StyledMembersLayout> */}

        <StyledGroupInfoActions>
          <div className="exitCont">
            <div className="exit">
              <span className="exitIcon">
                <LogoutIcon color="error" />
              </span>
              <p>Block {username ? username : 'joy'}</p>
            </div>
          </div>
          <div className="reportCont">
            <div className="report">
              <span className="reportIcon">
                <ThumbDownAltIcon color="error" />
              </span>
              <p>Report {username ? username : 'joy'}</p>
            </div>
          </div>
        </StyledGroupInfoActions>
        <StyledSeparator />
        <StyledDeleteChat>
          <DeleteIcon />
          <p className="deleteText">Delete Chat</p>
        </StyledDeleteChat>
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
      inputProps={{ 'aria-label': 'controlled' }}
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
          <span className={props.role ? 'role' : ''}>{props.role}</span>
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
    displayStarredGrpMsgs: state.starredGrpMsg.displayStarredGrpMsgs,
    displayContactInfo: state.contactInfo.displayContactInfo,

    // search msg state
    displaySearchContactMsg: state.searchContactMsg.displaySearchContactMsg,
    // get participants state
    displayGrpParticipants: state.grpParticipants.displayGrpParticipants,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    toggleStarredGrpMsgs: () => dispatch(toggleStarredGrpMsgs()),

    // search msg action
    toggleContactInfo: (bool) => dispatch(toggleContactInfo(bool)),
    toggleContactMsg: (bool) => dispatch(toggleContactMsg(bool)),

    // action to get group participants
    showGrpParticipants: (bool) => dispatch(showGrpParticipants(bool)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactInfo);

function ClockIcon() {
  return (
    <svg
      height="20"
      viewBox="0 0 36 36"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      class=""
    >
      <path
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18 31.5c.09 0 .182 0 .272-.003a1.5 1.5 0 0 0-.06-3c-.07.002-.14.003-.212.003v3Zm0-24c.071 0 .142 0 .213.002a1.5 1.5 0 0 0 .06-3L18 4.5v3Zm6.515-1.326a1.5 1.5 0 0 0-1.45 2.626c.124.068.246.139.367.212a1.5 1.5 0 1 0 1.554-2.566 13.503 13.503 0 0 0-.47-.272Zm5.039 4.84a1.5 1.5 0 0 0-2.566 1.554c.073.12.144.243.212.366a1.5 1.5 0 0 0 2.626-1.45 13.535 13.535 0 0 0-.272-.47Zm1.943 6.714a1.5 1.5 0 0 0-3 .06 10.76 10.76 0 0 1 0 .425 1.5 1.5 0 0 0 3 .06 13.693 13.693 0 0 0 0-.545Zm-1.67 6.787a1.5 1.5 0 0 0-2.627-1.45c-.068.124-.139.246-.212.367a1.5 1.5 0 1 0 2.566 1.554c.094-.155.185-.312.272-.47Zm-4.841 5.039a1.5 1.5 0 0 0-1.554-2.566c-.12.073-.243.144-.366.212a1.5 1.5 0 0 0 1.45 2.626c.158-.087.315-.178.47-.272ZM18 4.5C10.544 4.5 4.5 10.544 4.5 18S10.544 31.5 18 31.5v-3c-5.8 0-10.5-4.701-10.5-10.5S12.2 7.5 18 7.5v-3Z"
      ></path>
      <path
        fill="currentColor"
        d="M23.325 12.01a.865.865 0 0 1 1.21 1.21l-4.564 6.087a1.951 1.951 0 1 1-2.732-2.732l6.086-4.564Z"
      ></path>
    </svg>
  );
}
