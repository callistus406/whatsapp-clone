import React, { useRef, useEffect, useState } from 'react';
import {
  StyledContainer,
  StyleProfileBox,
  DisplayPic,
  StyleProfilePicBox,
  CustomDiv,
  StyledEditIcon,
  StyledArrowBackIcon,
  StyledProfileHeader,
  StyledNavArrow,
  StyledProfileContent,
} from './styles';
import { hideProfile } from '../../Redux-State/actionCreators/pageActions';
import { connect } from 'react-redux';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import DoneIcon from '@mui/icons-material/Done';
import InputAdornment from '@mui/material/InputAdornment';

function UserProfile(props) {
  const countRef = useRef(0);

  const [toggle, setToggle] = useState({
    showInput: true,
    editAbout: true,
  });
  const [checked, setChecked] = React.useState(true);

  const handleCheck = (event) => {
    setChecked(event.target.checked);
  };
  const handleToggleInput = (event) => {
    setToggle({ ...toggle, showInput: !toggle.showInput });
  };
  const handleToggleAboutInput = (event) => {
    setToggle({ ...toggle, editAbout: !toggle.editAbout });
  };
  useEffect(() => {
    countRef.current = countRef.current + 1;

    console.log('profile logged ' + countRef.current);
  });

  const StyledDoneIcon = styled(DoneIcon)({
    color: '#8696A0',
    cursor: 'pointer',
    border: 0,
  });

  return (
    <StyledContainer toggle={props.displayProfileContainer} width="28rem">
      <StyledProfileHeader>
        <StyledNavArrow>
          {/* profile toggle */}
          <StyledArrowBackIcon onClick={() => props.hideProfile(false)} />
          <p>Profile</p>
        </StyledNavArrow>
      </StyledProfileHeader>
      <StyledProfileContent>
        <div className="profileContent"></div>
        <StyleProfileBox>
          <StyleProfilePicBox>
            <DisplayPic>
              <Avatar />
            </DisplayPic>
          </StyleProfilePicBox>

          <CustomDiv
            height="5.4rem"
            width="100%"
            background="#fff"
            color="#008069"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <div className="content">
              <p>Your name</p>

              <TextField
                id={toggle.showInput ? 'standard' : 'standard-disabled'}
                variant="standard"
                sx={{
                  '& .MuiInput-underline:after': {
                    borderBottomColor: '#00A884',
                    width: '100%',
                  },
                }}
                InputProps={{
                  disableUnderline: toggle.showInput,
                  readOnly: toggle.showInput,
                }}
                // label={<p style={{ fontSize: '1.2rem' }}>Your name</p>}
                type="text"
                defaultValue="Callistus"
              />
              <div
                className="editNameIcon"
                onClick={() => {
                  handleToggleInput();
                }}
              >
                {!toggle.showInput ? (
                  <StyledDoneIcon />
                ) : (
                  <StyledEditIcon onClick={handleToggleInput} />
                )}
              </div>
            </div>
          </CustomDiv>
          <CustomDiv
            height="4.7rem"
            width="100%"
            background="#EDEDED"
            color="#43B1A7"
            display="flex"
            justifyContent="center"
            alignItems="center"
            fontSize="1rem"
            padding="1rem"
          >
            <p
              style={{
                alignSelf: 'center',
                width: '90%',
                fontSize: '0.9rem',
              }}
            >
              This is not your username or pin.This name will be visible to your
              whatsapp contacts
            </p>
          </CustomDiv>
          <CustomDiv
            height="8.5rem"
            width="100%"
            background="#fff"
            color="#43B1A7"
            padding="1rem"
            display="flex"
          >
            <div className="status">
              <p className="aboutHeader">About</p>
              <TextField
                id={toggle.editAbout ? 'standard' : 'standard-disabled'}
                variant="standard"
                sx={{
                  '& .MuiInput-underline:after': {
                    borderBottomColor: '#00A884',
                    width: '100%',
                  },
                }}
                InputProps={{
                  disableUnderline: toggle.editAbout,
                  readOnly: toggle.editAbout,
                }}
                // label={<p style={{ fontSize: '1.2rem' }}>Your name</p>}
                type="text"
                defaultValue="This is where you enter you status"
              />
              <div
                className="editAboutIcon"
                onClick={() => {
                  handleToggleAboutInput();
                }}
              >
                {!toggle.editAbout ? (
                  <StyledDoneIcon />
                ) : (
                  <StyledEditIcon onClick={handleToggleAboutInput} />
                )}
              </div>
              {/* <span style={{ color: '#000' }}>
                This is where you enter you status
              </span> */}
            </div>
          </CustomDiv>
        </StyleProfileBox>
      </StyledProfileContent>
    </StyledContainer>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    hideProfile: () => dispatch(hideProfile()),
  };
}

function mapStateToProps(state) {
  return {
    displayProfileContainer: state.profile.displayProfileContainer,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(UserProfile));

// icon

export function Avatar() {
  return (
    <div>
      <svg
        viewBox="0 0 212 212"
        height="212"
        width="212"
        preserveAspectRatio="xMidYMid meet"
        class=""
        version="1.1"
        x="0px"
        y="0px"
        enable-background="new 0 0 212 212"
      >
        <path
          fill="#DFE5E7"
          class="background"
          d="M106.251,0.5C164.653,0.5,212,47.846,212,106.25S164.653,212,106.25,212C47.846,212,0.5,164.654,0.5,106.25 S47.846,0.5,106.251,0.5z"
        ></path>
        <g>
          <path
            fill="#FFFFFF"
            class="primary"
            d="M173.561,171.615c-0.601-0.915-1.287-1.907-2.065-2.955c-0.777-1.049-1.645-2.155-2.608-3.299 c-0.964-1.144-2.024-2.326-3.184-3.527c-1.741-1.802-3.71-3.646-5.924-5.47c-2.952-2.431-6.339-4.824-10.204-7.026 c-1.877-1.07-3.873-2.092-5.98-3.055c-0.062-0.028-0.118-0.059-0.18-0.087c-9.792-4.44-22.106-7.529-37.416-7.529 s-27.624,3.089-37.416,7.529c-0.338,0.153-0.653,0.318-0.985,0.474c-1.431,0.674-2.806,1.376-4.128,2.101 c-0.716,0.393-1.417,0.792-2.101,1.197c-3.421,2.027-6.475,4.191-9.15,6.395c-2.213,1.823-4.182,3.668-5.924,5.47 c-1.161,1.201-2.22,2.384-3.184,3.527c-0.964,1.144-1.832,2.25-2.609,3.299c-0.778,1.049-1.464,2.04-2.065,2.955 c-0.557,0.848-1.033,1.622-1.447,2.324c-0.033,0.056-0.073,0.119-0.104,0.174c-0.435,0.744-0.79,1.392-1.07,1.926 c-0.559,1.068-0.818,1.678-0.818,1.678v0.398c18.285,17.927,43.322,28.985,70.945,28.985c27.678,0,52.761-11.103,71.055-29.095 v-0.289c0,0-0.619-1.45-1.992-3.778C174.594,173.238,174.117,172.463,173.561,171.615z"
          ></path>
          <path
            fill="#FFFFFF"
            class="primary"
            d="M106.002,125.5c2.645,0,5.212-0.253,7.68-0.737c1.234-0.242,2.443-0.542,3.624-0.896 c1.772-0.532,3.482-1.188,5.12-1.958c2.184-1.027,4.242-2.258,6.15-3.67c2.863-2.119,5.39-4.646,7.509-7.509 c0.706-0.954,1.367-1.945,1.98-2.971c0.919-1.539,1.729-3.155,2.422-4.84c0.462-1.123,0.872-2.277,1.226-3.458 c0.177-0.591,0.341-1.188,0.49-1.792c0.299-1.208,0.542-2.443,0.725-3.701c0.275-1.887,0.417-3.827,0.417-5.811 c0-1.984-0.142-3.925-0.417-5.811c-0.184-1.258-0.426-2.493-0.725-3.701c-0.15-0.604-0.313-1.202-0.49-1.793 c-0.354-1.181-0.764-2.335-1.226-3.458c-0.693-1.685-1.504-3.301-2.422-4.84c-0.613-1.026-1.274-2.017-1.98-2.971 c-2.119-2.863-4.646-5.39-7.509-7.509c-1.909-1.412-3.966-2.643-6.15-3.67c-1.638-0.77-3.348-1.426-5.12-1.958 c-1.181-0.355-2.39-0.655-3.624-0.896c-2.468-0.484-5.035-0.737-7.68-0.737c-21.162,0-37.345,16.183-37.345,37.345 C68.657,109.317,84.84,125.5,106.002,125.5z"
          ></path>
        </g>
      </svg>
    </div>
  );
}
