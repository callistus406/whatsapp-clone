import React, { useRef, useCallback, useEffect, useState } from "react";
import "./Home.css";
import Box from "@mui/material/Box";
import { connect } from "react-redux";
import Menu from "@mui/material/Menu";
import UserChat from "../UserChat/UserChat";
import UserProfile from "../UserProfile/UserProfile";
import { CenterDivContent } from "../Styles/CustomStyles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import image from "../../Assets/img/MyImage.png";
// menu
import NewChat from "../NewChat/NewChat";
import Tooltip from "@mui/material/Tooltip";
// speed dial
import PersonIcon from "@mui/icons-material/Person";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import NewGrp from "../ New Grp/NewGrp";
import ArchivedChats from "../Archived Chats/ArchivedChats";
import StarredMsgs from "../StarredMsgs/StarredMsgs";
import UserSettings from "../Settings/UserSettings";
import Status from "../Status/Status";
import SearchContact from "../SearchContact/SearchContact";
import axios from "axios";
import {
  optionsToggle,
  showGroupInfo,
  displayGrpMsgAction,
  toggleConversation,
} from "../../Redux-State/actionCreators/pageActions";
import {
  fetchConversations,
  fetchUser,
  fetchConversationRequest,
  fetchConversationSuccess,
  fetchConversationFailure,
} from "../../Redux-State/actionCreators/fetchRequestActions.js";
import thunk from "redux-thunk";
import { StyledContactsCol } from "./style";
import { StickerIcon, ProfileIcon } from "./HomeIcons";
import GroupInfo from "../GroupInfo/GroupInfo";
import MessageBox from "./MessageBox";
import HomeContent from "./HomeComp/HomeContent";
import DirectMsg from "../Contacts/DirectMsg/DirectMsg";
import ContactInfo from "../Contacts/ContactInfo/ContactInfo";
import SearchContactMsg from "../Contacts/SearchContactMsg/SearchContactMsg";
const actions = [
  { icon: <InsertPhotoIcon />, name: "photo", class: "speedDial-contact" },

  { icon: <StickerIcon />, name: "sicker", class: "speedDial-sticker" },
  { icon: <CameraAltIcon />, name: "camera", class: "speedDial-camera" },
  { icon: <InsertDriveFileIcon />, name: "file", class: "speedDial-document " },
  { icon: <PersonIcon />, name: "contact", class: "speedDial-photo" },
];

// Menu;

function Home(props) {
  const countRef = useRef(0);
  const msgCont = useRef();
  const [open, setOpen] = useState(false);

  function fetchConversationRequest() {}
  useEffect(() => {
    const user = props.fetchUser();
    // console.log(props.getUser.data._id);

    props.fetchConversations(props.getUser.data._id);
    console.log(props.getUser.data);
  }, []);
  function clickHandler() {
    setOpen(!open);
  }

  return (
    <div className="homeParentCont">
      <div className="layoutContainer">
        {/* {props.displayProfileContainer ? ( */}

        <UserProfile />
        <Status />
        <NewChat />
        <NewGrp />

        <ArchivedChats />
        <StarredMsgs />
        <UserSettings />

        <SearchContact />
        <ContactInfo />
        <SearchContactMsg />
        <GroupInfo />
        <div className="column1">
          <HomeContent />

          <StyledContactsCol
            id="style-1"
            width="24rem"
            toggle={props.displayMsgSearchLayout}
          >
            <UserChat passMenu="qwerty" />
            <UserChat passMenu="qwerty1" />
            <UserChat passMenu="qwerty2" />
            <UserChat passMenu="qwerty3" />
            <UserChat passMenu="qwertyy" />
            <UserChat passMenu="qwerty1y" />
            <UserChat passMenu="qwerty2e" />
            <UserChat passMenu="qwerty3e" />
          </StyledContactsCol>
        </div>

        {props.displayGrpMsgSection ? (
          <DirectMsg />
        ) : (
          <div className="chatsCol">
            {/* commented */}
            <div className="chatColDiv">
              <div className="imageCont">
                <img
                  src={image}
                  alt="image"
                  srcset=""
                  className="connectImage"
                />
              </div>
              <div className="textContent">
                <span>Keep Your Phone Connected</span>
                <p>
                  Whatsapp Connects to your phone to props.getUser.data._idsync
                  your messages,To reduce data usage,connect your phone to wifi
                </p>
              </div>
            </div>
          </div>
        )}
        {/* </div> */}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    // group info state
    displayGroupInfoLayout: state.groupInfo.displayGroupInfoLayout,
    displayGrpMsgSection: state.grpMsgSection.displayGrpMsgSection,
    displayConversation: state.conversations.displayConversation,
    getUser: state.user,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    optionsToggle: () => dispatch(optionsToggle()),
    // search group info
    showGroupInfo: (bool) => dispatch(showGroupInfo(bool)),
    displayGrpMsgAction: () => dispatch(displayGrpMsgAction()),
    fetchConversations: (data) => dispatch(fetchConversations()),
    fetchUser: (data) => dispatch(fetchUser(data)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Home));
