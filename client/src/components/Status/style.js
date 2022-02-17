import styled from "styled-components";
export const StyledStatusContainer = styled.div`
  display: ${(props) => (props.toggle ? "flex" : "none")};
  position: fixed;
  z-index: 1;
  width: 100%;
  ${
    "" /* height: 100%; 
  top: 0;  left: 0;
  background-color: #fff;
  overflow-x: hidden; 
  transition: 0.5s; */
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 5px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    height: 10px;

    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #555;
  }

  .scroll {
    height: 79vh;
    overflow-x: hidden;
    overflow-y: auto;
    text-align: justify;
    cursor: pointer;
  }
  .statusCol1 {
    margin: 4px, 4px;
    padding: 4px;
    background-color: #141414;
    min-width: 28rem;
    /* height: 100vh; */
    overflow-x: hidden;
    overflow-y: auto;
    text-align: justify;
  }
`;

export const StyledStatusColOne = styled.div`
  margin: 4px, 4px;
  padding: 4px;
  background-color: #141414;
  min-width: 28rem;
  /* height: 100vh; */
  overflow-x: hidden;
  overflow-y: auto;
  text-align: justify;
  .recent {
    margin-bottom: 1rem;

    border-top: 1px solid #434343;

    p {
      color: #b3b3b3;
      margin-left: 1rem;
      margin-top: 0.5rem;
      text-transform: uppercase;
      font-size: 0.8rem;
      font-weight: 500;
      margin-bottom: 1rem;
      /* border-top: 1px solid #434343; */
    }
  }
`;

export const StyledStatusHeader = styled.div`
  height: 7rem;
  width: 25rem;
  display: flex;
  align-items: center;
  margin-left: 1rem;
  /* border: 1px solid blue; */
  .profileImageCont {
    height: 60px;
    width: 60px;
    /* border: 1px solid blue; */
    display: flex;
    justify-content: center;
    align-items: center;
    .profileImage {
      height: 40px;
      width: 40px;
      border-radius: 50%;
      background: #fff;
    }
  }
  .content {
    height: 70px;
    width: 20rem;
    ${"" /* border: 1px solid blue; */}
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-left: 1rem;
    p {
      margin-bottom: 0.5rem;
      color: #b5f0f7;
    }
    span {
      margin-bottom: 0.5rem;
      color: #4e7a90;
      font-size: 0.9rem;
    }
  }
`;

export const StyledStatusNotification = styled.div`
  height: 4rem;
  width: 100%;
  /* border: 1px solid #434343; */
  display: flex;
  /* justify-content: center; */
  align-items: center;

  &:hover {
    background: #262626;
    cursor: pointer;
  }
  .statusImageCont {
    height: 60px;
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    .statusImage {
      height: 40px;
      width: 40px;
      border-radius: 50%;
      background: #fff;
    }
  }
  .statusContactInfo {
    width: 18rem;
    height: 4rem;
    /* border: 1px solid blue; */
    display: flex;
    justify-content: center;
    flex-direction: column;
    h3 {
      color: #ffffff;
      margin-bottom: 0.5rem;
      font-size: 1.1rem;
      font-weight: 300;
    }
    span {
      color: #4e7a90;
      font-size: 1rem;
      .time {
        font-size: 0.95rem;
      }
    }
  }
`;
export const StyledStatusColTwoLayout = styled.div`
  width: 100%;
  height: 100vh;

  background-color: #000;
  .statusCancelIcon {
    ${"" /* width: 100%; */}
    ${"" /* border: 1px solid white; */}
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 1.5rem;
    .icon {
      cursor: pointer;
    }
  }
`;
export const StyledStatusColTwo = styled.div`
  width: 100%;
  /* background-color: rgb(106, 43, 43); */
  height: 100vh;
  /* border: 1px solid blue; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  display: flex;
  /* justify-content: space-around; */
  flex-direction: column;
  align-items: center;

  .placeholder {
    width: 25rem;
    height: 12rem;
    /* border: 1px solid blue; */
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    p {
      color: #ffffff8c;
      font-weight: 500;
    }
  }
`;
