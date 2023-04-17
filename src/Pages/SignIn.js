import React from "react";
import "../CSS/signin.css";

const SignIn = () => {
  return (
    <>
      <div className="row">
        <div className="col-4 leftContainer">Board.</div>
        <div className="col-8 rightContainer">
          <div className="rightInnerContainer">
            <div className="signInTitle">Sign In</div>
            <div className="signInSubTitle">Sign in to your account</div>
            <div className="authButtonContainer">
              <button className="btn">Sign in with Google</button>
              <button className="btn">
                <div className="btnInnerContainer">
                  <img
                    src="/assets/AppleIcon.svg"
                    alt="appleicon"
                    className="appleIcon"
                  />
                  Sign in with Apple
                </div>
              </button>
            </div>
            <form className="signInFormContainer">
              <div className="label">Email address</div>
              <input
                type="email"
                placeholder="john@example.com"
                className="input"
              />
              <div className="label">Password</div>
              <input
                type="password"
                placeholder="john@example.com"
                className="input"
              />
              <div className="forgotPassword">Forgot password?</div>
              <button type="submit" className="submitBtn">
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
