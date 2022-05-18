import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { GoogleLogin } from "react-google-login";
import * as yup from "yup";
import axios from "axios";
import Header from "../components/Header";

const LoginValidation = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(8)
    .max(10)
    .matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]$")
    .required(),
});

const Login = () => {
  console.log(process.env.REACT_APP_API_URL);
  const responseGoogle = (response) => {
    console.log(response);
  };
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-6">ss</div>
          <div className="col-6">
            <h3>Get’s started.</h3>
            <p>already have an account? log in</p>
            {/* <GoogleLogin
            clientId="914297540412-g1bbqvf3ifp5g0mtl4e767kcbqvb586p.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          /> */}
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={LoginValidation}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 1000);
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="form-group">
                    <label htmlFor="username">Email</label>
                    <Field name="email" className="form-control" type="text" />
                    <ErrorMessage name="email" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">passwors</label>
                    <Field
                      name="password"
                      className="form-control"
                      type="password"
                    />
                    <ErrorMessage name="password" />
                  </div>

                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Please wait..." : "Submit"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
