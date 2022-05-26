import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { GoogleLogin } from "react-google-login";
import * as yup from "yup";
import axios from "axios";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const SellerKYC = () => {
  return (
    <div>
      <Header />
      <div className="sellerkyc">
        <div className="panel">
          <div className="title">Director kyc</div>
          <div className="section">
            <div class="row pt-3">
              <div class="col-4">
                <input
                  type="text"
                  class="form-control"
                  placeholder="First name"
                  aria-label="First name"
                />
              </div>
              <div class="col-4">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Middle name"
                  aria-label="Middle name"
                />
              </div>
              <div class="col-4">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last name"
                  aria-label="Last name"
                />
              </div>
            </div>
            <div class="row pt-3">
              <div class="col-4">
                <input
                  type="text"
                  class="form-control"
                  placeholder="enter your email id"
                  aria-label="enter your email id"
                />
              </div>
              <div class="col-4">
                <input
                  type="text"
                  class="form-control"
                  placeholder="enter your mobile number"
                  aria-label="enter your mobile number"
                />
              </div>
            </div>
            <div class="row pt-3">
              <div class="col-4">
                <input
                  type="text"
                  class="form-control"
                  placeholder="enter your adhaar number"
                  aria-label="enter your adhaar number"
                />
              </div>
              <div class="col-4">
                <input
                  type="text"
                  class="form-control"
                  placeholder="enter your mobile number"
                  aria-label="enter your mobile number"
                />
              </div>
            </div>
            <div class="row pt-3">
              <div class="col-4">
                <input
                  type="text"
                  class="form-control"
                  placeholder="enter your pan card number"
                  aria-label="enter your pan card number"
                />
              </div>
              <div class="col-4">
                <input
                  type="text"
                  class="form-control"
                  placeholder="enter your mobile number"
                  aria-label="enter your mobile number"
                />
              </div>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <button class="btn btn-light me-md-2 border" type="button">
                Save
              </button>
              <button class="btn btn-dark border" type="button">
                Add director
              </button>
            </div>
          </div>
        </div>
        <div className="panel">
          <div className="title">company kyc</div>
          <div className="section"></div>
        </div>
      </div>
    </div>
  );
};

export default SellerKYC;
