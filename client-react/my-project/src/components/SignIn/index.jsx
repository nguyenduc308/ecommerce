import React, { useState } from "react";
import signup from "./../../assets/images/signup.jpg";
import logo from "./../../assets/images/logo.png";
import facebook from "./../../assets/images/facebook.svg";
import google from "./../../assets/images/google.svg";
import { Link } from "react-router-dom";

import "./signIn.scss";
function SignIn(props) {
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
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
                <h3 className="signIn__content-heading">Welcome To Back</h3>
                <p className="signIn__content-desc">
                  Already signed up?{" "}
                  <Link to="/signUp" className="signIn__content-signUp">
                    Sign Up
                  </Link>
                </p>
              </div>
              <div className="signIn__content-form">
                <form action="" className="signIn__form">
                  <div className="signIn__content-form-g roup">
                    <input
                      type="email"
                      className="signIn__content-form-input"
                      placeholder="Your email address"
                    />
                  </div>
                  <div className="signIn__content-form-group">
                    <input
                      type="password"
                      className="signIn__content-form-input"
                      placeholder="create a password"
                    />
                  </div>

                  <button className="signIn__content-btn">
                    <i className="far fa-arrow-alt-circle-right"></i> Sign In
                  </button>
                  <span className="signIn__content-or">OR</span>
                  <div className="signIn__content-controls">
                    <button className="signIn__content-controls-fb">
                      <span className="signIn__content-controls-fb-icon">
                        <img src={facebook} alt="" />
                      </span>
                      <span className="signIn__content-controls-fb-name">
                        Connect with Facebook
                      </span>
                    </button>
                    <button className="signIn__content-controls-gg">
                      <span className="signIn__content-controls-gg-icon">
                        <img src={google} alt="" />
                      </span>
                      <span className="signIn__content-controls-gg-name">
                        Connect with Google
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
