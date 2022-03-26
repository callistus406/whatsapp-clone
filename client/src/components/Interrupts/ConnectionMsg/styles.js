import styled from "styled-components";

export const StyledContainer = styled.div`
  background-color: #f0f2f5;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  .dialog {
    background-color: #fff;
    border-radius: 5px;
    width: 400px;
    height: 127px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 1.2rem 0;
    box-shadow: 0 17px 50px 0 rgba(0, 0, 0, 0.19),
      0 12px 15px 0 rgba(0, 0, 0, 0.24);
    .msg {
      ${"" /* border:1px solid blue; */}
      width: 100%;
      height: auto;
      padding: 0 1.7rem;
    }
    h3 {
      font-weight: 500;
      font-size: 1.2rem;
      color: #3b4a54;
    }
    p {
      color: #48565f;
    }
  }
`;
