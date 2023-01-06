import styled from 'styled-components';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';

export const StyledContainer = styled.div`
  height: 100%; /* 100% Full-height */
  width: ${(props) => (props.toggle ? '23rem' : '0rem')};
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  border-left: 1px solid #dadada;
  overflow-x: hidden;
  transition: 0.2s;
  background: #ededed;
`;

export const StyledNavArrow = styled.div`
  width: 22rem;
  height: 3rem;
  ${'' /* border: 1px solid blue; */}
  display: flex;
  align-items: center;
  ${'' /* justify-content: center; */}
  margin-left:1rem;
  display: 'flex';

  p {
    color: #0c0c0c;
    margin-left: 2rem;
    font-size: 1.1rem;
  }
`;

export const StyledMsgSearchHeader = styled.div`
  height: 3.625rem;
  /* border: 1px solid blue; */
  ${'' /* position: absolute; */}

  background: #ededed;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const StyledGroupImg = styled.div`
  width: 100%;
  height: 20rem;
  text-align: center;
  ${'' /* border: 1px solid blue; */}
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-bottom: 10px solid #ededed;
  .circleImg {
    width: 200px;
    height: 200px;
    border: 1px solid red;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .groupName {
    font-size: 1.5rem;
    ${'' /* margin-top: 1rem; */}
  }
  p {
    color: #909090;
    margin-top: 1rem;
    cursor: pointer;
  }
`;

export const StyledContactInfo = styled.div`
  width: 100%;
  min-height: 6rem;
  ${'' /* border: 1px solid red; */}
  border-bottom: 10px solid #ededed;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1.2rem 1rem 1.2rem;
  .aboutContact {
    color: #829098;
    font-size: 0.9rem;
  }
  span {
    ${'' /* width: 90%; */}
    font-size: 0.9rem;
  }
`;

export const GroupInfoContent = styled.div`
  width: 100;
  height: calc(100vh - 3.625rem);
  /* border: 1px solid blue; */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  right: 0;
  background-color: #fff;
  overflow-x: hidden;

  &::-webkit-scrollbar-track {
    ${'' /* -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */}
    ${'' /* border-radius: 10px; */}
    background-color: #ededed;
  }

  &::-webkit-scrollbar {
    width: 5px;
    background-color: #ededed;
  }

  &::-webkit-scrollbar-thumb {
    height: 10px;

    border-radius: 10px;
    ${'' /* -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */}
    background-color: #bfbfbf;
  }
`;
export const GroupInfoLinks = styled.div`
  width: 100%;
  min-height: 3rem;
  padding: 0 1.5rem;

  border-bottom: 10px solid #ededed;

  .placeholder {
    width: 100%;
    ${'' /* border: 1px solid blue; */}
    height: 2rem;
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    p {
      color: #979797;
    }
    .iconCont {
      color: #949494;
      display: flex;
      align-items: center;
    }
  }
`;
export const StyledStarredMsg = styled.div`
  width: 100%;
  height: 4rem;
  ${'' /* border: 1px solid blue; */}
  padding: 0 1.5rem;
  display: flex;
  border-bottom: 10px solid #ededed;
  cursor: pointer;
  align-items: center;
  .starredMsg {
    display: flex;
    justify-content: space-between;
    width: 100%;
    div {
      display: flex;

      p {
        font-size: 1.1rem;
        padding-left: 1rem;
      }
      .star {
        color: #949494;
        fontsize: 0rem;
      }
    }
    .arrowForward {
      color: #949494;
    }
  }
`;
export const StyledMuteNotification = styled.div`
  width: 100%;
  min-height: 5rem;
  display: flex;
  border-bottom: 10px solid #ededed;
  flex-direction: column;
  padding-top: 0.4rem;
  ${'' /* align-items: center; */}
  .cont {
    padding: 0 1.5rem;
    border-bottom: 3px solid #fcfcfc;
  }
  .starredMsg {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    ${'' /* border: 1px solid blue; */}
    div {
      display: flex;

      .text {
        font-size: 1.1rem;
        padding-left: 1rem;
      }
      .bell {
        color: #949494;
        fontsize: 0rem;
      }
    }
    .switch {
      color: #949494;
    }
  }
  .conditional {
    ${'' /* border: 1px solid blue; */}
    color: #8c8c8c;
    font-size: 0.8rem;
    margin-left: 2.3rem;
  }
`;
export const StyledDisappearingMsgs = styled.div`
  height: 4rem;
  width: 100%;
  ${'' /* border: 1px solid blue; */}
  margin-top: 1rem;

  .disappearingMsg {
    width: 100%;
    .text {
      color: #909fa8;
      margin-left: 2.1rem;
    }
    .textCont {
      ${'' /* border: 1px solid red; */}
      display: flex;
      width: 100%;
      .arrow {
        margin-left: auto;
        color: #667781;
        font-size: 0.6rem;
      }
    }
    div {
      ${'' /* display: flex; */}
      .info {
        font-size: 1rem;
        ${'' /* margin-left: 2rem; */}
      }
      .clock {
        color: #949494;
        font-size: 0.9rem;
        margin-right: 0.8rem;
      }
    }
  }
`;
export const StyledEncryption = styled.div`
  height: 4rem;
  width: 100%;
  ${'' /* border: 1px solid blue; */}
  margin-top: 1rem;

  .encryption {
    width: 100%;
    .textCont {
      ${'' /* border: 1px solid red; */}
      display: flex;
      width: 100%;
      .arrow {
        margin-left: auto;
      }
    }
    .text {
      font-size: 0.9rem;
      margin-left: 2rem;
      color: #909fa8;
    }
    div {
      ${'' /* display: flex; */}
      .info {
        font-size: 1rem;
        ${'' /* margin-left: 1.5rem; */}
      }
      .clock {
        color: #949494;
        font-size: 0rem;
        margin-right: 0.7rem;
      }
    }
  }
`;
export const StyledSeparator = styled.div`
  border: 5px solid #ededed;
`;

export const StyledGroupInfoActions = styled.div`
  ${'' /* border: 1px solid blue; */}

  height: 6rem;
  width: 100%;

  .exitCont {
    padding-left: 2rem;
    .exit {
      height: 3rem;
      display: flex;
      align-items: center;
      color: #ea0038;
      p {
        width: 100%;
        margin-left: 2rem;
        color: #ea0038;
        display: flex;
        align-items: center;

        span {
          align-self: center;

          margin-left: 0.5rem;
          ${'' /* font-size: 1.2rem; */}
        }
      }
    }
    &:hover {
      cursor: pointer;

      background: #f5f5f5;
    }
  }
  .reportCont {
    padding-left: 2rem;

    .report {
      height: 3rem;
      display: flex;
      align-items: center;
      color: #ea0038;

      p {
        margin-left: 2rem;
        color: #ea0038;
        span {
          align-self: center;

          margin-left: 0.5rem;
        }
      }
    }
    &:hover {
      cursor: pointer;

      background: #f5f5f5;
    }
  }
`;
export const StyledDeleteChat = styled.div`
  && {
    ${'' /* background: blue; */}
    color:#EA0038;
    height: 3rem;
    width: 100%;
    ${'' /* border: 1px solid blue; */}
    margin-bottom: 1.5rem;
    display: flex;
    padding-left: 2rem;
    align-items: center;

    .deleteText {
      margin-left: 2rem;
      color: #ea0038;
    }
    &:hover {
      cursor: pointer;
      background: #f5f5f5;
    }
  }
`;

// ...........................

export const StyledMembersLayout = styled.div`
  height: auto;
  width: 100%;
  border-bottom: 10px solid #ededed;
`;
export const StyledCircle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid blue;
  margin-left: 1rem;
`;
export const StyledMembersChatText = styled.div`
  width: 100%;
  height: 3rem;
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .spanHeading {
    font-size: 1.1rem;
  }

  .msgPreview {
    margin-top: -0.7rem;
    font-size: 0.95rem;
    color: #868686;
  }
  .chatName {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .role {
      font-size: 0.7rem;
      margin-right: 1.5rem;
      ${'' /* font-size: 0.9rem; */}
      border: 1px solid #1fa855;
      display: flex;
      align-items: center;
      padding: 0 0.5rem;
      border-radius: 3px;
      color: #34b065;
    }
  }
`;

export const StyledMembersChatCont = styled.div`
  width: 100%;
  height: 4.5rem;
  /* border: 1px solid blue; */
  display: flex;
  align-items: center;
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
  /* border-bottom: 1px solid #f2f2f2; */
  /* border-bottom-height: 70%; */
  cursor: pointer;

  .borderBottom {
    /* height: 3px; */
    border-bottom: 1px solid #e3e3e3;

    width: 82%;
    margin-left: auto;
  }
  .chatHead {
    margin-right: 1rem;
  }

  &:hover {
    background-color: #f5f5f5;
  }
`;
export const StyledMembersHeader = styled.div`
  height: 3rem;
  padding-right: 0.8rem;
  padding-left: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #76858e;
  font-size: 0.9rem;
`;
// group heading
export const StyledGroupHeading = styled.div`
  width: 80%;
  position: relative;
  margin-top: 1rem;
  .groupInfoIcon {
    position: absolute;
    top: 0;
    right: 0;
  }
  .groupName {
    &:hover {
      background-color: #f0f2f5;
    }
  }
`;

export const StyledGroupInstruction = styled(StyledGroupHeading)`
  height: auto;
  margin-bottom: 1rem;
  width: 100%;
  color: #3b4a54;
  ${'' /* border: 1px solid blue; */}
  .groupInfoIcon {
    margin-left: 1rem;
  }
`;
