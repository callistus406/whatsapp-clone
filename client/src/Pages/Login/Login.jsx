import "./Login.css";
import { connect } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { userLogin } from "../../Redux-State/actionCreators/fetchRequestActions";
import Home from "../Home/Home";
import axios from "axios";

function Login(props) {
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState([]);

  // useEffect(() => {
  //   props.userLogin("general admin", "2345433264321");
  // }, []);

  const inputUsername = useRef(null);
  const inputPhone = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:3300/api/v1/login`, {
        username: inputUsername.current.value,
        phone: inputPhone.current.value,
      })
      .then((response) => {
        const user = response.data;
        console.log(user);
        setUserData(user);
      })
      .catch((error) => {
        const errorMsg = error.message;
        setError(errorMsg);
      });
    // props.userLogin(inputUsername.current.value, inputPhone.current.value);
  };

  if (userData.length < 1) {
    return <h1>LOADING</h1>;
  } else if (error) {
    return <h1>AN error OCCURRED</h1>;
  } else if (userData.length > 0) {
    return <Home />;
  } else {
    return (
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

  // return props.userData.loading ? (
  //   <h1>LOADING</h1>
  // ) : props.userData.error ? (
  //   <h1>ERROR OCCURRED</h1>
  // ) : !props.userData.loading ? (
  //   <Home loggedUser={props.userData.data} />
  // ) : (
  //   <div>
  //     <div className="center">
  //       <h1>Login</h1>
  //       <form method="post">
  //         <div className="txt_field">
  //           <input type="text" required ref={inputUsername} />
  //           <span></span>
  //           <label>Username</label>
  //         </div>
  //         <div className="txt_field">
  //           <input type="text" required ref={inputPhone} />
  //           <span></span>
  //           <label>Phone</label>
  //         </div>
  //         <div className="pass">Forgot Password?</div>

  //         <input type="submit" value="Login" onClick={handleSubmit} />
  //         <div className="singup_link">
  //           Not a member? <a href="">Singup</a>
  //         </div>
  //       </form>
  //     </div>
  //   </div>
  // );
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.login.data,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (username, phone) => dispatch(userLogin(username, phone)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
// export default Login;
