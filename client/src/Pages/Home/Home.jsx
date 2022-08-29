import React, { useRef, useCallback, useEffect, useState } from "react";
import "./Home.css";
import Box from "@mui/material/Box";
import { connect, useSelector, useDispatch } from "react-redux";
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
  showMessage,
} from "../../Redux-State/actionCreators/pageActions";
import {
  fetchConversations,
  fetchUser,
  fetchMessages,
  fetchUserProfile,
} from "../../Redux-State/actionCreators/fetchRequestActions.js";
import thunk from "redux-thunk";
import { StyledContactsCol, StyledChatsCol } from "./style";
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
  const [userConversations, setUserConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState([]);
  const [error, setError] = useState([]);
  const { user, conversations } = useSelector((state) => state);
  const { displayConversation, loggedUser, messages } = props;
  // const getConversations = useSelector((state) => state.conversations.data);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(loggedUser._id);

    console.log("Home rendered____________________________________________");

    props.fetchConversations(loggedUser._id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    console.log(user);
  }, [loggedUser._id]);

  function clickHandler() {
    setOpen(!open);
  }

  return (
    <div className="homeParentCont">
      <div className="layoutContainer">
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
            {!displayConversation.loading
              ? displayConversation.data.map((conversation, index) => {
                  console.log("qwerty");
                  return (
                    <div
                      onClick={() => {
                        setCurrentChat(conversation);
                      }}
                    >
                      <UserChat
                        passMenu={index}
                        conversation={conversation}
                        currentUser={loggedUser._id}
                      />
                    </div>
                  );
                })
              : " "}

            {/* displayConversation.loading ? (
              <h1>Loading</h1>
            ) : displayConversation.data._id ? (
              userConversations.map((conversation, index) => {
                return (
                  <UserChat
                    passMenu={index}
                    conversation={conversation}
                    currentUser={loggedUser._id}
                  />
                );
              })
            ) : (
              <h1>{displayConversation.error}</h1>
            )} */}

            {/* <UserChat passMenu="qwerty1" /> */}
            {/* <UserChat passMenu="qwerty2" />
            <UserChat passMenu="qwerty3" />
            <UserChat passMenu="qwertyy" />
            
           
            <UserChat passMenu="qwerty3e" /> */}
          </StyledContactsCol>
        </div>

        {props.displayGrpMsgSection ? (
          <DirectMsg
            userMsg={messages}
            key={"index"}
            currentUser={loggedUser._id}
          />
        ) : (
          <StyledChatsCol>
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
          </StyledChatsCol>
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
    displayMessage: state.displayCurrentChat.displayMessage,
    displayConversation: state.conversations,
    getUser: state.user,
    messages: state.messages,
    userProfile: state.userProfile,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    optionsToggle: () => dispatch(optionsToggle()),
    fetchUserProfile: (data) => dispatch(fetchUserProfile(data)),

    // search group info
    showMessage: () => dispatch(showMessage()),
    showGroupInfo: (bool) => dispatch(showGroupInfo(bool)),
    displayGrpMsgAction: () => dispatch(displayGrpMsgAction()),
    fetchConversations: (data) => dispatch(fetchConversations(data)),
    fetchUser: (data) => dispatch(fetchUser(data)),
    fetchMessages: (data) => dispatch(fetchMessages(data)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Home));
