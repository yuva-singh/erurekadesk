import React from "react";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";

function RegisterForm() {
  return (
    <div className="container-fluid">
      <div className="row py-0 my-0 justify-content-center">
        <div className="col-lg-4  px-4 py-5 position-relative">
          <div>
            <form action="">
              <text style={{ fontSize: "20px", fontWeight: "500" }}>
                Feedback Form
              </text>
              <div className="my-4">
                <TextField
                  color="warning"
                  id="outlined-basic"
                  fullWidth
                  label="Full Name"
                  variant="outlined"
                />
              </div>
              <div className="my-4">
                <TextField
                  color="warning"
                  id="outlined-basic"
                  fullWidth
                  type="number"
                  label="Mobile Number"
                  variant="outlined"
                />
              </div>
              <div className="my-4">
                <TextField
                  color="warning"
                  id="outlined-basic"
                  fullWidth
                  type="email"
                  label="Rating"
                  variant="outlined"
                />
              </div>
              <div className="my-4">
                <TextField
                  color="warning"
                  id="outlined-basic"
                  fullWidth
                  type="address"
                  label="Experience"
                  variant="outlined"
                />
              </div>
              <div className="my-4">
                <TextField
                  color="warning"
                  id="outlined-basic"
                  fullWidth
                  type="number"
                  label="Improvement Point"
                  variant="outlined"
                />
              </div>
              <div className="d-flex">
                <div className="form-check">
                  <button
                    type="button"
                    className="primary-button primary-button:hover"
                    style={{
                      height: "37px",
                      width: "137px",
                      fontWeight: "500",
                      fontSize: "12px",
                      padding: "3px, 19px, 3px, 19px",
                    }}
                  >
                    <Link to="/chooseTemplate" className="text-white">
                      Get Started
                    </Link>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
