import React from "react";
import "./signUp.scss";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { register, showLoading, hideLoading } from "../../actions";
import * as Yup from "yup";
import { useFormik } from "formik";
import PATHS from "../../contants/paths";
function SignUp(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: { email: "", password: "", confirmPassword: "" },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(6, "Phải có ít nhất 6 ký tự và nhiều nhất 15 ký tự")
        .max(15, "Bạn đã vượt quá 15 ký tự")
        .required("Bạn không được để trống"),
      confirmPassword: Yup.string()
        .min(6, "Phải có ít nhất 6 ký tự và nhiều nhất 15 ký tự")
        .max(15, "Bạn đã vượt quá 15 ký tự")
        .required("Bạn không được để trống"),
      email: Yup.string()
        .email("Email không đúng cú pháp")
        .required("Bạn không được để trống"),
    }),
    onSubmit: (values) => {
      // console.log(values);
      dispatch(showLoading());
      setTimeout(() => {
        return dispatch(register(values))
          .then((res) => {
            dispatch(hideLoading());
            history.push(PATHS.SIGNIN);
          })
          .catch((err) => {
            dispatch(hideLoading());
          });
      }, 500);
    },
  });

  return (
    <div className="signIn__content-form">
      <form onSubmit={formik.handleSubmit}>
        <div className="signIn__content-form-group">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`signIn__content-form-input error ${
              formik.errors.email && formik.touched.email
            }`}
          />
        </div>
        {formik.errors.email && formik.touched.email && (
          <div className="input-feedback">{formik.errors.email}</div>
        )}
        <div className="signIn__content-form-group">
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`signIn__content-form-input error ${
              formik.errors.password && formik.touched.password
            }`}
          />
        </div>
        {formik.errors.password && formik.touched.password && (
          <div className="input-feedback">{formik.errors.password}</div>
        )}
        <div className="signIn__content-form-group">
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Enter your confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`signIn__content-form-input error ${
              formik.errors.confirmPassword && formik.touched.confirmPassword
            }`}
          />
        </div>
        {formik.errors.confirmPassword && formik.touched.confirmPassword && (
          <div className="input-feedback">{formik.errors.confirmPassword}</div>
        )}
        <button className="signIn__content-btn">
          <i className="far fa-arrow-alt-circle-right"></i> Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
