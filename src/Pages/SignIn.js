import React, { useEffect, useState } from "react";
import "../CSS/signin.css";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sessionUser, setSessionUser] = useState("");
  const navigate = useNavigate();

  const handleCallbackResponse = (response) => {
    setSessionUser(jwt_decode(response.credential));
    sessionStorage.setItem(
      "user",
      JSON.stringify(jwt_decode(response.credential))
    );
  };
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "136067645138-rdbjjrtp1de3ij9hjevjsdnm4d8v8nv6.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("signInBtn"), {
      theme: "outline",
      size: "large",
    });
    google.accounts.id.prompt();
  }, []);

  const handleSubmit = () => {
    if (email === "keshav@gmail.com" && password === "keshav") {
      navigate("/dashboard");
      setSessionUser({ email: email });
      sessionStorage.setItem("user", JSON.stringify(sessionUser));
    }
  };
  useEffect(() => {
    if (Object.keys(sessionUser).length != 0) {
      navigate("/dashboard");
    }
  }, [sessionUser]);
  return (
    <>
      <div className="row">
        <div className="col-4 leftContainer">Board.</div>
        <div className="col-8 rightContainer">
          <div className="rightInnerContainer">
            <div className="signInTitle">Sign In</div>
            <div className="signInSubTitle">Sign in to your account</div>
            <div className="authButtonContainer">
              <div id="signInBtn"></div>
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
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="label">Password</div>
              <input
                type="password"
                placeholder="password"
                className="input"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="forgotPassword">Forgot password?</div>
              <button
                type="submit"
                className="submitBtn"
                onClick={handleSubmit}
              >
                Sign In
              </button>
            </form>
            <div className="title">
              Don't have an account?{" "}
              <span style={{ color: "#346BD4", cursor: "pointer" }}>
                Register here
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
