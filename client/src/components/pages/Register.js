import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const RegisterSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Please Enter a valid email."),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .required("Password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

function Register(props) {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      onSubmitForm();
    },
    validationSchema: RegisterSchema,
  });

  const onSubmitForm = () => {
    let userInfo = JSON.parse(localStorage.getItem("userData"));
    let newData;
    if (userInfo && userInfo?.length) {
      newData = [...userInfo, formik.values];
    } else {
      newData = [formik.values];
    }
    localStorage.setItem("userData", JSON.stringify(newData));
    alert("Registeration Successful, Please Login to verify");
    navigate("/");
  };


  return (
    <div className="wrapper">
      <div className="title-wrapper">
        <p> Bits Cloud Authentication Registeration</p>
      </div>

      <TextField
        label="Enter Email"
        style={{ margin: 20, width: "30%" }}
        value={formik.values.email}
        onChange={(e) => formik.setFieldValue("email", e.target.value.trim())}
        helperText={formik.touched.email && formik.errors.email}
        error={Boolean(formik.errors.email && formik.touched.email)}
      />

      <TextField
        label="Enter Password"
        type="password"
        style={{ margin: 20, width: "30%" }}
        value={formik.values.password}
        onChange={(e) => {
          formik.setFieldValue("password", e.target.value);
        }}
        helperText={formik.touched.password && formik.errors.password}
        error={Boolean(formik.errors.password && formik.touched.password)}
      />

      <TextField
        label="Re-Enter Password"
        type="password"
        style={{ margin: 20, width: "30%" }}
        value={formik.values.confirmPassword}
        onChange={(e) => {
          formik.setFieldValue("confirmPassword", e.target.value);
        }}
        helperText={
          formik.touched.confirmPassword && formik.errors.confirmPassword
        }
        error={Boolean(
          formik.errors.confirmPassword && formik.touched.confirmPassword
        )}
      />
      <Button variant="contained" onClick={formik.handleSubmit}>
        Register
      </Button>
    </div>
  );
}

export default Register;
