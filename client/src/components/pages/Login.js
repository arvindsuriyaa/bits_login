import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import "../../styles/login.css";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string().required("email is required").email("Please enter valid email."),
  password: Yup.string().required("Password is required"),
});

function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      onSubmitForm();
    },
    validationSchema: LoginSchema,
  });

  const onSubmitForm = () => {
    let userInfo = JSON.parse(localStorage.getItem("userData"));
    let details = userInfo?.filter((item) => item.email === formik.values.email);

    console.log('details: ', details);
    if (details?.length) {
      alert("Valid Credentials");
      return;
    }

    alert("Invalid Credential. Please Sign Up");
  };


  return (
    <div className="wrapper">
      <div className="title-wrapper">
        <p> Bits Cloud Authentication</p>
      </div>

      <TextField
        label="Enter email"
        style={{ margin: 20, width: "30%" }}
        value={formik.values.email}
        onChange={(e) => formik.setFieldValue("email", e.target.value.trim())}
        helperText={formik.errors.email}
        error={Boolean(formik.errors.email)}
      />

      <TextField
        label="Enter Password"
        type="password"
        style={{ margin: 20, width: "30%" }}
        value={formik.values.password}
        onChange={(e) => {
          formik.setFieldValue("password", e.target.value);
        }}
        helperText={formik.errors.password}
        error={Boolean(formik.errors.password)}
      />
      <Button variant="contained" onClick={formik.handleSubmit}>
        Login
      </Button>
      <Link to="register" style={{ marginTop: 50 }}>
        Click here to register
      </Link>
    </div>
  );
}

export default Login;
