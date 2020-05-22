import React, { useState } from "react";
import facebook from "./../../assets/images/facebook.svg";
import google from "./../../assets/images/google.svg";
import "./signUp.scss";
import { useDispatch } from "react-redux";
import * as actions from "../../actions";
import { useHistory } from "react-router-dom";
function SignUp(props) {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    comfirmPassword: "",
    errors: [],
    checkError: false,
  });
  const history = useHistory();

  const dispatch = useDispatch();
  function isValidateForm() {
    if (!inputValue.password) {
      inputValue.errors.push("Vui lòng nhập mật khẩu");
    }
    if (!inputValue.comfirmPassword) {
      inputValue.errors.push("Vui lòng nhập xác nhận Password");
    }
    if (inputValue.password !== inputValue.comfirmPassword) {
      inputValue.errors.push("Passowrd không trùng hợp");
    }
    if (!isValidateEmail(inputValue.email)) {
      inputValue.errors.push("Email không đúng định dạng");
    }
    if (!inputValue.errors.length) {
      inputValue.checkError = true;
    }
  }
  function isValidateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(inputValue.email).toLowerCase());
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // axios.post("/api/user", { user: inputValue });

    // action
    inputValue.errors = [];
    isValidateForm();
    const action = actions.userSignUpForm(inputValue);
    // console.log(inputValue.errors);
    if (inputValue.checkError === true) {
      dispatch(action);
      history.push("/");
    } else {
      setInputValue({
        ...inputValue,
        errors: inputValue.errors,
      });
    }
  }
  const errorList = inputValue.errors.map((err, index) => {
    return (
      <ul key={index}>
        <li style={{ color: "red" }} className="error">
          {err}
        </li>
      </ul>
    );
  });
  return (
    <div className="signIn__content-form">
      <form action="" className="signIn__form" onSubmit={handleSubmit}>
        {errorList}
        <div className="signIn__content-form-group">
          <input
            type="email"
            name="email"
            value={inputValue.email}
            onChange={handleChange}
            className="signIn__content-form-input"
            placeholder="Your email address"
          />
        </div>
        <div className="signIn__content-form-group">
          <input
            type="password"
            name="password"
            value={inputValue.password}
            onChange={handleChange}
            className="signIn__content-form-input"
            placeholder="create a password"
          />
        </div>
        <div className="signIn__content-form-group">
          <input
            type="password"
            name="comfirmPassword"
            value={inputValue.comfirmPassword}
            onChange={handleChange}
            className="signIn__content-form-input"
            placeholder="confirm a password"
          />
        </div>
        <button className="signIn__content-btn">
          <i className="far fa-arrow-alt-circle-right"></i> Sign Up
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
  );
}

export default SignUp;
