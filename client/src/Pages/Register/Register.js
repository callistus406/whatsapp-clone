import React, { useState, useEffect } from "react";
import { StyledRegisterCont } from "./style";
import Button from "@mui/material/Button";
import { useDispatch, useSelector, connect } from "react-redux";
import { fetchUser } from "../../Redux-State/actionCreators/fetchRequestActions";
import HOME from "../Home/Home";
function Register({ fetchUser, userData }) {
  const { user } = useSelector((state) => state.user);
  const [currentUser, setCurrentUser] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchUser();
    if (userData) {
      // console.log(currentUser);
      setCurrentUser(userData);
    }
  }, []);
  function clickHandler() {
    console.log(userData);
  }
  return (
    <>
      {currentUser ? (
        <HOME />
      ) : (
        <StyledRegisterCont>
          <h1>login</h1>
          <Button variant="contained" onClick={clickHandler}>
            Contained
          </Button>
        </StyledRegisterCont>
      )}
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => dispatch(fetchUser()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);
