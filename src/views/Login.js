import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { GoogleLogin } from "react-google-login";
import * as yup from "yup";
import axios from "axios";
import Header from "../components/Header";

const LoginValidation = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
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
                console.log(process.env.REACT_APP_API_URL);

                axios({
                  method: "post",
                  url: `${process.env.REACT_APP_API_URL}login`,
                  data: {
                    email: values.email,
                    password: values.password,
                  },
                });
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

                  <div className="form-group w-100">
                    <button
                      type="submit"
                      className="btn btn-primary w-100 mt-3"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Please wait..." : "Submit"}
                    </button>
                  </div>
                  <div className="form-group w-100">
                    <button
                      type="submit"
                      className="btn btn-secondary w-100 mt-3"
                    >
                      Signup
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
