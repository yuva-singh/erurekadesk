import React from "react";
import CustomerHeader from "./CustomerHeader";
import { useState,useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import { TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { getCustomerAPI } from "../../Components/api/api_base_url";
import axios from "axios";

function Customer() {
  const token = sessionStorage.getItem("signature");

  const [activeRow, setActiveRow] = useState(1);
  const [customer, setcustomer] = useState([]);

  const getCustomer = async () => {
    try {
      const getcustomerdata = await axios.get(`${getCustomerAPI}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const data = await getcustomerdata.data;
      setcustomer(data);
      console.log(customer);
    } catch (error) {
      console.log(error);
      alert("invalid credentials");
    }
  };

useEffect(() => {
  getCustomer();
  }, []);
  const handleClick = (RowNumber) => {
    getCustomer(RowNumber);
  };
  return (
    <>
      <CustomerHeader />
      <div className="container-fluid backgroundColorLight">
        <div className="row justify-content-center">
          <div className="col-lg-11" style={{ overflow: "auto" }}>
            <div className="d-flex justify-content-between my-2 text-end">
              <div style={{ fontSize: "24px", fontWeight: "500" }}>
                Customers
              </div>
              <div>
                <button
                  className="secondary-button secondary-button:hover mx-2"
                  style={{
                    height: "37px",
                    width: "137px",
                    fontWeight: "500",
                    fontSize: "12px",
                    padding: "3px, 19px, 3px, 19px",
                  }}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal4"
                >
                  import/Export
                </button>
                <button
                 className="primary-button primary-button:hover"
                 style={{
                   height: "37px",
                   width: "137px",
                   fontWeight: "500",
                   fontSize: "12px",
                   padding: "3px, 19px, 3px, 19px",
                 }}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Add customer
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-11" style={{ overflow: "auto" }}>
            <div className="bg-white py-1 border rounded-top">
              <div className="d-flex my-2">
                <div className="">
                  <div
                    className={
                      activeRow === 1
                        ? "btn-btn highlight-underline"
                        : "btn-btn"
                    }
                    style={{
                      fontSize: "12px",
                      fontWeight: "400",
                      cursor: "pointer",
                    }}
                    onClick={() => handleClick(1)}
                  >
                    All
                  </div>
                </div>
                <div className="">
                  <div
                    className={
                      activeRow === 2
                        ? "btn-btn highlight-underline"
                        : "btn-btn"
                    }
                    style={{
                      fontSize: "12px",
                      fontWeight: "400",
                      cursor: "pointer",
                    }}
                    onClick={() => handleClick(2)}
                  >
                    Has Orders
                  </div>
                </div>
                <div className="">
                  <div
                    className={
                      activeRow === 3
                        ? "btn-btn highlight-underline"
                        : "btn-btn"
                    }
                    style={{
                      fontSize: "12px",
                      fontWeight: "400",
                      cursor: "pointer",
                    }}
                    onClick={() => handleClick(3)}
                  >
                    Blacklisted
                  </div>
                </div>
                <div className="">
                  <div
                    className={
                      activeRow === 4
                        ? "btn-btn highlight-underline"
                        : "btn-btn"
                    }
                    style={{
                      fontSize: "12px",
                      fontWeight: "400",
                      cursor: "pointer",
                    }}
                    onClick={() => handleClick(4)}
                  >
                    Deleted
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-11"
            style={{
              display: activeRow === 1 ? "block" : "none",
            }}
          >
            <div className="border border-top-0" style={{ overflow: "auto" }}>
              <table className="table">
                <thead>
                  <tr
                    style={{ fontSize: "13px", fontWeight: "500" }}
                    className="table-light"
                  >
                    <td >
                      <input type="checkbox" />
                    </td>
                    <td > Name</td>
                    <td >Phone Number</td>
                    <td >Location</td>
                    <td >Total Orders</td>
                    <td >Email Address</td>
                    <td >Action</td>
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
              <div className="row justify-content-center">
                <div className="col-lg-3 mb-2">
                  <div>
                    <div>
                      <Stack spacing={2}>
                        <Pagination
                          count={3}
                          variant="outlined"
                          color="warning"
                        />
                      </Stack>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-11"
            style={{
              display: activeRow === 2 ? "block" : "none",
            }}
          >
            <div className="border border-top-0" style={{ overflow: "auto" }}>
              <table className="table table-hover table-bordered">
                <thead>
                  <tr
                    style={{ fontSize: "13px", fontWeight: "500" }}
                    className="table-light"
                  >
                    <td >
                      <input type="checkbox" />
                    </td>
                    <td >Name</td>
                    <td >Phone Number</td>
                    <td >Location</td>
                    <td >Total Orders</td>
                    <td >Email Address</td>
                    <td >Action</td>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 10 }).map((_, index) => (
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
              <div className="row justify-content-center">
                <div className="col-lg-3 mb-2">
                  <div>
                    <div>
                      <Stack spacing={2}>
                        <Pagination
                          count={3}
                          variant="outlined"
                          color="warning"
                        />
                      </Stack>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-11"
            style={{
              display: activeRow === 3 ? "block" : "none",
            }}
          >
            <div className="border border-top-0" style={{ overflow: "auto" }}>
              <table className="table table-hover table-bordered">
                <thead>
                  <tr
                    style={{ fontSize: "13px", fontWeight: "500" }}
                    className="table-light"
                  >
                    <td >
                      <input type="checkbox" />
                    </td>
                    <td >Name</td>
                    <td >Phone Number</td>
                    <td >Location</td>
                    <td >Total Orders</td>
                    <td >Email Address</td>
                    <td >Action</td>
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
              <div className="row justify-content-center">
                <div className="col-lg-3 mb-2">
                  <div>
                    <div>
                      <Stack spacing={2}>
                        <Pagination
                          count={3}
                          variant="outlined"
                          color="warning"
                        />
                      </Stack>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-11"
            style={{
              display: activeRow === 4 ? "block" : "none",
            }}
          >
            <div className="border border-top-0" style={{ overflow: "auto" }}>
              <table className="table table-hover table-bordered">
                <thead>
                  <tr
                    style={{ fontSize: "13px", fontWeight: "500" }}
                    className="table-light"
                  >
                    <td >
                      <input type="checkbox" />
                    </td>
                    <td >Name</td>
                    <td >Phone Number</td>
                    <td >Location</td>
                    <td >Total Orders</td>
                    <td >Email Address</td>
                    <td >Action</td>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 20 }).map((_, index) => (
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
              <div className="row justify-content-center">
                <div className="col-lg-3 mb-2">
                  <div>
                    <div>
                      <Stack spacing={2}>
                        <Pagination
                          count={3}
                          variant="outlined"
                          color="warning"
                        />
                      </Stack>
                    </div>
                  </div>
                </div>
              </div>
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
                }}>Add Customer</button>
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
                delete
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
    </>
  );
}

export default Customer;
