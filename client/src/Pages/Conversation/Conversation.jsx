import React, {
  useRef,
  useCallback,
  useEffect,
  useState,
  useReducer,
} from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { groupDialog } from '../../GlobalVariables/variables';
import { displayGrpMsgAction } from '../../Redux-State/actionCreators/pageActions';
import { connect, useDispatch, useSelector } from 'react-redux';
import {
  StyledUserChatCont,
  StyledUserChatLayout,
  StyledUserChatText,
  StyledCircle,
  StyledContextMenu,
  StyledContextMenuItem,
  StyledDivider,
  StyledBadge,
  StyledArrowCont,
  StyledContextMenu4MsgSpace,
  StyledContextMenuItem4MsgSpace,
  Avatar,
} from './styles.js';
import {
  // login,
  fetchUserProfile,
  fetchMessages,
} from '../../Redux-State/actionCreators/fetchRequestActions';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import {
  getConversationId,
  getContactProfile,
} from '../../Redux-State/actionCreators/pageActions';
import axios from 'axios';
// import Messages from "../Messages/Messages";
import axiosInstance from '../../utils/axiosInstance';
function Conversation(props) {
  const [contextMenu, setContextMenu] = React.useState(null);
  const [getUserProfile, setUserProfile] = useState([]);
  const [toggle, setToggle] = useState({
    arrow: false,
  });
  const handleToggleArrow = (bool) => {
    setToggle({ ...toggle, arrow: bool });
  };
  const { conversation, displayChatId } = props;

  useEffect(() => {
    // console.log(props.contactProfile);
    console.log(
      'User chat rendered____________________________________________'
    );

    const getProfile = async () => {
      try {
        const friendId = props.conversation.members.find(
          (m) => m !== props.currentUser
        );
        const res = await axiosInstance.get(`/user/${friendId}`);

        setUserProfile(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getProfile();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleContextMenu = (event) => {
    event.preventDefault();
    setContextMenu(
      contextMenu === null
        ? {
            mouseX: event.clientX - 2,
            mouseY: event.clientY - 4,
          }
        : // repeated contextmenu when it is already open closes it with Chrome 84 on Ubuntu
          // Other native context menus might behave different.
          // With this behavior we prevent contextmenu from the backdrop to re-locale existing context menus.
          null
    );
  };

  const handleClose = () => {
    setContextMenu(null);
  };

  // const handleItemClick = ({ event, props }) => console.log(event, props);

  return (
    <>
      <StyledUserChatLayout
        onContextMenu={handleContextMenu}
        onMouseEnter={() => handleToggleArrow(true)}
        onMouseLeave={() => handleToggleArrow(false)}
        toggle={toggle.arrow}
        onClick={() => {
          props.displayGrpMsgAction(true);
          props.fetchMessages(conversation._id);
          props.fetchUserProfile(getUserProfile._id);

          props.getConversationId(conversation._id);
        }}
      >
        <StyledUserChatCont>
          <div className="chatHead">
            <StyledCircle>
              <Avatar />
            </StyledCircle>
          </div>
          <StyledUserChatText toggle={toggle.arrow}>
            <div className="userNameContainer">
              <span className="username">{getUserProfile.username}</span>
              <span className="msgTime">10:00 am</span>
            </div>

            {/* <Messages /> */}
            {/* TODO: validate for group */}
            <div className="userMsgContainer">
              <div className="msgPreview">
                <p>Hello this is mary from code academy..</p>
              </div>
              <div className="msgBadge">
                {/* <StyledBadge>
                  {' '}
                  <span>5</span>
                </StyledBadge> */}
                <StyledBadge badgeContent={53}></StyledBadge>

                <div className="arrowAction">
                  <KeyboardArrowDownIcon sx={{ color: '#8696A0' }} />
                </div>
              </div>
            </div>
          </StyledUserChatText>
        </StyledUserChatCont>
        <StyledContextMenu
          PaperProps={{
            style: {
              // maxHeight: ITEM_HEIGHT * 4.5,
              height: '13rem',
              width: '12rem',
            },
          }}
          open={contextMenu !== null}
          onClose={handleClose}
          anchorReference="anchorPosition"
          autoFocus={false}
          anchorPosition={
            contextMenu !== null
              ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
              : undefined
          }
        >
          {groupDialog.map((item, index) => {
            return (
              <StyledContextMenuItem onClick={handleClose} key={index}>
                {item.text}
              </StyledContextMenuItem>
            );
          })}
        </StyledContextMenu>
        <div className="borderBottom"></div>
      </StyledUserChatLayout>
      <StyledDivider />
    </>
  );
}
function mapStateToProps(state) {
  return {
    // search msg state
    getUser: state.user,
    userProfile: state.userProfile,
    messages: state.messages,
    displayChatId: state.displayConversationId.displayChatId,
    displayGrpMsgSection: state.grpMsgSection.displayGrpMsgSection,
    contactProfile: state.contactProfile.getContactProfileState,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    fetchUserProfile: (data) => dispatch(fetchUserProfile(data)),
    fetchMessages: (data) => dispatch(fetchMessages(data)),
    getContactProfile: (data) => {
      dispatch(getContactProfile(data));
    },
    displayGrpMsgAction: (bool) => dispatch(displayGrpMsgAction(bool)),
    getConversationId: (arg) => dispatch(getConversationId(arg)),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Conversation));
