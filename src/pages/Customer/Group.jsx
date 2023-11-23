import React from "react";
import CustomerHeader from "./CustomerHeader";
import { TextField } from "@mui/material";

function Group() {
  return (
    <>
      <CustomerHeader />
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="d-flex justify-content-between my-2 text-end">
              <div style={{ fontSize: "24px", fontWeight: "500" }}>Groups</div>
              <div>
                <button
                  className="Button-Secondary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Create Group
                </button>
              </div>
            </div>
            <div className="row">
               {Array.from({length:5}).map(()=>(
                <div className="col-lg-6 my-2">
                <div className="border p-2 rounded d-flex justify-content-between onboarding_hover">
                  <div
                    style={{ fontSize: "16px", fontWeight: "500" }}
                    className="content-center"
                  >
                    Regular Customer
                  </div>
                  <button className="button-6 content-center">
                    <span style={{ fontSize: "23px", fontWeight: "500" }} className="px-2">
                      {" "}
                      7
                    </span> 
                    {" "} customer
                  </button>
                </div>
              </div>
               ))}
            </div>
          </div>
        </div>
      </div>
      {/* add create_group */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Add Outlet
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="form-group my-3">
                <label
                  htmlFor=""
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "15px",
                  }}
                >
                  Name of Outlet
                </label>
                <TextField
                  color="warning"
                  id="outlined-basic"
                  fullWidth
                  placeholder=""
                  variant="outlined"
                  size="small"
                />
              </div>
            </div>
            <div className="modal-footer justify-content-between">
              <button
                type="button"
                className="outline-button"
                data-bs-dismiss="modal"
              >
                Delete
              </button>
              <button className="Button">Save Outlet</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Group;
