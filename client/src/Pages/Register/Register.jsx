import React, { useState, useEffect } from 'react';
import { StyledRegisterCont } from './style';
import Button from '@mui/material/Button';
import { useDispatch, useSelector, connect } from 'react-redux';
// import { login } from "../../Redux-State/actionCreators/fetchRequestActions";
import HOME from '../Home/Home';
function Register({ userData, login }) {
  const [currentUser, setCurrentUser] = useState(null);
  // let dispatch = useDispatch();
  // const { user } = useSelector((state) => state);

  useEffect(() => {
    login();
    // console.log(user.loading);

    // setCurrentUser(userData);
  }, []);
  function clickHandler() {
    console.log(userData.error);
  }
  return userData.loading ? (
    <h1>LOADING</h1>
  ) : userData.error ? (
    <h1>{userData.error}</h1>
  ) : userData.data._id ? (
    <HOME loggedUser={userData.data} />
  ) : (
    <StyledRegisterCont>
      <h1>login</h1>
      <Button variant="contained" onClick={clickHandler}>
        Contained
      </Button>
    </StyledRegisterCont>
  );
}
const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    // login: () => dispatch(login()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);
