import React from "react";
import "./InputField.scss";
import { FormFeedback, Input } from "reactstrap";
import { ErrorMessage } from "formik";
function InputField(props) {
  const { field, type, form, label, placeholder, disabled } = props;
  const { name, value, onChange, onBlur } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  return (
    <div className="inputField__input-group ">
      {/*  type={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur} ======== {...field} */}
      <Input
        id={name}
        {...field}
        className={"inputField__form-input"}
        placeholder={placeholder}
        type={type}
        form={form}
        disabled={disabled}
        invalid={showError}
      />
      {/* {showError && <FormFeedback>{errors[name]}</FormFeedback>} */}
      {/* {form.touched.ctName && form.errors.ctName && (
        <div style={{ color: "red" }}>{form.errors.ctName}</div>
      )} */}
      <ErrorMessage name={name} component={FormFeedback} />

      {label ? (
        <label
          // htmlfor={name}
          className={`${value.length ? "shrink" : ""} inputField__label`}
        >
          {label}
        </label>
      ) : (
        ""
      )}
    </div>
  );
}

export default InputField;
