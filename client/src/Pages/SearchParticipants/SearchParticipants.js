import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
import { styled as muiStyled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import Checkbox from "@mui/material/Checkbox";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  StyledFloatingActionButtons,
  StyledSearchIcon,
  StyledDialogContent,
  StyledSearchBarContainer,
  // StyledBootstrapDialog,
  StyledBottom,
  StyledContactsTitle,
  StyledContactInfo,
  StyledBorderBottom,
  StyledContactContainer,
  StyledCheckbox,
  ArrowBack,
  StyledFab,
  StyledMembersChatCont,
  StyledMembersChatText,
  StyledCircle,
  StyledAlphabeticalHeader,
} from "./style";

import { closeGrpParticipants } from "../../Redux-State/action creators/pageActions";
const BootstrapDialog = muiStyled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    // padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    // padding: theme.spacing(1),
  },
  //   padding: "0",
}));
const StyledBootstrapDialogTitle = muiStyled(DialogTitle)(({ theme }) => ({
  backgroundColor: "#008069",
  color: "#fff",
  borderRadius: "none",
  display: "flex",
  alignItems: "center",
  fontSize: "1.1rem",
}));

let array = [];

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          //   aria-label="close"
          //   //   onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const SearchParticipants = (props) => {
  useEffect(() => {
    focus();
  }, []);

  //   const [open, setOpen] = React.useState(props.displayGrpParticipants);
  const inputRef = useRef();
  const countRef = useRef(0);
  //   const handleClickOpen = () => {
  //     setOpen(true);
  //   };
  //   const handleClose = () => {
  //     setOpen(false);
  //   };

  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState(".");

  //
  const [focused, setFocus] = useState(false);

  const divRef = useRef();

  const [cancel, setCancel] = useState(false);
  const [hide, setHide] = useState(false);

  const unfocus = () => {
    setFocus(false);
    // divRef.current.style.backgroundColor = "#F7F7F7";
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
  console.log(data);

  function handleCancel() {
    setHide((prevState) => !prevState);
    inputRef.current.value = "";
    setCancel(false);
  }

  function Members(props) {
    return (
      <div>
        {props.name ? (
          <StyledAlphabeticalHeader space={true}>
            {/* <p className="title">fd</p> */}
            <p className="title">{props.name.slice(0, 1).toUpperCase()}</p>
            <p className="borderBottom"></p>
          </StyledAlphabeticalHeader>
        ) : (
          <StyledAlphabeticalHeader>
            <p className="borderBottom"></p>
          </StyledAlphabeticalHeader>
        )}
        <StyledMembersChatCont>
          <div className="chatHead">
            <StyledCircle />
          </div>
          <StyledMembersChatText>
            <div className="chatName">
              <span className="spanHeading">
                {props.name ? props.name : "+2348109364893"}
              </span>
              <span className={props.role ? "role" : ""}>{props.role}</span>
            </div>
            <div className="msgPreview">
              <p>Loading about...</p>
            </div>
          </StyledMembersChatText>
        </StyledMembersChatCont>
      </div>
    );
  }
  function ShowContact(props) {
    return (
      <div className="">
        <StyledContactContainer>
          <div className="avatarCont">
            <div className="avatar">
              <ContactIcon />
            </div>
          </div>
          <StyledContactInfo>
            <div className="nameText">
              <p>{props.name}</p>
            </div>
            <div className="about">
              {/* placeholder loading About... */}
              <p>{props.about}</p>
            </div>
          </StyledContactInfo>
          <div className="deleteIconCont">
            {/* <div className="deleteIcon">
                  <DeleteIcon />
                </div> */}
          </div>
        </StyledContactContainer>
        <StyledBorderBottom />
      </div>
    );
  }
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
    backgroundColor: "#008069",
    color: "#fff",
    borderRadius: "none",
    display: "flex",
    alignItems: "center",
    fontSize: "1.1rem",
  }));
  const StyledDialog = muiStyled(Dialog)(({ theme }) => ({
    backgroundColor: "rgba(255,255,255,0.9)",
    boxShadow: "none",
  }));
  const StyledSpace = styled.div`
    ${"" /* height: 1rem; */}
    width: 23rem;
  `;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    props.closeGrpParticipants(false);
  };
  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button> */}

      <StyledDialog
        open={props.displayGrpParticipants}
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <StyledDialogTitle id="alert-dialog-title">
          <div onClick={handleClose}>
            <CloseIcon />
          </div>
          Only admins can edit this group's info
        </StyledDialogTitle>
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
            placeholder="Search..."
          />
        </StyledSearchBarContainer>

        <StyledDialogContent dividers>
          <Members role="Group admin" name="Gift" />
          <Members name="micheal" />
          <Members />
          <Members />
          <Members />
          <Members />
          <Members />
          <Members />
          <Members />
          <Members />
          <Members />
        </StyledDialogContent>

        <StyledBottom display={data.length <= 0 ? false : true}>
          <StyledFloatingActionButtons
            display={data.length <= 0 ? false : true}
          >
            <FloatingActionButtons />
          </StyledFloatingActionButtons>
          <div className="names"></div>
        </StyledBottom>
      </StyledDialog>
      {/* <BootstrapDialog
        disableBackdropClick
        aria-labelledby="customized-dialog-title"
        open={props.displayGrpParticipants}
      >
        <StyledBootstrapDialogTitle
          id="customized-dialog-title"
        >
          <ClearIcon style={{ marginRight: "1rem", color: "#B2D8D1" }} />
          Search Participants
        </StyledBootstrapDialogTitle>
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
            placeholder="Search..."
          />
        </StyledSearchBarContainer>

        <StyledDialogContent dividers>
        
          <Members role="Group admin" name="Gift" />
          <Members name="micheal" />
          <Members />
          <Members />
          <Members />
          <Members />
          <Members />
          <Members />
          <Members />
          <Members />
          <Members />
        </StyledDialogContent>
    
        <StyledBottom display={data.length <= 0 ? false : true}>
          <StyledFloatingActionButtons
            display={data.length <= 0 ? false : true}
          >
            <FloatingActionButtons />
          </StyledFloatingActionButtons>
          <div className="names">
          </div>
        </StyledBottom>
      </BootstrapDialog> */}
    </div>
  );
};

export function ContactIcon() {
  return (
    <svg viewBox="0 0 212 212" width="49" height="49">
      <path
        fill="#DFE5E7"
        className="background"
        d="M106.251.5C164.653.5 212 47.846 212 106.25S164.653 212 106.25 212C47.846 212 .5 164.654.5 106.25S47.846.5 106.251.5z"
      ></path>
      <path
        fill="#FFF"
        className="primary"
        d="M173.561 171.615a62.767 62.767 0 0 0-2.065-2.955 67.7 67.7 0 0 0-2.608-3.299 70.112 70.112 0 0 0-3.184-3.527 71.097 71.097 0 0 0-5.924-5.47 72.458 72.458 0 0 0-10.204-7.026 75.2 75.2 0 0 0-5.98-3.055c-.062-.028-.118-.059-.18-.087-9.792-4.44-22.106-7.529-37.416-7.529s-27.624 3.089-37.416 7.529c-.338.153-.653.318-.985.474a75.37 75.37 0 0 0-6.229 3.298 72.589 72.589 0 0 0-9.15 6.395 71.243 71.243 0 0 0-5.924 5.47 70.064 70.064 0 0 0-3.184 3.527 67.142 67.142 0 0 0-2.609 3.299 63.292 63.292 0 0 0-2.065 2.955 56.33 56.33 0 0 0-1.447 2.324c-.033.056-.073.119-.104.174a47.92 47.92 0 0 0-1.07 1.926c-.559 1.068-.818 1.678-.818 1.678v.398c18.285 17.927 43.322 28.985 70.945 28.985 27.678 0 52.761-11.103 71.055-29.095v-.289s-.619-1.45-1.992-3.778a58.346 58.346 0 0 0-1.446-2.322zM106.002 125.5c2.645 0 5.212-.253 7.68-.737a38.272 38.272 0 0 0 3.624-.896 37.124 37.124 0 0 0 5.12-1.958 36.307 36.307 0 0 0 6.15-3.67 35.923 35.923 0 0 0 9.489-10.48 36.558 36.558 0 0 0 2.422-4.84 37.051 37.051 0 0 0 1.716-5.25c.299-1.208.542-2.443.725-3.701.275-1.887.417-3.827.417-5.811s-.142-3.925-.417-5.811a38.734 38.734 0 0 0-1.215-5.494 36.68 36.68 0 0 0-3.648-8.298 35.923 35.923 0 0 0-9.489-10.48 36.347 36.347 0 0 0-6.15-3.67 37.124 37.124 0 0 0-5.12-1.958 37.67 37.67 0 0 0-3.624-.896 39.875 39.875 0 0 0-7.68-.737c-21.162 0-37.345 16.183-37.345 37.345 0 21.159 16.183 37.342 37.345 37.342z"
      ></path>
    </svg>
  );
}

// const ControlledCheckbox = connect(
//   (state) => ({
//     displayContactName: state.selectContact.displayContactName,
//   }),
//   (dispatch) => ({
//     toggleSelectContacts: (data) => dispatch(toggleSelectContacts(data)),
//   })
// )((props) => {

//   return (

//   );
// });

// ----------------------------

function FloatingActionButtons() {
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <StyledFab aria-label="add" size="large">
        <SendIcon />
      </StyledFab>
    </Box>
  );
}
function updateName(name) {
  return [...array, name];
}

function mapStateToProps(state) {
  return {
    displayGrpParticipants: state.grpParticipants.displayGrpParticipants,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    closeGrpParticipants: (bool) => dispatch(closeGrpParticipants(bool)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchParticipants);
