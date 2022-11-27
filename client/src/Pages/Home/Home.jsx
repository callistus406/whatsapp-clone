import { useEffect, useRef, useState, memo } from 'react';
import './Home.css';
import { connect, useSelector } from 'react-redux';
import axiosJWT from '../../utils/axiosInstance';
import UserProfile from '../UserProfile/UserProfile';

import image from '../../Assets/img/MyImage.png';
// menu
import NewChat from '../NewChat/NewChat';

import NewGrp from '../ New Grp/NewGrp';
import ArchivedChats from '../Archived Chats/ArchivedChats';
import StarredMsgs from '../StarredMsgs/StarredMsgs';
import UserSettings from '../Settings/UserSettings';
import Status from '../Status/Status';
import SearchContact from '../SearchContact/SearchContact';
import axios from 'axios';
import {
  optionsToggle,
  showGroupInfo,
  displayGrpMsgAction,
  // toggleConversation,
  showMessage,
  getConversationId,
  getToken,
} from '../../Redux-State/actionCreators/pageActions';
import {
  fetchConversations,
  // login,
  fetchMessages,
  fetchUserProfile,
  getRefreshToken,
} from '../../Redux-State/actionCreators/fetchRequestActions.js';
// import thunk from "redux-thunk";
import { StyledContactsCol, StyledChatsCol } from './style';

import GroupInfo from '../GroupInfo/GroupInfo';
// import MessageBox from "./MessageBox";
import HomeContent from './HomeComp/HomeContent';
// import DirectMsg from "../Contacts/DirectMsg/DirectMsg";
import ContactInfo from '../Contacts/ContactInfo/ContactInfo';
import SearchContactMsg from '../Contacts/SearchContactMsg/SearchContactMsg';
import Conversation from '../Conversation/Conversation';
import Messages from '../Messages/Messages';
import { ConversationImage } from './HomeIcons';
import jwtDecode from 'jwt-decode';

// Menu;

function Home(props) {
  const countRef = useRef(0);
  // const msgCont = useRef();
  const [open, setOpen] = useState(false);
  // const [userConversations, setUserConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState([]);
  const [token, setToken] = useState({
    refresh: props.userInfo.payload.refreshToken,
    access: props.userInfo.payload.accessToken,
  });
  // const [socket, setSocket] = useState(null);

  const { displayConversation, loggedUser, messages } = props;

  // const refreshToken = async () => {
  //   try {
  //     const response = await axios.post('/refresh', {
  //       token: token.refresh,
  //     });

  //     setTimeout(() => {
  //       refreshToken();
  //     }, 58000);
  //     props.getToken(
  //       response.data.payload.accessToken,
  //       response.data.payload.refreshToken
  //     );

  //     setToken({
  //       refresh: response.data.payload.refreshToken,
  //       access: response.data.payload.accessToken,
  //     });
  //     console.log(token);
  //     console.log(token, props.authToken);

  //     return response.data;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // axiosJWT.interceptors.request.use(
  //   async (config) => {
  //     let currentDate = new Date();
  //     console.log(token);

  //     const decodedToken = jwtDecode(token.access);
  //     console.log(
  //       decodedToken && decodedToken.exp * 1000 < currentDate.getTime()
  //     );

  //     if (decodedToken && decodedToken.exp * 1000 < currentDate.getTime()) {
  //       const data = await refreshToken();
  //       console.log(data.payload);
  //       console.log(token);

  //       config.headers['authorization'] = 'Bearer ' + data.payload.accessToken;
  //     }
  //     return config;
  //   },
  //   (error) => {
  //     return Promise.reject(error);
  //   }
  // );

  // const decodedToken = jwtDecode(props.userInfo.payload.refreshToken);

  // axiosJWT.interceptors.request.use(
  //   async (config) => {
  //     console.log(config);

  //     let currentDate = new Date();
  //     const decodedToken = jwtDecode(props.userInfo.payload.accessToken);

  //     if (decodedToken && decodedToken.exp * 1000 < currentDate.getTime()) {
  //       const data = await refreshToken();
  //       console.log(data);

  //       config.headers['authorization'] = 'Bearer ' + data.accessToken;
  //     }
  //     return config;
  //   },
  //   (error) => {
  //     return Promise.reject(error);
  //   }
  // );
  // console.log(ans);
  // let auth = props.authToken[1];
  useEffect(() => {
    console.log(props.userInfo.payload);
  }, []);
  async function now() {
    // const data = await refreshToken();
  }
  useEffect(() => {
    console.log(loggedUser.payload.user._id);

    console.log('Home rendered____________________________________________');

    props.fetchConversations(loggedUser.payload.user._id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedUser.payload.user_id]);

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
                  return (
                    <div
                      onClick={() => {
                        setCurrentChat(conversation);
                      }}
                    >
                      <Conversation
                        passMenu={index}
                        conversation={conversation}
                        currentUser={loggedUser.payload.user._id}
                      />
                    </div>
                  );
                })
              : ' '}
          </StyledContactsCol>
        </div>

        {props.displayGrpMsgSection ? (
          <Messages
            userMsg={messages}
            key={'index'}
            currentUser={loggedUser._id}
            currentChat={currentChat}
          />
        ) : (
          <StyledChatsCol>
            {/* commented */}
            <div className="chatColDiv">
              <div className="imageCont">
                <ConversationImage />
                {/* <img
                  src={image}
                  alt="image"
                  srcset=""
                  className="connectImage"
                /> */}
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
    userInfo: state.login.data,
    displayChatId: state.displayConversationId.displayChatId,
    jwtRefreshToken: state.jwtRefresh.data,
    authToken: state.jwtToken.data,
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
    // login: (data) => dispatch(login(data)),
    fetchMessages: (data) => dispatch(fetchMessages(data)),

    getConversationId: (arg) => dispatch(getConversationId(arg)),
    fetchRefreshToken: (data) => dispatch(getRefreshToken(data)),
    getToken: (accessToken, refreshToken) =>
      dispatch(getToken(accessToken, refreshToken)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
