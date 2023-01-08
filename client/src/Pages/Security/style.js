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

export const StyledSecurityHeader = styled.div`
  height: 6.5rem;
  /* border: 1px solid blue; */
  /* position: absolute; */
  background: #008069;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
export const StyledSecurityContent = styled.div`
  height: calc(100vh - 6.5rem);
  /* border: 1px solid red; */
  /* margin-bottom: 3rem; */
  height: auto;
  width: ${(props) => (props.toggle ? props.width : 0)};
  /* background: #ededed; */
  display: ${(props) => (props.toggle ? 'block' : 'none')};
  /* margin-top: 4px; */
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
    height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icon {
    width: 150px;
    height: 150px;
    /* border: 1px solid blue; */
    border-radius: 50%;
    display: flex;
    align-self: center;
    justify-content: center;
  }
`;

export const StyledSecurityLinksContainer = styled.div`
  ${'' /* calc 100vh-6.5rem - 200px */}
  height: calc((100vh - 10rem) - 107px);

  background-color: #fff;
  .header {
    margin-left: 2rem;
    margin-bottom: 1rem;
    color: #3b4a54;
    font-weight: 500;
  }
  .border {
    ${'' /* height: 1px; */}
    border: 1px solid #F2F2F2;
    width: 94.5%;
    margin-left: auto;
  }
`;

export const StyledSecurityTextContainer = styled.div`
  width: 100%;
  height: auto;
  ${'' /* border: 1px solid blue; */}
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .para {
    padding-left: 2rem;
    color: #3b4a54;
    color: #8a99a6;
    font-size: 0.95rem;

    ${'' /* font-size: 1.1rem; */}
    a {
      text-decoration: none;
      color: #0881b7;
    }
  }
`;
export const StyledShowSecurityNotification = styled.div`
  width: 100%;
  height: auto;
  ${'' /* border: 1px solid blue; */}
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  .info {
    height: 120px;
  }
  p {
    width: 80%;
    color: #93a1aa;
    margin-left: 2rem;
    font-size: 0.95rem;

    a {
      text-decoration: none;
      color: #0881b7;
    }
  }
`;

export const StyledEncryptionList = styled.div`
  height: auto;
  width: 100%;
  /* border: 1px solid blue; */
  margin-top: 1rem;
  padding: 0 2rem;
  color: #a599af;
  .encryptionCont {
    width: 100%;
    height: 3rem;
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    /* flex-direction: column; */
    gap: 1.2rem;
  }
  a {
    text-decoration: none;
    font-size: 0.9rem;
    color: #5384ba;
    font-weight: 400;
  }
`;

export const StyledBorderBottom = styled.div`
  /* display:  */
  margin-top: 2rem;
  border: 1px solid #e9edef;
  margin-left: auto;
  width: 90%;
`;
