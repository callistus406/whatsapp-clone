import React, { useRef, useCallback, useEffect, useState } from "react";
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
} from "../../Redux-State/actionCreators/fetchRequestActions";
function UserChat(props) {
  const { conversation, currentUser, mack } = props;
  const [contextMenu, setContextMenu] = React.useState(null);
  const [friend, setFriend] = useState(null);

  const { userProfile } = useSelector((state) => state);

  // const getConversations = useSelector((state) => state.conversations.data);

  const dispatch = useDispatch();
  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== props.currentUser);
    console.log(friendId);
    dispatch(fetchUserProfile(friendId));
    // setFriend(userProfile.data);
    // }
  }, [conversation, currentUser]);

  // console.log(userProfile.data);
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
      onClick={() => props.displayGrpMsgAction(true)}
    >
      <StyledUserChatCont>
        <div className="chatHead">
          <StyledCircle />
        </div>
        <StyledUserChatText>
          <div className="chatName">
            <span className="spanHeading">{userProfile.data?.username}</span>
            <span className="spansTime">6:37pm</span>
          </div>
          <div className="msgPreview">
            <p>{userProfile.data?.text}</p>
          </div>
        </StyledUserChatText>
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

    displayGrpMsgSection: state.grpMsgSection.displayGrpMsgSection,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    // search msg action
    fetchUser: (data) => dispatch(fetchUser(data)),
    fetchUserProfile: (data) => dispatch(fetchUserProfile(data)),

    displayGrpMsgAction: (bool) => dispatch(displayGrpMsgAction(bool)),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(UserChat));
