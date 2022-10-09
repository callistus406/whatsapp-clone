import './Login.css';
import { connect } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { userLogin } from '../../Redux-State/actionCreators/fetchRequestActions';
import Home from '../Home/Home';
import axios from 'axios';

function Login(props) {
  // const [userInfo, setUserData] = useState([]);
  const [error, setError] = useState([]);

  // useEffect(() => {
  //   props.userLogin('general admin', '2345433264321');
  // }, []);

  const inputUsername = useRef(null);
  const inputPhone = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    props.userLogin(inputUsername.current.value, inputPhone.current.value);
    console.log(props.userInfo.data);
  };

  return props.userInfo.loading ? (
    <h1>LOADING</h1>
  ) : props.userInfo.error ? (
    <h1>ERROR OCCURRED</h1>
  ) : props.userInfo.data.success ? (
    <Home loggedUser={props.userInfo.data.user} />
  ) : (
    <div>
      <div className="center">
        <h1>Login</h1>
        <form method="post">
          <div className="txt_field">
            <input type="text" required ref={inputUsername} />
            <span></span>
            <label>Username</label>
          </div>
          <div className="txt_field">
            <input type="text" required ref={inputPhone} />
            <span></span>
            <label>Phone</label>
          </div>
          <div className="pass">Forgot Password?</div>

          <input type="submit" value="Login" onClick={handleSubmit} />
          <div className="singup_link">
            Not a member? <a href="">Singup</a>
          </div>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.login,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (username, phone) => dispatch(userLogin(username, phone)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
// export default Login;
