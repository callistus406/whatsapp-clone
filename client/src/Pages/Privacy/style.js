import styled from 'styled-components';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const StyledContainer = styled.div`
  height: 100%; /* 100% Full-height */
  width: ${(props) =>
    props.toggle ? props.width : 0}; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 2;
  top: 0;
  left: 0;
  background-color: #fff;

  transition: 0.1s;
`;

export const StyledArrowBackIcon = styled(ArrowBackIcon)`
  color: #fff;
  cursor: pointer;
`;
export const StyledNavArrow = styled.div`
  width: 22rem;
  height: 3rem;
  ${'' /* border: 1px solid blue; */}
  display: flex;
  align-items: center;
  ${'' /* justify-content: center; */}
  color: #fff;
  display: ${(props) => (props.display ? 'flex' : 'none')};

  p {
    margin-left: 2rem;
    font-size: 1.2rem;
  }
`;

export const StyledPrivacyHeader = styled.div`
  height: 6.5rem;
  /* border: 1px solid blue; */
  /* position: absolute; */
  background: #008069;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
export const StyledPrivacyContent = styled.div`
  height: calc(100vh - 6.5rem);
  width: ${(props) => (props.toggle ? props.width : 0)};
  background: #ededed;
  display: ${(props) => (props.toggle ? 'block' : 'none')};
  margin: 4px, 4px;
  transition: 0.1s;
  min-width: 28rem;
  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 5px;
    background-color: #bfbfbf;
  }

  &::-webkit-scrollbar-thumb {
    height: 10px;

    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #bfbfbf;
  }
  .iconCont {
    width: 100%;
    height: 15rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icon {
    width: 150px;
    height: 150px;
    border: 1px solid blue;
    border-radius: 50%;
    align-self: center;
  }
`;

export const StyledPrivacyLinksContainer = styled.div`
  ${'' /* calc 100vh-6.5rem - 200px */}
  /* height: calc((100vh - 10rem) - 110px); */
height: auto;
  background-color: #fff;

  .border {
    ${'' /* height: 1px; */}
    border: 1px solid #F2F2F2;
    width: 94.5%;
    margin-left: auto;
  }
`;

export const StyledPrivacyTextContainer = styled.div`
  width: 100%;
  padding-top: 1rem;

  height: auto;
  .content-info {
    padding-right: 2rem;

    width: 100%;
    /* border: 1px solid blue; */
    display: flex;
    align-items: center;
    height: 4rem;
    .writeup {
      height: auto;
      /* border: 1px solid red; */
      padding-left: 2rem;
      flex: 5;
      /* display: flex;
      flex-direction: column;
      justify-content: space-between; */
      .label {
        font-size: 0.95rem;
        color: #5b5e5f;
        font-weight: 500;
      }
      .condition {
        color: #b08c85;
        font-size: 0.9rem;
      }
    }
    .clickIcon {
      height: 2rem;
      flex: 1;
      display: flex;
      justify-content: flex-end;
      /* border: 1px solid yellow; */
    }
  }
  .para {
    padding-left: 2rem;
    color: #008069;

    font-size: 0.95rem;

    a {
      text-decoration: none;
      color: #0881b7;
    }
  }
`;
export const StyledBorderBottom = styled.div`
  border: ${(props) => props.border};
  margin-left: auto;
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
`;

export const StyledReadReceipts = styled.div`
  height: 5rem;
  width: 100%;
  /* margin-bottom: 1rem; */
  border-bottom: 1px solid #e5e7ea;

  /* border: 1px solid blue; */

  .read-receipt-content-info {
    width: 100%;
    /* border: 1px solid blue; */
    display: flex;
    align-items: center;
    height: 4rem;
    .writeup {
      height: auto;
      /* border: 1px solid red; */
      padding-left: 2rem;
      flex: 5;

      .label {
        font-size: 0.95rem;
        color: #415059;
        font-weight: 500;
      }
      .condition {
        color: #b08c85;
        font-size: 0.9rem;
      }
    }
    .clickIconCheckbox {
      height: 2rem;
      flex: 1;
      /* margin-right: 2rem; */
      display: flex;
      justify-content: flex-end;
      /* border: 1px solid yellow; */
    }
  }
`;

export const StyledDisappearingMsg = styled.div`
  height: 120px;
  width: 100%;
  border: 1px solid yellow;
  border-top: 1px solid #e5e7ea;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.8rem 2rem;
  border-bottom: 1px solid #e5e7ea;

  .header {
    color: #4a826e;
    font-size: 1rem;
  }
  .actionCont {
    width: 100%;
    /* border: 1px solid yellow; */
    display: flex;
    justify-content: space-between;
    .actionDesc {
      font-size: 1rem;
      color: #805559;
    }
    div p {
      color: #4a826e;
      font-size: 0.9rem;
    }
  }
`;
export const StyledGroups = styled.div`
  border-top: 1px solid #e5e7ea;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  height: auto;
  width: 100%;
  border-bottom: 1px solid #e5e7ea;

  /* border: 1px solid red; */
  .cont1 {
    padding: 1.4rem 2rem;

    display: flex;
    justify-content: space-between;
    /* margin-bottom: 1rem; */

    .styled-grp-content {
      span {
        color: #544d6a;
        font-size: 1rem;
      }
      p {
        font-size: 0.9rem;
        color: #667781;
      }
    }
    .contentIcon {
      /* border: 1px solid red; */
      display: flex;
      align-items: flex-end;
    }
  }
  .cont2 {
    padding: 1.4rem 2rem;

    display: flex;
    justify-content: space-between;
    /* margin-top: 1rem; */

    .styled-grp-content {
      span {
        color: #544d6a;
        font-size: 1rem;
      }
      p {
        font-size: 0.9rem;
        color: #667781;
      }
    }
    .contentIcon {
      /* border: 1px solid red; */
      display: flex;
      align-items: flex-end;
    }
  }
`;
