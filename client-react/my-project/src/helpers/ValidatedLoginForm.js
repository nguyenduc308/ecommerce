import React from "react";
import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";
const ValidatedLoginForm = () => (
  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(true);
      }, 5000);
    }}
    validationSchema={Yup.object().shape({
      email: Yup.string().email().required("Không được để trống"),
      password: Yup.string()
        .required("Chưa nhập mật khẩu.")
        .min(6, "Mật khẩu quá ngắn - ít nhất phải 6 ký tự."),
      // .matches(/(?=.*[0-9])/, "Mật khẩu phải chứa nhất một số.")
    })}
  >
    {(props) => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
      } = props;
      return (
        <form onSubmit={handleSubmit}>
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`signIn__content-form-input error ${
              errors.email && touched.email
            }`}
          />
          {errors.email && touched.email && (
            <div className="input-feedback">{errors.email}</div>
          )}
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`signIn__content-form-input error ${
              errors.password && touched.password
            }`}
          />
          {errors.password && touched.password && (
            <div className="input-feedback">{errors.password}</div>
          )}
          <button className="signIn__content-btn">
            <i className="far fa-arrow-alt-circle-right"></i> Sign In
          </button>
          {/* <span className="signIn__content-or">OR</span>
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
          </div> */}
        </form>
      );
    }}
  </Formik>
);

export default ValidatedLoginForm;
