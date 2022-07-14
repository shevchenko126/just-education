import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

const Just67_login = () => {
  return (
    <div className="container login__wrapper">
      <h1 className="login__title">Login</h1>
      <div className="login__breadcrums">
        <span id="breadcrumsHome">Home</span>
        <span> / </span>
        <span id="breadcrumsLogin">Login</span>
      </div>
      <h2 className="login__intro">Log In to Your Skola Account!</h2>
      <form action="get" className="form login__form">
        <div>
          <label>Username or Email</label>
        </div>
        <input type="text" placeholder="creativelayers" id="usernameOrEmail" />
        <div>
          <label>Password</label>
        </div>
        <input type="password" placeholder="password" id="password" />

        <div className="login__remeber_forgot">
          <div className="login__remember">
            <form className="form-check">
              <input
                className="form-check-input login__checkbox_rememberMe"
                type="checkbox"
                value=""
                id="RememerMe"
              />
              <label
                className="form-check-label login__remeber"
                for="loginRememerMe"
              >
                Remember me
              </label>
            </form>
          </div>
          <div className="login__forgot">
            Forgot{" "}
            <a href="#" id="link_ForgotPassword">
              Password
            </a>
          </div>
        </div>

        <button id="loginButton">LOGIN</button>
      </form>
      <div className="login__link_signup">
        Don't have an account?
        <a href="#">Sign up</a>
      </div>
    </div>
  );
};

export default Just67_login;
