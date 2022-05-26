import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { GoogleLogin } from "react-google-login";
import * as yup from "yup";
import axios from "axios";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const LoginValidation = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});
const Signup = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-6">ss</div>
          <div className="col-6">
            <h3>Get’s started.</h3>
            <p>
              already have an account? <Link to="/login">log in</Link>
            </p>
            {/* <GoogleLogin
            clientId="914297540412-g1bbqvf3ifp5g0mtl4e767kcbqvb586p.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          /> */}
            <Formik
              initialValues={{ email: "", password: "", name: "" }}
              validationSchema={LoginValidation}
              onSubmit={(values, { setSubmitting }) => {
                console.log(process.env.REACT_APP_API_URL);

                axios({
                  method: "post",
                  url: `${process.env.REACT_APP_API_URL}login`,
                  data: {
                    email: values.email,
                    password: values.password,
                    name: values.name,
                  },
                });
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <Field name="name" className="form-control" type="text" />
                    <ErrorMessage name="name" />
                  </div>
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
                    >
                      Login
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

export default Signup;
