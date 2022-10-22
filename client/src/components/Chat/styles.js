import styled from 'styled-components';

export const StyledChatContainer = styled.div`
  height: 500px;
  width: 50%;
  border: 1px solid blue;

  margin: auto;
  .title {
    ${'' /* margin-left: 1rem; */}
    margin: 1rem 1rem;
    color: #cea285;
  }
`;

export const StyledChatLayoutCont = styled.div`
  width: 100%;
  ${'' /* height: 4.5rem; */}
  ${'' /* border: 1px solid yellow; */}
  display: flex;
  flex-direction: column;
  height: 4rem;
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
  /* border-bottom: 1px solid #f2f2f2; */
  /* border-bottom-height: 70%; */
  cursor: pointer;
  margin-bottom: 1rem;
  .borderBottom {
    /* height: 3px; */
    border-bottom: 1px solid #e3e3e3;

    width: 82%;
    margin-left: auto;
  }
  .chatHead {
    margin-right: 1rem;
  }
  .members {
    color: #cca788;
  }

  &:hover {
    background-color: #f5f5f5;
  }
`;
export const StyledUserChatCont = styled.div`
  width: 100%;
  display: flex;
  .caret {
    margin-right: 2rem;
    color: #667781;
    ${'' /* display: ${(props) => (props.hide ? 'none' : 'block')}; */}
  }
`;
export const StyledCaret = styled.div`
  display: ${(props) => (props.hide ? 'none' : 'block')};
`;

export const StyledCircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  ${'' /* border: 1px solid blue; */}
  margin-left: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #dfe5e7;
`;

export const StyledUserChatText = styled.div`
  width: 100%;
  ${'' /* height: 2px; */}
  ${'' /* border: 1px solid red; */}
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h3 {
    color: #2f1e21;
    font-weight: 400;
  }
`;
