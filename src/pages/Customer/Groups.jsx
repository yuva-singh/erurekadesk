import React from 'react'
import CustomerHeader from './CustomerHeader';
import { Link } from 'react-router-dom';
import { TextField } from '@mui/material';


function Groups() {
    const groups = [
        {
          id: 1,
          RoleName: "Regular",
          users: "Customers(10)",
        },
        {
          id: 2,
          RoleName: "Regular ",
          users: "Customers(20)",
        },
        {
          id: 3,
          RoleName: "Regular ",
          users: "Customers(20)",
        },
        {
          id: 4,
          RoleName: "Regular ",
          users: "Customers(20)",
        },
      ];
  return (
    <div className="">
      <CustomerHeader />
      <div
        className="container-fluid"
        style={{ height: "89vh", overflow: "auto" }}
      >
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="d-flex justify-content-between my-2">
              <div style={{ fontSize: "24px", fontWeight: "500" }}>Groups</div>
              <div>
                <button className="primary-button primary-button:hover"
                style={{
                  height: "37px",
                  width: "137px",
                  fontWeight: "500",
                  fontSize: "12px",
                  padding: "3px, 19px, 3px, 19px",
                }}  data-bs-toggle="modal"
                      data-bs-target="#exampleModal">Create Group</button>
              </div>
            </div>
            <div className="row my-1">
              {groups.map((data, index) => {
                return (
                  <div className="col-lg-4" key={data.id}>
                   
                    <div
                      className="shadow-sm p-3 rounded bg-white my-2 role_card_hover border"
                     
                    >
                      <div className="d-flex justify-content-between">
                        <h6 style={{ fontSize: "14px", fontWeight: "500" }}>
                        <Link to="/groupSinglePage"> {data.RoleName}  </Link>
                        </h6>
                        <h6>
                          <i className="bi bi-three-dots" data-bs-toggle="modal"
                      data-bs-target="#exampleModal2" style={{cursor:"pointer"}}></i>
                        </h6>
                      </div>
                      <div
                        style={{ fontSize: "14px", fontWeight: "400" }}
                        className="mt-3"
                      >
                        {data.users}
                      </div>
                    </div>
                  
                   
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
       {/* create group */}
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
              Create Group
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
                  Name of Group
                </label>
                <TextField
                  color="warning"
                  id="outlined-basic"
                  fullWidth
                //   placeholder="Eg: Amit"
                  size="small"
                  variant="outlined"
                />
              </div>
            </div>
            <div className="modal-footer justify-content-between">
              <button
                type="button"
                className="primary-button-outline primary-button-outline:hover"
                style={{
                  height: "37px",
                  width: "137px",
                  fontWeight: "500",
                  fontSize: "12px",
                  padding: "3px, 19px, 3px, 19px",
                }}
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button className="primary-button primary-button:hover"
                style={{
                  height: "37px",
                  width: "137px",
                  fontWeight: "500",
                  fontSize: "12px",
                  padding: "3px, 19px, 3px, 19px",
                }}>Save Group</button>
            </div>
          </div>
        </div>
      </div>
      {/* Edit customer */}
      <div
        className="modal fade"
        id="exampleModal2"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
         <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Group
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
                  Name
                </label>
                <TextField
                  color="warning"
                  id="outlined-basic"
                  fullWidth
                  placeholder="Eg: Amit"
                  size="small"
                  variant="outlined"
                />
              </div>

              <div className="form-group my-3">
                <label
                  htmlFor=""
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "15px",
                  }}
                >
                 Add Customer
                </label>
                <TextField
                  type="text"
                  color="warning"
                  id="outlined-basic"
                  fullWidth
                  placeholder=""
                  size="small"
                  variant="outlined"
                />
              </div>
            </div>
            <div className="modal-footer justify-content-between">
              <button
                type="button"
                className="primary-button-outline primary-button-outline:hover"
                style={{
                  height: "37px",
                  width: "137px",
                  fontWeight: "500",
                  fontSize: "12px",
                  padding: "3px, 19px, 3px, 19px",
                }}
                data-bs-dismiss="modal"
              >
                delete Group
              </button>
              <button className="primary-button primary-button:hover"
                style={{
                  height: "37px",
                  width: "137px",
                  fontWeight: "500",
                  fontSize: "12px",
                  padding: "3px, 19px, 3px, 19px",
                }}>Add Customer</button>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default Groups