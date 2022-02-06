import React, { useRef, useCallback, useEffect } from "react";
import { groupDialog } from "../../Global variables/variables";
import "react-contexify/dist/ReactContexify.css";
import { Menu, useContextMenu } from "react-contexify";

import {
  StyledUserChatCont,
  StyledUserChatLayout,
  StyledUserChatText,
  StyledItem,
  StyledCircle,
} from "./userChatStyles.js";

function UserChat(props) {
  let MENU_ID = props.passMenu;
  const { show } = useContextMenu({
    id: MENU_ID,
  });

  function handleContextMenu(event) {
    event.preventDefault();
    show(event, {
      props: {
        key: "value",
      },
    });
  }

  // const handleItemClick = ({ event, props }) => console.log(event, props);

  return (
    <StyledUserChatLayout onContextMenu={handleContextMenu}>
      <StyledUserChatCont>
        <div className="chatHead">
          <StyledCircle />
        </div>
        <StyledUserChatText>
          <div className="chatName">
            <span className="spanHeading">WebMentor Freshers...</span>
            <span className="spansTime">6:37pm</span>
          </div>
          <div className="msgPreview">
            <p>emma: this is just a preview...</p>
          </div>
        </StyledUserChatText>
      </StyledUserChatCont>
      <Menu id={MENU_ID} style={{ width: "12rem" }}>
        {groupDialog.map((item) => {
          return <StyledItem key={item.id}>{item.text}</StyledItem>;
        })}
      </Menu>
      <div className="borderBottom"></div>
    </StyledUserChatLayout>
  );
}

export default React.memo(UserChat);

// EBEBEB
