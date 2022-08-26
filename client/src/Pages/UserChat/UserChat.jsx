import React, {
  useRef,
  useCallback,
  useEffect,
  useState,
  useReducer,
} from "react";
import { groupDialog } from "../../GlobalVariables/variables";
import { displayGrpMsgAction } from "../../Redux-State/actionCreators/pageActions";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  StyledUserChatCont,
  StyledUserChatLayout,
  StyledUserChatText,
  StyledCircle,
  StyledContextMenu,
  StyledContextMenuItem,
  StyledContextMenu4MsgSpace,
  StyledContextMenuItem4MsgSpace,
} from "./styles.js";
import {
  fetchUser,
  fetchUserProfile,
  fetchMessages,
} from "../../Redux-State/actionCreators/fetchRequestActions";
import axios from "axios";
function UserChat(props) {
  const { conversation, currentUser, mack } = props;
  const [contextMenu, setContextMenu] = React.useState(null);
  const [getUserProfile, setUserProfile] = useState([]);

  useEffect(() => {
    console.log(
      "Usaer chat rendered____________________________________________"
    );
    const getProfile = async () => {
      try {
        const friendId = props.conversation.members.find(
          (m) => m !== props.currentUser
        );
        const res = await axios.get(
          `http://localhost:3300/api/v1/user/${friendId}`
        );
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
    <StyledUserChatLayout
      onContextMenu={handleContextMenu}
      onClick={() => {
        props.displayGrpMsgAction(true);
        props.fetchMessages(conversation._id);
      }}
    >
      <StyledUserChatCont>
        <div className="chatHead">
          <StyledCircle />
        </div>
        <StyledUserChatText>{getUserProfile.username}</StyledUserChatText>
      </StyledUserChatCont>

      <StyledContextMenu
        PaperProps={{
          style: {
            // maxHeight: ITEM_HEIGHT * 4.5,
            height: "13rem",
            width: "12rem",
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
  );
}
function mapStateToProps(state) {
  return {
    // search msg state
    getUser: state.user,
    userProfile: state.userProfile,
    messages: state.messages,

    displayGrpMsgSection: state.grpMsgSection.displayGrpMsgSection,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    // search msg action
    fetchUser: (data) => dispatch(fetchUser(data)),
    fetchUserProfile: (data) => dispatch(fetchUserProfile(data)),
    fetchMessages: (data) => dispatch(fetchMessages(data)),

    displayGrpMsgAction: (bool) => dispatch(displayGrpMsgAction(bool)),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(UserChat));
