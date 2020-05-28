import React from "react";
import "./signIn.scss";
import { useDispatch, useSelector } from "react-redux";
import { login, showLoading, hideLoading } from "../../actions";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import PATHS from "../../contants/paths";
import { useFormik } from "formik";

function SignIn() {
  const dispatch = useDispatch();
  const history = useHistory();
  // const token = useSelector((state) => state.auth.token);
  // console.log(token);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
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
        const action = login(values);
        dispatch(action)
          .then((res) => {
            dispatch(hideLoading());
            history.push(PATHS.HOMEPAGE);
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

        <button className="signIn__content-btn">
          <i className="far fa-arrow-alt-circle-right"></i> Sign In
        </button>
      </form>
    </div>
  );
}

export default SignIn;
