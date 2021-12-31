import React from "react";
import styled from "styled-components";
import "./UserChat.css";
const StyledChats = styled.div`
  width: 100%;
  height: 3rem;
  border: 1px solid blue;
`;
const StyledCircle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid blue;
  margin-left: 1rem;
`;
function UserChat() {
  return (
    <div>
      <div className="userChatCont">
        <div className="chatHead">
          <StyledCircle />
        </div>
        <div className="chatText">
          <div className="chatName">
            <span className="spanHeading">WebMentor Freshers...</span>
            <span className="spansTime">6:37pm</span>
          </div>
          <div className="msgPreview">
            <p>emma: this is just a preview...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserChat;

// EBEBEB
