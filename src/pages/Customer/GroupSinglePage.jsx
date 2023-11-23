import React from 'react'
import CustomerHeader from './CustomerHeader';
import { Link } from 'react-router-dom';
import { TextField } from '@mui/material';

function GroupSinglePage() {
  return (
    <>
    <CustomerHeader />
      <div className="container-fluid backgroundColorLight">
        <div className="row justify-content-center">
          <div className="col-lg-11" style={{ overflow: "auto" }}>
            <div className="d-flex justify-content-between my-2 text-end">
              <div style={{ fontSize: "24px", fontWeight: "500" }}>
              <div style={{ fontSize: "13px", fontWeight: "400" }} className='text-start'>
              <Link to="/">
                {" "}
                <span style={{ color: "#187A87" }}>Customers</span>
              </Link>
              <Link to="/">
                {" "}
                <span style={{ color: "#187A87" }}>/Customers</span>
              </Link>
              <Link to=""> /Regular customers</Link>
            </div>
              <div className='text-start'>Regular customers</div>
              </div>
              <div>
              <button
                  className="Button-Secondary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModalEdit"
                >
                  Edit Group
                </button>
                <button
                  className="Button-Secondary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal4"
                >
                  import/Export
                </button>
                <button
                  className="Button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Add customer
                </button>
              </div>
            </div>
          </div>
          <div
            className="col-lg-11"
          >
            <div className="border border-top-0" style={{ overflow: "auto" }}>
              <table className="table">
                <thead>
                  <tr
                    style={{ fontSize: "13px", fontWeight: "500" }}
                    className="table-light"
                  >
                    <td scope="col">
                      <input type="checkbox" />
                    </td>
                    <td scope="col"> Name</td>
                    <td scope="col">Phone Number</td>
                    <td scope="col">Location</td>
                    <td scope="col">Total Orders</td>
                    <td scope="col">Email Address</td>
                    <td scope="col">Action</td>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 11 }).map((_, index) => (
                    <tr style={{ fontSize: "13px" }}>
                      <th scope="row">
                        <input type="checkbox" />
                      </th>
                      <td>
                        {" "}
                        <Link to="/customerProfile">
                          {" "}
                          <span style={{ color: "#187A87", fontWeight: "500" }}>
                            Amit Kumar
                          </span>
                        </Link>
                      </td>
                      <td>Developer</td>
                      <td>8700282172</td>
                      <td>Developer</td>
                      <td>ak7280032@gmail.com</td>
                      <td
                        style={{
                          color: "#f17300",
                          textDecoration: "underline",
                          cursor: "pointer",
                        }}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal2"
                      >
                        Edit
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
             
            </div>
          </div>
        </div>
      </div>
      {/* add customer */}
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
                Add Customer
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
                  Phone Number
                </label>
                <TextField
                  type="number"
                  color="warning"
                  id="outlined-basic"
                  fullWidth
                  placeholder=""
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
                  Email Address
                </label>
                <TextField
                  type="email"
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
                className="outline-button"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button className="Button">Add Customer</button>
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
                Edit Customer
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
                  Phone Number
                </label>
                <TextField
                  type="number"
                  color="warning"
                  id="outlined-basic"
                  fullWidth
                  placeholder=""
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
                  Email Address
                </label>
                <TextField
                  type="email"
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
                className="outline-button"
                data-bs-dismiss="modal"
              >
                delete
              </button>
              <button className="Button">Add Customer</button>
            </div>
          </div>
        </div>
      </div>
       {/* Edit group */}
       <div
        className="modal fade"
        id="exampleModalEdit"
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
                  type="number"
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
                className="outline-button"
                data-bs-dismiss="modal"
              >
                delete Group
              </button>
              <button className="Button">Add Customer</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GroupSinglePage