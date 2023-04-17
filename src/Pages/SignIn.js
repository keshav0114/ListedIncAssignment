import React from "react";
import "../CSS/signin.css";
import { useAuth0 } from "@auth0/auth0-react";

const SignIn = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <>
      <div className="row">
        <div className="col-4 leftContainer">Board.</div>
        <div className="col-8 rightContainer">
          <div className="rightInnerContainer">
            <div className="signInTitle">Sign In</div>
            <div className="signInSubTitle">Sign in to your account</div>
            <button onClick={() => loginWithRedirect()}>Log In</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
