import React, { useEffect, useState } from "react";
import "./Home.css";
import { connect, useSelector, useDispatch } from "react-redux";
// import Menu from "@mui/material/Menu";

import UserProfile from "../UserProfile/UserProfile";
// import { CenterDivContent } from "../Styles/CustomStyles";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import image from "../../Assets/img/MyImage.png";
// menu
import NewChat from "../NewChat/NewChat";
// import Tooltip from "@mui/material/Tooltip";
// speed dial
// import PersonIcon from "@mui/icons-material/Person";
// import CameraAltIcon from "@mui/icons-material/CameraAlt";
// import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
// import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import NewGrp from "../ New Grp/NewGrp";
import ArchivedChats from "../Archived Chats/ArchivedChats";
import StarredMsgs from "../StarredMsgs/StarredMsgs";
import UserSettings from "../Settings/UserSettings";
import Status from "../Status/Status";
import SearchContact from "../SearchContact/SearchContact";
// import axios from "axios";
import {
  optionsToggle,
  showGroupInfo,
  displayGrpMsgAction,
  // toggleConversation,
  showMessage,
  getConversationId,
} from "../../Redux-State/actionCreators/pageActions";
import {
  fetchConversations,
  login,
  fetchMessages,
  fetchUserProfile,
} from "../../Redux-State/actionCreators/fetchRequestActions.js";
// import thunk from "redux-thunk";
import { StyledContactsCol, StyledChatsCol } from "./style";
// import { StickerIcon } from "./HomeIcons";
import GroupInfo from "../GroupInfo/GroupInfo";
// import MessageBox from "./MessageBox";
import HomeContent from "./HomeComp/HomeContent";
// import DirectMsg from "../Contacts/DirectMsg/DirectMsg";
import ContactInfo from "../Contacts/ContactInfo/ContactInfo";
import SearchContactMsg from "../Contacts/SearchContactMsg/SearchContactMsg";
import Conversation from "../Conversation/Conversation";
import Messages from "../Messages/Messages";
// const actions = [
//   { icon: <InsertPhotoIcon />, name: "photo", class: "speedDial-contact" },

//   { icon: <StickerIcon />, name: "sicker", class: "speedDial-sticker" },
//   { icon: <CameraAltIcon />, name: "camera", class: "speedDial-camera" },
//   { icon: <InsertDriveFileIcon />, name: "file", class: "speedDial-document " },
//   { icon: <PersonIcon />, name: "contact", class: "speedDial-photo" },
// ];

// Menu;

function Home(props) {
  // const countRef = useRef(0);
  // const msgCont = useRef();
  const [open, setOpen] = useState(false);
  // const [userConversations, setUserConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState([]);
  // const [error, setError] = useState([]);
  const { user } = useSelector((state) => state);
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
                      <Conversation
                        passMenu={index}
                        conversation={conversation}
                        currentUser={loggedUser._id}
                      />
                    </div>
                  );
                })
              : " "}
          </StyledContactsCol>
        </div>

        {props.displayGrpMsgSection ? (
          <Messages
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
    displayChatId: state.displayConversationId.displayChatId,
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
    login: (data) => dispatch(login(data)),
    fetchMessages: (data) => dispatch(fetchMessages(data)),

    getConversationId: (arg) => dispatch(getConversationId(arg)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Home));
