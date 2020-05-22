import React from "react";
// import "./signUpPage.scss";
import signup from "../../assets/images/signup.jpg";
import logo from "./../../assets/images/logo.png";
import SignUp from "../../components/SignUp";
import { Link } from "react-router-dom";
// import "./signUpPage.scss";
function SignUpPage(props) {
  return (
    <div className="signIn">
      <div className="gird">
        <div className="row">
          <div className="l-6 m-12 c-12">
            <div className="signIn__wrap-img">
              <img src={signup} alt="" className="signIn__img" />
            </div>
          </div>
          <div className="l-6 m-12 c-12">
            <div className="signIn__content">
              <div className="signIn__content-img">
                <img src={logo} alt="" />
              </div>
              <div className="signIn__content-info">
                <h3 className="signIn__content-heading">
                  Open up your Strax Account now
                </h3>
                <p className="signIn__content-desc">
                  Already signed up?{" "}
                  <Link to="/signIn" className="signIn__content-signUp">
                    Sign In
                  </Link>
                </p>
              </div>
              <SignUp />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
