import "./Login.css";
import { connect } from "react-redux";
import { useEffect, useRef } from "react";
import { login } from "../../Redux-State/actionCreators/fetchRequestActions";
import Home from "../Home/Home";

function Login(props) {
  //   useEffect(() => {
  //   }, []);

  const inputUsername = useRef(null);
  const inputPhone = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    props.login(inputUsername.current.value, inputPhone.current.value);
    console.log(props.userData);
  };
  return props.userData.loading ? (
    <h1>LOADING</h1>
  ) : props.userData.error ? (
    <h1>ERROR OCCURRED</h1>
  ) : props.userData.data._id ? (
    <Home loggedUser={props.userData.data} />
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
    userData: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, phone) => dispatch(login(username, phone)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
// export default Login;
