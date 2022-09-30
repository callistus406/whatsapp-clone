import "./Login.css";

function Login() {
  return (
    <div>
      <div class="center">
        <h1>Filmex Medya</h1>
        <form method="post">
          <div class="txt_field">
            <input type="text" required />
            <span></span>
            <label>Username</label>
          </div>
          <div class="txt_field">
            <input type="password" required />
            <span></span>
            <label>Password</label>
          </div>
          <div class="pass">Forgot Password?</div>

          <input type="submit" value="Login" />
          <div class="singup_link">
            Not a member? <a href="">Singup</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
